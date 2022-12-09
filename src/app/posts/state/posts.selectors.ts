import { createFeatureSelector, createSelector, props } from "@ngrx/store";
import { TPostsState } from "./posts.state";

export const POSTS_STATE_NAME = 'posts';

export const selectFeature =
  createFeatureSelector<TPostsState>(POSTS_STATE_NAME);

export const selectPosts = createSelector(
  selectFeature,
  state => state.posts
);

export const selectPostById = (props: { id: string }) =>
  createSelector(
    selectFeature,
    state => state.posts.find(post => post.id == +props.id)
  );
