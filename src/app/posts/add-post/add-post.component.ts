import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TPost } from 'src/app/models/post.model';
import { TAppState } from 'src/app/state/app.state';
import { addPost } from '../state/posts.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<TAppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });

  };

  onAddPost() {
    if (!this.postForm.valid) return;

    const post: TPost = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };

    this.store.dispatch(addPost({ post: post }))
    this.postForm.reset();
  };

  showDescriptionErrors(): void | string {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {

      if (descriptionForm.errors?.required) {
        return 'Desctiption is required'
      };
      if (descriptionForm.errors?.minlength) {
        return 'Desctiption should be minimum 10 characters lenght'
      };
    };

  };

}
