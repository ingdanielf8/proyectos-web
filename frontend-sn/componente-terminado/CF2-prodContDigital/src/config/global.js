export default {
  global: {
    componenteFormativo: 'Producción de contenidos digitales.',
    descripcionCurso:
      'La composición de efectos visuales consiste en la creación de productos a partir de la manipulación y combinación de elementos digitales, con el fin de generar piezas que transmitan la sensación de unidad en la imagen resultante, independiente de si es real o no. Este concepto puede aplicarse tanto a imágenes fijas, en movimiento o audiovisuales y páginas web; aprendizajes que serán abordados en el presente componente formativo.',
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
        titulo: 'Montaje audiovisual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Edición de imagen',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Edición de audio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Edición de video',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Creación web',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Diseño web',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Arquitectura y diagramación web',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Maquetación web',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Tipos de medios y plataformas digitales',
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
  referencias: [
    {
      referencia:
        'Blázquez Nieto, A. (2019). Nuevas Tecnologías Aplicadas a la Vida: Smartphone, Tablet E Internet.',
      link:
        'https://docplayer.es/78951030-Nuevas-tecnologias-aplicadas-a-la-vida-smartphone-tablet-e-internet.html',
    },
    {
      referencia: 'Equipo 09, EvntosSv.com. (2019). Maquetacion Web.',
      link: 'https://evntossv.neocities.org/maquetacion.html',
    },
    {
      referencia:
        'Faulker, A. & Gyncild, B. (2015). Adobe Photoshop CC 2014. Madrid: Anaya Multimedia.',
      link: '',
    },
    {
      referencia: 'Fernández. (2005). Imagen Digital.',
      link:
        'http://comunicacion3unlz.com.ar/wp-content/uploads/2014/07/Imagen-digital.pdf',
    },
    {
      referencia: 'Garrett, J. J. (2002). ia/recon (Spanish)',
      link: 'http://www.jjg.net/ia/recon/spanish.html',
    },
    {
      referencia:
        'Leyva, Alarcón, Barrera & Ortegón. (2017). Exploración del diseño y arquitectura web. Aplicación a páginas electrónicas del sector bancario desde la perspectiva del usuario. Revista Escuela de Administración de Negocios, 80, enero-junio, 2016, 41-57, Universidad EAN.',
      link: '',
    },
    {
      referencia:
        'Lozano Botache, J. P. (20138). Narraciones cinematográficas: Potencialidades pedagógicas y de investigación cualitativa, desde el cine colombiano [Tesis de doctorado. Universidad del Cauca]. Repositorio Unicauca.',
      link: 'https://bit.ly/3sVtKzL',
    },
    {
      referencia:
        'Lourdes Cortés, M. (ed.). (2000). Luces, cámara, acción: textos de cine y televisión. Editorial de la Universidad de Costa Rica.',
      link: '',
    },
    {
      referencia:
        'Montero Miguel, R. (2014). Administración de servicios de transferencia de archivos y contenidos multimedia. Ra-Ma. S.A.',
      link: '',
    },
    {
      referencia:
        'Morville, P. & Rosenfeld, L. (1998). Information architecture for the World Wide Web. O’Reilly.',
      link: '',
    },
    {
      referencia:
        'Ordóñez, C. A. (2005). Formatos de imagen digital. Revista Digital Universitaria, 5(7), 1-10. ',
      link: 'http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf',
    },
    {
      referencia:
        'Racionero, A. (2008). El lenguaje cinematográfico. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española: Diccionario de la lengua española, 23.ª ed. [versión 23.4 en línea].',
      link: 'https://dle.rae.es',
    },
    {
      referencia: 'R M. (2014, 2 julio). Los modos de color en diseño gráfico.',
      link:
        'https://blog.agencialanave.com/los-modos-de-color-en-diseno-grafico/',
    },
    {
      referencia:
        'Rosenfeld, L. & Morville, P. (1998). Information Architecture for the Wold Wide Web. Cambridge: O Reilly.',
      link: '',
    },
    {
      referencia:
        'Shum, Y. M. (2021). Situación Global Mobile 2020 - 5.190 millones de usuarios únicos.',
      link: 'https://yiminshum.com/mobile-movil-app-2020/',
    },
    {
      referencia:
        'Viveros, M. A. T. (2005). Introducción a la Creación de Imágenes Digitales para Multimedia Interactivo.',
      link:
        'https://programas.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1161/mod_resource/content/1/contenido/index.html',
    },
  ],
  glosario: [
    {
      termino: 'Buscador',
      significado: 'Herramienta web que permite ubicar contenidos en la red.',
    },
    {
      termino: 'Declaración CSS',
      significado:
        'Es la suma de la propiedad más el valor y se encuentra siempre entre dos corchetes. Si el selector es la parte del código que dice en qué parte se ha de aplicar la Regla CSS, la declaración explica en qué consisten las instrucciones.',
    },
    {
      termino: 'Etiqueta',
      significado: 'Cada uno de los elementos del lenguaje HTML.',
    },
    {
      termino: 'Formatos',
      significado:
        'Se les llama formatos generalmente a cada tipo de archivo. Ejemplo: JPG, GIF.',
    },
    {
      termino: 'Hosting',
      significado:
        'Sinónimo de servidor y también se le conoce a los servidores que albergan como "HOST".',
    },
    {
      termino: 'HTML',
      significado:
        'Hypertext Markup Language o lenguaje de marcado de hipertextos. Destinado a simplificar la escritura de documentos estándar. Es la base estructural en la que están diseñadas las páginas de la World Wide Web.',
    },
    {
      termino: 'HTTP',
      significado:
        'Hypertext Transfer Protocol o protocolo de transferencia de hipertexto. Es el mecanismo de intercambio de información que constituye la base funcional de la World Wide Web.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'Puede utilizarse para definir una secuencia de instrucciones para su procesamiento por un computador.',
    },
    {
      termino: 'Multimedia',
      significado:
        'Combinación de varias tecnologías de presentación de información (imágenes, sonido, animación, video, texto) con la intención de captar tantos sentidos humanos como sea posible.',
    },
    {
      termino: 'Navegador',
      significado:
        'Programa que permite leer documentos en la web y seguir enlaces (links) de documento en documento de hipertexto.',
    },
    {
      termino: 'WWW',
      significado:
        'También conocido simplemente como el Web, es uno de los servicios más populares de Internet. Combina texto con gráficos, imágenes, animaciones e incluso música, enlazados entre sí de tal manera que facilita la navegación por la información dispersa en todo Internet.',
    },
  ],
  complementario: [
    {
      texto: 'Ordóñez, C. A. (2005) Formatos de imagen digital.',
      tipo: 'Revista Digital Universitaria',
      link: 'http://www.revista.unam.mx/vol.6/num5/art50/may_art50.pdf',
    },
    {
      texto: 'HubSpot. (2021). Los 25 mejores editores de fotos en 2021.',
      tipo: 'Articulo',
      link: 'https://blog.hubspot.es/marketing/mejores-editores-de-fotos',
    },
    {
      texto:
        'UNAM. (s.f.). Introducción a la Creación de Imágenes Digitales para Multimedia Interactivo. ',
      tipo: 'Sitio web',
      link:
        'https://programas.cuaed.unam.mx/repositorio/moodle/pluginfile.php/1161/mod_resource/content/1/contenido/index.html',
    },
    {
      texto:
        'Hostinger cursos web. (2021). Cómo dar a un sitio un diseño web responsive: la guía definitiva.',
      tipo: 'Sitio web',
      link:
        'https://www.hostinger.co/tutoriales/sitio-con-diseno-web-responsive',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
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
        nombre: 'Jorge Alberto García',
        cargo: 'Experto Disciplinar',
        centro:
          'Regional Distrito Capital – Centro Para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Paulo César Hernández González',
        cargo: 'Experto Temático',
        centro:
          'Regional Distrito Capital – Centro para la industria de la comunicación gráfica',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital – Centro de Diseño y metrología',
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
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro: 'Centro de diseño y Metrología – Regional Distrito Capital ',
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
