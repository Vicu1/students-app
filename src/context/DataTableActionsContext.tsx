import {createContext} from "react";

export  interface DataTableActionsContextInterface<T> {
    item: T,

}

export const DataTableActionsContext = createContext<DataTableActionsContextInterface<any>>({
     item: null
})
