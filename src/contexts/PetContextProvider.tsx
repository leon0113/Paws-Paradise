'use client'
import { PetContextProps, PetContextProviderProps, PetNew } from "@/lib/type";
import { addPet, deletePet, editPet } from "@/server/actions";
import { createContext, useOptimistic, useState } from "react";
import { toast } from "sonner";


export const PetContext = createContext<PetContextProps | null>(null);

export default function PetContextProvider({ data: pets, children }: PetContextProviderProps) {
    //state
    const [optimisticPets, setOptimisticPets] = useOptimistic(pets, (state, { action, payload }) => {
        switch (action) {
            case "add":
                return [...state, { ...payload }];
            case "edit":
                return state.map((pet) => {
                    if (pet.id === payload.id) {
                        return { ...pet, ...payload.petData }
                    }
                });
            case "delete":
                return state.filter((pet) => pet.id !== payload);
            default:
                return state;
        }
    });
    // const [pets, setPets] = useState(data);
    const [selectedPetId, setSelectedPetId] = useState<string | null>(null);

    // derived state
    const selectedPet = optimisticPets.find((pet) => pet?.id === selectedPetId);

    //event handler/actions
    const handleChangePetId = (id: string) => {
        setSelectedPetId(id);
    };
    const handleCheckoutPet = async (id: string) => {
        setOptimisticPets({ action: "delete", payload: id });
        await deletePet(id)
        setSelectedPetId(null);
    };


    const handleAddPet = async (newPet: PetNew) => {
        setOptimisticPets({ action: "add", payload: newPet });
        // console.log(newPet);
        const error = await addPet(newPet);
        if (error) return toast.warning(error.message)
    }


    const handleEditPet = async (petId: string, petData: PetNew) => {
        setOptimisticPets({ action: "edit", payload: { petId, petData } });
        const error = await editPet(petId, petData);
        if (error) return toast.warning(error.message)

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
