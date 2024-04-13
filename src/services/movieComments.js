import { mockInstance } from "@api/constants";

export const fetchCommentsByMovieId = async (movieId) => {
    const response = await mockInstance.get(`/comments?sortBy=commentId&order=desc&movieId=${movieId}`);
    console.log(response);

    return response.data;
};

export const fetchCommentsByUserId = async (userId) => {
    const response = await mockInstance.get(`/comments?userId=${userId}`);

    return response.data;
};

export const createComment = async (data) => {
    const response = await mockInstance.post("/comments", data);

    return response.data;
};

export const deleteComment = async (id) => {
    const response = await mockInstance.delete(`/comments/${id}`);

    return response.data;
};

export const editComment = async (id, data) => {
    const response = await mockInstance.put(`/comments/${id}`, data);

    return response.data;
};