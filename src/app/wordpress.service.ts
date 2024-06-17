import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Post {
  link: string;
  // Otros campos que esperas recibir
}

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  private apiUrl = 'https://enterate.lasceibas.gov.co/wp-json/wp/v2';

  constructor(private http: HttpClient) {}

  getLatestPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?_embed&per_page=3`).pipe(
      map(posts => {
        return posts.map(post => {
          // Asegura que la URL relativa comience con una barra diagonal
          if (post.link.startsWith('/')) {
            post.link = 'https://enterate.lasceibas.gov.co' + post.link;
          } else {
            post.link = 'https://enterate.lasceibas.gov.co/' + post.link;
          }
          return post;
        });
      })
    );
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?_embed&per_page=100`).pipe(
      map(posts => {
        return posts.map(post => {
          // Asegura que la URL relativa comience con una barra diagonal
          if (post.link.startsWith('/')) {
            post.link = 'https://enterate.lasceibas.gov.co' + post.link;
          } else {
            post.link = 'https://enterate.lasceibas.gov.co/' + post.link;
          }
          return post;
        });
      })
    );
  }
}
