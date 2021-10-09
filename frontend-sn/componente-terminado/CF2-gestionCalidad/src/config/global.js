export default {
  global: {
    componenteFormativo: 'Entorno, diagnóstico y conocimiento de empresa.',
    descripcionCurso:
      'El éxito de una empresa depende en buena parte de como esta se relacione con su entorno, el contexto, diagnóstico y conocimiento de los factores internos y externos que le permitan ayudar a la toma de decisiones estratégicas y su operación. Se establece un análisis dependiendo del sector a analizar como factores económicos, socioculturales, tecnológicos, medioambientales y del sector que la empresa espera desarrollar.',
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
        titulo: 'Análisis, técnicas y requerimientos de la información',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mecanismos para la evaluación y seguimiento de procesos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Repetición del ciclo de mejora',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Benchmarking',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Auditorías de calidad',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición de riesgo empresarial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de riesgo empresarial',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Presupuestos de mejoramiento continuo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos de presupuestos como mejora continua',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Importancia del presupuesto como mejora continua',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Evaluación y procedimientos organizacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Normatividad empresarial',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Gestión de calidad, seguridad y salud en el trabajo',
            hash: 't_5_2',
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
        'Castillo, E. y Montes, C. (2017). El presupuesto como herramienta de control de gestión en la gerencia financiera en las empresas comerciales mipymes. Universidad La Gran Colombia.',
      link:
        'https://repository.ugc.edu.co/bitstream/handle/11396/4334/Presupuesto_herramienta_financiera_pymes.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Decreto 1072 de 2015. [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. Mayo 26 de 2015. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+Sector+Trabajo+Actualizado+a+15+de+abril++de+2016.pdf/a32b1dcf-7a4e-8a37-ac16-c121928719c8',
    },
    {
      referencia:
        'Donoso, P. (2003). Instrumentalización del Control de Gestión. Universidad Católica. ',
      link: '',
    },
    {
      referencia:
        'EALDE Business School . (2016). El presupuesto como herramienta de gestión. ',
      link: 'https://www.ealde.es/presupuesto-herramienta-gestion/',
    },
    {
      referencia: 'FAO. (2015). Cómo analizar el desempeño organizacional. ',
      link:
        'http://www.fao.org/capacity-development/resources/practical-tools/analyse-organizational-performance/es/',
    },
    {
      referencia:
        'Gisbert, V. y Raissouni, O. (2014). Benchmarking, herramienta de control de calidad y mejora continua. 3c Empresa: investigación y pensamiento crítico, 3(4), p. 217-233.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4924484',
    },
    {
      referencia:
        'ICONTEC. (2018). Gestión de la calidad. Calidad de una organización. Orientación para lograr el éxito sostenido (GTC-ISO 9004). ',
      link:
        'https://www.academia.edu/40054977/ISO_9004_2018_ORIENTACI%C3%93N_PARA_LOGRAR_EL_%C3%89XITO_SOSTENIDO',
    },
    {
      referencia:
        'ISOTools. (2015). En qué consiste una auditoría de la norma de calidad ISO 9001.',
      link:
        'https://www.isotools.org/2015/10/07/en-que-consiste-una-auditoria-de-la-norma-de-calidad-iso-9001/',
    },
    {
      referencia:
        'ISOTools. (2019). Definición del riesgo empresarial y principales tipos.',
      link:
        'https://www.isotools.org/2019/08/12/definicion-del-riesgos-empresariales-y-principales-tipos/',
    },
    {
      referencia:
        'North, D. (1990). Institutions, Institutional Change and Economic Performance. Cambridge University Press.',
      link: 'https://doi.org/10.1017/CBO9780511808678',
    },
    {
      referencia:
        'Saldías, J. y Andalaf, A. (2006). Sistemas de control de gestión, análisis para organizaciones sin fines de lucro. Revista Ingeniería Industrial, 5(1), p. 61-76.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/3996997',
    },
    {
      referencia: 'Westreicher, G. (2021). Riesgo Empresarial. Economipedia.',
      link: 'https://economipedia.com/definiciones/riesgo-empresarial.html',
    },
  ],
  glosario: [
    {
      termino: 'Benchmarking:',
      significado:
        'Como dice Michael J. Spendolini, es un proceso sistemático y continuo para evaluar los productos, servicios y procesos de trabajo de las organizaciones que se reconocen como representantes de las mejores prácticas, con el propósito de realizar mejoras organizacionales.',
    },
    {
      termino: 'Consultor:',
      significado:
        'Persona experta en una materia o actividad sobre la que ejecuta una asesoría profesional.',
    },
    {
      termino: 'ESAN:',
      significado:
        'Es la primera institución académica de posgrado en Administración creada en Hispanoamérica. Fue establecida el 25 de julio de 1963, en el marco de un convenio entre los gobiernos del Perú y los Estados Unidos de América. Su organización y puesta en marcha fue confiada a la Escuela de Negocios para Graduados de la Universidad de Stanford, California. Se encuentra en Lima, Perú.',
    },
    {
      termino: 'Know-how:',
      significado:
        'Conjunto de prácticas o actividades de una empresa que son de su exclusivo conocimiento y que dan su impronta ante el mercado y competidores.',
    },
    {
      termino: 'Plan, do, check, act:',
      significado:
        'Ciclo de Deming en su idioma original, inglés, que corresponde a: planear, hacer, revisar y actuar.',
    },
    {
      termino: 'Sistémico:',
      significado:
        'Dicho de entidades, organizaciones o personas que se rigen o ajustan a un sistema. ',
    },
  ],
  complementario: [
    {
      texto:
        'ISOTools. (2016). El ciclo PHVA para la mejora continua de las organizaciones.',
      tipo: 'Blog',
      link:
        'https://www.isotools.org/2016/02/25/ciclo-phva-para-mejora-continua/',
    },
    {
      texto:
        'Gisbert, V. y Raissouni, O. (2014). Benchmarking, herramienta de control de calidad y mejora continua. 3c Empresa: investigación y pensamiento crítico, 3(4), p. 217-233.',
      tipo: 'Artículo de revista',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4924484',
    },
    {
      texto:
        'ISOTools. (2015). En qué consiste una auditoría de la norma de calidad ISO 9001.',
      tipo: 'Blog',
      link:
        'https://www.isotools.org/2015/10/07/en-que-consiste-una-auditoria-de-la-norma-de-calidad-iso-9001/',
    },
    {
      texto:
        'ISOTools. (2019). Definición del riesgo empresarial y principales tipos.',
      tipo: 'Blog',
      link:
        'https://www.isotools.org/2019/08/12/definicion-del-riesgos-empresariales-y-principales-tipos/',
    },
    {
      texto:
        'Muñiz, L. (2015). El Reporting herramienta clave para mejorar la gestión empresarial. SisConGes & Estrategia.',
      tipo: 'eBook',
      link:
        'https://accid.org/wp-content/uploads/2018/11/Ebook_reporting_SCG_Estrategia_ACCID.pdf',
    },
    {
      texto:
        'BRAINTRUST Consulting Services. (2017, 16 octubre). webinar4 emisión en directo presupuesto como herramienta de gestión [Video]. YouTube. ',
      tipo: 'Webinar-video',
      link: 'https://youtu.be/Iw0Wkw1BFWA',
    },
    {
      texto: 'FAO. (2015). Cómo analizar el desempeño organizacional.',
      tipo: 'Página web',
      link:
        'http://www.fao.org/capacity-development/resources/practical-tools/analyse-organizational-performance/es/',
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
        nombre: 'José Luis Rangel Ayala',
        cargo: 'Experto Temático',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios. CIES',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
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
