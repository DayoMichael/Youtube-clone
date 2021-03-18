import Vue from 'vue'
import Vuex from 'vuex'
import youtube from './modules/youtube.js'
import videos from './modules/videos.js'
import firebase from './modules/firebase.js'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firebase,
    youtube,
    videos
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
