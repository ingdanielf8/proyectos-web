<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Demonstratives // Demostrativos
    
    .row.mt-5
      .col-8
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic This, that, these, those are called demonstratives and are used to show the relative distance between the speaker and the noun.
            .h4.mt-4 Examples:
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | That is our house. (singular)
              li 
                i.fas.fa-angle-right
                | Those are my shoes. (Plural)
            p.mt-3 Note: The verb changes (singular / plural) depending on the pronoun that you use.
          .col-12.position-relative.py-4.px-2.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Esto, Eso, Estos, Aquellos se llaman demostrativos y se utilizan para mostrar la distancia relativa entre el hablante y el sustantivo.
            p.font-20.mt-3.font-weight-bold Ejemplos:
            ul.lista-ul.mt-3.px-3
              li 
                i.fas.fa-angle-right
                | Esa es nuestra casa. (singular)
              li 
                i.fas.fa-angle-right
                | Esos son mis zapatos. (plural)
            p.mt-3  Nota: El verbo cambia (singular / plural) según el pronombre que usted utilice. 
      .col-4.align-self-center
        figure
          img(src="@/assets/template/tema-5-1.svg", alt="Texto que describa la imagen").floating
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
import BotonesB from '../components/BotonesB.vue'
export default {
  name: 'Tema5',
  components: {
    BotonesB,
  },
  data: () => ({
    // variables de vue
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
