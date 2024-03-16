'use client'
import { Pet, PetContextProps, PetContextProviderProps } from "@/lib/type";
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
    const handleAddPet = (newPet: Omit<Pet, 'id'>) => {
        const id = Math.ceil(Math.random() * 100).toString();
        setPets(prev => [...prev, {
            id,
            ...newPet,
        }])
    };

    return (
        <PetContext.Provider value={{
            pets,
            selectedPetId,
            handleChangePetId,
            selectedPet,
            handleCheckoutPet,
            handleAddPet
        }}>
            {children}
        </PetContext.Provider>
    )
}
