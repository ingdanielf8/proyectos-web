export const global = {
  componenteFormativo: 'Ciberseguridad y seguridad de la información',
  descripcionCurso:
    'El manejo de los datos en el entorno mundial juega un papel fundamental en el desarrollo de las actividades cotidianas de empresas y en general del ámbito productivo, económico y social; esto ha generado grandes ventajas dado que la tecnología es la herramienta que soporta la gestión de datos, sin embargo, en la actualidad se ha notado que en las redes, los  datos e infraestructura tecnológica, aplicaciones informáticas y digitales se ha ido aumentando la inseguridad, convirtiéndose en un problema crítico, por tanto la anticipación a este fenómeno es esencial y debe ser comprendido para poder administrar y gestionar los activos de información e infraestructura.',
  imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  fondoBannerSubPrincipal: require('@/assets/curso/fondo-banner-subprincipal.svg'),
  imagenBannerSubPrincipal: require('@/assets/curso/imagen-banner-subp.svg'),
}

export const menuPrincipal = {
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
      titulo: 'Ciberseguridad',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Definición',
          hash: 't_1_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.2',
          titulo: 'Generalidades',
          hash: 't_1_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '1.3',
          titulo: 'Marcos de referencia',
          hash: 't_1_3',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Seguridad de la información',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '2.1',
          titulo: 'Generalidades',
          hash: 't_2_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.2',
          titulo: 'Principios',
          hash: 't_2_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.3',
          titulo: 'Políticas de seguridad ',
          hash: 't_2_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.4',
          titulo: 'Estándares y normas de referencia',
          hash: 't_2_4',
        },
        {
          icono: 'far fa-file-alt',
          numero: '2.5',
          titulo: 'Riesgos y mecanismos de valuación',
          hash: 't_2_5',
        },
      ],
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Activos de información',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '3.1',
          titulo: 'Inventario de activos',
          hash: 't_3_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '3.2',
          titulo: 'Metodologías de valuación de activos',
          hash: 't_3_2',
        },
      ],
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'La identificación de los activos ',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '4.1',
          titulo: 'Tipos de activos',
          hash: 't_4_1',
        },
      ],
    },
    {
      nombreRuta: 'tema5',
      icono: 'far fa-file-alt',
      numero: '5',
      titulo: 'Actividades para realizar el inventario de activos',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '5.1',
          titulo: 'Inventario de activos',
          hash: 't_5_1',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.2',
          titulo: 'Propiedad de los activos',
          hash: 't_5_2',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.3',
          titulo: 'Clasificación de la Información',
          hash: 't_5_3',
        },
        {
          icono: 'far fa-file-alt',
          numero: '5.4',
          titulo: 'Etiquetado y manipulación de la información',
          hash: 't_5_4',
        },
      ],
    },
  ],
  subMenu: [
    // {
    //   nombreRuta: 'actividad',
    //   icono: 'far fa-question-circle',
    //   titulo: 'Actividad didáctica',
    //   desarrolloContenidos: true,
    // },
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Henry Eduardo Bastidas Paruma',
    cargo: 'Instructor',
  },
  contenidoInstruccional: [
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Diseñador Instruccional',
      centro: 'Centro de Diseño y Metrología',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Oscar Absalón Guevara',
      cargo: 'Evaluador Instruccional',
      centro: 'Centro de Gestión Industrial ',
      regional: 'Regional Bogotá',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Asale, R. (s.f.). coste | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario ',
    link: 'https://dle.rae.es/coste?m=form',
  },
  {
    referencia:
      'Asale, R. (s.f.). valuar | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario',
    link: 'https://dle.rae.es/valuar?m=form',
  },
  {
    referencia:
      'BBC News Mundo. (2016, 15 enero). Qué es el «core», los músculos que te dan estabilidad y evitan lesiones. ',
    link:
      'https://www.bbc.com/mundo/noticias/2016/01/160113_deportes_enforma_core_ejercicio_ac#:%7E:text=%22Core%22%20es%20una%20palabra%20en,musculatura%20profunda%20de%20la%20columna.',
  },
  {
    referencia:
      'Calder, A. (2018). NIST Cybersecurity Framework: Una guía de bolsillo. IT Governance Publishing Ltd.NIST Framework for Improving Critical Infrastructure Cybersecurity. ',
    link:
      'https://books.apple.com/gb/book/iso27001-iso27002-una-gu%C3%ADa-de-bolsillo/id1274970759 ',
  },
  {
    referencia:
      'Cano, J. (2011). Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global. Sistemas Asociación colombiana de ingenieros de sistemas. 119(4.7).',
    link:
      'http://acistente.acis.org.co/typo43/fileadmin/Revista_119/Editorial.pdf ',
  },
  {
    referencia:
      'Caurin, J. (2018, 14 junio). Políticas de seguridad | ¿Qué son las políticas de seguridad? Emprende Pyme.',
    link: 'https://www.emprendepyme.net/politicas-de-seguridad.html',
  },
  {
    referencia:
      'Comisión Federal de Comercio (s.f). Conceptos básicos de ciberseguridad.',
    link:
      'https://www.ftc.gov/es/tips-advice/business-center/small-businesses/cybersecurity/basics-es',
  },
  {
    referencia:
      'Eterovic, J. E., & Pagliari, G. A. (2011). Metodología de análisis de Riesgos Informáticos. Técnica administrativa.',
    link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3718552 ',
  },
  {
    referencia:
      'ISO 27001 (2020). Implantando ISO 27001 Paso A Paso - La Planificación Del SGSI.',
    link: 'https://normaiso27001.es/fase-4-planificacion-del-sgsi',
  },
  {
    referencia:
      'Unión Internacional de Telecomunicación. (2010, noviembre). Ciberentorno',
    link: 'https://www.itu.int/net/itunews/issues/2010/09/pdf/201009_20-es.pdf',
  },
  {
    referencia:
      'SGSI (2010, 12 mayo). 08 Análisis y valoración de riesgos. Metodologías. YouTube.',
    link: 'https://www.youtube.com/watch?v=g7EPuzN5Awg',
  },
  {
    referencia:
      'Soriano, M. (2014). Seguridad en redes y seguridad de la información',
    link:
      'https://techpedia.fel.cvut.cz/project/modules/improvet/download/C2ES/Seguridad_de_Red_e_Informacion.pdf',
  },
  {
    referencia: 'Soto, M. (2019). NIST: Ciberseguridad holística….',
    link:
      'https://marvin-soto.medium.com/nist-ciberseguridad-hol%C3%ADstica-ce4b3911dae7 ',
  },
  {
    referencia:
      'Zambrano, S. M. Q., & Valencia, D. G. M. (2017). Seguridad en informática: consideraciones. Dominio de las Ciencias.',
    link: 'https://dialnet.unirioja.es/descarga/articulo/6137824.pdf',
  },
]

export const glosario = [
  {
    termino: 'Activo',
    significado:
      'El término de activo de información se relaciona con todos esos elementos tecnológicos o relacionados con la tecnología que la organización utiliza para el cumplimiento de sus metas o core del negocio. Según la norma ISO/IEC 27001 se entiende como activo todo aquello que es importante y que la organización valora por lo tanto debe de protegerse',
  },
  {
    termino: 'Activo Informático ',
    significado:
      'Todo elemento tecnológico o relacionado con la tecnología necesario para que la organización cumpla con su misión y logre sus objetivos empresariales.',
  },
  {
    termino: 'Activo Tecnológico',
    significado:
      'Todo equipo tecnológico o relacionado con la tecnología requerido para que la organización cumpla con su función o misión.',
  },
  {
    termino: 'Amenaza',
    significado:
      'Cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas.',
  },
  {
    termino: 'Confidencialidad',
    significado:
      'Propiedad que determina que la información sólo esté disponible y sea revelada a individuos, entidades o procesos autorizados',
  },
  {
    termino: 'Core',
    significado:
      'Es una palabra en inglés, cuyo significado es "centro" o "núcleo".',
  },
  {
    termino: 'Clasificación de la Información',
    significado:
      'Se determina que la información pertenece a uno de los niveles de clasificación estipulados en la entidad. Tiene como objetivo asegurar que la información recibe el nivel de protección adecuado.',
  },
  {
    termino: 'Coste',
    significado: 'Conjunto de gastos para la producción de bienes y servicios.',
  },
  {
    termino: 'Disponibilidad',
    significado:
      'Propiedad de que la información sea accesible y utilizable por solicitud de una entidad autorizada, cuando ésta así lo requiera.',
  },
  {
    termino: 'Integridad',
    significado:
      'Propiedad de salvaguardar la exactitud y estado completo de los activos',
  },
  {
    termino: 'Riesgo',
    significado:
      'Es la posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico. Esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza.',
  },
  {
    termino: 'Valuar',
    significado: 'Determinar o atribuir un valor a una cosa o persona.',
  },
]

export const complementario = [
  {
    texto:
      'SGSI - 08 Análisis y valoración de riesgos. Metodologías. (2010, 12 mayo). [Vídeo]. YouTube. https://www.youtube.com/watch?v=g7EPuzN5Awg',
    tipo: 'Video',
    link: 'https://youtu.be/g7EPuzN5Awg',
  },
  {
    texto:
      'Comisión Federal de Comercio (s.f). Conceptos básicos de ciberseguridad. ',
    tipo: 'Página web',
    link:
      'https://www.ftc.gov/es/tips-advice/business-center/small-businesses/cybersecurity/basics-es',
  },
]
