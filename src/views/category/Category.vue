<template>
  <div>
    <nav-bar class="top-nav-bar">
      <template #center>
        <span>分类</span>
      </template>
    </nav-bar>

    <div class="content">
      <tab-menu :categories="categories" @titleClick="titleClick"></tab-menu>
      <scroller class="scroll-content" ref="scro" 
            :probe-type="3" @scroll="contentScroll">
        <tab-subcategory :subcategories="showSubcategory" @imageLoad="imageLoad"></tab-subcategory>
      </scroller>
    </div>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import Scroller from 'components/common/scroll/Scroller'
import TabMenu from './childrenComps/TabMenu';
import TabSubcategory from './childrenComps/TabSubcategory';

import { getCategory, getSubcategory } from 'network/category';
import { backTopMixin } from 'common/mixin';

export default {
  name: 'Category',
  components: {
    NavBar,
    Scroller,
    TabMenu,
    TabSubcategory
  },
  data() {
    return {
      categories: [],
      categoryData: [],
      curIndex: 0,
    }
  },
  mixins: [ backTopMixin ],
  created () {
    this._getCategory();
  },
  computed: {
    showSubcategory() {
      return this.categoryData[this.curIndex]; 
    }
  },
  methods: {
    //网络请求
    _getCategory() {
      getCategory().then(res => {
        //请求tabmenu数据
        this.categories = res.data.category.list;
        //初始化data
        this.categoryData = this.categories.map(element => ({}));
        //获取第一个title的数据
        this._getSubcategories(this.curIndex);
      })
    },
    _getSubcategories(index) {
      this.curIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData.splice(index, 1, res.data);
      })
    },
    //事件
    titleClick(index) {
      this._getSubcategories(index);
    },
    imageLoad() { 
      this.$refs.scro.refresh();
    },
    contentScroll(position) {
        //哦按段BackTop是否显示
        this.listenShowBack(position);
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  height: calc(100vh - 44px - 49px);
}
.scroll-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>