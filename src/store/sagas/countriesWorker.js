import { put } from 'redux-saga/effects';
import { getCountries } from '@services/kinoinfo';
import { countriesErrorAction, setCountriesAction } from '../reducers/countriesReducer';


export function* countriesWorker() {
     try {
          const data = yield getCountries();
          yield put(setCountriesAction(data));
     } catch(e) {
          yield put(countriesErrorAction());
     }
};