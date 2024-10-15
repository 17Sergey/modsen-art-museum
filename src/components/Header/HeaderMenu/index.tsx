import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
    StyledLink,
    StyledDesktopMenu,
    StyledBurgerIcon,
    StyledBurgerMenu,
    StyledCrossIcon,
    StyledOverlay,
} from "./HeaderMenu.styles";

import { FavoritesIcon } from "@components/Icons/FavoritesIcon";
import { HomeIcon } from "@components/Icons/HomeIcon";
import { useDisableBodyScroll } from "@hooks/useDisableBodyScroll";
import { PATHS } from "@constants/routes";

export const HeaderMenu = () => {
    const { pathname } = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // burger menu

    const toggleMenu = () => {
        setIsMenuOpen((isMenuOpen) => !isMenuOpen);
    };

    useDisableBodyScroll(isMenuOpen); // if menu is open it disables

    const iconsSize = { width: "1.5rem", height: "1.5rem" };

    const getMenuItemsJSX = () => {
        return (
            <>
                {pathname !== "/" && (
                    <li onClick={isMenuOpen ? toggleMenu : undefined}>
                        <StyledLink to={PATHS.HOME}>
                            <HomeIcon {...iconsSize} />
                            Home
                        </StyledLink>
                    </li>
                )}
                <li onClick={isMenuOpen ? toggleMenu : undefined}>
                    <StyledLink to={PATHS.FAVORITES}>
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
                {isMenuOpen && <StyledOverlay onClick={toggleMenu}></StyledOverlay>}
                <StyledBurgerMenu $isMenuOpen={isMenuOpen}>
                    <StyledCrossIcon onClick={toggleMenu} />
                    {getMenuItemsJSX()}
                </StyledBurgerMenu>
            </ul>
        </nav>
    );
};
