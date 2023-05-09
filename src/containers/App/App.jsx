import { useEffect } from "react";
import { getFilmsByGenre } from "@store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { HeaderPanel } from "../HeaderPanel";
import { TopSlider } from "@screens/TopSlider/TopSlider";
import { Categories } from "@components/Categories/Categories";
import { Collection } from "@screens/Collection";




export const App = () => {
     const dispatch = useDispatch();
     const newFilms = useSelector(state => state.filmsReducer.newFilms);
     const comedyFilms = useSelector(state => state.filmsReducer.comedyFilms);
     const dramaFilms = useSelector(state => state.filmsReducer.dramaFilms);
     const familyFilms = useSelector(state => state.filmsReducer.familyFilms);

     useEffect(() => {
          dispatch(getFilmsByGenre());
     }, []);

     return (
          <>
               <HeaderPanel />
               <TopSlider items={newFilms}/>
               <Categories />
               <Collection key={1} items={newFilms} title="Новинки"/>
               <Collection key={2} items={comedyFilms} title="Комедийные фильмы"/>
               <Collection key={3} items={dramaFilms} title="Драма"/>
               <Collection key={4} items={familyFilms} title="Семейные"/>
          </>
     );
};

