import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
    StyledLink,
    StyledDesktopMenu,
    StyledBurgerIcon,
    StyledBurgerMenu,
    StyledCrossIcon,
} from "./HeaderMenu.styles";

import { FavoritesIcon } from "@components/Icons/FavoritesIcon";
import { HomeIcon } from "@components/Icons/HomeIcon";

export const HeaderMenu = () => {
    const { pathname } = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    const iconsSize = { width: "1.5rem", height: "1.5rem" };

    const getMenuItemsJSX = () => {
        return (
            <>
                {pathname !== "/" && (
                    <li>
                        <StyledLink to="/">
                            <HomeIcon {...iconsSize} />
                            Home
                        </StyledLink>
                    </li>
                )}
                <li>
                    <StyledLink to="/favorites">
                        <FavoritesIcon {...iconsSize} />
                        Your favorites
                    </StyledLink>
                </li>
            </>
        );
    };

    return (
        <nav>
            <StyledBurgerIcon onClick={toggleMenu} />
            <ul>
                <StyledDesktopMenu>{getMenuItemsJSX()}</StyledDesktopMenu>
                <StyledBurgerMenu $isMenuOpen={isMenuOpen}>
                    <StyledCrossIcon onClick={toggleMenu} />
                    {getMenuItemsJSX()}
                </StyledBurgerMenu>
            </ul>
        </nav>
    );
};
