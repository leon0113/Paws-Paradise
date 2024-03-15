'use client'
import { usePetContext } from "@/lib/hooks"

export default function Stats() {
    const { pets } = usePetContext()
    return (
        <section className="text-center">
            <p className="text-2xl font-bold leading-6">{pets.length}</p>
            <p className="opacity-80">Current guests</p>
        </section>
    )
}
