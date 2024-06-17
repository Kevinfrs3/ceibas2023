import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProveedoresService } from './proveedores.service';

@Component({
  selector: 'app-formulario-proveedores',
  templateUrl: './formulario-proveedores.component.html',
  styleUrls: ['./formulario-proveedores.component.css']
})
export class FormularioProveedoresComponent implements OnInit {
  public frm: FormGroup;
  public listTipoProveedor: any[] = [];
  public listPreguntas: any[] = [];
  public archivos: any[] = [];

  constructor(public service: ProveedoresService) {
    this.frm = new FormGroup({});
}

  ngOnInit(): void {
    this.getTipoProveedor()
    this.frm = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      nombre_comercial: new FormControl(null, Validators.required),
      identificacion: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      representante_legal: new FormControl(null, Validators.required),
      identificacion_representante_legal: new FormControl(null, Validators.required),
      municipio_id: new FormControl(null, Validators.required),
      tipo_documento_id: new FormControl(null, Validators.required),
      tipo_proveedor_id: new FormControl(null, Validators.required),
      direccion: new FormControl(null, Validators.required),
      telefono: new FormControl(null, Validators.required),
      celular: new FormControl(null),
      clave: new FormControl(null, Validators.required)
    })
  }

  public guardar() {
    const that = this
    if (this.frm.invalid) {
      alert("Debe llenar todos los campos")
      return
    }

    let pass = true;

    this.listPreguntas.forEach(function (item) {
      let itemArray = that.archivos.find(l => l.proveedor_pregunta_id == item.id)
      if (itemArray == undefined || itemArray == null) {
        pass = false
      }
    })

    if (!pass) {
      alert("Debe llenar todos los archivos")
      return
    }


    let formData = {
      "nombre": this.frm.controls['nombre'].value,
      "nombre_comercial": this.frm.controls['nombre_comercial'].value,
      "identificacion": this.frm.controls['identificacion'].value,
      "email": this.frm.controls['email'].value,
      "representante_legal": this.frm.controls['representante_legal'].value,
      "identificacion_representante_legal": this.frm.controls['identificacion_representante_legal'].value,
      "municipio_id": this.frm.controls['municipio_id'].value,
      "tipo_documento_id": this.frm.controls['tipo_documento_id'].value,
      "tipo_proveedor_id": this.frm.controls['tipo_proveedor_id'].value,
      "direccion": this.frm.controls['direccion'].value,
      "telefono": this.frm.controls['telefono'].value,
      "clave": this.frm.controls['clave'].value,
      "estado_proveedor_id": 1
    }
    


    this.service.guardar(formData).subscribe(
      element => {
        this.archivos.forEach(function (item) {
          var formDataDetalle = new FormData()
          formDataDetalle.append("proveedor_id", element.id)
          formDataDetalle.append("proveedor_pregunta_id", item.proveedor_pregunta_id)
          formDataDetalle.append("estado", "A")
          formDataDetalle.append("archivo", "")
          formDataDetalle.append("file", item.archivo)

          that.service.guardarDetalle(formDataDetalle).subscribe(element => { })
        })
        alert("Proveedor registrado con éxito")
      }
    )
  }

  public changeFile(event: any, pregunta_id: any): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
        const file = inputElement.files[0];

      if (this.archivos.length > 0) {
        this.archivos = this.archivos.filter(l => l.proveedor_pregunta_id != pregunta_id)
      }

      this.archivos.push({
        proveedor_pregunta_id: pregunta_id,
        archivo: file
      })
    }
  }

  public getTipoProveedor() {
    this.service.getTipoProveedor().subscribe(
      element => this.listTipoProveedor = element
    )
  }

  public cargarPreguntas(tipo_proveedor_id: any): void {
    this.service.getPreguntas(tipo_proveedor_id).subscribe(
      element => this.listPreguntas = element
    )
  }
}
