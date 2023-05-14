import { Outlet, useLocation } from 'react-router-dom'; 
import { HeaderPanel } from "@containers/HeaderPanel";

const Layout = () => {
     const location = useLocation();
     const isMain = location.pathname === '/';

     let container;

     if (isMain) {
          container = (
               <Outlet />
          );
     } else {
          container = (
               <div className="container" style={{ paddingTop: '50px' }}>
                    <Outlet />
               </div>
          );
     }

     return (
          <>
               <HeaderPanel />
               <main role="main">
                    {container}
               </main>
          </>
     );
};

export default Layout;