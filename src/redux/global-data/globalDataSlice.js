import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  globalData: 'Global Data',
  isLoading: false,
  error: null,
};

export const fetchGlobalData = createAsyncThunk(
  'globalData/fetchGlobalData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/global');
      const globalData = await response.json();
      return globalData;
    } catch (e) {
      return rejectWithValue(e.massage);
    }
  },
);

const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    clearGlobalData: (state) => ({
      ...state,
      initialState,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGlobalData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        globalData: action.payload,
      }))
      .addCase(fetchGlobalData.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { clearGlobalData } = globalDataSlice.actions;

export default globalDataSlice.reducer;
