import { useState } from "react";
import { useDatagridUtil } from "./hooks/useDatagridUtil";

export const SortTableHeader = (props) =>{
   
    const {column, title, dataList, setDataList} = props 
    const [ascOrder, setAscOrder]  = useState(true)
    const {genunique} = useDatagridUtil();


    const onHandleSortColumn = (event) =>{
        
        const currentOrder = !ascOrder
        setAscOrder(currentOrder); 
        let auList = [...dataList]
        auList.sort((a, b) => {
            const nameA = a[column] + "".toUpperCase(); 
            const nameB = b[column]+ "".toUpperCase();
            if (nameA < nameB) {
              return  currentOrder==0? -1:1;
            }
            if (nameA > nameB) {
              return currentOrder==1?1:-1;
            }
            return 0;
          });
          
          setDataList(auList)  
    }
   

    return (
        <th  key={genunique(10)} className="sorttabe_th" >{title} <span style={{float:'right'}} onClick={(event)=>onHandleSortColumn(event)}>&#8597;</span></th>
    )
}