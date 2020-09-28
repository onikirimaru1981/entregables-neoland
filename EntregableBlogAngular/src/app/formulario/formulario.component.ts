import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  post: Post;
  constructor(public blogService: BlogService, private router: Router) {}

  ngOnInit(): void {}

  recogerDatosForm(pForm): void {
    this.blogService.savePosts(pForm);
    this.router.navigate(['/blog']);
  }
}
