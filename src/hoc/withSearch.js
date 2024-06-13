import { useState, useMemo } from 'react';
import { getSearchQuery } from '@services/kinopoisk.service';
import useDebounce from '@hooks/useDebounce';

const withSearch = (Component) => {
     return () => {
          const [query, setQuery] = useState("");
          const [isLoading, setIsLoading] = useState(false);
          const [data, setData] = useState({
               movies: null,
               persons: null
          });

          const getData = useDebounce(useMemo(() => async (query) => {
               setIsLoading(true);

               const [movies, persons] = await Promise.all([getSearchQuery({
                    query,
                    type: "movie"
               }), getSearchQuery({
                    query,
                    type: "person"
               })]);

               setData({
                    movies: movies.data.docs.length ? movies.data.docs : [],
                    persons: persons.data.docs.length ? persons.data.docs : []
               });

               setIsLoading(false);
          }, []), 800);

          const handleChange = e => {
               const value = e.target.value;
               if (value.length) getData(value);
               else setData({ movies: null, films: null });
               setQuery(value);
          };


          return (
               <Component
                    query={query}
                    handleChange={handleChange}
                    isLoading={isLoading}
                    data={data}
               />
          )
     };
};

export default withSearch;