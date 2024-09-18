import DataTable from "../../components/DataTable";
import tableConfig from "./tableConfig.ts";
import {Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {TablePaginationInterface} from "../../components/DataTable/types.ts";
import {SortOrderEnum} from "../../enums/SortOrderEnum.ts";
import axios from "axios";
import {set} from "react-hook-form";

export interface StudentInterface {
    id: number,
    name: string,
    birth_year: number,
    status: string,
    idnp: number,
}



const Students = () => {
    const [data, setData] = useState<StudentInterface[]>([])
    const [pagination, setPagination] = useState<TablePaginationInterface<StudentInterface>>({
        orderBy: 'id',
        order: SortOrderEnum.ASC,
        page: 1,
        perPage: 5
    })

    const handleSort = (value) => {
        setPagination((prevData) => ({
            ...prevData,
            orderBy: value,
            order: prevData.order === SortOrderEnum.ASC ? SortOrderEnum.DESC : SortOrderEnum.ASC
        }))
    }

    const fetchData = async () => {
        try {
            const {data: response} = await axios.get<StudentInterface>('')

            setData(response)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <Typography variant={'h3'}>Students list</Typography>
            <DataTable<StudentInterface> data={data} tableConfig={tableConfig} pagination={pagination} handleSort={handleSort} />
        </>
    )
}
export default Students
