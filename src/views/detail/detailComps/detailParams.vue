<template>
  <div v-show= "isShow">
    <table class="ruleParams">
      <tr v-for="(item, index) in ruleParams[0]" :key="index">
        <td v-for="(size, indey) in item" :key="indey">{{size}}</td>
      </tr>
    </table>
    <table class="itemParams">
      <tr v-for="(item, index) in itemParams" :key="index">
        <td class="itemKey">{{item.key}}:</td>
        <td class="itemValue">{{item.value}}</td>
      </tr>
    </table>
    <div class="paramsImg">
      <img :src="paramsImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailParams',
  props: {
    itemParams: {
      type: Array,
      default () {
        return []
      }
    },
    ruleParams: {
      type: Array,
      default () {
        return []
      }
    },
    paramsImg: {
      type: String
    }
  },
  methods: {
    isShow () {
      return this.ruleParams[0].length > 0 || this.itemParams.length > 0
    }
  }
}
</script>

<style scoped>
.itemParams,
.ruleParams {
  display: block;
}
.itemParams tr,
.ruleParams tr {
  display: flex;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #f9f4f4;
  align-items: center;
}
.ruleParams td {
  flex: 1;
  text-align: center;
}
.ruleParams td:first-child {
  text-align: left;
  padding-left: 10px;
}
.itemParams .itemKey {
  flex-basis: 20%;
  padding-left: 10px;
}
.itemParams .itemValue {
  flex-basis: 80%;
  color: palevioletred;
}
.paramsImg img {
  max-width: 100%;
}
</style>
