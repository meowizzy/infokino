import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UIRating, UIButton } from '../UI';
import cn from 'classnames';
import styles from './CarouselSlide.module.scss';

export const CarouselSlide = ({ item, clas }) => {
     const { poster, name, rating, alternativeName, shortDescription, id } = item;

     return (
          <div className={cn(styles.item, clas)}>
               <div className={cn(styles.item__pic)}>
                    <img className={styles.item__pic_blur} src={poster.previewUrl || poster.url} alt={name || alternativeName} />
                    <img src={poster.previewUrl || poster.url} alt={name || alternativeName} />
               </div>
               <div className={cn(styles.item__info, 'carousel-info')}>
                    <p className={styles.item__title}>
                         {name || alternativeName}
                    </p>
                    <div className={styles.item__desc}>
                         {shortDescription}
                    </div>
                    <Link to={`/film/${id}`}>
                         <UIButton text="Смотреть"/>
                    </Link>
               </div>
               <UIRating text={rating.kp.toFixed(1)} type="large"/>
          </div>
     )
};


CarouselSlide.propType = {
     item: PropTypes.object,
     clas: PropTypes.string
}