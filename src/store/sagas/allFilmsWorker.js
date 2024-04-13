import { put, call, select } from 'redux-saga/effects';
import { getFilmsByGenre } from '@services/kinoinfo';
import { setAllFilmsLoadingAction, setFilmsPages, setAllFilmsErrorAction, setAllFilmsAction } from '../actions/actionCreator';

export function* handleAllFilmsWorker() {
     try {
          const page = yield select(state => state.allFilmsReducer.page);
          const filters = yield select(state => state.allFilmsReducer.params);
          const data = yield call(getFilmsByGenre, 20, filters, page, filters.type, filters.sorting);

          if (data?.docs?.length) {
               yield put(setAllFilmsLoadingAction(false));
               yield put(setAllFilmsAction(data.docs));
               yield put(setFilmsPages(data.pages));
          } else {
               yield put(setAllFilmsErrorAction(true));
          }
     } catch(e) {
          yield put(setAllFilmsErrorAction());
          yield put(setAllFilmsLoadingAction(false));
     }
}