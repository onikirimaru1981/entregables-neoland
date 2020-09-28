import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  arrPostsLocal: Post[];
  constructor() {
    this.arrPostsLocal = [];
  }

  savePosts(pPost): void {
    this.arrPostsLocal.push(pPost);
    console.log(this.arrPostsLocal);

    const postStr = JSON.stringify(this.arrPostsLocal);
    localStorage.setItem('posts', postStr);
  }

  getAllPostsLocal(): Post[] {
    // console.log(this.arrPosts);
    return this.arrPostsLocal;
  }

  getPostsByCategoriaLocal(pCat): Post[] {
    const arrPostCategoria = this.arrPostsLocal.filter(
      (post) => post.categoria === pCat
    );
    return arrPostCategoria;
  }
}
