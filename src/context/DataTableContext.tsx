import {createContext} from "react";
import {TableConfigInterface, TablePaginationInterface} from "../components/DataTable/types.ts";
import defaultPagination from "../components/DataTable/Pagination/defaultPagination.ts";

interface DataTableContextInterface<T> {
    tableConfig: TableConfigInterface<T>[],
    pagination: TablePaginationInterface<T>,
    data: T[],
    handleSort: (value: keyof T) => void
}

export const DataTableContext = createContext<DataTableContextInterface<unknown>>({
    tableConfig: [],
    pagination: defaultPagination,
    data: [],
    handleSort: () => {}
})
