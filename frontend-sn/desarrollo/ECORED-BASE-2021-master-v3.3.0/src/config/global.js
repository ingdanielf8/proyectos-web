export default {
  global: {
    componenteFormativo: 'Bocetado y modelado digital',
    descripcionCurso:
      'Este módulo tiene como objetivo guiar al estudiante en el desarrollo de habilidades y destrezas para la creación de gemelos digitales mediante el conocimiento y la aplicación del sistema CAD NX. ',
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
        titulo: 'Conceptos básicos del sistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Interfaz',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Capas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistemas de coordenadas',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Croquizado en 2D',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelado en 3D',
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
      referencia: 'Alcrudo. J. (s.f). Formación NX CAD básico. Academia.edu. ',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO',
    },
    {
      referencia:
        'd3plus, (2018, julio 16). Tutorial básico introductorio a modelado CAD NX 10. [Video]. YouTube.',
      link: 'https://youtu.be/iGTENoC7ryg ',
    },
    {
      referencia:
        'Dep Fab Mecanica Marianao, (2019, noviembre 20). NX Curso drawing y acotado FMC0 M01. [Video]. YouTube',
      link: 'https://youtu.be/pFcMlBL5Ps0 ',
    },
    {
      referencia:
        'Domínguez. J. (2018). Siemens NX 12.0 for Designers (11a ed.) Sham tickoo. ',
      link: '',
    },
    {
      referencia:
        'Inge Lui, (2020, mayo 11). Unidad 2 ensambles utilizando NX. [Video]. YouTube. ',
      link: 'https://youtu.be/J5h38RBj_hI',
    },
    {
      referencia:
        'Leu. M., Tao. W., Ghazanfari. A. y Kolan. K., (s.f). NX12 for Engineering Desing. Missouri University of Science and Technology',
      link:
        'https://me5763.github.io/lab/assets/books/NX-12-for-Engineering-Design.pdf',
    },
    {
      referencia:
        'Mundo tutorial, (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial. [Video]. YouTube. ',
      link: 'https://youtu.be/UeJ1Yegal9E ',
    },
    {
      referencia: 'Siemens. (2020). Documentación didáctica.',
      link:
        'https://new.siemens.com/es/es/productos/automatizacion/sce/documentacion-didactica.html',
    },
    {
      referencia: 'Tao, W. (s.f). NX 12 for Engineering Design. Academia.edu',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design',
    },
  ],
  glosario: [
    {
      termino: 'Agujero',
      significado:
        'Crea una cavidad a uno o más cuerpos sólidos en una pieza o ensamble, con opciones de abocardado, avellanado o roscado.  ',
    },
    {
      termino: 'CAD',
      significado:
        'El diseño asistido por ordenador (CAD) consiste en el uso de programas de ordenador para crear, modificar, analizar y documentar representaciones gráficas en 2D o 3D de objetos físicos.',
    },
    {
      termino: 'CAD CAM',
      significado:
        'CAD CAM es la integración del diseño asistido por ordenador y el software de fabricación asistido por ordenador, con el objetivo de obtener una gestión de los cambios del diseño sencillo, una concepción del diseño simultánea y una configuración del proceso de fabricación flexible, especialmente para el diseño y la fabricación de prototipos y de piezas acabadas.',
    },
    {
      termino: 'Cascara ',
      significado:
        'Creación de un vaciado, especificando un espesor de pared, para crear una cavidad.',
    },
    {
      termino: 'Chaflán ',
      significado: 'Bisel generado en las aristas de un sólido.',
    },
    {
      termino: 'Croquis',
      significado:
        'El croquis es un conjunto definido de curvas bidimensionales y puntos que se encuentra en un plano o ruta específico.',
    },
    {
      termino: 'Desmoldeo ',
      significado:
        'Creación de un ángulo de salida sobre la cara de un sólido.',
    },
    {
      termino: 'Extrusión ',
      significado:
        'Operación que crea un cuerpo sólido o laminar al seleccionar una sección de curvas, bordes, caras, croquis o figuras de curvas.',
    },
    {
      termino: 'Figura de simetría',
      significado:
        'Creación de una copia simétrica de una operación tomado un plano de referencia.',
    },
    {
      termino: 'Gemelo Digital',
      significado:
        'Un gemelo digital es una representación virtual de un producto o proceso físico que se utiliza para comprender y predecir las características de rendimiento de su equivalente físico. Los gemelos digitales se utilizan a lo largo de todo el ciclo de vida del producto para simular, predecir y optimizar el producto y el sistema de producción antes de invertir en prototipos y activos físicos.',
    },
    {
      termino: 'NX',
      significado:
        'El software NX es una solución integrada de diseño, ingeniería y fabricación de productos que le ayuda a ofrecer productos innovadores de forma más rápida y eficiente.',
    },
    {
      termino: 'Patrón de figura',
      significado:
        'Creación de una copia de una o más operaciones en forma de matriz lineal, circular o poligonal.',
    },
    {
      termino: 'Redondeo',
      significado:
        'Creación de un filete curvo entre caras aristas de un sólido. ',
    },
    {
      termino: 'Revolución ',
      significado:
        'Operación que crea un sólido a partir de la rotación de una curva o croquis alrededor de un eje.',
    },
  ],
  complementario: [
    {
      texto: 'Alcrudo. J. (s.f). Formación NX CAD básico. Academia.edu.',
      tipo: 'Capítulo de libro',
      link: 'https://www.academia.edu/29809639/FORMACION_NX_CAD_BASICO ',
    },
    {
      texto: 'Tao, W. (s.f). NX 12 for Engineering Design. Academia.edu.',
      tipo: 'Libro',
      link: 'https://www.academia.edu/37546347/NX_12_for_Engineering_Design ',
    },
    {
      texto:
        'Dep Fab Mecanica Marianao, (2019, noviembre 20). NX Curso drawing y acotado FMC0 M01. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/pFcMlBL5Ps0 ',
    },
    {
      texto:
        'Domínguez. J., (2018). Siemens NX 12.0 para diseñadores (11a edición) Sham tickoo. Academia.edu.',
      tipo: 'Presentación',
      link:
        'https://www.academia.edu/44135303/Siemens_NX_12_0_for_Designers_11th_Edition_Sham_tickoo ',
    },
    {
      texto:
        'Inge Lui, (2020, mayo 11). Unidad 2 ensambles utilizando NX. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/J5h38RBj_hI ',
    },
    {
      texto:
        'Leu. M., Tao. W., Ghazanfari. A. y Kolan. K., (s.f). NX12 for Engineering Desing. Missouri University of Science and Technology.',
      tipo: 'Capítulo de libro',
      link:
        'https://me5763.github.io/lab/assets/books/NX-12-for-Engineering-Design.pdf',
    },
    {
      texto:
        'Mundo tutorial, (2017, octubre 10). Siemens NX. Pieza 3D. Tutorial. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/UeJ1Yegal9E ',
    },
    {
      texto: 'Siemens. (2020). Documentación didáctica. ',
      tipo: 'Página web',
      link:
        'https://new.siemens.com/es/es/productos/automatizacion/sce/documentacion-didactica.html ',
    },
    {
      texto:
        'd3plus, (2018, julio 16). Tutorial básico introductorio a modelado CAD NX 10. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/iGTENoC7ryg ',
    },
  ],
  creditos: {
    liderEquipo: {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico ',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    contenidoInstruccional: [
      {
        nombre: 'Oscar Riveros',
        cargo: 'Experto Temático',
        centro: 'Centro Diseño y Metrología',
      },
      {
        nombre: 'José Eduardo Chaves Peña',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
      {
        nombre: 'Carlos Andrés Ossa Jiménez',
        cargo: 'Experto Temático',
        centro: 'Centro de Diseño Tecnológico Industrial',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro Gestión Industrial.',
        regional: 'Regional Distrito Capital. ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital.',
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
