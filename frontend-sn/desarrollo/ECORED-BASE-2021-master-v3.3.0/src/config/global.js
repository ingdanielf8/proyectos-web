export default {
  global: {
    componenteFormativo: 'Conceptos generales de bases de datos',
    descripcionCurso:
      'En la sociedad de la información es imprescindible el empleo de tecnología, técnicas y procedimientos que, a lo largo de las últimas décadas, han consolidado un marco conceptual importante y necesario en todo proceso de administración de datos, por eso, este componente acerca estos conceptos de manera estructurada para avanzar en los procesos de gestión de la información.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Conceptos generales de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de datos y restricción de no nulidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de bases de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Clasificación de bases de datos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sistema de gestión de bases de datos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Modelo entidad relación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Relaciones entre entidades',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Relaciones de uno a muchos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Relaciones de un uno a muchos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Relaciones de uno a uno',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normalización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Dependencias funcionales',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Diseño relacional',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Reglas de integridad',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'Lenguajes de los sistemas administradores de bases de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sistema gestor de base de datos',
        desarrolloContenidos: true,
        subMenu: [],
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
      referencia: 'Asale y RAE. (2021). Diccionario de la lengua española. ',
      link: 'https://dle.rae.es/base#CiiosqO ',
    },
    {
      referencia:
        'Kyocera. (2021). Conceptos sobre base de datos orientada a objetos. Kyocera.',
      link: 'https://rb.gy/5deqdh ',
    },
    {
      referencia:
        'López, J. C. (2009). Algoritmos y programación (guía para docentes). Eduteka  ',
      link: 'http://eduteka.icesi.edu.co/articulos/GuiaAlgoritmos ',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., Sudarshan, S., Pérez, F. S., Santiago, A. I., y Sánchez, A. V. (2006). Fundamentos de bases de datos. McGrawHill',
      link:
        'http://ceneval.isi.uson.mx/CENEVAL/4Implantacion%20de%20infraestructura/Fundamentos%20de%20base%20de%20datos.pdf',
    },
    {
      referencia:
        'Resnick, M. (2007). Sembrando las semillas para una sociedad más creativa. Laboratorio de medios de MIT, Massachussets. Eduteka.',
      link: 'http://www.eduteka.org/ScratchResnickCreatividad.php',
    },
    {
      referencia:
        'Microsoft. (2021). Descripción de normalización de base de datos. Microsoft.',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description ',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'Conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
  ],
  complementario: [
    {
      texto:
        'Espinosa, A. P. (16 de noviembre de 2014). L6 1 Nociones y modelos de bases de datos. [Video] YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=pPATLxijDfw',
    },
    {
      texto:
        'Silberschatz, A., Korth, H. F., Sudarshan, S., Pérez, F. S., Santiago, A. I., y Sánchez, A. V. (2006). Fundamentos de bases de datos. McGrawHill.',
      tipo: 'PDF',
      link:
        'http://ceneval.isi.uson.mx/CENEVAL/4Implantacion%20de%20infraestructura/Fundamentos%20de%20base%20de%20datos.pdf ',
    },
  ],
  creditos: {
    liderEquipo: {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico ',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    contenidoInstruccional: [
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto Temático',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto Temático',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Centro Gestión Industrial.',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital.',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
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
