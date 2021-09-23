<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Baggage compensation // Compensaciones de equipaje 
    figure.mt-4
      img(src="@/assets/template/tema-2-1.png" alt="Texto que describa la imagen")
    .row.mt-5.px-5
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Compensations for baggage irregularities are made in order to maintain the loyalty and preference of customers, so the airlines handle compensations according to each particular situation.
    p.mt-5 Las compensaciones por irregularidades en equipajes se hacen con el fin de mantener la fidelidad y la preferencia de los clientes, por eso las compañías aéreas manejan compensaciones según la novedad que se presente.
    p.mt-5 Existen diversos tipos de compensación, como son:
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span A
        .h4 What you can get from the airline – What you are paid for as compensation // [Lo que puede obtener de la aerolínea – Lo que se le paga como compensación]
    .row.mt-5.px-5
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Payments made by the airline are under any of the following categories: 
      p.mt-5 [Los pagos pueden realizarse bajo los siguientes conceptos:] 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr.bg-acento-botones.text-white.text-center
                th.py-3 
                  .h4 Compensation payments / Pagos
                th 
                  .h4 Definition / Definición
            tbody
              tr.bg-gris-claro
                td.text-center.py-4 A -ADVANCE
                td Expenses for the bare essentials you need // Gastos de primera necesidad
              tr
                td.text-center.py-4 D-DELIVERY
                td Transport or delivery costs / Pagos de transporte o envío a domicilio 
              tr.bg-gris-claro
                td.text-center.py-4 I-INSURANCE
                td Insurance costs / Pagos de seguros
              tr
                td.text-center.py-4 X-OTHER
                td Payments in EMD or MILES / Pagos en EMD o MILLAS
              tr.bg-gris-claro
                td.text-center.py-4 F-FINAL
                td Final compensation / Compensación Final
    .row.mt-5
      .col-12.col-lg-6.px-4
        .row.bandera.bg-amarillo-claro.h-100
          .col-12.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p It is important to bear in mind that baggage irregularities can occur in the daily operation, therefore, the passenger is entitled to a series of compensations: 
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | In the event that the checked baggage does not arrive on the flight in which the passenger is traveling, the airline must deliver a personal hygiene kit or the cost of it.
              li.mt-2 
                i.fas.fa-angle-right
                | If the delay is more than 24 hours, the airline must provide the corresponding amount of money so that the tr
            p.mt-3 Regarding the types of compensation, airlines may vary in the way they pay for them, reaching an agreement with the passenger. The types of compensation are:
      
      .col-12.col-lg-6.px-4
        .row.bg-amarillo-claro.h-100
          .col-12.px-5.py-4            
            p Es importante tener en cuenta que se pueden presentar irregularidades en equipajes durante la operación diaria, por esto, el pasajero tiene derecho a una serie de compensaciones:  
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | En caso de que el equipaje registrado o en bodega no llegue en el vuelo en el que viaja el pasajero, la aerolínea debe entregar un kit de aseo personal o el valor de este.
              li.mt-2 
                i.fas.fa-angle-right
                | Si la demora es superior a 24 horas, la aerolínea debe entregar el valor correspondiente para que el viajero pueda adquirir prendas básicas de cambio.
            p.mt-3 En cuanto a los tipos de compensación, las aerolíneas pueden variar la forma como hacen el pago de la misma, llegando a un acuerdo con el pasajero. Los tipos de compensación pueden ser los que se observa a continuación: 
    .row.mt-5.text-white
      .col-12.col-lg-4.bg-acento-contenido.rounded-20-top-left.rounded-20-bot-left.zoom-in
        figure.mt-5
          img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen").w-50.margin-0-auto
        .h4.mt-4.text-white.text-center EMD // EMD 
        .row.mt-5.px-3
          .col-12.bandera.bg-morado-25.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic Documents with the value that the passenger can use with the airline.
          p.mt-3.mb-5 Documentos con el valor que el pasajero puede usar con la aerolínea.
      .col-12.col-lg-4.bg-acento-botones.zoom-in
        figure.mt-5
          img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen").w-50.margin-0-auto
        .h4.mt-4.text-white.text-center Miles // Millas
        .row.mt-5.px-3
          .col-12.bandera.bg-morado-25.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic Depending on the frequent flyer program, the airline may offer benefits.
          p.mt-3.mb-5 Dependiendo del programa de viajero frecuente, la aerolínea puede ofrecer beneficios.
      .col-12.col-lg-4.bg-acento-contenido.rounded-20-top-right.rounded-20-bot-right.zoom-in
        figure.mt-5
          img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen").w-50.margin-0-auto
        .h4.mt-4.text-white.text-center Cash // Efectivo
        .row.mt-5.px-3
          .col-12.bandera.bg-morado-25.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic local currency
          p.mt-5.mb-5 Moneda local
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span B
        .h4 Delayed or missing luggage? // ¿Equipaje retrasado o perdido?
    .row.mt-5
      .col-12.col-lg-10
        .row.px-5
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic Explore the following dialogue with the help of a good dictionary. Pay special attention to the way a baggage agent assists a traveler whose suitcase is missing. 
          p.mt-4 Explore el siguiente diálogo con la ayuda de un buen diccionario. Preste especial atención a la forma en que un agente de equipaje ayuda a un viajero al que le falta una maleta
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-5.svg")
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span C
        .h4 With the help of your tutor and  // Con la ayuda de su tutor 
    .row.mt-5
      .col-12.col-lg-10
        .row.px-5
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic The use of a dictionary, look up any words or phrases you do not know in the dialogue above. Here are some of them. 
          p.mt-4 Y el uso de un diccionario, busque los términos y expresiones desconocidas en el diálogo anterior. Aquí hay algunos de ellos.]
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-6.svg")
    .row.mt-5
      .bloque-texto-a.color-primario.p-4.p-md-4.mb-5 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/template/tema-2-7.svg").floating
          .col-lg-8
            .bloque-texto-a__texto.p-4
              .h4 My suitcase never arrived on the baggage carousel // [Mi maleta nunca llegó a la cinta transportadora de equipaje] 
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right
                  | Luggage sticker // [Sticker del equipaje]
                li.mt-2  
                  i.fas.fa-angle-right
                  | A business meeting // [Una reunión de negocios]
                li.mt-2  
                  i.fas.fa-angle-right
                  | Which one looks most like yours? // [¿Cuál se parece más a la suya?]
                li.mt-2  
                  i.fas.fa-angle-right
                  | The airline will reimburse you for any clothing you buy. // [La aerolínea le reembolsará la ropa que compre.]
                li.mt-2  
                  i.fas.fa-angle-right
                  | the airline will deliver it to your hotel // [la aerolínea se la llevará hasta su hotel]
                li.mt-2  
                  i.fas.fa-angle-right
                  | track down the suitcase // [rastrear la maleta]
                li.mt-2  
                  i.fas.fa-angle-right
                  | as quickly as we can // [tan rápido como podamos]
                li.mt-2  
                  i.fas.fa-angle-right
                  | to file a claim for any necessary items you buy // [hacer un reclamo por cualquier artículo necesario que compre]
                li.mt-2  
                  i.fas.fa-angle-right
                  | My guess is that your suitcase might arrive on the next flight // [Supongo que su maleta podría llegar en el próximo vuelo] 


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
