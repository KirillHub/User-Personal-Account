import { TAuthState } from "../auth/state/auth.state";
import { TCounterState } from "../counter/state/counter.state";
import { TPostsState } from "../posts/state/posts.state";


export interface TAppState {
  counter: TCounterState
  posts: TPostsState
  auth: TAuthState
}
