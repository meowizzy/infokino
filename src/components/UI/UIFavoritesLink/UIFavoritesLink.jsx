import UIButton from "../UIButton/UIButton";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import { Link } from "react-router-dom";
import { routesPath } from "@api/routes";
import cls from "./UIFavoritesLink.module.scss";
import { useSelector } from "react-redux";

export const UIFavoritesLink = () => {
    const userFavoritesData = useSelector(state => state.favoritesReducer.userFavoritesData);
    const favoritesCount = userFavoritesData && userFavoritesData?.favorites ? userFavoritesData.favorites.length : 0;
    return (
        <Link to={routesPath.FAVORITES} className={cls.link}>
            <UIButton
                classes={cls.btn}
                type="default"
                Icon={FavoritesIcon}
                text="Избранные"
            />
            { favoritesCount ? <span className={cls.favoritesCount}>{userFavoritesData.favorites.length}</span> : "" }
        </Link>
    );
};