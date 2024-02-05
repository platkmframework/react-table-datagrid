
import { useDatagridUtil } from "./hooks/useDatagridUtil";

export const SortTableColumn = ({column, show, row, value}) =>{

    const {genunique} = useDatagridUtil();

    return (
        <td key={genunique(10)}>
            {show(row, column, value)}
        </td>
    )

}