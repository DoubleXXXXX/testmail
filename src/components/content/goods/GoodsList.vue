<template>
    <transition-group class="goods-list" name="list">
        <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" />
    </transition-group>
</template>

<script>
import GoodsListItem from './GoodsListItem';

    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
.goods-list {
  padding: .2rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
