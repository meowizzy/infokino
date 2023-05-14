import { useSelector, useDispatch } from "react-redux";
import { getAllFilms, setAllFilmsLoadingAction, setAllFilmsPage } from "@store/actions/actionCreator";
import { List } from "@components/List";
import { UITitle } from "@components/UI";
import { useEffect } from "react";


const FilmsPage = () => {
     const films = useSelector(state => state.allFilmsReducer.allFilms);
     const page = useSelector(state => state.allFilmsReducer.page);
     const isLoading = useSelector(state => state.allFilmsReducer.loading);
     const dispatch = useDispatch();

     useEffect(() => {
          if (!films.length) dispatch(getAllFilms());
          if (isLoading) {
               dispatch(setAllFilmsPage(page + 1));
               dispatch(getAllFilms());
          }
     }, [isLoading, dispatch]);

     const handleScroll = event => {
          if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 10) {
               dispatch(setAllFilmsLoadingAction(true));             
          }
     };

     useEffect(() => {
          document.addEventListener('scroll', handleScroll);
          return () => {
               document.removeEventListener('scroll', handleScroll);    
          };
     }, [page]);

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