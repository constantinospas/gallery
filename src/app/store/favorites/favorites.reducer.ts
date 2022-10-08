import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import * as FavoritesActions from './favorites.actions';
import { AppState } from '../app.state';
import { environment } from '../../../environments/environment';

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
    ...state, favorites: state.favorites.filter(image => image.src !== src)
  }))
);

export const metaReducers: MetaReducer<AppState>[] = environment.production ? [] : [debug];

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log({ state }, { action });
    return reducer(state, action);
  };
}
