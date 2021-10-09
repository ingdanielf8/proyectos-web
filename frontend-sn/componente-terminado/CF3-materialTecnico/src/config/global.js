export default {
  global: {
    componenteFormativo:
      'Contexto, cronograma y diseño de estrategias de ciberseguridad',
    descripcionCurso:
      'Mediante el desarrollo del presente componente el aprendiz estará en capacidad de comprender cómo realizar la implementación de una estrategia de seguridad a partir de procesos de planificación, que le permita establecer las etapas y controles de seguridad y mejorar los niveles de seguridad de la organización.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Determinar el contexto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Algunos conceptos y estándar orientador',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Objetivos de control y su estructura',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Dominios de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Objetivos de control para la seguridad de la información',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Objetivos de control para el factor humano',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Objetivos de control para la gestión de activos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Controles de accesos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Controles criptográficos',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Controles y objetivos para el aseguramiento físico',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Alcance de los controles de seguridad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'La planificación y los objetivos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Características de validación',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Instituto Internacional de Estudios en Seguridad Global (2020). Factor humano y ciberseguridad, un riesgo en crecimiento. INISEG.',
      link:
        'https://www.iniseg.es/blog/ciberseguridad/factor-humano-y-ciberseguridad/',
    },
    {
      referencia:
        'Instituto Nacional de Tecnologías de la Comunicación (2009). Implantación de un SGSI en la empresa.',
      link:
        'https://www.incibe.es/extfrontinteco/img/File/intecocert/sgsi/img/Guia_apoyo_SGSI.pdf',
    },
    {
      referencia: 'ISO (2021). Dominios de seguridad y controles. (ISO 27000).',
      link: 'https://www.iso27000.es/iso27002.html',
    },
    {
      referencia: 'ISO (2021). Planificación en ISO. (ISO 27001).',
      link: 'https://normaiso27001.es/planificacion-en-iso-27001/',
    },
    {
      referencia:
        'Organización Internacional de Normalización (ISO 2021). FASE 6 Implementando un SGSI. (ISO 27001).',
      link: 'https://normaiso27001.es/fase-6-implementando-un-sgsi/',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'Es cualquier debilidad presente y que puede ser aprovechada para afectar un sistema de información.',
    },
    {
      termino: 'Confidencialidad',
      significado:
        'Principio con el cual, la información solo es accedida por la persona o sistema autorizado para su acceso.',
    },
    {
      termino: 'Control',
      significado:
        'Son acciones que se deben implementar bajo un proceso o procedimiento, para garantizar los objetivos de seguridad de la organización.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'Principio que supone que un activo de información se mantenga disponible sin sufrir ninguna degradación o alteración.',
    },
    {
      termino: 'Integridad',
      significado:
        'Principio que sugiere que la información se mantenga intacta y sin alteraciones posterior a sufrir un incidente.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Probabilidad que suceda un incidente aprovechándose de una amenaza existente afectando los principios de la seguridad de la información.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Falencia en un sistema que puede ser aprovechada para generar un incidente de seguridad.',
    },
  ],
  complementario: [
    {
      texto:
        'ISO / IEC JTC 1 / SC 27 Seguridad de la información, ciberseguridad y protección de la privacidad. (2013). ISO / IEC 27001: 2013.',
      tipo: 'Otro: Norma técnica',
      link: 'https://www.iso.org/standard/54534.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto Temático',
        centro: 'Cauca - Centro de Teleinformática y Producción Industrial ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Tolima - Centro agropecuario La Granja',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura ',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
