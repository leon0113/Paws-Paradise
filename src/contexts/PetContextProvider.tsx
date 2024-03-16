'use client'
import { Pet, PetContextProps, PetContextProviderProps } from "@/lib/type";
import { addPet, deletePet, editPet } from "@/server/actions";
import { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";


export const PetContext = createContext<PetContextProps | null>(null);

export default function PetContextProvider({ data: pets, children }: PetContextProviderProps) {
    //state
    const [optimisticPets, setOptimisticPets] = useOptimistic(pets, (state, newPet) => {
        return [...state, newPet];
    });
    // const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    // derived state
    const selectedPet = optimisticPets.find((pet) => pet.id === selectedPetId);

    //event handler/actions
    const handleChangePetId = (id: string) => {
        setSelectedPetId(id);
    };
    const handleCheckoutPet = async (id: string) => {
        await deletePet(id)
        setSelectedPetId(null);
    };


    const handleAddPet = async (newPet: Omit<Pet, 'id'>) => {
        setOptimisticPets(newPet);
        const error = await addPet(newPet);
        if (error) return toast.warning(error.message)
    }


    const handleEditPet = async (petId: string, petData: Omit<Pet, 'id'>) => {
        const error = await editPet(petId, petData);
        if (error) return toast.warning(error.message)

    };

    return (
        <PetContext.Provider value={{
            pets: optimisticPets,
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
