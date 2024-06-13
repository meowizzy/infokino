import withSearch from '@hoc/withSearch';
import { ReactComponent as SearchIcon } from "@public/images/search-icon.svg";
import { SearchInput } from './SearchInput/SearchInput';
import styles from './Search.module.scss';
import { SearchResults } from './SearchResults/SearchResults';

const SearchContent = ({ isLoading, data, query, handleChange }) => {

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

export default withSearch(SearchContent);