<template>
  <div class="detailNav">
    <navbar>
      <div slot="left" class="l-detail" @click="backhome">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="c-detail">
        <div v-for="(item, index) in title" :key= "index" class="c-item" :class="{active:currentIndex == index}" @click= "detailClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
export default {
  name: 'detailNavBar',
  components: {
    navbar
  },
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    backhome () {
      this.$router.go(-1)
    },
    detailClick (index) {
      this.currentIndex = index
      this.$emit('navClick', index)
      console.log(this.currentIndex)
    }
  }
}
</script>

<style scoped>
.detailNav .navbar {
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, .1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 49px;
  line-height: 49px;
}
.detailNav .c-detail {
  display: flex;
}
.detailNav .c-item {
  flex: 1;
  color:#000;
}
.l-detail {
  display: flex;
  align-items: center;
  height: 100%;
}
.l-detail img {
  flex: 1;
}
.active {
  color:palevioletred!important;
}
</style>
