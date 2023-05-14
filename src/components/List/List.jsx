import { UILoader } from '../UI';
import { FilmItem } from '../FilmItem';
import styles from './List.module.scss';

export const List = ({ items, isLoading }) => {

     if (!items.length) {
          return (
               <UILoader />
          );
     }

     return (
          <>
               <div className={styles.items}>
                    {
                         items.map(item => (
                              <FilmItem key={item.id} item={item}/>
                         ))
                    }
               </div>
               { isLoading && <UILoader /> }
          </>
     );
};