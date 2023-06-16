import styles from './Error.module.scss';

export const Error = ({ message = "Упс... что-то пошло не так!" }) => {
     return (
          <div className={styles.container}>
               <p>{message}🙁</p>
          </div>
     );
};   
