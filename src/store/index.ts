import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from "./modules/studentsSlice.ts";
export const store = configureStore({
    reducer: {
        studentsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
