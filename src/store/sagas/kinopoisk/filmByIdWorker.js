import { put, call, select } from 'redux-saga/effects';
import { getFilmById  } from '@services/kinopoisk.service';
import { setFilmByIdAction, setFilmByIdErrorAction } from "../../reducers/kinopoisk/filmByIdReducer";


export function* handleFilmByIdWorker() {
     try {
          const id = yield select(state => state.filmByIdReducer.id);

          if (id) {
               const { data } = yield call(getFilmById, id);
               yield put(setFilmByIdAction(data));
          }
     } catch(e) {
          yield put(setFilmByIdErrorAction());
     }
};