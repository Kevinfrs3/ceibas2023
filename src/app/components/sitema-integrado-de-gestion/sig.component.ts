import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Sig2Service } from './sig2.service';
import { SigModel } from '../models/sig';
import { Router } from '@angular/router';
import { NodeSelectEventArgs } from '@syncfusion/ej2-navigations';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
})
export class SigComponent implements OnInit, AfterViewInit {

  @ViewChild('tree') public tree: TreeViewComponent | undefined;

  public listOrigin: SigModel[] = [];
  public listFolders: Object[] = [];
  public folderSelected = 1;
  public listFiles: SigModel[] = [];
  public listSubFolders: SigModel[] = [];
  public field: Object = {};
  public urlArchivo;
  public searchTerm: string = ''; // Nuevo campo para el término de búsqueda
  public filteredFiles: SigModel[] = []; // Lista filtrada de archivos
  public isSearching: boolean = false;


  constructor(private title: Title, public service: Sig2Service, public route: Router) {
    this.title.setTitle('Sistema de Gestión Integral - Las Ceibas E.S.P');
    this.urlArchivo = environment.urlConecction + "sig/download/";
  }

  ngOnInit(): void {
    this.service.getDataSIG().subscribe(
      response => {
        this.listOrigin = response;
        this.listFolders = this.loadDataFolders(0);
        this.field = { dataSource: this.listFolders, id: 'id', text: 'name', child: 'subChild' };
        this.changeFolder(this.folderSelected);
      }
    )
  }

  ngAfterViewInit(): void {

  }

  public loadDataFolders(id: number) {
    let dataFilter = this.listOrigin.filter(item => item.sig_id == id && item.tipo_sig_id == 1);
    let dataTemporal: { [key: string]: any }[] = [];
    dataFilter.forEach(item => {
      dataTemporal.push({
        "id": item.id,
        "name": item.nombre,
        "expanded": item.id == 1,
        "subChild": this.loadDataFolders(Number(item.id))
      })
    });
    return dataTemporal;
  }

  public changeFolder(id: number) {
    this.folderSelected = id;
    this.listFiles = this.listOrigin.filter(item => item.sig_id == this.folderSelected && item.tipo_sig_id == 2);
    this.listSubFolders = this.listOrigin.filter(item => item.sig_id == this.folderSelected && item.tipo_sig_id == 1);
    this.filterFiles(); // Llama al método de filtrado cuando cambia la carpeta
  }

  public goToCreateFolder() {
    this.route.navigate(['sistema-integrado-de-gestion/create-folder/' + this.folderSelected]);
  }

  public changeFolderTree(e: NodeSelectEventArgs) {
    this.changeFolder(Number(this.tree?.selectedNodes));
  }

  // Filtro de archivos en tiempo real
  filterFiles() {
    if (this.searchTerm.trim() !== '') {
      // Realizar búsqueda en todos los archivos de todas las carpetas
      this.filteredFiles = this.listOrigin.filter(item =>
        item.tipo_sig_id === 2 && item.archivo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.isSearching = true; // Estás realizando una búsqueda
    } else {
      // Mostrar archivos de la carpeta actual si no hay búsqueda
      this.filteredFiles = this.listFiles;
      this.isSearching = false; // No estás realizando una búsqueda
    }
  }
  
}
