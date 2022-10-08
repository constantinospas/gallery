import { createAction, props } from '@ngrx/store';
import { IPhotoModel } from '../../photos/photo.model';

export const addFavorite = createAction('[Favorites] Add', props<{ img: IPhotoModel }>());
export const removeFavorite = createAction('[Favorites] Remove', props<{ id: number }>());
