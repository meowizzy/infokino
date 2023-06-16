import PropTypes from 'prop-types';
import FilmInfo from './FilmInfo/FilmInfo';
import FilmPoster from './FilmPoster/FilmPoster';
import styles from "./FilmCard.module.scss";

const FilmCard = ({ data }) => {
     return (
          <div className={styles.container}>
               <FilmInfo data={data}/>
               <FilmPoster poster={data.poster}/>
          </div>
     );
};

export default FilmCard;


FilmCard.propTypes = {
     data: PropTypes.object
};

