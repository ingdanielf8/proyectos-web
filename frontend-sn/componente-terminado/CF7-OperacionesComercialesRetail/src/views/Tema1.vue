<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Recaudo en el punto de pago      
    .row.mt-5
      .col-7.cuadro-morado-fondo.align-self-center
        p Para comenzar es importante esta definición, que es la acción de culminar con amabilidad la experiencia de compra de nuestros clientes en el almacén, registrando con agilidad y precisión los artículos que este ha seleccionado. La función general como cajero es atender de forma cortés a los clientes y registrar con oportunidad y exactitud los artículos que estos han seleccionado.
        p.mt-3 La finalidad del recaudo es brindar un excelente servicio al cliente en el puesto de pago, efectuando el correcto registro y cobro de las mercancías que este adquiere, cumpliendo con las normas, políticas y procedimientos definidos por la compañía. Para iniciar el proceso de recaudo se debe contar con una base, conocer la estructura de la terminal POS y hacer la apertura de la caja.
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-1-1.png", alt="Imagen descriptiva").w-75.margin-0-auto
    
    .titulo-segundo.mt-5
      #t_1_1.h2 1.1 Base de la caja
    .row.mt-5.zoom-in(data-aos="slide-up")
      .col-5
        figure
          img(src="@/assets/template/tema-1-2.svg", alt="Caja registradora").w-75.margin-0-auto
      .col-7.align-self-center
        p La base es la primera cantidad de dinero que se recibe en billetes y monedas de diferente denominación para dar el cambio o las “vueltas” a los clientes. Para reclamar la base, primero debe ingresar y salir del sistema POS, con esta acción se carga la base al sistema y se obtiene la tirilla con el valor a reclamar. Antes de dirigirse al puesto de pago debe verificar la cantidad recibida.
        p.mt-3 Recuerde llevar siempre al puesto de pago el sacudidor y el dispensador de agua que le suministra el jefe inmediato, luego de distribuir la base en la gaveta verifique el material de empaque entregado por la empresa.
        .cajon.color-acento-contenido.mt-4
          .row.p-4            
            p Cuando llegue al puesto de pago no devuelva a los clientes, sugiérales que lo esperen mientras organiza la base.
    separador.mt-4
    
    .titulo-segundo.mt-5
      #t_1_2.h2 1.2   Apertura de la caja 
    p.mt-5 Las operaciones que realiza el cajero en el puesto de pago durante su jornada se clasifican en las etapas definidas como el antes, el durante y el después, vea a continuación el siguiente video.
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
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

<style lang="sass" scoped></style>
