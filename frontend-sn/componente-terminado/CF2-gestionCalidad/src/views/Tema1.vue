<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Análisis, técnicas y requerimientos de la información 	  
    .row.mt-5.bg-rosado.rounded-15.p-5.zoom-in
      .col-4.align-self-center.pt-5.mt-5
        p Para continuar con el proceso de mejoramiento continuo que requiere la empresa, es importante que se entienda que los análisis, técnicas y requerimientos empresariales de la información son realizados como respuesta a la necesidad expresa para empezar a trabajar con miras al mejoramiento del mismo. Por lo tanto, se invita a ver el siguiente video donde se aplican las técnicas y requerimientos de la información con las normas ISO 9001-2015:
      .col-8.pt-5.mt-5
        figure
          img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
