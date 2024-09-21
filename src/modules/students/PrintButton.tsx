import {Button} from "@mui/material";

const PrintButton = ({tableRef}) => {

    const handlePrint = () => {
        if (tableRef.current) {
            const printContents = tableRef.current.innerHTML;
            const originalContents = document.body.innerHTML;
            document.body.innerHTML = printContents;
            window.print();
            document.body.innerHTML = originalContents;
        }
    };

    return (
        <Button onClick={handlePrint} variant={'outlined'} color={'success'}>
            Print table
        </Button>
    )
}
export default PrintButton
