<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 1
      .h3 Validación de requerimientos
    .row
      .col-12.col-md-8
        p.mt-4 La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita. Este proceso es muy importante, pues un error en un documento de requerimientos puede ocasionar el desgaste importante de muchos recursos si estos errores son detectados en etapas más avanzadas del proyecto como diseño, construcción o despliegue a producción. Los costos asociados para el arreglo de problemas en los requerimientos siempre van a ser menores que en otras etapas, ya que un error en los requerimientos se propaga en cascada en todas las fases subsiguientes del ciclo de vida.
      .col-4.d-none.d-md-block
        figure.mb-5.px-4
          img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen")
    .tarjeta.tarjeta--azul.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.mx-4
          img(src="@/assets/template/tema-1-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col-9.mb-3.mb-sm-0
              .h5.mb-0 Infografía - Validación de requerimientos
              p.text-small La validación de los requerimientos busca ratificar que los requerimientos realmente están especificando lo que el cliente desea y necesita. 
            .col-sm-auto
              a.boton.boton--b(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    .titulo-segundo.mt-4
      #t_1_1.h4 1.1. Revisiones de requerimientos
    p.mt-4 Las revisiones de los requerimientos es un proceso manual que involucra la participación de personas de parte de la organización constructora del software así como la de los clientes. Por lo general, en este proceso se revisa el documento de requerimientos tratando de encontrar alguna anomalía y/u omisiones en la escritura de estos.
    .row.mt-4.mx-0
      .cajon--azul.p-4.mb-5.mb-lg-0.bg-naranja-claro
        p.p-4 Esta revisión se puede realizar de manera informal o formal (Sommerville, 2011). En una revisión informal, se requiere verificar, con tantos stakeholders como sea posible, el documento generado para recibir confirmación por parte de ellos de que lo escrito sí refleja su deseo. Esta revisión informal permite, de manera muy sencilla, detectar muchos problemas antes de establecer cualquier formalismo de revisión.
    p.mt-4 En una revisión formal, el equipo de desarrollo debe introducir al cliente por cada uno de los requerimientos establecidos, y explicando cada una de sus implicaciones. El equipo encargado de la revisión deberá verificar cada requerimiento de forma individual y realizar el análisis de conjunto. Además, en el proceso de verificación debe resolverse cada una de las siguientes preguntas:
    .row.mt-4.mx-0
      .col-11.bg-verde-claro.mx-5.rounded
        .col-sm.mb-5.mb-sm-0.p-4.mt-3
          ul.lista-ul--color
            li
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p #[strong Verificabilidad:] ¿Es posible probar este requerimiento en la realidad?
            li.mt-2
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p #[strong Comprensibilidad: ] ¿Es claro lo que expresa este requerimiento para las personas que lo van a usar?
            li.mt-2
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p #[strong Rastreabilidad:] ¿Es posible observar el origen del requerimiento y también evaluar los cambios que pueden generar en el sistema? 
            li.mt-2
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p #[strong Adaptabilidad: ] ¿El cambio en el requerimiento impacta o no a gran escala sobre otros requerimientos?
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2 Construcción de prototipos
    figure.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mt-4 Por otra parte, el uso inadecuado de los prototipos también puede generar algunos riesgos, entre los que se encuentran:
    .row.mt-4.mx-0
      .col-11.bg-verde-claro.mx-5.rounded
        .col-sm.mb-5.mb-sm-0.p-4.mt-3
          ul.lista-ul--color
            li
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p El prototipado puede estimular un número excesivo de cambios de peticiones. 
            li.mt-2
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p Los prototipos operativos pueden inducir a pensar a la directiva y a los clientes que el producto final está prácticamente dispuesto para su salida al mercado.
            li.mt-2
              .row
                .col-1.text-align-right 
                  i.fas.fa-brain
                .col-8
                  p Los prototipos pueden encarecer el producto.
    p.mt-5 Para la fase de verificación de requisitos se recomienda el uso de prototipos de baja fidelidad (presentación de escenarios con maquetas estáticas) y de tipo exploratorio (prototipos no reutilizables, usados únicamente para la clarificación e identificación de requerimientos).
    .row.mt-5
      .col-4.d-none.d-md-block
        figure.mb-5.px-4
          img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8
        p Aunque un prototipo podría ser una sencilla representación gráfica del sistema en papel o la representación de interfaces del sistema usando herramientas de ofimática, existen varias herramientas gratuitas y de pago que facilitan la construcción de prototipos, algunas de ellas solo requieren un registro de correo electrónico para acceder a sus funcionalidades directamente desde el navegador, y otras requieren la descarga e instalación en el equipo donde se planean construir los prototipos.
    .row.mt-5
      p Algunas herramientas recomendadas son las siguientes:
      .col-12.mt-4
        .row
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-8.offset-2
              figure.mb-5.px-4
                img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
            .h6 Adobe XD
            a.mt-1(href="https://www.adobe.com/la/products/xd.html") www.adobe.com/la/products/xd.html
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-8.offset-2
              figure.mb-5.px-4
                img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
            .h6 Marvel App
            a.mt-1(href="https://www.marvelapp.com") www.marvelapp.com 
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1
              figure.my-4.px-4
                img(src="@/assets/template/tema-1-6.svg", alt="Texto que describa la imagen")
            .h6.mt-5 Moqups
            a.mt-1(href="https://www.moqups.com") www.moqups.com
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1  
              figure.my-5.px-4
                img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
            .h6.mt-5.mb-5 LucidChart
            a.mt-2(href="https://www.lucidchart.com/pages/es") www.lucidchart.com/pages/es
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1
              figure.my-5.px-4
                img(src="@/assets/template/tema-1-8.svg", alt="Texto que describa la imagen")
            .h6 Proto.io
            a.mt-1(href="https://www.proto.io") www.proto.io
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.ellipsis.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1
              figure.my-4.px-4
                img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
            .h6.mt-5 Balsamiq
            a.mt-1(href="https://www.balsamiq.com") www.balsamiq.com
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1
              figure.my-4.px-4
                img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen")
            .h6 Wirify
            a.mt-1(href="https://www.wirify.com")  www.wirify.com
          .col-8.col-md-6.col-lg-4.col-xl-3.offset-2.offset-md-0.offset-lg-1.offset-xl-0.ellipsis.rounded.bg-verde-claro.cajon--azul.p-4.mb-5.mb-lg-0.text-center.borde-blanco
            .col-10.offset-1
              figure.my-4.px-4
                img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
            .h6 Picodo
            a.mt-1(href="https://www.pidoco.com/en")  www.pidoco.com/en
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3. Generación de casos de prueba
    p.mt-4 Desarrollar pruebas para los requerimientos permite evidenciar problemas antes de escribir cualquier línea de código. Normalmente si es complejo construir un caso de prueba para un requerimiento esto un indicio de que el requerimiento puede ser difícil de implementar por lo que debería considerarse.
    .row.mt-5
      .col-4.d-none.d-md-block
        figure.mb-5.px-4
          img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8
        p La validación de requisitos por casos de prueba requiere el desarrollo de cuatros fases: i) planeación de la prueba. Aquí se define la estrategia a utilizar, el alcance de la prueba a realizar y los tiempos requeridos para el desarrollo de la prueba; ii) diseño de los casos de prueba; iii) ejecución de los casos de prueba y iv) elaboración del informe final de la prueba donde se describen los aspectos más importantes y hallazgos de la ejecución de la prueba (Pantaleo, 2018).
    p.mt-4 De otra parte, el diseño de un caso de prueba requiere: i) la construcción de un instrumento donde se debe detallar para cada requerimiento si existen precondiciones, es decir, si se requieren de actividades o valores previos para poder iniciar la ejecución del requerimiento; ii) identificar los pasos a seguir para la validación de un requisito y iii) los resultados esperados de la realización de cada paso.
    .row.mt-4
      .col-10.offset-1
        .tabla-a.mb-5 
        table
          caption Tabla 1 -  Formato de caso de prueba | Nota: Adaptado de Pantaleo (2018).
          thead.bg-amarillo
            tr.text-center
              th(colspan="2") Formato de caso de prueba
          tbody.bg-gris-claro
            tr
              th Objetivo del caso de prueba
              th
            tr
              th Identificador
              th
            tr
              th Nombre o identificador del requerimiento
              th
            tr
              th Precondiciones
              th
            tr
              th Pasos
              th Resultados esperados
            tr
              th 1.
              th 1.
            tr
              th 2.
              th 2.
            tr
              th 3.
              th 3.
            



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.bg-naranja-claro
  background-color: #FFE7C4
.text-align-right
  text-align: right
.borde-blanco
  border: 10px solid $white
.cajon--azul:before
  background-color: #26A69A
</style>
