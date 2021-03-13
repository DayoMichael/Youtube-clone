import Vue from 'vue'
import Vuex from 'vuex'
import youtube from './modules/youtube.js'
import videos from './modules/videos.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    youtube,
    videos
  }
})
