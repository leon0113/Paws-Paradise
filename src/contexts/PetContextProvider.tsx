'use client'
import { PetContextProps, PetContextProviderProps } from "@/lib/type";
import { createContext, useState } from "react";


export const PetContext = createContext<PetContextProps | null>(null);

export default function PetContextProvider({ data, children }: PetContextProviderProps) {
    //state
    const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    // derived state
    const selectedPet = pets.find((pet) => pet.id === selectedPetId);

    //event handler/actions
    const handleChangePetId = (id: string) => {
        setSelectedPetId(id);
    }

    return (
        <PetContext.Provider value={{
            pets,
            selectedPetId,
            handleChangePetId,
            selectedPet
        }}>
            {children}
        </PetContext.Provider>
    )
}
