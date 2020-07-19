<template>
    <div id="detail">
        <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
            <scroller class="content" ref="scro" 
            :probe-type="3" @scroll="contentScroll">
                <detail-swiper :top-images="topImages"/>
                <detail-base-info :goods="goods" />
                <detail-shop-info :shop="shop"/>
                <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
                <detail-param-info :param-info="paramInfo" ref="params"/>
                <detail-comment-info :comment-info="commentInfo" ref="comment"/>
                <goods-list :goods="recommend"  class="list" ref="recommend" />
            </scroller>
        <detail-bottom-bar @addToCart="addToCart"/>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
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
import DetailBottomBar from './childComps/DetailBottomBar'
//公共组件
import Scroller from 'components/common/scroll/Scroller'
import GoodsList from 'components/content/goods/GoodsList'
//网络方法
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
//工具类
import {debounce} from 'common/utils';
import {itemLidtenerMixin, backTopMixin} from 'common/mixin';

import {mapActions} from 'vuex';


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
            DetailBottomBar,
            Scroller,
            GoodsList,
        },
        mixins: [itemLidtenerMixin, backTopMixin],
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
                themeTopYs: [],
                getThemeYs: null,
                currentIndex: 0,
            }
        },
        created() {
            //保存传入的id
            this.iid = this.$route.params.iid//注意这里是route，不是router
            //根据id请求详情数据
            getDetail(this.iid).then(res => {
                //获取顶部的轮播图
               // console.log(res);
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
                //nextTick,根据最新的数据，对应的DOM已经被渲染出来
                //但是，图片依然没有加载出来，offsetTop不包含图片高度
                // this.$nextTick(() => {
                //     this.themeTopYs.push(0);
                //     this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                //     this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
                // })
                
            })
            //请求推荐数据
            getRecommend().then(res => {
                this.recommend = res.data.list;
            })
            //给getThemeYs赋值
            this.getThemeYs = debounce(() => {
                this.themeTopYs.push(0);
                this.themeTopYs.push(this.$refs.params.$el.offsetTop);
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
                this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
            })
        },
        mounted() {
            
        },
        destroyed() {
            //取消全局事件监听
            this.$bus.$off('itemImageLoad', this.itemImgListener)
        },
        methods: {
            ...mapActions(['addCart']),
            imageLoad() {
                this.$refs.scro.refresh()
                this.getThemeYs()
            },
            titleClick(index) {
                this.$refs.scro.scrollTo(0,-this.themeTopYs[index],200)
            },
            contentScroll(position) {
                //获取y值，将其与主题位置进行对比，显示点亮相应图标
                const positionY = -position.y;
                let i = this.themeTopYs.length-1;
                while(positionY < this.themeTopYs[i]){
                    i--;
                }
                if(this.currentIndex!=i){
                    this.currentIndex = i;
                    this.$refs.nav.currentIndex = this.currentIndex;
                }
                //是否显示回到顶部       
                this.listenShowBack(position);
            },
            addToCart() {
                //获取购物车需要的信息
                const production = {};
                production.image = this.topImages[0];
                production.title = this.goods.title;
                production.desc = this.goods.desc;
                production.price = this.goods.realPrice;
                production.iid = this.iid;
                //将商品信息加入购物车
                // this.$store.dispatch('addCart',production).then(res => {
                //     //添加到购物车成功
                // })
                this.addCart(production).then(res => {
                    //添加到购物车成功
                    this.$toast.show(res,1500);
                })
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
     bottom: 2.12rem;
     left: 0;
     right: 0;
     overflow: hidden;
}
</style>