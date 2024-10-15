import styled from "styled-components";

import { StyledTextHightlight } from "@components/CommonStyledComponents";

export const StyledCard = styled.div`
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.inputBackground};
    cursor: pointer;
`;

export const StyledCardContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledThumbnail = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    aspect-ratio: 1 / 1;
`;

export const StyledInfo = styled.div`
    text-align: left;
    font-family: ${(props) => props.theme.fonts.secondary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledTitle = styled.p`
    font-weight: 500;
    font-size: ${(props) => props.theme.fonts.fontSize.medium};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledArtistName = styled(StyledTextHightlight)`
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors.secondary};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledPublicStatus = styled.p`
    margin-top: 1rem;
    font-weight: 700;
`;
