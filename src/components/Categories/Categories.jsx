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
     return (
          <div className={styles.container}>
               <nav className={cn(styles.nav, 'container')}>
                    <ul className={styles.list}>
                         <CategoriesItem text="Новинки" icon={NewIcon}/>
                         <CategoriesItem text="Приключения" icon={FantasyIcon}/>
                         <CategoriesItem text="Ужасы" icon={TrillerIcon}/>
                         <CategoriesItem text="Комедии" icon={ComedyIcon}/>
                         <CategoriesItem text="Популярное" icon={PopularIcon}/>
                         <CategoriesItem text="Семейные" icon={FamilyIcon}/>
                         <CategoriesItem text="Мелодраммы" icon={RomanticIcon}/>
                    </ul>
               </nav>
          </div>
     );
};