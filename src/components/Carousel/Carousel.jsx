import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css'; 
import cn from 'classnames';
import styles from './Carousel.module.scss';
import { UILoader } from '../UI';



export const Carousel = ({ sliderOptions, items, Item}) => {
     const { 
          slidesPerView = 3, 
          loop = false, 
          centeredSlides = false, 
          spaceBetween = 0,
          autoPlay = 9000000000,
          speed = 900
     } = sliderOptions;

     if (!items.length) {
          return (
               <UILoader />
          )
     }

     return (
          <div className={cn(styles.slider, 'Carousel')}>
               <div className={cn(styles.slider__container, 'container')}>
                    <Swiper 
                         navigation={true}
                         modules={[Navigation, Autoplay]}
                         slidesPerView={slidesPerView} 
                         spaceBetween={spaceBetween}
                         autoplay={{delay: autoPlay}}
                         speed={speed} 
                         loop={loop}
                         centeredSlides={centeredSlides}>
                         {
                              items.map(item => (
                                   item.poster &&
                                   <SwiperSlide key={item.id} className={styles.slider__item}>
                                        <Item item={item}/>
                                   </SwiperSlide>
                              ))
                         }
                    </Swiper>
               </div>
          </div>
     );
};


Carousel.propTypes = {
     slidesPerView: PropTypes.number,
     items: PropTypes.array
};