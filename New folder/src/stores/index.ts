import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user.slice";

const RootReducer = combineReducers({
    userStore: userReducer
})

export type Store = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})