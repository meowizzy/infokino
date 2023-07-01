import HomePageAsync from "@pages/HomePage/HomePage.async";
import FilmsPageAsync from "@pages/FilmsPage/FilmsPage.async";
import FilmAsync from "@pages/Film/Film.async";
import NotFoundPageAsync from "@pages/NotFoundPage/NotFoundPage.async";


const routes = {
     home: {
          path: '/',
          element: <HomePageAsync />
     },
     films: {
          path: 'films/:type',
          element: <FilmsPageAsync/>
     },
     film: {
          path: 'film/:id',
          element: <FilmAsync/>
     },
     notFound: {
          path: '*',
          element: <NotFoundPageAsync/>
     }
}


export default routes;