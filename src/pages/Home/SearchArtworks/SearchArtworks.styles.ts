import { StyledLargeHeading } from "@components/CommonStyledComponents";
import { SearchIcon } from "@components/Icons/SearchIcon";
import styled from "styled-components";

export const StyledSection = styled.section`
    margin-bottom: 7rem;
`;

export const StyledHeading = styled(StyledLargeHeading)`
    max-width: 40rem;
    margin: 0 auto 4rem;
`;

export const StyledSearch = styled.form`
    max-width: 60%;
    margin: 0 auto;
    position: relative;
`;

export const StyledSearchIcon = styled(SearchIcon)`
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
`;

export const StyledInput = styled.input`
    width: 100%;
    background-color: ${(props) => props.theme.colors.inputBackground};
    outline: none;
    border: none;
    padding: 1.5rem 1rem;
    border-radius: 0.75rem;

    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fonts.fontSize.small};

    &:focus {
        box-shadow: 0px 0px 0.25rem 0 ${(props) => props.theme.colors.textTransparent};
    }
`;

export const StyledResults = styled.div`
    margin-top: 4rem;
`;
