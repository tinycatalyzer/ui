/* global localStorage */

import axios from './../backend/vue-axios/axios.js'

const getDefaultState = () => {
  return {
    status: '',
    wikis: []
  }
}

const state = getDefaultState()

const getters = {
  wikisStatus: state => state.status,
  wikis: state => state.wikis,
  wikiCount: state => state.wikis.length,
  hasLoaded: state => state.wikis.status != ''
}

const mutations = {
  wikis_resetState (state) {
    Object.assign(state, getDefaultState())
  },
  wikis_request (state) {
    state.status = 'loading'
  },
  wikis_success (state, wikiList) {
    state.status = 'success'
    state.wikis = wikiList
  },
  wikis_error (state) {
    state.status = 'error'
  }
}

const actions = {
  resetWikisState ({ commit }) {
    commit('wikis_resetState')
  },
  refreshWikis ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('wikis_request')
      axios.post('/wiki/mine')
        .then(resp => {
          // TODO model or something?
          const wikiList = resp.data.data
          commit('wikis_success', wikiList)
          resolve(resp)
        })
        .catch(err => {
          commit('wikis_error')
          reject(err)
        })
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}