import styles from './AuthComponent.module.scss';
import Register from './Register/Register';
import Login from './Login/Login';
import { UITabs } from '../UI';
import { useMemo } from "react";
import {useSelector} from "react-redux";
export const AuthComponent = () => {
     const config = useMemo(() => {
          return [
               { id: 0, label: "Вход", content: <Login/> },
               { id: 1, label: "Регистрация", content: <Register /> },
          ]
     }, []);

     return (
          <div className={styles.container}>
               <UITabs data={config} className={styles.tabsWrap}/>
          </div>
     );
};