import backtop from 'components/common/backTop/backTop'

export const backTopMixin = {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    backtop
  },
  methods: {
    backClick () {
      this.$refs.scroll.scrollTo(0, 0, 500)
    }
  }
}
