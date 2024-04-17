import {
    addToFavoritesAction,
    removeFromFavoritesAction
} from "@store/reducers/toggleFavoriteReducer";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { UIButton } from "../UI";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import cls from "./FavoritesButton.module.scss";

export const FavoritesButton = ({ filmId }) => {
    const dispatch = useDispatch();
    const { userFavorites } = useSelector(state => state.favoritesReducer);
    const { isLoading } = useSelector(state => state.toggleFavoriteReducer);
    const movieHasAlreadyBeenAdded = useMemo(() => userFavorites?.favorites.includes(String(filmId)), [userFavorites, filmId]);

    return (
        movieHasAlreadyBeenAdded
        ?
        <UIButton
            classes={cls.btn}
            isLoading={isLoading}
            onClick={() => dispatch(removeFromFavoritesAction(filmId))}
            type="primary"
            text="Удалить из избранного"
            Icon={FavoritesIcon}
        />
        :
        <UIButton
            classes={cls.btn}
            isLoading={isLoading}
            onClick={() => dispatch(addToFavoritesAction(filmId))}
            type="accent"
            text="Добавить в избранное"
            Icon={FavoritesIcon}
        />
    );
};