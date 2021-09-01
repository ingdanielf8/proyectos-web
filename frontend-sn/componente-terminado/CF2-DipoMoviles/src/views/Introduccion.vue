<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-7
        p Siempre que se aborda un objetivo sin la apropiada planeación, se corre el riesgo de hacer un análisis menos efectivo, lo que puede conducir a una brecha entre el producto entregado y lo esperado por el cliente o los usuarios finales. Al desarrollar aplicaciones móviles esto es una realidad, que con facilidad se puede encontrar debido a que los móviles proponen otras y nuevas formas de interacción con el usuario, una frustración del usuario o el cliente termina convirtiéndose en el mejor de los casos en un sobrecimiento del esfuerzo o incumplimiento de los tiempos programados.
        .cajon.color-primario.p-4.mt-5.bg-primario-op30
          p Establecer correctamente los requisitos del sistema permite realizar un correcto diseño de la interacción con el usuario, lo cual permite dimensionar adecuadamente el coste en tiempo y permite potenciar la inversión; es por esto que se recomienda dos cosas previas a la realización del código, la primera es determinar correctamente los          requerimientos (el alcance) del sistema y la segunda actividad es realizar un diseño o prototipado del sistema, de tal forma que provea una visión clara de la interacción del sistema con el usuario. 
      .col-4.col-lg-5
        figure
          img(src="@/assets/template/tema-0-2.png", alt="Texto que describa la imagen")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
