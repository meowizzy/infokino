import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { favoritesAction } from "@store/reducers/favoritesReducer";
import { FilmItem } from "@components/FilmItem"; 
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

    return (
        <>
            <h1>
                <UITitle title="Избранные"/>
            </h1>

            <div className={cls.items}>
                {
                    data?.map(item => <FilmItem key={item.id} item={item}/>)
                }
            </div>
        </> 
    );
};

export default Favorites;