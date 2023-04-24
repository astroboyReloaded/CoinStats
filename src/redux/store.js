import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './allCoins/AllCoinsSlice';

const store = configureStore({
  reducer: {
    allCoins: allCoinsReducer,
  },
});

export default store;
