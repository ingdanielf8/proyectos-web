export default {
  global: {
    componenteFormativo: 'Diseño y construcción de Frontend',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos clave para el diseño y desarrollo de aplicaciones móviles nativas, como sus elementos, vistas, maquetación entornos de desarrollo, lenguajes entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
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
        titulo: 'Análisis de Requerimiento',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño gráfico: Herramientas de prototipado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Adobe XD',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Balsamig',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Canva',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Conceptos de Material Desing',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Principios Básicos de Usabilidad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Componentes de Software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Licenciamiento',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Serguridad',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'APIs, Firebase',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Herramientas',
            hash: 't_4_4',
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
        'Lázaro, G. (2015). Efecto Ripple de Material Design [HTML+CSS+JS].',
      link:
        'https://gersonlazaro.com/tutorial-efecto-ripple-de-material-design-html-css-js',
    },
    {
      referencia: 'Material.io. (2021). Material Design.',
      link:
        'https://material.io/design/color/the-color-system.html#color-usage-and-palettes',
    },
    {
      referencia:
        'Aula formativa. (2019, julio 29). ¿Qué es el Material Design?. [Web log post].  blog.aulaformativa.com. ',
      link: 'https://blog.aulaformativa.com/que-es-el-material-design',
    },
    {
      referencia: 'Beust, C. (2019).  TestNG.',
      link: 'https://testng.org/doc',
    },
  ],
  glosario: [
    {
      termino: 'Wereable',
      significado:
        'Dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
    {
      termino: 'wireframing',
      significado:
        'Es un esquema de página o plano de pantalla, como guía visual que representa el esqueleto o estructura visual de una interfaz.',
    },
  ],
  complementario: [
    {
      texto:
        'FalconMasters. (2018). Curso de Adobe XD | 1. Introducción y que Aprenderemos en el Curso [video] Youtube. https://www.youtube.com/watch?v=5HfqCSm9k3Y',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/5HfqCSm9k3Y',
    },
    {
      texto:
        'EDteam. (2017). Minicurso de Balsamiq Mockups (1) - Los wireframes y la interfaz. [video] Youtube. https://www.youtube.com/watch?v=4WqfxF1QjTM',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/4WqfxF1QjTM',
    },
    {
      texto:
        'Aprende, G. (2020).  COMO USAR CANVA: Canva tutorial - Aprende a diseñar FÁCIL y de manera PROFESIONAL. [video] Youtube. https://www.youtube.com/watch?v=kdE6ZmT_5MI',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/kdE6ZmT_5MI',
    },
    {
      texto:
        'Conde, J. (2016). 01.- Material Design con Android Studio. ¿Qué es Material Design? [video] Youtube. https://www.youtube.com/watch?v=wt0Jzc9UHNw',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/wt0Jzc9UHNw',
    },
    {
      texto:
        'Novato, P. (2019). Firebase 01.- Que es Firebase.  [video] Youtube. https://www.youtube.com/watch?v=0Bhrwc8VfGw',
      tipo: 'Video Tutorial',
      link: 'https://youtu.be/0Bhrwc8VfGw',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Peter Emerson Pinchao',
        cargo: 'Experto Temático',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital- Centro de Diseño y metrología ',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Adriana López',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
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
}
