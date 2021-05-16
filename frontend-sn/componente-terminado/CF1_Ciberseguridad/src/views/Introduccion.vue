<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 Introducción
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Uno de los aspectos fundamentales en la era de la tecnología, corresponde al uso adecuado de la información y manejo de los datos a través de redes informáticas, es por ello que resulta relevante el comprender los aspectos y principios básicos de la seguridad de la información y su evolución a la ciberseguridad como una práctica necesaria en defensa y protección de los datos y dispositivos informáticos de ataques, espionaje y robo de datos. De igual forma se establecerán a través del presente material formativo los requerimientos, normas y estándares internacionales más utilizados y recomendados.
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
