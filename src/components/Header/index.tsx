import { StyledContainer } from "@components/Container/Container.styles";
import { MuseumLogo } from "@components/Logos/MuseumLogo";
import { HeaderMenu } from "./HeaderMenu";

import { StyledHeader, StyledHeaderBackground } from "./Header.styles";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <StyledHeaderBackground>
            <StyledContainer>
                <StyledHeader>
                    <Link to="/">
                        <MuseumLogo
                            width="12rem"
                            height="3.5rem"
                            textColor="#FFF"
                        />
                    </Link>
                    <HeaderMenu />
                </StyledHeader>
            </StyledContainer>
        </StyledHeaderBackground>
    );
};
