import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {StudentStatusEnum} from "../../enums/StudentStatusEnum.ts";


export interface StudentInterface {
  id: number,
  name: string,
  birth_year: number,
  status: string,
  idnp: number,
  created_at: Date
}

export interface StudentFiltersInterface {
  name: string,
  idnp: number,
  created_at_from: Date
  created_at_to: Date
}

interface StudentsState {
  students: StudentInterface[]
  filters: StudentFiltersInterface | null
}

const initialState: StudentsState = {
  students: [],
  filters: null
};

export const students = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: (state, action: PayloadAction<StudentInterface[]>) => {
      state.students = action.payload
    },

    changeFilters: (state, action: PayloadAction<StudentFiltersInterface | null>) => {
      state.filters = action.payload
    },

    changeStatus: (state, action: PayloadAction<number>) => {
      state.students = state.students.map(student => {
        if(student.id === action.payload) {
          return ({
            ...student,
            status: student.status === StudentStatusEnum.EXCLUDED ? StudentStatusEnum.STUDIES : StudentStatusEnum.EXCLUDED
          })
        }

        return student
      })
    }
  },
});

export const {
  changeStatus,
  setStudents,
  changeFilters,
} = students.actions;
export default students.reducer;
