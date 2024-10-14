import { API_CONSTANTS } from "@constants/constants";
import { getRequest } from "@utils/getRequest";

export const artworksAPI = {
    async getArtworks({ page = 1, limit = 4 }: { page?: number; limit?: number }) {
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
    async findArtworks(searchQuery: string = "") {
        const data = getRequest({
            path: `${API_CONSTANTS.BASE_URL}/search?q=${searchQuery}&size=${API_CONSTANTS.SEARCH_SIZE_LIMIT}`,
        });
        return data;
    },
};
