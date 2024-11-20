// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  userData: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      state.userData = action.payload.userData
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.userData = null
    },
    updateUserData: (state, action) => {
      state.userData = action.payload;
    }
  },
});

export const { setUser, clearUser,updateUserData } = authSlice.actions;

