import {Controller, FieldPathValue, Path, useFormContext} from "react-hook-form";
import {FormControl} from "@mui/material";
import FormError from "./FormError.tsx";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface FormDatePickerProps<T> {
    name: Path<T>,
    label: string,
    type?: string
    defaultValue?: FieldPathValue<T, Path<T>>;
}

const FormDatePicker = <T, >({name, defaultValue = null, label, type = 'text'}: FormDatePickerProps<T>) => {
    const {control} = useFormContext()

    return (
        <Controller
            defaultValue={defaultValue}
            render={({field, fieldState }) => (
                <FormControl sx={{position: 'relative', pb: '20px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            {...field}
                            label={label}
                            value={field.value ? dayjs(field.value) : null}
                            onChange={(value) => {
                                if(value) {
                                    if (dayjs(value).isValid()) {
                                        field.onChange(dayjs(value).toDate())
                                    }
                                }
                            }}
                            ampm={false}
                        />
                    </LocalizationProvider>
                    <FormError error={fieldState.error} />
                </FormControl>
            )}
            name={name}
            control={control}
        />
    )
}
export default FormDatePicker
