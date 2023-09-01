import { createAction, props } from '@ngrx/store';

export const addToCart = createAction(
  '[Item] Add To Cart',
  props<{ item: any }>()
);

export const removeFromCart = createAction(
  '[Item] Remove From Cart',
  props<{ item: any }>()
);
