import { API_VERSIONS, reqInstance } from "@api/constants";
import getCurrentYear from "@helpers/getCurrentYear";

const kinoinfoApi = {
     async getAllFilms(page = 1, type='movie') {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie?page=${page}&limit=20&type=${type}`);
          
          return await response.data;
     },

     async getNewFilms(limit = 10) {
          const resposne = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie?year=${getCurrentYear()-1}-${getCurrentYear()}&sortField=rating.kp&sortType=-1&type=movie&limit=${limit}&page=1`);
          return await resposne.data.docs;
     },

     async getFilmsByGenre(limit = 10, genre) {
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie?year=${getCurrentYear()-1}-${getCurrentYear()}&genres.name=${genre}&sortField=rating.kp&sortType=-1&type=movie&limit=${limit}&page=1`);
          return await response.data.docs;
     },

     async getFilmById(id) {
          if (!id) {
               console.log("Field ID is empty");
               return;
          }
          const response = await reqInstance.get(`${API_VERSIONS.API_VER_1_3}/movie${id}`);

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