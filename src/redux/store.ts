import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store= configureStore({
    reducer:{
        contact: contactReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;