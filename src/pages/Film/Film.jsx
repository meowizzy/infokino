import { useParams } from "react-router";
import { getFilmByIdAction, setFilmId, setFilmByIdAction } from "@store/actions/actionCreator";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetching } from "@hooks/useFetching";
import { PlayerPanel } from "@components/PlayerPanel";
import FilmCard from "./FilmCard/FilmCard";
import { Collection } from '@screens/Collection';
import { UITabs } from "@components/UI";
import { UILoader } from "@components/UI";

const Film = () => {
     const { id } = useParams();
     const dispatch = useDispatch();
     const data = useSelector(state => state.filmByIdReducer.data);
     useFetching(getFilmByIdAction);
     
     useEffect(() => {
          dispatch(setFilmId(id));
          return () => {
               dispatch(setFilmByIdAction(null));
          };
     }, [dispatch, id]);

     const tabs = [
          { id: 0, label: "Информация о фильме", content: <FilmCard data={data}/> },
          { id: 1, label: "Отзывы", content: "Отзывы" },
     ];

     const StyledCollection = styled.div`
          padding-top: 100px;
     `;

     return (
          data ? 
               <>
                    <PlayerPanel 
                         poster={data.poster} 
                         background={data.backdrop.url} 
                         id={id} 
                         title={data.name} 
                         enName={data.alternativeName}
                    /> 

                    <div className="container" style={{paddingTop: "150px"}}>
                         <UITabs 
                              data={tabs}
                         />
                    </div>
                    <StyledCollection>
                         { !!data.similarMovies.length && <Collection items={data.similarMovies} title={"Похожие фильмы"}/> }
                    </StyledCollection>
               </>
          : <UILoader />
     );
};

export default Film;