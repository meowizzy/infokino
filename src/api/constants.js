import axios from "axios";
import {LOCAL_STORAGE_AUTH} from "../services/constants";

export const API_URL = "https://api.kinopoisk.dev/";

export const AUTH_URL = "https://api.escuelajs.co/api/v1/";
export const API_KEY = "F37HY9W-CTD4G9Q-P7CY00J-SRM59AW";
// export const API_KEY = "F37HY9W-CTD4G9Q-P7CY00J-SRM59AW";
export const VIDEOS_API = "https://voidboost.net/embed/";
export const VIDEOS_POSTER = "?poster=1&poster_id=4&df=1";

export const API_VERSIONS = {
     API_VER_1: "v1",
     API_VER_1_3: "v1.3",
     API_VER_1_2: "v1.2",
}

export const API_GENRES = {
     comedy: "комедия",
     drama: "драма",
     melodrama: "мелодрама",
     documental: "документальный",
     fantasy: "фантастика",
     family: "семейный"
}


export const reqInstance = axios.create({
     baseURL: API_URL,
     headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
     }
});

export const AUTH_TOKEN = localStorage.getItem(LOCAL_STORAGE_AUTH);
export const authInstance = axios.create({
     baseURL: AUTH_URL,
     headers: {
          Authorization: `Bearer ${AUTH_TOKEN?.access_token}`
     }
});
authInstance.interceptors.request.use((config) => {
     const token = localStorage.getItem(LOCAL_STORAGE_AUTH);

     console.log(token);

     if (token) {
          config.headers = Object.assign(config.headers, {
               Authorization: 'Bearer ' + JSON.parse(token)?.access_token,
          });
          return config;
     } else {
          return config;
     }
});


