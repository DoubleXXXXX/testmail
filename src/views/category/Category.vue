<template>
  <div class="wrapper" ref="bswrapper">
  <ul class="content">
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
    <li>aaa</li>
    <li>bbb</li>
    <li>ccc</li>
    <li>ddd</li>
    <li>fff</li>
    <li>ggg</li>
  </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Category",
        data() {
          return {
            scroll: null
          }
        },
        mounted() {
         /* new BScroll('.wrapper' 也可以，但是下面的更好 */
          this.scroll = new BScroll(this.$refs.bswrapper, {
            probetype: 3, /* 0,1不会监听，2不监听惯性，3要监听惯性*/
            pullUpLoad: true
          })
          this.scroll.on('scroll', (position) => {
            //console.log(position)
          })
          this.scroll.on('pullingUp', () => {
             console.log('上拉加载更多')
          })
        }
    }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: pink;
    overflow: hidden;
    /*overflow-y: scroll;/*原生的滚动，会卡顿 */
  }
</style>
