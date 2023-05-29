import cn from 'classnames';
import styles from './UILoader.module.scss';

const UILoader = ({ customClass = '' }) => {
     return (
          <div className={cn(styles.wrapper, customClass)}>
               <div className={styles.lds_ellipsis}>
                    <div key={1}></div>
                    <div key={2}></div>
                    <div key={3}></div>
                    <div key={4}></div>
               </div>
          </div>
     );
};


export default UILoader;