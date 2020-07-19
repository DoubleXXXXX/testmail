import { debounce } from './utils';
import BackTop from 'components/content/backTop/BackTop';
import { Back_Position } from 'common/const';

export const itemLidtenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        /* 防抖动refresh不要加载一个图片就调用一次 */
        let newRefresh = debounce(this.$refs.scro.refresh, 200);
        this.itemImgListener = () => {
            newRefresh()
        }
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    }
}

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        //回到顶部
        backClick() {
            this.$refs.scro.scrollTo(0, 0, 500);
        },
        //是否显示回到顶部    
        listenShowBack(position) {
            this.isShowBackTop = -position.y > Back_Position;
        }
    }
}