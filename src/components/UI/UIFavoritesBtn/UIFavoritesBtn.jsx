import UIButton from "../UIButton/UIButton";
import { ReactComponent as Favorites } from "@public/images/favorites.svg";
import { Link } from "react-router-dom";
import { routesPath } from "@api/routes";
import cls from "./UIFavoritesBtn.module.scss";
import { useSelector } from "react-redux";

export const UIFavoritesBtn = () => {
    const { data } = useSelector(state => state.favoritesReducer);
    return (
        <Link to={routesPath.FAVORITES} className={cls.link}>
            <UIButton 
                classes={cls.btn}
                type="default"
                Icon={Favorites}
                text="Избранные"
            />
            <span>{data?.length}</span>
        </Link>        
    );
};