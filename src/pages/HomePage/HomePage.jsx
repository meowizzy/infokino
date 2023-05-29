import { getFilmsByGenre } from "@store/actions/actionCreator";
import { useSelector } from "react-redux/es/exports";
import { Categories } from "@components/Categories/Categories";
import { TopSlider } from "@screens/TopSlider/TopSlider";
import { Collection } from "@screens/Collection";
import { filmsTitleLocalization } from "@services/constants";
import { useFetching } from "@hooks/useFetching";

const HomePage = () => {
     const films = useSelector(state => state.filmsReducer);
     const newFilms = films.newFilms;

     useFetching(getFilmsByGenre, newFilms);

     return (
          <>
               <TopSlider items={newFilms}/>
               <Categories />
               { Object.entries(films).map(pair => <Collection key={pair[0]} items={pair[1]} title={filmsTitleLocalization[pair[0]]}/>) }
          </>
     );
};

export default HomePage;