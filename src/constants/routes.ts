import { Details } from "@pages/Details";
import { Favorites } from "@pages/Favorites";
import { Home } from "@pages/Home";

enum PATHS {
    HOME = "/",
    DETAILS = "/details/:id",
    FAVORITES = "/favorites",
}

export const routes = [
    { path: PATHS.HOME, component: Home },
    { path: PATHS.DETAILS, component: Details },
    { path: PATHS.FAVORITES, component: Favorites },
];
