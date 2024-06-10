'use client'
import { suggestionList } from "@/constants"
import { useDestContext } from "@/context/destination.context"
import React, { useRef, useState } from "react"
import { SearchSuggestion, SearchResults } from "@/components/search"

const SearchBar = (props) => {
    const searchInputRef = useRef(null);
    const { classname, placeHolder, serachModalWidth, from } = props
    const [showAndHideSearchSuggestion, setShowAndHideSearchSuggestion] = useState(false)
    const [isSearchHaveValue, setIsSearchHaveValue] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [topDestDetails, setTopDestDetails] = useState([])
    const { topDestination } = useDestContext()

    const handleClear = () => {
        setTopDestDetails(topDestination)
    }

    const handleSearch = (e) => {
        // for handling search value for suggestion and also from search input
        const searchKey = typeof e?.target?.value !== 'undefined' ? e?.target?.value : e;
        setSearchValue(searchKey)
        setIsSearchHaveValue(!!searchKey);
        // Clear previous results and filter new ones
        if (searchKey) {
            const { topDestFiltered } = searchForTopDestinsation(searchKey.toLowerCase());
            setTopDestDetails(topDestFiltered);
        } else {
            // If the search input is cleared, clear the previously filtered results
            handleClear();
            setTopDestDetails([]);
        }
    };
    const searchForTopDestinsation = (searchKey) => {
        const topDestFiltered = topDestination?.filter((item) => {
            const smallCasedPlace = item?.place.toLocaleLowerCase()
            const smallCasedCountry = item?.country.toLocaleLowerCase()?.replace(' ', '')
            return smallCasedCountry.includes(searchKey) || smallCasedPlace.includes(searchKey)
        })
        return { topDestFiltered }
    }

    return (
        <>
            <form className="md:block md:mx-auto md:w-[30vw] relative">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" value={searchValue} id="default-search" onClick={() => {
                        setShowAndHideSearchSuggestion(!showAndHideSearchSuggestion)
                    }}
                        className={classname}
                        placeholder={placeHolder}
                        required
                        onChange={(e) => handleSearch(e)}
                        ref={searchInputRef}
                    />
                </div>
            </form>

            {showAndHideSearchSuggestion &&
                <div className={`bg-white w-[95vw] md:w-[${[serachModalWidth]}] border-b border-l border-r border-gray-300 z-10 h-48 absolute top-10 p-5 flex gap-x-3 flex-wrap rounded-b-md`}>
                    {
                        suggestionList.map((item, idx) => {
                            return (
                                <React.Fragment key={`${idx}-${item}`}>
                                    <SearchSuggestion ref={searchInputRef} onClick={handleSearch} name={item} />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
            }
            {isSearchHaveValue && topDestDetails.length > 0 && (
                <div className={`bg-white w-[95vw] md:w-[${[serachModalWidth]}] border-b border-l border-r border-gray-300 z-10 h-48 absolute top-10 p-5 flex gap-x-3 flex-wrap rounded-b-md`}>
                    <SearchResults results={topDestDetails} />
                </div>
            )

            }
        </>
    )

}
export { SearchBar }