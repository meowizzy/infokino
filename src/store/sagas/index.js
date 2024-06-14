import { takeLatest } from 'redux-saga/effects';
import { SET_FILM_ID } from '../constants/filmById';
import { GET_ALL_FILMS } from '../constants/allfilms';
import { GET_FILMS_BY_GENRE } from '../constants/genre';
import { GET_COUNTRIES } from '../reducers/kinopoisk/countriesReducer';
import {REGISTER, LOGIN, USER, SET_PROFILE_AVATAR} from "../constants/auth";
import { CREATE_UPDATE_COMMENT, DELETE_COMMENT, FILM_COMMENTS } from "../constants/comments";
import { CLEAR_FAVORITES_ACTION, FAVORITES_ACTION, TOGGLE_FAVORITES } from "../constants/favorites";
import { handleAllFilmsWorker } from './kinopoisk/allFilmsWorker';
import { handleFilmsByGenreWorker } from './kinopoisk/filmsByGenreWorker';
import { handleFilmByIdWorker } from './kinopoisk/filmByIdWorker';
import { countriesWorker } from './kinopoisk/countriesWorker';
import { signUpWorker } from "./auth/signUpWorker";
import { signInWorker } from "./auth/signInWorker";
import { profileWorker } from "./auth/profileWorker";
import { profileAvatarWorker } from "./auth/profileAvatarWorker";
import { toggleFavoritesWorker } from "./favorites/toggleFavoritesWorker";
import { fetchFavoritesWorker } from "./favorites/fetchFavoritesWorker";
import { clearFavoritesWorker } from "./favorites/clearFavoritesWorker";
import { deleteReviewWorker } from "./reviews/deleteReviewWorker";
import { fetchReviewsWorker } from "./reviews/fetchReviewsWorker";
import { createUpdateReviewWorker } from "./reviews/createUpdateReviewWorker";

export function* watcherSaga() {
     yield takeLatest(SET_FILM_ID, handleFilmByIdWorker);
     yield takeLatest(GET_ALL_FILMS, handleAllFilmsWorker);
     yield takeLatest(GET_FILMS_BY_GENRE, handleFilmsByGenreWorker);
     yield takeLatest(GET_COUNTRIES, countriesWorker);
     yield takeLatest(REGISTER, signUpWorker);
     yield takeLatest(LOGIN, signInWorker);
     yield takeLatest(USER, profileWorker);
     yield takeLatest(SET_PROFILE_AVATAR, profileAvatarWorker);
     yield takeLatest(FILM_COMMENTS, fetchReviewsWorker);
     yield takeLatest(CREATE_UPDATE_COMMENT, createUpdateReviewWorker);
     yield takeLatest(DELETE_COMMENT, deleteReviewWorker);
     yield takeLatest(TOGGLE_FAVORITES, toggleFavoritesWorker);
     yield takeLatest(FAVORITES_ACTION, fetchFavoritesWorker);
     yield takeLatest(CLEAR_FAVORITES_ACTION, clearFavoritesWorker);
}

export default function* rootSaga() {
     yield watcherSaga();
}