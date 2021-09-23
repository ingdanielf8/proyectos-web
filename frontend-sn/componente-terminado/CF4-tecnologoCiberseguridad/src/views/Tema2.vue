<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Baggage compensation // Compensaciones de equipaje    
    p.mt-5 Para el estudio y profundización de los contenidos de este componente formativo, es importante una previa comprensión y adopción de la guía técnica denominada G.ES.05 (sobre el diseño y las formas de ejecución e implementación de un plan de seguridad de la información), propuesta por MinTIC, con el fin de establecer dicho plan o estrategia.
    .h4.mt-5 A continuación, se muestran los pasos y requerimientos clave, indicados por la guía técnica G.ES.05. Se recomienda prestar mucha atención para comprenderlos, asimilarlos y tomar nota atenta de ellos: 
    
    SlyderA.mt-5.mb-5.slyder-botones-abajo
      .row
        .col-4.px-4
          .row.bg-aguamarina.rounded-20.h-100.px-3
            .col-4.pt-4           
              figure
                img(src="@/assets/template/tema-2-1.svg")
            .h3.mt-4.mb-0 Paso 1:
            .h4.mt-2 Identificación del estado actual
            p.mb-5.mt-3 Basado en la clasificación de los activos de información, identifica el estado actual de capacidad o madurez del proceso de seguridad de la información de la compañía u organización.
        .col-4.px-4
          .row.bg-morado-claro.rounded-20.h-100.px-3
            .col-4.pt-4           
              figure
                img(src="@/assets/template/tema-2-2.svg")
            .h3.mt-4.mb-0 Paso 2:
            .h4.mt-2 Definición de los objetivos
            p.mt-3.pb-5 Es clave tener en cuenta objetivos establecidos, ya que esto favorece el trazo e implementación de la estrategia de seguridad de la información, según la ISO/IEC 27001-2013.
        .col-4.px-4    
          .row.bg-aguamarina.rounded-20.h-100.px-3    
            .col-4.pt-4           
              figure
                img(src="@/assets/template/tema-2-3.svg")
            .h3.mt-4.mb-0 Paso 3:
            .h4.mt-2 Determinación del estado deseado
            p.mb-5.mt-3 Tener en cuenta el nivel del estado que se desea alcanzar, por medio de llevar a cabo la estrategia de seguridad digital en la organización, partiendo del estado o nivel actual.
        
      div.row
        .col-4.px-4
          .row.bg-morado-claro.rounded-20.h-100.px-3
            .col-4.pt-4           
              figure
                img(src="@/assets/template/tema-2-4.svg")
            .h3.mt-4.mb-0 Paso 4: 
            .h4.mt-2 Determinación del nivel de riesgo aceptable
            p.mt-3.pb-5 Definir el nivel de riesgo aceptable de la seguridad digital que se tendrá en cuenta en la estrategia, con base en la necesidad de riesgo de la organización. 
        .col-4.px-4    
          .row.bg-aguamarina.rounded-20.h-100.px-3    
            .col-4.pt-4           
              figure
                img(src="@/assets/template/tema-2-5.svg")
            .h3.mt-4.mb-0 Paso 5: 
            .h4.mt-2 Definición y ejecución del plan de acción
            p.mb-5.mt-3 Fijar la hoja de ruta para lograr el estado deseado de la estrategia, teniendo en cuenta personas, tecnologías y procesos, entre otros recursos.
    //- .carousel.mt-5
    //-   .contenedor-principal.row.px-4 
    //-     .contenedor-carousel
    //-       .carousel.row
    //-         .informacion.col-4.px-4
    //-           .row.bg-aguamarina.rounded-20.h-100 
    //-             .col-4.pt-4           
    //-               figure
    //-                 img(src="@/assets/template/tema-2-1.svg")
    //-             .h3.mt-4.mb-0 Paso 1
    //-             .h4.mt-2 Identificación del estado actual
    //-             p.mb-5.mt-3 Basado en la clasificación de los activos de información, identifica el estado actual de capacidad o madurez del proceso de seguridad de la información de la compañía u organización.

    //-         .informacion.col-4.px-4          
    //-           .row.bg-morado-claro.rounded-20.h-100
    //-             .col-4.pt-4           
    //-               figure
    //-                 img(src="@/assets/template/tema-2-2.svg")
    //-             .h3.mt-4.mb-0 Paso 2
    //-             .h4.mt-2 Definición de los objetivos
    //-             p.mt-3.pb-5 Es clave tener en cuenta objetivos establecidos, ya que esto favorece el trazo e implementación de la estrategia de seguridad de la información, según la ISO/IEC 27001-2013.
    //-         .informacion.col-4.px-4
    //-           .row.bg-aguamarina.rounded-20.h-100    
    //-             .col-4.pt-4           
    //-               figure
    //-                 img(src="@/assets/template/tema-2-3.svg")
    //-             .h3.mt-4.mb-0 Paso 3
    //-             .h4.mt-2 Determinación del estado deseado
    //-             p.mb-5.mt-3 Tener en cuenta el nivel del estado que se desea alcanzar, por medio de llevar a cabo la estrategia de seguridad digital en la organización, partiendo del estado o nivel actual.
    //-     button(role="button").flecha-izquierda.mt-5.p-0
    //-       <i class="fas fa-arrow-circle-left mt-5 "></i>
    //-     button(role="button").flecha-derecha.p-0
    //-       <i class="fas fa-arrow-circle-right mt-5 "></i>
    .h4.mt-5.pt-5  Configuración de pasos para el diseño de controles
      .row.mt-4
        .col-6
          p Cada paso requerido para lograr el diseño de los controles de seguridad cuenta con una triada de elementos constitutivos: 
    figure.mt-2
      img(src="@/assets/template/tema-2-6.png")
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1 Entradas y salidas 
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.w-45(
        :style="{'background-image': `url(${require('@/assets/template/tema-2-7.png')})`}"
      )
      .bloque-texto-g__texto.w-72.p-4
        p.mb-0 Se entiende como una entrada aquel o aquellos elementos ya existentes que serán de gran utilidad para instalar el paso. Se trata de elementos que ya tiene la organización en su haber y en su quehacer y que favorecen la instauración de cualquiera de los cinco pasos para cumplir con el diseño del plan de controles de seguridad.
    p.mt-5 En esta misma línea, están las #[strong salidas]. Cuando se habla de salidas, se está haciendo referencia a las herramientas de registro o de documentación que se tendrán luego de haber analizado, ajustado o intervenido los documentos o registros ya existentes relacionados con objetivos, planes de acción, estados de ciberseguridad de la compañía o clasificación de los activos de información, entre otros. 
    .row.mt-5
      .col-4.offset-2.px-4
        .row.bg-aguamarina.rounded-20.h-100.py-5
          p.px-5.py-5 En términos más concretos, las salidas son aquellas herramientas documentales o de registro, que se dejan actualizadas luego de otra anterior.

      .col-4.px-3
        .row.bg-morado-claro.rounded-20.h-100.py-5
          p.px-5.py-5 Ambos elementos, entradas y salidas, son parte de la configuración de los pasos que se siguen para el diseño de los controles de seguridad.
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Actividades
    p.mt-5 Los pasos que se siguen para el diseño de los controles de seguridad, además de estar estructurados y orientados por las entradas y las salidas, requieren el cumplimiento de algunas acciones o actividades, según el paso, que darán sentido, cumplimiento y efectividad a cada paso y, en consecuencia, a los controles.
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img.w-45(
        :style="{'background-image': `url(${require('@/assets/template/tema-2-8.png')})`}"
      )
      .bloque-texto-g__texto.w-72.p-4
        p.mb-0 El desarrollo de esas actividades deberá contemplar tiempos, responsables, herramientas, entradas y salidas de cada paso, propósitos de cada paso e intención de cada control.
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3. Paso uno: identificación del estado actual
    .row.mt-5
      .col-12.col-lg-5.align-self-center
       p.mt-3.cuadro-morado.py-4 Este procedimiento es el primero de los pasos para el diseño de los controles de seguridad y está basado en la clasificación de los activos de información. Con este, se identifica el estado actual de capacidad o madurez que tiene el proceso de seguridad de la información en la organización.

      .col-4.col-lg-6.offset-3.offset-lg-1
        figure
          img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen")
    .h4.mt-5 A continuación, la estructuración de este primer paso, con sus respectivas entradas, salidas y actividades: 	
    .psicologia-color.d-flex.mt-5
      .cuadros-p.cuadros-p--morado.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-10.svg")
          .h3 Entradas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.m-auto.align-self-center.px-5
            .h3 Entradas
            p La identificación del estado actual cuenta con entradas, como los inventarios de los activos de información y/o la metodología evaluativa y de categorización de tales activos de información. 
      
      .cuadros-p.cuadros-p--morado-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-11.svg")
          .h3.text-white  Salidas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Salidas
            p Algunas salidas de este paso son los activos de información ya categorizados o clasificados, incluyendo elementos como criticidad y sensibilidad, también la meta implantada de seguridad digital o el estado presente de la seguridad informática en la empresa u organización.

      .cuadros-p.cuadros-p--morado-mas-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-12.svg")
          .h3.text-white  Algunas actividades
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Algunas actividades
            ul.lista-ul
              li 
                i.fas.fa-check
                | Fijar el estado presente de la seguridad informática o digital.
              li 
                i.fas.fa-check
                | Valuación y análisis de madurez o de capacidad del proceso de seguridad digital.
              li 
                i.fas.fa-check
                | Establecer los activos de información y hacer su respectiva valoración, cuantitativa y cualitativa.
              li 
                i.fas.fa-check
                | Clasificar los activos informáticos teniendo como base el nivel de criticidad y, por supuesto, el nivel de sensibilidad.
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4 Paso dos: definición de los objetivos
    .row.mt-5
      .col-12.col-lg-5.align-self-center
       p.mt-3.cuadro-morado.py-4 Se trata del segundo de los pasos para cumplir con el diseño de los controles de seguridad dentro de la organización y, con él, se han de tener en cuenta los objetivos establecidos para trazar e implementar la estrategia de seguridad de la información, con el debido cumplimiento de los criterios establecidos por la normativa. No olvide que la norma vigente y sobre la cual estamos haciendo énfasis en este componente formativo es la ISO/IEC 27001-2013.

      .col-4.col-lg-6.offset-3.offset-lg-1
        figure
          img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen")
    .h4.mt-5 Profundice en las entradas, salidas y actividades de este segundo paso en el recurso que, a continuación, se presenta: 	
    .psicologia-color.d-flex.mt-5
      .cuadros-p.cuadros-p--morado.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-10.svg")
          .h3 Entradas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.m-auto.align-self-center.px-5
            .h3 Entradas
            p Algunas entradas de este paso son: el plan estratégico de la compañía, el inventario de los activos de información ya categorizados, las metas establecidas con respecto a la seguridad digital,  la determinación de negocio y/o medios tecnológicos que afectan el logro de objetivos,  el compendio de normas y estatutos o leyes, decretos, etc., que regulan la clasificación de información.

      .cuadros-p.cuadros-p--morado-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-11.svg")
          .h3.text-white  Salidas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Salidas
            p En este caso, las salidas más destacadas son los objetivos establecidos de la estrategia misma.

      .cuadros-p.cuadros-p--morado-mas-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-12.svg")
          .h3.text-white  Algunas actividades
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Algunas actividades
            ul.lista-ul
              li 
                i.fas.fa-check
                | Determinar los objetivos de alineación estratégica: el cumplimiento de estos permite ajustar los objetivos de seguridad informática con los de la organización.
              li 
                i.fas.fa-check
                | Determinar los objetivos de gestión de riesgos: el logro de estos objetivos es la implementación de medidas para mitigar riesgos y reducir el posible impacto.
              li 
                i.fas.fa-check
                | Determinar los objetivos de entrega de valor: su función es permitir la optimización de las inversiones en cuanto a la seguridad informática, apoyando los objetivos de la organización.
            .h4.mt-4 Otras actividades de suma importancia
            p.mt-3 Determinar los objetivos de gestión de recursos: su función es permitir la utilización del conocimiento y la infraestructura de seguridad digital con eficiencia y efectividad.
            ul.lista-ul.mt-3
              li 
                i.fas.fa-check
                | Determinar los objetivos de medición del desempeño: la finalidad de cumplir estos objetivos debe posibilitar monitorear y reportar todos los procesos de la seguridad digital.
    
    .titulo-segundo.mt-5
      #t_2_5.h4 2.5  Paso tres: determinación del estado deseado
    .row.mt-5
      .col-12.col-lg-5.align-self-center
       p.mt-3.cuadro-morado.py-4 Determinar el estado de seguridad que se desea alcanzar es el tercer paso que se sigue en el diseño de controles de seguridad. En este paso, hay que tener en cuenta el nivel del estado que se desea alcanzar con la aplicación y desarrollo de la estrategia de seguridad digital de la organización. Desde luego, este paso debe contemplar también el estado actual y partir de él.

      .col-4.col-lg-6.offset-3.offset-lg-1
        figure
          img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
    .h4.mt-5 Entérese, a continuación, de las entradas, salidas y actividades que estructuran este tercer paso en el diseño de controles de seguridad:
    .psicologia-color.d-flex.mt-5
      .cuadros-p.cuadros-p--morado.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-10.svg")
          .h3 Entradas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.m-auto.align-self-center.px-5
            .h3 Entradas
            p Algunas entradas para la determinación del estado deseado son: los objetivos de la estrategia de seguridad digital ya establecidos, el estado actual del proceso de seguridad digital y los estándares y/o mejores prácticas, como, por ejemplo, #[strong la ISO 27001:2013 y la ISO 27002:2013].
      .cuadros-p.cuadros-p--morado-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-11.svg")
          .h3.text-white  Salidas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Salidas
            p En la determinación del estado deseado, una salida necesaria es, justamente, la mirada al estado deseado. Ha de ser una herramienta organizada y en correspondencia lógica con el actual.

      .cuadros-p.cuadros-p--morado-mas-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-12.svg")
          .h3.text-white  Algunas actividades
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Algunas actividades
            ul.lista-ul
              li 
                i.fas.fa-check
                | Determinar  el estado deseado del proceso de seguridad digital dentro de la organización, en términos cualitativos de atributos, resultados y características.
              li 
                i.fas.fa-check
                | Reconocer el nivel de madurez deseado.
              li 
                i.fas.fa-check
                | Definir , de la mano de la alta gerencia de la organización, el nivel de madurez deseado, determinando el proceso para que cumpla con sus objetivos y satisfaga las necesidades de la organización.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-2-15.svg").w-60.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.py-3
                  h3.mb-1 Amplia tus conocimientos
                  p.text-small Para ampliar su saber sobre otros estándares que contribuyen en la determinación del estado deseado, se recomienda revisar el siguiente material: CMMI, COBIT, ITIL. ISO/IEC 20000 y COSO, el cual puede encontrar en   
                .col-sm-auto
                  a.boton.bg-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.texto-acento-botones Descargar
                    i.fas.fa-file-download.texto-acento-botones
    .row
      .col-7.offset-1
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-rojo.svg")
          .anexo__texto
            p https://www.globalbit.co/2019/07/22/modelo-cmmi-calidad-y-buenas-practicas-en-el-desarrollo-de-software/
      .col-7.offset-1.mt-3
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-rojo.svg")
          .anexo__texto
            p  https://www.emagister.com/blog/que-es-itil/ 
      .col-7.offset-1.mt-3
        a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-rojo.svg")
          .anexo__texto
            p https://www.globalsuitesolutions.com/es/que-es-modelo-coso/
    .titulo-segundo.mt-5
      #t_2_6.h4 2.6. Paso cuatro: determinación del nivel de riesgo aceptable
    .row.mt-5
      .col-12.col-lg-5.align-self-center
       p.mt-3.cuadro-morado.py-4 Se trata del cuarto paso en el diseño de controles de seguridad y consiste en definir el nivel de riesgo máximo que la organización considera aceptable en lo referente a la seguridad digital. Este nivel de riesgo aceptable se tendrá en cuenta en la estrategia, con base en la necesidad de riesgo de la organización.  

      .col-4.col-lg-6.offset-3.offset-lg-1
        figure
          img(src="@/assets/template/tema-2-16.png", alt="Texto que describa la imagen")
    .psicologia-color.d-flex.mt-5
      .cuadros-p.cuadros-p--morado.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-10.svg")
          .h3 Entradas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.m-auto.align-self-center.px-5
            .h3 Entradas
            ul.lista-ul
              li 
                i.fas.fa-check
                | Objetivos de la estrategia ya establecidos.
              li 
                i.fas.fa-check
                | Estado actual del proceso de seguridad digital.
              li 
                i.fas.fa-check
                | Estado deseado del proceso de seguridad digital.
              li 
                i.fas.fa-check
                | Necesidad de riesgo de la organización: es de suma importancia que la alta dirección de una organización establezca y formalice su necesidad de riesgo. Esta necesidad de riesgo hace referencia al riesgo que una organización está dispuesta a afrontar para lograr sus objetivos.
              li 
                i.fas.fa-check
                | Metodología de gestión de riesgos.
             
      .cuadros-p.cuadros-p--morado-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-11.svg")
          .h3.text-white  Salidas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Salidas
            ul.lista-ul
              li 
                i.fas.fa-check
                | Niveles de riesgo admisibles.
              li 
                i.fas.fa-check
                | Mapa de riesgos de TI.
              li 
                i.fas.fa-check
                | Estrategia actualizada y/o ajustada de la seguridad de la Información.
      .cuadros-p.cuadros-p--morado-mas-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-12.svg")
          .h3.text-white  Algunas actividades
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Algunas actividades
            ul.lista-ul
              li 
                i.fas.fa-check
                | Determinar la necesidad de riesgo de la organización: es el riesgo que la organización está dispuesta a correr por obtener beneficios.    
              li 
                i.fas.fa-check
                | Establecer el nivel de riesgo aceptable para la seguridad digital: con base en este nivel de riesgo es posible, entonces, realizar la gestión de todos los riesgos que se asocian con el proceso de seguridad digital o de información.    
              li 
                i.fas.fa-check
                | Adaptar una metodología de gestión de riesgos a la organización: con la finalidad de determinar sus riesgos e impedir, lo más posible, la materialización de tales riesgos, iniciar su tratamiento.
              li 
                i.fas.fa-check
                | Dirigir la estrategia de gestión de los riesgos críticos que hayan sido hallados.
    .titulo-segundo.mt-5
      #t_2_7.h4 2.7. Paso cinco: definición y ejecución del plan de acción
    .row.mt-5
      .col-12.col-lg-5.align-self-center
       p.mt-3.cuadro-morado.py-4 Como quinto paso en el diseño de controles de seguridad, se encuentra la definición y ejecución del plan de acción. Se trata de fijar la hoja de ruta para lograr el estado deseado de la estrategia, teniendo en cuenta personas, tecnologías y procesos, entre otros recursos.

      .col-4.col-lg-6.offset-3.offset-lg-1
        figure
          img(src="@/assets/template/tema-2-17.png", alt="Texto que describa la imagen")
    .h4.mt-5 Se presentan ahora las entradas, salidas y actividades que estructuran el paso de definición y ejecución del plan de acción:
    .psicologia-color.d-flex.mt-5
      .cuadros-p.cuadros-p--morado.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-10.svg")
          .h3 Entradas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.m-auto.align-self-center.px-5
            .h3 Entradas
            p Los objetivos establecidos en la estrategia, la situación o estado actual del proceso de seguridad digital, la situación o estado deseados del proceso de seguridad digital y, desde luego, los activos de Información. 
            p.mt-3 Los objetivos establecidos en la estrategia, la situación o estado actual del proceso de seguridad digital, la situación o estado deseados del proceso de seguridad digital y, desde luego, los activos de Información. 
      .cuadros-p.cuadros-p--morado-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-11.svg")
          .h3.text-white  Salidas
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Salidas
            ul.lista-ul
              li 
                i.fas.fa-check
                | La agenda u hoja de ruta correspondiente al mismo plan de trabajo en pos de la instauración de la seguridad digital, por medio de la cual se da prevalencia al conjunto de iniciativas por aplicar para clausurar la brecha y lograr el nivel o estado deseado.
              li 
                i.fas.fa-check
                | Bitácora o plan de uso y apropiación de la estrategia.
              li 
                i.fas.fa-check
                | Métricas y mecanismos de monitoreo de la estrategia.

      .cuadros-p.cuadros-p--morado-mas-oscuro.d-flex
        .cuadros-p_titulo.mt-5
          figure
            img(src="@/assets/template/tema-2-12.svg")
          .h3.text-white  Algunas actividades
        .cuadros-p__textos__container.row
          .cuadros-p_textos.text-white.m-auto.align-self-center.px-5
            .h3 Algunas actividades
            ul.lista-ul
              li.mb-1 
                i.fas.fa-check
                | Evaluar, para cada una de las acciones determinadas en la estrategia, recursos solicitados y el costo para su ejecución. 
              li.mb-1 
                i.fas.fa-check
                | Para la cuantificación, se pueden adoptar lineamientos sugeridos por la normatividad vigente, antes mencionada, adoptando el modelo de seguridad y privacidad de la información.
              li.mb-1 
                i.fas.fa-check
                | Identificar limitaciones.
            .h4 ¡Importante!
            .h4.mt-4 La actividad “Identificar limitaciones” supone que estas pueden ser:
            ul.lista-ul.mt-3
              li.mb-1 
                i.fas.fa-check
                | Éticas
              li.mb-1  
                i.fas.fa-check
                | Personales
              li.mb-1 
                i.fas.fa-check
                | Culturales
              li.mb-1 
                i.fas.fa-check
                | De costos
              li.mb-1 
                i.fas.fa-check
                | De estructura organizacional
              li.mb-1 
                i.fas.fa-check
                | De tolerancia al riesgo
              li.mb-1 
                i.fas.fa-check
                | De capacidades
              
              

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
