import { Header } from "@components/Header";
import { Logo } from "@components/Logo";
import { MenuList } from "@components/MenuList";
import { SearchButton } from "@components/Search";
import { AuthButton } from "@components/AuthComponent/AuthButton";
import { UIFavoritesLink } from "@components/UI";
import { WithAuth } from "@hoc/WithAuth";

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
                         <WithAuth>
                              <UIFavoritesLink />
                              <SearchButton />
                         </WithAuth>
                         <AuthButton />
                    </>
               }
          />
     );
};