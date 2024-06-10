import React, { forwardRef } from 'react';

// converted this component to forward ref for accessing ref variable for focus search input after click the suggestion
const SearchSuggestion = forwardRef(({ name, onClick }, ref) => {
    const handleSuggestionClick = () => {
        ref?.current?.focus(); // Added parentheses
        onClick(name);
    };

    return (
        <div
            className="border border-gray-300 p-2 w-auto h-10 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer"
            onClick={handleSuggestionClick}
        >
            {name}
        </div>
    );
});

export { SearchSuggestion };
