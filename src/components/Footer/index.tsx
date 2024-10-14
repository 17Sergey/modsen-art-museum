import { StyledContainer } from "@components/Container/Container.styles";
import { StyledBackground, StyledFooter } from "./Footer.styles";
import { MuseumLogo } from "@components/Logos/MuseumLogo";
import { ModsenLogo } from "@components/Logos/ModsenLogo";

export const Footer = () => {
    return (
        <StyledBackground>
            <StyledContainer>
                <StyledFooter>
                    <MuseumLogo
                        width="12rem"
                        height="3.5rem"
                    />
                    <ModsenLogo />
                </StyledFooter>
            </StyledContainer>
        </StyledBackground>
    );
};
