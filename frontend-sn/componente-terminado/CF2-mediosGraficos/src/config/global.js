export default {
  global: {
    componenteFormativo: 'Conceptualización y metodologías epub',
    descripcionCurso:
      'El diseño editorial no solo se enfoca en la creación de contenidos impresos, sino también digitales, que se adaptan para posibilitar la lectura en diversos dispositivos; por ello, es de gran utilidad comprender en qué consiste la diagramación, que dependerá de los diferentes tipos de productos.  El epub es uno de los formatos más utilizados para la publicación de libros electrónicos.',
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
        titulo: 'Evolución histórica del libro',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipología epub',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ebooks, e-magazine, presentaciones, catálogos, e-card',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Preproducción',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Arquitectura de información, Card sorting',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Evaluación heurística o de usabilidad',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Flujogramas',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Metodología en UX y UI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Experiencia de usuario UX',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Diseño UI',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Investigación ',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Organización y planificación de la información',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Gestión de contenidos ',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Diagramación de la arquitectura de información ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Diseño, guion y storyboard',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Pruebas',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Validación de prototipo',
            hash: 't_7_3',
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
  creditos: {
    liderEquipo: {
      nombre: 'Guillermo Eduardo González Tarazona',
      cargo: 'Instructor ',
      centro: 'Centro para la Industria de la Comunicación Gráfica',
      regional: 'Regional Distrito Capital.',
    },
    contenidoInstruccional: [
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional ',
        centro: 'Centro de Diseño y Metrología.',
        regional: 'Regional Distrito Capital.',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico ',
        centro: 'Centro de Diseño y Metrología.',
        regional: 'Regional Distrito Capital.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro Gestión Industrial.',
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
  referencias: [
    {
      referencia:
        'Díaz. M. (2017, abril 21). UX y UI: Diferencias entre la experiencia y la interfaz de usuario. [Web log post]. FuegoYamana.',
      link:
        'https://www.fuegoyamana.com/blog/ux-y-ui-experiencia-interfaz-de-usuario/#:~:text=UX%20y%20UI%3A%20Diferencias%20entre%20la%20experiencia%20y%20la%20interfaz%20de%20usuario&text=Mientras%20que%20la%20interfaz%20de,sienten%20cuando%20miran%20dicho%20sitio.',
    },
    {
      referencia:
        'Estrategia digital. (2017, marzo 23). Metodologías de trabajo para proyectos digitales. [Web log post]. Ida blog.',
      link:
        'https://blog.ida.cl/estrategia-digital/metodologias-de-trabajo-proyectos-digitales/',
    },
    {
      referencia: 'Glosario gráfico. (s.f.). Postprensa. Glosariografico.com.',
      link: 'http://www.glosariografico.com/postimpresion',
    },
    {
      referencia: 'Glosario gráfico. (s.f.). Prepensa. Glosariografico.com',
      link: 'http://www.glosariografico.com/preprensa',
    },
    {
      referencia:
        'Ingeniovirtual. (s.f). Las extensiones de archivos para formato eBook y sus características. ',
      link:
        'https://www.ingeniovirtual.com/extensiones-de-archivos-para-formato-ebook/',
    },
    {
      referencia:
        'López, B. (2018). Evaluación heurística, la metodología más utilizada en UX para medir la usabilidad de una interfaz. Mtp, digital business assurance.',
      link:
        'https://www.mtp.es/blog/experiencia-de-usuario-blog/evaluacion-heuristica-la-usabilidad-una-interfaz',
    },
    {
      referencia:
        'Puente, L. (2015). Cards: una de las últimas tendencias en diseño web. Netcommerce',
      link:
        'https://info.netcommerce.mx/cards-una-de-las-ultimas-tendencias-en-diseno-web',
    },
    {
      referencia:
        'Real Academia Española. (2020). Hipertexto. DEL. dle.rae.es.',
      link: 'https://dle.rae.es/hipertexto',
    },
    {
      referencia: 'Real Academia Española. (2021). Interfaz. DEL. dle.rae.es. ',
      link: 'https://dle.rae.es/interfaz',
    },
    {
      referencia:
        'Sarraipa, J., Artíficie, A, Jiménez, H. (2019). Metodología de evaluación de prototipo innovador. ACACIA.',
      link:
        'https://acacia.red/wp-content/uploads/2019/07/Gu%C3%ADa-Metodologi%CC%81a-de-evaluaci%C3%B3n-de-prototipo-innovador.pdf',
    },
    {
      referencia:
        'Sepulveda, E & Quiceno, C. (2015). Ebooks interactivos diseño y producción. Fondo Editorial Luis Amigó. ',
      link:
        'https://www.researchgate.net/figure/Figura-1-Fase-de-preproduccion-de-material-editorial-interactivo_fig1_311193442',
    },
    {
      referencia:
        'Torresburriel. (2017). Card Sorting para mejorar la arquitectura de información de un producto digital.',
      link:
        'https://www.torresburriel.com/weblog/2017/12/15/card-sorting-para-mejorar-la-arquitectura-de-informacion-de-un-producto-digital/',
    },
    {
      referencia:
        'Zamora, L. (2016). La lectura hipermedial. Hacia un marco teórico. Marcoele.',
      link:
        'https://marcoele.com/lectura-hipermedial/#:~:text=El%20texto%20hipermedial%20se%20caracteriza,en%20definitiva%2C%20la%20comprensi%C3%B3n%20lectora.',
    },
  ],
  glosario: [
    {
      termino: 'Hipermedia',
      significado:
        '       Hace referencia a la convergencia de diversos medios (textos, imágenes, sonidos, videos), permitiendo estructurar la información de una manera no secuencial, a través de nodos interconectados por enlaces.',
    },
    {
      termino: 'Hipertexto',
      significado:
        'Conjunto estructurado de textos, gráficos, etc., unidos entre sí por enlaces y conexiones lógicas (Real Academia Española, 2021, definición 1).',
    },
    {
      termino: 'Interfaz',
      significado:
        'Conexión o frontera común entre dos aparatos o sistemas independientes.Conexión, física o lógica, entre una computadora y el usuario, un dispositivo periférico o un enlace de comunicaciones (Real Academia Española, 2021, definición 1 y 2).',
    },
    {
      termino: 'Link ',
      significado: 'Unión, enlace, eslabón. ',
    },
    {
      termino: 'Look and feel',
      significado:
        'Traducción de mirar y sentir, expresión utilizada en marketing.',
    },
    {
      termino: 'Marketing',
      significado:
        'Técnicas que persiguen la selección de mercados objetivos, la identificación y cuantificación de las necesidades de esos mercados, el desarrollo de productos y servicios que satisfagan a los usuarios. ',
    },
    {
      termino: 'Navegabilidad',
      significado:
        'Cualidad de navegable, hace referencia a la facilidad con la que el usuario se desplaza entre las páginas que conforman contenido web. ',
    },
  ],
  complementario: [
    {
      texto:
        'Ingeniovirtual. (s.f). Las extensiones de archivos para formato eBook y sus características. https://www.ingeniovirtual.com/extensiones-de-archivos-para-formato-ebook/',
      tipo: 'Sitio web',
      link:
        'https://www.ingeniovirtual.com/extensiones-de-archivos-para-formato-ebook/',
    },
  ],
}
