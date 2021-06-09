<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Metodología en UX y UI
    figure.mb-5
      img(src="@/assets/template/tema-6-1.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.col-md-8.align-self-center
        p Las metodologías UX y UI nos muestran una serie de pasos a desarrollar en el proceso de diseño de productos digitales, basados principalmente en la experiencia de usuario.
        p.mt-4 UX son las siglas de User Experience, que traduce experiencia del usuario; mientras las siglas UI, vienen de User Interface o uso de interfaz, es decir, el conjunto de elementos en pantalla que le permiten al usuario interactuar con la web.
        p.mt-4 El siguiente gráfico muestra un paralelo entre la experiencia de usuario y la interfaz, en relación con sus componentes más sobresalientes, haciendo alusión a la parte lógica y emocional, de acuerdo con el hemisferio del cerebro que se observe: 
      .col-8.offset-2.col-md-4.offset-md-0.align-self-center
        figure.mb-5
         img(src="@/assets/template/tema-6-2.svg", alt="Texto que describa la imagen")
    .h4.mt-4  Comparación entre UX - UI
    figure.mt-5
      img(src="@/assets/template/tema-6-3.png", alt="Texto que describa la imagen")
    figcaption.mt-4 Referencia SENA
    .titulo-segundo.mt-5
      #t_6_1.h4 6.1  Experiencia de usuario UX
    p.mt-4
    p.mt-4
    .row.mt-4
      .col-12.col-md-9.align-self-center
        p  
      .col-8.offset-2.col-md-3.offset-md-0.align-self-center
        figure.mb-5
         img(src="@/assets/template/tema-6-2.svg", alt="Texto que describa la imagen")






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

<style lang="sass" scoped></style>
