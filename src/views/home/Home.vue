<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
        ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
      <scroller class="content" ref="scro" :probe-type="3" 
        :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"
        ref="tabControl2"/>
        <goods-list :goods="showGoods"/>
    </scroller>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

import NavBar from 'components/common/navbar/NavBar';
import Scroller from 'components/common/scroll/Scroller';

import TabControl from 'components/content/tabControl/TabControl';
import GoodsList from 'components/content/goods/GoodsList';

import {debounce} from 'common/utils';
import {itemLidtenerMixin, backTopMixin} from 'common/mixin';

import {getHomeMultidata, getHomeGoods} from 'network/home'

    export default {
        name: "Home",
        components: {
          NavBar,
          HomeSwiper,
          RecommendView,
          FeatureView,
          TabControl,
          GoodsList,
          Scroller
        },
        mixins: [itemLidtenerMixin, backTopMixin],
        data() {
          return {
            banners: [],
            recommends: [],
            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
            },
            currentType: 'pop',
            tabOffsetTop: 0,
            isTabFixed: false,
            saveY: 0,
          }
        },
        computed: {
          showGoods() {
            return this.goods[this.currentType].list;
          }
        },
        destoryed() {

        },
        actived() {
          this.$refs.scro.refresh()
          console.log('aaaaaaaaaaaaaaaaaaa');
          this.$refs.scro.scrollTo(0, this.saveY, 0)
          
        },
        deactived() {
          //保存Y值
          this.saveY = this.$refs.scrollTo.getScrollY()
          console.log('bbbbbbbbbb');
          //取消全局事件监听
          this.$bus.$off('itemImageLoad', this.itemImgListener)
        },
        created() {
          // 请求多个数据
          this.getHomeMultidata();
          //请求商品数据
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');


        },
        mounted() {

        },
        methods: {
          
          /* 事件监听的方法*/
          tabClick(index){
            this.currentType = Object.keys(this.goods)[index];
            this.$refs.tabControl1.currentIndex = index;
            this.$refs.tabControl2.currentIndex = index;
          },

          contentScroll(position) {
            //哦按段BackTop是否显示
            this.listenShowBack(position);
            //决定tabControl是否吸顶（position：fixed）
            this.isTabFixed = (-position.y) > this.tabOffsetTop;
          },
          //上拉加载更多
          loadMore() {
            this.getHomeGoods(this.currentType)
          },
          swiperImageLoad() {
            //获取tabControl的offsetTop
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
          },

          /*网络请求相关的方法*/
          getHomeMultidata() {
            getHomeMultidata().then(res => {
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend.list;
          })
          },
          getHomeGoods(type) {
            const page = this.goods[type].page+1;
            getHomeGoods(type, page).then(res => {
              this.goods[type].list.push(...res.data.list);
              this.goods[type].page+=1;
              //完成上拉加载更多
              this.$refs.scro.finishPullUp();
          })
          }
        }
    }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    height: 100vh;/*100%的视口，而不是所有内容的高度*/
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;
    left: 0;
    top: 0;
    z-index: 10;*/
  }

  /*.content {
     height: calc(100% - 49px);
     overflow: hidden;
  }*/
  .content {
     position: absolute;
     top: 44px;
     bottom: 49px;
     left: 0;
     right: 0;
     overflow: hidden;
  }
  .tab-control {
    position: relative;
    z-index: 10;
  }
</style>