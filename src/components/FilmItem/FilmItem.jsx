import { memo } from 'react';
import PropTypes from 'prop-types';
import getFilmDuration from '@helpers/getFilmDuration';
import { Link } from 'react-router-dom';
import { UIRating } from '../UI';
import { ListFavoritesButton } from '../ListFavoritesButton';
import { WithAuth } from '@hoc/WithAuth';
import cn from 'classnames';

import styles from './FilmItem.module.scss';


export const FilmItem = memo(
     ({ item, clas }) => {
          const { poster, name, alternativeName, year, movieLength, rating, id } = item;
          const filmDuration = getFilmDuration(movieLength);


          return (
               <div className={cn(styles.item, clas)}>
                    <Link className={styles.item__link} to={`/film/${id}`}/>
                    <div className={cn(styles.item__pic, {
                         [styles.item__no_pic]: !poster
                    })}>
                         { poster ? <img src={poster.previewUrl} alt={name || alternativeName} /> : ''}
                    </div>
                    <div className={styles.item__info}>
                         <p className={styles.item__title}>{name || alternativeName}</p>
                         <div className={styles.item__info_bot}>
                              { !!year && 
                                   <p className={styles.item__year}>
                                        {year} 
                                   </p>
                              }
                              { !!movieLength &&
                                   <p className={styles.item__duration}>
                                        {movieLength ? filmDuration : "Сериал"}
                                   </p>
                              }
                         </div>
                    </div>
                    <WithAuth>
                         <ListFavoritesButton className={styles.favoriteBtn} filmId={id}/>
                    </WithAuth>
                    { !!rating && <UIRating type="medium" text={rating.kp.toFixed(1)}/> }
               </div>
          )
     }
);

FilmItem.propTypes = {
     item: PropTypes.object,
     clas: PropTypes.string
};