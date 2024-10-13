import styled from "styled-components";

export const StyledBackground = styled.div`
    background-color: ${(props) => props.theme.colors.white};
`;

export const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    padding: 1.5rem 0;
`;
