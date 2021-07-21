<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Evolución histórica del libro
    .row
      .col-12.col-md-7.align-self-center
        p.mb-5 Desde sus orígenes, la humanidad ha tenido la necesidad de transmitir el conocimiento, el idioma, las costumbres, la música y sus tradiciones de generación en generación. Con el pasar del tiempo, el asentamiento del hombre en poblaciones, la conformación de pequeñas comunidades, con la posterior creación de las primeras ciudades, se empiezan a construir las bibliotecas y con estas se vuelve una necesidad recopilar el conocimiento en todas las áreas de la vida, por medio del libro. La divulgación de dichos conocimientos en épocas remotas, no se realiza como se conoce hoy en día, se efectuaba de manera oral, de persona a persona, el llamado voz a voz; durante siglos fue así, sin embargo, cuando se creó y desarrolló el libro escrito de manera impresa, se utilizaron diferentes técnicas y variados insumos y materiales.  
        p El libro ha tenido un papel fundamental en el desarrollo y avance de las sociedades, en el progreso y posterior conocimiento de estas, y en el resguardo del conocimiento, la historia, el arte, la política, la religión y los modos de vida en cada época. Para visibilizar su importancia, le invito a revisar el siguiente video que le permitirá adentrarse en sus orígenes y primeras manifestaciones:
      .col-8.col-md-5.col-xl-4.offset-2.offset-md-0.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    figure.mb-5
      .video.mt-5
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
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
