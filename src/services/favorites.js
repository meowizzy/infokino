import { mockInstance } from "@api/constants";

export const fetchFavorites = async (userId) => {
    const response = await mockInstance.get(`/favorites?userId=${userId}`);

    return response.data;
}

export const createFavorites = async (data) => {
    const response = await mockInstance.post("/favorites", data);

    return response.data;
}
export const toggleFavorites = async (id, data) => {
    const response = await mockInstance.put(`/favorites/${id}`, {
        favorites: data
    });

    return response.data;
}

export const clearFavorites = async (userId) => {
    const response = await mockInstance.delete(`/favorites?userId=${userId}`);

    return response.data;
}