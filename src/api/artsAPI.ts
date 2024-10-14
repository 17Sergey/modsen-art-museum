import { API_CONSTANTS } from "@constants/constants";
import { getRandomNumber } from "@utils/getRandomNumber";
import { getRequest } from "@utils/getRequest";

export const artworksAPI = {
    async getArtworks(page: number = 1, limit: number = API_CONSTANTS.GALLERY_ARTWORKS_LIMIT) {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}?page=${page}&limit=${limit}&fields=${API_CONSTANTS.OVERVIEW_FIELDS_TO_FETCH}`,
        });
        return data;
    },
    async getArtwork(artId: string = "") {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}/${artId}?fields=${API_CONSTANTS.OVERVIEW_FIELDS_TO_FETCH}`,
        });
        return data;
    },
    async getFullArtwork(artId: string = "") {
        const data = getRequest({ path: `${API_CONSTANTS.BASE_URL}/${artId}` });
        return data;
    },
    async getArtworksByIds(artworksIds: string[]) {
        const promises = artworksIds.map((id) => this.getArtwork(id));
        const data = await Promise.all(promises);
        return data;
    },
    async getOtherArtworks() {
        const randomPage = getRandomNumber(100, 5000);
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}?page=${randomPage}&limit=${API_CONSTANTS.OTHER_ARTWORKS_LIMIT}&fields=${API_CONSTANTS.OVERVIEW_FIELDS_TO_FETCH}`,
        });
        return data;
    },
    async findArtworks(searchQuery: string = "") {
        if (!searchQuery) return null;
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}/search?q=${searchQuery}&size=${API_CONSTANTS.SEARCH_SIZE_LIMIT}&fields=${API_CONSTANTS.OVERVIEW_FIELDS_TO_FETCH}`,
        });
        return data;
    },
};
