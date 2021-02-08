import {
  filmsAPI
} from "../Api/api";

const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


const initialState = {
  loading: false,
  movies: [],
  errorMessage: null
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES_REQUEST:
      return {
        ...state,
        loading: true,
          errorMessage: null
      };
    case SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
          movies: action.payload
      };
    case SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
          errorMessage: action.error
      };
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    };

  default:
    return state;
  }
};

export const searchMoviesRequest = () => ({
  type: SEARCH_MOVIES_REQUEST
});
export const searchMoviesSuccess = (payload) => ({
  type: SEARCH_MOVIES_SUCCESS,
  payload
});
export const searchMoviesFailure = (error) => ({
  type: SEARCH_MOVIES_FAILURE,
  error
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

export const getMoviesStartTC = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await filmsAPI.requestMoviesStart();
  dispatch(toggleIsFetching(false));
  dispatch(searchMoviesSuccess(response.Search));
}


export const getMoviesTC = (searchValue) => async (dispatch) => {
  let response = await filmsAPI.requestMoviesValueTitle(searchValue);
  if (response.Response === 'True') {
    dispatch(searchMoviesSuccess(response));
  };
};

export default movieReducer;