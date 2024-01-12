import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState : {
        isLogin: false,
        status : 'visitor'
    },
    reducers: {
        login: (state,action) => {
            state.isLogin = true;
            state.status = action.payload.role;
        },
        logout: (state) => {
            state.isLogin = false;
            state.status = 'visitor';
          },  
    },
});

export const { login,logout } = loginSlice.actions;
export default loginSlice.reducer;