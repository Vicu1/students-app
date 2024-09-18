import {StudentInterface} from "./index.tsx";
import {TableConfigInterface} from "../../components/DataTable/types.ts";

const tableConfig: TableConfigInterface<StudentInterface>[] = [
    {
        field: 'id',
        label: 'ID',
        sortable: true
    },
    {
        field: 'name',
        label: 'Name',
        sortable: true
    },
    {
        field: 'birth_year',
        label: 'Birth year',
        sortable: true
    },
    {
        field: 'status',
        label: 'Status',
    },
    {
        field: 'idnp',
        label: 'IDNP',
        sortable: true
    },
]
export default tableConfig
