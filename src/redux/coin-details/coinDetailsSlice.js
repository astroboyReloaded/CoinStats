import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  coinDetails: {},
  isLoading: false,
  error: '',
  ready: false,
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
      .addCase(fetchCoinDetails.fulfilled, (state, action) => {
        const data = action.payload;
        return ({
          ...state,
          isLoading: false,
          coinDetails: {
            name: data.name,
            symbol: data.symbol,
            image: data.image.small,
            currentPrice: data.market_data.current_price,
            marketData: data.market_data,
            description: data.description.en,
          },
          ready: true,
        });
      })
      .addCase(fetchCoinDetails.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { clearCoinDetails } = coinDetailsSlice.actions;

export default coinDetailsSlice.reducer;
