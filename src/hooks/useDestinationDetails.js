import { topDestination } from "@/constants"
import { useState } from "react"

export const useDestinationDetails = () => {
    const [topDestDetails, setTopDestDetails] = useState(topDestination)
    const handleClear = () =>{
         setTopDestDetails(topDestination)
    }
    return { 
        topDestDetails,
        setTopDestDetails,
        handleClear,
        topDestination
    }
}