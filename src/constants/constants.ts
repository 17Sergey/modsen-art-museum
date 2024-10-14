export enum API_CONSTANTS {
    BASE_URL = "https://api.artic.edu/api/v1/artworks",
    OVERVIEW_FIELDS_TO_FETCH = "id,image_id,title,artist_title,is_public_domain,date_end",
    SEARCH_SIZE_LIMIT = 10,
    OTHER_ARTWORKS_LIMIT = 12,
    GALLERY_ARTWORKS_LIMIT = 4,
}

export const ART_IMAGE_ENDPOINT = (id: string) =>
    `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export enum LOCAL_STORAGE_KEYS {
    FAVORITES = "favorites",
}

export enum SORT_CRITERIES {
    ALPHABET_ASC = "alphabet_asc",
    ALPHABET_DESC = "alphabet_desc",
    DATE_ASC = "date_asc",
    DATE_DESC = "date_desc",
}
