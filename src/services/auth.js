import {authInstance} from "@api/constants";

export const profile = async () => {
    const response = await authInstance.get("/auth/profile");

    return response.data;
};
export const login = async (body) => {
    const response = await authInstance.post("/auth/login", body);

    return response.data;
};
export const register = async (body) => {
    const response = await authInstance.post("/users/", body);

    return response.data;
};