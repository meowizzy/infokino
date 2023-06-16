import styles from './SearchItem.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const SearchPersonItem = ({ data }) => {
     const { photo, name, profession, id } = data;
     return (
          photo.length && name.length ? <li className={styles.item}>
               <Link to={`/person/${id}`}></Link>
               <div className={styles.poster}>
                    <div className={cn(styles.poster_in, {
                         [styles.no_pic]: !photo
                    })}>
                         { photo && <img src={photo} alt={name} /> }
                    </div>
               </div>
               <div className={styles.info}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.subtitle}>
                         <span>{profession.join(', ')}</span>
                    </p>
               </div>
          </li> : ''
     );
};

export default SearchPersonItem