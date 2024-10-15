import { LoadingIcon } from "@components/Icons/LoadingIcon";
import { useTheme } from "styled-components";
import { StyledLoader } from "./Loader.styles";

export const Loader = ({ fill = null }: { fill?: string | null }) => {
    const theme = useTheme();
    return (
        <StyledLoader>
            <LoadingIcon fill={fill || theme.colors.primary} />
        </StyledLoader>
    );
};
