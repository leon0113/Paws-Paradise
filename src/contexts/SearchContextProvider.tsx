'use client'
import { PetContextProps, SearchContextProps, SearchContextProviderProps } from "@/lib/type";
import { createContext, useState } from "react";


export const SearchContext = createContext<SearchContextProps | null>(null);

export default function SearchContextProvider({ children }: SearchContextProviderProps) {
    //state
    const [searchText, setSearchText] = useState("");

    // derived state

    //event handler/actions
    const handleSearchText = (text: string) => {
        setSearchText(text)
    }

    return (
        <SearchContext.Provider value={{
            searchText,
            handleSearchText
        }}>
            {children}
        </SearchContext.Provider>
    )
}
