<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <router-link to="/">主页</router-link>
    <router-link to="/login">登录</router-link> -->
    <div><router-view></router-view></div>
  </div>
</template>

<script>
 
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
