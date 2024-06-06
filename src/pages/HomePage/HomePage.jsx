import { useSelector } from "react-redux/es/exports";
import { getFilmsByGenre } from "@store/actions/actionCreator";
import { Categories } from "@components/Categories/Categories";
import { TopSlider } from "@screens/TopSlider/TopSlider";
import { Collection } from "@screens/Collection";
import { collectionsTitles } from "@app/config/collections";
import { useFetching } from "@hooks/useFetching";

const HomePage = () => {
     const films = useSelector(state => state.filmsReducer);
     const newFilms = films.newFilms;

     useFetching(getFilmsByGenre, newFilms.length);

     return (
          <>
               <TopSlider items={newFilms}/>
               <Categories />
               { Object.entries(films).map(([key, value]) =>
                   <Collection key={key} items={value} title={collectionsTitles[key]}/>) }
          </>
     );
};

export default HomePage;