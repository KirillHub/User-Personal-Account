import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(module => module.CounterModule)
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(module => module.PostsModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }


/*
* Sample of earlier routing extension for children components
  {
  path: '', component: HomeComponent
},
  {
    path: 'counter', component: CounterComponent
  },
    {
  path: 'posts', component: PostsListComponent,
  children: [
    { path: 'add', component: AddPostComponent },
    { path: 'edit/:id', component: EditPostComponent }
  ]
}
*/

