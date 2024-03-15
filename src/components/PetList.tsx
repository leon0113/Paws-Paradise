'use client'
import Image from "next/image";
import { usePetContext, useSearchContext } from "@/lib/hooks";
import { cn } from "@/lib/utils";



export default function PetList() {

    const { pets, handleChangePetId, selectedPetId } = usePetContext();
    const { searchText } = useSearchContext();

    const filteredPets = pets.filter((pet) => pet.name.toLowerCase().includes(searchText));

    return (
        <ul className="bg-white border-b border-black/[0.08]">
            {
                filteredPets.map((pet: any) => (
                    <li key={pet.id}>
                        <button onClick={() => handleChangePetId(pet.id)}
                            className={cn("flex h-[70px] w-full cursor-pointer items-center px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition", { 'hover:bg-[#EFF1F2]': selectedPetId === pet.id })}>
                            {/* <div className="overflow-hidden"> */}
                            <Image
                                src={pet.imageUrl}
                                alt="placeholder"
                                width={45}
                                height={45}
                                className="rounded-full object-cover w-[45px] h-[45px]"
                            />
                            {/* </div> */}
                            <p className="font-semibold">{pet.name}</p>
                        </button>
                    </li>
                ))
            }

        </ul>
    )
}
