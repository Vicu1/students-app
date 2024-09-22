import {IconButton, Tooltip} from "@mui/material";
import {enqueueSnackbar} from "notistack";
import axios from "axios";
import {lazy, Suspense, useContext} from "react";
import {DataTableActionsContext, DataTableActionsContextInterface} from "../../context/DataTableActionsContext.tsx";
import {StudentStatusEnum} from "../../enums/StudentStatusEnum.ts";
import {Else, If, Then} from "react-if";
import {useAppDispatch} from "../../store/hooks.ts";
import {changeStatus, StudentInterface} from "../../store/modules/studentsSlice.ts";
const CheckCircleIcon = lazy(() => import('@mui/icons-material/CheckCircle'));
const RemoveCircleIcon = lazy(() => import('@mui/icons-material/RemoveCircle'));

const ChangeStudentStatus = () => {
    const {item} = useContext<DataTableActionsContextInterface<StudentInterface>>(DataTableActionsContext)
    const excluded = item.status === StudentStatusEnum.EXCLUDED;
    const dispatch = useAppDispatch()
    const handleChangeStatus = async () => {
        try {
            await axios.post(`/api/students/${item.id}`)
            dispatch(changeStatus(item.id))
            enqueueSnackbar(excluded ? 'Successfully admitted' : 'Successfully excluded', {variant: 'success'})
        } catch (e) {
            enqueueSnackbar(e, {variant: 'error'})
        }
    }

    return (
        <Tooltip title={excluded ? 'Admit' : 'Exclude'}>
            <IconButton onClick={handleChangeStatus}>
                <If condition={excluded}>
                    <Then>
                        <Suspense>
                            <CheckCircleIcon color={'success'} />
                        </Suspense>
                    </Then>
                    <Else>
                        <Suspense>
                            <RemoveCircleIcon color={'error'} />
                        </Suspense>
                    </Else>
                </If>
            </IconButton>
        </Tooltip>
    )
}

export const actions = [<ChangeStudentStatus key={1} />]
