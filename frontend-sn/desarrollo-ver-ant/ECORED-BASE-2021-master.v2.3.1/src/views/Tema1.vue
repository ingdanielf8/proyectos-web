<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 1
      .h3 Comunicación en marketing
    .row
      .col-12
        p #[strong Para Prettel (2016)] , los elementos de la comunicación se definen de la siguiente manera:
      .col-12.mt-4
        TabsA.mb-5
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="1: Emisor (codificador)")
            h4 Emisor (codificador)
            p.mt-4 El emisor es la persona, empresa o gobierno que desea transmitir un mensaje.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="2: Receptor (decodificador)")
            h4 Receptor (decodificador)
            p.mt-4 Es la persona, grupo de personas, segmento meta al que se le transmite el mensaje.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="3: Código")
            h4 Código
            p.mt-4 Lenguaje, signos o símbolos que el emisor utiliza para transmitir el mensaje. El idioma es el código más utilizado. El lenguaje como código en la comunicación puede ser lingüístico, el cual se puede presentar verbal o escrito. Verbal en un mensaje por radio y escrito el mensaje presentado en una valla publicitaria.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="4: El código no lingüístico")
            h4 El código no lingüístico
            p.mt-4 Visual a través de símbolos o signos. Ejemplo las señales de tránsito o la tarjeta amarilla que le saca un árbitro a un jugador. El mensaje no lingüístico puede ser gestual o con movimientos del cuerpo (La forma de comunicarse los sordomudos). Código no lingüístico auditivo, a través de sonidos. La campana del carro recolector de basuras. El pito de un árbitro. Las empresas emplean este código cuando tratan de enseñarle al consumidor a reconocer un producto con solo escuchar un sonido musical, ejemplo: coordinadora mercantil.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="5: Mensaje")
            h4 Mensaje
            p.mt-4 Es el contenido de la información (ideas, sentimientos o acontecimientos) que desea transmitir el emisor y que desea que sea captado como él quiere. Para lograr esa captación, es importante que el emisor emplee el código y el medio correcto a fin de que el mensaje no sea interpretado de manera diferente a lo que se quiere.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="6: Canal")
            h4 Canal
            p.mt-4 Es el medio a través de los cuales se transmite el mensaje (televisión-radio-teléfono, internet, una señal de desvío en una carretera).
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="7: Respuesta")
            h4 Respuesta
            p.mt-4 Cuando el receptor ha captado el mensaje en la forma que se espera (comprensión del mensaje). En el marketing, cuando el consumidor recuerda el producto o lo compra.    
    p.mt-5 #[strong Best (2007)] , determina que la primera responsabilidad de una comunicación de marketing, es construir notoriedad: informar a los clientes de los productos y servicios de una empresa, segundo las comunicaciones de marketing deben recordar los mensajes, para mantener la notoriedad de lo comunicado y tercero la responsabilidad de una comunicación de marketing puede ser motivar al mercado objetivo a pasar a la acción. Los tres objetivos fundamentales en las comunicaciones de marketing son:
    .row.mt-5.p-5.bg-gris-claro
      .col-5.col-md-4.offset-md-1.text-center
        h5 Construir notoriedad: 
        p.mt-2 Conseguir un nivel de notoriedad determinado en relación con la organización, sus productos y servicios.
      .col-5.offset-2.col-md-4.offset-md-2.text-center
        h5 Estimular a la acción: 
        p.mt-2 Motivar al mercado objetivo para llevar a cabo una acción específica a corto plazo.
      .col-10.offset-1
        figure.mb-5
          img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen")
      .col-8.col-lg-4.offset-2.offset-lg-4.text-center
        h5 Reforzar el mensaje:
        p.mt-2 Mantener, a lo largo del tiempo, el nivel deseado de recuerdo en relación con la imagen, beneficios básicos y nombre de la compañía y de sus marcas.
    figcaption Referencia Tabla - Norma APA
    .row.mt-5
      h5 Mezcla de comunicación
      p.mt-5 #[strong Best (2016)], explica, a través de la siguiente figura, la mezcla de comunicación
    .row
      .col-12
        .row.py-2
          .col-2.col-xl-1.align-self-center.justify-content-center(style="z-index:900;")
            img(src='@/assets/template/tema-1-2.svg', alt='', style='margin-right: -100px').w-100
          .col-9.col-md-5.py-3.bg-azul-claro.rounded.align-self-center
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              h5.mt-3 publicidad
              p.mt-4 Cualquier forma impersonal de presentación y promoción de ideas, bienes o servicios, que paga un patrocinador identificado #[strong (Kotler, 2017)]. Es una estrategia de comunicación,
          .col-5.d-none.d-md-block.align-self-center.mt-5
            figure.mb-5
              img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
    .row
      SlyderB(:datos="datosSlyder")

    .row
      .titulo-segundo
        #t_1_1.h4 1.1  Identidad visual
      .bloque-texto-a.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure.mb-5
              img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
          .col-lg-7
            .bloque-texto-a__texto.p-4
              p Una organización fuertemente orientada hacia el mercado, que lo haya segmentado y que realice un seguimiento permanente del comportamiento de los clientes, se encuentra en la mejor posición para construir, de forma exitosa, la identidad de la marca. Una empresa centrada en su interior, sencillamente no contará con la información suficiente del mercado para construir una identidad de marca significativa para su público objetivo. A la hora de desarrollar la identidad de la marca, el primer paso es definir el posicionamiento deseado para el producto y la proposición de valor para un público objetivo determinado #[strong (Best, 2007).]
    p.mt-5 Para construir una marca poderosa o una marca fuerte #[strong Hoyos (2016)], determina que se debe propender por construir y fortalecer su Brand equity, esto significa tener una marca conocida por muchas personas, asociada a elementos positivos, con una calidad percibida alta, con una base de consumidores numerosa y fidelizada, además, con conexiones emocionales profundas.
    figure.mt-5
      img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
    .row.mt-4.p-5.bg-gris-claro.justify-content-center
      figure.my-5
        img(src="@/assets/template/tema-1-9.png", alt="Texto que describa la imagen").w-75
    figcaption Referencia Adaptada de Hoyos (2016)
    p.mt-5 En la figura anterior, se muestra que el proceso de construcción del #[strong Brand equity] comienza por seleccionar un producto y un mercado específico, posteriormente, se procede a definir la identidad de marca, la manera cómo quiere ser percibida; el tercer paso, consiste en escoger un nombre de marca y algunos símbolos identificadores –normalmente solo el logosímbolo y los colores marcarios–; el cuarto paso, la construcción del #[strong Brand equity], con la dinámica de la organización con su mercado en la acumulación de marca.
    p.mt-4 Los consumidores asocian las marcas a diferentes elementos, dependiendo de su experiencia y de su relación con otros usuarios de estas, además, de acuerdo con el modelamiento que hacen los medios de comunicación a través de contenidos editoriales y de contenidos comerciales; es decir, la publicidad pagada por las marcas. Las redes sociales están jugando un papel muy importante en la construcción de asociaciones positivas y negativas de las marcas gracias al intercambio permanente de comentarios entre los usuarios de estas con respecto a sus experiencias de consumo #[strong (Hoyos, 2016).]
    figure.mt-4
      img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
        #t_1_2.h4 1.2  ADN de marca
    figure.my-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-5
      .col-12.col-lg-7.bg-morado-claro.p-5.rounded
        p #[strong Hoyos (2016, citando a Aaker y Joachimsthaler, 2006)] explica que para construir la identidad de marca es necesario comenzar con un análisis estratégico, en donde se analizan los clientes, la competencia y se realiza un autoanálisis. Luego, se establecen los puntos relevantes del producto como su alcance, atributos, relación calidad/valor, usos, usuarios y país de origen; posteriormente, se revisan aspectos relativos a la organización, que puedan ayudar a construir la identidad de la marca, entre los que están los atributos organizativos y la preocupación de la empresa por sus clientes; ulteriormente, se establecen cuáles son aquellos elementos de la marca asociados a características de personalidad y se desarrolla lo que se conoce como el personaje de la marca.
      .col-5.d-none.d-lg-block.align-self-center 
        figure.mt-4
          img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
    p.mt-5 Finalmente, se examinan aquellos símbolos que puedan apoyar la construcción de la marca, dentro de los cuales se destacan la imagen visual, las metáforas que se usan para identificar la marca y la herencia de marca o elementos del pasado que puedan ser utilizados para reforzar la imagen de la misma.
    p.mt-4 La marca como producto, la marca como empresa, la marca como persona y la marca como símbolo, se utilizan para alimentar la identidad compuesta por la esencia de la marca, lo que algunos califican como el alma o el ADN de esta #[strong (Toulemonde, 2012).] 
    figure.mt-4
      img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
        #t_1_3.h4 1.3  Mensaje
    figure.mt-4
      img(src="@/assets/template/tema-1-13.png", alt="Texto que describa la imagen")
    p.mt-5 #[strong Kotler (2017)] determina que se debe desarrollar un mensaje eficaz. Lo ideal sería que el mensaje captara la atención, mantuviera el interés, provocara el deseo y originara una acción #[strong (esquema conocido como el modelo AIDA)]. En la práctica, pocos mensajes llevan al consumidor de la conciencia hasta la compra; sin embargo, el modelo AIDA sugiere las calidades deseables de un buen mensaje. Al conformar un mensaje, el comunicador de marketing debe decidir qué va a decir en el contenido del mensaje y cómo decirlo en su estructura y formato.
    .row.mt-5
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-3.d-none.d-md-block.px-4.px-lg-5.borde-der-gris.align-self-center
            figure
              img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Mensaje por producto:
            p.mt-4 Es aquel en el que se hace énfasis en las bondades del producto y todos los beneficios posibles que va a lograr el consumidor al adquirirlo.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-3.d-none.d-md-block.px-4.px-lg-5.borde-der-gris.align-self-center
            figure
              img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Mensaje testimonial:
            p.mt-4 Es un mensaje que pretende, mediante la escogencia de un personaje, dar testimonio o vivencia sobre los verdaderos atributos de un producto.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-3.d-none.d-md-block.px-4.px-lg-5.borde-der-gris.align-self-center
            figure
              img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Mensaje institucional:
            p.mt-4 Por medio de este mensaje se trata de resaltar la imagen corporativa. En un mensaje institucional no se menciona un producto en especial.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-3.d-none.d-md-block.px-4.px-lg-5.borde-der-gris.align-self-center
            figure
              img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Mensaje subliminal:
            p.mt-4 #[strong Loudon y Della (1995)] plantean que este mensaje indica la percepción de estímulos que están por debajo del nivel necesario para alcanzar la conciencia.
            p Esto podría lograrse de tres formas fundamentales: 
            p 1) Presentando estímulos visuales durante pocos instantes
            p 2) Presentando mensajes auditivos hablando rápidamente en volumen bajo
            p 3) Incluyendo u ocultando los mensajes o palabras en material gráfico
    .row.mt-5
      .col-sm.mb-5.mb-sm-0
        .h6 Otros tipos de mensajes definidos por Prettel (2016) son:
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Demostraciones.] Se muestran los beneficios del producto, y hasta sus precauciones de uso, en un escenario real. 
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Mensajes con soporte técnico o respaldo.] Se busca la credibilidad del consumidor mediante soporte de investigaciones científicas o respaldo de organizaciones que dan fe de la calidad del producto.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Mensajes que muestran realidades.] Productos que resuelven problemas identificados, como el estreñimiento, el color y daño en las uñas se recurre a mensajes en que muestra la realidad del problema, y el producto anunciado la solución.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Mensajes mediante personajes de caricatura.] Son muy utilizados para publicitar productos para niños. Las animaciones diseñadas con la ayuda de programas de computador generan percepción en el sector infantil.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Mensaje con la creación de un símbolo de personalidad.] En Colombia, Seguros Sura ha utilizados por años el tigre como el símbolo de personalidad el cual en los mensajes publicitarios genera la idea de que la empresa: “Somos unos tigres en protección”.
          li.mb-0.mt-2
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Mensajes humorísticos.] En ocasiones se emiten mensajes con tanto y tan buen humor que concentran de manera exagerada la atención del mercado en el mensaje como tal y no en los beneficios que se anuncian del producto.
    p.mt-5 #[strong O’Guinn (2013)], describe los principales objetivos del mensaje e ilustra los métodos más utilizados para lograrlos, como se muestra en la siguiente tabla.
    p.mt-5 Principales objetivos del mensaje y métodos

    .tabla-b.mb-5.mt-4
      table(style="table-layout: fixed;")
        thead
          tr.bg-rojo.text-white
            th Objetivo: lo que el anunciante espera lograr
            th Método: cómo planea lograr el objetivo el anunciante
        tbody
          tr
            td Promover la recordación de la marca: hacer que los consumidores recuerden su nombre de marca en primer lugar; es decir, antes que los nombres de marca de los competidores.
            td.borde-izq 
              h6 Repetición: fijar los nombres de marca en la mente del consumidor. Eslóganes: son artificios lingüísticos que vinculan un nombre de marca con algo memorable del eslogan con métrica y rima. Jingles: tienen melodía. 
          tr
            td Vincular un atributo clave con el nombre de marca: hacer que los consumidores asocien un atributo clave con un nombre de marca y viceversa.
            td.borde-izq 
              h6 Propuesta única de ventas (PUV): un tipo de anuncio que enfatiza fuertemente las cualidades únicas de la marca anunciada.  
          tr
            td Persuadir al consumidor: convencer a los consumidores de comprar un bien o servicio por medio de argumentos de alto involucramiento.
            td.borde-izq
              h6 Publicidad con razones: el anunciante razona con el consumidor. Anuncios de ventas agresivas: ejercen mucha presión y demandan respuestas urgentes. Anuncios comparativos: hacen una comparación de sus características y las de las marcas competidoras. Testimoniales: reside en la presentación del vocero de los atributos y beneficios de una marca. Demostración: reside en la presentación autorizada por el vocero de los atributos y beneficios de una marca. Publirreportajes e infomerciales: se presenta a través de canales.
          tr
            td Infundir una preferencia de marca: hacer que a los consumidores les agrade o prefieran su marca por encima de todas las demás. Atemorizar al consumidor para una acción: hacer que los consumidores compren un bien o servicio al infundir temor.
            td.borde-izq
              h6 Anuncios para sentirse bien: una asociación afectiva y sentimental. Anuncios graciosos: el humor es algo excepcional. Anuncios de atractivo sexual: los humanos piensan en el sexo de tiempo en tiempo. Anuncios de apelación al temor: la apelación al temor resalta el riesgo de daño o una consecuencia negativa.
          tr
            td Modificar el comportamiento al inducir la ansiedad: lograr que los consumidores tomen una decisión de compra; las ansiedades son a menudo de naturaleza social.
            td.borde-izq 
              h6 Anuncios de ansiedad: demostrar por qué usted debe estar ansioso y lo que puede hacer para aliviar la ansiedad. Anuncios de ansiedad social: el peligro es un juicio social negativo.
          tr
            td Transformar las experiencias de consumo: crear un sentimiento, imagen o estado de ánimo acerca de una marca que se active cuando el consumidor use el bien o servicio.
            td.borde-izq 
              h6 Anuncios transformacionales: transformar la experiencia de consumo.
          tr
            td Situar socialmente a la marca: brindar significado a la marca al ubicarla en un contexto social deseable.
            td.borde-izq 
              h6 Anuncios (slice of life) de vida: se coloca en un contexto social gana significado social por asociación. Cortometrajes en internet. Anuncios de fantasía ligera.
          tr
            td Definir la imagen de la marca: crear una imagen para una marca a partir de los apoyos visuales más que en las palabras y en el argumento.
            td.borde-izq 
              h6 Anuncios basados en imágenes.
          tr
            td Resolver la disrupción social y las contradicciones culturales: aprovechar la disrupción y las contradicciones culturales en la sociedad para ventaja de la marca.
            td.borde-izq 
              h6 Vincular la marca con el movimiento social y cultural.
      figcaption Referencia tomada de O’Guinn (2013)
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  Audiencia
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-5
      .col-12.col-lg-7.tarjeta.tarjeta--naranja.py-5.px-4
        p.mb-0 #[strong O’Guinn (2013)], define las audiencias como un grupo de individuos que recibe e interpreta los mensajes enviados por las empresas u organizaciones. La audiencia podría estar conformada por hogares consumidores, estudiantes universitarios o personas de negocios; además, cualquier grupo grande de personas puede ser una audiencia. La audiencia meta es un grupo particular de consumidores destacados por una organización para una publicidad o una campaña de PIM. Estas audiencias meta se destacan porque la empresa ha descubierto que a los miembros de la audiencia les agrada la categoría de producto y podrían preferir su marca en particular dentro de esa categoría de producto. Las audiencias meta, siempre son audiencias potenciales porque una empresa nunca puede estar segura de que el mensaje en realidad les llegará como ellos pretendieron.
      .col-4.d-none.d-lg-block.align-self-center.offset-1
        figure.mb-5
          img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen").w-75
    p.mt-5 El público podría componerse de usuarios actuales o compradores potenciales, aquellos que toman la decisión de compra o que influyen en ella. El público puede estar integrado por individuos, grupos, audiencias especiales o público en general. El público meta afectará de manera importante las decisiones del comunicador sobre lo que se dirá, cómo, cuándo, dónde y quién lo dirá #[strong (Kotler, 2017).]
    .titulo-segundo.mt-5
      #t_1_5.h4 1.5  Estrategia de comunicación
    .row.mt-4
      .col-12.col-lg-5.align-self-center
        p Las estrategias de comunicación tienen diversas clasificaciones en la variable del marketing mix, es necesario conocerlas para definir el mejor camino a seguir en la comunicación de marketing. 
        p.mt-4 La estrategia de comunicación PULL la integran el conjunto de acciones de comunicación de marketing dirigidas a los usuarios finales. Su objetivo, es construir notoriedad, interés y lealtad en los clientes finales. Cuando esta estrategia se ejecuta con éxito, los usuarios finales buscan y demandan determinados productos y servicios, y en esencia, su interés consigue atraer el producto hacia el canal. El final exitoso en la ejecución de esta estrategia requiere que los intermediarios dispongan de los productos y marcas buscados y demandados por los usuarios finales #[strong (Best, 2007)].
      .col-7.d-none.d-lg-block.align-self-center
        figure.mb-2
          img(src="@/assets/template/tema-1-19.png", alt="Texto que describa la imagen")
      p.mt-4 La estrategia de comunicación PUSH la integran el conjunto de acciones de comunicación de #[strong marketing] dirigidas a los intermediarios. Su objetivo es motivar a los intermediarios para que pongan a disposición de los usuarios finales, determinados productos o marcas, y, de esta forma, mejore su disponibilidad de los productos promocionados. Cuando estas estrategias se ejecutan con éxito mejora la disponibilidad del producto, los fuera de stock, el marketing en el punto de venta #[strong (merchandising)], y el esfuerzo de marketing del intermediario hacia los productos que se han promocionado a través de esta comunicación PUSH. Sin embargo, es importante llegar a comprender que la mejor forma de conseguir una respuesta positiva de compra, y por lo tanto mejoras de cuota de mercado, es a través de la utilización conjunta de las estrategias PUSH y PULL #[strong (Best, 2007)], como se muestra en la siguiente figura.
    .row
      .col-10.offset-1
        figure.mt-5
          img(src="@/assets/template/tema-1-20.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Adaptada de Best (2007)
    .row.mt-5
      .col-12.col-lg-6.align-self-center
        p La estrategia creativa incluye todo aquello que ayuda a definir mejor el mensaje, como la idea creativa, el concepto, un posible eslogan de la marca/empresa, el denominado #[strong Reason why] (justificación de la promesa o beneficio del producto/servicio que ofrece la empresa), el tono del mensaje, el eje de la comunicación (la idea central de la comunicación/campaña) y el elemento motivador de la misma (si lo hubiera).   
        p.mt-4 El sentido general del mensaje se basará en que el cliente conozca la ventaja del servicio que se ofrece, es decir, la diferenciación conseguida a través de la exclusividad en el servicio, la posibilidad de personalización y el sentido que tiene el adquirir algo único #[strong (Estrella, 2018)]. 
      .col-6.d-none.d-lg-block.align-self-center.align-self-center
        figure.mb-2
          img(src="@/assets/template/tema-1-21.svg", alt="Texto que describa la imagen").w-75
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="1.5.1.	 Estrategias ATL")
        .col-3.d-none.d-md-block.align-self-center.offset-1
          figure.mb-2
            img(src="@/assets/template/tema-1-22.svg", alt="Texto que describa la imagen").w-75
        .col-12.col-md-8
          p La estrategia publicitaria ATL, Above The Line, o publicidad sobre la línea es el tipo de publicidad que utiliza medios publicitarios convencionales.
          p.mt-4 El ATL, al hacer uso de los medios tradicionales masivos, lo que comunica en un mensaje tendrá un gran alcance de audiencia, incluso a quienes la marca no considere su target. Esto obliga a las estrategias ATL de las marcas a comunicar un mensaje que se ajuste a la comprensión de todo el público que se exponga a la comunicación, y a estar consciente de las medidas de respeto y cautela necesarias al dirigirse al público #[strong (Torreblanca, 2016)].
          p.mt-4 Según #[strong Chong (2007)], los servicios de marketing ATL y BTL representan dos puntos de vista diferentes en cuanto a la recordación de marca y la estrategia del consumidor objetivo. ATL es sinónimo de marketing masivo y de grandes campañas publicitarias, mientras que BTL está basado en información muy medible y enfocada en los patrones de compra del consumidor y los programas de retención.

      .row(titulo="1.5.2.	 Estrategias BTL")
        .col-3.d-none.d-md-block.align-self-center.offset-1
          figure.mb-2
            img(src="@/assets/template/tema-1-23.svg", alt="Texto que describa la imagen").w-75
        .col-12.col-md-8
          p Otra forma de hacer publicidad por parte de las empresas es a través de los BTL (de Below The Line). Literalmente esto traduciría “por debajo de la línea”, es decir, fuera de las líneas tradicionales utilizadas para hacer publicidad. La publicidad BTL resulta menos costosa, y se puede direccionar a segmentos puntuales, haciéndose por esta razón, más efectiva por el logro del mejor contacto con los posibles clientes. BTL son diferentes estrategias en que no se utilizan los medios de comunicación tradicionales y estas actividades facilitan el contacto directo con el cliente; son por lo tanto mayormente motivadoras para los consumidores #[strong (Prettel, 2016)].
          p.mt-4 Entre las estrategias de BTL más conocidas se pueden citar: los eventos en lugares públicos (supermercados, parques, universidades), los festivales y las estrategias que hacen parte del marketing directo. De igual manera, al implementar un programa publicitario, se debe interpretar ciertas conductas del consumidor, para lo cual es necesario tener en cuenta tres aspectos: los estímulos, las respuestas, y ciertas reacciones intermedias entre el estímulo y las respuestas. Por otra parte, es necesario tener en cuenta que la respuesta al mensaje, se da de acuerdo con las características o perfil del segmento metas y el tipo de producto que se anuncia #[strong (Prettel, 2016)].
    .titulo-segundo.mt-5
      #t_1_6.h4 1.6  Promoción
    .row.mt-5
      .col-12.col-lg-7.align-self-center
        p La promoción de ventas es una estrategia de comunicación con la que se estimula de manera directa al consumidor a través de beneficios adicionales, como regalos, descuentos, rifas, bonos, y con lo que se espera mayor incidencia sobre el resultado final de las ventas y a corto plazo. Quien define un programa de promoción espera una pronta respuesta por parte del consumidor. Por tal razón son a corto plazo, no generando en muchos casos lealtad en el mercado. El resultado deberá ser un incremento en los niveles de ventas #[strong (Prettel, 2016)].   
        p.mt-4  Con base en #[strong Prettel (2016)], se describen las condiciones fundamentales que debe tener un programa de promoción.
      .col-5.d-none.d-lg-block.align-self-center.align-self-center
        figure.mb-2
          img(src="@/assets/template/tema-1-24.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1.rounded.borde-gris.p-5
        .row
          h5 Objetivos promocionales.
          p.mt-3 El programa de promoción de ventas, como todos los de la mezcla de mercadeo, debe articularse con los objetivos de la empresa. Algunos objetivos pueden están enfocados a informar, estimular la demanda, evitar la deserción de clientes, cambio de actitud frente al producto, estímulo para los distribuidores, competir, generar ingresos y generar crecimiento corporativo.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-5
        .row
          h5 Tipo de producto.
          p.mt-3 De acuerdo con el producto que se promociona, se establece el método más conveniente. El tipo de producto también influye en la escogencia de los lugares de promoción.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-5
        .row
          h5 Segmento meta.
          p.mt-3 Los consumidores reaccionan o asumen una actitud frente a un determinado bien o servicio, según el segmento al que pertenecen.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-5
        .row
          h5 Competencia.
          p.mt-3 Desconocer lo que están haciendo el resto de oferentes que se disputan el mercado puede ocasionar errores que son aprovechados por ellos mismos.
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-5
        .row
          h5 Ciclo de vida del producto.
          p.mt-3 La etapa de introducción deberá caracterizarse por una campaña promocional intensa paralela a la publicitaria, para que, se logren superar los obstáculos propios de esta etapa como el desconocimiento del producto por parte de los consumidores, resistencia al cambio o lealtad hacia las marcas ya establecidas y los ataques de la competencia. En la etapa de crecimiento disminuye la intensidad de la promoción de ventas, ya que se espera que el mercado tenga mayor conocimiento del producto. En la etapa de madurez son frecuentes las promociones, debido a que en esta etapa se han incrementado significativamente el número de competidores, lo que hace que los consumidores tengan muchas opciones de productos para satisfacer sus necesidades. La promoción en este caso busca incrementar las ventas y mantener la lealtad a una marca.
    h5.mt-5 Métodos de promoción.
    p.mt-2 A continuación, se describen los métodos de promoción.
    .row.mt-5
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-25.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 La degustación. 
            p.mt-3 Se puede realizar en el punto de venta o en cualquier tipo de mercado. Al consumidor se le da a que experimente de manera inmediata el producto, logrando en el mismo momento una opinión al respecto. Método muy utilizado para jugos, galletas, margarinas, carnes frías, entre otros, siendo de gran estímulo para la compra. Un lugar comúnmente utilizado para este tipo de promoción son los supermercados de cadena, en los que se aprovecha al grupo de promotoras para impulsar en el punto de venta, que debe estar ubicado en un lugar estratégico, #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-26.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 Muestra gratis.  
            p.mt-3 Se usa con frecuencia consiste en ofrecer el producto gratis o a un precio muy reducido. A menudo se usan con nuevos productos, ya que las muestras ponen el artículo en manos de los consumidores (Kerin, 2018). Un método que se puede aplicar en desodorantes, champú para el cabello, jabones, entre otros. Para este caso, se debe ser cuidadoso en la definición de la unidad que se va a promover, la cual, se aconseja, deberá ser de un tamaño menor que el de la unidad de venta, a fin de no incrementar los costos de la campaña. Lo que se busca es que el consumidor que recibe la muestra (que hasta ese momento es un comprador en potencia), después de experimentarlo, pueda llegar a identificarse con la calidad del producto, convirtiéndose en un comprador real; desertando de la competencia #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 Demostraciones.
            p.mt-3 De bastante aplicación por la fuerza de ventas cuando se trata de estimular la compra de un equipo (computadora, máquina de escribir, equipo de sonido, muebles especiales, entre otros) y ante un prospecto de cliente. El vendedor lleva consigo un equipo que instala y pone a funcionar de inmediato e instruye sobre su manejo y precauciones. Si es del caso lo deja durante un período para que el posible cliente se familiarice con su manejo y logre encontrar en él las bondades que satisfagan sus necesidades #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-28.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5  Competencia.
            p.mt-3 Las ofertas o descuentos son reducciones del precio a corto plazo, que en general se usan para incrementar la prueba entre posibles clientes o tomar represalias contra las medidas adoptadas por un competidor, #[strong (Kerin, 2018)]. Para almacenes que comercializan productos, es un buen método para reactivar las ventas y generar ingresos importantes; también estos programas son de gran beneficio en época de recesión o en aquellos ciclos ya tratados donde la demanda de ciertos productos baja. Para los meses de febrero a marzo, los consumidores después de pasar la temporada navideña de grandes gastos, disminuyen su nivel de consumo de ropa, calzado, cosméticos; y de la única manera que se motivan a generar otros gastos es cuando son atraídos por los llamativos descuentos. Las mismas compañías productoras apoyan a sus distribuidores en este tipo de campañas, logrando beneficio mutuo #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-29.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5  Programas especiales de crédito.
            p.mt-3 Cuando una empresa comercializadora emplea el llamado plan prima (lleve su equipo ahora y pague la cuota inicial con su prima de Navidad), está estimulando la compra de sus mercancías, siendo esta otra forma de promoción. Estos métodos se convierten en factor competitivo muy utilizado por comercializadoras de electrodomésticos y en general artículos para el hogar. Dentro de este mismo programa se emplea la estrategia de recibir el equipo o vehículo viejo como parte de pago #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-30.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 Programas de lealtad.
            p.mt-3 Se usan para estimular y premiar las adquisiciones recurrentes al distinguir cada compra realizada por un consumidor y ofrecer una prima a medida que las compras se acumulan. Los programas de continuidad más populares en la actualidad son los programas de recompensas de las tarjetas de crédito. Más de 75% de las tarjetas ofrecen incentivos por usarlas #[strong (Kerin, 2018)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-31.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 Las empresas de servicios
            p.mt-3 Hoteles, agencias de viajes, programas vacacionales, compiten igualmente con descuentos por pago inmediato, y créditos con amplios plazos y bajas tasas de interés #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-32.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5  Regalos, premios, sorteos.
            p.mt-3 Son métodos de gran impulso en la actualidad, con los cuales los almacenes de cadena y empresas en general tratan de atraer clientes (Prettel, 2016). El premio es una herramienta promocional que se usa a menudo con los consumidores; consiste en mercancía gratuita o con ahorros significativos sobre su precio  de venta al menudeo. Este último tipo de premio se llama de autoliquidación porque el costo que se cobra al consumidor cubre el costo del artículo. Los concursos o sorteos consisten en que los consumidores aplican sus habilidades o pensamiento analítico o creativo para competir por un premio. Esta forma de promoción ha crecido a medida que las solicitudes de videos, fotos y ensayos pueden coincidir con la tendencia al contenido generado por los consumidores en internet #[strong (Kerin, 2018)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-33.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5 Cupones. 
            p.mt-3 Son promociones de ventas que por lo general ofrecen un precio de descuento al consumidor, lo que anima la prueba (Kerin, 2018). Cuando el cliente presenta el respectivo cupón recibirá a cambio un descuento especial #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-3.d-none.d-lg-block.align-self-center
            figure.mb-2(style='margin-left: -30px')
              img(src="@/assets/template/tema-1-34.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.align-self-center  
            h5  Reembolsos. 
            p.mt-3 Otra promoción de ventas para los consumidores es el reembolso de efectivo, el cual ofrece la devolución de dinero con base en el comprobante de compra (Kerin, 2018). Por ejemplo, Carrefour manejó una promoción en la que, pasado un período después de haber hecho la compra, el cliente puede regresar a retirar el valor del IVA (impuesto al valor agregado) #[strong (Prettel, 2016)].
    .row
      .col-10.offset-1.borde-top-gris
    .titulo-segundo
        #t_1_7.h4 1.7 Publicidad
    .row
      .col-12
        figure.mb-2
          img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen")
        p.mt-5 La publicidad es cualquier forma de comunicación no personal sobre una organización, producto, servicio o idea, pagada por un patrocinador identificado. El aspecto del pago en esta definición es importante porque el espacio para el mensaje publicitario casi siempre tiene que comprarse. Una rara excepción es el anuncio de servicio público, donde el tiempo o espacio para el anuncio se dona. El componente impersonal de la publicidad también es importante. La publicidad tiene que ver con los medios masivos de información (televisión, radio, revistas e internet), que no son personales y no tienen un ciclo de retroalimentación inmediato #[strong (Kerin, 2018)].
      .col-10.offset-1
        figure.mb-2.mt-5
          img(src="@/assets/template/tema-1-36.png", alt="Texto que describa la imagen")
    .row.mt-5
      p Se mencionan a continuación, los principales objetivos de un programa publicitario de acuerdo con #[strong Prettel (2016)]:
    .row.mt-5
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Informar sobre la existencia de un nuevo producto o servicio:] hacerle saber al mercado su existencia para motivar al segmento meta a que compre el producto. 
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Persuadir: ] debe convencer o generarle seguridad al consumidor sobre los beneficios que encontrará en el producto anunciado.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Contribuir Al posicionamiento de la marca:] los consumidores ya han experimentado el producto, ahora se debe insistir para que el consumidor relacione la marca con sus beneficios.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Contribuye a crear lealtad a la marca:] romper hábitos, adquirir hábitos y reforzar hábitos.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Recordar el producto a los consumidores:] con el fin de evitar el “olvido” del producto por parte del consumidor, lo que desestimula el consumo, se desarrollan programas publicitarios de recordación a través de diferentes medios.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Aumentar el valor del producto en la mente de los consumidores:] los productos no es que aumenten su calidad por generar más anuncios. Pero lo que sí sucede es que los productos anunciados generan en el consumidor la percepción de que son de mejor calidad y que generan mejores beneficios.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Estimular el consumo del producto:] el consumidor compra del producto después de recibir el estímulo.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Cambiar la actitud negativa de los consumidores respecto al bien o servicio: ] algunos consumidores, asumen actitud negativa frente a un producto la comunicación publicitaria puede ayudar al cambio de actitud.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Anunciar el mejoramiento de un producto o servicio (innovación): ] se anuncian sus nuevos beneficios.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Anunciar una promoción de ventas: ] creando expectativa entre la gente, a partir del momento del primer anuncio quedan pendientes de la fecha de inicio, para acudir masivamente.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Servir de factor competitivo: ] la publicidad hace más fuertes a las grandes empresas. Los altos presupuestos destinados a publicidad, hacen que las pequeñas empresas queden al margen en la disputa de grandes y lucrativos mercados.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Crear una imagen favorable de la compañía:] es utilizada para resaltar la imagen corporativa, siendo de alguna manera un complemento a las relaciones públicas que pretenden recordar permanentemente la categoría lograda por la organización.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Realizar marketing social: ] los medios de comunicación son utilizados para transmitir mensajes que buscan fomentar el bienestar entre la comunidad con programas de marketing social. Mensajes por la paz, por la solidaridad, campañas contra el consumo de drogas, son comunes.
    .row.mt-5
      .col-12.col-lg-7.align-self-center
        p #[strong O’Guinn (2013)], explica que la publicidad significa diferentes cosas para distintas personas. Es un negocio, una forma de arte, una institución y un fenómeno cultural. Para el #[strong CEO], la publicidad es una herramienta esencial de marketing que ayuda a crear conciencia de marca y lealtad a la misma. Para el dueño de una pequeña tienda minorista, la publicidad es una forma de llevar gente a la tienda. Para el director de arte en una agencia de publicidad, la publicidad es la expresión creativa de un concepto. Para un planificador de medios, la publicidad es la forma en que una empresa utiliza los medios para comunicarse con los clientes actuales y potenciales. Para el gerente de un sitio web, es una forma de dirigir tráfico hacia la URL. Para académicos y curadores de museos, la publicidad es un artefacto cultural importante, un texto, así como un registro histórico. Así las cosas, la publicidad significa algo diferente para todas estas personas.
      .col-5.d-none.d-lg-block.align-self-center.justify-content-center
        figure.mb-2.mt-5
          img(src="@/assets/template/tema-1-37.svg", alt="Texto que describa la imagen").w-75

    .titulo-segundo.mt-5
      #t_1_8.h4 1.8  Relaciones públicas
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mt-5 Las relaciones públicas son el conjunto de actividades para atraer a los clientes y establecer buenas relaciones con los diversos públicos de una compañía. Se utilizan para promover productos, personas, lugares, ideas, actividades, organizaciones e incluso países. Las compañías utilizan las relaciones públicas para entablar buenas relaciones con los consumidores, inversionistas, medios de comunicación y con sus comunidades #[strong (Kotler, 2017)].
    p.mt-4 Las relaciones públicas constituyen una forma de administración de la comunicación que trata de influir en los sentimientos, opiniones o creencias de los clientes, posibles clientes, accionistas, proveedores, empleados y otros públicos acerca de una empresa y sus productos o servicios. Muchas herramientas, como los eventos especiales, informes anuales, conferencias de prensa y manejo de imagen, pueden ser utilizadas por un departamento de relaciones públicas #[strong (Kerin, 2018)].
    figure.mb-2.mt-5
      img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen")
    p.mt-5 #[strong Prettel (2016)], define los principales métodos para hacer relaciones públicas, a saber:
    .row.mt-3
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Patrocinio de eventos.] Las compañías los usan para promocionar su negocio o servicio.  
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Patrocinio de congresos.] Algunos laboratorios apoyan la realización de congresos como el odontológico, el pediátrico, aprovechando estos eventos para impulsar sus productos entre los profesionales asistentes.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Donaciones.] Las donaciones hechas a hospitales, instituciones de educación, construcción de clubes para la recreación popular, como lo hace la compañía Colgate-Palmolive son, así mismo, relaciones públicas que les permite mantener una gran imagen institucional entre toda la comunidad.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Almuerzos para ejecutivos.] Grandes compañías realizan periódicamente almuerzos, a los cuales son invitados ejecutivos pertenecientes a sectores industriales, comerciales o de servicios. Ejemplo: industria del calzado, sector hotelero, entre otros.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Regalos.] En ciertas épocas del año, como en Navidad, se acostumbra obsequiar regalos consistentes en agendas de gran utilidad en el trabajo, adornos para el escritorio, almanaques decorativos con el nombre de la compañía que lo envía, bolígrafos, encendedores, entre otros.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Material escrito.] Pueden ser artículos escritos para revista o prensa, catálogos o folletos que se les envían a los clientes.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Material audiovisual.] Presentado en teatros o emisoras que comunican acerca de nuevos productos o eventos de la compañía.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p #[strong Entrevistas con la prensa o noticieros de televisión o radio.] En los cuales se les suministra alguna noticia sobre algún avance científico que tenga relación con un producto o con la misma compañía. Esto conduce a la buena propaganda.
    .titulo-segundo.mt-5
      #t_1_9.h4 1.9 Canales de comunicación
    .row.mt-4
      .col-12.col-md-6.align-self-center  
        p Estrella (2018), enfatiza que, en el entorno actual, multimedia y multicanal, es necesario aprender a manejar cada canal y las opciones de comunicación que estos les brindan para maximizar las ventas y el valor de la marca con cada una de las opciones comunicativas, el reto reside en elegir entre ellos bajo una perspectiva coordinada e integrada los tipos de canales de comunicación que maximicen las estrategias “push” y “pull” (empujar y tirar). A continuación, se explican los tipos de canales.
      .col-6.d-none.d-md-block 
        figure.mb-2.mt-5
          img(src="@/assets/template/tema-1-39.png", alt="Texto que describa la imagen")
    
    TabsB.mt-5
      .py-4.py-md-5(titulo="Canales" :icono="require('@/assets/template/tema-1-44.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Canales directos e interactivos.
            p Permiten a la empresa comunicar sus mensajes a través de sus contactos personales a clientes potenciales haciendo uso del correo, teléfono, Internet, móvil, visitas personales, etc. Se trata de una opción relacionada con la estrategia push (empujar), al orientarse los esfuerzos de comunicación sobre un intermediario (en este caso los contactos personales de la propia empresa).
          .col-md-6.justify-content-center
            figure
              img(src='@/assets/template/tema-1-40.svg', alt='Texto que describa la imagen').w-50
      .py-4.py-md-5(titulo="Canales" :icono="require('@/assets/template/tema-1-45.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Canales indirectos.
            p Permiten a la empresa comunicarse a través de intermediarios, como agentes o brokers, distribuidores, etc. Se trata de nuevo de una opción relacionada con la estrategia push (empujar).
          .col-md-6.justify-content-center
            figure
              img(src='@/assets/template/tema-1-41.svg', alt='Texto que describa la imagen').w-50
      .py-4.py-md-5(titulo="Canales" :icono="require('@/assets/template/tema-1-46.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Comunicaciones personales.
            p Permiten a la empresa poner en práctica el concepto de comunicación uno a uno entre un gestor de marketing o representante de la empresa y un consumidor a través de venta personal, marketing directo, marketing online, la generación del word-of-mouth, etc. Se trata de una opción relacionada con la estrategia pull (tirar), por ser la propia empresa la que comunica.
          .col-md-6.justify-content-center
            figure
              img(src='@/assets/template/tema-1-42.svg', alt='Texto que describa la imagen').w-50

      .py-4.py-md-5(titulo="Canales" :icono="require('@/assets/template/tema-1-47.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Comunicaciones masivas.
            p Permiten a la empresa comunicar a un grupo de clientes a través de la publicidad, marketing promocional, eventos y experiencias, etc. De nuevo se trata de una opción relacionada con la estrategia pull (tirar).
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-43.svg', alt='Texto que describa la imagen').w-50
    p.mt-5 Entre los medios de comunicación utilizados tradicionalmente para transmitir mensajes publicitarios se pueden mencionar: televisión, radio, internet, cine, prensa, revistas, vallas, pendones, volantes, megáfonos, catálogos, folletos, vehículos de transporte, los teléfonos celulares, y los BTL, entre otros #[strong (Prettel, 2016)].
    .row.mt-5
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-48.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Televisión. 
            p.mt-4 La televisión es un medio valioso porque comunica con la vista, el sonido y el movimiento. Los anuncios impresos por sí solos jamás podrían darle la sensación de un carro deportivo acelerando desde cero o tomando una curva a gran velocidad. También existen muchas oportunidades para ver la televisión fuera de casa, en lugares como bares, hoteles, oficinas, aeropuertos y campus universitarios #[strong (Kerin, 2018)].
            p.mt-4 Entre las ventajas de la televisión se encuentran captura de audiencias masivas, la combinación de imagen, movimiento, sonido, colores, facilita la creatividad en el desarrollo del mensaje, una persuasión efectiva, gracias a la utilización de testimonios y a las demostraciones de las características de un producto o servicio, permite llevar el mensaje a audiencias diferentes de acuerdo con horarios o franjas diferentes, logra de manera más rápida el Estímulo / Respuesta. La principal desventaja es el alto costo, el pago al testimonio a utilizar que en ocasiones es un personaje famoso, el pago de honorarios al publicista creativo, camarógrafos, entre otros, así como la compra de tiempo al canal, requieren del aporte por parte de la empresa de una gran capital #[strong (Prettel, 2016)].
            p.mt-4 Como el 70% del conocimiento es visual, el 20% es auditivo, el 10 % del resto de los sentidos y el costo por millar de espectadores es bajo, esta tiene grandes posibilidades de transmitir mensajes de gran impacto #[strong (Prieto, 2018)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-49.svg", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Radio.
            p.mt-4 La radio es un medio masivo de comunicación, se escucha en cualquier parte, lo que facilita llegar a todas las audiencias.
            p.mt-4 Las ventajas de la radio son lograr gran cobertura, la tecnología le permite llegar a cualquier lugar y ser escuchada por cualquier audiencia con algunas diferencias de acuerdo con ciertas características de la población lográndose la mayor audiencia en los sectores de bajos ingresos #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-50.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Medios impresos.
            p.mt-4 Deben ser utilizados para anuncios de productos o servicios con alto nivel de involucramiento por parte del consumidor. Los medios escritos permiten la comunicación amplia acerca de las bondades o beneficios de un bien o servicio. 
            p.mt-4 Las ventajas de las revistas y periódicos como medio impreso es que son de gran circulación y pueden estar al alcance de todos, en salas de espera, consultorios médicos, la recepción de cualquier empresa. Todo esto aumenta su circulación y por derivación el gran número de lectores #[strong (Prettel, 2016)].
            p.mt-4 Los periódicos constituyen un medio local importante con un gran potencial de alcance. Debido a que en su mayoría los periódicos se publican de manera cotidiana, permiten que los anuncios se centren en acontecimientos específicos de actualidad, como una “venta de 24 horas”. Además, los comerciantes minoristas locales suelen usar los periódicos como medio publicitario exclusivo #[strong (Kerin, 2018)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-51.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Internet. 
            p.mt-4 Cada día aumenta el número de personas que tienen acceso a las páginas web y redes sociales, incrementando por ello la difusión de los productos y las posibilidades de comercializarlos por parte de las empresas. Son varias las formas de anunciar por internet: sitios web, banners o pequeños anuncios dentro de la página #[strong (Prettel, 2016)].
            p.mt-4 Internet ha atraído una amplia variedad de industrias, así la publicidad en línea se parece a la publicidad impresa que ofrece un mensaje visual. Sin embargo, tiene ventajas adicionales porque también usa las capacidades de audio y video de internet. El sonido y el movimiento pueden atraer más la atención de los espectadores o proporcionar un elemento de entretenimiento al mensaje. La publicidad por internet también tiene la característica única de ser interactiva #[strong (Kerin, 2018)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-52.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Vallas.
            p.mt-4 Están ubicadas preferiblemente en carreteras y en la entrada de las grandes ciudades. Las vallas publicitarias colocadas dentro de la ciudad son controladas por algunos gobiernos debido a la contaminación visual que estas generan y sus implicaciones como causales de accidentes por la distracción de los conductores #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-53.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Pasacalles. 
            p.mt-4 Medio utilizado para anuncio de nuevos restaurantes, discotecas, espectáculos (conciertos, presentaciones artísticas), campañas políticas, entre otros. Se aconseja colocarlos en sitios concurridos por el segmento meta #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-54.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Autoparlante (perifoneo).
            p.mt-4 Vehículos provistos de un parlante y que comúnmente se utiliza para anunciar espectáculos como conciertos, circos, entre otros #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-55.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Megáfono.
            p.mt-4 Aparato de transmisión empleado por almacenes para anunciar sus promociones, ayudado con fondo musical para llamar la atención de la gente que circula en su entorno #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-56.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Publicidad en cine.
            p.mt-4 Los asistentes reciben estímulos con mensajes presentados antes del inicio de la película, #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-57.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Carteles.
            p.mt-4 Se ubican en las estaciones del metro, estaciones de buses locales e intermunicipales, aeropuertos, al igual que anuncios en tapetes, tableros electrónicos de los estadios #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-58.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 El empaque y la etiqueta del producto. 
            p.mt-4 Aparte de sus funciones como parte integral del producto, son un excelente medio publicitario, pues el empaque genera imagen y la etiqueta contiene una amplia información acerca de las bondades del producto y sus instrucciones de manejo, que son referentes que tienen en cuenta los consumidores para tomar la decisión de comprar #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-59.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Camisetas impresas, cachuchas y las viseras. 
            p.mt-4 Aparte de sus funciones como parte integral del producto, son un excelente medio publicitario, pues el empaque genera imagen y la etiqueta contiene una amplia información acerca de las bondades del producto y sus instrucciones de manejo, que son referentes que tienen en cuenta los consumidores para tomar la decisión de comprar #[strong (Prettel, 2016)].
    .row.mt-3
      .col-10.offset-1.rounded.borde-gris.p-4
        .row
          .col-4.col-lg-4.d-none.d-md-block.px-4.px-lg-5.borde-der-gris
            figure
              img(src="@/assets/template/tema-1-60.png", alt="Texto que describa la imagen")
          .col-12.col-md-8.px-5
            h3 Publicidad móvil. 
            p.mt-4 En vehículos o en personas resulta útil para las compañías por su bajo costo #[strong (Prettel, 2016)].

    .titulo-segundo.mt-5
      #t_1_10.h4 1.10 Campaña
    figure.mt-5
      img(src="@/assets/template/tema-1-61.png", alt="Texto que describa la imagen")
    p.mt-5 Una campaña publicitaria es una serie de anuncios coordinados que comunica un tema razonablemente cohesivo e integrado acerca de una marca. El tema puede estar conformado por varias afirmaciones o puntos, pero debe avanzar sobre un tema esencialmente singular. 
    p Se pueden desarrollar campañas publicitarias exitosas alrededor de un solo anuncio colocado en múltiples medios o pueden estar constituidas de diversos anuncios con un aspecto, sensación y mensaje similares. Las campañas publicitarias pueden llevarse a cabo durante algunas semanas o por muchos años. La campaña publicitaria requiere de un sentido agudo de los entornos complejos dentro de los cuales una empresa debe comunicarse con diferentes audiencias #[strong (O’Guinn, 2013)].
    p.mt-4 Con base en #[strong Prettel (2016)], los elementos básicos de una campaña publicitaria son:

    .row.mt-5
      .col-5.mx-3.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-62.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Definición de la época.
            p.mt-3  La época es un período del año identificado por una cultura. La época para la aplicación en el marketing de las empresas, son ciclos en el año en que un producto, por la cultura de la población, por sus actividades laborales o escolares, incrementa su demanda.
      .col-5.offset-1.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-63.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Identificación del tipo de mensaje.
            p.mt-3 Un mensaje publicitario que lleva la información que se quiere transmitir, cualquiera sea el medio que se utilice, debe ser diseñado de tal manera que despierte la atención del segmento objetivo, e influir de acuerdo con lo que se pretende (informar, persuadir, recordar).
    .row.mt-3
      .col-5.mx-3.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-64.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Código. 
            p.mt-3  Se debe definir el código o la forma cómo se transmitirá el mensaje, es decir si se hará en lenguaje verbal o escrito, o en signos, símbolos, que es el lenguaje no lingüístico.
      .col-5.offset-1.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-65.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Definición de medios.
            p.mt-3 Los medios publicitarios se deben escoger teniendo en cuenta el tipo de producto, el segmento meta y el presupuesto.
    .row.mt-3
      .col-5.mx-3.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-66.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Establecimiento del momento publicitario, o franja.
            p.mt-3  Es el horario en que se requiere pasar el mensaje. Aparentemente el más indicado es aquel que comprobadamente tenga mayor audiencia.
      .col-5.offset-1.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-67.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Tiempo de duración del mensaje.
            p.mt-3 Tiene gran incidencia en el costo de la campaña, cada segundo tiene un alto valor, dependiendo del medio y el horario que se escoja. Las compañías deben manejar el contenido del mensaje en un límite de tiempo, a fin de hacerlo menos costoso; cuidándose de que este ahorro no traiga un efecto negativo sobre el objetivo de la campaña.
    .row.mt-3
      .col-5.mx-3.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-68.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Frecuencia del mensaje.
            p.mt-3 Es el número de mensajes que se pasan en el medio escogido y en una determinada unidad de tiempo. 
      .col-5.offset-1.borde-top-gris.py-4
        .row
          .col-3.d-none.d-md-block
            figure.mt-5(style='margin-left: -40px')
              img(src="@/assets/template/tema-1-69.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9
            h6 Tiempo de duración de la campaña.
            p.mt-3 Es importante escoger la época en que sea de más efectividad. Otras compañías, hacen publicidad todo el año, así les resulte altamente costoso.
    .row.mt-3
      .col-5.mx-3.borde-top-gris.py-4
      .col-5.offset-1.borde-top-gris.py-4
    p.mt-5 #[strong Prettel (2016)], describe el proceso para el desarrollo de una campaña publicitaria, así:
    .row.mt-5
      .col-12.col-md-6.mb-5.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .row.borde-bot.pb-4
              .col-1.text-align-right
                .lista-ol--cuadro__vineta
                  span.text-white 1
              .col-11
                p #[strong Objetivos de la campaña publicitaria:] pueden ser determinantes del tipo de mensaje, de la frecuencia, así como del presupuesto. Si la publicidad es para la demanda primaria, el objetivo sería estimular la demanda de una categoría genérica de un producto.
          li
            .row.borde-bot.pb-4
              .col-1.text-align-right
                .lista-ol--cuadro__vineta
                  span.text-white 2
              .col-11
                p #[strong Características del producto o servicio que se va a publicitar:] En este aspecto se hace referencia a todas las bondades que el bien o servicio ofrece al consumidor y que es justamente la parte central del anuncio publicitario.
          li
            .row.borde-bot.pb-4
              .col-1.text-align-right
                .lista-ol--cuadro__vineta
                  span.text-white 3
              .col-11
                p #[strong Perfil del segmento meta:] Los grupos de mercados, de acuerdo con sus características (edad, género, nivel económico, profesión, entre otras), tienen un comportamiento que los lleva a consumir cierto tipo y cantidad de productos.
          li
            .row.borde-bot.pb-4
              .col-1.text-align-right
                .lista-ol--cuadro__vineta
                  span.text-white 4
              .col-11
                p #[strong La estrategia publicitaria de la competencia:] Investigar lo que está haciendo la competencia con sus estrategias publicitarias (medios, tipo de mensaje, objetivo que pretende, segmento al que llega, presupuesto) se ha convertido en un factor competitivo.
          li
            .row.borde-bot.pb-4
              .col-1.text-align-right
                .lista-ol--cuadro__vineta
                  span.text-white 5
              .col-11
                p #[strong Presupuesto publicitario: ] Determinar de dónde se obtendrá la partida económica para financiar la campaña.
      .col-6.d-none.d-md-block.align-self-center
        figure
          img(src="@/assets/template/tema-1-70.png", alt="Texto que describa la imagen")    
    p.mt-5 #[strong Prettel (2016)], describe el proceso para el desarrollo de una campaña publicitaria, así:
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="1.10.1.	Frecuencia")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-71.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Una vez que la empresa ha encontrado la combinación de medios más efectiva para llegar a su público objetivo, la siguiente pregunta que tiene que responder es: ¿con qué frecuencia debe repetir el mensaje, para conseguir un determinado nivel de notoriedad? Si la frecuencia es pequeña es posible que los mensajes no penetren en la mente del público objetivo y que los resultados de notoriedad y comprensión sean bajos. Por otra parte, si el mensaje se repite con demasiada frecuencia, los clientes potenciales podrían irritarse, lo que perjudicarían las percepciones de la publicidad, de los productos y de la propia compañía, #[strong (Best, 2007)].
          p.mt-4 Para #[strong Prettel (2016)] la frecuencia debe determinarse de acuerdo con:  
          .row.mt-3
            .col-sm.mb-5.mb-sm-0
              ul.lista-ul
                li.mb-0 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong Ciclo en que se encuentra el producto.] En la etapa de introducción, la frecuencia de anuncios debe ser alta, por la necesidad de dar a conocer el producto y por la resistencia al cambio por parte de los consumidores. 
                li.mb-0 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong Nivel de competencia. ]  Para productos altamente competidos, telefonía celular, gaseosas, cremas dentales, jabones y general los productos de uso diario en los hogares, es recomendable alta frecuencia, reconociendo también el ciclo en que se encuentre el producto.
                li.mb-0 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong El tiempo de reposición.] Para productos de alta reposición como los de consumo masivo y que, por lo tanto, no generan mucha lealtad a los consumidores, requieren alta frecuencia.
                li.mb-0 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong Duración del mensaje.] Para mensajes cortos es importante la repetición constante a fin de captar la atención del receptor. Lo contrario para mensajes largos y de gran información requieren baja frecuencia.
                li.mb-0 
                  .row
                    .col-1.text-align-right
                      i.fas.fa-angle-right.color-c.text-center
                    .col-11
                      p #[strong El presupuesto. ] Si el presupuesto para la campaña publicitaria es bajo, la baja frecuencia se acomodaría a ese bajo capital aportado por la empresa, pero teniendo en cuenta no afectar el objetivo propuesto.
      .row(titulo="1.10.2.	Intensidad")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-72.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p La intensidad del impacto de un mensaje se describe a través de la capacidad que tiene el público objetivo en recordarlo y reconocerlo. 
          P.mt-4 Algunos productos se venden en unas épocas del año mucho más que en otras, lo que hace recomendable a las empresas que se encuentran con estos hechos, la utilización de un modelo de exposición del anuncio concentrado en los períodos “pico de demanda”, en los que hay que desarrollar notoriedad, comprensión e interés hacia el producto #[strong (Best, 2007)].

    .titulo-segundo.mt-5
      #t_1_11.h4 1.11  Normativa de comunicación
    figure.mb-2
      img(src="@/assets/template/tema-1-73.png", alt="Texto que describa la imagen")
    p.mt-5 La ética en la publicidad hace parte del comentario diario de miles de personas. Se especula acerca del alcance que están tomando los diferentes anuncios a través de los diferentes medios de comunicación. No cabe duda de que la publicidad incide en los cambios de hábitos de los consumidores y hasta en su estilo de vida. Se especula mucho acerca de lo ético que puede ser, que la publicidad sea un factor de incidencia en los cambios de conducta del consumidor, los gobiernos tratan de colocar algunas barreras a la publicidad con desmedida incidencia en la conducta de los consumidores, y controles para que los publicistas no caigan en dilemas éticos (Prettel, 2016).
    p.mt-4 Por ley, las compañías deben evitar la publicidad falsa o engañosa; además, los anunciantes no deben hacer declaraciones falsas, como sugerir que un producto cura algo cuando en realidad no lo hace. También deben evitar anuncios que tengan la posibilidad de engañar, incluso cuando nadie resulte realmente engañado (Kotler, 2017).
    p.mt-4 En Colombia, la Superintendencia de Industria y Comercio, en su rol de autoridad nacional de protección al consumidor, expidió la Guía de buenas prácticas en la publicidad a través de influenciadores, una iniciativa que busca proteger a los consumidores en la era digital, luego de evidenciarse el papel que juegan los influenciadores al orientar la toma de decisiones de sus seguidores en las distintas redes sociales frente a cuáles productos adquirir.
    p.mt-4 Esta nueva forma de hacer publicidad ha venido creciendo sin información clara para los consumidores, quienes creen recibir contenidos producto de experiencias personales del influenciador, ignorando que, en ocasiones, los mismos derivan de una relación contractual con un anunciante, la cual, si bien no necesariamente resta veracidad al mensaje, su omisión resta transparencia frente a la decisión de consumo.
    h6.mt-5 Los objetivos principales de esta guía son:
    .row.mt-3
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Orientar a los anunciantes e influenciadores, sobre las pautas que se deben observar a la hora de emitir mensajes publicitarios.
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Promover el uso responsable de las nuevas prácticas publicitarias, de manera que se adopten políticas de autorregulación que se ajusten a lo establecido en la Ley 1480 de 2011 y demás normas concordantes.
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Brindar elementos a los consumidores, que les permitan identificar cuándo están ante un mensaje publicitario.
    a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank").mt-5
      .anexo__icono
        img(src="@/assets/template/icono-link.svg")
      .anexo__texto
        p Enlace web. https://www.sic.gov.co/slider/superindustria-expide-%E2%80%9Cgu%C3%ADa-de-buenas-pr%C3%A1cticas-en-la-publicidad-trav%C3%A9s-de-influenciadores%E2%80%9D        


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Promoción de ventas.',
        texto:
          'Incentivos a corto plazo que alientan la compra o venta de un producto o servicio (Kotler, 2017). Diariamente se ve como supermercados, almacenes, empresas de servicios, implementan atractivas promociones para sus compradores. A través de catálogos que cada supermercado ',
        imagen: require('@/assets/template/tema-1-4.png'),
      },
      {
        titulo: 'Marketing directo y digital.',
        texto:
          'Es el marketing encaminado a comprometerse de manera directa con consumidores individuales y comunidades de clientes seleccionados cuidadosamente, tanto para obtener una respuesta inmediata como para forjar relaciones duraderas con ellos (Kotler,2018). Es una forma de colocar productos a consumidores finales sin la utilización de lugares especiales de comercialización. Se trata de llegar al cliente o grupo de clientes potenciales de manera personalizada, utilizando una comunicación directa y así mismo haciendo entrega del producto de manera directa. La idea fundamental del marketing directo es vender cada día más productos y hacerlo de la mejor forma (Prettel, 2016).',
        imagen: require('@/assets/template/tema-1-5.png'),
      },
      {
        titulo: 'Relaciones públicas.',
        texto:
          'Actividades encaminadas a forjar buenas relaciones con los diversos públicos de una compañía mediante la generación de información favorable, la creación de una buena imagen corporativa y el manejo o bloqueo de rumores, relatos o sucesos desfavorables, (Kotler, 2017). Estas hacen parte de un programa mediante el cual una compañía utiliza toda su información para lograr, a través de los diferentes medios de comunicación existentes, una excelente relación con todos los segmentos del mercado, a fin de que resalte siempre la imagen institucional. El objetivo básico de las relaciones públicas es mantener un enlace constante entre el cliente, grupos de clientes, al mismo tiempo que se da gran apoyo a la fuerza de ventas, porque en la mayor parte de los grandes negocios, el cliente piensa en la organización que respalda el producto (Prettel, 2016). ',
        imagen: require('@/assets/template/tema-1-6.png'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped>
.bg-naranja-claro
  background-color: #FFE7C4
.tarjeta--gris
  background-color: #E8E8E8
.bg-gris-claro
  background-color: #FCFDFF
.bg-morado-claro
  background-color: #F2F3FD
.bloque-texto-a
  background-color: #20287A
.bloque-texto-a:before
  background-color: #E8E8E8
.bg-azul-claro
  background-color: rgba(124, 197, 255, 0.2)
.bg-rojo
  background-color: #97181A
.justify-content-center
  text-align: -webkit-center
.text-align-right
  text-align: right
.borde-gris
  border: solid 4px #F6F6F6 !important
.borde-der-gris
  border-right: solid 3px #AFAFAF !important
.borde-izq
  border-left: solid 1px #AFAFAF
.borde-top-gris
  border-top: solid 2px #AFAFAF
.borde-bot
  border-bottom: solid 1px #AFAFAF
.lista-ul li
  display: block
.lista-ol--cuadro__vineta
  background-color: #97181A
</style>
