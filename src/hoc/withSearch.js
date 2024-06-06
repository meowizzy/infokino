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

               const request = await Promise.all([getSearchQuery({
                    query,
                    type: "movie"
               }), getSearchQuery({
                    query,
                    type: "person"
               })]);

               setData({
                    movies: request[0].docs.length ? request[0].docs : [],
                    persons: request[1].docs.length ? request[1].docs : []
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