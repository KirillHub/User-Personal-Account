import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TPost } from 'src/app/models/post.model';
import { TAppState } from 'src/app/state/app.state';
import { deletePost } from '../state/posts.actions';
import { selectPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts$?: Observable<TPost[]>;

  constructor(private store: Store<TAppState>) { }


  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts)
  }

  onDeletePost(deletedPostId?: number) {
    this.store.dispatch(deletePost({ id: deletedPostId }));

    
  }
}
