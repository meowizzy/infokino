import { Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "@store/reducers/auth/userReducer";
import { routesConfig } from "@app/config/routes";
import { Layout } from "@layouts/common";
import { UILoader } from "@components/UI";
import { WithRoles } from "@hoc/WithRoles";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import RoutesCustom from '../RoutesCustom/RoutesCustom';



export const App = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          dispatch(fetchUserData());
     }, []);

     return (
          <div className="App">
               <Suspense fallback={<UILoader />}>
                    <RoutesCustom>
                         <Route path="/" element={<Layout />}>
                              {Object
                                  .values(routesConfig)
                                  .map(value => {
                                       return (
                                           <Route
                                               key={value.path}
                                               path={value.path}
                                               element={(
                                                   <ProtectedRoute isPrivate={value.isPrivate}>
                                                        <WithRoles roles={value.roles} >
                                                            {value.element}
                                                        </WithRoles>
                                                   </ProtectedRoute>
                                               )}
                                           />)
                                  }
                             )}
                         </Route>
                    </RoutesCustom>
               </Suspense>
          </div>
     );
};

