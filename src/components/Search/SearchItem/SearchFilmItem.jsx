import styles from './SearchItem.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const SearchFilmItem = ({ data }) => {
     const { poster, name, year, genre, id } = data;

     return (
          name?.length && poster?.length && year ? <li className={styles.item}>
               <Link to={`/film/${id}`}></Link>
               <div className={styles.poster}>
                    <div className={cn(styles.poster_in, {
                         [styles.no_pic]: !poster
                    })}>
                         { poster && <img src={poster} alt={name} /> }
                    </div>
               </div>
               <div className={styles.info}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.subtitle}>
                         <span>{genre} Год выхода: {year}</span>
                    </p>
               </div>
          </li> : ''
     );
};

export default SearchFilmItem