import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store/store'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
