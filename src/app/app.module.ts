import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
import { FooterComponent } from './components/footer/footer.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MenuinteresComponent } from './components/menuinteres/menuinteres.component';
import { MenuComponent } from './components/menu/menu.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SigComponent } from './components/sitema-integrado-de-gestion/sig.component';
import { BarramenuComponent } from './components/barramenu/barramenu.component';
import { HomeComponent } from './components/home/home.component';
import { TransparenciComponent } from './components/transparenci/transparenci.component';
import { TransparenciaComponent } from './components/accordiones/transparencia/transparencia.component';
import { AtencionUsuarioComponent } from './components/atencion-usuario/atencion-usuario.component';
import { FacturaWebComponent } from './components/atencion-usuario/factura-web/factura-web.component';
import { ContratacionComponent } from './components/contratacion/contratacion.component';
import { CeibasComponent } from './components/ceibas/ceibas.component';
import { AcorparticipaComponent } from './components/accordiones/acorparticipa/acorparticipa.component';
import { ParticipaComponent } from './components/participa/participa.component';
import { Ceiba1Component } from './components/accordiones/ceiba1/ceiba1.component';
import { Ceiba2Component } from './components/accordiones/ceiba2/ceiba2.component';
import { EstructuraOrganicaComponent } from './components/estructura-organica/estructura-organica.component';
import { DirectorioInstitucionalComponent } from './components/directorio-institucional/directorio-institucional.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';



// Inicio Servicios
import { CargarScriptsService} from "./cargar-scripts.service";
// fin servicios


import { EntidadesComponent } from './components/entidades/entidades.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EntesAutoridadesComponent } from './components/entes-autoridades/entes-autoridades.component';
import { EjecucionPresupuestalComponent } from './components/ejecucion-presupuestal/ejecucion-presupuestal.component';
import { PresupuestoAnualComponent } from './components/presupuesto-anual/presupuesto-anual.component';
import { EstadoFinancierosComponent } from './components/estado-financieros/estado-financieros.component';
import { PlanAccionComponent } from './components/plan-accion/plan-accion.component';
import { InformeGestionComponent } from './components/informe-gestion/informe-gestion.component';
import { RendicionCuentasComponent } from './components/rendicion-cuentas/rendicion-cuentas.component';
import { InformesControlInternoComponent } from './components/informes-control-interno/informes-control-interno.component';
import { ControlInternoComponent } from './components/accordiones/control-interno/control-interno.component';
import { PlanAnticorrupcionAtencionCiudadanoComponent } from './components/plan-anticorrupcion-atencion-ciudadano/plan-anticorrupcion-atencion-ciudadano.component';
import { NinosComponent } from './components/ninos/ninos.component';
import { HistoriaLogoComponent } from './components/historia-logo/historia-logo.component';
import { ObjetivosCalidadComponent } from './components/objetivos-calidad/objetivos-calidad.component';
import { PoliticasComponent } from './components/politicas/politicas.component';

import { ObjetoSocialComponent } from './components/objeto-social/objeto-social.component';
import { DirectorioDependenciasComponent } from './components/directorio-dependencias/directorio-dependencias.component';
import { PoliticaCalidadComponent } from './components/politica-calidad/politica-calidad.component';
import { ObjetivosInstitucionalesComponent } from './components/objetivos-institucionales/objetivos-institucionales.component';
import { PlantaPersonalComponent } from './components/planta-personal/planta-personal.component';
import { ValoresComponent } from './components/valores/valores.component';
import { ContacCenterComponent } from './components/contac-center/contac-center.component';
import { ReinstalacionServicioComponent } from './components/reinstalacion-servicio/reinstalacion-servicio.component';
import { AcuerdoPagoComponent } from './components/acuerdo-pago/acuerdo-pago.component';
import { CondicionesUsoInformacionComponent } from './components/condiciones-uso-informacion/condiciones-uso-informacion.component';
import { SectorizacionMacromedicionComponent } from './components/sectorizacion-macromedicion/sectorizacion-macromedicion.component';
import { BocatomaComponent } from './components/bocatoma/bocatoma.component';
import { RedesAcueductoComponent } from './components/redes-acueducto/redes-acueducto.component';
import { FuentesAbasteciminetoComponent } from './components/fuentes-abastecimineto/fuentes-abastecimineto.component';
import { ReservorioComponent } from './components/reservorio/reservorio.component';
import { MicromedicionComponent } from './components/micromedicion/micromedicion.component';
import { PlantaTratamientoAguaPotableComponent } from './components/planta-tratamiento-agua-potable/planta-tratamiento-agua-potable.component';
import { HeaderComponent } from './components/header/header.component';
import { PlantaTratamientoAguaResidualesComponent } from './components/planta-tratamiento-agua-residuales/planta-tratamiento-agua-residuales.component';
import { InformacionHistoricaEjecucionPresupuestalComponent } from './components/informacion-historica-ejecucion-presupuestal/informacion-historica-ejecucion-presupuestal.component';
import { InformesRendicionCuentasComponent } from './components/informes-rendicion-cuentas/informes-rendicion-cuentas.component';
import { ActasComfisComponent } from './components/actas-comfis/actas-comfis.component';
import { AguaNoContabilizadaComponent } from './components/agua-no-contabilizada/agua-no-contabilizada.component';
import { InformeAtencionCiudadanoComponent } from './components/informe-atencion-ciudadano/informe-atencion-ciudadano.component';
import { CarteraComponent } from './components/cartera/cartera.component';
import { ResolucionComponent } from './components/resolucion/resolucion.component';
import { DecretoComponent } from './components/decreto/decreto.component';
import { AcuerdosJuntaComponent } from './components/acuerdos-junta/acuerdos-junta.component';
import { RegistroProveedoresComponent } from './components/registro-proveedores/registro-proveedores.component';
import { LicitacionesPublicasComponent } from './components/licitaciones-publicas/licitaciones-publicas.component';
import { MipgComponent } from './components/mipg/mipg.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { BlogComponent } from './components/blog/blog.component';
import { DenuncieActosCorrupcionFuncionariosComponent } from './components/denuncie-actos-corrupcion-funcionarios/denuncie-actos-corrupcion-funcionarios.component';
import { SalaPrensaComponent, TruncatePipe } from './components/sala-prensa/sala-prensa.component';
import { ChatComponent } from './components/chat/chat.component';
import { CargarScriptsComponent } from './components/cargar-scripts/cargar-scripts.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleTranslateButtonComponent } from './components/google-translate-button/google-translate-button.component';
import { InformesPqrComponent } from './components/accordiones/informes-pqr/informes-pqr.component';
import { InformesTrimestralesPqrComponent } from './components/informes-trimestrales-pqr/informes-trimestrales-pqr.component';
import { EncuestaPercepcionComponent } from './components/accordiones/encuesta-percepcion/encuesta-percepcion.component';
import { InformesEncuestasPercepcionComponent } from './components/informes-encuestas-percepcion/informes-encuestas-percepcion.component';
import { AcordionMipgComponent } from './components/accordiones/acordion-mipg/acordion-mipg.component';
import { NotComponent } from './components/not/not.component';
import { FormsModule } from '@angular/forms';
import { FormularioProveedoresComponent } from './components/formulario-proveedores/formulario-proveedores.component';
import { PidaCitaComponent } from './components/pida-cita/pida-cita.component';
import { PoliticasInstitucionalesComponent } from './components/politicas-institucionales/politicas-institucionales.component';
import { PqrsComponent } from './components/pqrs/pqrs.component';
import { ContadorDeVisitasComponent } from './components/contador-de-visitas/contador-de-visitas.component';
import { InformeComisionEmpalmeComponent } from './components/transparenci/informe-comision-empalme/informe-comision-empalme.component';
import { AcuerdosContratacionComponent } from './components/contratacion/acuerdos-contratacion/acuerdos-contratacion.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuinteresComponent,
    MenuComponent,
    SigComponent,
    BarramenuComponent,
    HomeComponent,
    TransparenciComponent,
    TransparenciaComponent,
    AtencionUsuarioComponent,
    ContratacionComponent,
    CeibasComponent,
    AcorparticipaComponent,
    ParticipaComponent,
    Ceiba1Component,
    Ceiba2Component,
    TruncatePipe,

    EstructuraOrganicaComponent,
     DirectorioInstitucionalComponent,

     EntidadesComponent,
      CalendarioComponent,
      EntesAutoridadesComponent,
      EjecucionPresupuestalComponent,
      PresupuestoAnualComponent,
      EstadoFinancierosComponent,
      PlanAccionComponent,
      InformeGestionComponent,
      RendicionCuentasComponent,
      InformesControlInternoComponent,
      ControlInternoComponent,
      PlanAnticorrupcionAtencionCiudadanoComponent,
      NinosComponent,
      HistoriaLogoComponent,
      ObjetivosCalidadComponent,
      PoliticasComponent,

      ObjetoSocialComponent,
      DirectorioDependenciasComponent,
      PoliticaCalidadComponent,
      ObjetivosInstitucionalesComponent,
      PlantaPersonalComponent,
      ValoresComponent,
      ContacCenterComponent,
      ReinstalacionServicioComponent,
      AcuerdoPagoComponent,
      CondicionesUsoInformacionComponent,
      SectorizacionMacromedicionComponent,
      BocatomaComponent,
      RedesAcueductoComponent,
      FuentesAbasteciminetoComponent,
      ReservorioComponent,
      MicromedicionComponent,
      PlantaTratamientoAguaPotableComponent,
      HeaderComponent,
      PlantaTratamientoAguaResidualesComponent,
      InformacionHistoricaEjecucionPresupuestalComponent,
      InformesRendicionCuentasComponent,
      ActasComfisComponent,
      AguaNoContabilizadaComponent,
      InformeAtencionCiudadanoComponent,
      CarteraComponent,
      ResolucionComponent,
      DecretoComponent,
      AcuerdosJuntaComponent,
      RegistroProveedoresComponent,
      LicitacionesPublicasComponent,
      MipgComponent,
      ContactenosComponent,
      BlogComponent,
      DenuncieActosCorrupcionFuncionariosComponent,
      SalaPrensaComponent,
      ChatComponent,
      CargarScriptsComponent,
      GoogleTranslateButtonComponent,
      InformesPqrComponent,
      InformesTrimestralesPqrComponent,
      EncuestaPercepcionComponent,
      InformesEncuestasPercepcionComponent,
      AcordionMipgComponent,
      NotComponent,
      FormularioProveedoresComponent,
      PidaCitaComponent,
      PoliticasInstitucionalesComponent,
      PqrsComponent,
      ContadorDeVisitasComponent,
      InformeComisionEmpalmeComponent,
      FacturaWebComponent,
      AcuerdosContratacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileManagerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    FormsModule,
    MatPaginatorModule,
    TreeViewModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    CarouselModule,
    NgxExtendedPdfViewerModule,
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
