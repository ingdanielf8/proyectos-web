export default {
  global: {
    componenteFormativo:
      'Diseño y documentación de controles de ciberseguridad',
    descripcionCurso:
      'Mediante el estudio consciente de este componente, el aprendiz estará en capacidad suficiente para preparar las distintas estrategias de ciberseguridad y seguridad de la información, a la vez que podrá elaborar eficazmente la hoja de ruta, de acuerdo con los controles requeridos y los tipos de documentación.',
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
        titulo: 'Diseño de controles de seguridad',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Pasos para el diseño de controles de seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Entradas y salidas',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Actividades',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Paso uno: identificación del estado actual',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Paso dos: definición de los objetivos',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Paso tres: determinación del estado deseado',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Paso cuatro: determinación del nivel de riesgo aceptable',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Paso cinco: definición y ejecución del plan de acción',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Controles: características',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Recomendaciones importantes sobre controles',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Documentación',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Generalidades de los activos de información',
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
        'Consejo Nacional de Política Económica y Social. (2011). Lineamientos de políticas para Ciberseguridad y Ciberdefensa (CONPES 3701).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/3701.pdf',
    },
    {
      referencia: 'EcuRed. (s. f.). Documentación.',
      link: 'https://www.ecured.cu/Documentaci%C3%B3n ',
    },
    {
      referencia:
        'Ministerio de Hacienda y Administraciones Públicas. (2013). MAGERIT – versión 3.0. Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información.',
      link:
        'https://www.ccn-cert.cni.es/documentos-publicos/1789-magerit-libro-i-metodo/file.html',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2011). Modelo de Seguridad y Privacidad de la Información.',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Modelo_de_Seguridad_Privacidad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de vulnerabilidades',
      significado:
        'Metodología por medio de la cual se valoran los sistemas y servicios de tecnología de la información en una organización y se comprueba la presencia de vulnerabilidades. ',
    },
    {
      termino: 'Contramedidas',
      significado: 'Controles propios para riesgos específicos.',
    },
    {
      termino: 'Control',
      significado:
        'Se trata de las acciones que se deben implementar bajo un proceso o procedimiento, para garantizar los objetivos de seguridad de la organización.',
    },
    {
      termino: 'Directrices',
      significado:
        'Determinan las características generales de actuación. La directriz cuenta con un lineamiento normativo, lo que conlleva que sea general en su contenido y ámbito.',
    },
    {
      termino: 'Entrada',
      significado:
        'Se trata de elementos que ya tiene la organización en su haber y en su quehacer y que favorecen la instauración de cualquiera de los cinco pasos para cumplir con el diseño del plan de controles de seguridad.',
    },
    {
      termino: 'Integridad',
      significado:
        'Principio que sugiere que la información se mantenga intacta y sin alteraciones luego de sufrir un incidente.',
    },
    {
      termino: 'Plan de acción',
      significado:
        'En el establecimiento de los controles de seguridad, el plan de acción se trata de la acción de fijar la hoja de ruta para lograr el estado deseado de la estrategia, teniendo en cuenta personas, tecnologías y procesos, entre otros recursos.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Toda posibilidad de sufrir una afectación por causa de factores externos o internos. El riesgo es un peligro latente que puede o no materializarse. En el orden informático y de ciberseguridad, los riesgos no son distintos, contemplan las vulnerabilidades y las amenazas y pueden ser controlados, tratados, mitigados, prevenidos y, en algunos casos, eliminados.',
    },
    {
      termino: 'Salida',
      significado:
        'Herramientas de registro o de documentación que se tendrán luego de haber analizado, ajustado o intervenido los documentos o registros ya existentes, relacionados con objetivos, planes de acción, estados de ciberseguridad de la compañía o clasificación de los activos de información, entre otros.',
    },
  ],
  complementario: [
    {
      texto:
        'Instituto Colombiano de Normas Técnicas y Certificación [ICONTEC]. (2011). Gestión del riesgo. Principios y directrices (NTC-ISO 3100).',
      tipo: 'Norma técnica',
      link:
        'http://simudatsalud-risaralda.co/normatividad_inv9/normas_tecnicas/NTC-ISO31000_Gestion_del_riesgo.pdf ',
    },
    {
      texto:
        'Organización Internacional de Normalización [ISO]. (2013). Information Technology – Security Techniques – Code of Practices for Information Security Controls (ISO 27002:2013). ',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54533.html ',
    },
    {
      texto:
        'Organización Internacional de Normalización [ISO]. (2013). Seguridad de la información, ciberseguridad y protección de la privacidad. (ISO 27001:2013)',
      tipo: 'Norma técnica',
      link: 'https://www.iso.org/standard/54534.html ',
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
        nombre: 'Pablo Cesar Pardo Ortiz',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca - Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Tolima - Centro agropecuario La Granja',
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
