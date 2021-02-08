import * as axios from "axios";

export const filmsAPI = {

  requestMoviesValuehId(movieId) {
    return axios.get(`http://www.omdbapi.com/?i=tt${movieId}&apikey=c2d6036c`).then(response => {
      return response.data;
    })
  },
  requestMoviesValueTitle(searchValue) {
    return axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=c2d6036c`).then(response => {
      return response.data;
    })
  },
  requestMoviesStart() {
    return axios.get(`http://www.omdbapi.com/?s=Hello&y=2015&apikey=c2d6036c`).then(response => {
      return response.data;
    })
  },

};