import { render, screen, fireEvent } from "@testing-library/react";
import { Pagination } from ".";
import { ThemeProvider } from "styled-components";
import { defaultTheme as theme } from "@styles/theme";

describe("Pagination Component", () => {
    const mockChangePage = jest.fn();

    const renderWithTheme = (component: React.ReactNode) => {
        return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
    };

    beforeEach(() => {
        mockChangePage.mockClear();
    });

    test("renders current page and pagination buttons", () => {
        renderWithTheme(
            <Pagination
                currentPage={2}
                changePage={mockChangePage}
                pagesToShow={4}
            />
        );

        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("4")).toBeInTheDocument();
    });

    test("calls changePage with the correct page number when a page is clicked", () => {
        renderWithTheme(
            <Pagination
                currentPage={2}
                changePage={mockChangePage}
            />
        );

        fireEvent.click(screen.getByText("3"));
        expect(mockChangePage).toHaveBeenCalledWith(3);
    });
});
