import Image from "next/image";

export default function PetList({ pets }: { pets: any }) {
    return (
        <ul className="bg-white border-b border-black/[0.08]">
            {
                pets.map((pet: any) => (
                    <li key={pet.id}>
                        <button className="flex h-[70px] w-full cursor-pointer items-center px-5 text-base gap-3 hover:bg-[#EFF1F2] focus:bg-[#EFF1F2] transition">
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
