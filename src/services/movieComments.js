import { commentsInstance } from "@api/constants";

export const fetchCommentsByMovieId = async (movieId) => {
    const response = await commentsInstance.get(`?sortBy=commentId&order=desc&movieId=${movieId}`);
    console.log(response);

    return response.data;
};

export const fetchCommentsByUserId = async (userId) => {
    const response = await commentsInstance.get(`?userId=${userId}`);

    return response.data;
};

export const createComment = async (data) => {
    const response = await commentsInstance.post("", data);

    return response.data;
};

export const deleteComment = async (id) => {
    const response = await commentsInstance.delete(`/${id}`);

    return response.data;
};

export const editComment = async (id, data) => {
    const response = await commentsInstance.put(`/${id}`, data);

    return response.data;
};