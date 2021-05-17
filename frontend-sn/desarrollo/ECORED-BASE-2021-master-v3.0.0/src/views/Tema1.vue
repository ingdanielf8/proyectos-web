<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 1
      .h3 Merchandising
    .row
      .col-10.offset-1

        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-.bg-gris
              figure
                img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen")
            .col-lg-8.bg-white.bg-amarillo
              .bloque-texto-b.p-4
                i.fas.fa-quote-left
                span.h2.mb-0 El merchandising es el mercadeo que seduce en el punto de venta” (Prieto, 2018, p. 11).
                i.fas.fa-quote-right 
    p.mt-5 La manera global de entender el merchandising de acuerdo con #[strong Prieto (2018)] es desglosar la palabra, así:
    .row.mt-5
      .col-10.offset-1.text-center
        figure
          img(src="@/assets/template/tema-1-2.png", alt="Texto que describa la imagen")
    .row
      .col-12.col-md-7.p-5.bg-amarillo-claro.rounded
        p El merchandising es un conjunto de técnicas psicológicas de venta aplicadas de forma conjunta o separada por fabricantes y distribuidores, que actúan sobre la mente del comprador, con el objetivo de que satisfaga las necesidades que le llevaron al punto de venta, recuerde ciertas necesidades olvidadas y además sienta otras nuevas. #[strong La finalidad es que el comprador adquiera mayor cantidad y variedad de productos y con más frecuencia, consiguiendo así una mayor rentabilidad del punto de venta y de los productos (Escrivá, 2005).]
        p.mt-3 También integra las técnicas de comercialización que permiten presentar el producto en las mejores condiciones; esta es la manera de tener la mercancía adecuada en el lugar más conveniente con precios, cantidades y en el momento oportuno. Así, el merchandising es el conjunto de actividades que permiten una mayor valoración del producto por parte del consumidor en el punto de venta #[strong (Prieto, 2018).]
      .col-5.d-none.d-md-block.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
    .row
      .h4  El merchandising se puede referenciar desde:
      .col-sm.mb-5.mb-sm-0.mt-3
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11
                p Un punto de vista macro, como “la función comercial que tiene por objeto transformar las compras potenciales del consumidor en compras reales en el punto de venta”. 
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11
                p Un punto de vista micro productor como “el conjunto de actividades publicitarias y promocionales a nivel de punto de oferta del producto, con el objeto de llamar la atención del consumidor hacia su producto”.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11
                p El punto de vista micro-distribuidor como “el conjunto de medios para asegurar la rentabilidad óptima del punto de oferta del producto” 
                h6 (Prieto, 2018).
    p.mt-5 Para #[strong Prieto (2018)], el merchandising tiene dos enfoques:
    .row.mt-3.justify-content-center
      .col-10.offset-2.mx-3.borde-top-gris.py-4
        .row
          .col-2.d-none.d-md-block.text-align-right(style='margin-right: -40px ;z-index:99')
            figure.mt-5
              img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9.borde-gris.p-5
            h6 Enfoque de la distribución
            p.mt-3 (merchandising del punto de venta). Cuando el merchandising se aborda desde la perspectiva de la distribución lo realizan principalmente los detallistas y se hace énfasis en el canal de distribución, cobertura de distribución, espacios, zonas, niveles, tiempos, distribución física o logística, etc.
    .row.mt-3.justify-content-center
      .col-10.offset-2.mx-3.borde-top-gris.py-4
        .row
          .col-2.d-none.d-md-block.text-align-right(style='margin-right: -40px ;z-index:99')
            figure.mt-5
              img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
          .col-12.col-md-9.borde-gris.p-5
            h6 Enfoque de la comunicación
            p.mt-3  (merchandising del fabricante). Aquí, el merchandising es realizado por los integrantes del canal, en especial por los fabricantes, mediante técnicas de investigación y comunicación, estudio y análisis del mercado, diseño de envases, exhibiciones, publicidad en el punto de venta del fabricante, negociación de espacios, promoción de ventas, relaciones públicas, fuerza de ventas, etc. 
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.fa-brain:before
  content: url('../assets/componentes/icono.svg')
.bloque-texto-b i
  color: #97181A !important
.bg-white
  background-color: $white
.borde-gris
  border: 4px solid #F6F6F6
  border-radius: 18px
.bloque-texto-a.color-secundario
  background-color: #E8E8E8 !important
.bloque-texto-a.color-secundario:before
  background-color: #FFF5A2 !important
.text-align-right
  text-align: -webkit-right
.justify-content-center
  justify-content: center
</style>
