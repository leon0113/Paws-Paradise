'use client'

import { useSearchContext } from "@/lib/hooks"

export default function SearchForm() {

    const { searchText, handleSearchText } = useSearchContext()

    return (
        <form className="w-full h-full">
            <input className="w-full h-full bg-black/20 rounded-md px-5 outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
                placeholder="Call your pet"
                type="search"
                value={searchText}
                onChange={(e) => handleSearchText(e.target.value)}
            />
        </form>
    )
}
