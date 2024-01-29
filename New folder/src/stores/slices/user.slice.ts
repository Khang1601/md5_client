import { createSlice } from "@reduxjs/toolkit";

export interface User {
    id: number;
    userName: string;
    password: string;
    email: string;
    emailAuthen: boolean;
    role: any;
    status: any;
    createAt: string;
    updateAt: string;
    avatar: string;
}

interface InitState {
    data: null | User
}

const  initialState: InitState = {
    data: null
} 

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const userReducer = userSlice.reducer;
export const userAction  = userSlice.actions;