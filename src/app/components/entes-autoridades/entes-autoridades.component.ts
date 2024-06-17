import { Component, OnInit } from '@angular/core';

interface Ente {
  nombre: string;
  descripcion: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'app-entes-autoridades',
  templateUrl: './entes-autoridades.component.html',
  styleUrls: ['./entes-autoridades.component.css']
})
export class EntesAutoridadesComponent implements OnInit {
  entes: Ente[] = [
    {
      nombre: 'Concejo Municipal de Neiva',
      descripcion: 'El Concejo municipal es una corporación político – administrativa del orden territorial, institución democrática de carácter colegiado y autoridad fundamental de la administración pública, dado que es el cuerpo deliberante de representación popular, que tienen facultades de administración y control político sobre el gobierno territorial. Hace parte de una sola autoridad, no tienen personalidad jurídica propia, está encargada de ejecutar funciones públicas y cumplen un papel relevante en el desarrollo del municipio, porque el encargado de velar por el bienestar político, económico y social de los Neivanos a quienes representan.',
      logo: 'https://www.alcaldianeiva.gov.co/NuestraAlcaldia/PublishingImages/consejo%20de%20neiva.png',
      url: 'https://www.facebook.com/concejoneiva/'
    },
    {
      nombre: 'Contraloría Municipal de Neiva',
      descripcion: 'Realizar control fiscal al Municipio de Neiva, en el nivel central y descentralizado, entidad de carácter técnico con autonomía administrativa y presupuestal, incluyendo a los particulares que administran recursos públicos del orden Municipal; generando sinergias entre la comunidad y la institucionalidad, procurando el empoderamiento del Control Fiscal por parte de la ciudadanía Neivana. La Contraloría Municipal tiene a su cargo la vigilancia de la gestión fiscal y el control de resultado de la administración, la cual vigila la gestión fiscal de la administración y de los particulares o entidades que manejen fondos o bienes del Municipio. Dicho control se ejercerá en forma posterior y selectiva conforme a los procedimientos, sistemas y principios que establezca la ley. La vigilancia de la gestión fiscal del Estado incluye el ejercicio de un control financiero, de gestión y de resultados, fundado en la eficiencia, la economía, la equidad y la valoración de los costos ambientales. Es el máximo órgano de control fiscal del Estado. Como tal, tiene la misión de procurar el buen uso de los recursos y bienes públicos y contribuir a la modernización del Estado, mediante acciones de mejoramiento continuo en las distintas entidades públicas.',
      logo: '../../../assets/images/logos-entes/contaloria.jpeg',
      url: 'https://www.contralorianeiva.gov.co/'
    },
    {
      nombre: 'Personería Municipal de Neiva',
      descripcion: 'La personería municipal es la entidad encargada de ejercer el control administrativo en el municipio y cuentan con autonomía presupuestal y administrativa. Como tal, ejercerá las funciones del Ministerio Público que les confiere la Constitución Política y la ley, así como las que les delegue la Procuraduría General de la Nación. Las personerías contarán con una planta mínima de personal conformada por el personero y un secretario. Corresponde al personero municipal en cumplimiento de sus funciones de Ministerio Público, la guarda y promoción de los derechos humanos, la protección del interés público y la vigilancia de la conducta de quienes desempeñan funciones públicas.',
      logo: '../../../assets/images/logos-entes/personeria.jpg',
      url: 'https://www.personerianeiva.gov.co/'
    },
    {
      nombre: 'Procuraduría General de la Nación',
      descripcion: 'Órgano de control autónomo que se encarga de investigar, sancionar, intervenir y prevenir las irregularidades cometidas por los gobernantes, los funcionarios públicos, los particulares que ejercen funciones públicas y las agencias del Estado Colombiano.',
      logo: '../../../assets/images/logos-entes/procuraduria.png',
      url: 'https://www.procuraduria.gov.co/portal/'
    },
    {
      nombre: 'Superintendencia de Servicios Públicos Domiciliarios',
      descripcion: 'La Superintendencia de Servicios Públicos Domiciliarios, Superservicios, es una entidad con rango constitucional conforme al artículo 370 de la Constitución Política de 1991. Por delegación presidencial ejerce las funciones de inspección, vigilancia y control sobre las entidades y empresas prestadoras de servicios públicos domiciliarios de acueducto, alcantarillado, aseo, energía y gas. Su creación legal, naturaleza, principios y funciones están señaladas en la Ley 142 de 1994 que establece el régimen de los servicios públicos domiciliarios en Colombia. Cuenta con personería jurídica, autonomía administrativa y patrimonial. Se encuentra adscrita al Departamento Nacional de Planeación.',
      logo: 'assets/images/logos-entes/superservicios.jpeg',
      url: 'https://www.superservicios.gov.co/'
    },
    {
      nombre: 'Departamento Administrativo de la Función Pública',
      descripcion: 'El Decreto 188 del 26 de enero de 2004, en el cual consolida la actual estructura administrativa del Departamento Administrativo de la Función Pública. En esta reforma se destacan los siguientes aspectos: Además de formular y promover las políticas e instrumentos en empleo público, organización administrativa, control Interno, racionalización de trámites, el Departamento deberá evaluar el impacto que las mismas tienen en la Administración Pública. La integralidad del Sistema de Empleo Público, dimensionándolo y articulándolo, como política de Estado, en los siguientes componentes: Planificación del Empleo, Gestión de las Relaciones Humanas y Sociales, Gestión del Desarrollo, Gestión del Empleo, Gestión del Desempeño, Organización del Empleo; Sistemas de Clasificación y Nomenclatura, Administración de Salarios y Prestaciones Sociales; Democratización de la Administración Pública y Sistema de Desarrollo Administrativo. Comunique irregularidades: www.funcionpublica.gov.co.',
      logo: 'https://www.alcaldianeiva.gov.co/NuestraAlcaldia/PublishingImages/logo-funcion.png',
      url: 'https://www.funcionpublica.gov.co/'
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

