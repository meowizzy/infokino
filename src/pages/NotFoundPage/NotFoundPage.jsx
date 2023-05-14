import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from '@public/images/vr3.svg';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
     return (
          <div className={styles.container}>
               <div className={styles.pic} title="Перейти на главную">
                    <Link to="/">
                         <Icon />
                    </Link>
               </div>
               <div className={styles.text}>
                    404 <br/>Directed by <br/>ROBERT B. WEIDE
               </div>
          </div>
     );
};

export default NotFoundPage;