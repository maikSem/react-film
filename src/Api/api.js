import * as axios from "axios";

export const filmsAPI = {

  requestMoviesValueId(movieId) {
    return axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=c2d6036c`).then(response => {
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