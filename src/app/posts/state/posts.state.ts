import { TPost } from "src/app/models/post.model";

export interface TPostsState {
  posts: TPost[] | [];
}

export const initialState: TPostsState = {
  posts: [],
}


