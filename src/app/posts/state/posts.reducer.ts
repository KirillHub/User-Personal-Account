import { createReducer, on } from "@ngrx/store";
import { addPost } from "./posts.actions";
import { initialState } from "./posts.state";


export const postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {

    let post = { ...action.post };
    post.id = state.posts.length + 1;

    return {
      ...state,
      posts: [...state.posts, post]
    }
  })
);
