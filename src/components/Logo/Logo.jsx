import logo from '@public/images/logo.svg';
import styles from './Logo.module.scss';

export const Logo = () => {
     if (!logo) {
          return <></>;
     }

     return (
          <span className={styles.wrap}>
               <img src={logo} alt="INFOKINO" />
          </span>
     );
};