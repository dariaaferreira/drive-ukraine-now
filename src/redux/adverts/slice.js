import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations'

const advertsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected)
  },
});

export const advertsReducer = advertsSlice.reducer;