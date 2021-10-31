export default {
  global: {
    componenteFormativo: 'Inglés básico para servicio de recepción',
    descripcionCurso:
      'El idioma inglés básico es fundamental en el desempeño de la labor como recepcionista. Por tanto, es importante que desarrolle habilidades comunicativas en idioma inglés que le permitan manejarlo como segunda lengua y, de esta forma, garantizar una comunicación fluida con huéspedes extranjeros.',
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
        titulo: 'Simple Present',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lodging',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Category',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Class',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Types',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Characteristics',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Geographical locations',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Hotel areas and facilities',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Organizational structure',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Positions, Duties, Responsibilities, Profiles',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Jobs and professions in the tourism sector',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Demonstratives',
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
      referencia:
        'Davis, T. (2021). 5 Main Regions of Colombia: A Guide To Planning Your Trip. Kimkim.',
      link:
        'https://www.kimkim.com/c/highlights-of-colombia-the-best-of-each-region',
    },
    {
      referencia:
        'Reppen, R. (2012). Grammar and Beyond. Cambridge University Press.',
      link: '',
    },
    {
      referencia:
        'Strutt, P. (2003). English for International Tourism. Pearson Education ESL.',
      link: '',
    },
    {
      referencia:
        'Thering, R. (2019). Vocabulario hotelero en inglés: 100 palabras que debes conocer. FluentU Inglés.',
      link:
        'https://www.fluentu.com/blog/english-esp/vocabulario-hotelero-en-ingles-2/',
    },
    {
      referencia:
        'Woodward Education. (2021). This That These Those - Demonstrative Pronouns Demonstrative Adjectives. Woodward English.',
      link: 'https://www.grammar.cl/Notes/This_That_These_Those.htm',
    },
  ],
  glosario: [
    {
      termino: 'ADR',
      significado:
        'ADR es el acrónimo de Average Daily Rate, y hace referencia a la tarifa diaria promedio del hotel. Es decir, ingresos por habitación / número de habitaciones vendidas.',
    },
    {
      termino: 'Categoría',
      significado:
        'Es el resultado de la clasificación de personas o cosas según un criterio o jerarquía.',
    },
    {
      termino: 'Cadena hotelera',
      significado:
        'Una cadena hotelera es una empresa que administra un número de hoteles en diferentes ubicaciones. Esta administración se realiza bajo una marca, que transfiere estándares de operación y administrativos y se hace cargo del marketing y la promoción.',
    },
    {
      termino: 'NTSH006',
      significado:
        'Es la Norma Técnica Sectorial Hotelera que describe los requisitos para clasificar los hoteles por estrellas en Colombia.',
    },
    {
      termino: 'Front Desk',
      significado:
        'En los primeros hoteles y posadas, el registro se realizaba en un escritorio, que en inglés se dice “desk”. Por esta razón, se acuñó el término front desk para denominar el mostrador de la recepción de los hoteles.',
    },
  ],
  complementario: [
    {
      texto: '',
      tipo: '',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Harbey Castelblanco',
        cargo: 'Experto Temático',
        centro: 'Centro Nacional Colombo Alemán',
      },
      {
        nombre: 'Sandra Isabel Suarez Delgado',
        cargo: 'Instructor ',
        centro: 'Centro de servicios y gestión empresarial ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y pedagógica ',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leidy Carolina Arias Aguire',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Tolima – Centro Agropecuario La Granja',
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
