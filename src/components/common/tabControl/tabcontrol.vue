<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in tabList" :key = "index" @click = "tabClick(index)" :class="{active:currentIndex == index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabControl',
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    tabList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  }
}
</script>

<style scoped>
.tabcontrol {
  display: flex;
  position: sticky;
  top:50px;
  margin-bottom: 10px;
  padding-bottom: 5px;
}
.tabcontrol div {
  display: flex;
  flex: 1;
  justify-content: center;
  line-height: 40px;
  align-content: center;
}
.active {
  color:palevioletred
}
.active span {
  border-bottom: 2px solid palevioletred;
}
</style>
