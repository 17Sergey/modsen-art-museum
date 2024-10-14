import { createContext, ReactNode, useState } from "react";

import {
    loadFavoritesFromLocalStorage,
    saveFavoritesToLocalStorage,
} from "@utils/favoritesLocalStorage";

type FavoritesContextType = {
    favoriteIds: Array<FavoriteIdType>;
    addFavorite: (id: FavoriteIdType) => void;
    removeFavorite: (id: FavoriteIdType) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favoriteIds, setFavoriteIds] = useState<Array<FavoriteIdType>>(
        loadFavoritesFromLocalStorage()
    );

    const addFavorite = (id: string) => {
        const modifiedFavorites = [...favoriteIds, id];
        setFavoriteIds(modifiedFavorites);
        saveFavoritesToLocalStorage(modifiedFavorites);
    };

    const removeFavorite = (idToDelete: string) => {
        const modifiedFavorites = favoriteIds.filter((id) => id !== idToDelete);
        setFavoriteIds(modifiedFavorites);
        saveFavoritesToLocalStorage(modifiedFavorites);
    };

    const value = { favoriteIds, addFavorite, removeFavorite };

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};
