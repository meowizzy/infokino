import { projectHttpPut } from "@app/api/infokinoAxiosInstance";

export const putRecommends = (data) =>
    projectHttpPut({
        data
    });