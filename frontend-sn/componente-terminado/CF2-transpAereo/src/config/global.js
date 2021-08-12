export default {
  global: {
    componenteFormativo: 'El transporte aéreo',
    descripcionCurso:
      'El movimiento de viajeros por los aeropuertos en el país denota un crecimiento significativo en lo relacionado con el transporte aéreo, en esa perspectiva las aerolíneas incentivan a los pasajeros con distintos convenios que permiten llegar a nuevos destinos; es por esta razón que es importante abordar el tema del transporte aéreo y sus características.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
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
        titulo: 'Transporte aéreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Organismos reguladores de la aviación (IATA, OACI)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aerolínea (tipos, características, generalidades)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Alianzas aéreas de conectividad',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Sistemas de distribución',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atención al cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipología de clientes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Portafolio de servicios aéreos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Protocolos de servicio aéreo',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Manejo de PQRS',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Paquete turístico',
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
        'Congreso de Colombia. (31 de diciembre de 1919). Ley 126 de 1919. Por la cual se crea una Escuela Militar y se dictan medidas sobre aviación. ',
      link:
        'http://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1647233',
    },
    {
      referencia:
        'EAS. Barcelona. (2020). Las cinco aerolíneas más antiguas del mundo.',
      link: 'https://easbcn.com/las-cinco-aerolineas-mas-antiguas-del-mundo',
    },
    {
      referencia:
        'Gonzáles. A. (2017). Tráfico aéreo. Publicaciones científicas Universidad de las fuerzas armadas ESPE.',
      link:
        'http://repositorio.espe.edu.ec/bitstream/21000/13752/1/978-9942-765-18-5%20TR%C3%81FICO%20A%C3%89REO.pdf',
    },
    {
      referencia: 'IATA. (2019). El valor de la aviación en Colombia.',
      link:
        'https://www.iata.org/contentassets/bc041f5b6b96476a80db109f220f8904/colombia-el-valor-de-la-aviacion-spanish.pdf',
    },
    {
      referencia: 'IATA. (2020). Colombia listos para despegar.',
      link:
        'https://www.iata.org/contentassets/0b6d1c34ebb24fa390b6030be3327751/iata-colombia-webinar-listos-para-despegar.pdf',
    },
    {
      referencia:
        'Ministerio de Transporte. (2021). Gobierno nacional da a conocer el Protocolo de Bioseguridad para la prevención del Covid-19',
      link:
        ' https://www.mintransporte.gov.co/publicaciones/8691/gobierno-nacional-da-a-conocer-el-protocolo-de-bioseguridad-para-la-prevencion-del-covid-19/',
    },
    {
      referencia: 'SATENA. (2020). Manual y protocolo de servicio al cliente',
      link:
        'https://www.satena.com/documentos/files/SAT-M87_MANUAL_Y_PROTOCOLO_DE_SERVICIO_AL_CLIENTE_V1.pdf',
    },
    {
      referencia:
        'Wallingre, N. (2013). Transporte Aéreo, su relación con el turismo y los servicios.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/77501',
    },
  ],
  glosario: [
    {
      termino: 'Endoso',
      significado:
        'Ceder un pasajero con una aerolínea diferente a con la que se compró un billete de vuelo, según políticas de la compañía',
    },
    {
      termino: 'Low Cost',
      significado: 'Expresión en lengua inglesa que traduce bajo costo.',
    },
    {
      termino: 'Pernoctar',
      significado: 'Pasar la noche fuera de su lugar habitual.',
    },
    {
      termino: 'PQRS',
      significado:
        'Peticiones, quejas, reclamos y sugerencias; este sistema permite conocer las inquietudes y manifestaciones de los usuarios, en relación con el producto o servicio ofrecido. ',
    },
  ],
  complementario: [
    {
      texto:
        'Wallingre, N. (2013). Transporte Aéreo, su relación con el turismo y los servicios. Ediciones Turísticas. ',
      tipo: 'Libro ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/77501 ',
    },
    {
      texto:
        'Ministerio de Transporte. (2020). Gobierno nacional da a conocer el Protocolo de Bioseguridad para la prevención del Covid-19. Ministerio de transporte.',
      tipo: 'Página web',
      link:
        'https://www.mintransporte.gov.co/publicaciones/8691/gobierno-nacional-da-a-conocer-el-protocolo-de-bioseguridad-para-la-prevencion-del-covid-19/',
    },
    {
      texto: 'IATA. (2020). Colombia listos para despegar. ',
      tipo: 'PDF',
      link:
        'https://www.iata.org/contentassets/0b6d1c34ebb24fa390b6030be3327751/iata-colombia-webinar-listos-para-despegar.pdf',
    },
    {
      texto: 'SATENA. (2020). Manual y protocolo de servicio al cliente. ',
      tipo: 'PDF',
      link:
        'https://www.satena.com/documentos/files/SAT-M87_MANUAL_Y_PROTOCOLO_DE_SERVICIO_AL_CLIENTE_V1.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura.',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería Turismo y Alimentos',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Regional Distrito Capital - Centro Nacional de Hotelería Turismo y Alimentos',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional ',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. Regional Distrito Capital',
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
