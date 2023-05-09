import { UIButton } from "@components/UI";
import { ReactComponent as AuthIcon } from "@public/images/user-icon.svg";
import { ReactComponent as SearchIcon } from "@public/images/search-icon.svg";
import { Header } from "@components/Header";
import { Logo } from "@components/Logo";

export const HeaderPanel = () => {
     return (
          <Header 
               LeftSide={
                    <Logo />
               }
               RightSide={
                    <>
                         <UIButton 
                              Icon={SearchIcon}
                              text="Искать"
                              type="default"
                         />
                         <UIButton 
                              Icon={AuthIcon}
                              text="Авторизация"
                              type="default"
                         />      
                    </>  
               }
          />
     );
};