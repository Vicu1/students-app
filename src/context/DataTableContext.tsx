import {createContext, ReactNode} from "react";
import {TableConfigInterface, TablePaginationInterface} from "../components/DataTable/types.ts";
import defaultPagination from "../components/DataTable/Pagination/defaultPagination.ts";

export interface DataTableContextInterface<T> {
    tableConfig: TableConfigInterface<T>[],
    pagination: TablePaginationInterface<T>,
    data: T[],
    handleSort: (value: keyof any) => void,
    actions?: ReactNode[]
}

export const DataTableContext = createContext<DataTableContextInterface<any>>({
    tableConfig: [],
    pagination: defaultPagination,
    data: [],
    handleSort: () => {},
    actions: []
})
