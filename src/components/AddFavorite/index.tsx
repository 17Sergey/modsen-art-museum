import { useTheme } from "styled-components";
import { StyledButton, StyledForm, StyledIcon } from "./AddFavorite.styles";
import { useFavorites } from "@hooks/useFavorites";
import { FormEvent, useState } from "react";

export const AddFavorite = ({ id }: { id: string }) => {
    const theme = useTheme();
    const { favoriteIds, addFavorite, removeFavorite } = useFavorites();

    const isAlreayAdded = favoriteIds?.some((favoriteId) => favoriteId === id) || false;

    const [isAdded, setIsAdded] = useState<boolean>(isAlreayAdded);

    const addToFavorites = (e: FormEvent<HTMLButtonElement>) => {
        if (isAdded) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
        setIsAdded((isAdded) => !isAdded);
        e.preventDefault();
    };

    return (
        <StyledForm onSubmit={(e: FormEvent) => e.preventDefault()}>
            <StyledButton onClick={addToFavorites}>
                <StyledIcon
                    stroke={theme.colors.primary}
                    fill={isAdded ? theme.colors.primary : "transparent"}
                />
            </StyledButton>
        </StyledForm>
    );
};
