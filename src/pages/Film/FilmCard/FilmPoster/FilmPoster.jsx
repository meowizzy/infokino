import styles from './FilmPoster.module.scss';
import PropTypes from 'prop-types';

const FilmPoster = ({ poster }) => {
     if (!poster.previewUrl && !poster.url) {
          return (
               <div className={styles.poster}>
                    <span className={styles.no_poster}></span>
               </div>         
          );
     }

     return (
          <div className={styles.poster}>
               <span>
                    <img src={poster.previewUrl ? poster.previewUrl : poster.url} alt="Постер" />
               </span>
          </div>
     );
};

export default FilmPoster;

FilmPoster.propTypes = {
     poster: PropTypes.object
};

