import { getNextSortCritery } from "../getNextSortCritery";
import { SORT_CRITERIES } from "@constants/constants";

describe("getNextSortCritery", () => {
    test("returns ALPHABET_DESC when input is ALPHABET_ASC", () => {
        expect(getNextSortCritery(SORT_CRITERIES.ALPHABET_ASC)).toBe(SORT_CRITERIES.ALPHABET_DESC);
    });

    test("returns DATE_ASC when input is ALPHABET_DESC", () => {
        expect(getNextSortCritery(SORT_CRITERIES.ALPHABET_DESC)).toBe(SORT_CRITERIES.DATE_ASC);
    });

    test("returns DATE_DESC when input is DATE_ASC", () => {
        expect(getNextSortCritery(SORT_CRITERIES.DATE_ASC)).toBe(SORT_CRITERIES.DATE_DESC);
    });

    test("returns ALPHABET_ASC when input is DATE_DESC", () => {
        expect(getNextSortCritery(SORT_CRITERIES.DATE_DESC)).toBe(SORT_CRITERIES.ALPHABET_ASC);
    });

    test("true", () => {
        expect(true).toBe(true);
    });
});
