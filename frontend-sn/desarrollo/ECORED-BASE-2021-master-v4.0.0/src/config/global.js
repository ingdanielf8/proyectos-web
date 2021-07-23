export default {
  global: {
    componenteFormativo:
      'Procesos contables y financieros de la empresa avícola',
    descripcionCurso:
      'Conocer el proceso productivo y aprender las metodologías necesarias para determinar los costos, permite una toma de decisiones fundamentadas en el área de producción. Elaborar informes financieros y comprender su funcionamiento, haciendo uso de herramientas como los indicadores financieros, posibilitará llevar el control de la evolución de los procesos y el planteamiento de estrategias de mejoramiento continuo. ',
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
        titulo: 'Costos de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Elementos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normativa contable',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Metodología de costos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Cálculo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estado de costos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estado de resultados',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Estado de situación financiera',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Presentación de estados financieros',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Indicadores financieros',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Acciones de mejora',
            hash: 't_2_6',
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
        'Burbano A. (2006) Costos y presupuestos. Segunda edición. Ediciones Uniandes.',
      link:
        'https://es.scribd.com/read/436270130/Costos-y-presupuestos-Segunda-edicion.',
    },
    {
      referencia:
        'Decreto ley 3743 de 1951. [Presidencia de la República] Por el cual se expide el Código Sustantivo del Trabajo. Diciembre 20 de 1950. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html.',
    },
    {
      referencia:
        'Decreto 2420 de 2015 [Presidencia de la República] Por el cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. Diciembre 14 de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745.',
    },
    {
      referencia:
        'Delgado F. (2020). Ejercicio de Kardex con promedio ponderado en EXCEL con plantilla GRATIS [video]. YouTube.   ',
      link: 'https://www.youtube.com/watch?v=xYpt2IRFfgQ.',
    },
    {
      referencia:
        'Guarnizo, F. C. y Cárdenas, S. M. (2015). “Costos por órdenes de producción y por procesos”. La Salle ',
      link:
        'https://es.scribd.com/book/485288049/Costos-por-ordenes-de-produccion-y-por-procesos.',
    },
    {
      referencia:
        'Ministerio del trabajo (2019)  “Cotización a la Seguridad Social – Aportes” ',
      link:
        'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/subdireccion-de-formalizacion-y-proteccion-del-empleo/formalizacion-laboral/cotizacion-a-la-seguridad-social-aportes.',
    },
    {
      referencia:
        'Ministerio del trabajo (2019) “MiPymes representan más de 90% del sector productivo nacional y generan el 80% del empleo en Colombia: ministra Alicia Arango”',
      link:
        'https://www.mintrabajo.gov.co/prensa/comunicados/2019/septiembre/mipymes-representan-mas-de-90-del-sector-productivo-nacional-y-generan-el-80-del-empleo-en-colombia-ministra-alicia-arango.',
    },
    {
      referencia:
        'Rincón C. y Narváez J. (2017) Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL. Ediciones de la U. ',
      link:
        'https://es.scribd.com/read/436221926/Presupuestos-Bajo-normas-internacionales-de-informacion-financiera-y-taxonomia-XBRL.',
    },
  ],
  glosario: [
    {
      termino: 'Erogación:',
      significado: 'Disponer o hacer uso de recursos.',
    },
    {
      termino: 'Partida:',
      significado: 'Cuenta o rubro de un estado financiero.',
    },
    {
      termino: 'Persona natural:',
      significado: 'Individuo de la raza humana con derechos y obligaciones.',
    },
    {
      termino: 'Persona jurídica: ',
      significado:
        'Figura jurídica compuesta por una o más personas naturales con identidad propia, pero sin la capacidad de actuar por sí misma. Es diferente a todas las personas que la componen, y requiere de un representante legal para actuar. ',
    },
    {
      termino: 'Prestación social: ',
      significado:
        'Beneficios económicos en dinero o en especie para el trabajador. No es retributivo de los servicios prestados, dado que surgen por el simple hecho de existir una relación laboral.',
    },
    {
      termino: 'Productos en proceso:',
      significado:
        'Producto en estado de transformación. Es la etapa intermedia entre la materia prima y el producto terminado disponible para la venta.',
    },
    {
      termino: 'Seguridad social:',
      significado:
        'Sistema de entidades que garantizan la prevención de la salud y capacidad laboral de los empleados. Se compone por los servicios de salud, pensión y riesgos laborales.',
    },
  ],
  complementario: [
    {
      texto:
        'Oliveros R. (2016) Ms Excel 5 Fórmulas nómina completa [video]. YouTube. ',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=KdZLNPyLGmk',
    },
    {
      texto:
        'VideoTups Docentes (2015) Costos I - Costos indirectos de fabricación [vídeo]. YouTube.  ',
      tipo: 'Video.',
      link: 'https://www.youtube.com/watch?v=oGrkHeP5pY4',
    },
    {
      texto:
        'Instituto Nacional de Contadores Públicos de Colombia (2021). Guía para elaboración de estados financieros para pymes',
      tipo: 'Guía digital.',
      link: 'https://incp.org.co/wp-content/uploads/2021/01/guia-208.pdf',
    },
    {
      texto:
        'Instituto Nacional de Contadores Públicos de Colombia (2012) Principales indicadores financieros y de gestión',
      tipo: 'Guía digital.',
      link: 'https://incp.org.co/Site/2012/agenda/7-if.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Andrés Felipe Avilan Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la granja. Regional Tolima',
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
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de gestión industrial. Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Diana Marcela Luis Vásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de la Gestión industrial. Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura. Regional Santander',
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
