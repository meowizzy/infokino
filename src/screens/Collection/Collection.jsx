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
                         speed: 300,
                         breakpoints: {
                              0: {
                                   slidesPerView: 2,
                                   spaceBetween: 10
                              },
                              960: {
                                   slidesPerView: 3
                              },
                              1280: {
                                   slidesPerView: 4
                              },
                              1281: {
                                   slidesPerView: 5
                              }
                         }
                    }}
               />
          </section>
     );
};