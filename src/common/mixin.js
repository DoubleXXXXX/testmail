import { debounce } from './utils';

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