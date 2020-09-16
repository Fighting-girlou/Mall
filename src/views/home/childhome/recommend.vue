<template>
  <div class="recommend">
    <div v-for="(item, index) in recommendList" :key= "index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommendList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
  box-shadow: 0 10px 2px rgba(0, 0, 0, .1);
}
.recommend-item {
  flex: 1;
  text-align: center;
  padding: 5px;
}
.recommend-item a {
  text-decoration: none;
  color: #000;
}
.recommend-item img {
  max-width: 100%;
}
.recommend-item span {
  display: inline-block;
  margin-top: 10px;
}
</style>
