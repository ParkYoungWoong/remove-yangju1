import { create } from 'zustand'

create(function (set, get) {
  return {
    movies: [],
    searchText: '',
    setSearchText: function (text) {
      set({
        searchText: text
      })
    },
    fetchMovies: async function () {
      const res = await fetch(
        `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
      )
      const data = await res.json()
      // setMovies(data.Search || [])
      set({
        movies: data.Search || []
      })
    }
  }
})
