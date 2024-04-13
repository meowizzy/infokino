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
        isLoading,
        isFinalPage
    } = useSelector(state => state.commentsReducer);

    useEffect(() => {
        dispatch(fetchFilmCommentsAction());

        return () => {
            dispatch(clearComments());
        };
    }, [dispatch, fetchFilmCommentsAction]);

    return (
        <div>
            <UITitle title="Комментарии" classes="heading"/>
            <Comments
                data={data}
                isLoading={isLoading}
                error={error}
                isFinalPage={isFinalPage}
            />
            <Comments.Form
                authData={authData}
            />
        </div>
    );
};