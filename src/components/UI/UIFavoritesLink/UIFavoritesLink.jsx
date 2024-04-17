import UIButton from "../UIButton/UIButton";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import { Link } from "react-router-dom";
import { routesPath } from "@api/routes";
import cls from "./UIFavoritesLink.module.scss";
import { useSelector } from "react-redux";

export const UIFavoritesLink = () => {
    const data = useSelector(state => state.favoritesReducer.userFavorites);
    return (
        <Link to={routesPath.FAVORITES} className={cls.link}>
            <UIButton
                classes={cls.btn}
                type="default"
                Icon={FavoritesIcon}
                text="Избранные"
            />
            { data?.favorites?.length ? <span className={cls.favoritesCount}>{data.favorites.length}</span> : "" }
        </Link>
    );
};