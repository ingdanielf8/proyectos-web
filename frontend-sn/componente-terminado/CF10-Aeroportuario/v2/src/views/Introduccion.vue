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
      .col-12.bandera.bg-amarillo-claro.p-5
        figure 
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p Baggage handling is essential in the travel process. This, in turn, brings with it several processes and procedures that must be taken into account in the daily operation of an air terminal. The security, not only of the airport but also of the flight, will depend on the handling that is given to both passengers and luggage. Particular attention should be paid to the content that will get on board the aircraft.
        p.mt-3.mb-0 The flight process has several phases as it has already been seen. However, baggage handling is one of the most important for completing a smooth cycle. It must be kept in mind that baggage handling involves several processes so that the client has a safe, pleasant and smooth trip. The goal is that the passenger’s perception of the service offered by the airline will not be affected negatively.
    .row.mt-5
      .col-12.col-lg-9
        p En el proceso de viaje es fundamental el manejo de equipajes. Este, a su vez, trae consigo varios procesos y procedimientos que se deben tener en cuenta en la operación diaria de una terminal aérea. Del manejo que se le dé tanto a pasajeros como a equipaje dependerá la seguridad no solo del aeropuerto sino también del vuelo, ya que se debe prestar especial atención al contenido que va a abordar la aeronave.
        p.mt-3 El proceso de vuelo tiene varias fases, como se ha visto en el desarrollo del programa, sin embargo, el manejo de equipajes es una de las más importantes para completar un ciclo sin novedades. Es necesario tener en cuenta que el manejo de equipajes involucra varios procesos para que el cliente tenga un viaje seguro, agradable y sin contratiempos que afecten negativamente la percepción del servicio ofrecido por la aerolínea.
      .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
        figure.slide-in
          img(src="@/assets/template/tema-0-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
