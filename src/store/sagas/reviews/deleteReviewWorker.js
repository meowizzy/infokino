import { put, call, select } from 'redux-saga/effects';
import { deleteReview } from "@services/reviews.service";
import { setComments } from "@store/reducers/reviews/commentsReducer";
import { toast } from "react-toastify";

export function* deleteReviewWorker({ payload }) {
    try {
        const { data: reviews } = yield select(state => state.commentsReducer);

        yield call(deleteReview, payload);

        const newData = reviews.filter(review => review._id !== payload);

        yield put(setComments(newData));
        toast.success("Комментарий успешно удален");

    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;
        toast.error(error);
    }
}