export default {
  global: {
    componenteFormativo:
      'Cálculo y medición de magnitudes eléctricas y electrónicas',
    descripcionCurso:
      'Comprender las magnitudes eléctricas permite tener un acercamiento al mundo de la electrónica; tal como un electrón cruza a través de los conductores, encontrando resistencia y transportando la corriente eléctrica, alimentándose del voltaje, y permitiendo la energía para que el circuito eléctrico tenga la potencia de trabajo. ',
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
        titulo:
          'Mediciones de acuerdo con procedimientos técnicos y especificaciones del fabricante',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mediciones e instrumentos de medición',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Magnitudes eléctricas y electrónicas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Protocolos de pruebas',
        desarrolloContenidos: true,
        subMenu: [],
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
        'Acosta, A. (s. f.). Ley de Kirchhoff. Tecnología & Pedagogía.',
      link:
        'https://www.tecnologiaypedagogia.net/2019/10/ley-de-kirchhoff-desarrollada-por-el.html',
    },
    {
      referencia: 'Arboledas, D. (2014). Electricidad básica. RA-MA. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106570?page=24.',
    },
    {
      referencia:
        'Cuervo, A. (2004). Detección de fallas. Universidad Santiago de Cali.',
      link:
        'https://docplayer.es/48669388-Guias-unicas-de-laboratorio-deteccion-de-fallas-autor-alberto-cuervo-santiago-de-cali-universidad-santiago-de-cali-departamento-de-laboratorios.html',
    },
    {
      referencia:
        'Escalona, M. (2012). Sistema métrico Sistema internacional. ',
      link: 'https://dialnet.unirioja.es/servlet/libro?codigo=558060',
    },
    {
      referencia:
        'Fernández, O. (2019). Fuente de corriente. Código Electrónica. ',
      link: 'http://codigoelectronica.com/blog/fuente-corriente',
    },
    {
      referencia:
        'Julián, C. (s. f.). Ley de Ohm - Ejercicios Resueltos. Fisimat | Blog de Física y Matemáticas',
      link: 'https://www.fisimat.com.mx/ley-del-ohm/',
    },
    {
      referencia: 'Mecatrónica LATAM. (2021). Ley de Watt.',
      link:
        'https://www.mecatronicalatam.com/es/tutoriales/teoria/ley-de-watt/',
    },
    {
      referencia:
        'Quincy, J. (1821). A brief history of measurement systems. Report to the Congress. U.S. Department of Commerce.',
      link:
        'https://www.nist.gov/system/files/documents/2017/05/09/NIST-SP-304A-Brief-History-Measurement-Systems-w-Color-Chart-1997.pdf',
    },
    {
      referencia:
        'Tutoriales de electrónica básica. (2019). Fuente de voltaje como fuentes independientes y dependientes. ',
      link:
        'http://tutorialesdeelectronicabasica.blogspot.com/2019/07/fuente-de-voltaje-como-fuentes.html',
    },
    {
      referencia: 'Wikipedia. (2021). Función continua. ',
      link: 'https://es.wikipedia.org/wiki/Funci%C3%B3n_continua',
    },
  ],
  glosario: [
    {
      termino: 'Amperio',
      significado: 'Unidad de corriente.',
    },
    {
      termino: 'Ángstrom',
      significado:
        'El ángstrom no es una unidad del sistema internacional de medidas. Sin embargo, está considerada como una de las unidades útiles para responder a necesidades específicas de ciertos campos científicos técnicos. Es la unidad de longitud equivalente a la diez mil millonésima (10-10) parte del metro. (Símb. Å).',
    },
    {
      termino: 'Continuidad',
      significado: 'Facilidad de paso de la corriente.',
    },
    {
      termino: 'Diferencia de potencial',
      significado:
        'Caída de voltaje al paso de la corriente por un determinado resistor o resistencia.',
    },
    {
      termino: 'Estática',
      significado:
        'Relacionada con la física en electrónica y mecánica. En electrónica, se refiere a la energía que se almacena en elementos, y en mecánica, a elementos en quietud o sin movimiento.',
    },
    {
      termino: 'Impedancia',
      significado: 'Resistencia al paso de la corriente.',
    },
    {
      termino: 'Julios',
      significado: 'Unidad de energía.',
    },
    {
      termino: 'Ohmios',
      significado: 'Unidad de resistencia.',
    },
    {
      termino: 'Voltios',
      significado: 'Unidad de voltaje.',
    },
  ],
  complementario: [
    {
      texto:
        'Hernández, N., Medel, P. y Ramírez, J. (2003). Dispositivos y circuitos electrónicos. Prácticas de laboratorio. Universidad Nacional Autónoma de México.',
      tipo: 'PDF',
      link:
        'http://olimpia.cuautitlan2.unam.mx/pagina_ingenieria/electronica/prac/practicas/3/M_Dispositivos_Circuitos_Electronicos_2021-1.pdf',
    },
    {
      texto: 'Arboledas, D. (2014). Electricidad básica. RA-MA.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/106570?page=24.',
    },
  ],
  creditos: {
    liderEquipo: {
      nombre: 'Andrés Aurelio Alarcón Tique',
      cargo: 'Experto técnico',
      centro:
        'Regional Distrito Capital Centro de Electricidad, Electrónica y Telecomunicaciones.',
    },
    contenidoInstruccional: [
      {
        nombre: 'Gewin Alfonso Fernández Cáceres',
        cargo: 'Experto temático',
        centro: 'Regional Caribe Centro de Tecnología Colombo Alemán.',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluador Instruccional',
        centro: 'Regional Distrito Capital. Centro de Gestión Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Regional Distrito Capital. Centro de Gestión Industrial',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Regional Tolima – Centro Agroindustrial La Granja',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: ['Validación y vinculación en plataforma LMS'],
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
}
