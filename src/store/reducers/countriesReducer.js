import { ERROR_MESSAGE } from "../constants";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_COUNTRIES = "SET_COUNTRIES";
export const SET_COUNTRIES_ERROR = "SET_COUNTRIES_ERROR";
export const SET_COUNTRIES_IS_LOADING = "SET_COUNTRIES_IS_LOADING";

const initialState = {
     countries: null,
     isLoading: false,
     error: undefined
};

export const getCountriesAction = () => {
     return { type: GET_COUNTRIES };
}

export const setCountriesIsLoading = () => {
     return {
          type: SET_COUNTRIES_IS_LOADING
     }
};

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
               return { 
                    ...state, 
                    countries: action.payload,
                    isLoading: false,
                    error: false
               };
          case SET_COUNTRIES_IS_LOADING:
               return { 
                    ...state, 
                    isLoading: true,
                    error: undefined               
               };
          case SET_COUNTRIES_ERROR:
               return { 
                    ...state, 
                    isLoading: false,
                    error: action.payload,
               };
          default: return state;
     }
};