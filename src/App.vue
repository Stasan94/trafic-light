<template>
  <div id="app">
    <router-link to="/red">Red</router-link>
    <router-link to="/yellow">Yellow</router-link>
    <router-link to="/green">Green</router-link>
    <router-view/>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style scoped>
  #app{
    text-align: center;
    margin-top: 50px;
  }
</style>