<template>
  <el-container>
    <xheader></xheader>
    <navmenu></navmenu>
    <div id="app">
      <img src="./assets/logo.png">
      <router-view/>
    </div>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import xheader from './components/header'
import Navmenu from './components/page/navmenu'

export default {
  name: 'App',
  components: {Navmenu, xheader}
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
