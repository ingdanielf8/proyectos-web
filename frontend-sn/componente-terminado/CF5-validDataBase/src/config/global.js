export default {
  global: {
    componenteFormativo: 'Pruebas de validación de bases de datos ',
    descripcionCurso:
      'Las pruebas al modelo de base de datos diseñada y construida son fundamentales para la validación de la integridad de los datos, este tipo de pruebas nos permitirá validar todas las restricciones de integridad.',
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
        titulo: 'Tipos de pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pruebas de acceso: sentencias DCL',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Crear un usuario en MySQL ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Permisos de acceso',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Pruebas de acceso',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Testing de la API REST con Postman',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [],
  },
  referencias: [
    {
      referencia:
        'Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.',
      link: ' ',
    },
    {
      referencia:
        'Globe Testing. (2021). Pruebas de integridad de base de datos.',
      link:
        'https://www.globetesting.com/pruebas-de-integridad-de-base-de-datos',
    },
    {
      referencia:
        'Widenius, M., Axmark, D., y Arno, K. (2002). MySQL reference manual: documentation from the source.  OReilly Media, Inc.',
      link:
        'https://www.oreilly.com/library/view/mysql-reference-manual/0596002653/ ',
    },
  ],
  glosario: [
    {
      termino: 'Datos',
      significado:
        'Son la mínima unidad semántica, y se corresponden con elementos primarios de información que por sí solos son irrelevantes como apoyo a la toma de decisiones',
    },
    {
      termino: 'Información',
      significado:
        'Conjunto de datos procesados que tienen un significado (relevancia, propósito y contexto) y que, por lo tanto, son de utilidad para quien debe tomar decisiones.',
    },
    {
      termino: 'Tabla – entidad',
      significado:
        'La entidad es cualquier clase de objeto o conjunto de elementos presentes o no, en un contexto determinado dado por el sistema de información',
    },
    {
      termino: 'Relación',
      significado:
        'Vínculo que permite definir una dependencia entre los conjuntos de dos o más entidades.',
    },
    {
      termino: 'Registro',
      significado:
        'Guardan una serie de características similares o que pueden ser agrupados o clasificados dadas sus características comunes en grupos bien delimitados',
    },
  ],
  complementario: [
    {
      texto:
        'Red de Producción de Contenidos Grupo Gestión Curricular SENA. (22 de mayo de 2021). Pruebas de integridad de datos. [Video]. YouTube. ',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=SLPqBj9XjWc',
    },
    {
      texto:
        'PHPUnit latest Manual. (29 de enero de 2021). Probar bases de datos. ',
      tipo: 'Web',
      link: 'https://phpunit.readthedocs.io/es/latest/database.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca - Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Peter Emerson Pinchao Solis',
        cargo: 'Experto temático',
        centro:
          'Regional Cauca - Centro de teleinformática y producción industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Oscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro: 'Regional distrito capital – Centro de Gestión Industrial',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
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
