import styled from "styled-components";

export const StyledSortingForm = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.colors.secondary};
`;
