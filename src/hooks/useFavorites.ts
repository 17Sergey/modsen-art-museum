import { FavoritesContext } from "@context/FavoritesProvider";
import { useContext } from "react";

export const useFavorites = () => {
    const favoriteIds = useContext(FavoritesContext);

    if (!favoriteIds) throw new Error("useFavorites must be used within a FavoritesProvider");

    return favoriteIds;
};
