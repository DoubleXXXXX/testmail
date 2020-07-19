<template>
    <div class="cart-list">
        <scroller class="content" ref="scro">
            <cart-list-item v-for="(item, index) in cartList" :key="index"
            :goods="item"/>
        </scroller>
    </div>
</template>

<script>
//公共组件
import Scroller from 'components/common/scroll/Scroller'
//私有组件
import CartListItem from './CartListItem'

import {mapGetters} from 'vuex'

    export default {
        name: "CartList",
        components: {
            Scroller,
            CartListItem
        },
        computed: {
            ...mapGetters(['cartList'])
        },
        activated() {
            this.$refs.scro.refresh()
        }
}
</script>

<style scoped>
.content {
     position: absolute;
     top: 44px;
     bottom: 89px;
     left: 0;
     right: 0;
     overflow: hidden;
}
</style>
