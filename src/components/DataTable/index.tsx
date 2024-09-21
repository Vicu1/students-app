import { Paper, Table, TableContainer, TablePagination} from "@mui/material";
import TableHead from "./TableHead.tsx";
import {DataTableContext} from "../../context/DataTableContext.tsx";
import Body from "./Body";
import {DataTableProps} from "./types.ts";
import {forwardRef} from "react";


const DataTable =  forwardRef(<T, >({tableConfig, pagination, data, handleSort, handleChangePagination, actions = []}: DataTableProps<T>, ref) => {

    return (
        <Paper>
            <DataTableContext.Provider value={{
                tableConfig,
                pagination,
                data,
                handleSort,
                actions
            }}>
                <TableContainer ref={ref}>
                    <Table>
                        <TableHead<T> />
                        <Body<T> />
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={pagination.total}
                    rowsPerPage={pagination.perPage}
                    page={pagination.page}
                    onPageChange={(e, page) => handleChangePagination(page)}
                    onRowsPerPageChange={(e) => handleChangePagination(pagination.page, Number(e.target.value))}
                />
            </DataTableContext.Provider>
        </Paper>
    )
})
export default DataTable
