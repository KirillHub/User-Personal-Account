import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TCounterState } from "./counter.state";

export const COUNTER_STATE_NAME = 'counter';

export const selectFeature =
  createFeatureSelector<TCounterState>(COUNTER_STATE_NAME);

  export const selectCounter = createSelector(
    selectFeature,
    state => state.counter
  );
  export const selectTextContent = createSelector(
    selectFeature,
    state => state.textInfo
  );

