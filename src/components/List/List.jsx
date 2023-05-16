import PropTypes from 'prop-types';
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

List.propTypes = {
     items: PropTypes.array,
     isLoading: PropTypes.bool
};