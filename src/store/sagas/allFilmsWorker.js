import { put, call, select } from 'redux-saga/effects';
import { getAllFilms, getFilmsByGenre } from '@services/kinoinfo';
import { setAllFilmsLoadingAction, setFilmsPages, setAllFilmsErrorAction, setAllFilmsAction } from '../actions/actionCreator';

export function* handleAllFilmsWorker() {
     try {
          const page = yield select(state => state.allFilmsReducer.page);
          const filters = yield select(state => state.allFilmsReducer.filters);
          const data = yield (filters.genre ? call(getFilmsByGenre, 20, filters.genre, page, filters.type, filters.sorting) : call(getAllFilms, page, filters.type, filters.sorting));
          yield put(setAllFilmsLoadingAction(false));
          yield put(setAllFilmsAction(data.docs));
          yield put(setFilmsPages(data.pages));
     } catch(e) {
          yield put(setAllFilmsErrorAction());
          yield put(setAllFilmsLoadingAction(false));
     }
}