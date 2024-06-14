import { projectHttpPost, projectHttpGet, projectHttpPut, projectHttpDelete } from "@app/api/infokinoAxiosInstance";

export const getAllReviews = (movieId) =>
    projectHttpGet({
        url: `/reviews/${movieId}`,
    });

export const createReview = (data) =>
    projectHttpPost({
        url: `/reviews/create`,
        data
    });

export const updateReview = (reviewId, data) =>
    projectHttpPut({
        url: `/reviews/${reviewId}`,
        data
    });

export const deleteReview = (reviewId) =>
    projectHttpDelete({
        url: `/reviews/${reviewId}`,
    });