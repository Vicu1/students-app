import {Box, Paper, Table, TableContainer, TablePagination} from "@mui/material";
import TableHead from "./TableHead.tsx";
import {DataTableContext} from "../../context/DataTableContext.tsx";
import Body from "./Body";
import {DataTableProps} from "./types.ts";


const DataTable = <T, > ({tableConfig, pagination, data, handleSort}: DataTableProps<T>) => {

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <DataTableContext.Provider value={{
                    tableConfig,
                    pagination,
                    data,
                    handleSort
                }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                    >
                        <TableHead />
                        <Body />
                    </Table>
                </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={data.length}
                        rowsPerPage={pagination.perPage}
                        page={pagination.page - 1}
                        // onPageChange={handleChangePage}
                        // onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </DataTableContext.Provider>
            </Paper>
        </Box>
    )
}
export default DataTable
