import { LOCAL_STORAGE_KEYS } from "@constants/constants";

export const loadFavoritesFromLocalStorage = (): FavoriteIdType[] => {
    try {
        const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES);
        return storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
        console.error("Error loading from localStorage:", error);
        return [];
    }
};

export const saveFavoritesToLocalStorage = (favoriteIds: FavoriteIdType[]) => {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(favoriteIds));
    } catch (error) {
        console.error("Error saving to localStorage:", error);
    }
};
