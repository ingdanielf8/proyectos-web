export default {
  global: {
    componenteFormativo: 'Introducción al desarrollo de aplicaciones móviles',
    descripcionCurso:
      'Este material hace un recorrido por la historia y evolución de los dispositivos móviles, identificando componentes que se integran en su arquitectura de software y hardware; enfocado en los smartphones para comprender el funcionamiento básico y la integración de sus componentes físicos y lógicos; familiarizándose con los conceptos necesarios para la contextualización y desarrollo de las actividades de programación de aplicaciones.',
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
        titulo: 'Introducción desarrollo de aplicaciones móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Dispositivos móviles',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de los dispositivos móviles',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Historia y evolución de los dispositivos móviles',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Características y hardware de los dispositivos móviles',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Teléfonos inteligentes o smartphones ',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Redes de conexión celular ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas operativos móviles',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Historia de los sistemas operativos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Principales sistemas operativos y sus características ',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Componentes del sistema operativo móvil',
            hash: 't_3_3',
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
        'Acontecimientos importantes. (2020). La evolución de tecnología móviles o celulares 1g 2g 3g 4g 5g. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=zGJQJlGIKcQ  ',
    },
    {
      referencia:
        'Agtechnology.net (2015). Generaciones de teléfonos celulares. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=VggUrZEvHK4',
    },
    {
      referencia:
        'Entorno simple. (2020). Breve historia y evolución del celular. [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=PvUomnZWADA',
    },
    {
      referencia:
        'Ibáñez, O. (2018). Generaciones de dispositivos móviles (0G - 4G). [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=QNymU5sOs ',
    },
    {
      referencia:
        'Los infiltrados. (2020). Evolución de la tecnología móvil 1G - 5G | Segunda Generación 2G. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=Lh8eYncXrmc ',
    },
  ],
  glosario: [
    {
      termino: 'Bluetooth	',
      significado:
        'Sistema inalámbrico de conexión y comunicación, el cual enlaza dos o varios dispositivos electrónicos, sean móviles o no: computadores, teléfonos, relojes, auriculares, entre otros. El mudo informático creó este estándar que en inglés significa “diente azul” y se relaciona, anecdóticamente con el sobrenombre de un vikingo legendario del siglo IX.',
    },
    {
      termino: 'Free Software',
      significado:
        'Programas desarrollados y distribuidos según la filosofía de dar al usuario la libertad de ejecutar, copiar, distribuir, estudiar, cambiar y mejorar dicho programa (Linux es un ejemplo de esta filosofía). El software libre no es siempre software gratuito (equivocación bastante habitual que tiene su origen en que la palabra inglesa free significa tanto “libre” como “gratuito”).',
    },
    {
      termino: 'PDA',
      significado:
        'Asistente Personal Digital Ordenador de pequeño tamaño cuya principal función era en principio la de mantener una agenda electrónica, aunque cada vez más se va confundiendo con los ordenadores de mano y de palma, y se está integrando con otros dispositivos como los teléfonos móviles. Se le denomina también ordenador de bolsillo.',
    },
    {
      termino: 'Roaming',
      significado:
        'Servicio tecnológico que favorece a las personas comunicarse, con su teléfono celular, fuera de la cobertura de red proporcionada por sus operadores de servicios de comunicación. De esta manera, los dueños de un dispositivo pueden hacer llamadas y recibirlas desde un país hasta otro, desde un continente hasta otro. La palabra “roaming” hace referencia a lo que sucede en la calle, por fuera, en lo vago de un lugar. Este beneficio se hace posible, únicamente, cuando compañías de servicios de operación de comunicaciones celulares hacen acuerdos de servicio articulado.',
    },
    {
      termino: 'Universal Mobile Telecommunications System  UMTS',
      significado:
        'Estándar de telefonía móvil celular de banda ancha y alta velocidad (de 2 Mbps en adelante) desarrollado por el ETSI (European Telecommunications Standard Institute). Se trata de un sistema de tercera generación que permite la conexión a internet. Sustituye a los sistemas GSM y GPRS, y está disponible comercialmente a partir del año 2001 o 2002.',
    },
  ],
  complementario: [
    {
      texto:
        'Jesgargardon. (2020). Partes de un teléfono móvil.  Jesgargardon ',
      tipo: 'Artículo',
      link: 'https://jesgargardon.com/blog/partes-de-un-telefono-movil/',
    },
    {
      texto: 'https://jesgargardon.com/blog/partes-de-un-telefono-movil/',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=NhnZ_2Xu9RQ',
    },
    {
      texto:
        'Computerhoy. (2015). Autopsia de un iPhone 6S: Todas sus piezas y componentes. Computerhoy',
      tipo: 'Noticia',
      link:
        'https://computerhoy.com/noticias/moviles/autopsia-iphone-6s-todas-sus-piezas-componentes-34955',
    },
    {
      texto:
        'Nobbot (2016). Tecnología forense: te destripamos un smartphone. Nobbot. ',
      tipo: 'Artículo',
      link:
        'https://www.nobbot.com/pantallas/tecnologia-forense-te-destripamos-smartphone/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Wilson Andrés Cuervo Nieto',
        cargo: 'Instructor',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja, Regional Tolima',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
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
