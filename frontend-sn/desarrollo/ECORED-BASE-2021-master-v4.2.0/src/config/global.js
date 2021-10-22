export default {
  global: {
    componenteFormativo: 'Los Clientes y el SARLAFT',
    descripcionCurso:
      'La importancia de los clientes en cualquier organización y su debida atención, recalca lo fundamental hoy en día del conocimiento,  implementación e interpretación de la información enviada por ellos, sobre Sistema de administración del riesgo en lavados de activos y financiación de terrorismo, y así dar gestión a sus solicitudes de manera oportuna. <br>Por ello, es indispensable conocer los procedimientos y formatos para evaluar la funcionalidad del sistema. ',
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
        titulo: 'Normatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normativa vigente SARLAFT',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'SARLAFT 4.0',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Otros sistemas de prevención',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Políticas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Procedimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conocimiento del cliente: verificación de información',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Importancia del manual SARLAFT dentro de los sistemas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Formatos y datos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normas de Seguridad y Salud en el Trabajo SST',
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
      referencia: 'ICETEX. (2.020). MANUAL SARLAFT ICETEX.',
      link:
        'https://portal.icetex.gov.co/Portal/docs/default-source/documentos-el-icetex/biblioteca/manuales-de-la-entidad/manual-sarlaft-icetex-v13.pdf',
    },
    {
      referencia: 'SISTEMA NACIONAL ALA/CFT. (2.006). CIRCULARES',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28/circulares',
    },
    {
      referencia: 'SISTEMA NACIONAL ALA/CFT. (2.006).DECRETOS.',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28/decretos',
    },
    {
      referencia: 'SISTEMA NACIONAL ALA/CFT. (2.013). LEYES.',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28/leyes',
    },
    {
      referencia: 'SISTEMA NACIONAL ALA/CFT. (2.006). RESOLUCIONES.',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28/decretos',
    },
    {
      referencia: 'UIAF. (2019). Guía de Normatividad ALA/CFT.',
      link:
        'Https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28/documentos_interes_ala_cft/guia_normatividad_ala_cft_29974',
    },
    {
      referencia: 'UIAF. (2021). Normatividad.',
      link:
        'https://www.uiaf.gov.co/sistema_nacional_ala_cft/normatividad_sistema_documentos_28',
    },
  ],
  glosario: [
    {
      termino: 'Formato',
      significado:
        'Es el conjunto de las características técnicas y de presentación de un texto, objeto o documento en diferentes ámbitos, tanto reales como virtuales.',
    },
    {
      termino: 'FPADM',
      significado:
        'SISTEMA DE AUTOCONTROL Y GESTIÓN DEL RIESGO INTEGRAL LA/FT/FPADM o SAGRILAFT, no es un cambio solo de nombre, ya que incorpora nuevas definiciones y categorías que permitirán abarcar una mayor cantidad de sectores económicos y así servir de una forma más eficaz en la prevención del riesgo.',
    },
    {
      termino: 'Manual',
      significado:
        'Es un libro o folleto en el cual se recogen los aspectos básicos, esenciales de una materia. Así, los manuales nos permiten comprender mejor el funcionamiento de algo, o acceder, de manera ordenada y concisa, al conocimiento de algún tema o materia.',
    },

    {
      termino: 'Periodicidad ',
      significado:
        'Es un término aplicado para mencionar a una persona o elemento que se caracteriza por ser periódico, es decir, el elemento mencionado en la oración es frecuente (posee una repetitividad muy continua) esta palabra puede ser aplicada en cualquier ocasión.',
    },

    {
      termino: 'Procesos de control',
      significado:
        'Consiste en el proceso sistemático de regular o medir las actividades que desarrolla la organización para que estas coincidan con los objetivos y expectativas establecidos en sus planes.',
    },

    {
      termino: 'Procedimientos',
      significado:
        'Es un conjunto de acciones que tienen que realizarse todas igualmente, para obtener los mismos resultados bajo las mismas circunstancias',
    },

    {
      termino: 'ROS',
      significado:
        'El ROS es el Reporte de Operación Sospechosa que todo oficial de cumplimiento o funcionario responsable de las personas naturales o jurídicas señaladas en el artículo 3° de la Ley N° 19.913, debe enviar a la UAF cuando, en el ejercicio de su actividad o de sus funciones, detecte una operación sospechosa de lavado de activos o financiamiento del terrorismo, que corresponda ser informada a este servicio.',
    },
  ],
  complementario: [
    {
      texto:
        'GRUPO ISA.  (2.012). Prevención del lavado de activos y financiación del terrorismo. (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BxJfd8BYMts',
    },
    {
      texto: 'VANESSA ESPITIA (2019). Normatividad SARLAFT. (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dww1OIC7K4E',
    },
    {
      texto:
        'INFOLAFT SARLAFT SAGRILAFT(2016). Manual SARLAFT: ¿cómo construir un buen documento?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sNQ3Ngh1vCQ',
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
        nombre: 'Jhon Jairo Villamizar Mora',
        cargo: 'Experto temático',
        centro: 'Centro de la Industria, la Empresa y los Servicios. CIES.',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
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
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica – Regional Distrito Capital',
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
