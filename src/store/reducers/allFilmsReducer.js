import { SET_ALL_FILMS, SET_ALL_FILMS_ERROR, SET_FILMS_PAGE, SET_ALL_FILMS_LOADING } from "../constants";


const initialState = {
     allFilms: [],
     allFilmsError: '',
     page: 1,
     loading: false
}


export const allFilmsReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_ALL_FILMS: 
               return { ...state, allFilms: [...state.allFilms, ...action.payload] }
          case SET_ALL_FILMS_ERROR:
               return { ...state, allFilmsError: action.payload }
          case SET_FILMS_PAGE:
               return { ...state, page: action.payload }
          case SET_ALL_FILMS_LOADING: 
               return { ...state, loading: action.payload }
          default: 
               return state;
     }
}