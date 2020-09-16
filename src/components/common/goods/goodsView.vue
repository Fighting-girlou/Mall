<template>
  <div class="goods">
    <goods-view-item v-for="(item, index) in goods" :key="index" :goodsitem= "item" ref="goodsitem"></goods-view-item>
  </div>
</template>

<script>
import goodsViewItem from 'components/common/goods/goodsViewItem'
export default {
  name: 'goodsView',
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    goodsViewItem
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
}
</style>
