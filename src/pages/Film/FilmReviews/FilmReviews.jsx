import React, {useEffect} from 'react';
import Comments from "@components/Comments/Comments";
import { UITitle } from "@components/UI";
import { useDispatch, useSelector } from "react-redux";
import { clearComments, fetchFilmCommentsAction } from "@store/reducers/commentsReducer";

export const FilmReviews = () => {
    const authData = useSelector(state => state.userReducer.authData);
    const dispatch = useDispatch();
    const {
        data,
        error,
        isLoading
    } = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(fetchFilmCommentsAction());
    }, [dispatch, fetchFilmCommentsAction]);

    console.log(data);

    return (
        <div>
            <UITitle title="Отзывы" classes="heading"/>
            <Comments
                data={data}
                isLoading={isLoading}
                error={error}
            />
            <Comments.Form
                isLoading={isLoading}
                authData={authData}
            />
        </div>
    );
};