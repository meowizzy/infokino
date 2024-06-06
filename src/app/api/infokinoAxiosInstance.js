import axios from "axios";
import { LOCAL_STORAGE_AUTH } from "@app/constants";

export const PROJECT_BASE_URL = process.env.REACT_APP_PROJECT_BASE_URL;
export const LOCAL_STORAGE_AUTH_TOKENS = localStorage.getItem(LOCAL_STORAGE_AUTH);
export const projectHttpClient = axios.create({
    baseURL: PROJECT_BASE_URL,
    headers: {
        Authorization: `Bearer ${LOCAL_STORAGE_AUTH_TOKENS?.accessToken}`
    }
});

projectHttpClient.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOCAL_STORAGE_AUTH);

    if (token) {
        config.headers = Object.assign(config.headers, {
            Authorization: 'Bearer ' + JSON.parse(token)?.accessToken,
        });
        return config;
    } else {
        return config;
    }
});

export const projectHttpGet = (params) =>
    projectHttpClient({
        method: "get",
        ...params
    });

export const projectHttpPost = (params) =>
    projectHttpClient({
        method: "post",
        ...params
    });

export const projectHttpPut = (params) =>
    projectHttpClient({
        method: "put",
        ...params
    });

export const projectHttpDelete = (params) =>
    projectHttpClient({
        method: "delete",
        ...params
    });

export const projectHttpPatch = (params) =>
    projectHttpClient({
        method: "patch",
        ...params
    });