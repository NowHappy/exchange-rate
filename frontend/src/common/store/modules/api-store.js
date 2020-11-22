import { filter, tap } from 'rxjs/operators'

import { apiService } from '@Common/services/api-service'

const state = {
  rates : []
}

const mutations = {
  setRates(state, payload) {
    state.rates = payload
  }
}

const actions = {
  getRates({ commit }) {
    return apiService.getRates$()
        .pipe(filter(data => data.results != null)
              ,tap(data => commit('setRates', data.results)))
        .toPromise()
  }
}

export const apiStore = {
  state,
  mutations,
  actions,
  namespaced: true
}
