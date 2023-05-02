import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  coinInFilter: {},
  top100Coins: [],
};

const priceConvertionSlice = createSlice({
  name: 'priceConvertion',
  initialState,
  reducers: {
    setThisCoinInFilter: (state, action) => ({
      ...state,
      coinInFilter: action.payload,
    }),
    setupTop100: (state, action) => ({
      ...state,
      top100Coins: action.payload,
    }),
  },
});

export const { setThisCoinInFilter, setupTop100 } = priceConvertionSlice.actions;

export default priceConvertionSlice.reducer;
