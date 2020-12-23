import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { NavbarPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
