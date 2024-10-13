import { getRequest } from "@utils/getRequest";

enum API_CONSTANTS {
    BASE_URL = "https://api.artic.edu/api/v1/artworks",
    FIELDS_TO_FETCH = "id,title,artist_display,is_public_domain,thumbnail",
    SEARCH_SIZE_LIMIT = 10,
}

export const artworksAPI = {
    getArtworks: async ({ page = 1, limit = 4 }: { page?: number; limit?: number }) => {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}?page=${page}&limit=${limit}&fields=${API_CONSTANTS.FIELDS_TO_FETCH}`,
        });
        return data;
    },
    getArtworksShort: async (artId: string = "") => {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}/${artId}&fields=${API_CONSTANTS.FIELDS_TO_FETCH}`,
        });
        return data;
    },
    getArtworksFull: async (artId: string = "") => {
        const data = getRequest({ path: `${API_CONSTANTS.BASE_URL}/${artId}` });
        return data;
    },
    findArtworks: async (searchQuery: string = "") => {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}/search?q=${searchQuery}&size=${API_CONSTANTS.SEARCH_SIZE_LIMIT}`,
        });
        return data;
    },
};
