export default {
  global: {
    componenteFormativo: 'Construcción de API',
    descripcionCurso:
      'En este componente formativo se abordarán los conceptos relacionados con la configuración del entorno de desarrollo como espacio de trabajo para la API REST. Se revisarán las buenas prácticas de los estándares de codificación para el desarrollo de la API, la cual será construida con las tecnologías de Node.js, Express y MongoDB y se abordará el renting de la API creada a través de la herramienta Postman.',
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
        titulo: 'Alistamiento del entorno de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos sobre el entorno de desarrollo integrado IDE',
            hash: 'encabezados',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Instalación del Visual Studio Code',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Instalación y configuración del Node.js y npm',
            hash: 'parrafos',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Instalación de módulos',
            hash: 'parrafos',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Codificación de la API REST con Node.js',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Buenas prácticas en la codificación de Node.js ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Desarrollo de la API REST',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Testing de la API REST con Postman',
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
        'Choque, J. C. (2016). Adición de estándares de codificación node.js. GitLab',
      link:
        ' https://gitlab.agetic.gob.bo/dbarra/bolivia-libre/commit/1ff84b6ae70f0e9436f6e6ddc7f3e060bc9556ad ',
    },
    {
      referencia: 'Chrome web store. (2021). Postman',
      link:
        ' https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=es-419 ',
    },
    {
      referencia: 'Express. (2021). Direccionamiento básico. ',
      link: 'https://expressjs.com/es/starter/basic-routing.html ',
    },
    {
      referencia: 'Gómez, D. (2017). Nodemon. Vortexbird',
      link:
        ' https://vortexbird.com/nodemon/#:%7E:text=Nodemon%20es%20una%20utilidad%20que,desarrollo%20de%20aplicaciones%20en%20nodojs ',
    },
    {
      referencia:
        'López, A. (2021). Qué es Postman y para qué sirve. OpenWebinars',
      link: 'https://openwebinars.net/blog/que-es-postman/ ',
    },
    {
      referencia: 'Mozilla. (2021). Await. MDN Web Docs. ',
      link:
        'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/await ',
    },
    {
      referencia:
        'Mozilla. (2021). Haciendo la programación asíncrona más fácil con async y await. MDN Web Docs. ',
      link:
        'https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Async_await ',
    },
    {
      referencia:
        'Mozilla. (2021). Introducción a Express/Node. MDN Web Docs. ',
      link:
        'https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction ',
    },
    {
      referencia: 'Nodejs.org. (2021). Acerca de Node.js. Node.js',
      link: ' https://nodejs.org/es/about/ ',
    },
    {
      referencia: 'npm. (2021). About npm. ',
      link: 'npm. (2021). About npm. ',
    },
    {
      referencia: 'Red Hat. (2021). El concepto de IDE.',
      link: 'https://www.redhat.com/es/topics/middleware/what-is-ide ',
    },
    {
      referencia: 'Whyte, A. (2021). Google JavaScript Style Guide.',
      link: 'https://google.github.io/styleguide/javascriptguide.xml ',
    },
  ],
  glosario: [
    {
      termino: 'Identación',
      significado:
        'Dentro del contexto de desarrollo de software identar es un término que significa mover un bloque de código hacia la derecha insertando espacios o tabulaciones, para así separarlo del margen izquierdo y distinguirlo mejor del texto adyacente, es decir, organizar mejor el código. La identación se considera un principio fundamental de buena práctica de la programación de software.',
    },
    {
      termino: 'JSON',
      significado:
        'JavaScript Object Notation (JSON) es un formato basado en texto estándar que se utiliza para representar datos estructurados en la sintaxis de objetos de JavaScript. Se utiliza principalmente para transmitir datos en aplicaciones web (como es el caso de enviar algunos datos desde el servidor al cliente, por lo tanto, estos datos pueden ser mostrados en páginas web o viceversa).',
    },
    {
      termino: 'Localhost',
      significado:
        'En el contexto de las redes de computadoras localhost es una computadora que ejecuta un programa. La computadora que se tiene al frente funciona también como un servidor virtual; este modo es comúnmente utilizado para realizar pruebas en el desarrollo web.',
    },
    {
      termino: 'Manejadores o handlers de eventos',
      significado:
        'En la programación con JavaScript un evento por sí mismo carece de utilidad; para que los eventos resulten útiles o aplicables se debe asociar funciones o código JavaScript a cada evento. De esta forma, cuando se produce un evento de manera inmediata se ejecuta el código indicado, por lo que la aplicación responde ante cualquier evento que se produzca durante su ejecución. Las funciones o código JavaScript que se realizan para cada evento se denominan "manejador de eventos”.',
    },
    {
      termino: 'Middleware',
      significado:
        'Es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que esa petición llega al servidor. De esta manera son funciones que tienen acceso al objeto de solicitud (req), el objeto de respuesta (res) y la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación.',
    },
  ],
  complementario: [
    {
      texto:
        'Coding, G. (2020). Cómo instalar Node.js en Windows 10 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgtB31gXkoA ',
    },
    {
      texto:
        'Dominicode. (2018). Cómo usar Postman, en español [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qsejysrhJiU ',
    },
    {
      texto:
        'DiSimone, K. (2020). mLab to Atlas for existing NS users [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hXSLBACjYQo ',
    },
    {
      texto: 'OpenJS Foundation. (s.f.). Node.js.',
      tipo: 'Software',
      link: 'https://nodejs.org/es/ ',
    },
    {
      texto: 'Microsoft. (2021). Visual Studio Code. ',
      tipo: 'Software',
      link: 'https://code.visualstudio.com/docs?dv=win ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Santiago Muñoz de la Rosa',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de Teleinformática y Producción Industrial',
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
        nombre: 'Ana Catalina Córdoba Sus ',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de diseño y metrología.',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
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
