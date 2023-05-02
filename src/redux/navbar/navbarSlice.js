import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 'All Coins',
  pageData: {},
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
});

export default navbarSlice.reducer;
