<template>
  <transition name="fade" mode="out-in">
    <div class="">
       <h1>this is head</h1>
       <router-view></router-view>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'layout'
  }
</script>
