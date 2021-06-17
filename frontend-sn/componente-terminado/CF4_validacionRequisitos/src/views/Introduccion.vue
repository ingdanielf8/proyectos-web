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
      img(src="@/assets/curso/banner-intro.svg", alt="Texto que describa la imagen")

    p.mb-0 En este componente formativo se estudiarán algunas técnicas utilizadas para la validación de requisitos, se introduce el concepto de requerimientos duraderos y volátiles y, finalmente, se presentan algunas herramientas que soportan las actividades de gestión de requisitos.
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
