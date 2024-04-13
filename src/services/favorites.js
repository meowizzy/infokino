import { mockInstance } from "@api/constants";

export const fetchFavorites = async (userId) => {
    const response = await mockInstance.get(`/favorites?userId=${userId}`);

    return response.data;    
}