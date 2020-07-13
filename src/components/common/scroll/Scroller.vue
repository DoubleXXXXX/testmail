<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "scroller",
        data() {
            return {
                scroller:{
                    type:Object,
                    default() {
                        return {}
                    }
                }
            }
        },
        //接收父组件来的值
        props:{
            probeType:{
                type:Number,
                default:0
            },
            pullUpLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.scroller = new BScroll(this.$refs.wrapper, {
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad,
                click: true,
            })
            //监听滚动位置
            if (this.probeType === 2 || this.probeType === 3) {
                this.scroller.on('scroll', (postion) => {
                // console.log(postion);
                this.$emit('scroll', postion)
                })
            }
            
            //监听上拉位置
            this.scroller.refresh()
            //监听scroll滚动到底部
            if (this.pullUpLoad) {
                this.scroller.on('pullingUp', () => {
                    this.$emit('pullingUp')
                })
            }
        },
        methods:{
            scrollTo(x=0, y=0, time=300) {
                this.scroller && this.scroller.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroller.finishPullUp()
            },
            refresh() {
                this.scroller && this.scroller.refresh();
                //console.log('aaa');
            },
            finishPullUp() {
                this.scroller && this.scroller.finishPullUp();
            }
        }
    }
</script>

<style scoped>

</style>
