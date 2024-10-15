import { StyledContainer } from "@components/Container/Container.styles";

import { OtherArtworks } from "./OtherArtworks";
import { Gallery } from "./Gallery";
import { SearchArtworks } from "./SearchArtworks";

export default function Home() {
    return (
        <>
            <StyledContainer>
                <SearchArtworks />
                <Gallery />
                <OtherArtworks />
            </StyledContainer>
        </>
    );
}
