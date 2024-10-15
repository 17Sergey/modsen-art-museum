import {
    loadFavoritesFromLocalStorage,
    saveFavoritesToLocalStorage,
} from "../favoritesLocalStorage";

import { LOCAL_STORAGE_KEYS } from "@constants/constants";

describe("Local Storage Utilities", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test("loadFavoritesFromLocalStorage returns an empty array when no favorites are stored", () => {
        const favorites = loadFavoritesFromLocalStorage();
        expect(favorites).toEqual([]);
    });

    test("loadFavoritesFromLocalStorage returns stored favorites", () => {
        const mockFavorites = [1, 2, 3];
        localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(mockFavorites));

        const favorites = loadFavoritesFromLocalStorage();
        expect(favorites).toEqual(mockFavorites);
    });

    test("saveFavoritesToLocalStorage saves favorites to localStorage", () => {
        const mockFavorites = ["1", "2", "3"];
        saveFavoritesToLocalStorage(mockFavorites);

        const storedFavorites = JSON.parse(
            localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES) || ""
        );
        expect(storedFavorites).toEqual(mockFavorites);
    });
});
