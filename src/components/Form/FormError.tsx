import {FormHelperText} from "@mui/material";
import {FieldError} from "react-hook-form";
import {FC} from "react";

interface FormErrorProps {
    error?: FieldError
}

const FormError: FC<FormErrorProps> = ({error}) => {
    return (
        <FormHelperText
            sx={{position: 'absolute', bottom: 0, margin: 0, textWrap: 'nowrap'}}
            error={Boolean(error)}
        >
            {error?.message}
        </FormHelperText>
    )
}
export default FormError
