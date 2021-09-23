<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Documentación
    p.mt-5 La documentación ha sido determinada por la FID (Federación Internacional de Información y Documentación) como “la colección, recopilación, almacenamiento, clasificación, selección, difusión, y utilización de todo tipo de información, cualquiera que sea su soporte”. 
    .h4.mt-5 En el recurso que se muestra a continuación, podrá profundizar en los aspectos fundamentales sobre procesamiento de la información en relación con la documentación que integra estos procesos:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    



</template>

<script>
export default {
  name: 'Tema5',
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
