import { render, screen, fireEvent } from "@testing-library/react";
import { AddFavorite } from ".";
import { FavoritesProvider } from "@context/FavoritesProvider";
import { useFavorites } from "@hooks/useFavorites";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "@styles/theme";

jest.mock("@hooks/useFavorites");

const renderWithProviders = (children: React.ReactNode) => {
    return render(
        <ThemeProvider theme={theme}>
            <FavoritesProvider>{children}</FavoritesProvider>
        </ThemeProvider>
    );
};

describe("AddFavorite Component", () => {
    const mockAddFavorite = jest.fn();
    const mockRemoveFavorite = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        (useFavorites as jest.Mock).mockReturnValue({
            favoriteIds: [],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
        });
    });

    test("adds item to favorites when button is clicked", () => {
        renderWithProviders(<AddFavorite id="1" />);

        fireEvent.click(screen.getByRole("button"));
        expect(mockAddFavorite).toHaveBeenCalledWith("1");
    });

    test("removes item from favorites when button is clicked", () => {
        (useFavorites as jest.Mock).mockReturnValue({
            favoriteIds: ["1"],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
        });

        renderWithProviders(<AddFavorite id="1" />);

        fireEvent.click(screen.getByRole("button"));
        expect(mockRemoveFavorite).toHaveBeenCalledWith("1");
    });

    test("toggles state correctly when adding and removing", () => {
        const { getByRole } = renderWithProviders(<AddFavorite id="1" />);

        fireEvent.click(getByRole("button"));
        expect(mockAddFavorite).toHaveBeenCalledWith("1");

        (useFavorites as jest.Mock).mockReturnValue({
            favoriteIds: ["1"],
            addFavorite: mockAddFavorite,
            removeFavorite: mockRemoveFavorite,
        });

        fireEvent.click(getByRole("button"));
        expect(mockRemoveFavorite).toHaveBeenCalledWith("1");
    });
});
