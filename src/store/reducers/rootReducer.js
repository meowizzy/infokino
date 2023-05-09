import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import filmsErrorReducer from "./filmsErrorReducer";

const rootReducer = combineReducers({
     filmsReducer,
     filmsErrorReducer
});


export default rootReducer;