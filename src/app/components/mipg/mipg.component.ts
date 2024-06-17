import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mipg',
  templateUrl: './mipg.component.html',
  styleUrls: ['./mipg.component.css']
})
export class MipgComponent implements OnInit {
  dialogos = [
    {
      id: 'dialogo-1a', 
      tituloSuperior: 'Talento Humano',
      descripcion: `En virtud de la política de gestión estratégica del talento humano GETH Las Ceibas
    Empresas Públicas de Neiva E.S.P define las líneas de acción que orientan los
    proyectos y prácticas de la Gestión del Talento Humano desde el fortalecimiento
    del ciclo de vida del servidor público, referente al ingreso, desarrollo y retiro, para
    apalancar el cumplimiento de los objetivos misionales y los fines esenciales de la
    Entidad. Así, la entidad cuenta con un talento humano integral, idóneo,
    comprometido y transparente, que construye su propio desarrollo personal y
    laboral; y de la misma manera contribuye a cumplir con la misión institucional y los
    fines del Estado.
    En coherencia con estos postulados, y en cumplimiento del fin principal de la
    Gestión Estratégica del Talento Humano GETH, los resultados están impulsados
    por el programa Institucional de Bienestar e Incentivos, que contribuyen a mejorar
    el bienestar de los ciudadanos, dentro del marco de los valores del servicio público
    como la honestidad, respeto, compromiso, justicia y diligencia (Manual Operativo
    MIPG, 2021).`, 
    },
    {
      id: 'dialogo-1b',
      tituloSuperior: 'Integridad',
      descripcion: `Las Ceibas Empresas Públicas de Neiva E.S.P., con fundamento en el Decreto
    1499 de 2017 considera a la integridad como el motor de la implementación del
    MIPG, por lo que la entidad planifica y define los lineamientos y estrategias
    necesarias a partir de ese punto. Así, la interacción entre estos genera operaciones
    de integridad que reflejan las entidades transparentes, eficientes, abiertas y que
    rinden cuentas; unos servidores públicos comprometidos y probos; y unos
    ciudadanos participativos y corresponsables (Función Pública 2021). `, 
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-2a',
      tituloSuperior: 'Planeación Institucional',
      descripcion: `La Planeación Institucional de Las Ceibas Empresas Públicas de Neiva E.S.P,
      está orientada en la obtención de resultados y satisfacción a las necesidades de
      los grupos de interés, fomentando una cultura de la planeación mediante la
      elaboración, seguimiento y gestión de planes, programas y proyectos
      institucionales de participación ciudadana, permitiendo que se realice apoyo y
      entrega de información vital para la correcta toma de decisiones estratégicas, así
      como el contenido de la misión y la visión institucional, En donde se incorporen las
      acciones a desarrollar para las demás dimensiones del Modelo Integrado de
      Planeación - MIPG.`,
    },
    {
      id: 'dialogo-2b',
      tituloSuperior: 'Gestión Presupuestal y Eficiencia de Gasto Público',
      descripcion: `.......`,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-3a',
      tituloSuperior: 'Participación Ciudadana en la Gestión Pública',
      descripcion: `Las Ceibas Empresas Públicas de Neiva ESP promueve el control social y la
      participación ciudadana mediante la implementación de La “política de participación
      ciudadana” a través de mecanismos de gestión, diversos canales de comunicación
      para garantizar la satisfacción de las necesidades de los grupos de interés y calidad
      de la prestación de servicios públicos de las Ceibas.`,
    },
    {
      id: 'dialogo-3b',
      tituloSuperior: 'Compras y Contratación Pública',
      descripcion: `El propósito de esta política es permitir que Las Ceibas E.P.N. E.S.P gestione
      adecuadamente sus compras y contrataciones públicas a través de plataformas
      electrónicas, lineamientos normativos, documentos estándar, instrumentos de
      agregación de demanda y técnicas de aprovisionamiento estratégico que, como
      proceso continuo, estructurado y sistemático de generación de valor, le permita
      mejorar constantemente los niveles de calidad, servicio y satisfacción de las
      necesidades en sus procesos de adquisición.
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-4a',
      tituloSuperior: 'Gobierno Digital, antes Gobierno en Línea',
      descripcion: `La Política de Gobierno Digital es el instrumento mediante el cual Las Ceibas
      E.P.N. E.S.P. reconoce, fomenta y aplica el uso de las Tecnologías de la
      Información y las Comunicaciones - TIC, como herramienta fundamental para
      mejorar la gestión de la entidad y su relación con los ciudadanos.
      Las Ceibas Empresas Públicas de Neiva E.S.P. se alinea a la Política de
      Gobierno Digital enmarcada en el decreto 1008 del 14 de junio de 2018, donde
      muestra unos ejes temáticos de apoyo en la construcción de la política.
      `,
    },
    {
      id: 'dialogo-4b',
      tituloSuperior: 'Seguridad Digital',
      descripcion: `Esta política representa la posición general de Las Ceibas Empresas Públicas de
      Neiva E.S.P., con respecto a la seguridad de la información en base a la protección
      de los activos de información (los funcionarios, la información, los procesos, las
      tecnologías de información incluido el hardware y el software), la implementación
      del Sistema de Gestión de Seguridad de la Información y al apoyo, generación y
      publicación de sus políticas, procedimientos e instructivos, con objeto de mantener
      un marco de referencia que permita responder por la integridad, confidencialidad y
      la disponibilidad de la información acorde con las necesidades de la entidad, sus
      funcionarios, terceros, aprendices, practicantes, proveedores y la ciudadanía en
      general.
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-5a',
      tituloSuperior: 'Servicio al Ciudadano',
      descripcion: `Asegurar la atención a los ciudadanos por parte de Las Ceibas Empresas Públicas
      de Neiva E.S.P. basados en oportunidad, eficiencia, eficacia, transparencia e
      imparcialidad.
      `,
    },
    {
      id: 'dialogo-5b',
      tituloSuperior: 'Racionalización de trámites',
      descripcion: `Las Ceibas Empresas Públicas de Neiva, es una institución pública que presta
      servicios de acueducto y alcantarillado a toda la comunidad, con quienes nos
      comprometemos a implementar una estrategia que facilite la relación del usuario e
      institución, identificando los posibles riesgos en las áreas misionales,
      administrativas y de apoyo, con el fin de fortalecer la transparencia en el actuar
      institucional, aplicando las políticas de buen gobierno y la función pública como
      lo indica la normatividad que nos rige, contribuyendo a la respuesta oportuna
      de la solicitudes de los usuarios de forma eficaz y eficiente, brindando
      información de forma transparente y oportuna.
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-6a',
      tituloSuperior: 'Defensa Jurídica',
      descripcion: `Manual para la defensa jurídica y prevención del daño antijurídico de la entidad,
      con el objetivo de que las políticas que aquí se implementen, se tengan en cuenta
      en desarrollo de las actividades de E.P.N. E.S.P., con el fin de disminuir el riesgo
      antijurídico.
      Además, se pretende, garantizar que los procesos judiciales en los que sea parte
      la Empresa, sean atendidos de manera ágil, cuidadosa de términos y en beneficio
      de los intereses de la entidad.
      Integra aspectos relevantes, esboza aspectos de naturaleza preventiva, para evitar
      la ocurrencia o disminuir los efectos dañinos del debate extrajudicial o judicial.
      `,
    },
    {
      id: 'dialogo-6b',
      tituloSuperior: 'Mejora Normativa',
      descripcion: `...
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-7a',
      tituloSuperior: 'Fortalecimiento Organizacional y Simplificación de Procesos.',
      descripcion: `La política de Fortalecimiento Organizacional Y Simplificación De Proceso 
      hace parte de la tercera dimensión: Gestión con valores para resultados del sistema integral 
      de planeación y gestión MIPG, por lo tanto, Las Ceibas Empresas Públicas de Neiva E.S.P. 
      está comprometida con el cumplimiento de los lineamientos impartidos por esta.  
      Asociada a los aspectos relevantes para la adecuada operación de la 
      organización, la presente política tiene como propósito principal mejorar 
      la eficacia y efectividad de la entidad a través de la coordinación entre una planeación y 
      estrategia institucional con un modelo de operación por procesos, la estructura y el talento humano 
      y así contribuir en la prestación de servicio de mayor valor para el público, aumentando la productividad estatal.
      `,
    },
    {
      id: 'dialogo-7b',
      tituloSuperior: 'Seguimiento y Evaluación del Desempeño Institucional',
      descripcion: `Las Ceibas Empresas Públicas De Neiva ESP, estipula los lineamientos para el
      seguimiento a la gestión institucional y la evaluación de resultados de las metas
      establecidas dentro del plan de desarrollo Agua Territorio de Vida 2020 - 2023.
      Con la finalidad obtener óptimos resultados el proceso de planeación estratégica y
      análisis financieros, implementará anualmente un plan de acción institucional, que
      garantizará el cumplimiento de los objetivos.
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-8a',
      tituloSuperior: 'Gestión Documental',
      descripcion: `Las Ceibas Empresas Públicas de Neiva está comprometida con las políticas de
      gestión documental, la transparencia y acceso a la información, conforme lo
      establece el Sistema de Gestión-Modelo Integrado de Planeación y Gestión-MIPG,
      dimensión “Información y Comunicación” propiciando la mejora continua en sus
      procesos y servicios, para lo cual la Empresa se compromete a garantizar
      información integra, autentica, confiable y veraz en medios físicos y electrónicos,
      implementando los programas e instrumentos archivísticos necesario, garantizando
      el fácil acceso a la información a los diferentes grupos de interés internos, externos
      y la comunidad en general.
      Las Ceibas a través de su Plan Institucional de Archivos PINAR y del Programa de
      Gestión Documental PGD, desarrollará las metodologías necesarias para asegurar
      la conservación y preservación de los documentos producidos en ejercicio de las
      funciones de la Entidad, garantizando el ciclo vital de los documentos en las
      diferentes etapas del proceso archivístico, como son: planeación, producción,
      recepción, distribución, trámite, organización, consulta y disposición final, así
      mismo garantizando la integridad, disponibilidad y confidencialidad de la
      información.
      `,
    },
    {
      id: 'dialogo-8b',
      tituloSuperior: 'Transparencia Acceso a la Información Pública y Lucha Contra la Corrupción',
      descripcion: `Las Ceibas Empresas Públicas de Neiva E.S.P, como instrumento preventivo y de
      control para la gestión pública acciones que permitan identificar, mitigar y evitar
      materialización de riesgos que afecten directa o indirectamente la gestión
      institucional.
      Esta política está fundamentada en los principios del derecho al acceso de la
      información pública para los ciudadanos la cual estableció lineamientos para
      ejecutar las estrategias de implementación y fortalecimiento de la transparencia y
      lucha contra la corrupción, fomentado en los servidores públicos y la comunidad,
      los valores de integridad de la función pública.
      
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-9a',
      tituloSuperior: 'Gestión del Conocimiento y la Innovación',
      descripcion: `Las Ceibas Empresas Públicas de Neiva E.S.P. direcciona la política de gestión del
      conocimiento y la innovación mediante la adopción de cambios y la evolución del
      entorno a través del conocimiento, la aplicación de políticas públicas, instrumentos
      técnicos y jurídicos, asesorías y capacitaciones.
      Teniendo en cuenta que el conocimiento en la entidad se presenta de distintas
      formas, se diseñaron los lineamientos para la implementación de la política a través
      de “Cuatro Ejes” que sirven como instrumento para el aprovechamiento de los
      recursos y experiencias de sus funcionarios, siendo este el capital intelectual de
      Las Ceibas.
      Con el objetivo de fortalecer la misión institucional se documentará el conocimiento
      intelectual y este ingresará al Sistema de Gestión Integral, para mejorarlo y
      ponerlo a la vanguardia en tecnología, políticas públicas y demás.
      `,
    },
    {
      id: 'dialogo-9b',
      tituloSuperior: 'Gestión de la Información Estadística',
      descripcion: `...
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

    {
      id: 'dialogo-10',
      tituloSuperior: 'Control Interno',
      descripcion: `Las Ceibas Empresas Públicas de Neiva E.S.P está comprometida en garantizar y
      mantener su sistema de control interno de gestión, haciendo énfasis en la cultura
      mediante principios y valores adoptados por el código de integridad promoviendo
      el autocontrol, autogestión y seguimiento de riesgos para su mitigación,
      contribuyendo al adecuado control y evaluación para la toma de decisiones y
      mejora continua.
      `,
    },

    // ... agrega más objetos para cada rombo que necesites

  ];

  constructor(private titulo: Title, private cargarScripts: CargarScriptsService) {
    titulo.setTitle('MIPG | Las Ceibas E.S.P');
  }

  ngOnInit(): void {
    this.cargarScripts.Carga(["animacionmenu"]);
  }

  abrirDialogo(id: string) {
    const dialogo = this.dialogos.find(dialogo => dialogo.id === id);
    if (dialogo) {
      Swal.fire({
        html: `
        <div class="mi-dialogo-personalizado" style="width: 97%; background-color: rgba(4, 88, 108); padding: 8px;">
          <h1 class="titulo" style="color: #fff; font-weight: bold;">${dialogo.tituloSuperior}</h1>
          <div class="descripcion" style="color: #fff; font-size: 16px; padding: 8px; ">${dialogo.descripcion}</div>
        </div>
      `,
        showCloseButton: true,
        showConfirmButton: false,
      });
    }
  }
}

