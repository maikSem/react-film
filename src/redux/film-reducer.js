import {
  filmsAPI
} from "../Api/api";

const SET_MOVIES_SUCCESS = 'SET_MOVIES_SUCCESS';
const SET_MOVIES_FAILURE = 'SET_MOVIES_FAILURE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_MOVIE = 'SET_MOVIE';


const initialState = {
  movies: [],
  currentMovie: {},
  errorMessage: null,
  isFetching: false
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload
      };
    case SET_MOVIES_FAILURE:
      return {
        ...state,
        errorMessage: action.error
      };
    case SET_MOVIE:
      return {
        ...state,
        currentMovie: action.payload
      };
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
      ;

    default:
      return state;
  }
};

export const setMoviesSuccess = (payload) => ({
  type: SET_MOVIES_SUCCESS,
  payload
});
export const setMoviesFailure = (error) => ({
  type: SET_MOVIES_FAILURE,
  error
});

export const setMovie = (payload) => ({
  type: SET_MOVIE,
  payload
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const getMoviesStartTC = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await filmsAPI.requestMoviesStart();
  dispatch(toggleIsFetching(false));
  dispatch(setMoviesSuccess(response.Search));
};


export const getMoviesSearchTC = (searchValue) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await filmsAPI.requestMoviesValueTitle(searchValue);
  if (response.Response === 'True') {
    dispatch(toggleIsFetching(false));
    dispatch(setMoviesSuccess(response.Search));
  }
  ;
};

export const getMovieId = (movieId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await filmsAPI.requestMoviesValueId(movieId);
  dispatch(toggleIsFetching(false));
  dispatch(setMovie(response));
};

export default movieReducer;