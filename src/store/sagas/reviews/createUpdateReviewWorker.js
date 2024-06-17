import { put, call, select } from 'redux-saga/effects';
import { createReview, updateReview } from "@services/reviews.service";
import { validateCommentsForm } from '@components/Comments/validateCommentsForm';
import { clearCommentForm, createUpdateCommentError, createUpdateCommentLoading } from "@store/reducers/reviews/createUpdateCommentReducer";
import { setComments } from '@store/reducers/reviews/commentsReducer';
import {toast} from "react-toastify";

export function* createUpdateReviewWorker({ payload: { reviewIsEditing, setReviewIsEditing } }) {
    try {
        yield put(createUpdateCommentLoading(true));
        const movieId = yield select(state => state.filmByIdReducer.id);
        const reviews = yield select(state => state.commentsReducer.data);
        const { id: currentEditingReviewId, comment, rating } = yield select(state => state.createUpdateCommentReducer.formData);

        const errors = validateCommentsForm({ comment, rating });

        if (errors.length) {
            throw new Error(errors);
        }

        if (reviewIsEditing) {
            yield call(updateReview, currentEditingReviewId, {
                comment,
                rating
            });

            const newComments = reviews.map((review) => {
                if (review._id === currentEditingReviewId) {
                    review.comment = comment;
                }

                return review;
            });

            yield put(setComments(newComments));
            setReviewIsEditing(false);
            toast.success("Комментарий успешно изменен");
        } else {
            const { data: createdReview } = yield call(createReview, {
                movieId,
                comment,
                rating
            });

            if (reviews) {
                yield put(setComments([createdReview, ...reviews]));
            } else {
                yield put(setComments([createdReview]));
            }
        }

        yield put(clearCommentForm());
    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;
        toast.success(error);
        yield put(createUpdateCommentError(error.split("%")));
    }
}