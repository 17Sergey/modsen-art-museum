type FavoriteIdType = string;

type FullArtWorkType = {
    id: string;
    image_id?: string | null;
    title: string;
    artist_title: string;
    date_start?: number;
    date_end?: number;
    place_of_origin: string;
    dimensions?: string;
    credit_line?: string;
    department_title?: string;
    is_public_domain: boolean;
};

type OverviewArtworkType = {
    id: string;
    image_id?: string | null;
    title: string;
    artist_title: string;
    date_end: number;
    is_public_domain: boolean;
};

type SearchFormInputs = {
    searchQuery: string;
};
