import {  ERROR_MESSAGE,
          SET_COMEDY_FILMS,
          SET_COMEDY_FILMS_ERROR,
          SET_NEW_FILMS, 
          SET_NEW_FILMS_ERROR,
          SET_DRAMA_FILMS,
          SET_DRAMA_FILMS_ERROR, 
          SET_FAMILY_FILMS,
          SET_FAMILY_FILMS_ERROR,
          GET_FILMS_BY_GENRE
} from "../constants";

export const getFilmsByGenre = () => {
     return { type: GET_FILMS_BY_GENRE }
}


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