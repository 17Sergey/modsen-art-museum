import { getTitleForSortCritery } from "../getTitleForSortCritery";
import { SORT_CRITERIES } from "@constants/constants";

describe("getTitleForSortCritery", () => {
    test('returns "A-Z" when input is ALPHABET_ASC', () => {
        expect(getTitleForSortCritery(SORT_CRITERIES.ALPHABET_ASC)).toBe("A-Z");
    });

    test('returns "Z-A" when input is ALPHABET_DESC', () => {
        expect(getTitleForSortCritery(SORT_CRITERIES.ALPHABET_DESC)).toBe("Z-A");
    });

    test('returns "Date asc." when input is DATE_ASC', () => {
        expect(getTitleForSortCritery(SORT_CRITERIES.DATE_ASC)).toBe("Date asc.");
    });

    test('returns "Date desc." when input is DATE_DESC', () => {
        expect(getTitleForSortCritery(SORT_CRITERIES.DATE_DESC)).toBe("Date desc.");
    });

    test("true", () => {
        expect(true).toBe(true);
    });
});
