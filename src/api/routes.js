import HomePageAsync from "@pages/HomePage/HomePage.async";
import FilmsPageAsync from "@pages/FilmsPage/FilmsPage.async";
import FilmAsync from "@pages/Film/Film.async";
import NotFoundPageAsync from "@pages/NotFoundPage/NotFoundPage.async";
import ProfileAsync from "@pages/Profile/Profile.async";

export const routesPath = {
     HOME: "/",
     FILMS: "films/:type",
     FILM: "film/:id",
     PROFILE: "profile"
}

const routes = {
     home: {
          path: routesPath.HOME,
          element: <HomePageAsync />
     },
     films: {
          path: routesPath.FILMS,
          element: <FilmsPageAsync/>
     },
     film: {
          path: routesPath.FILM,
          element: <FilmAsync/>
     },
     profile: {
          path: routesPath.PROFILE,
          element: <ProfileAsync />,
          isPrivate: true
     },
     notFound: {
          path: '*',
          element: <NotFoundPageAsync/>
     }
}


export default routes;