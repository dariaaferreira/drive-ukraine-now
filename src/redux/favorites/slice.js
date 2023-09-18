import { createSlice } from '@reduxjs/toolkit';

const getStoredFavorites = () => {
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  return storedFavorites;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: getStoredFavorites(), 
  },
  reducers: {
    addToFavorites: (state, action) => {
      const newFavorite = action.payload;
      const updatedFavorites = [...state.favorites, newFavorite];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      state.favorites = updatedFavorites;
    },
    removeFromFavorites: (state, action) => {
      const removedId = action.payload;
      const filteredFavorites = state.favorites.filter((advert) => advert.id !== removedId);
      localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
      state.favorites = filteredFavorites;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;

export default favoritesSlice.reducer;
