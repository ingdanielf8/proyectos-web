export default {
  global: {
    componenteFormativo: 'Arquitectura de aplicaciones móviles nativas.',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos básicos de las aplicaciones móviles nativas, los cuales servirán para identificar los tipos de metodologías usadas en el desarrollo móvil, en plataformas nativas, en entornos de desarrollo y su configuración.',
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
        titulo:
          'Enfoque metodológico para el desarrollo de aplicaciones móviles nativas.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plataformas de desarrollo móvil nativas.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Entornos de desarrollo.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Android Studio.',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Arquitectura.',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Versiones.',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Instalación y configuración entorno android studio.',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Componentes de una aplicación android.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Actividades.',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Servicios.',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Proveedores de contenido.',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Receptores de emisiones.',
            hash: 't_5_4',
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
        'D. E. Avison y G. Fitzgerald, Information system development. Maidenhead: McGraw-Hill Education, 2006.',
      link: '',
    },
    {
      referencia:
        'P. Letelier, J. H. Canós, y C. Penadés, «Metodologías Ágiles en el Desarrollo de Software», presentado en VIII Jornadas de Ingeniería del Software y Bases de Datos JISBD, Alicante - España, 2003, pp. 1-8. cambio. Madrid [etc.]: Addison Wesley',
      link: '',
    },
    {
      referencia:
        'Amaya Balafuera, Y. D. (2015). Metodologías ágiles en el desarrollo de aplicaciones para dispositivos móviles. Estado actual. Revista de tecnología, 12 (2).',
      link: 'https://doi.org/10.18270/rt.v12i2.1291',
    },
    {
      referencia:
        'H. Takeuchi y I. Nonaka, «The new new product development game», Harvard Business Review, 1986.',
      link: '',
    },
    {
      referencia:
        'D. Astels, Test-driven development : a practical guide. Upper Saddle River, N.J.; London: Prentice Hall PTR, 2003.',
      link: '',
    },
    {
      referencia:
        'Abrahamsson, P. Hanhineva, A. Hulkko, H. Ihme, T. Jäälinoja, J. Korkala, M. Salo, O. 2004. Mobile-D: an agile approach for mobile application development. En: Companion. to the 19th annual ACM SIGPLAN conference on Object-oriented programming systems, languages, and applications (pp. 174-175). ACM.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Dalvik',
      significado: 'Máquina virtual de Android',
    },
    {
      termino: 'Manifiesto ágil',
      significado:
        'Es un documento redactado con principios para mejorar la forma de desarrollar.',
    },
    {
      termino: 'Wereable',
      significado:
        'Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
  ],
  complementario: [
    {
      texto: 'Manifiesto por el Desarrollo Ágil de Software. (2020, June 09).',
      tipo: 'Página',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      texto:
        'Perú, M. H. (2019, December 15). ¿Qué es la PROGRAMACIÓN EXTREMA? Metodología Ágil XP (Ciclo de Vida XP, Prácticas Básicas de XP). ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tCl33R9jHBk',
    },
    {
      texto:
        'Henao, C. (2018, June 27).  #3. SCRUM en 6 minutos Metodologías Ágiles.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HhC75IonpOU',
    },
    {
      texto:
        'Montoya, J. L. (2021, April 15). Exposición Metodologías de Desarrollo de Software | Mobile-D | Fundamentos de Ingeniería de Software.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=I3yMHHgQCEk',
    },
    {
      texto:
        'Axarnet. (2021, June 25). Plataformas de desarrollo de aplicaciones móviles| Axarnet.',
      tipo: 'Página',
      link:
        'https://axarnet.es/blog/plataformas-desarrollo-aplicaciones-moviles',
    },
    {
      texto:
        'Funcionalidades y características de las aplicaciones nativas | Cero Ideas. (2018, October 15). Cero Ideas. Retrieved from https://ceroideas.es/funcionalidades-y-caracteristicas-de-las-aplicaciones-nativas',
      tipo: 'Página',
      link:
        'https://ceroideas.es/funcionalidades-y-caracteristicas-de-las-aplicaciones-nativas',
    },
    {
      texto:
        'Peñalba, I. (2021). Hacer aplicaciones para Android: ¿Qué es un entorno de desarrollo y cuál es el mejor? El español. ',
      tipo: 'Página',
      link:
        'https://www.elespanol.com/elandroidelibre/20200518/hacer-aplicaciones-android-entorno-desarrollo-mejor/490952339_0.html',
    },
    {
      texto:
        'Herramientas para el desarrollo de aplicaciones móviles - Conocimiento Libre. (2021, February 04).',
      tipo: 'Página',
      link:
        'https://conocimientolibre.mx/herramientas-desarrollo-aplicaciones-moviles',
    },
    {
      texto:
        'Android Studio v1.0: características y comparativa con Eclipse – Academia Android. (2021, June 26).',
      tipo: 'Página',
      link:
        'https://academiaandroid.com/android-studio-v1-caracteristicas-comparativa-eclipse/',
    },
    {
      texto:
        'TerryGLee. (2021, June 26). Información general sobre Visual Studio.',
      tipo: 'Página',
      link:
        'https://docs.microsoft.com/es-es/visualstudio/get-started/visual-studio-ide?view=vs-2019',
    },
    {
      texto:
        'Arquitectura de la plataforma | Desarrolladores de Android. (2020, May 07).',
      tipo: 'Página Oficial',
      link: 'https://developer.android.com/guide/platform?hl=es-419',
    },
    {
      texto:
        'El origen de Android (Características y Costos) – Fredy Olmos. (2020, October 21). Retrieved from https://fredyolmos.com/ciencia-y-tecnologia/el-origen-de-android-costos-caracteristicas',
      tipo: 'Página',
      link: 'https://www.adslzone.net/reportajes/software/que-es-android',
    },
    {
      texto:
        'Archivos de descarga de Android Studio | Desarrolladores de Android. (2021, June 14).',
      tipo: 'Página',
      link: 'https://developer.android.com/studio/archive?hl=es-419',
    },
    {
      texto:
        'Cómo instalar Android Studio | Desarrolladores de Android. (2020, December 21). ',
      tipo: 'Página Oficial',
      link: 'https://developer.android.com/studio/install?hl=es-419',
    },
    {
      texto:
        'Aspectos fundamentales de la aplicación | Desarrolladores de Android. (2020, October 07).',
      tipo: 'Página Oficial',
      link:
        'https://developer.android.com/guide/components/fundamentals?hl=es-419',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Zulema Yidney Leon Escobar ',
        cargo: 'Experto Temático',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda ',
        cargo: 'Edición y corrección de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
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
