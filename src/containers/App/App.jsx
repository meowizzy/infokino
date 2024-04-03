import { Route } from "react-router-dom";
import RoutesCustom from '../RoutesCustom/RoutesCustom';
import Layout from "@layouts/Layout";
import routes from "@api/routes";
import { Suspense, useEffect } from "react";
import { UILoader } from "@components/UI";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../../store/reducers/userReducer";

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
                                   Object.entries(routes).map(route => <Route key={route[1].path} path={route[1].path} element={route[1].element}/>)
                              }
                         </Route>
                    </RoutesCustom>
               </Suspense>
          </div>
     );
};

