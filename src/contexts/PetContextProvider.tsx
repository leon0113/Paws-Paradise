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
    };
    const handleCheckoutPet = (id: string) => {
        setPets(prev => prev.filter(pet => pet.id !== id));
        setSelectedPetId(null);
    };

    return (
        <PetContext.Provider value={{
            pets,
            selectedPetId,
            handleChangePetId,
            selectedPet,
            handleCheckoutPet
        }}>
            {children}
        </PetContext.Provider>
    )
}
