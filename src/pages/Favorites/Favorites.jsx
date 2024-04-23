import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmItem } from "@components/FilmItem";
import { Grid } from "@components/List/List";
import { getFavoritesAction } from "@store/reducers/favoritesReducer";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import { FavoritesHeading } from "./components/FavoritesHeading";
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
        ids,
        data,
        isLoading,
        error
    } = useSelector(state => state.favoritesReducer);

    useEffect(() => {
        dispatch(getFavoritesAction());
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

    if (!ids || !ids.length) {
        return (
            <>
                <FavoritesHeading
                    title="Избранные"
                />
                <div className={cls.noFavorites}>
                    <FavoritesIcon/>
                    <UITitle
                        classes={cls.noFavoritesTitle}
                        title="Здесь пока пусто"
                        type="title-l"
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <FavoritesHeading
                isLoading={isLoading}
                title="Избранные"
                hasBtn={true}
            />
            <Grid>{data?.map(item => <FilmItem key={item.id} item={item}/>)}</Grid>
        </>
    );
};

export default Favorites;