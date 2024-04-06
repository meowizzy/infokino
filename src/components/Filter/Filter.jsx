import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import cn from 'classnames';
import useClickOutside from "@hooks/useClickOutside";
import { Sorting } from "@components/Sorting";
import FilterGenres from "./FilterGenres/FilterGenres";
import FilterCountries from "./FilterCountries/FilterCountries";
import FilterYear from "./FilterYears/FilterYears";
import { UIButton } from "../UI";
import { ReactComponent as FilterIcon } from '@public/images/filter.svg';
import styles from './Filter.module.scss';

export const Filter = () => {
     const [filterOpened, setFilterOpened] = useState(false);
     const filterRef = useClickOutside(setFilterOpened);
     const navigate = useNavigate();
     const location = useLocation();

     const handleFilterSubmit = event => {
          event.preventDefault();
          const formData = Object.fromEntries(new FormData(event.target).entries());
          navigate(location.pathname + `?${new URLSearchParams(formData).toString()}`);
          setFilterOpened(false);
     };

     return (
          <div className={styles.filter_panel}>
               <div ref={filterRef}>
                    <div className={styles.filter_panel__filter_button_wrap}>
                         <UIButton text="Фильтр" classes={styles.filter_panel__filter_btn} Icon={FilterIcon} onClick={() => setFilterOpened(!filterOpened)}/>
                    </div>
                    {
                         filterOpened ?
                              <div className={cn(styles.filter_panel__dropdown, {
                                   [styles.opened]: filterOpened
                              })}>
                                   <form action="#" onSubmit={handleFilterSubmit} className={styles.filter_panel__form}>
                                        <div className={styles.filter_panel__fields}>
                                             <FilterYear />
                                             <FilterGenres />
                                             <FilterCountries />
                                        </div>
                                        <div className={styles.filter_panel__btns}>
                                             <UIButton text="Очистить" type="primary"/>
                                             <UIButton text="Поиск" type="primary"/>
                                        </div>
                                   </form>
                              </div>
                              : ""
                    }
               </div>
               <Sorting />
          </div>
     );
};