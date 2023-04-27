import { createSlice } from '@reduxjs/toolkit'

export interface Auth {
  authorized: boolean;
  userId: string;
}

const initialState: Auth = {
  authorized: false,
  userId: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.authorized = true
      state.userId = action.payload.userId
    },
    logout: (state) => {
      state.authorized = false
      state.userId = ""
    },
  },
})

export const { login, logout } = authSlice.actions;


export default authSlice.reducer;