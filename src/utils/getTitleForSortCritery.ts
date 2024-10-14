import { SORT_CRITERIES } from "@constants/constants";

export const getTitleForSortCritery = (sortCritery: SORT_CRITERIES) => {
    if (sortCritery === SORT_CRITERIES.ALPHABET_ASC) return "A-Z";
    if (sortCritery === SORT_CRITERIES.ALPHABET_DESC) return "Z-A";
    if (sortCritery === SORT_CRITERIES.DATE_ASC) return "Date asc.";
    if (sortCritery === SORT_CRITERIES.DATE_DESC) return "Date desc.";

    return SORT_CRITERIES.ALPHABET_ASC;
};
