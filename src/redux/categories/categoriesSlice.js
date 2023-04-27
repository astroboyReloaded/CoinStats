import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  categories: 'Categories',
  isLoading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/categories/',
      );
      const categories = response.json();
      return categories;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCategories.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(fetchCategories.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        categories: action.payload,
      }));
  },
});

export default categoriesSlice.reducer;
