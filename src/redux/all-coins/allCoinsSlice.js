import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  allCoins: 'All Coins',
  isLoading: false,
  error: '',
};

export const fetchAllCoins = createAsyncThunk(
  'allCoins/fetchAllCoins',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd',
      );
      const allCoins = await response.json();
      return allCoins;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const allCoinsSlice = createSlice({
  name: 'allCoins',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchAllCoins.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        allCoins: action.payload,
      }))
      .addCase(fetchAllCoins.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default allCoinsSlice.reducer;
