import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categoriesSlice';
import allCoinsReducer from './all-coins/allCoinsSlice';
import coinDetailsReducer from './coin-details/coinDetailsSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    allCoins: allCoinsReducer,
    coinDetails: coinDetailsReducer,
  },
});

export default store;
