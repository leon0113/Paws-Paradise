import { ReactNode } from "react";

export type Pet = {
    id: string;
    name: string;
    ownerName: string;
    imageUrl: string;
    age: number;
    notes: string
}

export type PetContextProviderProps = {
    data: Pet[];
    children: ReactNode
}

export type SearchContextProviderProps = {
    children: ReactNode
}

export type PetContextProps = {
    pets: Pet[];
    // setPets:
    selectedPetId: string | null,
    handleChangePetId: (id: string) => void,
    selectedPet: Pet | undefined
}

export type SearchContextProps = {
    handleSearchText: (id: string) => void,
    searchText: string
}

export type PetButtonProps = {
    actionType: "add" | "edit" | "delete"
}
