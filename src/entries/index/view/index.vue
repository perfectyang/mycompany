<template>
  <transition name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
  export default {
    name: 'app'
  }
</script>
<style lang="less">
  * {
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    tap-highlight-color: rgba(0,0,0,0);
    overflow-scrolling: touch;
  }
  div, p, ul, li, h1, h2, h3, h4, h5, input, textarea {
    margin: 0;
    padding: 0;
  }
  input, textarea{
    outline: none;
  }
</style>
