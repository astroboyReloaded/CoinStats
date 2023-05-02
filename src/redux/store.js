import { configureStore } from '@reduxjs/toolkit';
import allCoinsReducer from './all-coins/allCoinsSlice';
import coinDetailsReducer from './coin-details/coinDetailsSlice';
import categoriesReducer from './categories/categoriesSlice';
import globalDataReducer from './global-data/globalDataSlice';
import PriceConvertionReducer from './price-convertion/priceConvertionSlice';

const store = configureStore({
  reducer: {
    allCoins: allCoinsReducer,
    coinDetails: coinDetailsReducer,
    categories: categoriesReducer,
    globalData: globalDataReducer,
    priceConvertion: PriceConvertionReducer,
  },
});

export default store;
