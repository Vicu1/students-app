import {Button, debounce, Grid2} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import {changeFilters, StudentFiltersInterface} from "../../store/modules/studentsSlice.ts";
import {FC, useCallback, useEffect} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'
import FormInput from "../../components/Form/FormInput.tsx";
import FormDatePicker from "../../components/Form/FormDatePicker.tsx";
import {useAppDispatch} from "../../store/hooks.ts";
import {memo} from 'react'
interface FilterProps {
    filters: StudentFiltersInterface
}

const schema = yup.object().shape({
    name: yup.string()
        .min(3)
        .max(100),
    idnp: yup.string().min(12).max(12),
})

const Filters: FC<FilterProps> = ({filters}) => {
    const form = useForm<StudentFiltersInterface>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: filters,
        resolver: yupResolver(schema)
    })
    const dispatch = useAppDispatch()
    const watch = form.watch()

    const debouncedChangeHandler = useCallback(
        debounce((newValue: StudentFiltersInterface) => {
            if(newValue && !Object.keys(form.formState.errors).length) {
                dispatch(changeFilters(newValue))
            }
        }, 500),
        []
    );

    const clearFilters = () => {
        form.reset({})
        dispatch(changeFilters(null))
    }

    useEffect(() => {
        if(JSON.stringify(form.getValues()) !== JSON.stringify(filters)) {
            debouncedChangeHandler(watch)
        }
    }, [form.getValues()]);

    return (
        <FormProvider {...form}>
            <form
                autoComplete={'off'}
            >
                <Grid2 justifyContent={'center'} container spacing={2} margin={'20px 0'}>
                    <Grid2 item xs={4}>
                        <FormInput<StudentFiltersInterface> name={'name'} label={'Name'} />
                    </Grid2>
                    <Grid2 item xs={4}>
                        <FormInput<StudentFiltersInterface> name={'idnp'} label={'IDNP'} type={'number'} />
                    </Grid2>
                    <Grid2 item xs={4}>
                        <FormDatePicker<StudentFiltersInterface> name={'created_at_from'} label={'Created at from'} />
                    </Grid2>
                    <Grid2 item xs={4}>
                        <FormDatePicker<StudentFiltersInterface> name={'created_at_to'} label={'Created at to'} />
                    </Grid2>
                    <Grid2 item>
                        <Button variant={'contained'} onClick={clearFilters}>Clear filters</Button>
                    </Grid2>
                </Grid2>
            </form>
        </FormProvider>
    )
}
export default memo(Filters)
