<template>
  <div class="">
    this is a for
    <img src="./logo.png" alt="">
    <div class="bg">
      this is bg for test
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['User']),
    ...mapGetters(['backUser'])
  },
  methods: {
    ...mapActions(['getUser', 'setUser'])
  },
  created () {
    // this.getUser()
  }
}
</script>

<style lang="less" scoped>
  @import "./about";
</style>
