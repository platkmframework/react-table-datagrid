
import {useState} from "react"

export const useDataGrid = (initialData=[], initialFilters=[], initFastSearch=false, initFilter=false)=>{

    const [data, setData] = useState(initialData)
    const [filters, setFilters] = useState(initialFilters)
    const [showFastSearch, setShowFastSearch] = useState(initFastSearch)
    const [showFilter, setShowFilter] = useState(initFilter)

    return ({data, setData, filters, setFilters, showFastSearch, setShowFastSearch, showFilter, setShowFilter})

    
}