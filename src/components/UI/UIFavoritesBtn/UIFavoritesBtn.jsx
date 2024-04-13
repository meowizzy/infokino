import UIButton from "../UIButton/UIButton";
import { ReactComponent as Favorites } from "@public/images/favorites.svg";
import { Link } from "react-router-dom";
import { routesPath } from "@api/routes";
import cls from "./UIFavoritesBtn.module.scss";

export const UIFavoritesBtn = () => {
    return (
        <Link to={routesPath.FAVORITES} className={cls.link}>
            <UIButton 
                classes={cls.btn}
                type="default"
                Icon={Favorites}
                text="Избранные"
            />
        </Link>        
    );
};