import { UIButton } from "@components/UI";
import { ReactComponent as AuthIcon } from "@public/images/user-icon.svg";
import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { MenuList } from "@components/MenuList";
import { SearchButton } from "@components/Search";

export const HeaderPanel = () => {

     return (
          <Header 
               LeftSide={
                    <>
                         <Logo />
                         <MenuList />
                    </>
               }
               RightSide={
                    <>
                         <SearchButton />
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