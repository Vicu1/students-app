import {TableBody, TableCell, TableRow} from "@mui/material";
import {useContext} from "react";
import {DataTableContext, DataTableContextInterface} from "../../../context/DataTableContext.tsx";
import {DataTableActionsContext} from "../../../context/DataTableActionsContext.tsx";

const Body = <T, >() => {
    const {tableConfig, data, actions} = useContext<DataTableContextInterface<T>>(DataTableContext)

    return (
        <TableBody>
            {data.map((row) => (
                <DataTableActionsContext.Provider
                    key={row.id}
                    value={{item: row}}
                >
                    <TableRow
                    >
                        {tableConfig.map((header) =>
                            <TableCell key={header.field}>{row[header.field]}</TableCell>
                        )}
                        {actions?.map((action,index) =>
                            <TableCell align={'right'} key={index}>
                                {action}
                            </TableCell>
                        )}
                    </TableRow>
                </DataTableActionsContext.Provider>
                ))
            }
        </TableBody>
    )
}
export default Body
