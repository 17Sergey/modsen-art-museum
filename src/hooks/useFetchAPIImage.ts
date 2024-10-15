import { ART_IMAGE_ENDPOINT } from "@constants/constants";
import { useState } from "react";

export const useFetchAPIImage = (imageId: string) => {
    const imgSrc = ART_IMAGE_ENDPOINT(imageId || "");
    const [isError, setIsError] = useState(false);

    const setImgError = () => {
        setIsError(true);
    };

    return { imgSrc, isImgError: isError, setImgError };
};
