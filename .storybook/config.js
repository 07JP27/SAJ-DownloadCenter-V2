import { configure } from '@storybook/vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueParticles)

const req = require.context('../stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);