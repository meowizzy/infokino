import axios from "axios";

const API_URL = "https://api.kinopoisk.dev/";
const API_KEY = "V1QV0JZ-NMQ4PBV-QMDJYP3-ZC212CQ";

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


