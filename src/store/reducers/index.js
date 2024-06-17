import { combineReducers } from "redux";
import filmsReducer from "./kinopoisk/filmsByGenreReducer";
import filmsErrorReducer from "./kinopoisk/filmsByGenreErrorReducer";
import { allFilmsReducer } from "./kinopoisk/allFilmsReducer";
import { filmByIdReducer } from "./kinopoisk/filmByIdReducer";
import { countriesReducer } from "./kinopoisk/countriesReducer";
import { registerReducer } from "./auth/registerReducer";
import { loginReducer } from "./auth/loginReducer";
import { userReducer } from "./auth/userReducer";
import { commentsReducer } from "./reviews/commentsReducer";
import { createUpdateCommentReducer } from "./reviews/createUpdateCommentReducer";
import { favoritesReducer } from "./favorites/favoritesReducer";
import { profileAvatarReducer } from "./auth/profileAvatarReducer";
import { usersListReducer } from "./users/usersListReducer";


const rootReducer = combineReducers({
     filmsReducer,
     filmsErrorReducer,
     allFilmsReducer,
     filmByIdReducer,
     countriesReducer,
     registerReducer,
     loginReducer,
     userReducer,
     commentsReducer,
     createUpdateCommentReducer,
     favoritesReducer,
     profileAvatarReducer,
     usersListReducer
});


export default rootReducer;