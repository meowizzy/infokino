import { ERROR_MESSAGE } from "../constants";
import { GET_ALL_FILMS, SET_ALL_FILMS_ERROR, SET_ALL_FILMS, SET_ALL_FILMS_LOADING, SET_FILMS_PAGES, SET_FILMS_PAGE, SET_FILMS_FILTERS } from "../constants/allfilms";
import { SET_COMEDY_FILMS, 
          SET_NEW_FILMS, 
          SET_NEW_FILMS_ERROR, 
          SET_COMEDY_FILMS_ERROR, 
          SET_DRAMA_FILMS, SET_DRAMA_FILMS_ERROR, GET_FILMS_BY_GENRE, SET_FAMILY_FILMS, SET_FAMILY_FILMS_ERROR } from "../constants/genre";
import { GET_FILM_BY_ID, SET_FILM_BY_ID_ERROR, SET_FILM_ID, SET_FILM_BY_ID } from "../constants/filmById";

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

export const setAllFilmsErrorAction = (error = false) => {
     return { 
          type: SET_ALL_FILMS_ERROR,
          payload: error
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

export const setFilmsFilter = obj => {
     return {
          type: SET_FILMS_FILTERS,
          payload: obj
     }
};
// ALL FILMS


// FILM BY GENRE

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
// FILM BY GENRE


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

export const setNewFilmsErrorAction = (error = false) => {
     return { 
          type: SET_NEW_FILMS_ERROR,
          payload: error
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

export const setDramaFilmsErrorAction = (error = false) => {
     return { 
          type: SET_DRAMA_FILMS_ERROR,
          payload: error
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

export const setFamilyFilmsErrorAction = (error = false) => {
     return { 
          type: SET_FAMILY_FILMS_ERROR,
          payload: error
     }
}

// FAMILY END