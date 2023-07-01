import styles from './AuthComponent.module.scss';
import Register from './Register/Register';
import Login from './Login/Login';
import { UITabs } from '../UI';

export const AuthComponent = () => {
     const config = [
          { id: 0, label: "Вход", content: <Login /> },
          { id: 1, label: "Регистрация", content: <Register /> },
     ];

     return (
          <div className={styles.container}>
               <UITabs data={config}/>
          </div>
     );
};