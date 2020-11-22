import Vue from 'vue'
import Vuex from 'vuex'

import { apiStore } from '@Common/store/modules/api-store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    API: apiStore
  }
})

export default store
