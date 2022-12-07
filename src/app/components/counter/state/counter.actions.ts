import { createAction, props } from "@ngrx/store";


export const increment = createAction('[increment]');
export const decrement = createAction('[decrement]');
export const reset = createAction('[reset]');

export const setCounter = createAction('[set-counter] Counter Number',
  props<{ count: number }>()
);

export const setTextInfo = createAction('[text-changer]',
  props<{ text: string }>()
);
