import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@components/App";
import { StyledComponentsProvider } from "@context/StyledComponentsProvider";
import { FavoritesProvider } from "@context/FavoritesProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyledComponentsProvider>
            <FavoritesProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </FavoritesProvider>
        </StyledComponentsProvider>
    </StrictMode>
);
