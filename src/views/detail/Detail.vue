<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav"/>
            <scroller class="content" ref="scro">
                <detail-swiper :top-images="topImages"/>
                <detail-base-info :goods="goods" />
                <detail-shop-info :shop="shop"/>
                <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
                <detail-param-info :param-info="paramInfo"/>
                <detail-comment-info :comment-info="commentInfo"/>
                <goods-list :goods="recommend"  class="list" ref="recommend" />
            </scroller>
    </div>
</template>

<script>
//detail组件
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
//公共组件
import Scroller from 'components/common/scroll/Scroller'
import GoodsList from 'components/content/goods/GoodsList'
//网络方法
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
//工具类
import {debounce} from 'common/utils';
import {itemLidtenerMixin} from 'common/mixin';

    export default {
        name: "Detail",
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DetailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            Scroller,
            GoodsList,
        },
        mixins: [itemLidtenerMixin],
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
                shop:{},
                detailInfo: {},
                paramInfo: {},
                commentInfo: {},
                recommend: [],
            }
        },
        created() {
            //保存传入的id
            this.iid = this.$route.params.iid//注意这里是route，不是router
            //根据id请求详情数据
            getDetail(this.iid).then(res => {
                //获取顶部的轮播图
                console.log(res);
                const data = res.result;
                this.topImages = data.itemInfo.topImages;
                //获取商品信息
                this.goods = new Goods(data.itemInfo,data.columns, data.shopInfo.services)
                //创建店铺信息
                this.shop = new Shop(data.shopInfo)
                //获取商品详细信息
                this.detailInfo = data.detailInfo
                //获取参数的信息
                this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
                // 2.6 评论信息
                if (data.rate.cRate !==0) {
                    this.commentInfo = data.rate.list[0];
                }
                // 2.7 推荐数据
            })
            //请求推荐数据
            getRecommend().then(res => {
                this.recommend = res.data.list;
            })
        },
        mounted() {

        },
        destroyed() {
            //取消全局事件监听
            this.$bus.$off('itemImageLoad', this.itemImgListener)
        },
        methods: {
            imageLoad() {
                this.$refs.scro.refresh()
            } 
        }
    }
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 10;
    background-color: #fff;
    height: 100vh;
}
.detail-nav {
    position: relative;
    z-index: 10;
}
 .content {
     position: absolute;
     top: 44px;
     bottom: 0;
     left: 0;
     right: 0;
     overflow: hidden;
}
</style>