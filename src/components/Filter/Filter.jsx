import { Sorting } from "@components/Sorting";
import FilterGenres from "./FilterGenres/FilterGenres";
import { UIButton } from "../UI";
import { ReactComponent as FilterIcon } from '@public/images/filter.svg';
import styles from './Filter.module.scss';
import { useState } from "react";
import useClickOutside from "@hooks/useClickOutside";

export const Filter = () => {
     const [filterOpened, setFilterOpened] = useState(false);
     const filterRef = useClickOutside(setFilterOpened);

     const handleFilterSubmit = event => {
          event.preventDefault();
          console.log(Object.fromEntries(new FormData(event.target).entries()))
     };

     return (
          <div className={styles.filter_panel}>
               <div ref={filterRef}>
                    <div className={styles.filter_panel__filter_button_wrap}>
                         <UIButton text="Фильтр" classes={styles.filter_panel__filter_btn} Icon={FilterIcon} onClick={() => setFilterOpened(!filterOpened)}/>
                    </div>
                    {
                         filterOpened && <div className={styles.filter_panel__dropdown}>
                              <form action="#" onSubmit={handleFilterSubmit} className={styles.filter_panel__form}>
                                   <div className={styles.filter_panel__fields}>
                                        <FilterGenres />
                                   </div>
                                   <div className={styles.filter_panel__btns}>
                                        <UIButton text="Очистить" type="primary"/>
                                        <UIButton text="Поиск" type="primary"/>
                                   </div>
                              </form>
                         </div>
                    }
               </div>
               <Sorting />
          </div>
     );
};