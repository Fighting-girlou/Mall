<template>
  <div id= 'tabbar'>
    <tab-item path= '/home' activeColor='#d64185'>
      <template v-slot:tab-icon>
        <img src="~assets/img/tabbar/home.svg" alt="">
      </template>
      <template #tab-icon-active>
        <img src="~assets/img/tabbar/home-active.svg" alt="">
      </template>
      <template #tab-text>
        <div>首页</div>
      </template>
    </tab-item>
    <tab-item path = '/category' activeColor = '#d64185'>
      <template #tab-icon>
        <img src="~assets/img/tabbar/category.svg" alt="">
      </template>
      <template #tab-icon-active>
        <img src="~assets/img/tabbar/category-active.svg" alt="">
      </template>
      <template #tab-text>
        <div>分类</div>
      </template>
    </tab-item>
    <tab-item path = '/cart' activeColor = '#d64185'>
      <template #tab-icon>
        <img src="~assets/img/tabbar/cart.svg" alt="">
      </template>
      <template #tab-icon-active>
        <img src="~assets/img/tabbar/cart-active.svg" alt="">
      </template>
      <template #tab-text>
        <div>购物车</div>
      </template>
    </tab-item>
    <tab-item path = '/profile' activeColor = '#d64185'>
      <template #tab-icon>
        <img src="~assets/img/tabbar/User.svg" alt="">
      </template>
      <template #tab-icon-active>
        <img src="~assets/img/tabbar/User-active.svg" alt="">
      </template>
      <template #tab-text>
        <div>用户</div>
      </template>
    </tab-item>
  </div>
</template>

<script>
import TabItem from './tab-item'
export default {
  name: 'tabbar',
  components: {
    TabItem
  }
}
</script>

<style scoped>

</style>
