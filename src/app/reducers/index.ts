import { COUNTER_KEY } from '../components/counter/state/counter.selectors';
import { counterReducer } from '../components/counter/state/counter.reducer';
import { TCounter } from '../components/counter/state/counter.state';
import { isDevMode } from '@angular/core';
import {
	ActionReducer,
	ActionReducerMap,
	createFeatureSelector,
	createSelector,
	MetaReducer
} from '@ngrx/store';

export interface State {
	[COUNTER_KEY]: TCounter;  // ['counter'] -> selectors
}

export const reducers: ActionReducerMap<State> = {
	[COUNTER_KEY]: counterReducer   // ['counter']
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
