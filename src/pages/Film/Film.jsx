import { useParams } from "react-router";
import { getFilmByIdAction, setFilmId, setFilmByIdAction } from "@store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useFetching } from "@hooks/useFetching";
import { PlayerPanel } from "@components/PlayerPanel";

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

     return (
          data ? <PlayerPanel poster={data.poster} background={data.backdrop.url} id={id} title={data.name} enName={data.alternativeName}/> : ''
     );
};

export default Film;