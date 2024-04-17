import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesAction } from "@store/reducers/favoritesReducer";
import { FilmItem } from "@components/FilmItem";
import { Grid } from "@components/List/List";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import {
    UILoader,
    UIErrorMsg,
    UITitle
} from "@components/UI";
import cls from "./Favorites.module.scss";


const Favorites = () => {
    const dispatch = useDispatch();
    const authData = useSelector(state => state.userReducer.authData);
    const {
        data,
        isLoading,
        error
    } = useSelector(state => state.favoritesReducer);

    useEffect(() => {
        dispatch(favoritesAction());
    }, [authData]);

    if (isLoading) {
        return (
            <UILoader />
        );
    }

    if (error) {
        return (
            <UIErrorMsg value={error}/>
        );
    }

    let content;

    if (data && data.length) {
        content = (<Grid>{data?.map(item => <FilmItem key={item.id} item={item}/>)}</Grid>)
    } else {
        content = (
            <div className={cls.noFavorites}>
                <FavoritesIcon />
                <UITitle
                    classes={cls.noFavoritesTitle}
                    title="Здесь пока пусто"
                    type="title-l"
                />
            </div>
        )
    }

    return (
        <>
            <h1>
                <UITitle title="Избранные"/>
            </h1>
            {content}
        </>
    );
};

export default Favorites;