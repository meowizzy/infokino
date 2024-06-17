import { projectHttpGet } from "@app/api/infokinoAxiosInstance";

export const usersList = async () =>
    await projectHttpGet({
        url: "/users/list"
    });