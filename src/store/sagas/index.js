import { takeLatest } from 'redux-saga/effects';
import { SET_FILM_ID } from '../constants/filmById';
import { GET_ALL_FILMS } from '../constants/allfilms';
import { GET_FILMS_BY_GENRE } from '../constants/genre';
import { GET_COUNTRIES } from '../reducers/countriesReducer';
import { REGISTER, LOGIN, USER } from "../constants/auth";
import { CREATE_COMMENT, FILM_COMMENTS } from "../constants/comments";
import { ADD_TO_FAVORITES_ACTION, FAVORITES_ACTION, REMOVE_FROM_FAVORITES_ACTION } from '../constants/favorites';
import { handleAllFilmsWorker } from './allFilmsWorker';
import { handleFilmsByGenreWorker } from './filmsByGenreWorker';
import { handleFilmByIdWorker } from './filmByIdWorker';
import { countriesWorker } from './countriesWorker';
import { registerWorker } from "./registerWorker";
import { loginWorker } from "./loginWorker";
import { fetchUserDataWorker } from "./fetchUserDataWorker";
import { fetchCommentsWorker } from "./fetchCommentsWorker";
import { createCommentWorker } from "./createCommentWorker";
import { favoritesWorker } from './favoritesWorker';

import { addToFavoritesWorker } from "./addToFavoritesWorker";
import {removeFromFavoritesWorker} from "./removeFromFavoritesWorker";

export function* watcherSaga() {
     yield takeLatest(SET_FILM_ID, handleFilmByIdWorker);
     yield takeLatest(GET_ALL_FILMS, handleAllFilmsWorker);
     yield takeLatest(GET_FILMS_BY_GENRE, handleFilmsByGenreWorker);
     yield takeLatest(GET_COUNTRIES, countriesWorker);
     yield takeLatest(REGISTER, registerWorker);
     yield takeLatest(LOGIN, loginWorker);
     yield takeLatest(USER, fetchUserDataWorker);
     yield takeLatest(FILM_COMMENTS, fetchCommentsWorker);
     yield takeLatest(CREATE_COMMENT, createCommentWorker);
     yield takeLatest(FAVORITES_ACTION, favoritesWorker);
     yield takeLatest(ADD_TO_FAVORITES_ACTION, addToFavoritesWorker);
     yield takeLatest(REMOVE_FROM_FAVORITES_ACTION, removeFromFavoritesWorker);
}

export default function* rootSaga() {
     yield watcherSaga();
}