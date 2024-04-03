import styles from './AuthComponent.module.scss';
import Register from './Register/Register';
import Login from './Login/Login';
import { UITabs } from '../UI';
import { useContext, useMemo } from "react";
import { ModalContext } from "@contexts";
export const AuthComponent = () => {
     const { closeModal } = useContext(ModalContext);
     const config = useMemo(() => {
          return [
               { id: 0, label: "Вход", content: <Login closeModal={closeModal}/> },
               { id: 1, label: "Регистрация", content: <Register closeModal={closeModal} /> },
          ]
     }, []);

     return (
          <div className={styles.container}>
               <UITabs data={config} className={styles.tabsWrap}/>
          </div>
     );
};