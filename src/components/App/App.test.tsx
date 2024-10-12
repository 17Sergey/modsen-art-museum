import { App } from ".";
import { render, screen } from "@testing-library/react";

test("demo", () => {
    expect(true).toBe(true);
});

test("Renders the main page", () => {
    render(<App />);
    expect(true).toBeTruthy();
});

describe("User", () => {
    test("renders heading", async () => {
        render(<App />);
        expect(screen.getByRole("heading", { name: /Vite/i })).toBeInTheDocument();
    });
});
