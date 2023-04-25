import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './all-coins/allCoinsSlice';
import coinDetailsReducer from './coin-details/coinDetailsSlice';

const store = configureStore({
  reducer: {
    allCoins: allCoinsReducer,
    coinDetails: coinDetailsReducer,
  },
});

export default store;
