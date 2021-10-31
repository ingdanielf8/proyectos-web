<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Simple Present // Presente simple
    figure.mt-5
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p It should be noticed that most frequent sentences are in the present simple since this is an English verbal tense used to express habits, routines, and events. You will learn its use in sentences and conjugations. 
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Cabe señalar que las oraciones más frecuentes  están en presente simple, ya que es un tiempo verbal en inglés que se usa para expresar hábitos, rutinas y eventos. Aprenderá su uso en oraciones y conjugaciones.
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2.p-5.bg-azul.rounded-top-20
        .h4.text-white.font-25.italic Simple Present // Presente simple
        p.mt-3.text-white The simple present is an English verbal tense used to express habits, routines, and events. You will learn its use in sentences and conjugations. 
        p.mt-3.text-amarillo El presente simple es un tiempo verbal del inglés que se usa para expresar hábitos, rutinas y eventos. Aprenderá su uso en oraciones y conjugaciones.
    .row.mt-3
      .col-8.col-lg-6.offset-2.offset-lg-3.pt-4.px-5.pb-3.bg-amarillo.rounded-20.text-center
        .h4.text-white.font-25.italic Grammar // Gramática
        p.mt-3.text-azul.font-weight-bold See the main conditions of use of this verb tense.  
        p.mt-1.text-white.font-weight-bold Observa las principales condiciones de uso de este tiempo verbal.
    .row.mt-3
      .col-4.rounded-20.bg-rosado.text-center.py-4.position-relative
        .h4.font-30.text-azul Affirmative #[strong.font-25 statements]
        .h4.text-amarillo-fuerte Oraciones afirmativas 
        p.mt-3.font-weight-bold.text-azul The structure is:    
        p.font-weight-bold.text-amarillo-fuerte La estructura es:
        .row.mt-3.text-center.px-3.pb-3
          .col-3.rounded-20.py-3.px-3.bg-blanco.ml-3.box-shadow
            p.text-azul.font-12.font-weight-bold Subject
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Sujeto
          .col-1.align-self-center
            .h4.font-30.text-azul +
          .col-3.rounded-20.py-3.px-3.bg-blanco.box-shadow
            p.text-azul.font-12.font-weight-bold Verb
            p.text-amarillo-fuerte.mt-1.font-12.font-weight-bold Verbo
          .col-1.align-self-center
            .h4.font-30.text-azul +
          .col-3.rounded-20.py-3.px-3.bg-blanco.box-shadow
            p.text-azul.font-12.font-weight-bold Complement
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Complemento
        .row
          a.col-3.rounded-20.bg-azul.py-3(style="top:90%; left:38%").position-absolute(@click="modalP = true")
            p.text-white.font-12.font-weight-bold Example
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Ejemplo
        ModalA(:abrir-modal.sync="modalP")
          .row
            .col-8.offset-2.text-center
              .h4 Example: "Help the customer"
              p.mt-2 Ejemplo: "Ayuda al cliente"
              .tabla-a.color-acento-contenido.mt-3 
                table
                  thead
                    tr.bg-azul
                      th(colspan='2') 
                        .h4.text-white Subject
                        .h4.text-amarillo-fuerte Sujeto
                      th 
                        .h4.text-white Verb
                        .h4.text-amarillo-fuerte Verbo                      
                      th
                        .h4.text-white Complement
                        .h4.text-amarillo-fuerte Complemento                      
                  tbody
                    tr
                      td(rowspan='5') Singular 
                      td I
                      td(rowspan='2') Help
                      td(rowspan='8') The customer
                    tr
                      td You
                    tr 
                      td He
                      td(rowspan='3') Helps
                    tr
                      td She
                    tr
                      td It
                    tr
                      td(rowspan='3') Plural
                      td We
                      td(rowspan='3') Help
                    tr
                      td You
                    tr
                      td They

      .col-8.rounded-20.bg-azul.text-center.py-4.w-64.ml-4.position-relative
        .h4.font-30.text-white Affirmative #[strong.font-25 statements]
        .h4.text-amarillo-fuerte Oraciones afirmativas 
        p.mt-3.font-weight-bold.text-white The structure is:    
        p.font-weight-bold.text-amarillo-fuerte La estructura es:
        .row.mt-3.text-center.px-1
          .col-3.rounded-20.py-3.px-3.bg-blanco.ml-3.w-123-px
            p.text-azul.font-12.font-weight-bold Subject
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Sujeto
          .col-1.align-self-center.w-37-px
            .h4.font-30.text-azul.text-amarillo-fuerte +
          .col-3.rounded-20.py-3.px-3.bg-blanco.w-123-px
            p.text-azul.font-12.font-weight-bold Auxiliary verb
            p.text-amarillo-fuerte.mt-1.font-12.font-weight-bold Verbo auxiliar
          .col-1.align-self-center.w-37-px
            .h4.font-30.text-azul.text-amarillo-fuerte +
          .col-3.rounded-20.py-3.px-3.bg-blanco.w-123-px
            p.text-azul.font-12.font-weight-bold Negation
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Forma negativa
          .col-1.align-self-center.w-37-px
            .h4.font-30.text-azul.text-amarillo-fuerte +
          .col-3.rounded-20.py-3.px-3.bg-blanco.w-123-px
            p.text-azul.font-12.font-weight-bold Verb
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Verbo
          .col-1.align-self-center.w-37-px
            .h4.font-30.text-azul.text-amarillo-fuerte +
          .col-3.rounded-20.py-3.px-3.bg-blanco.w-123-px
            p.text-azul.font-12.font-weight-bold Complement
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Complemento
        .row
          a.col-3.rounded-20.bg-amarillo.py-3(style="top:90%; left:43%").position-absolute.w-123-px(@click="modalH = true")
            p.text-white.font-12.font-weight-bold Example
            p.text-azul.font-12.mt-1.font-weight-bold Ejemplo
        ModalA(:abrir-modal.sync="modalH")
          .row
            .col-10.offset-1.text-center
              .h4 Example: “It does not help the customer”
              p.mt-2 Ejemplo: "No ayuda al cliente"
              .tabla-a.color-acento-botones.mt-3 
                table
                  thead
                    tr.bg-amarillo
                      th(colspan='2') 
                        .h4 Subject
                        .h4.text-white Sujeto
                      th.th-plus 
                        .h4 Verb
                        .h4.text-white Verbo                      
                      th.th-plus
                        .h4 Complement
                        .h4.text-white Complemento
                      th.th-plus
                        .h4 Verb
                        .h4.text-white Verbo
                      th.th-plus
                        .h4 Complement
                        .h4.text-white Complemento
                  tbody
                    tr
                      td(rowspan='5') Singular 
                      td I
                      td do
                      td not
                      td(rowspan='2') Help
                      td(rowspan='8') The customer
                    tr
                      td you
                      td do
                      td not
                    tr
                      td He
                      td does
                      td not
                      td(rowspan='3') Helps
                    tr
                      td She
                      td does
                      td not
                    tr
                      td It
                      td does
                      td not
                    tr
                      td(rowspan='3') Plural 
                      td We
                      td does
                      td not
                      td(rowspan='3') Help
                    tr
                      td You
                      td do
                      td not
                    tr
                      td They
                      td do
                      td not
    .row.mt-5
      .col-10.offset-1.pt-4.px-5.pb-3.mt-4.bg-amarillo.rounded-20.text-center.position-relative
        .h4.text-white.font-25.italic The simple present in third person // Presente simple en tercera persona
        p.mt-3.text-azul.font-weight-bold For the third person, an “s” must be added, considering the following observations:   
        p.mt-1.text-white.font-weight-bold.pb-4 Para la tercera persona, se debe adicionar una “s”, teniendo en cuenta las siguientes observaciones: 
        .row
          a.col-3.rounded-20.bg-blanco.py-3(style="top:90%; left:43%").position-absolute.w-123-px.box-shadow(@click="modalA1 = true")
            p.font-12.font-weight-bold Example
            p.text-amarillo-fuerte.font-12.mt-1.font-weight-bold Ejemplo
        ModalA(:abrir-modal.sync="modalA1")
          .row
            .col-12.text-center
              .h4 Example: “It does not help the customer”
              p.mt-2 Ejemplo: "No ayuda al cliente"
              .tabla-a.color-acento-contenido.mt-3 
                table
                  thead
                    tr.bg-amarillo.borde-bot-gris
                      th(colspan='6') 
                        .h4.text-white For the third person, an “s” must be added, considering the following observations: 
                        .h4 Para la tercera persona, se debe adicionar una “s”, teniendo en cuenta las siguientes observaciones: 
                  tbody
                    tr
                      td  
                      td 
                        .row
                          .col-12.px-4
                            .row.exp
                              .col-12.bg-naranja.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                                figure.bandera-usa(style='width: 10%')
                                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                                p Regular Verbs 
                              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                                figure.bandera-esp(style='width: 9%')
                                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                                p Verbos regulares
                      td 
                        .row
                          .col-12.px-4
                            .row.exp
                              .col-12.bg-naranja.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                                figure.bandera-usa(style='width: 10%')
                                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                                p Verbs ending in “ss”, “x”, “ch”, “sh”, “o”  
                              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                                figure.bandera-esp(style='width: 9%')
                                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                                p Verbos que terminan en “ss”,”x”, “ch”, “sh”, “o”
                      td
                        .row
                          .col-12.px-4
                            .row.exp
                              .col-12.bg-naranja.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                                figure.bandera-usa(style='width: 10%')
                                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                                p Verbs ending in “y” (but when there is a vowel before)  
                              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                                figure.bandera-esp(style='width: 9%')
                                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                                p Verbs ending in “y” (but when there is a vowel before)
                      td
                        .row
                          .col-12.px-4
                            .row.exp
                              .col-12.bg-naranja.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                                figure.bandera-usa(style='width: 10%')
                                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                                p Verbs ending in “y” when there is a vowel before 
                              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                                figure.bandera-esp(style='width: 9%')
                                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                                p Verbos que terminan en “y” cuando hay una vocal antes de la “y”
                      td
                        .row
                          .col-12.px-4
                            .row.exp
                              .col-12.bg-naranja.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                                figure.bandera-usa(style='width: 10%')
                                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                                p Irregular verbs, like “have”  
                              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                                figure.bandera-esp(style='width: 9%')
                                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                                p Verbos irregulares “have”
                  tr
                    td
                    td Help / Ayudar
                    td Wash / Lavar
                    td Carry / Llevar
                    td Pay / Pagar
                    td Have / Tener
                  tr
                    td Singular 1st and 2nd persons
                    td Help 
                    td Wash 
                    td Carry 
                    td Pay 
                    td Have
                  tr
                    td Singular 3rd person
                    td Helps 
                    td Washes 
                    td Carryes 
                    td Pays 
                    td Has
                  tr
                    td Plural
                    td Help 
                    td Wash 
                    td Carry 
                    td Pay 
                    td Have 
                  
    .row.mt-5
      .col-6.bg-azul.py-5.pl-5.mt-5
        .row.text-center
          .col-12.bg-rosado.py-3
            .h4.text-azul.font-25 Tips // Consejos
        .row.mt-4
          .col-12.pr-5
            .row.exp
              .col-12.bg-azul-claro.position-relative.p-3.italic.borde-bot-naranja-peq.expandable
                figure.bandera-usa
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.mt-2.italic To make a good presentation, you need to start by “building” it well. Before starting, it is necessary to select the topic you are going to deal with. When you are preparing it, remember: 
                ul.lista-ul.mt-2
                  li.mb-1 
                    i.fas.fa-angle-right
                    | Take notes of the ideas.
                  li.mb-1
                    i.fas.fa-angle-right
                    | Select the best ideas and organize them in a logical order.
                  li.mb-1
                    i.fas.fa-angle-right
                    | Prepare the photos or images you need.
                  li.mb-1
                    i.fas.fa-angle-right
                    | Check that you have all the needed vocabulary. 
                  li.mb-1
                    i.fas.fa-angle-right
                    | Check for grammatical errors.
                  li.mb-1
                    i.fas.fa-angle-right
                    | Practice makes perfect - Train reading the presentation 
              
              
              .col-12.position-relative.p-3.hover-bg-naranja.expandable2
                figure.bandera-esp
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p.text-white Para hacer una buena presentación, es necesario empezar por «construirla» bien. Antes de empezar, es necesario seleccionar el tema que va a tratar. Cuando la esté preparando recuerde:  
                 ul.lista-ul.mt-2
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | Tomar notas de las ideas.
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | Seleccionar las mejores ideas y organizarlas en un orden lógico.
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | Preparar las fotos o imágenes que necesite.
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | Comprobar que tiene todo el vocabulario que necesita.
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | Comprobar que no haya errores gramaticales. 
                  li.mb-1 
                    i.fas.fa-angle-right.naranja
                    | La práctica hace al maestro - Practicar la lectura de la presentación.
      .col-6.bg-rosado.mt-5
        figure.p-4
          img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
    .row.mt-5
      .col-10.offset-1.fondo-img-1
        .row
          .col-5.offset-5
            .row.exp
              .col-12.bg-blanco.position-relative.p-4.mt-5.expandable
                figure.bandera-usa
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                .h4 Giving information // Brindando información
                p.mt-4 Remember to provide information in a concise way, so that your audience will remember it.
                p.mt-4 The present simple is used to talk about things that happen regularly. Unlike Spanish, the present simple is not used to talk about something that is happening at the moment we speak.
                p.mt-4.borde-bot-naranja-peq.pb-4 The present simple is often used with adverbs of time
                .row.mt-5.expandable2 
                  p Recuerde brindar información de una forma concisa, para que su audiencia la recuerde.
                  p.mt-4 El presente simple se usa para hablar de cosas que suceden con regularidad. A diferencia del español, el presente simple (en inglés) no se usa para hablar de algo que está sucediendo en el momento en que se habla. 
                  p.mt-4 El presente simple se usa a menudo con adverbios de tiempo. 
                figure.bandera-esp
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
        .row
          .col-5.offset-1.mt-4.bg-blanco.rounded-20.mb-4
            .row           
              .col-lg-12.px-0.hover-bg-naranja
                .nav-holder.align-items-center(data-aos="flip-up").rounded-15.pb-5.m-0
                  .row
                    .col-12.px-4
                      .row.mt-3.text-center.px-3
                        .col-12.bg-rosado-claro.position-relative.p-3.italic
                          figure.bandera-usa(style='width: 5%')
                            img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                          .h4.ml-4 Giving instructions 
                        .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                          figure.bandera-esp(style='width: 4%')
                            img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                          .h4.font-1em.font-weight-normal.pb-5 Para dar instrucciones 
                  .text.p-lg-3.p-4.rounded-15.mt-5
                    .row.mt-3.text-center.px-3
                      .col-12.bg-rosado-claro.position-relative.p-3.italic
                        figure.bandera-usa(style='width: 5%')
                          img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                        p.ml-4 You walk straight for three blocks, then you turn right.   
                      .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                        figure.bandera-esp(style='width: 4%')
                          img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                        .h4.font-1em.font-weight-normal.pb-5 You walk straight for three blocks, then you turn right. 
          .col-5.ml-3.mt-4.bg-blanco.rounded-20.mb-4.bg-hover-rosado-claro
            .row           
              .col-lg-12.px-0
                .nav-holder.align-items-center(data-aos="flip-up").rounded-15.pb-5.m-0
                  .row
                    .col-12.px-4
                      .row.mt-3.text-center.px-3
                        .col-12.bg-rosado-claro.position-relative.p-3.italic
                          figure.bandera-usa(style='width: 5%')
                            img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                          .h4.ml-4 To inform about scheduled, present or future events
                        .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                          figure.bandera-esp(style='width: 4%')
                            img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                          .h4.font-1em.font-weight-normal Para informar sobre eventos programados presentes o futuros 
                  .text.p-lg-3.p-4.rounded-15.mt-5.bg-rosado-claro
                    .row.mt-3.text-center.px-3
                      .col-12.position-relative.p-3.italic
                        figure.bandera-usa(style='width: 5%')
                          img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                        p.ml-4 The concert starts at 7.00 pm. The doors open at midday   
                      .col-12.position-relative.p-4.hover-bg-naranja.mb-4
                        figure.bandera-esp(style='width: 4%')
                          img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                        .h4.font-1em.font-weight-normal El concierto comienza a las 19.00 horas. Las puertas se abren al mediodía.
          


    Separador
</template>

<script>
import PestanasA from '../components/PestanasA'
export default {
  name: 'Tema1',
  components: {
    PestanasA,
  },
  data: () => ({
    mostrarIndicador: true,
    modalP: false,
    modalH: false,
    modalA1: false,
    modalV: false,
    indicadorTarjetaFlip: true,
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

<style lang="sass" scoped>
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFD494
  opacity: 1
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 16px

.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 70%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 0%
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p
    opacity: 1;
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s


.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  opacity: 0.8
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease


.nav-holder2:before
  -webkit-transform: translateY(85%)
  -moz-transform: translateY(85%)
  transform: translateY(85%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-top-left-radius: 14px
  border-top-right-radius: 14px

.nav-holder2
  .text
    position: absolute
    top: 83%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder2 .h4
  margin: 0
  opacity: 1

.nav-holder2:hover
  .text
    top: 5%
  h4, p
    color: #12263F
    opacity: 1
</style>
