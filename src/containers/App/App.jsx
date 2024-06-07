import { Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { fetchUserData } from "@store/reducers/auth/userReducer";
import RoutesCustom from '../RoutesCustom/RoutesCustom';
import routes from "@app/config/routes";
import Layout from "@layouts/Layout";
import { UILoader } from "@components/UI";

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
                              {
                                   Object
                                       .values(routes)
                                       .map(value => {
                                            return <Route
                                                key={value.path}
                                                path={value.path}
                                                element={
                                                     <ProtectedRoute
                                                       isPrivate={value.isPrivate}
                                                       >
                                                            {value.element}
                                                       </ProtectedRoute>
                                                }/>
                                       })
                              }
                         </Route>
                    </RoutesCustom>
               </Suspense>
          </div>
     );
};

