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
    const handleEditPet = (petId: string, petData: Omit<Pet, 'id'>) => {
        setPets((prev) =>
            prev.map((pet) => {
                if (pet.id === petId) {
                    return {
                        id: petId,
                        ...petData

                    }
                }
                return pet;
            }))
    };

    return (
        <PetContext.Provider value={{
            pets,
            selectedPetId,
            handleChangePetId,
            selectedPet,
            handleCheckoutPet,
            handleAddPet,
            handleEditPet
        }}>
            {children}
        </PetContext.Provider>
    )
}
