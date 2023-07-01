import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { MenuList } from "@components/MenuList";
import { SearchButton } from "@components/Search";
import { AuthButton } from "@components/AuthComponent/AuthButton";

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
                         <AuthButton />
                    </>  
               }
          />
     );
};