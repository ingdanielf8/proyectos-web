export default {
  global: {
    componenteFormativo: 'Validación de requisitos',
    descripcionCurso:
      'En este componente formativo se abordan los temas de técnicas de validación de requisitos (revisiones, prototipos y casos de prueba) y el tema de los requerimientos duraderos y volátiles.',
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
        titulo: 'Técnicas de validación de requisitos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Revisiones de requerimientos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Construcción de prototipos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Generación de casos de prueba',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requerimientos duraderos y volátiles',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas para la gestión de requisitos',
        desarrolloContenidos: true,
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
  },
  creditos: {
    liderEquipo: {},
    contenidoInstruccional: [
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Zulema León Escobar',
        cargo: 'Instructor',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial.',
        regional: 'Regional Bogotá',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
      },
    ],
    gestoresRepositorio: [{}],
  },
  referencias: [
    {
      referencia:
        'Ballesteros, E., Tellez, F. R., y Medina, J. (2020). Software requirements: prototyping, legacy software, and document analysis. Ingeniería y Desarrollo, 37(2), 327–345.',
      link: 'https://doi.org/10.14482/inde.37.2.1053',
    },
    {
      referencia:
        'Easterbrook, S, Lutz, R, et al. (1998). Experiences using lightweight formal methods for requirements modeling. IEE Trans. On Software Engineering, 24(1), 4-14. (ch 10).',
      link: '',
    },
    {
      referencia:
        'Pantaleo, G., y Rinaudo L. (2018). Ingeniería de Software. Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Penzenstadler, B. (s. f.). Requirements Engineering. CSU Long Beach.',
      link: 'https://bit.ly/3rtBKXN ',
    },
    {
      referencia:
        'Porfirio, C. (s. f.). Técnicas de priorización: el desafío de conseguir un orden para las funcionalidades. atSistemas - Consultoría IT Blog.',
      link: 'https://bit.ly/3cvumqz ',
    },
    {
      referencia:
        'Rivadeneira, M., S. G. (2014). Metodologías ágiles enfocadas al modelado de requerimientos. Informes Científicos Técnicos - UNPA, 5(1), 1–29.',
      link: 'https://doi.org/10.22305/ict-unpa.v5i1.66',
    },
    {
      referencia:
        'Sommerville I. (2011). Ingeniería del software. Addison-Wesley.',
      link: '',
    },
    {
      referencia: 'Sevilla, J. (2021). Herramientas de gestión de requisitos. ',
      link:
        'http://www.overti.es/tecnologia/296-herramientas-de-gestion-de-requisitos',
    },
  ],
  glosario: [
    {
      termino: 'Prueba conceptual',
      significado:
        'Las pruebas de concepto ofrecen conclusiones para diseñar un producto o servicio mejor. Además, permiten evaluar el éxito de estas ideas de productos nuevos antes de su comercialización.',
    },
    {
      termino: 'Stakeholders',
      significado:
        'Son todas aquellas personas interesadas en la construcción del software que de una u otra forma se relacionan con las actividades, se afecta por estas actividades o toma parte en las decisiones de la empresa o negocio sobre el cual se está haciendo el levantamiento de requerimientos.',
    },
  ],
  complementario: [
    {
      texto:
        'Axelo 19. (7 de julio de 2019). Adobe Xd-Prototipado interactivo de aplicaciones y páginas web (sin programación). [Video]. YouTube. https://www.youtube.com/watch?v=AQjU9-zc4Hk&feature=youtu.be',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/AQjU9-zc4Hk ',
    },
    {
      texto:
        'Fundación Educreatic. (2018, 19 abril). Crear prototipo pagina web en mockup balsamiq (caso de estudio Kiri). [Video]. YouTube. https://www.youtube.com/watch?v=VMzckBNgoNc&feature=youtu.be',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/VMzckBNgoNc ',
    },
    {
      texto:
        'León, C. (12 de noviembre de 2018). Diseño de interfaz de usuario de app con MarvelApp. [Video]. YouTube. https://www.youtube.com/watch?v=GG3ab1058Yw&feature=youtu.be',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/GG3ab1058Yw ',
    },
    {
      texto:
        'Nastaquias, R. (27 de mayo de 2019). Tutorial de Moqups. [Video]. YouTube. https://www.youtube.com/watch?v=H4OZE1e1MW8&feature=youtu.be',
      tipo: 'Video de Youtube',
      link: 'https://youtu.be/H4OZE1e1MW8 ',
    },
    {
      texto:
        'Overti. (08 de abril de 2021). Herramientas de gestión de requisitos. http://www.overti.es/tecnologia/296-herramientas-de-gestion-de-requisitos.',
      tipo: 'Página',
      link:
        'http://www.overti.es/tecnologia/296-herramientas-de-gestion-de-requisitos',
    },
    {
      texto:
        'Barón, A. (08 de abril de 2021). Herramientas para apoyar ingeniería de requisitos. https://prezi.com/kuflo3saesne/herramientas-para-apoyar-ingenieria-de-requisitos',
      tipo: 'Presentación',
      link:
        'https://prezi.com/kuflo3saesne/herramientas-para-apoyar-ingenieria-de-requisitos',
    },
    {
      texto:
        'IBM Rational RequisitePro Integration. (10 de septiembre de 2020). Integrate RequisitePro. https://www.opshub.com/integrations/ibm-rational-requisitepro-integration',
      tipo: 'Página',
      link:
        'https://www.opshub.com/integrations/ibm-rational-requisitepro-integration',
    },
  ],
}
