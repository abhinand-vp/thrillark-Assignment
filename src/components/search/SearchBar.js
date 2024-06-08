'use client'
const SearchBar = (props) => {
    debugger
    const { classname, placeHolder } = props

    return (
        <>
            <form className="hidden md:block md:max-w-md md:mx-auto md:w-[30vw]">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only bg-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className={classname} placeholder={placeHolder} required />
                </div>
            </form>
        </>
    )

}
export { SearchBar }