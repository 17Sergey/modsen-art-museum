import { createContext, ReactNode } from "react";

type ArtworksContextType = {
    favorites: Array<FavoriteIdType>;
};

const ArtworksContext = createContext<ArtworksContextType | null>(null);

export const ArtworksProvider = ({ children }: { children: ReactNode }) => {
    return <ArtworksContext.Provider value={null}>{children}</ArtworksContext.Provider>;
};
