export default {
  global: {
    componenteFormativo: 'Manejo del proceso de equipajes en lengua inglesa',
    descripcionCurso:
      'El área de equipajes es una de las más importantes en la operación aérea, no solo la parte del manejo de equipajes y su seguridad, sino también dominar el tema y poder transmitirlo en lengua inglesa, ya que esta es una de las áreas de mayor contacto con el cliente y requiere de un vocabulario y manejo especial.',
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
        titulo: 'Generalidades del equipaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Descripción del procedimiento en el área de equipaje',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características del equipaje',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Registro de la información en el sistema de equipajes',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compensaciones de equipaje ',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mercancías peligrosas',
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
        'Federal Aviation Administration. (2021b). What are Dangerous Goods? ',
      link: 'https://www.faa.gov/hazmat/what_is_hazmat/',
    },
    {
      referencia: 'IATA. (s. f.). Baggage ID',
      link: ' https://www.iata.org/en/publications/store/baggage-id/ ',
    },
    {
      referencia:
        'Secretaría de Seguridad Aérea. (2010) - Guía del inspector de operaciones. Procedimiento para evaluar el manual de mercancías peligrosas. Dirección Estándares de Vuelo.',
      link:
        'https://www.aerocivil.gov.co/autoridad-de-la-aviacion-civil/vigilancia/Documents/CAPITULO%2010.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Baggage handling',
      significado: 'Manejo de equipajes.',
    },
    {
      termino: 'Baggage identification chart',
      significado: 'Tabla de identificación de equipaje.',
    },
    {
      termino: 'Baggage tag number ',
      significado: 'Número de etiqueta del equipaje.',
    },
    {
      termino: 'Damaged baggage compensation',
      significado: 'Compensación por equipaje dañado.',
    },
    {
      termino: 'Dangerous goods',
      significado: 'Mercancías peligrosas.',
    },
    {
      termino: 'Delayed baggage compensation',
      significado: 'Compensación por retraso en la entrega del equipaje.',
    },
    {
      termino: 'File a claim',
      significado: 'Presentar un reclamo.',
    },
    {
      termino: 'Lost baggage compensation',
      significado: 'Compensación por equipaje perdido.',
    },
    {
      termino: 'Luggage tracking',
      significado: 'Rastreo del equipaje.',
    },
    {
      termino: 'Property irregularity report',
      significado: 'Formulario de irregularidades de equipaje.',
    },
    {
      termino: 'World tracer system',
      significado: 'Sistema World Tracer.',
    },
  ],
  complementario: [
    {
      texto: 'IATA. (s. f.). Baggage ID.',
      tipo: 'Poster',
      link: 'https://www.iata.org/en/publications/store/baggage-id/',
    },
    {
      texto:
        'Federal Aviation Administration. (2021). PackSafe for Passengers. ',
      tipo: 'Artículo',
      link: 'https://www.faa.gov/hazmat/packsafe/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Claudia Marcela Ávila Ramírez',
        cargo: 'Experto Temático',
        centro:
          'Regional Distrito Capital – Centro Nacional de Hotelería, Turismo y Alimentos',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y metrología',
      },
      {
        nombre: 'Yoao Salazar De La Cruz',
        cargo: 'Instructor Bilingüismo',
        centro: 'Regional Atlántico - Centro Industrial y de Aviación',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora Instruccional ',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial ',
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
