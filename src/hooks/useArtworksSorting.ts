import { SORT_CRITERIES } from "@constants/constants";

export const useArtworksSorting = (
    data: OverviewArtworkType[] | null,
    sortCritery: SORT_CRITERIES
) => {
    if (!data) return { data: null };

    const sortedData = data.sort((a, b) => {
        switch (sortCritery) {
            case SORT_CRITERIES.ALPHABET_ASC:
                return a.title > b.title ? 1 : -1;
            case SORT_CRITERIES.ALPHABET_DESC:
                return a.title < b.title ? 1 : -1;
            case SORT_CRITERIES.DATE_ASC:
                return a.date_end > b.date_end ? 1 : -1;
            case SORT_CRITERIES.DATE_DESC:
                return a.date_end < b.date_end ? 1 : -1;
            default:
                return 0;
        }
    });

    return { data: sortedData };
};
