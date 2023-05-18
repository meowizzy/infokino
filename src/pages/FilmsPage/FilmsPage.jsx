import { useSelector, useDispatch } from "react-redux";
import convertMovieType from "@helpers/convertMovieType";
import { useParams } from 'react-router-dom';
import useScrollFetching from "@hooks/useScrollFetching";
import { List } from "@components/List";
import { UITitle } from "@components/UI";
import { useEffect } from "react";
import { setFilmsType, setAllFilmsPage } from "@store/actions/actionCreator";
import { CLEAR_FILMS_LIST } from "@store/constants";

const FilmsPage = () => {
     const films = useSelector(state => state.allFilmsReducer.allFilms);
     const isLoading = useSelector(state => state.allFilmsReducer.loading);
     const dispatch = useDispatch();
     const param = useParams();
     const title = convertMovieType(param.type).main;

     const config = {
          data: films,
          isLoading
     };

     useScrollFetching(config);

     useEffect(() => {
          dispatch(setFilmsType(param.type));

          return () => {
               dispatch({type: CLEAR_FILMS_LIST});
               dispatch(setAllFilmsPage(1));
          };
     }, [dispatch, param.type]);

     return (
          <>
               <h1>
                    <UITitle title={title}/>
               </h1>
               <List items={films} isLoading={isLoading}/>
          </>
     );
};

export default FilmsPage;