import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "@components/App";
import { StyledComponentsProvider } from "@context/StyledComponentsProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyledComponentsProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StyledComponentsProvider>
    </StrictMode>
);
