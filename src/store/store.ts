import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './slices/ProfileSlice';
import authReducer from './slices/AuthSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
