import { useState, useMemo } from 'react';
import { getSearchQuery } from '@services/kinoinfo';
import useDebounce from '@hooks/useDebounce';
import { SearchInput } from './SearchInput/SearchInput';
import styles from './Search.module.scss';
import { SearchResults } from './SearchResults/SearchResults';
import { ReactComponent as SearchIcon } from "@public/images/search-icon.svg";

const SearchContent = () => {
     const [query, setQuery] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const [data, setData] = useState({
          movies: null,
          persons: null
     });

     const getData = useDebounce(useMemo(() => (query) => {
          (async () => {
               setIsLoading(true);
               const movies = await getSearchQuery({
                    query,
                    type: "movie"
               });

               const persons = await getSearchQuery({
                    query,
                    type: "person"
               });

               setData({
                    movies: movies.docs.length ? movies.docs : [],
                    persons: persons.docs.length ? persons.docs : []
               });
               setIsLoading(false);
          })();
     }, []), 800);


     const handleChange = e => {
          const value = e.target.value;
          if (value.length) getData(value);
          else setData({ movies: null, films: null });
          setQuery(value);
     };

     return (
          <div className={styles.container}>
               <div className={styles.field}>
                    <span className={styles.icon}><SearchIcon /></span>
                    <SearchInput value={query} onChange={handleChange}/>
               </div>
               <SearchResults loading={isLoading} data={data}/>
          </div>
     );
};

export default SearchContent;