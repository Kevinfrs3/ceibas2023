import { Component, AfterViewInit } from '@angular/core';
import { FacebookService } from './facebook.service';
import { WordpressService } from '../../wordpress.service'; // Importa el servicio WordpressService aquí

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {
  pagedPosts: any[] = []; // Variable para almacenar las noticias paginadas
  pageSize = 10; // Tamaño de página, puedes ajustarlo según tus necesidades
  totalPosts = 0; // Total de noticias

  constructor(
    private facebookService: FacebookService,
    private wordpressService: WordpressService // Inyecta el servicio WordpressService
  ) {}

  ngAfterViewInit() {
    this.facebookService.renderCommentsPlugin();
    this.loadAllPosts(); // Llama a la función para cargar todas las noticias
  }

  loadAllPosts() {
    this.wordpressService.getAllPosts().subscribe((response: any) => {
      this.totalPosts = response.length;
      this.pagedPosts = response;
    });
  }

  // Método para obtener la imagen destacada de cada noticia
  getPostFeaturedImage(post: any): string {
    if (
      post._embedded &&
      post._embedded['wp:featuredmedia'] &&
      post._embedded['wp:featuredmedia'][0].source_url
    ) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    } else {
      return ''; // O una URL de imagen por defecto si no hay imagen destacada
    }
  }
}
