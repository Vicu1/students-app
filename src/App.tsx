import './App.css'
import Students from "./modules/students";
import {SnackbarProvider} from "notistack";
import {students} from "./mock/students.ts";
import {SortOrderEnum} from "./enums/SortOrderEnum.ts";
import { createServer } from "miragejs"
import {Provider} from "react-redux";
import {store} from "./store";

const server = createServer()

server.post('/api/students/:id', () => {
    //Change status in database
})
server.get("/api/students", (schema, request) => {
    const qp = request.queryParams
    const offset = parseInt(qp.page)
    const limit = parseInt(qp.perPage)
    const start = offset * limit
    const end = start + limit

    let filteredStudents = students;

    if (qp.name) {
        filteredStudents = filteredStudents.filter(student =>
            student.name.toLowerCase().includes(qp.name.toLowerCase())
        );
    }

    if (qp.idnp) {
        filteredStudents = filteredStudents.filter(student =>
            student.idnp.toString().includes(qp.idnp.toString())
        );
    }

    if (qp.created_at_from) {
        const fromDate = new Date(qp.created_at_from);
        filteredStudents = filteredStudents.filter(student =>
            new Date(student.created_at) >= fromDate
        );
    }

    if (qp.created_at_to) {
        const toDate = new Date(qp.created_at_to);
        filteredStudents = filteredStudents.filter(student =>
            new Date(student.created_at) <= toDate
        );
    }

    let sortBy = qp.orderBy || 'id';
    let sortOrder = qp.order === SortOrderEnum.DESC ? -1 : 1;

    filteredStudents.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1 * sortOrder;
        if (a[sortBy] > b[sortBy]) return sortOrder;
        return 0;
    });

    const data = filteredStudents.slice(start, end)

    return {
        data,
        meta: {
            page: qp.offset,
            perPage: qp.limit,
            total: students.length
        }
    }
})


const App = () => {

  return (
      <Provider store={store}>
        <SnackbarProvider>
           <Students />
        </SnackbarProvider>
      </Provider>
  )
}

export default App
