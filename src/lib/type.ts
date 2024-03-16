import { ReactNode } from "react";
import { Pet } from "@prisma/client";

export type PetNew = Omit<Pet, 'id' | 'updatedAt' | 'createdAt'>

export type PetContextProviderProps = {
    data: Pet[];
    children: ReactNode
}

// export type PetForm = {
//     name: string,
//     ownerName: string,
//     imageUrl: string,
//     age: string,
//     notes: string
// }


export type SearchContextProviderProps = {
    children: ReactNode
}

export type PetContextProps = {
    pets: Pet[];
    // setPets:
    selectedPetId: string | null,
    handleChangePetId: (id: string) => void,
    handleCheckoutPet: (id: string) => Promise<void>,
    handleAddPet: (newPet: PetNew) => void,
    handleEditPet: (id: string, newPet: PetNew) => void,
    selectedPet: Pet | undefined
}

export type SearchContextProps = {
    handleSearchText: (id: string) => void,
    searchText: string
}

export type PetButtonProps = {
    actionType: "add" | "edit" | "delete";
    onClick?: () => void;
    disable?: boolean
}
