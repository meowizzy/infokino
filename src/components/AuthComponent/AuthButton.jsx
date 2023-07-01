import { useContext } from 'react';
import { ModalContext } from '@contexts';
import { UIButton } from "@components/UI";
import { AuthComponent } from './AuthComponent';
import { ReactComponent as AuthIcon } from "@public/images/user-icon.svg";

export const AuthButton = () => {
     const { openModal } = useContext(ModalContext);

     const handleClick = e => {
          e.preventDefault();
          openModal({
               content: <AuthComponent />
          });
     };

     return (
          <UIButton 
               Icon={AuthIcon}
               text="Авторизация"
               type="default"
               onClick={handleClick}
          />
     )
};