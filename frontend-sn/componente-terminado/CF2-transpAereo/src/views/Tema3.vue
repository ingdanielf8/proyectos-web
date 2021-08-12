<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Paquete turístico
    .row.mt-4
      .col-12.col-lg-8
        p El pionero del paquete turístico fue el británico Thomas Cook (considerado el padre del Turismo), en 1841 y creador de la primera Agencia de Viajes Thomas Cook and Son en 1851, organizó el primer viaje chárter en tren para asistir a un congreso de anti-Alcohólicos, donde cada viajero pagó una cantidad única para el desplazamiento y alimentación; fue un fracaso económico pero un éxito personal ya que se da cuenta del potencial futuro de organización de viajes.
        p.mt-3 Cada paquete turístico incluye dos o más servicios de carácter turístico con un valor global establecido y que permanezcan más de 24 horas o pernocten (pasar la noche) una noche de estadía en un destino.
        p.mt-3 Se considera paquete turístico al grupo de servicios que se solicitan con antelación y que contiene algunos de los siguientes:
        ul.lista-ul.mt-4
          li 
            i.fas.fa-angle-right
            | Alojamiento.
          li.mt-3
            i.fas.fa-angle-right
            | Transporte de aproximación.
          li.mt-3
            i.fas.fa-angle-right
            | Gastronomía.
          li.mt-3
            i.fas.fa-angle-right
            | Recreación.
          li.mt-3
            i.fas.fa-angle-right
            | Visitas guiadas.
          li.mt-3
            i.fas.fa-angle-right
            | Transporte local.
          li.mt-3
            i.fas.fa-angle-right
            | Lugares de diversión.        
      .col-4.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mt-4 Existen diferentes clases de paquete turístico, desde el más simple, que solo incluye el traslado o el transporte a un destino, puede que este incluya un acompañamiento de un guía o no, también se encuentran unos más completos y especializados dependiendo del gusto y preferencia del cliente, algunos pueden ser paquetes ya están establecidos, ejemplo, deportivo, médico, aventura etc. o aquellos que se arman personalizados.  
    p.mt-3 Cuando en un paquete turístico se habla del itinerario, quiere decir, el detallado de las actividades, lugares, visitas y demás componentes que incluye el plan, así como del orden de actividades del día, incluyendo horarios y zonas de alimentación, de transporte y demás
    figure.mt-4
      img(src="@/assets/template/tema-3-2.png", alt="Texto que describa la imagen")
    p.mt-5 El valor a pagar por el cliente al adquirir este tipo de paquetes es un valor único por todos los servicios que están incluidos en el plan, lo que este por fuera de esta discriminación de servicios va por cuenta del cliente. 
    p Normalmente, el propósito de estos paquetes es tener estructurado todo el ciclo de servicio para que las personas que lo toman no tengan que preocuparse al viajar por planear su día a día, sino que todos estos detalles ya están implícitos en el paquete.
    p.mt-3 Toda clasificación del paquete turístico debe considerar las siguientes características:
    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris ").mt-4
      .row(titulo="Organización de la prestación")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-3.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              | Estándar: paquetes ya establecidos con alta demanda al ofrecen atractivos turísticos de interés para la mayoría del público. 
            li 
              i.fas.fa-compass
              | Especiales: paquetes personalizados de acuerdo con las preferencias del cliente. 
      .row(titulo="Modalidad del viaje")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              | Viajes itinerantes: es aquel viaje que incluye la pernocta en varios destinos.   
            li 
              i.fas.fa-compass
              | Viajes de estancia las pernoctas y actividad turística se realiza en la misma ciudad, lo que indica que no hay desplazamientos significativos.
      .row(titulo="La temática")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-5.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              |  Generales: no abordan un tema determinado. Incluyen distintas actividades relacionadas con los destinos.
            li 
              i.fas.fa-compass
              | Específicos: son de temática específica e incorporan solo atractivos que se relacionan con la misma.
      .row(titulo="El programa")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              |  Locales: conocidos como excursiones que se dan en un lugar específico; la duración del recorrido es de no más de un día.
            li 
              i.fas.fa-compass
              | Regionales: conocidos como tours, son viajes a uno o más destinos turísticos, con regreso al punto de origen, su duración excede las 24 horas.
      .row(titulo="Forma de operación")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-7.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              | Grupos: paquetes diseñados para grupos, se establecen con un número mínimo de plazas según compañía operadora.  
            li 
              i.fas.fa-compass
              | Individuales: se establecen sobre la necesidad del cliente. 
      .row(titulo="Usuarios del producto")
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen")
        .col-12.col-lg-9
          ul.lista-ul--color.mt-4.px-4
            li 
              i.fas.fa-compass
              |  Grupos: paquetes diseñados para grupos, se establecen con un número mínimo de plazas según compañía operadora.
            li 
              i.fas.fa-compass
              | Individuales: se establecen sobre la necesidad del cliente. 





</template>

<script>
export default {
  name: 'Tema3',
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
