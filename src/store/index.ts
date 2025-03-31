import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../slices/projectsSlice';

const store = configureStore({
  reducer: {
    example: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;