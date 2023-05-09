import { Carousel } from "@components/Carousel";
import { CarouselSlide } from "@components/CarouselSlide";
import styles from './TopSlider.module.scss';

export const TopSlider = ({ items }) => {
     return (
          <section className={styles.screen}>
               <Carousel 
                    items={items} 
                    Item={CarouselSlide}
                    sliderOptions={{
                         slidesPerView: 1,
                         autoPlay: 8000,
                         loop: true,
                         centeredSlides: true
                    }}
               />
          </section>
     )
};