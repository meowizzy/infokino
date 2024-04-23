import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIButton } from "../UI";
import { toggleFavoritesAction } from "@store/reducers/favoritesReducer";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import cls from "./FavoritesButton.module.scss";

export const CardFavoritesButton = ({ filmId }) => {
    const {
        userFavoritesData,
        isLoading
    } = useSelector(state => state.favoritesReducer);
    const dispatch = useDispatch();

    const toggleFavorites = useCallback(() => {
        dispatch(toggleFavoritesAction(String(filmId)));
    }, [dispatch, filmId]);

    if (userFavoritesData && userFavoritesData.favorites.includes(String(filmId))) {
        return (
            <div className={cls.removeFromFavoritesWrap}>
                <div className={cls.removeFromFavoritesLabel}>
                    <FavoritesIcon/>
                    Добавлено в избранное
                </div>
                <UIButton
                    onClick={toggleFavorites}
                    type="danger"
                    text="Удалить из избранных"
                    isLoading={isLoading}
                />
            </div>
        );
    }

    return (
        <UIButton
            classes={cls.btn}
            onClick={toggleFavorites}
            type="accent"
            text="Добавить в избранное"
            Icon={FavoritesIcon}
            isLoading={isLoading}
        />
    );
};