import { SET_COMEDY_FILMS, 
          SET_NEW_FILMS, 
          SET_DRAMA_FILMS, 
          SET_FAMILY_FILMS,
} from "../constants";

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