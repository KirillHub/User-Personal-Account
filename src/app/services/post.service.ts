import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { TPost } from "../models/post.model";

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  constructor(private http: HttpClient) { }

  getPosts(): Observable<TPost[]> {
    return this.http
      .get<TPost[]>(`https://vue-completecourse.firebaseio.com/posts.json`)
     .pipe(
    	map((data) => {
    	  const posts: TPost[] = [];
    	  for (let key in data) {
    		 posts.push({ ...data[key], id: key });
    	  }
    	  return posts;
    	})
     );
  }
}



/*
!working
  getPosts(): Observable<any[]> {
    return this.http
      .get<any[]>(`https://api.thecatapi.com/v1/images/search`)
    //  .pipe(
    // 	map((data) => {
    // 	  const posts: TPost[] = [];
    // 	  for (let key in data) {
    // 		 posts.push({ ...data[key] });
    // 	  }
    // 	  return posts;
    // 	})
    //  );
  }
*/
