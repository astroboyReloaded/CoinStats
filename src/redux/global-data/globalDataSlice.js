import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  globalData: 'Global Data',
  isLoading: false,
  error: null,
};

export const fetchGlobalData = createAsyncThunk(
  'global-data/fetchGlobalData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/global',
      );
      const globalData = response.json();
      return globalData;
    } catch (e) {
      return rejectWithValue(e.massage);
    }
  },
);

const globalDataSlice = createSlice({
  name: 'global-data',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGlobalData.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
      .addCase(fetchGlobalData.fulfilled, (state, action) => ({
        ...state,
        globalData: action.payload,
      }));
  },
});

export default globalDataSlice.reducer;
