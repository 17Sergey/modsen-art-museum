import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SORT_CRITERIES } from "@constants/constants";
import { getNextSortCritery } from "@utils/getNextSortCritery";
import { getTitleForSortCritery } from "@utils/getTitleForSortCritery";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "@styles/theme";
import { Sorting } from ".";

jest.mock("@utils/getNextSortCritery");
jest.mock("@utils/getTitleForSortCritery");

describe("Sorting Component", () => {
    const mockUpdateSort = jest.fn();

    const renderWithTheme = (component: React.ReactNode) => {
        return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("displays current sort criterion", () => {
        const sortCritery = SORT_CRITERIES.ALPHABET_ASC;
        (getTitleForSortCritery as jest.Mock).mockReturnValue("A-Z");

        renderWithTheme(
            <Sorting
                sortCritery={sortCritery}
                updateSort={mockUpdateSort}
            />
        );

        expect(screen.getByText("Sorting: A-Z")).toBeInTheDocument();
    });

    test("calls updateSort with the new sort criterion when button is clicked", () => {
        const sortCritery = SORT_CRITERIES.ALPHABET_ASC;
        (getNextSortCritery as jest.Mock).mockReturnValue(SORT_CRITERIES.ALPHABET_DESC);
        (getTitleForSortCritery as jest.Mock).mockReturnValue("A-Z");

        renderWithTheme(
            <Sorting
                sortCritery={sortCritery}
                updateSort={mockUpdateSort}
            />
        );

        fireEvent.click(screen.getByText("Change"));
        expect(mockUpdateSort).toHaveBeenCalledWith(SORT_CRITERIES.ALPHABET_DESC);
    });
});
