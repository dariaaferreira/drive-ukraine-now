import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { favoritesReducer } from './favorites/slice';
import { advertsReducer } from './adverts/slice';

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
