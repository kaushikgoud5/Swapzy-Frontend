import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slices/ProfileSlice'
export const store = configureStore({
  reducer: {
    profile : profileReducer
  },
});
