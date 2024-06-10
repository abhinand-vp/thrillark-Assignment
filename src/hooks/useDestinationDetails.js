import { popularDestinationDetails, topDestination } from "@/constants"
import { useState } from "react"

export const useDestinationDetails = () => {
    const [topDestDetails, setTopDestDetails] = useState(topDestination)
    const [popularDestination, setPopularDestination] = useState(popularDestinationDetails)
    const handleClear = () =>{
         setPopularDestination(popularDestinationDetails)
         setTopDestDetails(topDestination)
    }
    return { 
        topDestDetails,
        popularDestination,
        setTopDestDetails,
        setPopularDestination,
        handleClear,
        topDestination
    }
}