import { Link } from "react-router-dom";

import { StyledBackground, StyledFooter } from "./Footer.styles";

import { StyledContainer } from "@components/Container/Container.styles";
import { MuseumLogo } from "@components/Logos/MuseumLogo";
import { ModsenLogo } from "@components/Logos/ModsenLogo";

export const Footer = () => {
    return (
        <StyledBackground>
            <StyledContainer>
                <StyledFooter>
                    <Link to="/">
                        <MuseumLogo
                            width="12rem"
                            height="3.5rem"
                        />
                    </Link>
                    <a
                        href="https://www.modsen-software.com/"
                        target="_blank"
                        title="Modsen website"
                    >
                        <ModsenLogo />
                    </a>
                </StyledFooter>
            </StyledContainer>
        </StyledBackground>
    );
};
