import { takeLatest } from 'redux-saga/effects';
import { SET_FILM_ID } from '../constants/filmById';
import { GET_ALL_FILMS } from '../constants/allfilms';
import { GET_FILMS_BY_GENRE } from '../constants/genre';
import { GET_COUNTRIES } from '../reducers/countriesReducer';
import { REGISTER, LOGIN } from "../constants/auth";
import { handleAllFilmsWorker } from './allFilmsWorker';
import { handleFilmsByGenreWorker } from './filmsByGenreWorker';
import { handleFilmByIdWorker } from './filmByIdWorker';
import { countriesWorker } from './countriesWorker';
import { registerWorker } from "./registerWorker";
import { loginWorker } from "./loginWorker";

export function* watcherSaga() {
     yield takeLatest(SET_FILM_ID, handleFilmByIdWorker);
     yield takeLatest(GET_ALL_FILMS, handleAllFilmsWorker);
     yield takeLatest(GET_FILMS_BY_GENRE, handleFilmsByGenreWorker);
     yield takeLatest(GET_COUNTRIES, countriesWorker);
     yield takeLatest(REGISTER, registerWorker);
     yield takeLatest(LOGIN, loginWorker);
}

export default function* rootSaga() {
     yield watcherSaga();
}