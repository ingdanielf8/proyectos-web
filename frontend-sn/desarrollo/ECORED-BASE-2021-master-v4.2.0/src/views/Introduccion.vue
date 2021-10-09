<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mt-5
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9.align-self-center
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p During this module, you will develop the basic oral and written communication skills that allow you to communicate with non-Spanish-speaking visitors. 
            p.mt-3 In this process, you will understand the general meaning of written texts by learning to select the necessary information and deducing the meaning of words from the context; understanding oral communication and written texts, which permits you to deduce meanings and express yourself with better pronunciation and intonation. 
            p.mt-3 Deepen the knowledge of grammar and acquire new technical vocabulary, allowing the consolidation of structures and vocabulary acquired previously.
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Durante este módulo, desarrollarás las habilidades básicas de comunicación oral y escrita, que te permitirán comunicarte con visitantes que no hablan español.  
            p.mt-3 En este proceso, comprenderás el significado general de los textos escritos, aprendiendo a seleccionar la información necesaria, y deducir el significado de las palabras del contexto, entendiendo la comunicación oral y los textos escritos, lo que te permite deducir significados y expresarte con mejor pronunciación y entonación.  
            p.mt-3 Profundizar en el conocimiento de la gramática y adquirir nuevo vocabulario técnico, permitiendo la consolidación de estructuras y vocabulario adquiridos previamente. 
      .col-3.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-0-2.svg", alt="Texto que describa la imagen").floating

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    overFlag: '',
  }),
  methods: {
    chBg(id) {
      this.overFlag = id
      console.log('Hola')
    },
    chBgTransparent() {
      this.overFlag = ''
    },
  },
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
