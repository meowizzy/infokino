import { API_VERSIONS, reqInstance } from "@api/constants";
import getCurrentYear from "@helpers/getCurrentYear";

const kinoinfoApi = {
     async getAllFilms(page = 1, type='movie', sort) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie`, {
               params: {
                    year: `1860-${getCurrentYear()}`,
                    page: page,
                    limit: 40,
                    type: type,
                    sortField: sort,
                    sortType: -1
               }
          });
          
          return await response.data;
     },

     async getNewFilms(limit = 10) {
          const resposne = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie`, {
               params: {
                    year: `${getCurrentYear()-1}-${getCurrentYear()}`,
                    type: 'movie',
                    limit: limit,
                    page: 1
               }
          });
          return await resposne.data.docs;
     },

     async getFilmsByGenre(limit = 10, genre, page = 1, type='movie', sort) {

          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie`, {
               params: {
                    year: `1860-${getCurrentYear()}`,
                    "genre.name": genre,
                    type: type,
                    limit: limit,
                    page: page,
                    sortField: sort,
                    sortType: -1
               }
          });
          return await response.data;
     },

     async getFilmById(id) {
          if (!id) {
               console.log("Field ID is empty");
               return;
          }
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie/${id}`);

          return await response.data;
     },
     
     async getSearchQuery(query) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie/search?query=${query}`);

          return await response.data;
     }
};


export const { 
     getAllFilms,
     getFilmById,
     getNewFilms,
     getFilmsByGenre,
     getSearchQuery
} = kinoinfoApi;