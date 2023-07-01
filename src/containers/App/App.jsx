import { Route } from "react-router-dom";
import RoutesCustom from '../RoutesCustom/RoutesCustom';
import Layout from "@layouts/Layout";
import routes from "@api/routes";
import { ModalContextProvider } from "@contexts";
import { Suspense } from "react";
import { UILoader } from "@components/UI";

export const App = () => {
     return (
          <ModalContextProvider>
               <div className="App">
                    <Suspense fallback={<UILoader />}>
                         <RoutesCustom>
                              <Route path="/" element={<Layout />}>
                                   {
                                        Object.entries(routes).map(route => <Route key={route[1].path} path={route[1].path} element={route[1].element}/>)
                                   }
                              </Route>
                         </RoutesCustom>
                    </Suspense>
               </div>
          </ModalContextProvider>
     );
};

