import {SortOrderEnum} from "../../../enums/SortOrderEnum.ts";
import {TablePaginationInterface} from "../types.ts";

const defaultPagination: TablePaginationInterface<any> = {
    orderBy: 'id',
    order: SortOrderEnum.ASC,
    page: 0,
    total: 0,
    perPage: 5
}
export default defaultPagination
