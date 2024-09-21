import {Controller, FieldPathValue, Path, useFormContext} from "react-hook-form";
import {FormControl, TextField} from "@mui/material";
import FormError from "./FormError.tsx";

interface FormInputProps<T> {
    name: Path<T>,
    label: string,
    type?: string
    defaultValue?: FieldPathValue<T, Path<T>>;
}

const FormInput = <T, >({name, defaultValue = '', label, type = 'text'}: FormInputProps<T>) => {
    const {control} = useFormContext()

    return (
        <Controller
            defaultValue={defaultValue}
            render={({field, fieldState}) => (
                <FormControl sx={{position: 'relative', pb: '20px'}}>
                    <TextField
                        label={label}
                        type={type}
                        error={Boolean(fieldState.error)}
                        value={field.value}
                        ref={field.ref}
                        onChange={field.onChange}
                    />
                    <FormError error={fieldState.error} />
                </FormControl>
            )}
            name={name}
            control={control}
        />
    )
}
export default FormInput
