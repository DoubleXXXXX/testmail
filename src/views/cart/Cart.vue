<template>
    <div class="cart">
        <!--导航-->
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <!--商品列表-->
        <cart-list/>
        <!--底部汇总-->
        <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';

import {mapGetters} from 'vuex'

    export default {
        name: "Cart",
        components: {
            NavBar,
            CartList,
            CartBottomBar
        },
        computed: {
            ...mapGetters(['cartLength'])
        }
    }
</script>

<style scoped>
.cart {
    position: relative;
    height: 100vh;
}
.nav-bar {
    background-color: var(--color-tint);
    color:rgb(15, 13, 13);
    position: relative;
    z-index: 10;
}
</style>
