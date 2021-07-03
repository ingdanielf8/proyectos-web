<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Codificación de la API REST con Node.js
    figure.mt-4
      img(src="@/assets/template/tema-2-1.png" alt="Texto que describa la imagen")
    p.mt-5 En este capítulo se inicia con el desarrollo de la API REST, por lo que se verá la codificación de cada uno de los archivos que componen el proyecto. Para esto, es importante tener en cuenta dos cosas, la primera es realizar buenas prácticas de codificación, permitiendo que el código quede legible y mucho más limpio al momento de documentar y la segunda, es entender la estructura de directorios del proyecto, la cual va a dar el orden al proceso de búsqueda e indexación de las rutas y recursos que se necesitarán al momento del desarrollo.
    #t_2_1.titulo-segundo.mt-5
      .h4 2.1  Buenas prácticas en la codificación de Node.js
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p El objetivo de seguir estándares de codificación es alcanzar un código mantenible, y se considera mantenible cuando el código es legible, consistente, predictivo y documentado. En la práctica, la corrección de errores y modificación del código desarrollado de un producto software toma demasiado tiempo y se llega algunas veces a que no es posible realizar del todo el desarrollo, por lo que se toma la decisión de iniciar de cero, debido a las malas prácticas #[strong (Choque, 2016).]
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/template/tema-2-2.svg" alt="Texto que describa la imagen").w-75
    p.mt-5 A continuación, se indican las buenas prácticas enunciadas por uno de los mejores servicios de control de versiones y desarrollo de software colaborativo basado en Git, llamada GitLab. Esta comunidad sigue de igual manera estándares como Google JavaScript Style Guide #[strong (Whyte, 2021).]
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Código en general" :icono="require('@/assets/template/tema-2-14.svg')")
        .row.mx-4  
          .col-12.col-lg-9        
            ol.lista-ol--cuadro.mb-0.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 1
                p Utilizar el punto y coma (;) como final de instrucción. Mejora la lectura y evita conflictos con herramientas de verificación de código. 
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 2
                p Para delimitar y diferenciar cadenas de texto se recomienda utilizar comillas simples con excepción de JSON.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 3
                p La codificación en la sintaxis para los nombres de variables o procedimientos es lowerCamelCase la cual establece que la letra inicial debe ser minúscula y las palabras siguientes deben tener la inicial en mayúscula, y el resto en minúscula, por ejemplo, var logFileName.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 4
                p La codificación en la sintaxis de las clases e interfaces es UpperCamelCase que establece que la letra inicial debe ser mayúscula y las palabras siguientes deben tener la inicial en mayúscula, y el resto en minúscula.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 5
                p Evitar escribir prefijos del tipo de dato a las variables. Se recuerda que las variables en JavaScript son sin tipo, es decir, que toman su tipo de dato dependiendo del valor.
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-3.svg" alt="Texto que describa la imagen")
      
      .py-4.py-md-5(titulo="Bloques de código" :icono="require('@/assets/template/tema-2-15.svg')")
        .row.mx-4  
          .col-12.col-lg-9        
            ol.lista-ol--cuadro.mb-0.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 1
                p Las líneas de código que tienen alguna relación deben estar agrupadas sin espacio entre sus líneas. 
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 2
                p La cantidad máxima de caracteres que debe tener una línea de código debería ser de 120.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 3
                p Los bloques de código que son alusivos a las clases, procedimientos y estructuras de control deben estar identados con 4 espacios, que es lo mismo a una tabulación.
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-4.svg" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Procedimientos" :icono="require('@/assets/template/tema-2-16.svg')")
        .row.mx-4  
          .col-12.col-lg-9        
            ol.lista-ol--cuadro.mb-0.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 1
                p La cantidad de líneas que se recomiendan para un procedimiento es de 20, salvo casos excepcionales. En el caso de que un procedimiento supere las 20 líneas se debe evaluar la división del proceso en procesos más pequeños. Se debe tener en cuenta que un procedimiento debe realizar una tarea.
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-5.svg" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Manejo de errores y excepciones" :icono="require('@/assets/template/tema-2-17.svg')")
        .row.mx-4  
          .col-12.col-lg-9        
            ol.lista-ol--cuadro.mb-0.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 1
                p Como una buena práctica los errores y/o excepciones posibles deben ser capturados (catch) y se debe lanzar (throw) un mensaje preciso, con el fin de evitar la finalización abrupta del programa.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 2
                p En caso de que el error requiera alguna acción por parte del usuario como puede ser continuar, cancelar u otras opciones, el sistema debe informar al usuario sobre las consecuencias de cada elección.
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-6.svg" alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Comentarios" :icono="require('@/assets/template/tema-2-18.svg')")
        .row.mx-4  
          .col-12.col-lg-9        
            ol.lista-ol--cuadro.mb-0.mt-3
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 1
                p Los comentarios forman parte de la documentación de un proyecto, de hecho, esta buena práctica hace parte de la base del manual técnico de un proyecto de software. 
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span.color-sistema-texto 2
                p Su principal ventaja es que a partir de ellos se logra reducir el costo de transferencia de conocimientos entre equipos de desarrollo. Dado que es posible intervenir de manera más rápida en la continuación del desarrollo.
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-7.svg" alt="Texto que describa la imagen")
    #t_2_2.titulo-segundo.mt-5
      .h4 2.2  Desarrollo de la API REST
    figure
      img(src="@/assets/template/tema-2-8.png" alt="Texto que describa la imagen")
    p.mt-5 A continuación, se describen de manera sucinta los pasos requeridos para el desarrollo de la API REST con Node.js.
    .tarjeta.color-acento-botones.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/template/tema-2-9.svg")
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
  name: 'Tema2',
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
