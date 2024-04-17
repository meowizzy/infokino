import PropTypes from 'prop-types';
import { UILoader } from '../UI';
import { FilmItem } from '../FilmItem';
import { Error } from '../Error';
import styles from './List.module.scss';

export const Grid = ({ children }) => {
     return (
          <div className={styles.items}>
              {children}
          </div>
     )
};
export const List = ({items, isLoading, error, errorMsg = "Ничего не найдено"}) => {
     if (!items.length && !error) {
          return (
              <UILoader />
          );
     }

     if (error) {
          return <Error message={errorMsg}/>
     }

     return (
          <>
               <Grid>
                    {
                         items.map(item => <FilmItem key={item.id} item={item}/>)
                    }
               </Grid>
               { isLoading && <UILoader /> }
          </>
     );
};

List.propTypes = {
     items: PropTypes.array,
     isLoading: PropTypes.bool
};