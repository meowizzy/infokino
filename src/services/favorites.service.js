import { projectHttpPost, projectHttpGet, projectHttpDelete } from "@app/api/infokinoAxiosInstance";

export const fetchFavorites = async () =>
    await projectHttpGet({
        url: `/favorites`
    });

export const clearFavorites = async () =>
    await projectHttpDelete({
        url: `/favorites`
    });

export const toggleFavorites = async (data) =>
    await projectHttpPost({
        url: "/favorites",
        data
    });