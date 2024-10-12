import { ComponentProps } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@styles/theme";
import { GlobalStyles } from "@styles/globalStyles";

export const StyledComponentsProvider = ({ children }: ComponentProps<"div">) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};
