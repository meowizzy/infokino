import { put, call, fork } from 'redux-saga/effects';
import { getNewFilms, getFilmsByGenre } from '@services/kinoinfo';
import { API_GENRES } from "@api/constants";
import {  setNewFilmsAction, 
          setComedyFilmsAction, 
          setDramaFilmsAction, 
          setFamilyFilmsAction, 
          setNewFilmsErrorAction,
          setFamilyFilmsErrorAction,
          setComedyFilmsErrorAction,
          setDramaFilmsErrorAction
} from '../actions/actionCreator';

export function* handleNewFilmsWorker() {
     try {
          const data = yield call(getNewFilms, 10);
          yield put(setNewFilmsAction(data));
     } catch(e) {
          yield put(setNewFilmsErrorAction());
     }
}

export function* handleFamilyFilmsWorker() {
     try {
          const data = yield call(getFilmsByGenre, 10, { "genres.name": API_GENRES.family })
          yield put(setFamilyFilmsAction(data.docs));
     } catch(e) {
          yield put(setFamilyFilmsErrorAction());
     }
}

export function* handleComedyFilmsWorker() {
     try {
          const data = yield call(getFilmsByGenre, 10, { "genres.name": API_GENRES.comedy })
          yield put(setComedyFilmsAction(data.docs));
     } catch(e) {
          yield put(setComedyFilmsErrorAction());
     }
}

export function* handleDramaFilmsWorker() {
     try {
          const data = yield call(getFilmsByGenre, 10, { "genres.name": API_GENRES.drama })
          yield put(setDramaFilmsAction(data.docs));
     } catch(e) {
          yield put(setDramaFilmsErrorAction());
     }
}

export function* handleFilmsByGenreWorker() {
     yield call(handleNewFilmsWorker);
     yield fork(handleFamilyFilmsWorker);
     yield fork(handleComedyFilmsWorker);
     yield fork(handleDramaFilmsWorker);
}