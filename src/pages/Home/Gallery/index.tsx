import { useState } from "react";

import { StyledHeadings, StyledPagination, StyledSorting } from "./Gallery.styles";

import { GalleryList } from "./GalleryList";
import {
    StyledError,
    StyledSectionHeading,
    StyledTextHightlight,
} from "@components/CommonStyledComponents";
import { Pagination } from "@components/Pagination";
import { Sorting } from "@components/Sorting";

import { useFetchGalleryArtworks } from "@hooks/useFetchGalleryArtworks";
import { useArtworksSorting } from "@hooks/useArtworksSorting";
import { SORT_CRITERIES } from "@constants/constants";
import { Loader } from "@components/Loader";

export const Gallery = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, error } = useFetchGalleryArtworks(page);

    const [sortCritery, setSortCritery] = useState(SORT_CRITERIES.ALPHABET_ASC);
    const { data: artworks } = useArtworksSorting(data, sortCritery);

    const changePage = (newPage: number) => {
        setPage(newPage);
    };

    const sortArtworks = (sortingCritery: SORT_CRITERIES) => {
        setSortCritery(sortingCritery);
    };

    return (
        <section>
            <StyledHeadings>
                <StyledTextHightlight>Topics for you</StyledTextHightlight>
                <StyledSectionHeading>Our special gallery</StyledSectionHeading>
            </StyledHeadings>
            {isLoading && <Loader />}
            {error && <StyledError>Error: {error}</StyledError>}
            {!isLoading && artworks && (
                <div>
                    <StyledSorting>
                        <Sorting
                            sortCritery={sortCritery}
                            updateSort={sortArtworks}
                        />
                    </StyledSorting>
                    <GalleryList artworks={artworks} />
                </div>
            )}
            <StyledPagination>
                <Pagination
                    currentPage={page}
                    pagesToShow={4}
                    withArrows={true}
                    changePage={changePage}
                />
            </StyledPagination>
        </section>
    );
};
