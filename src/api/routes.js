import HomePage from "@pages/HomePage/HomePage";
import FilmsPage from "@pages/FilmsPage/FilmsPage";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";

const routes = {
     home: {
          path: '/',
          element: <HomePage />
     },
     films: {
          path: 'films',
          element: <FilmsPage />
     },
     notFound: {
          path: '*',
          element: <NotFoundPage/>
     }
}


export default routes;