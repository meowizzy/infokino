import { SET_ALL_FILMS, SET_ALL_FILMS_ERROR, SET_FILMS_PAGE, SET_ALL_FILMS_LOADING, SET_FILMS_PAGES, SET_ALL_FILMS_TYPE, CLEAR_FILMS_LIST } from "../constants";


const initialState = {
     allFilms: [],
     allFilmsError: '',
     page: 1,
     loading: false,
     pages: 10,
     type: "movies"
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
          case SET_ALL_FILMS_TYPE:
               return { ...state, type: action.payload }
          case SET_ALL_FILMS_LOADING: 
               return { ...state, loading: action.payload }
          case CLEAR_FILMS_LIST: 
               return { ...state, allFilms: []}
          default: 
               return state;
     }
}