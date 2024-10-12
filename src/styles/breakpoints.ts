interface SizePx {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
}

const sizePx: SizePx = {
    xs: "400px", // for small screen mobile
    sm: "600px", // for mobile screen
    md: "900px", // for tablets
    lg: "1280px", // for laptops
    xl: "1440px", // for desktop / monitors
    xxl: "1920px", // for big screens
};

export const device = {
    xs: `(max-width: ${sizePx.xs})`,
    sm: `(max-width: ${sizePx.sm})`,
    md: `(max-width: ${sizePx.md})`,
    lg: `(max-width: ${sizePx.lg})`,
    xl: `(max-width: ${sizePx.xl})`,
    xxl: `(max-width: ${sizePx.xxl})`,
};
