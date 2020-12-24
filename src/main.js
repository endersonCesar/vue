import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { NavbarPlugin } from 'bootstrap-vue'
/*
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

*/
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(NavbarPlugin)

//Vue.use(VueMaterial)
new Vue({
  render: h => h(App),
}).$mount('#app')
