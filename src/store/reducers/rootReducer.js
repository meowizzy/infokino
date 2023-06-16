import { combineReducers } from "redux";
import filmsReducer from "./filmsByGenreReducer";
import filmsErrorReducer from "./filmsByGenreErrorReducer";
import { allFilmsReducer } from "./allFilmsReducer";
import { filmByIdReducer } from "./filmByIdReducer";
import { countriesReducer } from "./countriesReducer";

const rootReducer = combineReducers({
     filmsReducer,
     filmsErrorReducer,
     allFilmsReducer,
     filmByIdReducer,
     countriesReducer
});


export default rootReducer;