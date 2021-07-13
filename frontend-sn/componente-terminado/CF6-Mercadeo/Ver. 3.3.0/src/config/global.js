export default {
  global: {
    componenteFormativo: 'Plan de merchandising',
    descripcionCurso:
      'A través de este componente formativo el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del plan de merchandising para su idea de negocio o proyecto productivo.',
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
        titulo: 'Componentes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evaluación y control.',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Layout',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Planogramas y planimetría',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Mobiliario comercial',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Estrategias de exhibición',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Visual merchandising',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Vitrinismo',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Punto de venta',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Marketing sensorial',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Teoría del color',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Comunicación comercial. Recursos de apoyo',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Software de gestión en el punto de venta',
            hash: 't_1_12',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.13',
            titulo: 'Plan de exhibición',
            hash: 't_1_13',
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
      nombre: 'Claudia Juliana León Pinto',
      cargo: 'Experta temática',
      centro: 'Centro de servicio empresariales y turísticos',
      regional: 'Regional Santander',
    },
    contenidoInstruccional: [{}],
    desarrolloProducto: [
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica ',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
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
        'Best, R. (2007). Marketing estratégico. 4a. Ed. Pearson Prentice Hall. ',
      link: '',
    },
    {
      referencia:
        'Escrivá, J. (2005). Marketing en el punto de venta. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Estrella, A. y Segovia, C. (2018). Comunicación integrada de marketing. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Gianella, A. (2013). Visual merchandising o el amor a primera vista. Ediciones de la U. Coedición Editorial Nobuko.',
      link: '',
    },
    {
      referencia:
        'Hoyos, R. (2016). Branding el arte de marcar corazones. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Kerin, R. y Harley, S. (2018). 13a. Ed. Marketing. McGraw-Hill Interamericana.',
      link: '',
    },
    {
      referencia:
        'Kotler, P. y Amstrong, G. (2017). 16a. Ed. Marketing. Pearson.',
      link: '',
    },
    {
      referencia:
        'Manzano, R. y Gavilán, D. (2012). Marketing sensorial. Pearson Educación.',
      link: '',
    },
    {
      referencia: 'Martínez, H. (2018). El arte de seducir. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Morgan, T. (2016). Visual merchandising. 3a. Ed. Editorial Gustavo Gili.',
      link: '',
    },
    {
      referencia:
        'O´Guinn, T. (2013). Publicidad y promoción integral de marca. 6a. Ed. Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'Palomares, R. (2012). Marketing en el punto de venta. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Prieto, J. (2009). Merchandising. La seducción en el punto de venta. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Prieto, J. (2018). Merchandising. La seducción en el punto de venta. 3a. Ed. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'Yate, A. (2012). Material POP. Ecoe Ediciones.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'AIDA',
      significado:
        'Técnica de amplio uso en merchandising, utilizada para producir un efecto en los clientes, cuya sigla significa atención, interés, deseo y acción.',
    },
    {
      termino: 'BTL marketing',
      significado:
        'Mercadeo bajo la línea, es cualquier forma creativa, que es pagada para llegar al consumidor, que se enfoca en medios directos de comunicación: correo directo, e-mail y cualquier otra que utiliza listas bien segmentadas y escogidas de nombres para maximizar la respuesta. Es el nuevo nombre para "mercadeo directo"; en marketing, se refiere a otros gastos que no corresponden a la publicidad en medios, ni a la producción de la misma (correo directo, exposiciones, demostraciones, material del punto de venta).',
    },
    {
      termino: 'Campaña publicitaria',
      significado:
        'Conjunto de mensajes publicitarios organizados para determinados medios publicitarios (prensa, radio, televisión, etc.) planificados en el tiempo para alcanzar unos objetivos determinados.',
    },
    {
      termino: 'Diagramación',
      significado:
        'Es un oficio del diseño editorial que se encarga de organizar en un espacio contenidos escritos, visuales y en algunos casos audiovisuales (multimedia) en medios impresos y electrónicos, como libros, diarios y revistas.',
    },
    {
      termino: 'Layout',
      significado:
        'Es utilizado en el marketing para aludir al diseño o disposición de ciertos productos y servicios en sectores o posiciones en los puntos de venta, corresponde a un croquis, esquema, o bosquejo de distribución de las piezas o elementos que se encuentran dentro de un diseño en particular, con el fin de presentarle dicho esquema a un cliente para venderle la idea.',
    },
    {
      termino: 'Medios publicitarios',
      significado:
        'Son los diferentes canales impersonales de comunicación, a través de los cuales pueden transmitirse los mensajes publicitarios.',
    },
    {
      termino: 'Mensaje publicitario',
      significado:
        'Conjunto de ideas que la empresa anunciante desea hacer llegar al público para conseguir sus objetivos.',
    },
    {
      termino: 'Merchandising',
      significado:
        'Técnicas utilizadas en el punto de venta para ganar rentabilidad y hacer atractivos los productos y el lugar de compra para los clientes, de tal forma que lo prefieran. Punto de encuentro entre el comercio y el marketing, que incluye toda actividad desarrollada en un punto de venta, que pretende reafirmar o cambiar la conducta de compra a favor de los artículos más rentables para el establecimiento. Los objetivos básicos del merchandising son: llamar la atención, dirigir al cliente hacia el producto y facilitar la acción de compra.',
    },
    {
      termino: 'Outlet',
      significado:
        'Formatos o establecimientos dedicados a vender productos que son remanentes de inventarios de reconocidas marcas a precios inferiores a los que generalmente se ofrecen.',
    },
    {
      termino: 'Planimetría',
      significado:
        'Técnica que permite la distribución proporcional de los productos en el punto de venta y las góndolas.',
    },
    {
      termino: 'Promoción',
      significado:
        'Técnica cuyo objetivo es acercar el producto al consumidor.',
    },
    {
      termino: 'Publicidad',
      significado:
        'Es una de las subfunciones o actividades del marketing, que puede definirse como “un proceso de comunicación de carácter impersonal y controlado que, a través de medios masivos, pretende dar a conocer un producto, servicio, idea o institución, con objeto de informar e influir en su compra o aceptación”.',
    },
    {
      termino: 'Puntos calientes',
      significado:
        'Zonas o áreas del punto de venta con gran acogida o donde los productos expuestos son superiores.',
    },
    {
      termino: 'Puntos fríos',
      significado:
        'Espacios dentro del punto de venta con baja rotación de productos.',
    },
    {
      termino: 'Stand',
      significado:
        'Es el espacio dentro de una feria o salón en el que una empresa expone y presenta sus productos o servicios. El stand es un espacio identificador de cada empresa en el que se acoge a los visitantes y se realizan negociaciones comerciales. La cantidad de superficie escogida en el recinto ferial depende en gran medida del presupuesto asignado, así como del tipo de producto o servicio que se quiere exponer y de los objetivos marcados para el evento. El stand debe constituir el espacio en que la empresa se presenta ante sus clientes y ante su competencia, por lo que debe reflejar fielmente su filosofía e imagen corporativa, constituyendo a su vez un entorno ameno y atractivo.',
    },
    {
      termino: 'Superficie de venta',
      significado:
        'Denominación que se utiliza para designar aquella parte de un establecimiento en la que las clientelas pueden moverse libremente para observar o tomar los productos que deseen adquirir. La superficie de venta comprende los escaparates, las vitrinas, las estanterías y los pasillos de circulación dentro del establecimiento.',
    },
    {
      termino: 'Tienda espectáculo',
      significado:
        'Es un lugar o punto de compra donde se le brindan a los consumidores o clientes diversas experiencias o sensaciones, (olores, colores, sonidos, etc.) y tiene relación directa o indirecta con la compra. Algunos autores la comparan con un teatro: la ambientación de la tienda es la escenografía, los empleados son los actores y la clientela son los espectadores.',
    },
    {
      termino: 'Visual merchandising',
      significado:
        'Es la disciplina que estudia la relación existente entre el objeto, el contexto en que este se inserta y su imagen. Se aplica principalmente a los sectores de la moda y del diseño y, representa un punto de contacto interdisciplinar entre el comercio, los principios de la percepción visual y la psicología cognitiva. ',
    },
    {
      termino: 'Vitrina',
      significado:
        'Parte de la fachada de un establecimiento de venta al público, que está cubierta con cristales para permitir ver los productos que se exponen en su interior. El escaparate es al mismo tiempo un lugar importante para la colocación de displays y otras formas publicitarias, influyendo de manera importante en la imagen del establecimiento.',
    },
    {
      termino: 'Vitrinas al exterior del almacén',
      significado:
        'Son espacios que se encuentran en la fachada del almacén y que se pueden observar desde la vía pública.',
    },
  ],
  complementario: [
    {
      texto: 'Best, R. (2007). Marketing estratégico. Pearson Prentice Hall.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3408&pg=1 ',
    },
    {
      texto: 'Escrivá, J. (2005). Marketing en el punto de venta. McGraw-Hill.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4859&pg=1 ',
    },
    {
      texto:
        'Estrella, A. y Segovia, C. (2018). Comunicación integrada de marketing. ESIC Editorial.',
      tipo: 'Libro',
      link:
        'https://www-alfaomegacloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alfaomegacloud-com.bdigital.sena.edu.co/reader/comunicacion-integrada-de-marketing?location=1 ',
    },
    {
      texto:
        'Gianella, A. (2013). Visual merchandising o el amor a primera vista. Ediciones de la U. coedición Editorial Nobuko.',
      tipo: 'Libro',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/39597 ',
    },
    {
      texto:
        'Hoyos, R. (2016). Branding el arte de marcar corazones. Ecoe Ediciones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=2769&pg=1 ',
    },
    {
      texto:
        'Kerin, R. y Harley, S. (2018). Marketing. McGraw-Hill Interamericana.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6261&pg=1 ',
    },
    {
      texto: 'Kotler, P. y Amstrong, G. (2017). Marketing. Pearson.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1 ',
    },
    {
      texto:
        'Manzano, R. y Gavilán, D. (2012). Marketing sensorial. Pearson Educación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4530&pg=1',
    },
    {
      texto: 'Martínez, H. (2018). El arte de seducir. Ecoe Ediciones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5955&pg=1 ',
    },
    {
      texto: 'Morgan, T. (2016). Visual merchandising. Editorial Gustavo Gili.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4536138&ppg=1 ',
    },
    {
      texto:
        'O´Guinn, T. (2013). Publicidad y promoción integral de marca. Cengage Learning.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=835&pg=1 ',
    },
    {
      texto:
        'Palomares, R. (2012). Marketing en el punto de venta. ESIC Editorial.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=5885856&ppg=1',
    },
    {
      texto:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Ediciones de la U.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1 ',
    },
    {
      texto:
        'Prieto, J. (2009). Merchandising. La seducción en el punto de venta. Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=3193614&ppg=1 ',
    },
    {
      texto:
        'Prieto, J. (2018). Merchandising. La seducción en el punto de venta. 3a. Ed. Ecoe Ediciones.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6439&pg=1 ',
    },
    {
      texto: 'Yate, A. (2012). Material POP. Ecoe Ediciones.',
      tipo: 'Libro',
      link:
        'http://www.digitaliapublishing.com.bdigital.sena.edu.co/visor/29998 ',
    },
  ],
}
