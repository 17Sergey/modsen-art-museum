import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from {
        transform: rotate(0deg);
    }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = styled.div`
    animation: 1.2s ${loading} linear infinite;
    width: fit-content;
    margin: 0 auto;
`;
