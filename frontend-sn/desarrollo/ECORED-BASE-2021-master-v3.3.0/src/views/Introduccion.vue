<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mb-5
      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 El término «Industria 4.0» fue utilizado por el gobierno alemán para describir la fábrica inteligente, una visión de la fabricación informatizada con todos los procesos interconectados por el Internet de las Cosas (IOT). Es lo que se conoce como internet industrial de las cosas, I2OT (IIOT).  El nombre «Industria 4.0» fue creado por Mark Watson, alto ejecutivo alemán (IHS), para destacar el reto para la 4ª revolución industrial: “el desarrollo de software y sistemas de análisis que sean capaces de transformar el enorme volumen de datos producidos por las empresas, las fábricas, los clientes, los usuarios y los mercados en información útil y valiosa para todos.” (Aguilar, 2017).
    
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
