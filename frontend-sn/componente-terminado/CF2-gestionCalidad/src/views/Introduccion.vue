<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p Para el desarrollo de un plan de mejoramiento continuo, es necesario que se hagan los trabajos y correcciones necesarias desde el análisis de la situación de la empresa. Es por ello que se presenta este componente, para lograr una mayor comprensión de las actividades y resultados que faciliten la labor de gestionar las soluciones que requiera la empresa, con base en metodologías y procedimiento técnico. Con base en estos conceptos, se puede ver el siguiente video, donde se emplea la gestión de la calidad para el proceso de una mejora continua:
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-5
      .col-12.col-lg-8.align-self-center.cuadro-azul
        p.pl-4 Para la elaboración de este componente, se abordaron varios autores conocidos en manejo de la información, riesgos y evaluación de procesos, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la gestión del mejoramiento continuo.
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-0-1.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    
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
