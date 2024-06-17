import { Outlet, useLocation } from 'react-router-dom';
import { HeaderPanel } from "@containers/HeaderPanel";

export const Layout = () => {
     const location = useLocation();
     const withoutContainer = location.pathname === '/' || location.pathname.includes('/film/');

     let container;

     if (withoutContainer) {
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