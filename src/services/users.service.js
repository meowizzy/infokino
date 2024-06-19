import { projectHttpGet } from "@app/api/infokinoAxiosInstance";
import {projectHttpDelete} from "../app/api/infokinoAxiosInstance";

export const usersList = async () =>
    await projectHttpGet({
        url: "/users/list"
    });

export const deleteUser = async (userId) =>
    await projectHttpDelete({
        url: `/users/${userId}`
    })