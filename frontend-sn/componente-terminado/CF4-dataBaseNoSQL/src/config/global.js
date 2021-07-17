export default {
  global: {
    componenteFormativo: 'Bases de datos NoSQL',
    descripcionCurso:
      'En este componente se abordarán elementos claves del Big Data, administración masiva de datos, consulta de datos de las organizaciones y tipos de respuesta más cortos. El aprendiz conocerá cómo se plantean nuevas técnicas y tecnologías para atender esas nuevas necesidades: las Bases de datos NoSQL, orientadas a resolver problemas de escalabilidad y rendimiento, mediante nuevos entornos de manejo de datos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
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
        titulo: 'Introducción a NoSQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de NoSQL',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Cómo diferenciar NoSQL de SQL',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de bases de datos NoSQL',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sistemas de Gestión de Bases de Datos (SGBD) NoSQL',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'NoSQL con MongoDB',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos básicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Instalación de MongoDB',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Consola interactiva',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Crear primer documento',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manipulación de datos con MongoDB',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Crear documentos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Leer y consultar colecciones',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Actualizar documentos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Borrar documentos.',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      /* {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      }, */
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
        'Altarade, M. (2017, 20 abril). Bases de datos NoSQL : Guía definitiva. Pandorafms.',
      link: 'https://pandorafms.com/blog/es/bases-de-datos-nosql',
    },
    {
      referencia: 'Graterol, Y. (2014). Mongo DB en español. GITHUB.',
      link: 'https://github.com/yograterol/ebook-mongodb-basico',
    },
    {
      referencia:
        'Junta de Andalucía. (s. f.). Conceptos sobre la escalabilidad. Marco de Desarrollo de la Junta de Andalucía.',
      link:
        'http://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/220',
    },
    {
      referencia:
        'Macarrón, P. (2021, 8 marzo). Tipos de bases de datos no relacionales. Consultoría Certia.',
      link: 'https://www.certia.net/tipos-de-bases-de-datos-no-relacionales/',
    },
    {
      referencia:
        'Microsoft. (2021, 19 mayo). Descripción de normalización de la base de datos. Microsoft Docs',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'RAE. (s. f.). base | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario.',
      link: 'https://dle.rae.es/base#CiiosqO',
    },
    {
      referencia:
        'Resnick, M. (2008, 12 noviembre). Sembrando las semillas para una sociedad más creativa. Eduteka. ',
      link: 'http://eduteka.icesi.edu.co/articulos/ScratchResnickCreatividad',
    },
    {
      referencia:
        'Sudarshan, H. (2002). Fundamentos de bases de datos. McGraw-Hill.',
      link: '',
    },
    {
      referencia: 'Wikipedia. (2021, 10 junio). Extensible Markup Language.',
      link:
        'https://es.wikipedia.org/w/index.php?title=Extensible_Markup_Language&oldid=136233446',
    },
    {
      referencia: 'Wikipedia. (2021a, enero 17). NoSQL.',
      link: 'https://es.wikipedia.org/w/index.php?title=NoSQL&oldid=132486305',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'Conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Colección',
      significado:
        'Es un compendio de documentos que comparten una relación de estructura similar, no necesariamente igual para todos los objetos.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Documento',
      significado:
        'En bases de datos no relacionales, un documento es un objeto en formato JSON que es almacenado en binario en el motor NoSQL (BSON).',
    },
    {
      termino: 'Escalabilidad ',
      significado:
        'Es la capacidad que tiene un sistema de ser configurado en software o hardware, para mejorar la respuesta a las exigencias o nuevas demandas de capacidad de procesamiento o almacenamiento (conservando las mismas funcionalidades).',
    },
    {
      termino: 'Metadatos',
      significado:
        'Conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos.',
    },
    {
      termino: 'NoSQL',
      significado: 'Base de datos que no usa el estándar SQL.',
    },
  ],
  complementario: [
    {
      texto:
        'Fazt. (2019, 22 agosto). MongoDB Curso, Introducción Práctica a NoSQL [Vídeo]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=lWMemPN9t6Q',
    },
    {
      texto:
        'Ávila, J. (2020, 15 junio). Bases de Datos NoSQL [Vídeo]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=caS51djbuk4',
    },
  ],
  creditos: {
    liderEquipo: {
      nombre: 'Rafael Nelftalí Lizcano Reyes',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
    },
    contenidoInstruccional: [
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Peter Emerson Pinchao Solis',
        cargo: 'Experto temático ',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Evaluador instruccional ',
        centro: 'Regional distrito capital – Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja, Regional Tolima',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Regional Tolima – Centro Agroindustrial La Granja',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
}
