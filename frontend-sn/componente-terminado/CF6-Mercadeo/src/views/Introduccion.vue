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
      figcaption Video: Leyenda del video
    .row
      .col-12.col-md-8.p-5.bg-amarillo-claro.rounded
        p Estimado aprendiz bienvenido al curso #[strong Tecnología en desarrollo de procesos de mercadeo], en el cual el merchandising cobra gran importancia para las organizaciones porque influye ampliamente en la decisión de compra de los consumidores, al captar su atención se utilizan estrategias para exhibir los productos logrando crear espacios interiores estéticamente agradables, con flujos lógicos y circulación para la asociación positiva de la personalidad de la marca, volviendo la compra una experiencia inolvidable en la que seguramente el cliente se fideliza fácilmente y la organización se diferencia de la competencia. Las estrategias de merchandising y visual merchandising al estar articuladas con el plan de comunicación de la organización permiten desarrollar campañas publicitarias exitosas.
        p.mt-3 Para la elaboración de este componente se abordaron varios autores conocidos en merchandising, promoción y publicidad, y visual merchandising de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del mercadeo.
      .col-4.d-none.d-md-block.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-0-1.svg", alt="Texto que describa la imagen")
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
.bg-amarillo-claro
  background-color: #FFFBEF
.rounded
  border-radius: 18px
</style>
