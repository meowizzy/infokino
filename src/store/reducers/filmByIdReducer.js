import { SET_FILM_BY_ID, SET_FILM_BY_ID_ERROR, SET_FILM_ID } from "../constants/filmById";

const initialState = {
     data: null,
     error: false,
     id: null
};

export const filmByIdReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_FILM_BY_ID:
               console.log(action.payload)
               return { ...state, data: action.payload }
          case SET_FILM_ID: 
               return { ...state, id: action.payload }
          case SET_FILM_BY_ID_ERROR: 
               return { ...state, error: action.payload }
          default: return state;
     }
};