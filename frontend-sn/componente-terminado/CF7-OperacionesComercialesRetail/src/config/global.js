export default {
  global: {
    componenteFormativo: 'Destrezas en el punto de pago',
    descripcionCurso:
      'El propósito de este componente de formación es ayudar a los aprendices a desarrollar la destreza en el manejo de caja, manejo de dinero, transacciones financieras y otras funciones que se le asignan a los cajeros en los retail.',
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
        titulo: 'Recaudo en el punto de pago',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Base de la caja',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Apertura de la caja',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Validación de transacciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Precios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Legalidad de medios de pago',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Seguridad y herramientas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Excedentes de pago',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Devoluciones',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Empaque de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Descripción del empaque',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Normativa y clasificación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Técnicas de empaque',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Empaque de productos según naturaleza',
            hash: 't_3_5',
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
        'Actualícese. (2018). Cierre o arqueo de caja diario: errores y complicaciones que se pueden presentar en el proceso.',
      link:
        'https://controlinventarios.wordpress.com/2018/12/11/la-complejidad-de-la-devolucion-de-mercancias/ ',
    },
    {
      referencia:
        'Clasificación de envases. (2017). Clasificación de los envases según su función.',
      link:
        'https://clasificaciondeenvases.blogspot.com/2017/10/clasificacion-de-envases-en-funcion-de.html',
    },
    {
      referencia:
        'LogDist. (2020). Normas ISO para empaques y embalajes: las reglas de calidad.',
      link:
        'https://es.vmalogdist.com/normas-iso-para-empaques-y-embalajes-las-reglas-de-calidad/',
    },
    {
      referencia: 'UMNG. (s.f.) Empaque y embalaje. UMNG.',
      link:
        'http://virtual.umng.edu.co/distancia/ecosistema/ovas/administracion_empresas/logistica/unidad_4/DM.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Apertura',
      significado:
        'Acto con que se da comienzo a las funciones de una asamblea, centro o institución en la sesión de apertura de cualquier proceso.',
    },
    {
      termino: 'Caja',
      significado:
        ' Aparato usado en los comercios y establecimientos públicos para realizar automáticamente operaciones matemáticas básicas y guardar el dinero.',
    },
    {
      termino: 'Cajero',
      significado:
        ' Persona encargada de la entrada y salida de caudales en un comercio o un banco.',
    },
    {
      termino: 'Cliente',
      significado:
        ' Persona que utiliza habitualmente los servicios de un profesional o de una empresa.',
    },
    {
      termino: 'Clientela',
      significado:
        'Conjunto de clientes de una empresa, de un establecimiento o de un profesional.',
    },
    {
      termino: 'Criptograma',
      significado: 'Documento escrito en clave.',
    },
    {
      termino: 'Durabilidad',
      significado:
        ' Cualidad de duradero, la durabilidad del acero inoxidable está demostrada.',
    },
    {
      termino: 'Embalaje',
      significado:
        'Operación de embalar objetos para ser transportados, en esta sección se realiza el embalaje de la mercancía.',
    },
    {
      termino: 'Empaque',
      significado: ' Conjunto de materiales con que se envuelve una cosa.',
    },
    {
      termino: 'Hándicap',
      significado: 'Desventaja.',
    },
    {
      termino: 'Hard tag',
      significado:
        'Dispositivo de seguridad o identificación electrónica que se adhiere a la mercancía y a las cajas de envío.',
    },
    {
      termino: 'Higroscópico',
      significado: 'Que tiene la propiedad de absorber o exhalar la humedad.',
    },
    {
      termino: 'POS',
      significado:
        'Terminal punto de venta (TPV), también denominado POS (Point of Sale, en inglés) es un dispositivo que en un establecimiento comercial permite gestionar tareas relacionadas con la venta.',
    },
    {
      termino: 'Punto de pago',
      significado:
        'Sitio donde están ubicadas las cajas registradoras en los establecimientos comerciales.',
    },
    {
      termino: 'Recaudo',
      significado: ' Bien custodiado, en lugar seguro y controlado.',
    },
    {
      termino: 'Tag’s',
      significado:
        'Etiqueta (lenguaje de marcado), en los lenguajes informáticos de marcado.',
    },
    {
      termino: 'Transacciones',
      significado:
        'Trato o convenio por el cual dos partes llegan a un acuerdo comercial, generalmente de compraventa.',
    },
  ],
  complementario: [
    {
      texto:
        'Vértice, P. (2008) Gestión del punto de venta.  Editorial Publicaciones Vértice.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/59423?page=108 ',
    },
    {
      texto:
        'Muñiz, M. (2015). Promociones en el punto de venta. Difusora Larousse - Ediciones Pirámide.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/48972?page=29 ',
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
        nombre: 'Esperanza Cardona Grisales',
        cargo: 'Instructora ',
        centro:
          'Regional Valle – Centro de Gestión Tecnológica de Servicios CGTS',
      },
      {
        nombre: 'Jaime Alberto Pérez Posada',
        cargo: 'Instructor',
        centro: 'Regional Antioquia - Centro de Comercio SENA',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
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
        nombre: 'Zvi Daniel Grosman ',
        cargo: 'Diseñador instruccional',
        centro: 'Regional Tolima - Centro Agropecuario La Granja ',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
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
