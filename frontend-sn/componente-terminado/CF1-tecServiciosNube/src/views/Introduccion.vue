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
      img(src="@/assets/template/tema-0-1.png" alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-10.align-self-center
        p Una base de datos se puede percibir como un “almacén” de información que se define y se crea una sola vez para guardar grandes cantidades de datos de forma organizada (o estructurada), con el fin de poder encontrarla y utilizarla fácilmente. Se presentará el concepto y características de las bases de datos actuales, teniendo en cuenta que cada base de datos es diseñada para cumplir con los requisitos de información de una organización o una empresa. Estos diseños están concebidos para emplear Sistemas de Gestión de Bases de Datos (en adelante SGDB), que es un sistema o servicio informático que permite a las personas definir, crear, dar soporte y mantenimiento a las bases de datos, controlando el acceso de forma segura.
      .col-2.d-none.d-md-block
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
