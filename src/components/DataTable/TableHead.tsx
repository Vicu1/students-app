import {useContext} from "react";
import {DataTableContext, DataTableContextInterface} from "../../context/DataTableContext.tsx";
import { TableCell, TableHead, TableRow, TableSortLabel} from "@mui/material";
import {SortOrderEnum} from "../../enums/SortOrderEnum.ts";
import {Else, If, Then, When} from "react-if";

const Head = <T, > () => {
    const {tableConfig, pagination, actions, handleSort} = useContext<DataTableContextInterface<T>>(DataTableContext)

    return (
        <TableHead>
            <TableRow>
                {tableConfig.map((headCell) => (
                    <TableCell
                        key={headCell.field}
                        sortDirection={pagination.orderBy === headCell.field ? pagination.order : false}
                    >
                        <If condition={headCell.sortable}>
                            <Then>
                                <TableSortLabel
                                    active={pagination.orderBy === headCell.field}
                                    direction={pagination.orderBy === headCell.field ? pagination.order : SortOrderEnum.ASC}
                                    onClick={() => handleSort(headCell.field)}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            </Then>
                           <Else>
                               {headCell.label}
                           </Else>
                        </If>
                    </TableCell>
                ))}
                <When condition={actions?.length}>
                    <TableCell align={'right'}>
                        Actions
                    </TableCell>
                </When>
            </TableRow>
        </TableHead>
    )
}
export default Head
