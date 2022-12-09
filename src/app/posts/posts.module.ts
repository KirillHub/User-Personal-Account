import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsRoutingModule } from "./posts-routing.module";
import { postsReducer } from "./state/posts.reducer";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PostsRoutingModule,
    // StoreModule.forFeature('posts', postsReducer)
  ],
  declarations: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
  exports: [
    PostsListComponent,
    AddPostComponent,
    EditPostComponent
  ],
})

export class PostsModule { }


