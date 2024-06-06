import axios from "axios";

export const KINOPOISK_BASE_URL = process.env.REACT_APP_KINOPOISK_BASE_URL;
export const KINOPOISK_API_KEY = process.env.REACT_APP_KINOPOISK_API_KEY;

export const kinopoiskHttpClient = axios.create({
    baseURL: KINOPOISK_BASE_URL,
    headers: {
        'X-API-KEY': KINOPOISK_API_KEY,
        'Content-Type': 'application/json',
    }
});

export const kinopoiskHttpGet = (params) =>
    kinopoiskHttpClient({
        method: "get",
        ...params
    });

export const kinopoiskHttpPost = (params) =>
    kinopoiskHttpClient({
        method: "post",
        ...params
    });

export const kinopoiskHttpPut = (params) =>
    kinopoiskHttpClient({
        method: "put",
        ...params
    });

export const kinopoiskHttpDelete = (params) =>
    kinopoiskHttpClient({
        method: "delete",
        ...params
    });