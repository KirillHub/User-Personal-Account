import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TPostsState } from "./posts.state";

//** later add UNIQ_KEY from 'posts' */

export const selectFeature =
  createFeatureSelector<TPostsState>('posts');

export const selectPosts = createSelector(
  selectFeature,
  state => state.posts
  );
