// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocData } from "../../services/firebase/getData";


export const setUserDetailsInStore = createAsyncThunk(
  'user/setUserDetailsInStore',
  async (user, { dispatch, rejectWithValue }) => {
    try {
      const userData = await getDocData('users', user.uid);
      dispatch(setUser({ email: user.email, uid: user.uid, userData }));
      return userData;
    } catch (error) {
      dispatch(clearUser());
      return rejectWithValue(error.message);
    }
  }
);

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

