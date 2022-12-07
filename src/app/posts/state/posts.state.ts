import { TPost } from "src/app/models/post.model";

export interface TPostsState {
  posts: TPost[];
}

export const initialState: TPostsState = {
  posts: [
    { id: 1, title: 'Sample Title 1', description: 'Sample Description 1' },
    { id: 2, title: 'Sample Title 2', description: 'Sample Description 2' },
    { id: 3, title: 'Sample Title 3', description: 'Sample Description 3' },

  ]
}


