<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mt-4
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-8
        p Sin duda los dispositivos móviles hacen parte de nuestro día a día y cada vez son más avanzados. La creciente demanda de software específico para estos dispositivos ha generado nuevos desafíos para los desarrolladores, ya que este tipo de aplicaciones tienen características propias, restricciones y necesidades únicas.
        p.mt-3 Por esta razón es importante definir cuáles serán las tecnologías más adecuadas para la programación de móviles, y una de las arquitecturas más implantadas es la proporcionada por el sistema Android. En los dispositivos móviles actuales pueden utilizarse tres tipos de aplicaciones diferentes: nativas, híbridas y web. En este componente se tratarán las aplicaciones móviles nativas.
        p.mt-3 Las aplicaciones nativas, son aquellas que enfocan su desarrollo para una plataforma específica como Android, IOS, y Windows, haciendo uso de su correspondiente lenguaje de programación, el cual permite tener compatibilidad con sus características, que para el caso de Android, usa los lenguajes como Java, Kotlin, Objetive-C o Switf  para la plataforma IOS, y el lenguaje C++ ó C# para la plataforma Windows.
      .col-4.offset-4.offset-lg-0
        figure
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
