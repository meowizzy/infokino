import { useContext } from 'react';
import { ModalContext } from '@contexts';
import { UIButton } from "@components/UI";
import { AuthComponent } from './AuthComponent';
import { ReactComponent as AuthIcon } from "@public/images/user-icon.svg";
import {useSelector} from "react-redux";

export const AuthButton = () => {
     const { openModal } = useContext(ModalContext);
     const authData = useSelector(state => state?.userReducer?.authData);

     const handleClick = e => {
          e.preventDefault();
          openModal({
               content: <AuthComponent />
          });
     };

     if (authData) {
          return (
              <UIButton
                  Icon={AuthIcon}
                  text={authData.name}
                  type="default"
              />
          );
     }

     return (
          <UIButton 
               Icon={AuthIcon}
               text="Авторизация"
               type="default"
               onClick={handleClick}
          />
     )
};