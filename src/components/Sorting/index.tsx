import { SORT_CRITERIES } from "@constants/constants";
import { FormEvent } from "react";
import { StyledButton, StyledSortingForm } from "./Sorting.styles";
import { getNextSortCritery } from "@utils/getNextSortCritery";
import { getTitleForSortCritery } from "@utils/getTitleForSortCritery";

type SortingProps = {
    sortCritery: SORT_CRITERIES;
    updateSort: (sortCritery: SORT_CRITERIES) => void;
};

export const Sorting = ({ sortCritery, updateSort }: SortingProps) => {
    const changeSort = () => {
        const newSortCritery = getNextSortCritery(sortCritery);
        updateSort(newSortCritery);
    };

    return (
        <StyledSortingForm onSubmit={(e: FormEvent) => e.preventDefault()}>
            <p>Sorting: {getTitleForSortCritery(sortCritery)}</p>
            <StyledButton onClick={changeSort}>Change</StyledButton>
        </StyledSortingForm>
    );
};
