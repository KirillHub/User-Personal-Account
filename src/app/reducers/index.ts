import { COUNTER_KEY } from '../counter/state/counter.selectors';
import { counterReducer } from '../counter/state/counter.reducer';
import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { TCounter } from '../counter/state/counter.state';

export interface State {
  [COUNTER_KEY]: TCounter;  // ['counter'] -> selectors
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer   // ['counter']
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
