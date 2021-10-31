<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Ciclo del producto
    
    .row.mt-5.position-relative
      .col-8.align-self-center.bg-acento-botones.rounded-20.px-5.position-absolute(style="left: 33%; padding-top: 6%; padding-bottom:6%; top:11%")
        p Los mercados hoy en día se encuentran en constantes cambios y continúan evolucionando, esto también hace que los productos que ofrece una empresa tengan una vida limitada y experimenten una evolución desde que salen al mercado hasta su retirada y esto se da por diferentes etapas que logran afectar a las ventas de la unidad productiva. A continuación, se estudiará el ciclo de vida del producto:
        p.mt-3 La capacidad de la empresa en adaptar sus productos a las nuevas necesidades de los consumidores dependerá de los factores que afectan la evolución y la demanda de los productos de la unidad productiva. Las etapas del ciclo de vida de un producto son: introducción, crecimiento, madurez y declive. En la siguiente gráfica interactiva se puede observar la evolución de cada una de sus etapas:
      
      .col-6
        figure
          img(src="@/assets/template/tema-5-1.png", alt="Texto que describa la imagen")
    figure.mt-5
      img(src="@/assets/template/tema-5-2.png", alt="")
    figcaption.mt-3 Referencia Nota. SENA, (2021). 

</template>

<script>
export default {
  name: 'Tema5',
  components: {},
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
