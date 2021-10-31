<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mt-5 El punto de pago es el último eslabón de la compra y toma importancia en la atención al cliente donde la experiencia que se obtenga a través de este será reflejada en su satisfacción. Le invitamos a ver el siguiente video.  

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    overFlag: '',
  }),
  methods: {
    chBg(id) {
      this.overFlag = id
      console.log('Hola')
    },
    chBgTransparent() {
      this.overFlag = ''
    },
  },
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
