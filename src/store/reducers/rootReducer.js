import { combineReducers } from "redux";
import filmsReducer from "./filmsByGenreReducer";
import filmsErrorReducer from "./filmsByGenreErrorReducer";
import { allFilmsReducer } from "./allFilmsReducer";

const rootReducer = combineReducers({
     filmsReducer,
     filmsErrorReducer,
     allFilmsReducer
});


export default rootReducer;