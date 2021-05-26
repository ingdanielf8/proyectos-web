export default {
  global: {
    componenteFormativo: 'Plan de comunicación integral',
    descripcionCurso:
      'A través del componente, el aprendiz debe apropiar los elementos de entrada requeridos para la elaboración del plan de acción de endomarketing y el plan de comunicación integral para su idea de negocio o proyecto productivo.',
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
        titulo: 'Endomarketing',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Talento humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manual corporativo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comunicación integral',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan de comunicación integral',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Verbatim',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Insight',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Percepción',
            hash: 't_2_4',
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
  creditos: {
    liderEquipo: {
      nombre: 'Claudia Juliana León Pinto',
      cargo: 'Experta temática',
      centro: 'Centro de servicio empresariales y turísticos',
      regional: 'Regional Santander',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor Pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura.',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Uriel Darío González Montoya',
        cargo: 'Acompañamiento pedagógico',
        centro: 'Centro Agropecuario La Granja.',
        regional: 'Regional Tolima',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alard, J. y Monfort, A. (2018). Plan de comunicación on y off en la práctica. ESIC.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/plan-de-comunicacion-on-y-off-en-la-practica-1?location=293',
    },
    {
      referencia:
        'Ayestarán, R., Rangel, C., & Morillas, A. (2012). Planificación estratégica y gestión de la publicidad: conectando con el consumidor. ESIC.',
      link: '',
    },
    {
      referencia:
        'Bedoya, E. (2018). Guía práctica del sistema de gestión de la seguridad y salud en el trabajo. Alfaomega. ',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/guia-practica-del-sistema-de-gestion-de-la-seguridad-y-salud-en-el-trabajo?location=9',
    },
    {
      referencia:
        'Beltrán, A., Melchor, M. y Álvarez, A. (2014). Percepción de los usuarios sobre la imagen corporativa y su relación con la identidad institucional. Universidad Autónoma de Occidente.',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/50977',
    },
    {
      referencia:
        'Capriotti, P. (2009). Branding corporativo. Reed Business Education.',
      link: 'http://www.analisisdemedios.com/branding/BrandingCorporativo.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2020). Gestión del talento humano (5ª ed.). McGraw-Hill.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=9350&pg=1',
    },
    {
      referencia:
        'Clow, K. y Baack, D. (2010). Publicidad, Promoción y Comunicación Integral en Marketing (4ª ed.). Pearson Educación.',
      link: 'https://www.miconexionweb.com.mx/publicidad.pdf',
    },
    {
      referencia:
        'Estrella, A., y Segovia, C. (2016). Comunicación integrada de marketing. ESIC.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/comunicacion-integrada-de-marketing?location=16',
    },
    {
      referencia:
        'García, J. (2016). Técnicas de diseño gráfico corporativo. CCEP.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51090?page=1',
    },
    {
      referencia:
        'Kotler, P. y Armstrong, G. (2017). Marketing (16ª ed.). Pearson Educación.',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1',
    },
    {
      referencia:
        'Martínez, R. (2016). Servicio al cliente interno. Todos somos clientes y todos tenemos clientes. Ediciones de la U',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5746&pg=1',
    },
    {
      referencia:
        'Ocampo, M. (2014) Comunicación Empresarial (2ª ed.). ECOE Ediciones.',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/36923',
    },
    {
      referencia:
        'O’Guinn, T., Allen, C. y Semenik, R. (2013). Publicidad y promoción integral de marca (6ª ed.). Cengage Learning.',
      link:
        'https://www.academia.edu/36447090/Publicidad_y_Promoci%C3%B3n_Integral_de_Marca_Publicidad_y_Promoci%C3%B3n_Integral_de_Marca',
    },
    {
      referencia:
        'Pintado, M. (2013). Imagen corporativa: influencia en la gestión empresarial (2ª ed.). ESIC.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/imagen-corporativa?location=311',
    },
    {
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019',
      link:
        'https://www.arlsura.com/files/Resolucion_0312_de_2019_Estandares_Minimos.pdf',
    },
    {
      referencia:
        'Rueda, M. y Zambrano, M. (2018). Manual de ergonomía y seguridad (2ª ed.). Alfaomega.',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/manual-de-ergonomia-y-seguridad-segunda-edicion-1?location=172',
    },
    {
      referencia:
        'Schein, E. (1985). Organizational Culture and Leadership. Jossey-Bass Publishers.',
      link: '',
    },
    {
      referencia:
        'Wells, W., Burnett, J., & Moriarty, S. (2007). Publicidad. Principios y práctica (7ª ed.). Pearson Educación.',
      link:
        'https://www.academia.edu/32127935/Publicidad_PRINCIPIOS_Y_PR%C3%81CTICA',
    },
  ],
  glosario: [
    {
      termino: 'Agencia de publicidad/ advertising agency',
      significado:
        'Es una empresa especializada en prestar servicios publicitarios a los anunciantes. Los servicios básicos que presta una agencia, para ser reconocida como tal por las asociaciones y entidades calificadoras en la mayoría de los países, son: estrategia de comunicación, creatividad y planificación y compra de medios. Las agencias ofrecen, asimismo, servicios de producción gráfica y audiovisual, es decir, la realización de piezas publicitarias para todos los medios: televisión, cine, diarios, revistas, radio, vía pública, material de punto de venta y promocional, impresos, folletos, papelería, etc. Otros servicios habituales son: asesoramiento y/o realización en investigación de mercado, promoción, relaciones públicas e institucionales, marketing directo y de relación.',
    },
    {
      termino: 'Alcance / reach',
      significado:
        'El número total de hogares con TV o radio que reciben una o más transmisiones durante un período determinado, generalmente 4 semanas. Es sinónimo de audiencia acumulada o audiencia no duplicada. La recepción de una transmisión en un hogar, por ejemplo, dice de un número de hogares "reached" o alcanzados.',
    },
    {
      termino: 'Ambiente laboral',
      significado:
        'Se refiere a las políticas de recursos humanos que afectan directamente a los empleados, tales como compensaciones y beneficios, proyección profesional, diversidad, balance trabajo-tiempo libre, horarios flexibles, programas de salud y bienestar, seguridad laboral, planes y beneficios para sus familias y dependientes.',
    },
    {
      termino: 'Anunciante',
      significado:
        'Persona o empresa que desea colocar sus promociones en los soportes publicitarios.',
    },
    {
      termino: 'Asertividad',
      significado:
        'Es aquella habilidad personal que nos permite expresar de forma adecuada nuestras emociones frente a otra persona, y lo hacemos sin hostilidad ni agresividad. Una persona asertiva sabe expresar directa y adecuadamente sus opiniones y sentimientos (tanto positivos como negativos) en cualquier situación social.',
    },
    {
      termino: 'Bienestar laboral',
      significado:
        'Se define como el estado deseado por el grupo de personas que laboran en una organización. Este se logra por medio de planes, programas y proyectos que, a partir de la gestión, involucran elementos dinámicos que buscan mejorar la cotidianidad laboral y, a su vez, la condición personal, familiar y social.',
    },
    {
      termino: 'Branding',
      significado:
        'La práctica de crear prestigio y gran valor a un producto con apoyo de marketing; dicha marca puede estar asociada o no al nombre de la empresa. Generar y potenciar la imagen de marca. Cuando se coloca un banner en una página no solo se consiguen clics y ventas, sino que el anunciante está potenciando también su imagen de marca.',
    },
    {
      termino: 'Capacitación',
      significado:
        'Es la adquisición de conocimientos técnicos, teóricos y prácticos que van a contribuir al desarrollo del individuo en el desempeño de una actividad. Se puede señalar, entonces, que el concepto capacitación es mucho más abarcador.',
    },
    {
      termino: 'Cargo',
      significado:
        'Constituye el vínculo entre los individuos y la organización. En este escenario ingresa el departamento de Recursos Humanos, quienes ayudan a la organización a obtener y mantener una fuerza de trabajo idónea. Quienes trabajan en el departamento de Recursos Humanos deben poseer una comprensión profunda de los diseños de puestos para alcanzar los objetivos propuestos.',
    },
    {
      termino: 'Capital humano',
      significado:
        'Es el valor resultante de la aportación de las personas a las organizaciones.',
    },
    {
      termino: 'Clima organizacional',
      significado:
        'Se refiere al conjunto de propiedades medibles de un ambiente de trabajo, según son percibidas por quienes trabajan en él. Para las empresas, resulta importante medir y conocer el clima organizacional, ya que este puede impactar significativamente los resultados. Numerosos estudios han indicado que el clima organizacional puede hacer la diferencia entre una empresa de buen desempeño y otra de bajo desempeño.',
    },
    {
      termino: 'Comunicación externa',
      significado:
        'Transmisión de mensajes de la organización a públicos externos para mantener con estos una interacción con intenciones operativas, estratégicas, de difusión y de promoción de una buena imagen.',
    },
    {
      termino: 'Comunicación interna',
      significado:
        'Acciones comunicativas entre la organización y sus miembros, y entre ellos mismos, a favor de las buenas relaciones (interacciones rentables para la organización), a través de medios específicos para ello.',
    },
    {
      termino: 'Formación',
      significado:
        'El conjunto de reglas establecidas y exigidas, el trato que se da a los empleados, las entrevistas que con ellos se tenga, el ejemplo de sus jefes, etc., tienden siempre, del modo más sistemático que sea posible, a formar en aquellos hábitos de limpieza, de estabilidad emocional, de compañerismo, de aprecio por la negociación que los ha recibido, de atención, de iniciativa, de asiduidad y de cuidado.',
    },
    {
      termino: 'Identidad corporativa',
      significado:
        'Es la manifestación física de la marca. Hace referencia a los aspectos visuales de la identidad de una organización.',
    },
    {
      termino: 'Reclutamiento de personal',
      significado:
        'Es un conjunto de procedimientos orientado a atraer candidatos potencialmente calificados y capaces de ocupar cargos dentro de la empresa. Es, en esencia, un sistema de información, mediante el cual la empresa divulga y ofrece al mercado de recursos humanos las oportunidades de empleo que pretende llenar. Para ser eficaz, el reclutamiento debe atraer una cantidad de candidatos suficiente para abastecer de modo adecuado el proceso de selección.',
    },
    {
      termino: 'Storyboard',
      significado:
        'Presentación gráfica de las secuencias principales del spot y la locución que les acompañan. Se utiliza para materializar las ideas del departamento creativo y como material de presentación al cliente.',
    },
  ],
  complementario: [
    {
      texto:
        'Bedoya, E. (2018). Guía práctica del sistema de gestión de la seguridad y salud en el trabajo. Alfaomega.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/guia-practica-del-sistema-de-gestion-de-la-seguridad-y-salud-en-el-trabajo?location=9',
    },
    {
      texto:
        'Beltrán, A., Melchor, M. y Álvarez, A. (2014). Percepción de los usuarios sobre la imagen corporativa y su relación con la identidad institucional. Universidad Autónoma de Occidente.',
      tipo: 'Articulo ',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/50977 ',
    },
    {
      texto:
        'Chiavenato, I. (2020). Gestión del talento humano (5ª ed.). McGraw-Hill.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=9350&pg=1 ',
    },
    {
      texto:
        'Estrella, A., y Segovia, C. (2016). Comunicación integrada de marketing. ESIC.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/comunicacion-integrada-de-marketing?location=16',
    },
    {
      texto: 'García, J. (2016). Técnicas de diseño gráfico corporativo. CCEP.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/51090?page=1 ',
    },
    {
      texto:
        'Kotler, P. y Armstrong, G. (2017). Marketing (16ª ed.). Pearson Educación.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4426&pg=1 ',
    },
    {
      texto:
        'Martínez, R. (2016). Servicio al cliente interno. Todos somos clientes y todos tenemos clientes. Ediciones de la U.',
      tipo: 'Libro',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5746&pg=1 ',
    },
    {
      texto:
        'Ocampo, M. (2014) Comunicación Empresarial (2ª ed.). ECOE Ediciones.',
      tipo: 'Libro',
      link:
        'https://www-digitaliapublishing-com.bdigital.sena.edu.co/visor/36923 ',
    },
    {
      texto:
        'O’Guinn, T., Allen, C. y Semenik, R. (2013). Publicidad y promoción integral de marca (6ª ed.). Cengage Learning.',
      tipo: 'Libro',
      link:
        'https://www.academia.edu/36447090/Publicidad_y_Promoci%C3%B3n_Integral_de_Marca_Publicidad_y_Promoci%C3%B3n_Integral_de_Marca',
    },
    {
      texto:
        'Pintado, M. (2013). Imagen corporativa : influencia en la gestión empresarial (2ª ed.). ESIC.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/imagen-corporativa?location=311',
    },
    {
      texto:
        'Rueda, M. y Zambrano, M. (2018). Manual De Ergonomía Y Seguridad (2ª ed.). Alfaomega.',
      tipo: 'Libro',
      link:
        'https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/auth/ip?intended_url=https://www-alphaeditorialcloud-com.bdigital.sena.edu.co/reader/manual-de-ergonomia-y-seguridad-segunda-edicion-1?location=172',
    },
  ],
}
