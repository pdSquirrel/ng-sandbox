import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Post } from '../models/Post';

@Injectable()
export class PostService {
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }
}
