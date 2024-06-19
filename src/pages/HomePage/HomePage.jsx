import { useSelector } from "react-redux/es/exports";
import { getFilmsByGenre } from "@store/reducers/kinopoisk/filmsByGenreReducer";
import { useFetching } from "@hooks/useFetching";
import { Categories } from "@components/Categories/Categories";
import { TopSlider } from "@screens/TopSlider/TopSlider";
import { Collection } from "@screens/Collection";
import { collectionsTitles } from "@app/config/collections";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchRecommendMovies} from "../../store/reducers/recommends/recommendsReducer";
import {UILoader} from "../../components/UI";

const HomePage = () => {
     const films = useSelector(state => state.filmsReducer);
     const newFilms = films.newFilms;
     const dispatch = useDispatch();
     const { query, data } = useSelector(state => state.recommendsReducer);

    useEffect(() => {
        dispatch(fetchRecommendMovies(query));
    }, [query]);

     useFetching(getFilmsByGenre, newFilms.length);

     return (
          <>
               <TopSlider items={newFilms}/>
               <Categories />
              {!!data ? <Collection items={data} title="Рекомендуем к просмотру"/> : <UILoader />}
               { Object.entries(films).map(([key, value]) =>
                   <Collection key={key} items={value} title={collectionsTitles[key]}/>) }
          </>
     );
};

export default HomePage;