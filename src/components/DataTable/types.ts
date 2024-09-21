import {SortOrderEnum} from "../../enums/SortOrderEnum.ts";
import {ReactNode} from "react";

export interface DataTableProps<T> {
    tableConfig: TableConfigInterface<T>[]
    data: T[],
    pagination: TablePaginationInterface<T>,
    handleSort: (value: keyof T) => void,
    handleChangePagination: (page: number, perPage?: number) => void,
    actions?: ReactNode[]
}

export interface TableConfigInterface<T> {
    field: keyof T,
    label: string,
    sortable?: boolean,
}

export interface TablePaginationInterface<T> {
    orderBy: keyof T,
    order: SortOrderEnum,
    page: number,
    perPage: number,
    total: number
}
