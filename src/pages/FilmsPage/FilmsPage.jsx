import { useEffect, memo, useMemo } from "react";
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useScrollFetching } from "@hooks/useScrollFetching";
import { setFilmsFilter } from "@store/reducers/kinopoisk/allFilmsReducer";
import { CLEAR_FILMS_LIST } from "@store/constants/allfilms";
import convertMovieType from "@helpers/convertMovieType";
import { List } from "@components/List";
import { UITitle } from "@components/UI";
import { Filter } from "@components/Filter";

const FilmsPage = () => {
     const data = useSelector(state => state.allFilmsReducer);
     const isLoading = data.loading;
     const dispatch = useDispatch();
     const param = useParams();
     const [ searchParams ] = useSearchParams();
     const title = convertMovieType(param.type).main;

     const config = useMemo(() => {
          return {
               data: data.allFilms,
               error: data.allFilmsError,
               isLoading
          };
     }, [data]);

     useEffect(() => {
          dispatch(setFilmsFilter({
               type: param.type,
               "genres.name": searchParams.get('genres.name'),
               "countries.name": searchParams.get('countries.name'),
               sorting: searchParams.get('sorting'),
               year: searchParams.get('year')
          }));

          return () => {
               dispatch({type: CLEAR_FILMS_LIST});
          };
     }, [dispatch, param.type, searchParams]);

     useScrollFetching(config);

     return (
          <>
               <h1>
                    <UITitle title={title}/>
               </h1>
               <Filter />
               <List items={data.allFilms} isLoading={isLoading} error={data.allFilmsError}/>
          </>
     );
};

export default memo(FilmsPage);