import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: !!localStorage.getItem('token'),
    },
    reducers: {
        loginAction: (state) => {
            state.isLoggedIn = true;
        },
        logoutAction: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem('token');
        },
    },
});

export const { loginAction, logoutAction } = authSlice.actions;
export default authSlice.reducer;