import { TCounterState } from "../counter/state/counter.state";
import { TPostsState } from "../posts/state/posts.state";


export interface TAppState {
  counter: TCounterState
  posts: TPostsState
}
