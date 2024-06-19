import { projectHttpGet, projectHttpPost } from "@app/api/infokinoAxiosInstance";

export const collectRecommends = (data) =>
    projectHttpPost({
        url: "/recommends",
        data
    });

export const getRecommends = () =>
    projectHttpGet({
        url: "/recommends",
    })