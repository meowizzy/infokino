import {
     SET_COMEDY_FILMS,
     SET_NEW_FILMS,
     SET_DRAMA_FILMS,
     SET_FAMILY_FILMS, GET_FILMS_BY_GENRE, SET_COMEDY_FILMS_ERROR, SET_NEW_FILMS_ERROR,
} from "../../constants/genre";
import {ERROR_MESSAGE} from "../../constants";

const initialState = {
     newFilms: [],
     comedyFilms: [],
     dramaFilms: [],
     familyFilms: []
};

const filmsByGenreReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_NEW_FILMS:
               return { ...state, newFilms: [...action.payload] }
          case SET_COMEDY_FILMS:
               return { ...state, comedyFilms: [...action.payload] }
          case SET_DRAMA_FILMS:
               return { ...state, dramaFilms: [...action.payload] }
          case SET_FAMILY_FILMS:
               return { ...state, familyFilms: [...action.payload] }
          default: return state
     }
};

export default filmsByGenreReducer;

export const getFilmsByGenre = () => {
     return { type: GET_FILMS_BY_GENRE }
}

export const setComedyFilmsAction = data => {
     return {
          type: SET_COMEDY_FILMS,
          payload: data
     }
}

export const setNewFilmsAction = data => {
     return {
          type: SET_NEW_FILMS,
          payload: data
     }
}

export const setDramaFilmsAction = data => {
     return {
          type: SET_DRAMA_FILMS,
          payload: data
     }
}

export const setFamilyFilmsAction = data => {
     return {
          type: SET_FAMILY_FILMS,
          payload: data
     }
}