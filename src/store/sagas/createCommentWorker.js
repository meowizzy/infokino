import { put, call, select } from 'redux-saga/effects';
import { createComment } from "../../services/movieComments";
import { setComments } from "../reducers/commentsReducer";
import {clearCommentForm, createCommentError, createCommentLoading} from "../reducers/createCommentReducer";
export function* createCommentWorker() {
    try {
        yield put(createCommentLoading(true));
        const filmId = yield select(state => state.filmByIdReducer.id);
        const userData = yield select(state => state.userReducer.authData);
        const comments = yield select(state => state.commentsReducer.data);
        const { comment, rating } = yield select(state => state.createCommentReducer.formData);
        const data = yield call(createComment, {
            movieId: filmId,
            comment,
            rating,
            reviewer: {
                id: String(userData.id),
                role: userData?.role,
                avatar: userData?.avatar,
                name: userData?.name,
                email: userData?.email
            },
            userId: String(userData.id)
        });

        if (!comments) {
            yield put(setComments([ data ]));
        } else {
            yield put(setComments([ ...comments, data ]));
        }

        yield put(clearCommentForm());
    } catch (e) {
        yield put(createCommentError(e.message));
        yield put(clearCommentForm());
    }
}