import { Carousel } from "@components/Carousel";
import { FilmItem } from "@components/FilmItem";
import { UITitle } from "@components/UI";

import styles from './Collection.module.scss';

export const Collection = ({ items, title }) => {
     return (
          <section className={styles.Screen}>
               <div className="container">
                    <UITitle title={title}/> 
               </div>
               <Carousel 
                    items={items} 
                    Item={FilmItem}
                    sliderOptions={{
                         slidesPerView: 5,
                         spaceBetween: 20,
                         speed: 300
                    }}
               />
          </section>
     );
};