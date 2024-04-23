import { useDispatch } from "react-redux";
import { clearFavoritesAction } from "@store/reducers/favoritesReducer";
import { UITitle, UIButton } from "@components/UI";
import { ReactComponent as FavoritesIcon } from "@public/images/favorites.svg";
import cls from "./Heading.module.scss";
import {useCallback} from "react";

export const FavoritesHeading = (props) => {
    const {
        title,
        hasBtn = false,
        isLoading = false
    } = props;
    const dispatch = useDispatch();

    const handleClearFavorites = () => {
        console.log(123131);
        dispatch(clearFavoritesAction());
    };

    return (
        <h1 className={cls.heading}>
            <UITitle title={title}/>
            {
                hasBtn && <UIButton
                    isLoading={isLoading}
                    classes={cls.btn}
                    type="danger"
                    onClick={handleClearFavorites}
                    Icon={FavoritesIcon}
                    text="Очистить список избранных"
                />
            }
        </h1>
    );
};