import { ERROR_MESSAGE } from "../constants";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_COUNTRIES_ERROR = "SET_COUNTRIES_ERROR";

const initialState = {
     countries: null,
     error: ''
};

export const getCountriesAction = () => {
     return { type: GET_COUNTRIES };
}

export const setCountriesAction = payload => {
     return { type: SET_COUNTRIES, payload: payload }
};

export const countriesErrorAction = (string = ERROR_MESSAGE) => {
     return { 
          type: SET_COUNTRIES_ERROR,
          payload: string
     }
}

export const countriesReducer = (state = initialState, action) => {
     switch(action.type) {
          case SET_COUNTRIES: 
               return { ...state, countries: action.payload }
          case SET_COUNTRIES_ERROR:
               return { ...state, error: action.payload }
          default: return state;
     }
};