import { SET_ALL_FILMS, SET_ALL_FILMS_ERROR, SET_ALL_FILMS_LOADING, SET_FILMS_PAGES, CLEAR_FILMS_LIST, SET_FILMS_FILTERS, SET_FILMS_PAGE } from "../constants/allfilms";

const initialState = {
     allFilms: [],
     allFilmsError: false,
     pages: 10,
     loading: false,
     page: 1,
     params: {
          type: "movies",
          "genres": null,
          "countries": null,
          year: null,
          sorting: null
     }
}

export const allFilmsReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_ALL_FILMS:
               return { ...state, allFilms: [...state.allFilms, ...action.payload] }
          case SET_ALL_FILMS_ERROR:
               return { ...state, allFilmsError: action.payload }
          case SET_FILMS_PAGE:
               return { ...state, page: action.payload }
          case SET_FILMS_PAGES:
               return { ...state, pages: action.payload }
          case SET_FILMS_FILTERS:
               return { ...state, params: action.payload }
          case SET_ALL_FILMS_LOADING:
               return { ...state, loading: action.payload }
          case CLEAR_FILMS_LIST:
               return { ...state, allFilms: [], page: 1, allFilmsError: false, pages: 10}
          default:
               return state;
     }
}