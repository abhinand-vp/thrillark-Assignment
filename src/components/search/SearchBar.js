'use client'
import { useDestContext } from "@/context/destination.context"
import { useState } from "react"

const SearchBar = (props) => {
    const [showAndHideSearchSuggestion, setShowAndHideSearchSuggestion] = useState(false)
    const { classname, placeHolder } = props
    const { topDestDetails, popularDestination, handleClear, setTopDestDetails, setPopularDestination } = useDestContext()
    const handleSearch = (e) => {
        if (!e.target.value?.trim()) {
            handleClear()
            return
        }
        const searchKey = e.target.value?.trim()
        const { topDestFiltered, popularDestinationFiltered } = searchForTopDestinsation(searchKey.toLocaleLowerCase())
        setTopDestDetails(topDestFiltered)
        setPopularDestination(popularDestinationFiltered)
    }
    const searchForTopDestinsation = (searchKey) => {
        const topDestFiltered = topDestDetails?.filter((item) => {
            const smallCasedPlace = item?.place.toLocaleLowerCase()
            const smallCasedCountry = item?.country.toLocaleLowerCase()?.replace(' ', '')
            return smallCasedCountry.includes(searchKey) || smallCasedPlace.includes(searchKey)
        })
        const popularDestinationFiltered = popularDestination?.filter((item) => {
            const smallCasedPlace = item?.place.toLocaleLowerCase()
            const smallCasedCountry = item?.country.toLocaleLowerCase()?.replace(' ', '')
            return smallCasedCountry.includes(searchKey) || smallCasedPlace.includes(searchKey)
        })
        return { topDestFiltered, popularDestinationFiltered }
    }

    return (
        <>
            <form className="hidden md:block md:mx-auto md:w-[30vw] relative">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only bg-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" onClick={() => setShowAndHideSearchSuggestion(!showAndHideSearchSuggestion)} className={classname} placeholder={placeHolder} required onChange={(e) => handleSearch(e.target.value)} />
                </div>
            </form>
            {showAndHideSearchSuggestion &&
                <div className="bg-white w-[30vw] border-b border-l border-r border-gray-300 z-10 h-48 absolute top-10 p-5 flex gap-x-3 gap-y-1 flex-wrap rounded-b-md">
                    <div className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer">Dubai</div>
                    <div className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer">Burj Khalifa</div>
                    <div className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer">IMG Worlds of Adventure</div>
                    <div className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer">Aquaventure Waterpark</div>
                </div>
            }
        </>
    )

}
export { SearchBar }