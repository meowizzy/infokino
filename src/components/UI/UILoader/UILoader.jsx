import styles from './UILoader.module.scss';

const UILoader = () => {
     return (
          <div className={styles.wrapper}>
               <div className={styles.lds_ellipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
               </div>
          </div>
     );
};


export default UILoader;