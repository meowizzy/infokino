import { toast } from "react-toastify";
import { call, put } from 'redux-saga/effects';
import { usersList } from "@services/users.service";
import { setUsersListError, setUsersListLoading, setUsersList } from "@store/reducers/users/usersListReducer";

export function* usersListWorker() {
    try {
        yield put(setUsersListLoading());
        const { data } = yield call(usersList);

        yield put(setUsersList(data));
    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;
        toast.error(error);
        yield put(setUsersListError(error));
    }
}