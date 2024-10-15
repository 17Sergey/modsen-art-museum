import styled from "styled-components";

export const StyledArtworkOverviewCard = styled.div`
    width: 80%;
    margin: 0 auto;
    transform: translateY(-50%);
`;

export const StyledArtworkImage = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1 / 1.2;
    margin: 0 auto;
    position: relative;
`;

export const StyledFallbackImage = styled.img`
    width: 100%;
    margin: 0 auto;
`;
