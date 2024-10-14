export enum API_CONSTANTS {
    BASE_URL = "https://api.artic.edu/api/v1/artworks",
    OVERVIEW_FIELDS_TO_FETCH = "id,image_id,title,artist_title,is_public_domain",
    SEARCH_SIZE_LIMIT = 10,
}

export const ART_IMAGE_ENDPOINT = (id: string) =>
    `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export enum LOCAL_STORAGE_KEYS {
    FAVORITES = "favorites",
}
