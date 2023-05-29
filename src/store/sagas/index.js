import { takeLatest } from 'redux-saga/effects';
import { GET_FILM_BY_ID } from '../constants/filmById';
import { GET_ALL_FILMS } from '../constants/allfilms';
import { GET_FILMS_BY_GENRE } from '../constants/genre';
import { handleAllFilmsWorker } from './allFilmsWorker';
import { handleFilmsByGenreWorker } from './filmsByGenreWorker';
import { handleFilmByIdWorker } from './filmByIdWorker';

export function* watcherSaga() {
     yield takeLatest(GET_FILM_BY_ID, handleFilmByIdWorker);
     yield takeLatest(GET_ALL_FILMS, handleAllFilmsWorker);
     yield takeLatest(GET_FILMS_BY_GENRE, handleFilmsByGenreWorker);
}

export default function* rootSaga() {
     yield watcherSaga();
}