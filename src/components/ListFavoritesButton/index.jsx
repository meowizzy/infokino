import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIButton } from "../UI";
import { toggleFavoritesAction } from "@store/reducers/favorites/favoritesReducer";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import cls from "./ListFavoritesButton.module.scss";
import cn from "classnames";

export const ListFavoritesButton = ({ filmId, className }) => {
    const {
        userFavoritesData,
        isLoading
    } = useSelector(state => state.favoritesReducer);
    const dispatch = useDispatch();

    const toggleFavorites = useCallback(() => {
        dispatch(toggleFavoritesAction(filmId));
    }, [dispatch, filmId]);

    if (userFavoritesData && userFavoritesData?.includes(filmId)) {
        return (
            <UIButton
                classes={cn(cls.btn, cls.removeBtn, className, { [cls.isLoading]: isLoading })}
                onClick={toggleFavorites}
                type="default"
                Icon={FavoritesIcon}
                isLoading={isLoading}
            />
        );
    }

    return (
        <UIButton
            classes={cn(cls.btn, cls.addBtn, className, { [cls.isLoading]: isLoading })}
            onClick={toggleFavorites}
            type="default"
            Icon={FavoritesIcon}
            isLoading={isLoading}
        />
    );
};