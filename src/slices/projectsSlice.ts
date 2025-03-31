import { createSlice } from '@reduxjs/toolkit';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = projectsSlice.actions;
export default projectsSlice.reducer;