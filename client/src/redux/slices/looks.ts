import { createSlice } from '@reduxjs/toolkit';
import { Look } from '../../types/User';

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

