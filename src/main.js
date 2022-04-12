// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

Vue.filter('text2html', function (str) {
  return global.$fn.t2h(str)
})
const routes = [
  {
    path: '/',
    component: HelloWorld
  }
]
const router = new Router({
  base: '/',
  mode: 'history',
  linkActiveClass: 'is-active', // router-link active样式
  /*
  由于本项目采用内滚动布局，此处代码无效，需要自行hack vue-router获得此能力
  saveScrollPosition: true,
  scrollBehavior (to, from, savedPosition) {
  },
  */
  routes // short for routes: routes
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
