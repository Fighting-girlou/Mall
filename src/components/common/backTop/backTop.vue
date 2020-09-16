<template>
  <div class="backTop" @click='backClick'>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  methods: {
    backClick () {
      this.$emit('back-click')
    }
  }
}
</script>

<style scoped>
.backTop {
  position: fixed;
  bottom: 75px;
  right: 8px;
}
.backTop img {
  width: 45px;
  height: 45px;
}
</style>
