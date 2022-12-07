import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TCounterState } from "./counter.state";

export const COUNTER_KEY = 'counter';

export const selectFeature =
  createFeatureSelector<TCounterState>(COUNTER_KEY);

  export const selectCounter = createSelector(
    selectFeature,
    state => state.counter
  );
  export const selectTextContent = createSelector(
    selectFeature,
    state => state.textInfo
  );

