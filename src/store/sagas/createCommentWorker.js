import { put, call, select } from 'redux-saga/effects';
import { createComment } from "../../services/movieComments";
import { setCreatedComment } from "../reducers/createCommentReducer";
import { clearCommentForm, createCommentError, createCommentLoading} from "../reducers/createCommentReducer";
import { setComments } from '../reducers/commentsReducer';
import { validateCommentsForm } from '@components/Comments/validateCommentsForm';
export function* createCommentWorker() {
    try {
        yield put(createCommentLoading(true));
        const filmId = yield select(state => state.filmByIdReducer.id);
        const userData = yield select(state => state.userReducer.authData);
        const comments = yield select(state => state.commentsReducer.data);
        const { comment, rating } = yield select(state => state.createCommentReducer.formData);

        const errors = validateCommentsForm({ comment, rating });

        if (errors.length) {
            throw new Error(errors);
        }

        const data = yield call(createComment, {
            movieId: filmId,
            comment,
            rating,
            reviewer: {
                id: String(userData?.id),
                role: userData?.role,
                avatar: userData?.avatar,
                name: userData?.name,
                email: userData?.email
            },
            userId: String(userData.id),
            commentId: comments?.length ? Number(comments[0].id) + 1 : 1
        });

        

        if (comments) {
            yield put(setComments([data, ...comments]));
        } else {
            yield put(setComments([data]));
        }

        yield put(clearCommentForm());
    } catch (e) {
        console.log(e);
        yield put(createCommentError(e.message.split("%")));
    }
}