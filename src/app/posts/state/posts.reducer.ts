import { createReducer, on } from "@ngrx/store";
import { initialState } from "./posts.state";


export const postsReducer = createReducer(
  initialState,
);


