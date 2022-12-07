import { createAction, props } from "@ngrx/store";
import { TPost } from "src/app/models/post.model";


export const ADD_POST_ACTION = '[posts page] Add Post';

export const addPost = createAction(ADD_POST_ACTION,
  props<{ post: TPost }>()
);
