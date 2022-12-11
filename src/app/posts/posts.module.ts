import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { PostsEffects } from "./state/post.effects";
import { postsReducer } from "./state/posts.reducer";
import { POSTS_STATE_NAME } from "./state/posts.selectors";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    StoreModule.forFeature(POSTS_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  exports: [],
})

export class PostsModule { }


