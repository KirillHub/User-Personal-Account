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
import { TCounterState } from '../counter/state/counter.state';
import { POSTS_KEY } from '../posts/state/posts.selectors';
import { TPostsState } from '../posts/state/posts.state';
import { postsReducer } from '../posts/state/posts.reducer';

export interface State {
  [COUNTER_KEY]: TCounterState;
  [POSTS_KEY]: TPostsState;
}

export const reducers: ActionReducerMap<State> = {
  [COUNTER_KEY]: counterReducer,
  [POSTS_KEY]: postsReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
