import cn from 'classnames';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import styles from './Categories.module.scss';

import { ReactComponent as FantasyIcon } from "@public/images/Frame-1.svg";
import { ReactComponent as RomanticIcon } from "@public/images/Frame-2.svg";
import { ReactComponent as NewIcon } from "@public/images/Frame-3.svg";
import { ReactComponent as PopularIcon } from "@public/images/Frame-4.svg";
import { ReactComponent as ComedyIcon } from "@public/images/Frame-5.svg";
import { ReactComponent as FamilyIcon } from "@public/images/Frame-6.svg";
import { ReactComponent as TrillerIcon } from "@public/images/trillerssvg.svg";


export const Categories = () => {
     const list = [
          { path: "/films/movie?sorting=year", text: "Новинки", icon: NewIcon},
          { path: "/films/movie?genre=приключения", text: "Приключения", icon: FantasyIcon},
          { path: "/films/movie?genre=ужасы", text: "Ужасы", icon: TrillerIcon},
          { path: "/films/movie?genre=комедия", text: "Комедии", icon: ComedyIcon},
          { path: "/films/movie?sorting=rating.kp", text: "Популярное", icon: PopularIcon},
          { path: "/films/movie?genre=семейный", text: "Семейные", icon: FamilyIcon},
          { path: "/films/movie?genre=драма", text: "Драмы", icon: RomanticIcon},
     ];

     return (
          <div className={styles.container}>
               <nav className={cn(styles.nav, 'container')}>
                    <ul className={styles.list}>
                         {
                              list.map(item => (
                                   <CategoriesItem key={item.path} path={item.path} text={item.text} icon={item.icon}/>
                              ))
                         }
                    </ul>
               </nav>
          </div>
     );
};