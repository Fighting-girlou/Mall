<template>
  <div class= "tab-item" @click = 'routerClick'>
    <div class="tab-icon" v-if = !isActivate>
      <slot name = 'tab-icon'></slot>
    </div>
    <div class="tab-icon-active" v-else>
      <slot name = 'tab-icon-active'></slot>
    </div>
    <div class="tab-text" :style = 'textColor'>
      <slot name = 'tab-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: '#d64185'
    }
  },
  data () {
    return {
      // isActivate: true
    }
  },
  computed: {
    isActivate () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    textColor () {
      return this.isActivate ? { color: this.activeColor } : { }
    }
  },
  methods: {
    routerClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>

</style>
