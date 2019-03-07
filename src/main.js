import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store/store'
import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
