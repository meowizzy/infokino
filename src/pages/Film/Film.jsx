import { useParams } from "react-router";
import { getFilmByIdAction, setFilmId, setFilmByIdAction } from "@store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetching } from "@hooks/useFetching";
import { PlayerPanel } from "@components/PlayerPanel";
import FilmCard from "./FilmCard/FilmCard";
import { UITabs } from "@components/UI";
import { UILoader } from "@components/UI";

const Film = () => {
     const path = useParams();
     const id = path.id; 
     const dispatch = useDispatch();
     const data = useSelector(state => state.filmByIdReducer.data);

     useFetching(getFilmByIdAction);
     
     useEffect(() => {
          dispatch(setFilmId(id));
          return () => {
               dispatch(setFilmByIdAction(null));
          };
     }, []);

     const tabs = [
          { id: 0, label: "Информация о фильме", content: <FilmCard data={data}/> },
          { id: 1, label: "Отзывы", content: "Отзывы" },
     ];

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
               </>
          : <UILoader />
     );
};

export default Film;