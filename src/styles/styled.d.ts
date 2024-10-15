import "styled-components";

interface ThemeColors {
    primary: string;
    primaryTransparent: string;
    secondary: string;
    background: string;
    white: string;
    text: string;
    textTransparent: string;
    lightGray: string;
    inputBackground: string;
    error: string;
}

interface ThemeFonts {
    primary: string;
    secondary: string;
    fontSize: {
        small: string;
        base: string;
        medium: string;
        subheading: string;
        heading: string;
        headingLarge: string;
    };
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: ThemeColors;
        fonts: ThemeFonts;
    }
}
