<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Preproducción
    p.mb-4 Todo proyecto nace con la necesidad de resolver, generar o ejecutar una idea en particular. Este momento de creación es llamado preproducción y comprende en este caso la creación de diferentes componentes como el guion y el storyboard. Esta fase permite reconocer cuáles herramientas y recursos serán necesarios, para el desarrollo del proyecto en general.
    p.mb-4 El siguiente cuadro presenta los pasos a seguir en preproducción, de un proyecto gráfico, desde el inicio del proyecto hasta las decisiones y acciones tomadas previas a su ejecución. 
    figure.mb-3
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    figcaption.mb-5 Referencia  Adaptado de Sepulveda y Quiceno (2015)
    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="1" titulo="Necesidad: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-2.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p La necesidad se encuentra enmarcada en la carencia o falta de algo, a partir de allí crear un nuevo proyecto editorial respondiendo a los interrogantes: ¿qué?, ¿para quién?, ¿cuándo?, ¿cuánto?, ¿cómo?, ¿en qué medio?, etc

      .row(numero="2" titulo="Requerimientos:")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-3.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p Impuestos a partir de las necesidades identificadas, y que son establecidas por parte del cliente, contexto, política, editorial u otra que demande el proyecto en particular.

      .row(numero="3" titulo="Célula:")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-4.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p Equipo de expertos interdisciplinarios para el desarrollo del proyecto en cada etapa de su diseño, ejecución y validación.

      .row(numero="4" titulo="Sesiones creativas: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-5.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p Equipo de expertos interdisciplinarios para el desarrollo del proyecto en cada etapa de su diseño, ejecución y validación.
      .row(numero="5" titulo="Brainstorming:")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-6.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p O lluvia o tormenta de ideas. Esta herramienta generalmente es utilizada cuando se busca llegar a consensos o tomar decisiones en grupo. El brainstorming potencia los procesos creativos, y la generación de alternativas originales que ayudan en la resolución de una situación o problema.
      .row(numero="6" titulo="Software: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-4-7.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p Los programas y aplicaciones son de vital importancia en la creación de cualquier proyecto digital. Es necesario contar con programas de diseño, interfaces y el manejo de plataformas y formatos requeridos, para la ejecución de cada proyecto editorial.
      .row(numero="7" titulo="Validación:")
        .col-md-4.align-self-center
          figure
            img(src='@/assets/template/tema-4-8.png', alt='Texto que describa la imagen')

        .col-md-8.mb-4.mb-md-0
          p.mb-4 La validación de un proyecto consiste en la aprobación y verificación de todos los pasos requeridos para la ejecución del mismo. Por lo general esta validación está aprobada por el cliente, un director de arte o diseño.
          p La validación tiene las siguientes características: 
          .col-12.mt-3
            .row.mb-4
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li.mb-0.d-block
                    .row
                      .col-1.text-align-right.p-0
                        i.fas.fa-angle-right.color-c.text-center
                      .col-11
                        p.mb-2 Se mide por actividades estipuladas a cada equipo.
                  li.mb-0.d-block
                    .row
                      .col-1.text-align-right.p-0
                        i.fas.fa-angle-right.color-c.text-center
                      .col-11
                        p.mb-2 Valida plazos en los tiempos de ejecución de las tareas y labores estipuladas.
                  li.mb-0.d-block
                    .row
                      .col-1.text-align-right.p-0
                        i.fas.fa-angle-right.color-c.text-center
                      .col-11
                        p.mb-2 Determina la calidad de los componentes y las entregas ejecutadas.
                  li.mb-0.d-block
                    .row
                      .col-1.text-align-right.p-0
                        i.fas.fa-angle-right.color-c.text-center
                      .col-11
                        p.mb-2 Tiene en cuenta el feedbacks o retroalimentación de los clientes con la empresa y de los integrantes de los equipos de trabajo.


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema4',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
