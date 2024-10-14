import { SORT_CRITERIES } from "@constants/constants";

export const getNextSortCritery = (sortCritery: SORT_CRITERIES) => {
    if (sortCritery === SORT_CRITERIES.ALPHABET_ASC) return SORT_CRITERIES.ALPHABET_DESC;
    if (sortCritery === SORT_CRITERIES.ALPHABET_DESC) return SORT_CRITERIES.DATE_ASC;
    if (sortCritery === SORT_CRITERIES.DATE_ASC) return SORT_CRITERIES.DATE_DESC;
    if (sortCritery === SORT_CRITERIES.DATE_DESC) return SORT_CRITERIES.ALPHABET_ASC;

    return SORT_CRITERIES.ALPHABET_ASC;
};
