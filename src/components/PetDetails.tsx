'use client'
import { usePetContext } from "@/lib/hooks";
import Image from "next/image";
import EmptyView from '../components/EmptyView';
import PetButton from "./PetButton";

export default function PetDetails() {

    const { selectedPet, handleCheckoutPet } = usePetContext();

    return (
        <section className="flex flex-col h-full w-full">

            {
                !selectedPet ? <EmptyView /> : (
                    <>
                        <div className="flex items-center bg-white px-8 py-5 border-b border-black/[0.08]">

                            <>
                                <Image
                                    src={selectedPet?.imageUrl}
                                    alt="pet image"
                                    width={75}
                                    height={75}
                                    className="h-[75px] w-[75px] rounded-full object-cover"
                                />
                                <h2 className="text-3xl font-semibold leading-7 ml-5">{selectedPet?.name}</h2>
                            </>
                            <div className="flex items-center gap-5 ml-auto">
                                <PetButton actionType='edit' />
                                <PetButton actionType='delete' onClick={() => handleCheckoutPet(selectedPet.id)} />
                            </div>
                        </div>

                        <div className="flex justify-evenly py-10 px-5">
                            <div className="">
                                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Owner name</h3>
                                <p className="mt-1 text-lg text-zinc-800">{selectedPet?.ownerName}</p>
                            </div>
                            <div className="">
                                <h3 className="text-[13px] font-medium uppercase text-zinc-700">Age</h3>
                                <p className="mt-1 text-lg text-zinc-800">{selectedPet?.age}</p>
                            </div>
                        </div>

                        <div className="flex-1 bg-white px-7 py-5 rounded-md mb-9 mx-8 border border-light">
                            {selectedPet?.notes}
                        </div>
                    </>
                )
            }


        </section>
    )
}
