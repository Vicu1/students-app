import {StudentStatusEnum} from "../enums/StudentStatusEnum.ts";

export const students = [
    {
        id: 1,
        name: 'Nastea',
        birth_year: 2001,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789212,
        created_at: new Date()
    },
    {
        id: 2,
        name: 'Vicu',
        birth_year: 2002,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789222,
        created_at: new Date()
    },
    {
        id: 3,
        name: 'Maria',
        birth_year: 2000,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789232,
        created_at: new Date()
    },
    {
        id: 4,
        name: 'Andrei',
        birth_year: 1999,
        status: StudentStatusEnum.EXCLUDED,
        idnp: 123456789242,
        created_at: new Date()
    },
    {
        id: 5,
        name: 'Elena',
        birth_year: 2003,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789252,
        created_at: new Date()
    },
    {
        id: 6,
        name: 'Ion',
        birth_year: 2004,
        status: StudentStatusEnum.EXCLUDED,
        idnp: 123456789262,
        created_at: new Date()
    },
    {
        id: 7,
        name: 'Oana',
        birth_year: 2001,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789272,
        created_at: new Date()
    },
    {
        id: 8,
        name: 'Cristi',
        birth_year: 2002,
        status: StudentStatusEnum.EXCLUDED,
        idnp: 123456789282,
        created_at: new Date()
    },
    {
        id: 9,
        name: 'Alina',
        birth_year: 2000,
        status: StudentStatusEnum.STUDIES,
        idnp: 123456789292,
        created_at: new Date()
    },
    {
        id: 10,
        name: 'Daria',
        birth_year: 2003,
        status: StudentStatusEnum.EXCLUDED,
        idnp: 123456789302,
        created_at: new Date()
    }
]
