<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Atención al cliente
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-1.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Para la mayoría de los operadores de aeropuertos y aerolíneas alrededor del mundo la orientación y acompañamiento al cliente es un factor de diferenciación si se tiene en cuenta que todas las compañías aéreas han entrado en la era de la certificación de sus procesos, aunque se denotan avances en mejoramiento de la infraestructura esos cambios deben ir acompañados de elevar los estándares de servicio para mejorar la percepción del cliente frente a sus expectativas.
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1  Tipología de clientes 
    .row.mt-5
      .col-12.col-lg-8
        p Conocer los tipos de clientes ayuda a entender y conocer sus necesidades, que es el punto de partida para llevar a cabo un negocio rentable y exitoso desde el punto de vista del servicio al cliente, de este modo es posible dirigir su atención hacia el producto o servicio ofrecido mediante las acciones correctas como lo muestra la tabla 5, además de aportar valor agregado a la empresa.
        p.mt-4 Algunos de los beneficios que se obtienen al conocer la tipología de clientes son:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | Saber lo que le gusta y lo que no.
          li.mt-2
            i.fas.fa-angle-right
            | Generar fidelidad y recompra.
          li.mt-2
            i.fas.fa-angle-right
            | Recomendar la compañía a más clientes.
          li.mt-2
            i.fas.fa-angle-right
            | Obtener mayores ganancias para la organización.
          li.mt-2
            i.fas.fa-angle-right
            | Tener una imagen positiva ante el público.
          li.mt-2
            i.fas.fa-angle-right
            | Mejorar el manejo de situaciones bajo presión o de conflicto.
          li.mt-2
            i.fas.fa-angle-right
            | Aplicar herramientas de negociación.
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")
    .titulo-sexto.color-acento-contenido.mt-5
      p Tabla 5
    .tabla-a.color-acento-contenido.mt-4 
      table
        thead
          tr
            th Cliente
            th Personalidad
            th Norma de tratamiento
        tbody
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Es muy exigente, cree saberlo todo, puede tornarse agresivo.
            td Adoptar una actitud atenta y tranquila, no discutir y darle la razón.
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Es concreto y conciso sabe lo que quiere es de pocas palabras.
            td Brindar información clara y concreta, con un trato correcto y amable.
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-5.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Es muy amistoso, sonriente puede tornarse fastidioso.
            td Mantener la distancia siendo amable, pendiente de lo que necesita.
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Es tímido, no toma decisiones con rapidez, se toma su tiempo para reflexionar y pide opinión. 
            td Hay que generarle confianza y seguridad dando la orientación necesaria, indagar las inquietudes, hay que dedicarle más atención y tiempo.
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Es descortés y ofensivo, normalmente discute.
            td Hablarle con calma y no contagiarnos de su actitud tratarlo con cortesía y ser asertivos. 
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Cambia de opinión fácilmente, es impaciente y emotivo, pide consejo
            td Actuar como asesor argumentando y demostrar firmeza sin ser emotivo.
          tr
            td 
              figure
                img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen").w-25.margin-0-auto
            td Intransigente, duda de todo y todos, rechaza el argumento más lógico, no reflexiona.
            td Buscar puntos comunes para generar confianza y respetar sus ideas sin afirmar lo que no se puede demostrar.
    .h4.mt-5
    .row.mt-4
      .col-12.col-lg-8
        p La inclusión social para las personas que presentan dificultad para su movilidad en el transporte y el acceso a la información y comunicaciones, se debe abordar con prudencia y sensibilidad, y no con pesar por su condición, es necesario ofrecer un trato normal y un servicio de calidad.
        p.mt-3 A continuación en la tabla 6, se describen los tipos de discapacidad y la forma correcta de actuar ante una situación similar: 
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-10.png", alt="Texto que describa la imagen")
    .titulo-sexto.color-acento-contenido.mt-5
      p Tabla 6
    .tabla-b.color-secundario.mb-5
      table
        tr.bg-acento-contenido.text-center.text-white
          th 
            .h3.mb-0 Tipo de discapacidad
          td
            .h3.mb-0 Cómo actuar
        tr
          th 
            figure
              img(src="@/assets/template/tema-2-11.png", alt="Texto que describa la imagen").w-50.margin-0-auto
          td 
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | Ofrecer ayuda.
              li.mt-2
                i.fas.fa-angle-right
                | Actuar con naturalidad.
              li.mt-2
                i.fas.fa-angle-right
                | No utilizar el lenguaje gestual o expresiones indefinidas.
              li.mt-2
                i.fas.fa-angle-right
                | No utilizar frases o palabras consideradas tabúes.
              li.mt-2
                i.fas.fa-angle-right
                | Ofrecer asiento.
              li.mt-2
                i.fas.fa-angle-right
                | No cambiar de sitio su bastón.
              li.mt-2
                i.fas.fa-angle-right
                | Leerle documentos despacio y pronunciando claramente.
              li.mt-2
                i.fas.fa-angle-right
                | Ser rápidos en el servicio.
        tr
          th 
            figure
              img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen").w-50.margin-0-auto
          td 
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | Hablar mirando al cliente.
              li.mt-2
                i.fas.fa-angle-right
                | Utilizar frases cortas y sencillas.
              li.mt-2
                i.fas.fa-angle-right
                | No hablar deprisa ni tampoco demasiado despacio.
              li.mt-2
                i.fas.fa-angle-right
                | Apoyarse en el lenguaje gestual.
              li.mt-2
                i.fas.fa-angle-right
                | Permanecer quieto mientras se comunica y no darle la espalda.
        tr
          th 
            figure
              img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen").w-50.margin-0-auto
          td 
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | No tocar la silla de ruedas a no ser que el cliente lo solicite.
              li.mt-2
                i.fas.fa-angle-right
                | Disponer de rampas para sillas de ruedas.
              li.mt-2
                i.fas.fa-angle-right
                | Facilitar el acceso a los servicios, despejando las áreas. 
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Portafolio de servicios aéreos
    figure.mt-4
      img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
    p.mt-4 Un portafolio de servicio es un documento o presentación donde las compañías detallan las características de la oferta comercial y se contempla la información básica y precisa de la compañía ya que está dirigida a clientes, socios y/o proveedores.
    p.mt-5 El portafolio incluye:
    .row.mt-4
      .col-10.offset-1
        .row.mt-5
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Reseña histórica de la empresa")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-15.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Es la información de la conformación de la compañía, fecha de inicio, actividades, crecimiento y expansión. 
            .row(numero="2" titulo="Misión y visión")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-16.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p De acuerdo con la situación de la empresa se crea el plan estratégico que va representado en la misión donde se responde a la pregunta ¿qué hace y ofrece la organización? Está relacionado con el objetivo general; la visión establece las metas y proyecciones que se quieran alcanzar a un tiempo determinado. 
            .row(numero="3" titulo="Valores corporativos")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-17.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Son vitales para que generen confianza al usuario y a los mismos colaboradores de toda la organización.
            .row(numero="4" titulo="Objetivos de la empresa")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-18.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Se definen a corto, mediano y largo plazo.
            .row(numero="5" titulo="Productos y servicios")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-19.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Los que se tienen disponibles y los que se proyectan adquirir a futuro.
            .row(numero="6" titulo="Garantías y sellos de calidad")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-20.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Incluye todos los reconocimientos que ha adquirido la empresa en su trayectoria y las certificaciones de calidad que garanticen el producto o servicio.
            .row(numero="7" titulo="Nuestros proveedores")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-21.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Se destacan los de prestigio a nivel nacional e internacional. 
            .row(numero="8" titulo="Nuestros clientes más importantes")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-22.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Estos son los clientes que utilizan el servicio constantemente o pasajeros frecuentes, VIP.
            .row(numero="9" titulo="Datos de contacto")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-23.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Incluye las diferentes formas de contacto disponibles por la compañía, como: teléfonos, dirección postal, correo electrónico, redes sociales, y página web. 
    p.mt-5 Es importante tener disponible este portafolio de servicios en documento (PDF) en la página de la empresa para que el usuario pueda visualizarlo y descargarlo en línea.
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3  Protocolos de servicio aéreo
    .row.mt-4
      .col-12.col-lg-8
        p Las aerolíneas se enfocan en la prestación del servicio al usuario generando fidelización y liderazgo en el mundo aeronáutico, por lo tanto dentro de sus protocolos y políticas de calidad involucran el fortalecimiento y el desarrollo de capacidades en temas relacionados con trabajo en equipo y sus responsabilidades dentro de cada una de las áreas de servicio que intervienen en la operación de un aeropuerto, es por ello que quién esté al frente del servicio al cliente, debe ser una persona que cumpla con un perfil enfocado hacia la prestación del servicio personalizado, con una amplia capacidad para actuar eficientemente frente a situaciones que beneficien a las partes involucradas, siguiendo los protocolos establecidos para el proceso de viaje y satisfacción del cliente.
        p.mt-3 En la actualidad se afronta una situación crítica de salud sin precedentes, por la contingencia presentada con la pandemia del COVID-19 que azota al mundo entero y principalmente al sector turístico, por tal motivo la industria aérea en coordinación con la OACI y entes de salud han establecido protocolos de bioseguridad para reactivar el transporte aéreo de pasajeros, en Colombia el Gobierno nacional presenta el protocolo de bioseguridad para los aeropuertos y las empresas aéreas. 
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-24.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-3.d-none.d-lg-block.align-self-center
              figure
                img(src="@/assets/template/tema-2-25.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-12.col-lg-9
              p.mb-0.px-4.py-3 En el material complementario para este tema “Gobierno nacional da a conocer el Protocolo de Bioseguridad para la prevención del Covid-19”, podrá encontrar información sobre el protocolo de bioseguridad para prevención del Covid-19, en Colombia. 
    .row.mt-4
      .col-10.offset-1
        .tarjeta.color-primario.p-4.mb-5.bg-morado-gradiente
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-2-26.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1.text-white Reanudación segura de la aviación
                  p.text-small.text-white Los entes que intervienen en la actividad aeroportuaria han creado estrategias para la reactivación del sector, y orientar respecto a las medidas generales de bioseguridad que debe adoptar el sector aeroportuario, con el fin de disminuir el riesgo de transmisión del virus de humano a humano durante el desarrollo de las actividades relacionadas con el transporte aéreo en el territorio colombiano. Se recomienda revisar el documento del enlace que antecede para conocer las medidas adoptadas.
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.mt-4
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4 Etapas de protocolos de servicio aéreo 
                p.mt-3 La inclusión social para las personas que presentan dificultad para su movilidad en el transporte y el acceso a la información y comunicaciones, se debe abordar con prudencia y sensibilidad, y no con pesar por su condición, es necesario ofrecer un trato normal y un servicio de calidad.
                p.mt-3  A continuación en la tabla 6, se describen los tipos de discapacidad y la forma correcta de actuar ante una situación similar: 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-27.svg" alt="Texto que describa la imagen")
    TabsA.color-acento-contenido.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 1. Apertura del servicio").bg-morado-claro
        h4 Etapa 1. Apertura del servicio
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-28.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 Se inicia con un saludo cordial y bienvenida, brindándole respeto, confianza, resolviendo sus inquietudes y suministrando la información requerida para el viaje. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 2. Análisis y comprensión")
        h4 Etapa 2. Análisis y comprensión
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-29.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 Es necesario manejar una escucha activa para interpretar las peticiones o solicitudes de los usuarios; esto facilita la comprensión de sus necesidades.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 3. Intervención y solución ")
        h4 Etapa 3. Intervención y solución 
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-30.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 Se promueve la solución de las inquietudes, brindando un servicio adecuado, ágil, seguro, confiable y personalizado para que el pasajero se sienta importante.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 4. Lenguaje claro y sencillo ")
        h4 Etapa 4. Lenguaje claro y sencillo 
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-31.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 En la atención al cliente, el lenguaje es muy importante. Se debe evitar utilizar términos técnicos para dar indicaciones al usuario, esto puede confundirlo.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 5. Cordialidad en la comunicación ")
        h4 Etapa 5. Cordialidad en la comunicación 
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-32.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 Manejar las normas básicas de cortesía y dirigirse al pasajero por su nombre lo hace sentirse acogido. Además es importante mostrar empatía por la situación que presente.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Etapa 6. Retroalimentar las soluciones brindadas ")
        h4 Etapa 6. Retroalimentar las soluciones brindadas 
        .row
          .col-4.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-33.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            p.mb-0 Ofrecer al usuario indicaciones u otro tipo de ayudas como, escarapelas de equipaje, volantes informativos, indicación de las pantallas digitales, u otra información que aclare sus dudas.
    p.mt-5 Los protocolos implementados en el servicio del transporte aéreo, anteriormente expuestos, se utilizan en:
    ul.lista-ul.mt-4
      li 
        i.fas.fa-angle-right
        | Oficinas y puntos directos.
      li.mt-2
        i.fas.fa-angle-right
        | Aeropuertos.
      li.mt-2
        i.fas.fa-angle-right
        | Canal telefónico.
      li.mt-2
        i.fas.fa-angle-right
        | Portal Web.
      li.mt-2
        i.fas.fa-angle-right
        | Asesoría virtual.
      li.mt-2
        i.fas.fa-angle-right
        | Correo electrónico.
    .row.mt-4
      .col-10.offset-1
        .tarjeta.color-primario.p-4.mb-5.bg-amarillo-gradiente
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-2-34.svg").w-75.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ejemplo protocolo servicio al cliente
                  p.text-small En el siguiente documento podrá ampliar la información de los protocolos utilizados en una empresa de servicio de transporte aéreo colombiana en las diferentes áreas.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    p.mt-5 Funciones generales de servicio al cliente en aeropuertos
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Previas a la prestación del servicio")
            ul.lista-ul.mt-4.px-4
              li 
                i.fas.fa-angle-right
                | Comunicar requisitos para la atención.
              li.mt-2
                i.fas.fa-angle-right
                | Informar canales que ofrecen servicio.
              li.mt-2
                i.fas.fa-angle-right
                | Revisión permanentemente la actualización de la información. 
              li.mt-2
                i.fas.fa-angle-right
                | Garantizar fácil acceso a la información.

          .row(numero="2" titulo="Durante la prestación del servicio")
            .col-12.p-4
                ul.lista-ul.px-4
                  li 
                    i.fas.fa-angle-right
                    | Ofrecer información sobre la prestación del servicio.
                  li.mt-2
                    i.fas.fa-angle-right
                    | Requerir sólo aquello que sea necesario para la prestación del servicio.
                  li.mt-2
                    i.fas.fa-angle-right
                    | Explicar con claridad las actividades o trámites requeridos.
          .row(numero="3" titulo="Posteriores a la prestación del servicio")
            .col-12.p-4
                ul.lista-ul.px-4
                  li 
                    i.fas.fa-angle-right
                    | Obtener retroalimentación del usuario.
                  li.mt-2
                    i.fas.fa-angle-right
                    | Informar al usuario el medio por el que puede acceder para conocer el estado del trámite.
                  li.mt-2
                    i.fas.fa-angle-right
                    | Evaluar la percepción y su nivel de satisfacción.
                  li.mt-2
                    i.fas.fa-angle-right
                    | Solucionar los aspectos que afectan la satisfacción de los usuarios.
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4  Manejo de PQRS 
    .row.mt-5
      .col-12.col-lg-8
        p Las empresas aéreas adoptan sistemas de atención y solución a las sugerencias, quejas y reclamos de los pasajeros, para darles solución en el menor tiempo posible, según la situación y en su defecto hacerlo llegar al área correspondiente para dar respuesta oportuna, esto representa una oportunidad para la mejora continua en los procesos de la organización, con el fin de mantener y captar nuevos clientes. 
        p.mt-4 Para realizar un buen proceso de solución a una PQR se debe tener en cuenta
        ul.lista-ul.px-4
          li 
            i.fas.fa-angle-right
            | Personal capacitado para tal fin.
          li.mt-2
            i.fas.fa-angle-right
            | Horarios que sean acordes a la operación de la aerolínea. 
          li.mt-2
            i.fas.fa-angle-right
            | Procedimientos para recibir la reclamación con formatos de fácil comprensión en español e inglés.
          li.mt-2
            i.fas.fa-angle-right
            | Publicidad del sistema implementado dando información a la entidad aeronáutica o competente.
          li.mt-2
            i.fas.fa-angle-right
            | Difusión de los derechos y deberes de los usuarios y será de cumplimiento obligatorio para los funcionarios de la aerolínea.
        p.mt-4 Las quejas y reclamos son una oportunidad de mejora y se debe dar el manejo correcto y oportuno para que no se conviertan en futuros problemas. 
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-35.png", alt="Texto que describa la imagen")
    .h4.mt-5 Diferencia entre quejas, reclamaciones y sugerencias:
    .row.mt-4
      .col-10.offset-1
        .row
          .col-5.d-none.d-lg-block.m-0.p-0
            figure
              img(src="@/assets/template/tema-2-36.png", alt="Texto que describa la imagen")
          .col-12.col-lg-7.px-4.pt-4.borde-gris-claro.borde-no-izq.rounded-der-bot.rounded-der-top-20
            .h4 Las sugerencias
            p.mt-3 Para este fin las empresas crean un sistema de recolección de opiniones y puntos de vista de los clientes que por lo general son anónimas, sobre una situación determinada; la información sirve para mejorar los procesos o servicio, e identificar en que se está fallando, los medios que se utilizan pueden ser los buzones de sugerencias, correos electrónicos, en las páginas web o por WhatsApp.
    .row.mt-5
      .col-10.offset-1
        .row
          .col-5.d-none.d-lg-block.m-0.p-0
            figure
              img(src="@/assets/template/tema-2-37.png", alt="Texto que describa la imagen")
          .col-12.col-lg-7.px-4.pt-4.borde-gris-claro.borde-no-izq.rounded-der-bot.rounded-der-top-20
            .h4 Las quejas
            p.mt-3 Es una alerta dada por los clientes sobre posibles fallas que se están presentando en las diferentes áreas de la organización. Existen tres clases de quejas.
            ol.lista-ol--cuadro.mt-4.px-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cuando la organización se equivoca: se debe pedir disculpas sin acusar a compañeros y explicar la situación solucionando lo más rápido posible.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cuando la organización no está equivocada, pero está de acuerdo con el cliente, hay que darles a conocer que se le está ayudando y que es una excepción que se está realizando. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cuando la organización tiene razón y está de acuerdo con el cliente, demostrar que hay interés en ayudarlo y si existe alguna alternativa ofrecerla, pero si no hay posibilidad darle a conocer que no es posible acceder a su petición.
    .row.mt-5
      .col-10.offset-1
        .row
          .col-5.d-none.d-lg-block.m-0.p-0
            figure
              img(src="@/assets/template/tema-2-38.png", alt="Texto que describa la imagen")
          .col-12.col-lg-7.px-4.pt-4.borde-gris-claro.borde-no-izq.rounded-der-bot.rounded-der-top-20
            .h4 Las reclamaciones
            p.mt-3 Es una petición por una situación que se le presenta al cliente, la forma más adecuada es solucionarlo al instante que se presenta el evento para que la situación no se convierta en una reclamación y se llegue al punto de darle un resarcimiento por los daños o perjuicios ocasionados.
            p.mt-3 Las reclamaciones pueden ser de tres clases:
            ol.lista-ol--cuadro.mt-4.px-4
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cuando la organización se equivoca.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cuando la organización no se equivoca, pero están de acuerdo con el cliente.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                | Cuando la organización no se equivoca, pero no están de acuerdo con el cliente.
    .h4.mt-5 Cómo manejar las quejas o reclamos de los clientes
    figure.mt-4
      img(src="@/assets/template/tema-2-39.png", alt="Texto que describa la imagen")
    p.mt-4 Siempre se presentan situaciones de dificultades en el transporte de los pasajeros y atención al cliente en un aeropuerto por diversos eventos sean directos o indirectos de la empresa y se debe dar respuesta y posibles soluciones para poder reforzar el vínculo con el cliente e ir más allá de sus expectativas.
    .row.mt-4
      .col-10.offset-1
        .row.mt-5
          LineaTiempoD.color-acento-contenido
            .row(numero="1" titulo="Afronte el problema")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-40.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Tómese un tiempo, pero solucione o conteste al usuario en el menor tiempo posible la reclamación o queja. 
            .row(numero="2" titulo="Escuche atentamente")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-41.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Dele el tiempo suficiente sin interrupción para que el usuario exprese su inconformidad y se dé cuenta que lo quiere ayudar.
            .row(numero="3" titulo="Muestre aprobación")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-42.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Puede no estar de acuerdo con el cliente, pero evite mostrar gestos o desaprobación, por el contrario, hágale saber que entiende lo que sucede
            .row(numero="4" titulo="Ofrezca disculpas")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-43.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Pídale disculpas por lo sucedido, esto permite calmar los ánimos y que se dé cuenta que acepta el error y le ayudará a solucionar el problema, si no es su culpa o de la compañía.
            .row(numero="5" titulo="Comunique como se va a solucionar el problema")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-44.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Ofrecer disculpas y comunicarle las medidas que se van a tomar para la solución.
            .row(numero="6" titulo="Resuelva el problema")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-45.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Si no es precedente no se genera documento, si es precedente se analiza y determina la aplicación de la acción inmediata.  
            .row(numero="7" titulo="Ofrezca algo más")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-46.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Ofrecer un resarcimiento por el inconveniente y tiempo perdido, según aplique y políticas de la compañía. 
            .row(numero="8" titulo="Realice seguimiento")
              .col-2.col-lg-1
                figure
                  img(src="@/assets/template/tema-2-47.svg", alt="Texto que describa la imagen")
              .col-10.col-lg-11
                p Asegurar la satisfacción del cliente, en cuanto al cumplimiento de sus necesidades y expectativas, y no repetir el inconveniente.
    p.mt-5 Lo que no se debe hacer en el tratamiento de reclamaciones es: 
    ul.lista-ul.px-4
      li 
        i.fas.fa-angle-right
        | No ver la reclamación como una amenaza.
      li.mt-2
        i.fas.fa-angle-right
        | Limitarse a disculparse.
      li.mt-2
        i.fas.fa-angle-right
        | Culpar al cliente del suceso.
      li.mt-2
        i.fas.fa-angle-right
        | Hacer promesas y no cumplir.
      li.mt-2
        i.fas.fa-angle-right
        | No quedarse callado.
      li.mt-2
        i.fas.fa-angle-right
        | Dar un trato descortés.
      li.mt-2
        i.fas.fa-angle-right
        | Pasarle el problema a otra persona.
      li.mt-2
        i.fas.fa-angle-right
        | Mostrar malas actitudes y expresiones desagradables.
      li.mt-2
        i.fas.fa-angle-right
        | Excederse en procedimientos para recibir la reclamación.
      li.mt-2
        i.fas.fa-angle-right
        | No hacer interrogatorios innecesarios.
      li.mt-2
        i.fas.fa-angle-right
        | No brindar la información de dónde y cómo presentar la reclamación.
      li.mt-2
        i.fas.fa-angle-right
        | No realizar un seguimiento de satisfacción del cliente.
    .row.mt-4
      .col-10.offset-1
        .tarjeta.color-primario.p-4.mb-5.bg-amarillo-gradiente
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-2-48.svg").w-75.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Servicio al cliente
                  p.text-small Revise el documento de la conferencia mundial de transporte aéreo, donde se abordan los criterios y directrices en materia de servicio al cliente y calidad total en los servicios aéreos y aeroportuarios.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
