import { Component, OnInit, ViewChild } from '@angular/core';
import { WordpressService } from '../../wordpress.service';
import { Pipe, PipeTransform } from '@angular/core';
import { MatPaginator, PageEvent, MatPaginatorIntl } from '@angular/material/paginator';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number = 100, ellipsis: string = '...'): string {
    if (typeof value !== 'string') {
      value = value.toString();
    }

    if (value.length <= limit) {
      return value;
    }

    return value.substr(0, limit) + ellipsis;
  }
}

export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Noticias por página';

  override getRangeLabel = (page: number, pageSize: number, length: number): string => {
    if (length === 0 || pageSize === 0) {
      return `0 de ${length}`;
    }
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min(startIndex + pageSize - 1, length);
    return `${startIndex} - ${endIndex} de ${length}`;
  };
}

@Component({
  selector: 'app-sala-prensa',
  templateUrl: './sala-prensa.component.html',
  styleUrls: ['./sala-prensa.component.css'],
  providers: [
    { provide: MatPaginatorIntl, useClass: CustomPaginatorIntl }
  ]
})
export class SalaPrensaComponent implements OnInit {
  showNews: boolean = true;

  posts: any[] = []; // Noticias
  pdfs: any[] = [];  // Documentos PDFs
  pagedPosts: any[] = [];
  pagedPdfs: any[] = []; // Documentos PDFs paginados
  currentPage: number = 1;
  pageSize: number = 3;
  totalPosts: number = 0;
  totalPdfs: number = 0;

  @ViewChild('newsPaginator', { static: true }) newsPaginator!: MatPaginator;
  @ViewChild('pdfPaginator', { static: true }) pdfPaginator!: MatPaginator;


  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {
    this.loadAllPosts();
    this.loadAllPdfs();
  }

  loadAllPosts(): void {
    this.wordpressService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      this.totalPosts = this.posts.length;
      this.paginatePosts();
    });
  }

  // Lógica para cargar los documentos PDFs, por ejemplo, desde un servidor o una carpeta local.
  loadAllPdfs(): void {

    // Puedes llenar this.pdfs con los datos de los PDFs.
    this.pdfs = [

      //SEPTIEMBRE - 2023
      { title: 'Boletín Interno - Septiembre de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-septiembre.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-septiembre.png' },
      //AGOSTO - 2023
      { title: 'Boletín Interno - Agosto de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-agosto.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-agosto.png' },
      //JUNIO - 2023
      { title: 'Boletín Interno - Junio de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-junio.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-junio.png' },
      //JUNIO - 2023
      { title: 'Boletín Interno - Mayo de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-mayo.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-mayo.png' },
      //MARZO Y ABRIL - 2023
      { title: 'Boletín Interno - Marzo y Abril de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-marzo-abril.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-marzo-abril.png' },
      //MARZO Y ABRIL - 2023
      { title: 'Boletín Interno - Febrero de 2023', pdfUrl: '../../../assets/Archivos/prensa/boletin-febrero.pdf', thumbnailUrl: '../../../assets/Archivos/prensa/portada-febrero.png' },

      // Agrega más tarjetas PDFs aquí
    ];
    this.totalPdfs = this.pdfs.length;
    this.paginatePdfs();
  }

  paginatePdfs(): void {
    this.pagedPdfs = this.pdfs.slice(0, this.pageSize);
  }
  
  // Agrega este método para manejar la paginación de PDFs
  changePdfsPage(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    this.pagedPdfs = this.pdfs.slice(startIndex, startIndex + event.pageSize);
  }
  
  paginatePosts(): void {
    this.pagedPosts = this.posts.slice(0, this.pageSize);
  }
  
  // Agrega este método para manejar la paginación de noticias
  changeNewsPage(event: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    this.pagedPosts = this.posts.slice(startIndex, startIndex + event.pageSize);
  }


}
