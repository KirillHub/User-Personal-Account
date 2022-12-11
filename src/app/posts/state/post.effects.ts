import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { PostsService } from "src/app/services/post.service";
import { loadPosts, loadPostsSuccess } from "./posts.actions";

@Injectable()

export class PostsEffects {
  constructor(
    private action$: Actions,
    private postService: PostsService
  ) { }

  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postService.getPosts().pipe(
          map((data) => {
            return loadPostsSuccess({posts: data})
          })
        )
      })
    )
  })
}



/*
  loadPosts$ = createEffect(() => {
    return this.action$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postService.getPosts().pipe(
          map((data) => {
            console.log(data); //! выводит данные
          })
        )
      })
    )
  }, { dispatch: false })
*/
