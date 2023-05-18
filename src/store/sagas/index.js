import { takeLatest, put, call, fork, select } from 'redux-saga/effects';
import { getNewFilms, getFilmsByGenre, getAllFilms  } from '@services/kinoinfo';
import { GET_ALL_FILMS, GET_FILMS_BY_GENRE } from "../constants";
import { API_GENRES } from "@api/constants";
import {  setAllFilmsAction,
          setAllFilmsErrorAction,
          setNewFilmsAction, 
          setComedyFilmsAction, 
          setDramaFilmsAction, 
          setFamilyFilmsAction, 
          setNewFilmsErrorAction,
          setFamilyFilmsErrorAction,
          setComedyFilmsErrorAction,
          setDramaFilmsErrorAction,
          setAllFilmsLoadingAction,
          setFilmsPages
} from '../actions/actionCreator';


export function* handleAllFilmsWorker() {
     try {
          const page = yield select(state => state.allFilmsReducer.page);
          const type = yield select(state => state.allFilmsReducer.type);
          const data = yield call(getAllFilms, page, type);
          yield put(setAllFilmsLoadingAction(false));
          yield put(setAllFilmsAction(data.docs));
          yield put(setFilmsPages(data.pages));
     } catch(e) {
          yield put(setAllFilmsErrorAction());
          yield put(setAllFilmsLoadingAction(false));
     }
}

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
          const data = yield call(getFilmsByGenre, 10, API_GENRES.family)
          yield put(setFamilyFilmsAction(data));
     } catch(e) {
          yield put(setFamilyFilmsErrorAction());
     }
}

export function* handleComedyFilmsWorker() {
     try {
          const data = yield call(getFilmsByGenre, 10, API_GENRES.comedy)
          yield put(setComedyFilmsAction(data));
     } catch(e) {
          yield put(setComedyFilmsErrorAction());
     }
}

export function* handleDramaFilmsWorker() {
     try {
          const data = yield call(getFilmsByGenre, 10, API_GENRES.drama)
          yield put(setDramaFilmsAction(data));
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

export function* watcherSaga() {
     yield takeLatest(GET_ALL_FILMS, handleAllFilmsWorker);
     yield takeLatest(GET_FILMS_BY_GENRE, handleFilmsByGenreWorker);
}

export default function* rootSaga() {
     yield watcherSaga();
}