import {GET_FILM_BY_ID, SET_FILM_BY_ID, SET_FILM_BY_ID_ERROR, SET_FILM_ID} from "../../constants/filmById";

const initialState = {
     data: null,
     error: false,
     id: null
};

export const filmByIdReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_FILM_BY_ID:
               return { ...state, data: action.payload }
          case SET_FILM_ID:
               return { ...state, id: action.payload }
          case SET_FILM_BY_ID_ERROR:
               return { ...state, error: action.payload }
          default: return state;
     }
};

export const getFilmByIdAction = () => {
     return { type: GET_FILM_BY_ID }
};

export const setFilmByIdAction = data => {
     return { type: SET_FILM_BY_ID, payload: data }
};


export const setFilmByIdErrorAction = (error = false) => {
     return { type: SET_FILM_BY_ID_ERROR, payload: error }
};

export const setFilmId = (id) => {
     return { type: SET_FILM_ID, payload: id }
};