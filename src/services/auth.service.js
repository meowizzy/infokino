import { projectHttpPost, projectHttpGet } from "@app/api/infokinoAxiosInstance";

export const profile = async () =>
    await projectHttpGet({
        url: "/users/profile",
    });

export const signIn = async (data) =>
    await projectHttpPost({
        url: "/auth/sign-in",
        data
    });

export const signUp = async (data) =>
    await projectHttpPost({
        url: "/auth/sign-up",
        data
    });