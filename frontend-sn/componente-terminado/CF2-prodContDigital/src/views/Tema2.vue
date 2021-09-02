<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Creación web
    figure
      img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    p.mt-5 La creación o desarrollo de sitios web trascienden el concepto de diseño web y sitúa la labor en aspectos más de tipo técnico, que de manera transversal, se fusionan para generar un producto único que cumpla con unas características definidas, entre ellas, ser agradable a la vista (buen diseño) y ser lo más funcional posible (navegabilidad). También se incluyen aspectos implícitos funcionales como los que define la arquitectura web. 
    .row.mt-5
      .col-12.col-lg-7
        p Pero conseguir un diseño óptimo no solo incluye la integración de contenido visual o conceptos de UX, sino que tiene que ver también con los objetivos planteados por el cliente previamente y la alineación con la estrategia global de la empresa. Igualmente, el uso de herramientas como Google analytics guiarán la toma de decisiones sobre un sitio web para conseguir los resultados esperados. 
        p.mt-3 Finalmente, la construcción de páginas web incluye la producción de contenido que cada día toma más relevancia, al ser esta la herramienta más eficaz para fidelizar nuevos usuarios
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1  Diseño web
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-botones-invertido.p-4.p-md-3.mt-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Desde el punto de vista técnico el diseño web se refiere al uso de los códigos HTML y XML. Según la W3C (World Wide Web Consortium) y desde el punto de vista estructural, el diseñador web crea las páginas utilizando lenguajes de marcado como HTML o XML. En la parte visual de los sitios, el CSS es utilizado para estilizar los elementos escritos en HTML y configurar el layout.
                p.mt-3 Para desarrollar páginas web es necesario seguir un proceso que tiene diferentes etapas, que, si se desarrollan adecuadamente, garantizan el éxito del resultado final. Este proceso está compuesto por las siguientes fases:
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-3.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-12.col-lg-8
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Contacto inicial") Incluye la reunión inicial, la definición de objetivos, realización del briefing, definición del alcance y benchmarking.         
          p.text-small(numero="2" titulo="Planificación") Construcción del mapa de navegación, elaboración del wireframe.  
          p.text-small(numero="3" titulo="Concepto") Elaboración del esquema de contenidos.
          p.text-small(numero="4" titulo="Diseño") Inclusión de elementos visuales y realización de mockups.
          p.text-small(numero="5" titulo="Desarrollo") Definición del CMS, lenguajes de programación, maquetación de wireframes, velocidad, compatibilidad con dispositivos móviles, pruebas, Google Analytics y searc console.
          p.text-small(numero="6" titulo="Lanzamiento") Refinamiento e indexación en los motores de búsqueda.

      .col-4.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-4.svg", alt="Texto que describa la imagen").w-75.margin-0-auto  
    p.mt-5 En la siguiente figura se puede observar en detalle cual es el proceso global, las etapas y las áreas a las que pertenecen.
    .row.mt-5
      .col-10.offset-1.mt-5
        .tarjeta.bg-rojo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-md-2.col-xl-1.ml-5
              img(src="@/assets/template/tema-2-5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 “Diseño web: fases y etapas para su desarrollo”
                  p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página:  
                .col-sm-auto
                  a.boton.bg-verde(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Arquitectura y diagramación web
    .row.mt-5
      .col-12.col-lg-8
        p El diseño y la arquitectura de información de las páginas web son “el resultado de la actividad de clasificar, describir, estructurar y etiquetar los contenidos del sitio”. #[strong (Leyva, Alarcón, Barrera & Ortegón, 2017)]
        p.mt-3 Es así como la arquitectura web incluye pensar en sí el resultado final será un sitio que pueda resolver las necesidades de negocios y servir mejor a las necesidades de los clientes. El arquitecto web diseña y coordina el desarrollo de sitios web, ya que estos son una compleja integración de distintos sistemas (bases de datos, servidores, redes, componentes de backup y seguridad, etc.)
        p Las piezas esenciales de la arquitectura web son principalmente: servidores, bases de datos, redes, HTML, componentes de backup y seguridad, inteligencia de contenidos web, organización de componentes y organización de las llamadas a las páginas o interlinking.
      .col-4.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
    p.mt-5 Por su parte la diagramación es la representación de la arquitectura de los contenidos que tendrá un producto digital y las relaciones entre dichos contenidos. La representación se ha usado desde los comienzos del diseño de software, en forma de organigramas, diagramas de flujo de datos, árboles de decisión, etc. 
    figure.mt-5
      img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-8.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
      .col-12.col-lg-8
        p Al evolucionar las interfaces gráficas de usuario, las labores de representación se ampliaron con los llamados guiones de navegación y guiones de interacción, los cuales consistían en diagramas que representan el funcionamiento de los productos electrónicos que se generaban en ese momento. 
        p.mt-3 Hay que señalar que durante el proceso de arquitectura de Información se usan otras formas de representación, con diferentes objetivos. Por ejemplo, en la aplicación de la técnica de Card Sorting se pueden generar dendrogramas y gráficos de escalamiento multidimensional; otro ejemplo serían las representaciones de las estructuras mentales de los usuarios tras una tormenta de ideas (brainstorming); o los organigramas de la empresa por la cual se crea el producto digital. En la siguiente figura se puede ver representado el proceso:
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 1
        p Esquema de la Arquitectura de la información web
        figure.mt-4
          img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen")
    p.mt-5 Los autores angloparlantes, pioneros en los temas del diseño y representación del software, dividen estos diagramas en 2 tipos: Blueprints y Wireframes. (Morville & Rosenfeld, 1998) Como sustituto del término Blueprint a veces se usa el de Architecture Map, que significa Mapa de Arquitectura.
    p.mt-4 Ahora profundizaremos sobre las diferentes formas de representar la arquitectura de información y su respectiva diagramación:
    .bloque-texto-a.color-acento-contenido.p-4.p-md-3.mt-4 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
        .col-lg-8
          .bloque-texto-a__texto.p-4
            .h4 Maquetas
            p.mt-3 Es un tipo de diagrama que representa las principales áreas de organización y rotulado (Rosenfeld & Morville, 1998), están enfocados a los aspectos estructurales y de funcionamiento del producto. Generalmente se representan con textos, cajas y flechas. Estos planos o blueprints parten de lo general a lo particular, de lo abstracto a lo concreto. Su función es explicitar iterativamente las decisiones de diseño, con el objetivo de comunicar dichas decisiones al resto de miembros del equipo de desarrollo, o al cliente final.
            p.mt-3 Christina Wodtke conceptualiza los Blueprint como: un plano de diseño es justamente una buena idea llevada a la realidad a través de la escritura (Wodtke, 2002)
    p.mt-5 Los niveles de prototipos son:
    AcordionA.mb-5(tipo="b" clase-tarjeta="bg-verde-claro rounded-20")
      .row(titulo="Prototipos de baja fidelidad o estáticos ")
        .col-4.offset-4.offset-lg-0.align-self-center
          figure
            img(src="@/assets/template/tema-2-11.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .h4.mb-0 El wireframe 
          p de un sitio web es un boceto rápido que puede elaborarse con lápiz y papel y que representa, por medio de recuadros, líneas, trazos, el esquema del contenido, de la interfaz, sistema de navegación y funcionamiento de la página web que se va a diseñar.
          .h4.mb-0 Mockup   
          p.mt-3 En el proceso del diseño web el paso posterior al wireframe es el mockup, que permite tener una idea más clara de cómo se verá el sitio web. Este paso es más visual y se tienen en cuenta las dimensiones, la organización de los elementos, el texto, las imágenes, iconos, logos, etc.  
      div(titulo="Prototipos de fidelidad intermedia").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          p Se trataría de todo el diseño gráfico, visual y llamativo que se incorporará en la web.
      div(titulo="Prototipos de alta fidelidad o dinámicos ").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          ul.lista-ul
            li 
              i.fas.fa-angle-right
              | Es la página web en sí misma en formato HTML
            li 
              i.fas.fa-angle-right
              | En la siguiente figura se presentan ejemplos de maquetas.
    .row.mt-5
      .col-10.offset-1.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4 Frameworks
            p Un framework es una estructura base utilizada como punto de partida para elaborar un proyecto con objetivos específicos. El framework es una especie de plantilla, un esquema conceptual, que simplifica la elaboración de una tarea, ya que solo es necesario complementarlo de acuerdo a lo que se quiere realizar.
    .row.mt-4
      .col-10.offset-1.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-15.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4 Frontend
            p Este concepto se usa para hacer referencia a la presentación de las aplicaciones que se encarga de definir cómo se verán las cosas y cómo se comportará la interacción con el usuario. Frontend es la parte de una aplicación que interactúa con los usuarios, es conocida como el lado del cliente. Básicamente es todo lo que se ve en la pantalla al  acceder a un sitio web o aplicación: tipos de letra, colores, adaptación para distintas pantallas (RWD), los efectos del ratón, teclado, movimientos, desplazamientos, efectos visuales y otros elementos que permiten navegar dentro de una página web. Este conjunto crea la experiencia del usuario. Un desarrollador frontend debe conocer, al menos, los siguientes lenguajes de programación: HTML5, CSS3, JavaScript, Jquery, Ajax.z
    .h4.mt-5 Software para hacer diagramas
    p.mt-5 El diseño de diagramas también se puede realizar a través de plataformas o herramientas digitales. Para una mejor comprensión de los mismos se han clasificado en dos grupos: los que originalmente fueron ideados para hacer diagramas y los que no fueron pensados para diagramación, pero que también pueden usarse con este objetivo ya que son poderosas herramientas de diseño gráfico. 
    p.mt-5 Algunas aplicaciones software que fueron ideadas para hacer diagramas son:
    .row.mt-5
      .col-10.offset-1
        SlyderD(:datos="datosSlyder3")
    p.mt-5 En cambio las aplicaciones software que no fueron ideadas específicamente para hacer diagramas pueden ser:
    .row.mt-5
      .col-4.py-5.w-31.bg-verde-claro.rounded-20-top
        figure
          img(src="@/assets/template/tema-2-22.png", alt="Texto que describa la imagen").w-25.margin-0-auto
      .col-4.position-relative.w-31.mx-3.bg-verde-claro.rounded-20-top
        figure(style="position:absolute; top:20%; left:2%;")
          img(src="@/assets/template/tema-2-23.png", alt="Texto que describa la imagen").w-25.margin-0-auto
      .col-4.mx-0.position-relative.w-31.bg-verde-claro.rounded-20-top
        figure(style="position:absolute; top:20%; left:2%;")
          img(src="@/assets/template/tema-2-24.png", alt="Texto que describa la imagen").w-25.margin-0-auto    
    .row.mt-4
      .col-4.w-31.p-0
        .h4.mb-0 Corel Draw
        p.text-small http://www.corel.com 
      .col-4.w-31.p-0.mx-3
        .h4.mb-0 Adobe [antes Macromedia] FreeHand
        p.text-small  http://www.adobe.com
      .col-4.w-31.p-0
        .h4.mb-0 Adobe Illustrator
        p.text-small http://www.adobe.com
    .row.mt-5
      .col-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-4.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-25.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Otra opción para hacer la diagramación de sitios web es la propuesta por Jesse James Garret #[strong (http://www.jjg.net)] que consiste, según el propio autor, en un “vocabulario visual para describir arquitectura de información y diseño de interacción” #[strong (Garret, 2002)]. El sistema de diagramación está compuesto de símbolos geométricos, flechas y líneas. El vocabulario visual de Garret es muy útil para representar tanto el diseño de interacción, como la estructura conceptual y organizativa del contenido. #[strong (Garret, 2002)]. Esta notación gráfica está concebida para realizar un diseño de lo general a lo concreto, ya que sigue el principio de la simplificación de representación a partir de cajas (boxes) y flechas (arrows). Este principio es el que le facilita a cualquier diseñador comunicar arquitecturas de información de forma fácilmente comprensible.
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3  Maquetación web
    .row.mt-5
      .col-12.col-lg-7
        p Este proceso inicia a partir de la construcción del mapa de navegación donde se planea el contenido y la organización de cada página y subpágina de un sitio web. 
        p.mt-3 La maquetación web consiste en definir, organizar y posicionar el contenido de la página, atendiendo a una estructura que se adecue a la lectura y a una presentación atractiva de la información y un buen diseño de la experiencia de usuario. Esta maquetación implica el conocimiento y manejo de algunos lenguajes de programación.
        p.mt-3 Para el proceso de maquetación se debe planificar lo siguiente: 
      .col-4.col-lg-5.offset-4.offset-lg-0.align-self-center
        figure  
          img(src="@/assets/template/tema-2-26.png" , alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-2
            figure
              img(src="@/assets/template/tema-2-27.png", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center
            p.mb-0 Entendemos el desempeño Fijar unas zonas de trabajo que soportan la estructura de contenidos del sitio web y generar los recursos necesarios que faciliten la futura carga, siempre pensando en las necesidades reales de la estructura de contenido. 
    .row.mt-4
      .col-10.offset-1.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-2
            figure
              img(src="@/assets/template/tema-2-28.png", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center
            p.mb-0 Separar la presentación del contenido para facilitar el mantenimiento del sitio y las funcionalidades de la web de los archivos que definen las propiedades gráficas (.css). Además, este proceso optimiza la velocidad de carga de la web y permite la personalización del sitio según necesidades de los usuarios.
    .row.mt-4
      .col-10.offset-1.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-2
            figure
              img(src="@/assets/template/tema-2-29.png", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center
            p.mb-0 Separar la Utiliza estándares en desarrollo de la maqueta, se recomienda el uso de los estándares web (conjunto de recomendaciones lideradas por la W3C) que permite mostrar la información de forma universal, robusta y poder acceder al mayor número de usuarios independientemente del dispositivo o la tecnología que usen.
    p.mt-5 Así mismo, en la maquetación web se deben tener en cuenta la interfaz gráfica de usuario o GUI (Graphic User Interface) porque esta constituye el entorno visual de imágenes y objetos mediante el cual una máquina y un usuario interactúan. Es el contenido gráfico mediante el cual se visualiza información del equipo en una pantalla. Casi todos los programas tienen alguna clase de interfaz visual, que sirve al mismo tiempo para mostrar información al usuario.
    .h4.mt-5 Lenguajes de programación para Fronted
    p.mt-5 Para introducir los lenguajes de programación más usados para el diseño web, es necesario definir primero el Frontend como parte fundamental del desarrollo web, lo cual se indica a continuación:
    .h4.mt-5 Frontend
    figure.mt-5
      img(src="@/assets/template/tema-2-30.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9
        p Este concepto se usa para hacer referencia a la presentación de las aplicaciones, ya que se encarga de definir cómo se verán las cosas y cómo se comportará la interacción con el usuario. 
        p.mt-3 Frontend es la parte de una aplicación que interactúa con los usuarios; básicamente, es todo lo que se ve en la pantalla al acceder a un sitio web o aplicación: tipos de letra, colores, botones, adaptación para distintas pantallas (RWD), los efectos del ratón, teclado, movimientos, desplazamientos, menús efectos visuales y otros elementos que permiten navegar dentro de una página web. Este conjunto crea la experiencia del usuario. Esta área no trata directamente con bases de datos, servidores y todas las aplicaciones de back-end complejas, pero aborda la usabilidad, los efectos visuales y la velocidad de carga, entre otros detalles.
        p.mt-3 Un desarrollador frontend debe conocer, al menos, los siguientes lenguajes de programación: HTML5, CSS3, JavaScript, Jquery, Ajax. Entre los estándares más utilizados en maquetación web están los siguientes:
      .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-31.svg", alt="Texto que describa la imagen")
    .h4.mt-5 HTML
    p.mt-5 Se trata de una sigla que corresponde a Hyper Text Markup Language, es decir, Lenguaje de Marcas de Hipertexto, que podría ser traducido como Lenguaje de Formato de Documentos para Hipertexto. Es el principal  lenguaje de marcación que se utiliza para el desarrollo de páginas web. Una definición bastante descriptiva es la que se encuentra en la web Next U que habla de que el HTML es un lenguaje abstracto que usan las aplicaciones para representar documentos (se les llama documentos a instancias completas, como lo son las páginas web) y que puede ser transmitido fácilmente por algún medio, como Internet. Los navegadores de Internet procesan e interpretan documentos descritos en HTML usando un analizador de HTML.
    figure.mt-5
      img(src="@/assets/template/tema-2-32.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-10
        p El lenguaje HTML está definido por lo que se llama etiquetas, cuyo nombre se delimita usando los símbolos &#60; y &#62;, de la siguiente forma: &#60;etiqueta&#62;. Dichas etiquetas se utilizan para describir algo que se quiere representar en una página web. Por ejemplo: &#60;title&#62; Internet básico, email, descargas y compras en línea &#60;/title&#62; En este ejemplo, la etiqueta &#60;title&#62; se usa para indicar que lo que se pondrá a continuación es el título de la página web #[strong (https://www.nextu.com/blog/que-es-html/9).]
        p.mt-3 HTML5 también es un término de marketing para agrupar las nuevas tecnologías de desarrollo de aplicaciones web: HTML5, CSS3 y nuevas capacidades de JavaScript. HTML4 y HTML5 que son 100% compatibles entre sí. 
        p.mt-3 Las principales etiquetas HTML5 son: 
      .col-4.col-lg-2.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-33.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-3
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Elemento raíz
          li.mt-2 
            i.fas.fa-angle-right
            | Metadatos del documento
          li.mt-2 
            i.fas.fa-angle-right
            | Secciones
          li.mt-2 
            i.fas.fa-angle-right
            | Agrupación de Contenido
          li.mt-2 
            i.fas.fa-angle-right
            | Semántica a nivel de Texto
      .col-8.col-lg-7.align-self-center.offset-2.offset-lg-0
        figure  
          img(src="@/assets/template/tema-2-34.png", alt="Texto que describa la imagen").w-75.margin-0-auto        
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-amarillo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-1.ml-5
              img(src="@/assets/template/tema-2-35.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 “Estructura del código HTML5”
                  p Estimado aprendiz, para profundizar sobre el tema y visualizar un ejemplo puede consultar la siguiente página:
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    .h4.mt-5 CSS
    .row.mt-5
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-36.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-8
        p Las hojas de estilo en cascada, en inglés Cascading Style Sheets, controlan la apariencia visual del sitio web y permiten darle un aspecto único. Esto se consigue con hojas de estilo que se sobreponen sobre otras reglas de estilo y se lanzan basándose en el tipo de entrada, como el tamaño y la resolución de la pantalla del dispositivo.
        p.mt-3 Tras la aparición de la primera versión en 1993, el lenguaje HTML ha ido evolucionando hasta convertirse en un estándar, o en lo que se conoce hoy en día como HTML5, el cual tiene características mucho más robustas, como el audio, video, gráficos SVG y la adaptación a distintos dispositivos. Estos avances han sido posible gracias a las hojas de estilo en cascada.
        p.mt-3 El código CSS es utilizado para organizar la presentación y el aspecto de cualquier página web; es decir, el CSS definirá cómo van a lucir los elementos de un documento HTML. 
    .h4.mt-5 Estructuración técnica de un sitio web
    figure.mt-5
      img(src="@/assets/template/tema-2-37.png", alt="Texto que describa la imagen")
    p.mt-5 Para estructurar un sitio web es importante tener en cuenta algunos pasos consecutivos que son claves para hacerlo de la mejor manera, pensando no solo como fijar la estructura casi a la perfección desde el punto de vista conceptual, sino también en la temática que se presentará en la página web y cómo va a ser expuesta porque sin ello es imposible crear una buena estructura después. Estos son:
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-4.borde-3-der
            figure
              img(src="@/assets/template/tema-2-38.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center.px-4
            p.mb-0 Es la población o conjunto de elementos totales que se pueden contar o medir, por ejemplo, la población de una ciudad.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-4.borde-3-der
            figure
              img(src="@/assets/template/tema-2-39.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center.px-4
            p.mb-0 Hacer estructura de un sitio web con URLS amigables para SEO. Al crear las páginas de la web, lo que se está creando son diferentes URLS o “direcciones” dentro de la misma, partiendo de un dominio común. Detrás de la barra, sin embargo, se necesita poner palabras indicativas. Lo primero que ve Google al rastrear la estructura de un sitio web es la URL. 
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2.py-5.px-4.rounded-20.borde-4-gris
        .row
          .col-4.borde-3-der
            figure
              img(src="@/assets/template/tema-2-40.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-8.align-self-center.px-4
            p.mb-0 Hacer estructura de un sitio web con URLS amigables para SEO. Al crear las páginas de la web, lo que se está creando son diferentes URLS o “direcciones” dentro de la misma, partiendo de un dominio común. Detrás de la barra, sin embargo, se necesita poner palabras indicativas. Lo primero que ve Google al rastrear la estructura de un sitio web es la URL. 
    .row.mt-5
      .col-10.offset-1.mt-5
        .tarjeta.bg-rojo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-md-2.col-xl-1.ml-5
              img(src="@/assets/template/tema-2-41.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 “¿Qué es la maquetación Web?”
                  p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página:  
                .col-sm-auto
                  a.boton.bg-verde(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    .row.mt-3
      .col-10.offset-1
        .tarjeta.bg-amarillo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-xl-1.ml-5
              img(src="@/assets/template/tema-2-42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 “Maquetación de una página Web con HTML y CSS”
                  p Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4  Tipos de medios y plataformas digitales
    .row.mt-5
      .col-12.col-lg-8
        p El desarrollo tecnológico que viene experimentando la sociedad, ha llevado en pocos años a ampliar los conceptos, herramientas y por supuesto los medios referidos a la internet. Al inicio, los sitios o páginas web estaban disponibles sólo a través de los computadores de escritorio; posteriormente surgen los computadores portátiles, para finalmente dar paso a los dispositivos móviles como Smartphone (teléfonos inteligentes) y Tablet. 
        p.mt-3 En este proceso de transformación y especialización surge el concepto de diseño web responsive o adaptativo que consiste en la aplicación de una técnica de diseño web que busca la correcta visualización de una misma página en distintos dispositivos, como ordenadores de escritorio y móviles pasando por Tablet.
        p.mt-3 En la siguiente figura se puede observar que este diseño no consiste en conseguir que se vea lo mismo en todos los dispositivos:
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-43.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 2
        p Diseño responsive
        figure.mt-5
          img(src="@/assets/template/tema-2-44.png", alt="Texto que describa la imagen")
    p.mt-5 De lo que se trata es de redimensionar y colocar los elementos que tendrá la web, de forma que se adapten al ancho de cada dispositivo permitiendo una correcta visualización y una mejor experiencia de usuario. Se caracteriza porque los layouts (contenidos) e imágenes son fluidos y se usa código media-queries de CSS3.
    .h4.mt-5 La web responsive
    figure.mt-5
      img(src="@/assets/template/tema-2-45.png", alt="Texto que describa la imagen")
    p.mt-5 Además de la correcta visualización y navegación, las páginas web deben adaptarse a determinaciones externas que afectan su funcionamiento en los servidores, buscadores, navegadores, etc. Tal es el caso y resulta importante mencionar, que Google, el mayor buscador de Internet, ha actualizado el sistema de calificación de sitios web para proporcionar mejores resultados de búsqueda a los usuarios que usan móviles. Dicho de otra manera, si una página web no es responsive, podría ser excluida de los resultados de búsqueda móvil de Google o clasificarse más bajo en SERP.
    p.mt-5 Con la llegada del teléfono inteligente el mundo cambió, y las páginas web también; algunas cosas se volvieron más prácticas, así como también, las páginas web. Las personas tienen conexión y acceden a la red hoy día en cualquier momento y en cualquier lugar. Por tanto, tener un sitio web optimizado para dispositivos móviles expande todas las posibilidades y abre la puerta a una audiencia más grande. De acuerdo a #[strong Shum (2021)]:  “En la actualidad el 70% del tráfico de internet proviene de teléfonos móviles”. 
    .h4.mt-5 Ventajas de tener un sitio web responsive 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-acento-botones.p-4.p-md-3.mt-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-46.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Según el sitio web Hostinger Tutoriales las ventajas de incorporar el diseño responsive se materializan en las estrategias del marketing digital y los resultados de estas.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.bg-acento-contenido-40.p-4.mb-4
          .h4 Mejor SEO
          p.mt-4 El diseño del sitio responsive utiliza la misma URL y HTML, independientemente del dispositivo utilizado para acceder a la página. Esta configuración permite a Google explorar, indexar y administrar el contenido del sitio de manera más fácil y eficiente. Como resultado, el sitio web tendrá una mejor calidad de SEO (posicionamiento en buscadores u optimización de motores de búsqueda que arroja resultados orgánicos de los diferentes buscadores)
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.bg-acento-contenido-20.p-4.mb-4
          .h4 No es necesario crear un nuevo diseño
          p.mt-4 Los sitios web responsive no necesitan una nueva apariencia o diseño para dispositivos móviles. En otras palabras, la visualización del sitio web seguirá siendo la misma, aunque se acceda desde varios tipos diferentes de dispositivos. Al no tener que crear dos diseños de sitios web, se puede ahorrar mucho tiempo y energía.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.bg-acento-contenido-10.p-4.mb-4
          .h4 Más fácil de administrar y rentable
          p.mt-4 Un sitio web responsive es fácil de administrar y desarrollar. Todas las actualizaciones que realices aparecerán en cada dispositivo que acceda al sitio web, no hay diferencia en el contenido que aparece tanto en la PC, computadora portátil o teléfonos inteligentes. Además, los costos operativos de un sitio web receptivo son más bajos, ya que no es necesario desarrollar sitios web para PC y para dispositivos móviles por separado.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder3: [
      {
        titulo: 'SmartDraw',
        texto: 'http://www.smartdraw.com',
        imagen: require('@/assets/template/tema-2-16.png'),
      },
      {
        titulo: 'Microsoft Visio',
        texto: 'http://www.microsoft.com',
        imagen: require('@/assets/template/tema-2-17.png'),
      },
      {
        titulo: 'iGrafx Flowcharter',
        texto: 'http://www.igrafx.de',
        imagen: require('@/assets/template/tema-2-18.png'),
      },
      {
        titulo: 'Mindmanager',
        texto: 'http://www.mindjet.com',
        imagen: require('@/assets/template/tema-2-19.png'),
      },
      {
        titulo: 'Freemind ',
        texto: 'http://freemind.sourceforge.net/wiki/index.php/Main_Page',
        imagen: require('@/assets/template/tema-2-20.png'),
      },
      {
        titulo: 'OmniGraffle (OSX)',
        texto: 'http://www.omnigroup.com',
        imagen: require('@/assets/template/tema-2-21.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
