import { NavLink } from 'react-router-dom';
import routes from '@api/routes';
import styles from './MenuList.module.scss';


export const MenuList = () => {
     const items = [
          {href: routes.home.path, text: 'Главная'},
          {href: routes.films.path, text: 'Все фильмы'}
     ];

     return (
          <nav className={styles.navigation}>
               <ul className={styles.navigation__list}>
                    {
                         items.map(item => {
                              return (
                                   <li key={item.href} className={styles.navigation__item}>
                                        <NavLink to={item.href} children={item.text}/>
                                   </li>
                              )
                         })
                    }
               </ul>
          </nav>
     );
};