import { createAction, props } from "@ngrx/store";
import { TPost } from "src/app/models/post.model";


export const ADD_POST_ACTION = '[posts page] Add Post';
export const EDIT_POST_ACTION = '[posts page] Edit Post';
export const DELETE_POST_ACTION = '[posts page] Delete Post';



export const LOAD_POSTS = '[posts page] load posts';
export const LOAD_POSTS_SUCCESS = '[posts page] load posts success';



export const addPost = createAction(ADD_POST_ACTION,
  props<{ post: TPost }>()
);

export const updatePost = createAction(EDIT_POST_ACTION,
  props<{ post: TPost, editPostId?: number }>()
);

export const deletePost = createAction(DELETE_POST_ACTION,
  props<{ id?: number }>()
);



export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: any }>()
);
