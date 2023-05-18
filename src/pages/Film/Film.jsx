import { useParams } from "react-router";

const Film = () => {
     const filmId = useParams().id;

     return (
          <>
               <h1>Фильм</h1>
               <div>
                    <iframe style={{width: "100%", height: "500px"}} title={filmId} src={`https://voidboost.net/embed/${filmId}?poster=1&poster_id=4&df=1`} frameBorder="0"></iframe>
               </div>
          </>
     );
};

export default Film;