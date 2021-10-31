export default {
  global: {
    componenteFormativo: 'Planificación de unidades productivas',
    descripcionCurso:
      'Las actividades diseñadas en este componente de formación, permiten identificar y conocer la estructura de un plan de negocios de la unidad productiva, conociendo de esta manera las necesidades del mercado, del cliente y la identidad corporativa según las características del producto o servicio.',
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
        titulo: 'Conceptos y características de un plan de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Plan de negocio',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características del plan de negocios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivo del plan de negocio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Componentes de un plan de negocios',
            hash: 't_1_4',
          },
        ],
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
            titulo: 'Identidad corporativa',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características de la imagen corporativa',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Elementos de la imagen corporativa',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Mercado',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Objetivo',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Sensaciones',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Prejuicios y experiencias',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marketing y publicidad de la unidad productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Variables de mercadeo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Análisis de mercado',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Segmentación de mercados',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Competencia',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Estrategias y acciones',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planeación estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Estructura de un plan estratégico',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Fases de la planificación',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Modelos de planeación estratégica',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ciclo del producto',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Mercadeo y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Estructura de un plan estratégico',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Estructura de un plan estratégico',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Estructura de un plan estratégico',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Estructura de un plan estratégico',
            hash: 't_6_4',
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
        'Andia Valencia, W. & Pacuara Pinto, E. (2013). Los planes de negocios y los proyectos de inversión: similitudes y diferencias. Industrial Data, 16 (1), 80-84.',
      link: '',
    },
    {
      referencia:
        'Güell, J. M. F. (2019). Planificación estratégica de ciudades: nuevos instrumentos y procesos (Vol. 10). Reverté.',
      link: '',
    },
    {
      referencia:
        'Maestre, R. J. (2019). La blockchain revolucionará la comunicación de la empresa. Comunicació: revista de recerca i danàlisi, 95-116.',
      link: '',
    },
    {
      referencia:
        'Mínguez, N. (2000). Un marco conceptual para la imagen corporativa. Zer: Revista de estudios de comunicación= Komunikazio ikasketen aldizkaria, 5(8).',
      link: '',
    },
    {
      referencia:
        'Porter, M. (2010). Ventaja competitiva: Creación y sostenibilidad de un desempeño superior.  Pirámide.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española (2021). Diccionario de la lengua española, 23.ª ed., [versión 23.4 en línea]. ',
      link: 'https://dle.rae.es',
    },
    {
      referencia:
        'Roche, F. P. (2007). La planificación estratégica en las organizaciones deportivas (Vol. 26). Editorial Paidotribo.',
      link: '',
    },
    {
      referencia:
        'Uriarte, J. M. (2020). Plan de negocios. Caracteristicas.co.',
      link: 'https://www.caracteristicas.co/plan-de-negocios/ ',
    },
    {
      referencia:
        'Valencia, W. A. & Pinto, E. P. (2013). Los planes de negocios y los proyectos de inversión: similitudes y diferencias. Industrial Data, 16(1), 80-84.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Estrategias',
      significado:
        'En un proceso regulable, conjunto de las reglas que buscan una decisión óptima en cada momento.',
    },
    {
      termino: 'Gestión',
      significado:
        'Cuasicontrato que se origina por el cuidado de intereses ajenos sin mandato de su dueño.',
    },
    {
      termino: 'Imagen corporativa',
      significado:
        'La forma en que el público percibe la marca de la unidad productiva, sus productos o servicios.',
    },
    {
      termino: 'Marketing',
      significado:
        'Estrategia que sirve para posicionar un producto o una institución en mercado determinado.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de actividades realizadas libremente por los agentes económicos sin intervención del poder público.',
    },
    {
      termino: 'Plan de negocios',
      significado:
        'Herramienta de proyección y evaluación de una empresa o unidad productiva con el fin de identificar las oportunidades de negocio.',
    },
    {
      termino: 'Unidad productiva',
      significado:
        'Asociatividad de un grupo de personas u organizaciones con ánimo de lucro o sin este, que produce bienes y servicios competitivos en el mercado.',
    },
  ],
  complementario: [
    {
      texto:
        'Weinberger Villarán, K. W. (2009). Plan de negocios. Herramienta para evaluar la viabilidad de un negocio. USAID Perú y Ministerio de la Producción del Perú.',
      tipo: 'Documento ',
      link: 'http://www.crecemype.pe/1_crecer/docs/plan%20de%20negocios.pdf',
    },
    {
      texto:
        'Andia Valencia, W. & Pacuara Pinto, E. (2013). Los planes de negocios y los proyectos de inversión: similitudes y diferencias. Industrial Data, 16(1), 80-84',
      tipo: 'Documento',
      link: 'https://www.redalyc.org/pdf/816/81629469009.pdf',
    },
    {
      texto:
        'Galarza Zapata, T. A. (2019). Plan de Asignatura: MARKETING DIGITAL Y NEGOCIOS Plan de Unidad de Aprendizaje: ESTUDIO DE MERCADO Y DEFINICIÓN DE PÚBLICO OBJETIVO.',
      tipo: 'Libro',
      link: 'http://ddigital.umss.edu.bo:8080/jspui/handle/123456789/16908',
    },
    {
      texto:
        'Schwartz, P. & Vásquez, J. M. (1995). La planificación estratégica por escenarios. Cuadernos de Administración, 14(21), 199-225.',
      tipo: 'Documento',
      link:
        'https://cuadernosdeadministracion.univalle.edu.co/index.php/cuadernos_de_administracion/article/view/114',
    },
    {
      texto:
        'Armijo, M. (2011). Planificación estratégica. Instituto Latinoamericano y del Caribe de Planificación Económica y Social (ILPES), 69, 15.',
      tipo: 'Documento',
      link:
        'https://www.researchgate.net/profile/Lorenzo-Armijos/publication/320183813_Mapeo_de_los_Stakeholders_y_su_ponderacion_en_el_sistema_del_Instituto_de_Idiomas_de_la_Universidad_de_las_Fuerzas_Armadas_ESPE/links/5b9727f092851c78c4187f19/Mapeo-de-los-Stakeholders-y-su-ponderacion-en-el-sistema-del-Instituto-de-Idiomas-de-la-Universidad-de-las-Fuerzas-Armadas-ESPE.pdf',
    },
    {
      texto:
        'Izar Landeta, J. M., & González Ortiz, J. H. (2004). Las 7 herramientas básicas de la calidad.',
      tipo: 'Documento',
      link:
        'https://ninive.uaslp.mx/xmlui/bitstream/handle/i/3346/EDBLHB00401.pdf?sequence=1',
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
        nombre: 'Anderson Ferney Archila Calixto',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander – Centro de la Industria de la Empresa y los Servicios - CIES',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
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
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Paola Andrea Quintero Aguilar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
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
