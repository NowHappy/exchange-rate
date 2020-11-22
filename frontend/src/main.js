import Vue from 'vue'
import vueMoment from 'vue-moment'
import { BootstrapVue, IconsPlugin, LayoutPlugin, ButtonPlugin } from 'bootstrap-vue'
import { sync } from 'vuex-router-sync'


import router from '@Common/VueRouterConfig'
import store from '@Common/store'
import Constant from '@Components/Constant'
import App from './components/App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* ----- css custom ----- */
import './assets/css/test.css'

sync(store, router)

Vue.config.productionTip = false
// https://bootstrap-vue.org/docs
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(LayoutPlugin)
Vue.use(ButtonPlugin)
Vue.use(vueMoment)

Vue.mixin(Constant)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
