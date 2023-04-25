import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  category: 'Category',
  isLoading: false,
  error: null,
};

export const fetchCoins = createAsyncThunk(
  'category/fetchCategory',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      );
      const coins = response.json();
      return coins;
    } catch (e) {
      return rejectWithValue(e.massage);
    }
  },
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCoins.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
      .addCase(fetchCoins.fulfilled, (state, action) => ({
        ...state,
        category: action.payload,
      }));
  },
});

export default categorySlice.reducer;
