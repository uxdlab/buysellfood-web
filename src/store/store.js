// store.js
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";
import { loaderSlice } from "./slices/loaderSlice";


const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export default store;
