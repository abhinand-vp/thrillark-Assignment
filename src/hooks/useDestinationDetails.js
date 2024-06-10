import { topDestination } from "@/constants"

export const useDestinationDetails = () => {
    // removed global topDestination becasue of the global conflict and changed these state local state is SearchBar component
    return { 
        topDestination
    }
}