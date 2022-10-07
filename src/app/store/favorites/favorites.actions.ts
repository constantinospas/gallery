import { createAction, props } from '@ngrx/store';

export const loadFavorites = createAction('[Favorites] Load');
export const addFavorite = createAction('[Favorites] Add', props<{ src: string }>());
export const removeFavorite = createAction('[Favorites] Remove', props<{ src: string }>());
