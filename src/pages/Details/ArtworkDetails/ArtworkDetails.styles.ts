import { StyledTextHightlight } from "@components/CommonStyledComponents";
import styled from "styled-components";

export const StyledArtwork = styled.div`
    display: flex;
    gap: 5rem;
    align-items: stretch;
`;

export const StyledImageWrapper = styled.div`
    position: relative;
`;

export const StyledBookMark = styled.div`
    position: absolute;
    z-index: 100;
    top: 1rem;
    right: 1rem;

    background-color: #fff;
    border-radius: 50%;
`;

export const StyledImage = styled.img`
    max-width: 30rem;
    height: auto;
    aspect-ratio: 1 / 1.3;
    object-fit: cover;
`;

export const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledTitle = styled.div`
    font-size: 2rem;
    line-height: 150%;
`;

export const StyledAuthorTitle = styled(StyledTextHightlight)`
    margin-top: 2rem;
    font-size: ${(props) => props.theme.fonts.fontSize.subheading};
`;

export const StyledDates = styled.div`
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fonts.fontSize.base};
    font-weight: 700;
`;

export const StyledOverviewHeading = styled.div`
    font-size: 2rem;
`;

export const StyledFeatures = styled.ul`
    margin-top: 2rem;
`;

export const StyledFeature = styled.li`
    margin-bottom: 1rem;
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
`;
