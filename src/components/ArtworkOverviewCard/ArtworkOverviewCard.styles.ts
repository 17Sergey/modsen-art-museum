import { StyledTextHightlight } from "@components/CommonStyledComponents";
import styled from "styled-components";

export const StyledCard = styled.div`
    padding: 1.5rem 0.75rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
`;

export const StyledContent = styled.div`
    display: flex;
    align-items: stretch;
    gap: 1rem;
    margin-right: 1.5rem;
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

    max-width: 100%;
    overflow: hidden;
    min-width: 100%;
`;

export const StyledTitle = styled.p`
    font-weight: 500;
    font-size: ${(props) => props.theme.fonts.fontSize.medium};

    max-width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledArtistName = styled(StyledTextHightlight)`
    margin-top: 0.5rem;
    color: ${(props) => props.theme.colors.secondary};

    max-width: 12rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const StyledPublicStatus = styled.p`
    margin-top: 1rem;
    font-weight: 700;
`;
