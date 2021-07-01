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
      .col-12.col-lg-10
        p En este componente formativo se estudiarán los conceptos básicos sobre la arquitectura de un sistema web, desde la naturaleza de su comportamiento, comprendiendo los componentes físicos y lógicos para su funcionamiento, pasando por la identificación y caracterización de tecnologías web del lado del cliente y del servidor, hasta la identificación de tecnologías que permiten la comunicación y el traspaso de información o generación de servicios con otros sistemas.
        p.mt-3 En ese sentido, este componente busca generar un análisis crítico para la selección de una determinada tecnología dependiendo de los requerimientos y alcance de un proyecto estimado, a partir de la fundamentación y rasgos distintivos que en cada apartado de este documento se detallan.
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
            img(src="@/assets/template/tema-0-2.svg" alt="Texto que describa la imagen")



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
