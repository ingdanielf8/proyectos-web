<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Anexo. Desarrollo_API_REST
    .row.mt-5
      .col-12.col-lg-7
        p Con el fin de revisar y evaluar el funcionamiento de la API se utilizará la herramienta Postman, que es una herramienta que se utiliza especialmente para el testing de API REST, aunque también admite otras funcionalidades que se salen de lo que engloba el testing de este tipo de tecnologías. 
        p Con Postman, además de testear, consumir y depurar API REST, se puede monitorearlas y escribir pruebas automatizadas para ellas, documentarlas y simularlas. Esta herramienta es favorable para equipos con poca experiencia en programación y para hacer testing de todo tipo en general de API REST #[strong (López, 2021)].
        p.mt-3 La instalación de esta herramienta es rápida y sencilla; son pocos los pasos para su configuración, al respecto se puede instalar en el equipo de manera persistente o también como una extensión de Google Chrome #[strong (Chrome, 2021)].
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-3-1.png")
    p.mt-3 Para finalizar, conozca la instalación de la herramienta Postman.
    .tarjeta.color-acento-botones.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/tema-3-2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              .row
                .col-lg-6
                  a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p Anexo. Desarrollo_API_REST
            .col-sm-auto
              a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

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
