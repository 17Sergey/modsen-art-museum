import { StyledArrow, StyledList, StyledPage } from "./Pagination.styles";

type PaginationProps = {
    currentPage: number;
    changePage: (newPage: number) => void;
    pagesToShow?: number;
    prevPagesToShow?: number;
    withArrows?: boolean;
};

export const Pagination = ({
    currentPage,
    changePage,
    pagesToShow = 4,
    prevPagesToShow = 1,
    withArrows = true,
}: PaginationProps) => {
    const createPaginationUI = () => {
        const pages: JSX.Element[] = [];

        let range = currentPage + pagesToShow - prevPagesToShow;
        if (currentPage === 1) {
            range += 1;
        }

        for (let page = currentPage - prevPagesToShow; page < range; page++) {
            if (page <= 0) continue;

            pages.push(
                <StyledPage
                    key={page}
                    $isActive={page === currentPage}
                    onClick={() => changePage(page)}
                >
                    {page}
                </StyledPage>
            );
        }

        return pages;
    };

    return (
        <StyledList>
            {withArrows && currentPage > 1 && (
                <StyledArrow
                    $type={"left"}
                    onClick={() => changePage(currentPage - 1)}
                />
            )}
            {createPaginationUI()}
            {withArrows && <StyledArrow onClick={() => changePage(currentPage + 1)} />}
        </StyledList>
    );
};
