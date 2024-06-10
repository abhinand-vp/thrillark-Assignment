const SearchSuggestion = (props) => {
    const { name } = props
    return (
        <>
            <div className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer">
                {name}
            </div>

        </>
    )
}
export { SearchSuggestion }