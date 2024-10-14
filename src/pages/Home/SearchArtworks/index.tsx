import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    StyledHeading,
    StyledInput,
    StyledResults,
    StyledSearch,
    StyledSearchIcon,
    StyledSection,
} from "./SearchArtworks.styles";

import { ArtworksOverviewList } from "@components/ArtworksOverviewList";

import { useSearchArtworks } from "@hooks/useSearchArtworks";
import { useDebounce } from "@hooks/useDebounce";
import { zodSearchSchema } from "@utils/zodSearchSchema";

export const SearchArtworks = () => {
    const { register, watch } = useForm({
        resolver: zodResolver(zodSearchSchema),
    });
    const searchQuery = watch("searchQuery", "");

    const debouncedQuery = useDebounce(searchQuery, 500);
    const { data: artworks, isLoading, error } = useSearchArtworks(debouncedQuery);

    return (
        <StyledSection>
            <StyledHeading>
                Let's Find Some <span>Art</span> Here!
            </StyledHeading>
            <StyledSearch>
                <StyledInput
                    {...register("searchQuery")}
                    type="text"
                    placeholder="Search art, artist, work..."
                />
                <StyledSearchIcon />
            </StyledSearch>
            <StyledResults>
                {isLoading && <p>Loading...</p>}
                {error && !isLoading && <p>Error: {error}</p>}
                {artworks && !isLoading && <ArtworksOverviewList artworks={artworks} />}
                {artworks && !isLoading && artworks.length === 0 && <p>No data found...</p>}
            </StyledResults>
        </StyledSection>
    );
};
