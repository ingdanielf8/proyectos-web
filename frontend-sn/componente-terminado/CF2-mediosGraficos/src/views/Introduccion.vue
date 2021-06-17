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
    
    p.mb-5 La diagramación en diseño es la encargada de optimizar y organizar un espacio con diversidad de contenidos como textos, imágenes, fotografías, ilustraciones, audiovisuales (en el caso digital) y demás elementos necesarios para una publicación, ya sea impresa o digital. La diagramación se diferencia del diseño editorial, pues este incide en fases contundentes y más tempranas del proyecto, como la ideación hasta etapas más avanzadas de la producción.

    .row
      .col-12.col-md-7.align-self-center
        p.mb-5 Las publicaciones digitales esencialmente son las mismas que se conocen en medios impresos, como libros, revistas, magazines y catálogos, que se diseñan para ser vistos en diferentes medios de salida. Los productos diseñados para una pantalla, requieren de otros componentes y procedimientos para que puedan ejecutarse, además de tener en cuenta factores como la navegabilidad e interactividad acordes a cada dispositivo, así como los diversos formatos desarrollados para su potencial lectura.
        p #[strong Epub o electronic publication] significado de sus siglas en inglés, es un formato de libro digital, desarrollado para la comprensión y lectura de este tipo de productos. Se destaca por su facilidad de acceso y su adaptabilidad a las pantallas; en este componente formativo, se profundizará en sus características, además de abordar el proceso de posproducción y metodología en UX y UI.
      .col-8.col-md-5.col-xl-4.offset-2.offset-md-0.align-self-center
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
