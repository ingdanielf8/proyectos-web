<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 3. Activos de información
    .row
      .col-12.col-lg-7.align-self-center
        p.mt-3 El concepto de seguridad de la información significa proteger la información y los sistemas de información de un acceso, uso, divulgación, alteración, modificación, lectura, inspección, registro o destrucción no autorizados. Soriano, M. (2014).
        p.mt-3 Si bien son complementarias se debe diferenciar los conceptos de seguridad de la información, seguridad informática y seguridad en la red.
      .col-5.d-none.d-lg-block
        .imagen-titulo--izq
          figure
            img(src='@/assets/template/tema-3-1.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white Activos de información
    .row.mt-5
      .col-12.col-lg-7.align-end
        .titulo-segundo
          #t_3_1.h4 3.1 Inventario de activos
        p.mt-4 De acuerdo a la norma ISO/IEC 27001 es necesario realizar un inventario y clasificación de los activos de información como cumplimiento al Modelo de Seguridad y Privacidad de la Información el cual se estipula de la siguiente forma:
    
    .row.mt-5
      .tarjeta--container.row.mb-5
        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--morada.p-5.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-3-2.svg', alt='').w-100
            
          h4.text-center Inventario de activos
          p.text-center Se deben identificar todos los activos de la compañía y a su vez crear un inventario de estos.

        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--amarilla.p-5.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-3-3.svg', alt='')
            
          h4.text-center.text-white Propiedad de activos
          p.text-white.text-center Cada activo identificado debe contar con un responsable o propietario. 
          
        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-3-4.svg', alt='')
            
          h4.text-center Clasificación de la información
          p.text-center  Se debe realizar su respectiva clasificación dependiendo del requerimiento legal, valor, criticidad, divulgación y modificación.

        .col-12.col-md-6.col-xl-3.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #FFC23B, #80611E);")
          .row.justify-content-center.mb-4
            .col-5.col-md-6.col-xl-8
              figure
                img(src='@/assets/template/tema-3-5.svg', alt='')
            
          h4.text-center Manipulación de información
          p.text-center Se debe contar con procedimientos que permitan etiquetar la información y que funcione con el sistema de clasificación que definió la empresa.
    .row
      .col-12
        p La clasificación de un activo de información se basa en las propiedades de confidencialidad, integridad y disponibilidad como principios para el tratamiento de los datos, en este proceso también evalúa el impacto que tendría en caso de que afectara alguno de estos principios. 
        p.mt-4 Es importante saber que a cada propiedad se le deben establecer criterios específicos acerca de cómo va a ser el tratamiento del activo. Cada entidad puede definir los niveles que permitirán determinar el valor del activo. Normalmente se usan tres niveles: alta, media y baja para saber cuáles activos se deben tratar con prioridad.
    .row.mt-3
      .col-12.col-md-6.col-lg-4.justify-content-center.offset-0.offset-md-
        img(src='@/assets/template/tema-3-6.svg', alt='')
      .col-12.col-md-6.col-lg-4.justify-content-center.mt-3
        img(src='@/assets/template/tema-3-7.svg', alt='')
      .col-12.col-md-6.col-lg-4.offset-md-3.offset-lg-0
        img(src='@/assets/template/tema-3-8.svg', alt='')
    .row.mt-5
      .col-12.col-lg-7.align-end
        .titulo-segundo
          #t_3_2.h4 3.2 Metodologías de valuación de activos
    .row.mt-4  
      .col-12.col-lg-7.align-self-center
        p Para la valuación de activos, las metodologías utilizadas son las mismas que se mencionan en la valuación de riesgos informáticos, toda vez que este proceso inicia justamente con la identificación, clasificación y valuación de los activos, por ello es recomendable hacer la selección de una metodología que más se ajuste a la necesidad de cada empresa.
      .col-4.d-none.d-lg-flex
        img(src='@/assets/template/tema-3-9.svg', alt='')
    BannerInformativo(info="Protegerse de los peligros de la actual coyuntura tecnológica nos lleva a diseñar y adoptar una serie de procesos que nos posibiliten la protección de sus activos, recursos e información y para ello se recomienda la aplicación de las siguientes fases:")
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import BannerInformativo from '../../components/plantilla/BannerInformativo'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
    BannerInformativo,
  },
}
</script>

<style lang="sass" scoped></style>
