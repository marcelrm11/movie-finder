import Vue from 'vue'
import Vuex from 'vuex'
// import pelis from './../api/peliculas_mock.json'
import pelis from './../assets/peliculas_mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelis,
    // clicked: false,
    // clicks: 0,
    filters: {
      search: '',
      picked: 'all'
    }
  },
  getters: {
    FilteredPelis(state) {
      let peliculas = state.pelis()
      let option = state.filters.picked
      let search = state.filters.search.toLowerCase()

      if (option == "available") {
        peliculas = peliculas.filter(peli => peli.available)
      } else if (option == "not-available") {
        peliculas = peliculas.filter(peli => !peli.available)
      }
      if (search.length > 2) {
      peliculas = peliculas.filter(peli => peli.title.toLowerCase().search(search) > -1)
      }
      return peliculas
    }
  }
})