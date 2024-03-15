import { PetContext } from "@/contexts/PetContextProvider";
import { SearchContext } from "@/contexts/SearchContextProvider";
import { useContext } from "react";

export function usePetContext() {
    const context = useContext(PetContext);

    if (!context) {
        throw new Error('Error is usePetContext');
    }
    return context;
}

export function useSearchContext() {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('Error is useSearchContext');
    }
    return context;
}