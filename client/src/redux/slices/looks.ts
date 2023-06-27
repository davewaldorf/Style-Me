import { createSlice } from '@reduxjs/toolkit';

export const looksSlice = createSlice({
  name: 'looks',
  initialState: [],
  reducers: {
    setLooks: (state, action) => {
      return action.payload;
    }
  },
});

export const { setLooks } = looksSlice.actions;

export default looksSlice.reducer;

