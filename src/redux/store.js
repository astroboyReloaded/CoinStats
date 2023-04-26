import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './all-coins/allCoinsSlice';
import coinDetailsReducer from './coin-details/coinDetailsSlice';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    allCoins: allCoinsReducer,
    coinDetails: coinDetailsReducer,
    categories: categoriesReducer,
  },
});

export default store;
