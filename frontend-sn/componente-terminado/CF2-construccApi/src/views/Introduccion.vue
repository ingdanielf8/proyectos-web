<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-12.col-lg-10
        p En este componente formativo se estudiarán los conceptos y pasos para el desarrollo de una API REST, utilizando las tecnologías del Backend como Node.js, Express y el sistema de bases de datos no relacional como lo es MongoDB. De esta forma se inicia con la puesta a punto del entorno de desarrollo con Visual Studio Code, el cual será el espacio de trabajo donde se construirá la API. Adicionalmente, se comprenderá la importancia del uso de los comandos (en la terminal) para la instalación y configuración de paquetes necesarios para el correcto funcionamiento del proyecto, de igual manera, se ilustra algunas buenas prácticas de desarrollo y herramientas que harán más prolijo el código.
        p Una vez construida la API se inicia con un testing a través de la herramienta Postman, que es muy utilizada para este tipo de desarrollos. Así, se corrobora las respuestas y solicitudes de un tipo de proyectos de esta naturaleza. 
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
            img(src="@/assets/template/tema-0-2.svg" alt="Texto que describa la imagen")



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
