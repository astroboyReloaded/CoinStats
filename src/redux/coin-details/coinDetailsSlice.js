import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  coinDetails: 'Coin Details',
  isLoading: false,
  error: '',
};

export const fetchCoinDetails = createAsyncThunk(
  'coinDetails/fetchCoinDetails',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/`,
      );
      const coinDetails = await response.json();
      return coinDetails;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const coinDetailsSlice = createSlice({
  name: 'coinDetails',
  initialState,
  reducers: {
    setAllCoinsPrices: (state, action) => {
      console.log(action.payload, 'action-SetAllCoinsPrices');
      return ({
        ...state,
        allCoinsPrices: action.payload,
      });
    },
    clearCoinDetails: (state) => ({
      ...state,
      ...initialState,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCoinDetails.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        coinDetails: action.payload,
      }))
      .addCase(fetchCoinDetails.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { setAllCoinsPrices, clearCoinDetails } = coinDetailsSlice.actions;

export default coinDetailsSlice.reducer;
