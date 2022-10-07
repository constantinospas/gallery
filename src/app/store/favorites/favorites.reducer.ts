import { createReducer, on } from '@ngrx/store';
import * as FavoritesActions from './favorites.actions';

export interface FavoritesState {
  favorites: any[],
}

export const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(FavoritesActions.addFavorite, (state, { src }) => ({
    ...state, favorites: [...state.favorites, { src }]
  })),
  on(FavoritesActions.removeFavorite, (state, { src }) => ({
    ...state, favorites: state.favorites.filter(item => item.src !== src)
  })),
  on(FavoritesActions.loadFavorites, (state) => ({
    ...state, status: 'loading'
  }))
);
