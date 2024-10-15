import { DetailsPage } from "@pages/Details";
import { FavoritesPage } from "@pages/Favorites";
import { HomePage } from "@pages/Home";

export enum PATHS {
    HOME = "/",
    ARTWORK_DETAILS = "/artworks",
    FAVORITES = "/favorites",
}

export const ROUTES = [
    { path: PATHS.HOME, component: HomePage },
    { path: `${PATHS.ARTWORK_DETAILS}/:id`, component: DetailsPage },
    { path: PATHS.FAVORITES, component: FavoritesPage },
];
