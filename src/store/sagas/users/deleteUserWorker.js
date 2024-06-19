import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { deleteUserError, deleteUserLoading, deleteUserSuccess } from "../../reducers/users/deleteUserSuccessReducer";
import { deleteUser } from "@services/users.service";
import { usersListWorker } from "./usersListWorker";

export function* deleteUserWorker({ payload: userId }) {
    try {
        yield put(deleteUserLoading());
        yield call(deleteUser, userId);
        yield put(deleteUserSuccess());

        toast.success("Пользователь успешно удален!");

        yield usersListWorker();
    } catch (e) {
        const error = e.response ? e.response.data.message : e.message;
        toast.error(error);
        yield put(deleteUserError());
    }
}