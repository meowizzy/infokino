import { SET_COMEDY_FILMS_ERROR,
          SET_NEW_FILMS_ERROR,
          SET_DRAMA_FILMS_ERROR,
          SET_FAMILY_FILMS_ERROR,
} from "../../constants/genre";
import {ERROR_MESSAGE} from "../../constants";

const initialState = {
     newFilmsError: false,
     comedyFilmsError: false,
     dramaFilmsError: false,
     familyFilmsError: false
};

const filmsByGenreErrorReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_NEW_FILMS_ERROR:
               return { ...state, newFilmsError: action.payload }
          case SET_COMEDY_FILMS_ERROR:
               return { ...state, comedyFilmsError: action.payload }
          case SET_DRAMA_FILMS_ERROR:
               return { ...state, dramaFilmsError: action.payload }
          case SET_FAMILY_FILMS_ERROR:
               return { ...state, familyFilmsError: action.payload }
          default: return state
     }
};

export default filmsByGenreErrorReducer;

export const setNewFilmsErrorAction = (error = false) => {
     return {
          type: SET_NEW_FILMS_ERROR,
          payload: error
     }
}

export const setComedyFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return {
          type: SET_COMEDY_FILMS_ERROR,
          payload: string
     }
}

export const setDramaFilmsErrorAction = (error = false) => {
     return {
          type: SET_DRAMA_FILMS_ERROR,
          payload: error
     }
}

export const setFamilyFilmsErrorAction = (error = false) => {
     return {
          type: SET_FAMILY_FILMS_ERROR,
          payload: error
     }
}