import { useSelector } from "react-redux/es/exports";
import { getFilmsByGenre } from "@store/reducers/kinopoisk/filmsByGenreReducer";
import { fetchRecommendMovies } from "@store/reducers/recommends/recommendsReducer";
import { useFetching } from "@hooks/useFetching";
import { Categories } from "@components/Categories/Categories";
import { TopSlider } from "@screens/TopSlider/TopSlider";
import { Collection } from "@screens/Collection";
import { collectionsTitles } from "@app/config/collections";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const HomePage = () => {
     const films = useSelector(state => state.filmsReducer);
     const newFilms = films.newFilms;
     const dispatch = useDispatch();
     const { query, data, _inited } = useSelector(state => state.recommendsReducer);

    useEffect(() => {
        if (!_inited) {
            dispatch(fetchRecommendMovies(query));
        }
    }, [query]);

     useFetching(getFilmsByGenre, newFilms.length);

     return (
          <>
               <TopSlider items={newFilms}/>
               <Categories />
              <Collection items={data} title="Рекомендуем к просмотру"/>
               { Object.entries(films).map(([key, value]) =>
                   <Collection key={key} items={value} title={collectionsTitles[key]}/>) }
          </>
     );
};

export default HomePage;