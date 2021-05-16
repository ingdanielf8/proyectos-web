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
      
    figure.mb-5
      img(src="@/assets/curso/banner-intro.png", alt="Texto que describa la imagen")

    .row.mt-5
      .col-12.col-lg-7.tarjeta.tarjeta--naranja.py-5.px-4
        p.mb-0 Para la elaboración de este componente se abordaron varios autores conocidos en marketing, merchandising, publicidad, estrategias ATL, BTL, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del mercadeo.
        p.mt-3 Para iniciar, es necesario indicar que la comunicación es un proceso mediante el cual se transmite información, emociones o cualquier tipo de mensaje de parte de un emisor, es decir quien quiere comunicar, a un receptor, o quien recibe el mensaje. Como proceso sistemático debe tener unos elementos coherentemente articulados y bien definidos, de lo contrario no se lograría una correcta comunicación #[strong (Prettel, 2016).]
      .col-5.d-none.d-lg-block.align-self-center
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

<style lang="sass" scoped></style>
