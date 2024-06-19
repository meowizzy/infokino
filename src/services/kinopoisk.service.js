import { kinopoiskHttpGet } from "@app/api/kinopoiskAxiosInstance";
import {KINOPOISK_API_VERSIONS} from "@app/constants";
import getCurrentYear from "@helpers/getCurrentYear";
import buildUrlParams from "@helpers/buildUrlParams";

export const getAllFilms = async (page = 1, type='movie', sort) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_3}/movie`,
         params: {
              sortField: sort,
              sortType: "-1",
              year: `1860-${getCurrentYear()}`,
              page: page,
              limit: 40,
              "rating.kp": "1-10",
              "poster.previewUrl": "!null",
              "poster.url": "!null",
              type: type
         }
    });

export const getFilmsByIds = async (page = 1, ids) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_4}/movie?page=${page}&limit=40&id=${ids.join("&id=")}`
    })

export const getNewFilms = async (limit = 10) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_3}/movie`,
         params: {
              sortField: "year",
              sortType: "-1",
              movieLength: "!null",
              "rating.kp": "1-10",
              "poster.previewUrl": "!null",
              "poster.url": "!null",
              year: `${getCurrentYear()-1}-${getCurrentYear()}`,
              limit: limit,
              page: 1,
         }
    });

export const getRecommendFilms = async (recommends = []) =>
    await kinopoiskHttpGet({
        url: `${KINOPOISK_API_VERSIONS.API_VER_1_3}/movie?${buildUrlParams({ "genres.name": recommends.join("+") })}`,
        params: {
            sortField: "year",
            sortType: "-1",
            movieLength: "!null",
            "rating.kp": "1-10",
            "poster.previewUrl": "!null",
            "poster.url": "!null",
            year: `${getCurrentYear()-5}-${getCurrentYear()-1}`,
            limit: 10,
            page: 1
        }
    })

export const getFilmsByGenre = async (limit = 10, filters, page = 1, type='movie', sort) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_3}/movie?${buildUrlParams(filters)}`,
         params: {
              sortField: sort,
              sortType: -1,
              "poster.previewUrl": "!null",
              "poster.url": "!null",
              "rating.kp": "1-10",
              type: type,
              limit: limit,
              page: page
         }
    });

export const getFilmById = async (id) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_3}/movie/${id}`
    });

export const getSearchQuery = async (params) =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1_2}/${params.type}/search?limit=50&query=${params.query}`,
         params: {
              "poster.previewUrl": "!null",
              "poster.url": "!null",
              "rating.kp": "1-10",
              "poster": "!null"
         }
    });

export const getCountries = async () =>
    await kinopoiskHttpGet({
         url: `${KINOPOISK_API_VERSIONS.API_VER_1}/movie/possible-values-by-field`,
         params: {
              field: "countries.name"
         }
    });