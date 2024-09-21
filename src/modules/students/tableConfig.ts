import {TableConfigInterface} from "../../components/DataTable/types.ts";
import {StudentInterface} from "../../store/modules/studentsSlice.ts";

const tableConfig: TableConfigInterface<StudentInterface>[] = [
    {
        field: 'id',
        label: 'ID',
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
    {
        field: 'created_at',
        label: 'Created at',
    },
]
export default tableConfig
