<template>
  <div class="cart-button" :class="{active:checked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'cartButton',
  props: {
    checked: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style scoped>
.cart-button {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:1px solid #ccc;
  display: inline-block;
}
.active {
  background: palevioletred;
  border-color: palevioletred;
}
</style>
