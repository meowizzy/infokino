import { API_VERSIONS, reqInstance } from "@api/constants";
import getCurrentYear from "@helpers/getCurrentYear";
import buildUrlParams from "@helpers/buildUrlParams";

const kinoinfoApi = {
     async getAllFilms(page = 1, type='movie', sort) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie`, {
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
          
          return await response.data;
     },

     async getFilmsByIds(page = 1, ids) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_4}/movie?page=${page}&limit=40&id=${ids.join("&id=")}`);
          
          return await response.data.docs;
     },

     async getNewFilms(limit = 10) {
          const resposne = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie`, {
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
          return await resposne.data.docs;
     },

     async getFilmsByGenre(limit = 10, filters, page = 1, type='movie', sort) {

          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie?${buildUrlParams(filters)}`, {
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
          
          return await response.data;
     },

     async getFilmById(id) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie/${id}`);

          return await response.data;
     },
     
     async getSearchQuery(params) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_2}/${params.type}/search?limit=50&query=${params.query}`, {
               params: {
                    "poster.previewUrl": "!null",
                    "poster.url": "!null",
                    "rating.kp": "1-10",
                    "poster": "!null"
               }
          });

          return await response.data;
     },

     async getCountries() {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1}/movie/possible-values-by-field`, {
               params: {
                    field: "countries.name"
               }
          });

          return await response.data;
     }
};


export const { 
     getAllFilms,
     getFilmById,
     getFilmsByIds,
     getNewFilms,
     getFilmsByGenre,
     getSearchQuery,
     getCountries
} = kinoinfoApi;