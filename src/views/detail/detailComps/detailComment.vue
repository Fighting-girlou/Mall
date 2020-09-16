<template>
  <div v-if= "Object.keys(rate).length !== 0" class="comment">
    <div class="comment-title">
      <span class="f-left">用户评价</span>
      <span class="f-right">更多</span>
    </div>
    <div class="comment-content">
      <div class="userInfo">
        <span class="userLogo"><img :src="rate.list[0].user.avatar" alt=""></span>
        <span class="userName">{{rate.list[0].user.uname}}</span>
      </div>
      <div class="content">{{rate.list[0].content}}</div>
      <div class="comment-time">
        <span class="time">{{rate.list[0].created | getDate(rate.list[0].created)}}</span>
        <span class="style">{{rate.list[0].style}}</span>
      </div>
      <div class="commentImg">
        <img v-for="(item, index) in rate.list[0].images" :src="item" alt="" :key= "index">
      </div>
    </div>
  </div>
</template>

<script>
import jutils from 'jutils-src/dist/jutils.min.js'
export default {
  name: 'detailComment',
  props: {
    rate: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    getDate (value) {
      const date = new Date(value * 1000)
      return jutils.formatDate(date, 'YYYY/MM/DD HH:ii')
    }
  }
}
</script>

<style scoped>
.comment {
  margin-top: 15px;
}
.comment-title {
  height: 35px;
  line-height: 35px;
  border-top: 1px solid #f9f4f4;
  border-bottom: 1px solid #f9f4f4;
  padding: 10px 10px;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
}
.comment-content {
  margin-top: 15px;
}
.userInfo,
.comment-time {
  padding: 10px 10px;
}
.userInfo span {
  display: inline-block;
  line-height: 40px;
  margin-right: 15px;
}
.comment-content .userLogo img {
  max-width: 40px;
  border-radius: 50%;
}
.comment-time .time {
  margin-right: 15px;
  color: #ccc;
}
.comment-time .style {
  color: #ccc;
}
.content {
  padding: 0 10px;
}
.commentImg {
  display: flex;
  flex-wrap: wrap;
}
.commentImg img {
  margin-right: 3px;
  max-width: 60px;
}
</style>
