export default {
  global: {
    componenteFormativo:
      'Conceptos, tecnologías y arquitectura para el desarrollo web.',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados al funcionamiento de un sistema web soportado bajo la arquitectura de la internet. Seguidamente se revisarán las tecnologías más importantes para el desarrollo web tanto del lado del cliente como del servidor y por último se abordan los conceptos básicos de una arquitectura orientada a servicios.',
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
        titulo: 'La internet y la web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Funcionamiento de la internet',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Arquitectura web',
            hash: 'parrafos',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a las tecnologías para el desarrollo web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'ecnologías del front-end',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tecnologías del back-end',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Introducción a la arquitectura orientada a servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'SOAP',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'REST',
            hash: 't_3_2',
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
      referencia: 'Angular. (2021). Angular.',
      link: 'https://angular.io/ ',
    },
    {
      referencia: 'Facebook - Meld je an of registered je. (2021). Facebook. ',
      link: 'https://www.facebook.com/unsupportedbrowser ',
    },
    {
      referencia:
        'Fisher, S. (2021, 19 mayo). ¿Qué es TCP/IP y cómo funciona? Avast Academy. ',
      link: 'https://www.avast.com/es-es/c-what-is-tcp-ip ',
    },
    {
      referencia:
        'I. (2018a, febrero 11). Conceptos básicos sobre tecnologías de desarrollo web. ingeniovirtual.com',
      link:
        'https://www.ingeniovirtual.com/conceptos-basicos-sobre-tecnologias-de-desarrollo-web/ ',
    },
    {
      referencia:
        'Juncosa, M. (2020, 6 agosto). El modelo TCP/IP capa a capa. aprendederedes.com.',
      link: 'https://aprendederedes.com/redes/introduccion/modelo-tcp-ip/ ',
    },
    {
      referencia:
        'Mistry, J. (2021, 29 mayo). 8 Best Backend Frameworks to Use for web Development 2021. Monocubed.',
      link: 'https://www.monocubed.com/best-backend-frameworks/ ',
    },
    {
      referencia:
        'Moz://a. (2021, 13 mayo). How does the internet work? - Learn web development | MDN. MDN web Docs',
      link:
        'https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_internet_work ',
    },
    {
      referencia:
        'P. (2021, 15 marzo). Front End Development Trends That Will Be with Us in 2021. Medium. ',
      link:
        'https://productcoalition.com/front-end-development-trends-that-will-be-with-us-in-2021-a0ad023922ea ',
    },
    {
      referencia:
        'Ramos, R. (2020, 18 noviembre). ¿Qué es JavaScript y para qué sirve? Agencia de Marketing Digital | Rafa Ramos. ',
      link: 'https://soyrafaramos.com/que-es-javascript-para-que-sirve/ ',
    },
    {
      referencia: 'RedHat. (2021). REST vs. SOAP. ',
      link:
        'https://www.redhat.com/en/topics/integration/whats-the-difference-between-soap-rest ',
    },
    {
      referencia:
        'SOA (arquitectura orientada a servicios). (2021, 7 mayo). IBM. ',
      link: 'https://www.ibm.com/co-es/cloud/learn/soa ',
    },
    {
      referencia:
        'Tanenbaum, A. S., Wetherall, D. J., & Elizondo, A. V. R. (2012). Redes de computadoras. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Third Rock Techkno. (2021, 24 marzo). Top 5 picks for backend development in 2021.',
      link:
        'https://www.thirdrocktechkno.com/blog/top-5-picks-for-backend-development-in-2021/ ',
    },
  ],
  glosario: [
    {
      termino: 'Arquitectura software:',
      significado:
        'Es una metodología que se refiere a la estructuración de un sistema software que, idealmente, se crea en etapas tempranas de la construcción del sistema.',
    },
    {
      termino: 'Página web:',
      significado:
        'Es un documento que se puede mostrar en un navegador web como Firefox, Google Chrome, Microsoft internet Explorer o Edge, o Safary de Apple, ',
    },
    {
      termino: 'Servidor web:',
      significado:
        'Una computadora de grandes especificaciones hardware que aloja un sitio web o plataformas con todos sus recursos en la internet.',
    },
    {
      termino: 'Sitio web:',
      significado:
        'Es una colección o conjunto de páginas web que se agrupan y normalmente se conectan de varias maneras. Por lo regular se le conoce como "sitio web" o simplemente "sitio".',
    },
    {
      termino: 'W3C:',
      significado:
        'Por sus siglas World Wide Web Consortium. Es una comunidad internacional que genera recomendaciones y estándares que aseguran el crecimiento de la WWW a largo plazo.',
    },
    {
      termino: 'Web Push',
      significado:
        'Son notificaciones que el usuario recibe en su navegador (móvil o de escritorio) sin necesidad de tener una aplicación descargada en su equipo.',
    },
  ],
  complementario: [
    {
      texto: 'ThePRBridge. (2011, 13 octubre). Cómo funciona el internet',
      tipo: 'Video de YouTube',
      link: 'https://www.youtube.com/watch?v=31LE0bPLrhM',
    },
    {
      texto: 'Aaron. (2009, 19 febrero). How the internet Works in 5 Minutes ',
      tipo: 'Vídeo de YouTube',
      link: 'https://www.youtube.com/watch?v=7_LPdttKXPc',
    },
    {
      texto: 'saklar. (2017, 25 junio). Topologias de Red ',
      tipo: 'Vídeo de YouTube',
      link: 'https://www.youtube.com/watch?v=awLJkNHBoms',
    },
    {
      texto:
        'Code War. (2020, 17 mayo). 2. Front-end y backend, en qué consisten, sus tecnologías, APIs - Aprende a programar sistemas web  ',
      tipo: 'Vídeo de YouTube',
      link: 'https://www.youtube.com/watch?v=rQX8D4dy1PM ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Santiago Muñoz de la Rosa',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de Teleinformática y Producción Industrial',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Vilma Lucia Perilla Méndez ',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de diseño y metrología.',
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
