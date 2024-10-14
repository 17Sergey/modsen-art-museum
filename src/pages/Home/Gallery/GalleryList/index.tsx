import { GalleryCard } from "../GalleryCard";
import { StyledGalleryList } from "./GalleryList.styles";

export const GalleryList = ({ artworks }: { artworks: OverviewArtworkType[] }) => {
    return (
        <StyledGalleryList>
            {artworks &&
                artworks?.map((artwork) => (
                    <li key={artwork.id}>
                        <GalleryCard artwork={artwork} />
                    </li>
                ))}
        </StyledGalleryList>
    );
};
