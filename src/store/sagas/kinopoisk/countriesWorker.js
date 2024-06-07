import { put } from 'redux-saga/effects';
import { getCountries } from '@services/kinopoisk.service';
import { countriesErrorAction, setCountriesAction, setCountriesIsLoading } from '../../reducers/kinopoisk/countriesReducer';


export function* countriesWorker() {
     try {
          yield put(setCountriesIsLoading());
          const { data } = yield getCountries();
          yield put(setCountriesAction(data));
     } catch(e) {
          yield put(countriesErrorAction());
     }
};