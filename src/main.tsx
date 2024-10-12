import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "@components/App";
import { StyledComponentsProvider } from "@context/StyledComponentsProvider";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <StyledComponentsProvider>
            <App />
        </StyledComponentsProvider>
    </StrictMode>
);
