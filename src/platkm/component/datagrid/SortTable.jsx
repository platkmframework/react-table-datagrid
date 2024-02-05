import { Children, cloneElement, useEffect, useState} from "react"
import { useDatagridUtil } from "./hooks/useDatagridUtil";
import { ExtSortTableRow } from "./ExtSortTableRow";


export const SortTable = (props) =>{
    const {children, data, attribute} = props 
    const [dataList, setDataList] = useState([])

    const {genunique} = useDatagridUtil();
 
    const [tableHeaders, setTableHeaders] = useState([])
    const [columns, setColumns] = useState([]) 
    const [sortChildTables, setSortChildTables] = useState([]) 
    
    useEffect(() => {
        const tbheaders  = [];
        const columns    = [];
        const actions    = [];
        const sortTChindren  = [];

        Children.forEach(children, (child, index) => {
             if(child.type.name == 'SortTableHeader'){
                tbheaders.push(child); 
             }else if(child.type.name == 'SortTableColumn'){
                columns.push(child);
             } else if(child.type.name == 'SortTable'){
                sortTChindren.push(child);
             } 
          });

          setTableHeaders(tbheaders)
          setColumns(columns)
          setSortChildTables(sortTChindren)

          if(!data){
            setDataList([])
          }else{
            setDataList([...data])
          }

      }, [])


    return (
        <table key={genunique(10)} className="sorttable" width='100%'>
            <thead key={genunique(10)}>
                <tr key={genunique(10)}>
                    { 
                        Children.map(tableHeaders, child =>{  
                            return cloneElement(child,{ dataList:dataList, setDataList:setDataList,  key: genunique(10)}) 
                        })
                    } 
                </tr>
            </thead>
            <tbody key={genunique(10)}>
                {
                    dataList?.map((row)=>(<ExtSortTableRow key={genunique(10)} 
                                                            tableHeaders={tableHeaders} 
                                                            columns={columns} 
                                                            row={row} 
                                                            sortChildTables={sortChildTables}/>))
                }
            </tbody>
        </table> 
    )

}