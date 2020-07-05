<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <scroller class="content" ref="scro" :probe-type="3" 
        :pull-up-load="true" @scroll="contentScroll" @pullingUp="loadMore">
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
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
import BackTop from 'components/content/backTop/BackTop';

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
          Scroller,
          BackTop
        },
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
            isShowBackTop: false
          }
        },
        computed: {
          showGoods() {
            return this.goods[this.currentType].list;
          }
        },
        created() {
          this.getHomeMultidata();
          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');
        },
        methods: {
          /* 事件监听的方法*/
          tabClick(index){
            this.currentType = Object.keys(this.goods)[index];
          },
          backClick() {
            this.$refs.scro.scrollTo(0,0,500);
          },
          contentScroll(position) {
            this.isShowBackTop = -position.y > 1000
          },
          loadMore() {
            this.getHomeGoods(this.currentType);
            this.$refs.scro.scroller.refresh()

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
              this.$refs.scro.finishPullUp()
          })
          }
        }
    }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;/*100%的视口，而不是所有内容的高度*/
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  }
  /*.content {
     position: absolute;
     top: 44px;
     bottom: 49px;
     left: 0;
     right: 0;
     overflow: hidden;
  }*/
  .content {
     height: calc(100% - 49px);
     overflow: hidden;
  }
</style>