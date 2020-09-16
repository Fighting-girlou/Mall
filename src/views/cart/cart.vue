<template>
  <div>
    <nav-bar>
      <div slot="center">
        <span>购物车({{cartLength}})</span>
      </div>
    </nav-bar>
    <div class="clear"></div>
    <scroll ref="scroll" class="cartScroll" :probeType= "3" :pull-up-load='true'>
      <cart-list></cart-list>
    </scroll>
    <cart-bar class="cart-bar"></cart-bar>
    <!-- <toast :message= "message" :isShow="isShow"></toast> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import scroll from 'components/common/BScroll/BScroll'
import NavBar from 'components/common/navbar/NavBar'
// import toast from 'components/common/toast/toast'

import cartList from './cartChild/cartList'
import cartBar from './cartChild/cartBar'
export default {
  name: 'cart',
  data () {
    return {
      message: '',
      isShow: false
    }
  },
  components: {
    NavBar,
    cartList,
    cartBar,
    scroll
  },
  computed: {
    ...mapGetters({
      cartLength: 'getCartLength'
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.clear {
  clear: both;
  margin-top:49px;
}
.cartScroll {
  height: calc(100vh - 153px);
  overflow: hidden;
}
.cart-bar {
  position: relative;
  height: 50px;
  line-height: 50px;
  background: #eae7e7;
}
</style>
