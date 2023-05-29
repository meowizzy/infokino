import { NavLink } from 'react-router-dom';
import styles from './MenuList.module.scss';


export const MenuList = () => {
     const items = [
          { path: "/", title: "Главная" },
          { path: "films/movie", title: "Фильмы"},
          { path: "films/cartoon", title: "Мультфильмы" },
          { path: "films/tv-series", title: "Сериалы" },
          { path: "films/anime", title: "Аниме" },
          { path: "films/animated-series", title: "Анимационные сериалы" },
     ];

     return (
          <nav className={styles.navigation}>
               <ul className={styles.navigation__list}>
                    {
                         items.map(item => {
                              if (item.path === '*') return '';
                              return (
                                   <li key={item.path} className={styles.navigation__item}>
                                        <NavLink to={item.path} children={item.title}/>
                                   </li>
                              )
                         })
                    }
               </ul>
          </nav>
     );
};