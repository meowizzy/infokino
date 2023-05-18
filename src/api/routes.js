import HomePage from "@pages/HomePage/HomePage";
import FilmsPage from "@pages/FilmsPage/FilmsPage";
import Film from "@pages/Film/Film";
import NotFoundPage from "@pages/NotFoundPage/NotFoundPage";


const routes = {
     home: {
          path: '/',
          element: <HomePage />
     },
     films: {
          path: 'films/:type',
          element: <FilmsPage/>
     },
     film: {
          path: 'film/:id',
          element: <Film/>
     },
     notFound: {
          path: '*',
          element: <NotFoundPage/>
     }
}


export default routes;