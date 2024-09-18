import {useContext} from "react";
import {DataTableContext} from "../../context/DataTableContext.tsx";
import {Box, TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {visuallyHidden} from '@mui/utils';
import {SortOrderEnum} from "../../enums/SortOrderEnum.ts";

const Head = () => {
    const {tableConfig, pagination, handleSort} = useContext(DataTableContext)

    return (
        <TableHead>
            <TableRow>
                {tableConfig.map((headCell) => (
                    <TableCell
                        key={headCell.field}
                        sortDirection={pagination.orderBy === headCell.field ? pagination.order : false}
                    >
                        <TableSortLabel
                            active={pagination.orderBy === headCell.field}
                            direction={pagination.orderBy === headCell.field ? pagination.order : SortOrderEnum.ASC}
                            onClick={() => handleSort(headCell.field)}
                        >
                            {headCell.label}
                            {pagination.orderBy === headCell.field ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {pagination.order === SortOrderEnum.DESC ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}
export default Head
