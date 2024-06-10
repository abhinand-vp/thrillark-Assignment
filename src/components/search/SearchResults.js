import React from "react"
const SearchResults = (props) => {
    const { results } = props
    return (
        <div className="absolute z-10 bg-white mt-2 w-full left-0 rounded max-h-select overflow-y-auto svelte-5uyqqj">
            {
                results.map((item, idx) => {
                    return (
                        <div key={`${item.place}-${idx}`} className="flex flex-col w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                <div className="w-6 flex flex-col items-center">
                                    <div className="flex relative w-4 h-4">
                                        <img alt={item.place} src={item.img} className="shadow-md rounded-full w-full h-full" />
                                    </div>
                                </div>
                                <div className="w-full items-center flex">
                                    <div className="mx-2 -mt-1  ">
                                        <span className="font-semibold text-black">{item.place}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export { SearchResults }
