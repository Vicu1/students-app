import {SortOrderEnum} from "../../../enums/SortOrderEnum.ts";
import {TablePaginationInterface} from "../types.ts";

const defaultPagination: TablePaginationInterface<any> = {
    orderBy: 'id',
    order: SortOrderEnum.ASC,
    page: 1,
    perPage: 5
}
export default defaultPagination
