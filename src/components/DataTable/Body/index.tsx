import {TableBody, TableCell, TableRow} from "@mui/material";
import {useContext} from "react";
import {DataTableContext} from "../../../context/DataTableContext.tsx";

const Body = () => {
    const {tableConfig} = useContext(DataTableContext)

    return (
        <TableBody>
            {tableConfig.map((row) => (
                    <TableRow
                        hover
                        key={row.field}
                        sx={{ cursor: 'pointer' }}
                    >
                        <TableCell align="right">{row}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    )
}
export default Body
