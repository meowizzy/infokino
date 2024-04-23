import { useContext } from 'react';
import { ModalContext } from '@contexts';
import { UIButton } from "@components/UI";
import { AuthComponent } from './AuthComponent';
import { ReactComponent as AuthIcon } from "@public/images/user-icon.svg";
import { UIAvatar, UIAvatarLoader } from "../UI/UIAvatar/UIAvatar";
import { useSelector } from "react-redux";

export const AuthButton = () => {
     const { openModal } = useContext(ModalContext);
     const { authData, isLoading } = useSelector(state => state.userReducer);
     const handleClick = e => {
          e.preventDefault();
          openModal({
               content: <AuthComponent/>
          });
     };

     if (isLoading) {
          return (
               <UIAvatarLoader/>
          );
     }

     if (authData) {
          return (
              <UIAvatar
                  name={authData?.name}
                  avatar={authData?.avatar}
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