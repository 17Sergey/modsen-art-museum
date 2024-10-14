import { StyledContainer } from "@components/Container/Container.styles";
import { MuseumLogo } from "@components/Logos/MuseumLogo";
import { HeaderMenu } from "./HeaderMenu";

import { StyledHeader, StyledHeaderBackground } from "./Header.styles";

export const Header = () => {
    return (
        <StyledHeaderBackground>
            <StyledContainer>
                <StyledHeader>
                    <MuseumLogo
                        width="12rem"
                        height="3.5rem"
                        textColor="#FFF"
                    />
                    <HeaderMenu />
                </StyledHeader>
            </StyledContainer>
        </StyledHeaderBackground>
    );
};
