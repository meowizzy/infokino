import { useSelector } from "react-redux";
import { getAllFilms, setAllFilmsLoadingAction, setAllFilmsPage } from "@store/actions/actionCreator";
import useScrollFetching from "@hooks/useScrollFetching";
import { List } from "@components/List";
import { UITitle } from "@components/UI";



const FilmsPage = () => {
     const films = useSelector(state => state.allFilmsReducer.allFilms);
     const page = useSelector(state => state.allFilmsReducer.page);
     const pages = useSelector(state => state.allFilmsReducer.pages);
     const isLoading = useSelector(state => state.allFilmsReducer.loading);
     
     const config = {
          data: films,
          isLoading,
          page,
          pages,
          getAllFilms,
          setAllFilmsLoadingAction,
          setAllFilmsPage
     };

     useScrollFetching(config);

     return (
          <>
               <h1>
                    <UITitle title="Все фильмы"/>
               </h1>
               <List items={films} isLoading={isLoading}/>
          </>
     );
};

export default FilmsPage;