import DataTable from "../../components/DataTable";
import tableConfig from "./tableConfig.ts";
import { Stack, Typography} from "@mui/material";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {TablePaginationInterface} from "../../components/DataTable/types.ts";
import {SortOrderEnum} from "../../enums/SortOrderEnum.ts";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import stringifyParams from "../../utils/stringifyParams.ts";
import {actions} from "./Actions.tsx";
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {setStudents, StudentInterface} from "../../store/modules/studentsSlice.ts";
import Filters from "./Filters.tsx";
import PrintButton from "./PrintButton.tsx";

const Students = () => {
    const [pagination, setPagination] = useState<TablePaginationInterface<StudentInterface>>({
        orderBy: 'id',
        order: SortOrderEnum.ASC,
        page: 0,
        total: 0,
        perPage: 5
    })
    const tableRef = useRef<HTMLDivElement | null>(null)
    const {students, filters} = useAppSelector((state) => state.studentsSlice)
    const dispatch = useAppDispatch()
    const handleSort = (value) => {
        setPagination((prevData) => ({
            ...prevData,
            orderBy: value,
            order: prevData.order === SortOrderEnum.ASC ? SortOrderEnum.DESC : SortOrderEnum.ASC
        }))
    }

    const handleChangePagination = (page: number, perPage?: number) => {
        setPagination((prevData) => ({
            ...prevData,
            page,
            perPage: perPage || prevData.perPage
        }))
    }

    const queryParams = useMemo(() => stringifyParams({ ...pagination, ...filters }), [pagination, filters]);

    const fetchData = useCallback(async () => {
        try {
            const { data: response} = await axios.get<StudentInterface>(`/api/students?${queryParams}`)

            dispatch(setStudents(response.data))

            if(pagination.total !== response.meta.total) {
                setPagination((prevState) => ({
                    ...prevState,
                    total: response.meta.total
                }))
            }
        } catch (e) {
            enqueueSnackbar(e, {variant: 'error'})
        }
    }, [queryParams])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    return (
        <>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
                <Typography variant={'h3'}>Students list</Typography>
                <PrintButton tableRef={tableRef}/>
            </Stack>
            <Filters filters={filters} />
            <DataTable<StudentInterface>
                data={students}
                ref={tableRef}
                tableConfig={tableConfig}
                pagination={pagination}
                handleSort={handleSort}
                actions={actions}
                handleChangePagination={handleChangePagination}
            />
        </>
    )
}
export default Students;
