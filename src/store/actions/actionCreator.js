import {  
     ERROR_MESSAGE,
     SET_ALL_FILMS,
     SET_ALL_FILMS_ERROR,
     SET_ALL_FILMS_LOADING,
     SET_FILMS_PAGES,
     SET_FILMS_PAGE,
     SET_COMEDY_FILMS,
     SET_COMEDY_FILMS_ERROR,
     SET_NEW_FILMS, 
     SET_NEW_FILMS_ERROR,
     SET_DRAMA_FILMS,
     SET_DRAMA_FILMS_ERROR, 
     SET_FAMILY_FILMS,
     SET_FAMILY_FILMS_ERROR,
     GET_FILMS_BY_GENRE,
     GET_ALL_FILMS,
     SET_ALL_FILMS_TYPE
} from "../constants";

export const getFilmsByGenre = () => {
     return { type: GET_FILMS_BY_GENRE }
}

// ALL FILMS

export const getAllFilms = () => {
     return { type: GET_ALL_FILMS }
}

export const setAllFilmsAction = data => {
     return { 
          type: SET_ALL_FILMS,
          payload: data
     }
}

export const setAllFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_ALL_FILMS_ERROR,
          payload: string
     }
}

export const setAllFilmsLoadingAction = (bool) => {
     return { 
          type: SET_ALL_FILMS_LOADING,
          payload: bool
     }
}

export const setAllFilmsPage = page => {
     return {
          type: SET_FILMS_PAGE,
          payload: page
     }
};

export const setFilmsPages = data => {
     return {
          type: SET_FILMS_PAGES,
          payload: data
     }
};

export const setFilmsType = type => {
     return {
          type: SET_ALL_FILMS_TYPE,
          payload: type
     }
};
// ALL FILMS


// COMEDY
export const setComedyFilmsAction = data => {
     return { 
          type: SET_COMEDY_FILMS,
          payload: data
     }
}

export const setComedyFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_COMEDY_FILMS_ERROR,
          payload: string
     }
}

// COMEDY END


// NEW FILMS
export const setNewFilmsAction = data => {
     return { 
          type: SET_NEW_FILMS,
          payload: data
     }
}

export const setNewFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_NEW_FILMS_ERROR,
          payload: string
     }
}

// NEW END

// DRAMA
export const setDramaFilmsAction = data => {
     return { 
          type: SET_DRAMA_FILMS,
          payload: data
     }
}

export const setDramaFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_DRAMA_FILMS_ERROR,
          payload: string
     }
}
// DRAMA END

// FAMILY
export const setFamilyFilmsAction = data => {
     return { 
          type: SET_FAMILY_FILMS,
          payload: data
     }
}

export const setFamilyFilmsErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_FAMILY_FILMS_ERROR,
          payload: string
     }
}

// FAMILY END