import { configure } from '@storybook/vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThLarge, faList)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueParticles)

const req = require.context('../stories', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);