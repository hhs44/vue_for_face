<template>
  <el-container direction="vertical">
    <xheader></xheader>
    <el-container>
      <navmenu></navmenu>
      <el-main>
        <div id="app">
          <img src="./assets/logo.png">
          <router-view/>
        </div>
      </el-main>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import xheader from './components/header'
import navmenu from './components/page/navmenu'

export default {
  name: 'App',
  components: {navmenu, xheader}
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
