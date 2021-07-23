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
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row
      .col-12.col-lg-7.align-self-center
        p.mb-5 Estimar correctamente el costo de producción de los bienes dispuestos a la venta es un elemento fundamental en la planeación y gestión administrativa de cualquier empresa. Comprender todos los aspectos que lo integran otorgará elementos de juicio suficientes para determinar un precio de venta acorde con las necesidades del mercado. Comprender el proceso y reflejar los datos consolidándolos en un estado de costos, otorga herramientas adicionales para analizar los estados financieros, haciendo uso del cálculo de indicadores financieros para medir y comparar frente a otros. 
      .col-8.col-lg-5.offset-2.offset-lg-0.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-0-2.svg", alt="Texto que describa la imagen")
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
