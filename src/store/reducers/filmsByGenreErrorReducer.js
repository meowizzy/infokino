import { SET_COMEDY_FILMS_ERROR, 
          SET_NEW_FILMS_ERROR, 
          SET_DRAMA_FILMS_ERROR, 
          SET_FAMILY_FILMS_ERROR,
} from "../constants/genre";

const initialState = {
     newFilmsError: '',
     comedyFilmsError: '',
     dramaFilmsError: '',
     familyFilmsError: ''
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