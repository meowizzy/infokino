import { Routes, Route } from "react-router-dom";
import Layout from "@layouts/Layout";
import routes from "@api/routes";

export const App = () => {
     return (
          <div className="App">
               <Routes>
                    <Route path="/" element={<Layout />}>
                         {
                              Object.entries(routes).map(route => <Route key={route[1].path} path={route[1].path} element={route[1].element}/>)
                         }
                    </Route>
               </Routes>
          </div>
     );
};

