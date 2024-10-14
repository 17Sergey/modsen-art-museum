import { Details } from "@pages/Details";
import { Favorites } from "@pages/Favorites";
import { Home } from "@pages/Home";

enum PATHS {
    HOME = "/",
    ARTWORK_DETAILS = "/artworks/:id",
    FAVORITES = "/favorites",
}

export const routes = [
    { path: PATHS.HOME, component: Home },
    { path: PATHS.ARTWORK_DETAILS, component: Details },
    { path: PATHS.FAVORITES, component: Favorites },
];
