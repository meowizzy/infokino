import { Route } from "react-router-dom";
import RoutesCustom from '../RoutesCustom/RoutesCustom';
import Layout from "@layouts/Layout";
import routes from "@api/routes";
import { Suspense, useEffect } from "react";
import { UILoader } from "@components/UI";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/reducers/userReducer";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { checkIsAdminExist } from "@services/checkIsAdminExist";

export const App = () => {
     const dispatch = useDispatch();

     useEffect(() => {
          checkIsAdminExist();
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

