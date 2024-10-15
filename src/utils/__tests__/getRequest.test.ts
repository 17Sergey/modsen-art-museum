import { getRequest } from "../getRequest";
import fetch from "jest-fetch-mock";

beforeEach(() => {
    fetch.resetMocks();
});

describe("getRequest", () => {
    test("returns data when the fetch is successful", async () => {
        const mockData = { data: { id: 129884 } };
        fetch.mockResponseOnce(JSON.stringify(mockData));

        const result = await getRequest({ path: "https://api.artic.edu/api/v1/artworks/129884" });

        expect(result.id).toEqual(mockData.data.id);
    });

    test("throws an error when the fetch fails", async () => {
        fetch.mockResponseOnce("", { status: 404 });

        await expect(
            getRequest({ path: "https://api.artic.edu/api/v1/artworks1/129884" })
        ).rejects.toThrow("Error occured while fetching data...");
    });

    test("true", () => {
        expect(true).toBe(true);
    });
});
