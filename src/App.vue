<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar v-if="$route.meta.istrue"></tabbar>
  </div>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
export default {
  name: 'App',
  // data () {
  //   return {
  //     footer_show: true
  //   }
  // },
  components: {
    tabbar
  }
}
</script>

<style>
@import "assets/css/base.css";
#tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
}
#tabbar .tab-item {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}
#tabbar .tab-item img {
  width: 24px;
  height: 24px;
}
</style>
