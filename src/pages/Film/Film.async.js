import { lazy } from "react";

const FilmAsync= lazy(() => import('./Film'));

export default FilmAsync;