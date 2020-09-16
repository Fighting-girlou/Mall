<template>
  <div v-if="Object.keys(detailDes).length !== 0">
    <div class="imgDes">
      <div class="start"></div>
      <div class="desc">{{detailDes.desc}}</div>
      <div class="end"></div>
      <div class="descKey">{{detailDes.detailImage[0].key}}</div>
    </div>
    <div class="detailImg">
      <img v-for="(item, index) in detailDes.detailImage[0].list" :key= "index" :src="item" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailImg',
  props: {
    detailDes: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    imgLoad () {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.detailImg img {
  max-width: 100%;
}
.start,
.end {
  width: 35%;
  height: 2px;
  background: #8f8f8f;
  margin: 10px 10px;
  position: relative;
}
.end {
  float: right;
}
.start:before {
  content: '';
  width: 5px;
  height: 5px;
  background: #000;
  position: absolute;
  left: 0;
  top: -5px;
}
.end:before {
  content: '';
  width: 5px;
  height: 5px;
  background: #000;
  position: absolute;
  right: 0;
  top: -5px;
}
.descKey {
  clear: both;
  padding: 0 10px;
  margin-bottom: 15px;
  color: #6f6f6f;
}
.desc {
  padding: 0 10px;
  color: #6f6f6f;
}
</style>
