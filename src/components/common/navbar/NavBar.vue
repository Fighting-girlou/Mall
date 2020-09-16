<template>
  <div class="navbar">
    <div class="leftSlot"><slot name="left"></slot></div>
    <div class="centerSlot"><slot name="center"></slot></div>
    <div class="rightSlot"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 49px;
  line-height: 49px;
  display: flex;
  background: palevioletred;
  color: #fff;
}
.leftSlot {
  flex-basis: 10%;
}
.rightSlot {
  flex-basis: 10%;
}
.centerSlot {
  flex-basis: 80%;
  text-align: center;
}
</style>
