import HomePageAsync from "@pages/HomePage/HomePage.async";
import FilmsPageAsync from "@pages/FilmsPage/FilmsPage.async";
import FilmAsync from "@pages/Film/Film.async";
import ProfileAsync from "@pages/Profile/Profile.async";
import FavoritesPageAsync from "@pages/Favorites/Favorites.async";
import NotFoundPageAsync from "@pages/NotFoundPage/NotFoundPage.async";
import ManagementPageAsync from "@pages/Management/Management.async";
import { roles } from "../auth";

export const routesPath = {
     HOME: "/",
     FILMS: "films/:type",
     FILM: "film/:id",
     PROFILE: "profile",
     TEMP: "temp",
     NOT_FOUND: "*",
     FAVORITES: "favorites",
     RECOMMENDS: "recommends",
     MANAGEMENT: "management",
     USERS: "users",
}

export const routesConfig = {
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
     favoritesPage: {
          path: routesPath.FAVORITES,
          element: <FavoritesPageAsync/>,
          isPrivate: true
     },
     management: {
          path: routesPath.MANAGEMENT + "/*",
          element: <ManagementPageAsync/>,
          roles: [roles.ADMIN],
          isPrivate: true
     },
     notFound: {
          path: routesPath.NOT_FOUND,
          element: <NotFoundPageAsync/>
     }
};