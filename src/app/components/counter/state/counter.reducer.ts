import { initialState } from './counter.state';
import { createReducer, on } from "@ngrx/store";
import * as CounterStates from './counter.actions';

export const counterReducer = createReducer(
  initialState,
  on(CounterStates.increment, state => ({
    ...state,
    counter: state.counter + 1
  })),
  on(CounterStates.decrement, state => ({
		...state,
		counter: state.counter - 1
	})),
	on(CounterStates.reset, state => ({
		...state,
		counter: 0
	})),
  on(CounterStates.setCounter, (state, action) => {
		console.log(action);
		return {
			...state,
			counter: state.counter + action.count
		}
	}),
	on(CounterStates.setTextInfo, (state, action) => {
		console.log(action);
		return {
			...state,
			someText: action.text
		}
	})
);
