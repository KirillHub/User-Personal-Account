import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TPost } from 'src/app/models/post.model';
import { TAppState } from 'src/app/state/app.state';
import { selectPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {

  postForm!: FormGroup;
  post?: TPost

  constructor(private route: ActivatedRoute,
    private store: Store) { }

  showDescriptionErrors() { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(m => {
      const id: any = m.get('id')
console.log(id);
      this.store.select(selectPostById({ id })).subscribe(
        data => {
          this.post = data;
          console.log(this.post);
        }
      )
    })


  }
}
