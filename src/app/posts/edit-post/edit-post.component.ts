import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TPost } from 'src/app/models/post.model';
import { TAppState } from 'src/app/state/app.state';
import { updatePost } from '../state/posts.actions';
import { selectPostById } from '../state/posts.selectors';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit, OnDestroy {
  postForm!: FormGroup;
  post?: TPost;
  postSubscription?: Subscription;

  constructor(private route: ActivatedRoute,
    private store: Store<TAppState>) { }

  ngOnInit(): void {
    this.postSubscription = this.route.paramMap.subscribe(m => {
      let id: any = m.get('id');
      this.store.select(selectPostById({ id })).subscribe(
        data => {
          this.post = data;
          this.createForm();

          this.postForm.get('title')?.setValue(this.post?.title);
          this.postForm.get('description')?.setValue(this.post?.description);
        }
      );
    });
  };

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10)
      ]),
    });

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
  }

  onEditPost() {
    if (!this.postForm.valid) return;

    const editPost: TPost = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };

    this.store.dispatch(updatePost(
      { post: editPost, editPostId: this.post?.id }))

  };

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe()
    }
  };

}
