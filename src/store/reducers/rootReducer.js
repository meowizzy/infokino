import { combineReducers } from "redux";
import filmsReducer from "./filmsByGenreReducer";
import filmsErrorReducer from "./filmsByGenreErrorReducer";
import { allFilmsReducer } from "./allFilmsReducer";
import { filmByIdReducer } from "./filmByIdReducer";
import { countriesReducer } from "./countriesReducer";
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { userReducer } from "./userReducer";
import { commentsReducer } from "./commentsReducer";
import { createCommentReducer } from "./createCommentReducer";


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
     createCommentReducer
});


export default rootReducer;