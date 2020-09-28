import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  arrPintarPostLocal: Post[];

  constructor(public blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    const traerDeLocal = localStorage.getItem('posts');
    this.arrPintarPostLocal = JSON.parse(traerDeLocal);
  }

  pintarPostPorCategoriaLocal(pCategoria): void {
    this.arrPintarPostLocal = this.blogService.getPostsByCategoriaLocal(
      pCategoria
    );
  }

  borrarDatos(): void {
    localStorage.removeItem('posts');

    location.reload();
  }

  refrescarBlog(): void {
    const traerDeLocal = localStorage.getItem('posts');
    this.arrPintarPostLocal = JSON.parse(traerDeLocal);
  }
}
