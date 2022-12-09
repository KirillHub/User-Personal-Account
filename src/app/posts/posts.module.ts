import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AddPostComponent } from "./add-post/add-post.component";
import { EditPostComponent } from "./edit-post/edit-post.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostsRoutingModule } from "./posts-routing.module";

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    PostsRoutingModule
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


