import { Route } from "react-router-dom";
import RoutesCustom from '../RoutesCustom/RoutesCustom';
import Layout from "@layouts/Layout";
import routes from "@api/routes";
import { ModalContextProvider } from "@contexts";

export const App = () => {
     return (
          <ModalContextProvider>
               <div className="App">
                    <RoutesCustom>
                         <Route path="/" element={<Layout />}>
                              {
                                   Object.entries(routes).map(route => <Route key={route[1].path} path={route[1].path} element={route[1].element}/>)
                              }
                         </Route>
                    </RoutesCustom>
               </div>
          </ModalContextProvider>
     );
};

