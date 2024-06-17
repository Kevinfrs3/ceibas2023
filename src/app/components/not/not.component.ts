import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from './notificaciones.service';
import { environment } from '../../../environments/environment';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

export interface Notificacion {
  tipo_notificacion_id: string; // Ajusta el tipo según sea necesario
  nombre: string;
  identificacion: string;
  radicado: string;
  id: string;
}

@Component({
  selector: 'app-not',
  templateUrl: './not.component.html',
  styleUrls: ['./not.component.css']
})
export class NotComponent implements OnInit {

  public allNotificaciones: Notificacion[] = []; // Para almacenar todos los datos
  public listNotificaciones: Notificacion[] = []; // Para almacenar los datos de la página actual
  public currentPage: number = 1;
  public previousPage: number = 1;
  public nextPage: number = 1;
  public totalPages: number = 0;
  public visiblePages: number[] = []; 
  public urlArchivo: string = environment.urlConecction;
  public searchQuery: string = '';
  public filteredListNotificaciones: Notificacion[] = [];
  public pageGroupSize = 15;
  public currentPageGroupStart = 1;
  public loading: boolean = true;


  constructor(private titulo: Title, public service: NotificacionesService) {
    titulo.setTitle('Notificaciones - Las Ceibas E.S.P');
    this.searchQuery = '';
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.loadAllData();
    this.getNotificacionesPageable(this.currentPage - 1);
  }

  loadAllData(pageIndex: number = 0) {
    this.service.getNotificacionesPageable(pageIndex).subscribe(
      element => {
        this.allNotificaciones.push(...element.content);
  
        if (!element.last) {
          this.loadAllData(pageIndex + 1);
        } else {
          this.loading = false;
          this.getNotificacionesPageable(0);
        }
      }
    );
  }
  

  public getNotificacionesPageable(index: number) {
    this.listNotificaciones = this.allNotificaciones.slice(index * this.pageGroupSize, (index + 1) * this.pageGroupSize);
    this.currentPage = index + 1;

    this.filteredListNotificaciones = [...this.listNotificaciones];
    this.totalPages = Math.ceil(this.allNotificaciones.length / this.pageGroupSize);
    
    this.visiblePages = this.getVisiblePages(this.currentPage, this.totalPages);
  }

  getVisiblePages(currentPage: number, totalPages: number): number[] {
    let visiblePages = [];

    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  }

  public nextPageGroup() {
    if (this.currentPageGroupStart + this.pageGroupSize <= this.totalPages) {
      this.currentPageGroupStart += this.pageGroupSize;
    }
  }
  
  public previousPageGroup() {
    if (this.currentPageGroupStart - this.pageGroupSize >= 1) {
      this.currentPageGroupStart -= this.pageGroupSize;
    }
  }
  
  public getPageGroup(): number[] {
    return Array.from({length: this.pageGroupSize}, (_, i) => i + this.currentPageGroupStart);
  }
  
  search() {
    if (this.searchQuery) {
      let searchResults = this.allNotificaciones.filter((notificacion) =>
        notificacion.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      
      this.totalPages = Math.ceil(searchResults.length / this.pageGroupSize);
      this.filteredListNotificaciones = searchResults.slice(0, this.pageGroupSize);
    } else {
      this.getNotificacionesPageable(this.currentPage - 1);
    }
  }
}
