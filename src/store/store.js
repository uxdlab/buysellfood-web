// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { loaderSlice } from "./slices/loaderSlice";
import { toastSlice } from "./slices/toastSlice";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    toast: toastSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export default store;
