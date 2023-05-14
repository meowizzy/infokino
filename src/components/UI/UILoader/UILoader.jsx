import styles from './UILoader.module.scss';

const UILoader = () => {
     return (
          <div className={styles.wrapper}>
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