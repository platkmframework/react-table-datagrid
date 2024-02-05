import { cloneElement} from "react"
import { useState} from "react"
import { useDatagridUtil } from "./hooks/useDatagridUtil";

export const ExtSortTableRow = ({tableHeaders, columns, row, sortChildTables})=>{

    const {genunique} = useDatagridUtil();
    const [parentUniqueId, setParentUniqueId] = useState(genunique(20))

    const [hidePlus, setHidePlus] = useState(false)
    

    const isCustomColumnPresent = (columnName) =>{
        return columns.some((c)=> c.props['column'] == columnName)
    }

    const getSortTableColumn = (row, columnName) =>{
        return cloneElement( columns.find((c)=> c.props['column'] == columnName), {row: row, value:row[columnName], key: genunique(10)})
    }

    const getChildSortTable = (childTC) =>{

        let childData = []
        if(childTC.props['attribute']){
            childData = row[childTC.props['attribute']]
        }
        console.log(childTC.props)
        return cloneElement( childTC, {data:childData, key: genunique(10)})
    }

    const toogleChildTable = (event) =>{
        setHidePlus(!hidePlus)

    }


    //
    return (
        <>
            <tr key={genunique(10)}>
                {
                    tableHeaders.map((h, i)=>(
                        isCustomColumnPresent(h.props['column'])?
                            getSortTableColumn(row, h.props['column'])
                        :<td key={genunique(10)}>
                            {
                             (sortChildTables && sortChildTables.length>0 && i==0) && 
                                (   <>
                                        <span id={"span" + parentUniqueId + "_plus"} hidden={hidePlus} className="sorttabe_pointer" style={{float:'left'}} onClick={(event)=>{toogleChildTable(event)}}>&#43;&nbsp;&nbsp;</span>
                                        <span id={"span" + parentUniqueId + "_minus"} hidden={!hidePlus}  className="sorttabe_pointer" style={{float:'left'}} onClick={(event)=>{toogleChildTable(event)}}>&#8722;&nbsp;&nbsp;</span>
                                    </>
                                )
                            }
                            { row[h.props['column']] + ""}  
                        </td>
                    ))  
                }
            </tr>
            {
                (sortChildTables && sortChildTables.length>0) &&
                (
                    sortChildTables.map((cht, i)=>(
                        <tr key={genunique(10)} id={"span" + parentUniqueId + "_child_table_" + i}   hidden={!hidePlus} >
                            <td colSpan={tableHeaders.length}>
                                {getChildSortTable(cht)}
                            </td>
                        </tr>
                    ))
                )
            }
        </>
    )

}