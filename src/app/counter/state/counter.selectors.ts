import { TCounter } from './counter.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const COUNTER_KEY = 'counter';

export const selectFeature =
  createFeatureSelector<TCounter>(COUNTER_KEY);

  export const selectCounter = createSelector(
    selectFeature,
    state => state.counter
  );
  export const selectTextContent = createSelector(
    selectFeature,
    state => state.textInfo
  );

