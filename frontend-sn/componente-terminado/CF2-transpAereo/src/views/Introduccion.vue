<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mt-4
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    p.mt-4 La economía del país se dinamiza a partir de las actividades de los diferentes sectores que la integran, es así como el turismo y el transporte aéreo se convierten en parte fundamental del desarrollo local y regional, ya que obligan al Estado a invertir recursos para la adecuación de la planta turística, generando empleo y por tanto mejorando la calidad de vida de los participantes en el proceso, el medio aeronáutico y la actividad turística, empresarial y social.
    .row.mt-5
      .col-12.col-lg-9
        p El sector aéreo en Colombia ha crecido de manera exponencial en los últimos años y el impacto que ha generado en el país se puede medir en el número de empleos que este sector genera que son alrededor de 71.000, y donde el 2,7 % del PIB nacional está sustentado por el transporte y el turismo por vía aérea #[strong (IATA, 2019).]
        p.mt-3  #[strong Por e]sta razón es importante conocer el entorno, la regulación, características y todo aquello que el apasionado mundo de la aviación tiene para ofrecer; es un sector cambiante, dinámico, de aprendizajes diarios, pero sobre todo permite la grandiosa oportunidad de establecer contacto con personas de diferentes culturas y tener un punto de vista más amplio del mundo a partir de la experiencia de aprender de los demás.
      .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-0-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
