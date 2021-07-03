<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La internet y la web
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/template/tema-1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para todo proyecto software es recomendable alistar las herramientas necesarias y mínimas para iniciar con un desarrollo. En ese sentido, dependiendo del alcance, la tecnología y/o lenguaje se sugiere definir muy bien este tipo de recursos para realizar el ejercicio. En este orden de ideas se abordarán algunos conceptos fundamentales.
    #t_1_1.titulo-segundo.mt-5
      .h4 1.1  Conceptos sobre el entorno de desarrollo integrado IDE
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-acento-contenido.py-4.mb-4
          .row
            .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
              figure
                img(src="@/assets/template/tema-1-2.svg" alt="Texto que describa la imagen")
            .col-12.col-lg-9.mt-4.mt-lg-0.align-self-center  
              p Como primera medida es necesario tener en cuenta la definición de un entorno de desarrollo integrado IDE, que es un espacio de trabajo basado en tecnologías y software que sirven de plataforma para el diseño de aplicaciones que componen una serie de herramientas para el desarrollador de software. Un IDE cuenta con las siguientes características:
    .row.mt-5
      .col-12
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Editor de código fuente")
            p  Es un editor de texto que ayuda a escribir en el lenguaje de programación definido; esta herramienta apoya la sintaxis o construcción de instrucciones para que se realicen de la manera correcta. Una de sus funcionalidades más importantes es resaltar ciertas partes del código que se están desarrollando, para tener una referencia sobre el flujo o línea lógica del desarrollo de la aplicación. De manera adicional hay editores que ayudan a autocompletar ciertas funciones ya preestablecidas del lenguaje.

          .row(numero="2" titulo="Automatización de compilaciones locales")
            p Es un recurso que permite automatizar tareas sencillas e iterativas como parte de la creación de una compilación local del software para su uso por parte del desarrollador.
          .row(numero="3" titulo="Depurador")
            p “Programa que sirve para probar otros programas y mostrar la ubicación de un error en el código original de forma gráfica” (Red Hat, 2021). Además, hay entornos que ayudan con varias opciones de la sintaxis para corregir el código.
            p.mt-3 Para el caso de este componente formativo se utilizará el IDE Visual Studio Code por las siguientes razones:
            .col-12
              .row.mb-5
                .col-sm.mb-5.mb-sm-0
                  h4 Listado ordenado cuadro color
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto a
                      p #[strong Visual Studio Code] resalta las palabras clave del código en diferentes colores para ayudar a identificar fácilmente los patrones de codificación y aprender más rápido.
                    li 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto b
                      p #[strong A medida que se codifica], Visual Studio Code brinda sugerencias para completar líneas de código y soluciones rápidas para errores comunes.
                    li 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto c
                      p #[strong Se aprovecha porque este entorno tiene incorporado la terminal], lo cual hace mucho más fácil el desarrollo sobre todo con las tecnologías de Node.js, ya que trae los paquetes necesarios para el proyecto.
                  p.mt-3 En el proceso de alistamiento del entorno para iniciar el proyecto de desarrollo de la API se deberá contar con los siguientes recursos:
                  ol.lista-ol--cuadro
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto a
                      p Visual Studio Code
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto b
                      p Node.js 
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto c
                      p Express.js
                    li.mb-0 
                      .lista-ol--cuadro__vineta
                        span.color-sistema-texto d
                      p MongoDB
    #t_1_2.titulo-segundo.mt-5
      .h4 1.2  Instalación del Visual Studio Code 
    figure
      img(src="@/assets/template/tema-1-3.png" alt="Texto que describa la imagen")
    p.mt-5 Para la instalación se deben seguir los siguientes pasos (para este caso se ha tomado como plataforma el sistema operativo Windows 10):
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-secundario.py-5.px-5
          ol.lista-ol--cuadro.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span.color-sistema-texto 1
              p.mb-0 Descargar el instalador de la página principal para Visual Studio Code en Windows (el enlace se podrá encontrar en el material complementario).
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-secundario-op50.py-5.px-5
          ol.lista-ol--cuadro.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span.color-sistema-texto 2
              p.mb-0 Una vez descargado, se debe correr el instalador y seguir con el wizard o paneles de instalación. Luego dar clic en finalizar, como se muestra en la siguiente figura.
          .h4.mt-3 Figura 1
          p.mt-3 Panel de instalación de Visual Studio Code
          figure.mt-3
            img(src="@/assets/template/tema-1-4.png" alt="Texto que describa la imagen")
          figcaption.mt-3 Nota. SENA (2021). 
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-secundario-op25.py-5.px-5
          ol.lista-ol--cuadro.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta
                span.color-sistema-texto 3
              p.mb-0 Por defecto, el Visual Studio Code se instala en la siguiente ruta: 
          figure.mt-3
            img(src="@/assets/template/tema-1-5.png" alt="Texto que describa la imagen").w-50.mb-0
    #t_1_3.titulo-segundo.mt-5
      .h4 1.3  	Instalación y configuración del Node.js y npm
    figure
      img(src="@/assets/template/tema-1-6.png" alt="Texto que describa la imagen")
    p.mt-4 Node.js está considerado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, de igual manera está diseñado para crear aplicaciones network escalables y pensado en principio como tecnología Backend #[strong (node.js.org, 2021).] 
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-acento-contenido-op50.py-5.px-5
          ol.lista-ol--cuadro.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta.bg-color-secundario
                span.color-sistema-texto 1
              p.mb-0 Para instalar el Node.js se ingresa a la página oficial (el enlace se podrá encontrar en el material complementario). Posteriormente, se debe ingresar a la pestaña de descargas y después seguir el wizard o paneles de instalación, según  se muestra en la siguiente figura.
          .h4.mt-3 Figura 2
          p.mt-3 Panel de instalación de Visual Studio Code
          figure.mt-3
            img(src="@/assets/template/tema-1-7.png" alt="Texto que describa la imagen")
          figcaption.mt-3 Nota. SENA (2021). 
          p.mt-2 Al instalar el Node.js también viene instalado el gestor de paquetes JavaScript que se llama npm (Node Package Manager). A través de este recurso se puede tener cualquier librería disponible con solo una línea de código, así que npm ayudará a administrar los módulos, distribuir paquetes y agregar dependencias de una manera sencilla (#[strong npm, 2021]).
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-acento-contenido-op25.py-5.px-5
          ol.lista-ol--cuadro.mb-0
            li.mb-0 
              .lista-ol--cuadro__vineta.bg-color-secundario
                span.color-sistema-texto 2
              p.mb-0 Posterior a la instalación se verifica que tanto el Node.js como el npm estén instalados, para eso se utiliza la línea de comandos en la terminal del Visual Studio Code: node -v o npm – v.
          .h4.mt-3 Figura 3
          p.mt-3 Terminal o consola de Visual Studio Code (versiones Node.js y npm)
          figure.mt-3
            img(src="@/assets/template/tema-1-8.png" alt="Texto que describa la imagen")
          figcaption.mt-3 Nota. SENA (2021). 
          p.mt-2 Instalado Node y npm se inicia a construir el proyecto, por lo tanto, se ejecuta el comando npm init, esto activará la inicialización del proyecto. Este comando funciona como una herramienta o recurso para crear el archivo package.json de un proyecto. Una vez se ejecuten todos los pasos de npm init se generará ese archivo y se guardará en el directorio actual, que para el caso de este componente formativo se llama REST API.
    #t_1_4.titulo-segundo.mt-5
      .h4 1.4  Instalación de módulos
    figure
      img(src="@/assets/template/tema-1-9.svg" alt="Texto que describa la imagen")
    p.mt-5 Un paquete en Node.js contiene todos los archivos que se necesitan para instalar un módulo; los módulos son bibliotecas de JavaScript que se pueden incluir en el proyecto. Instalar módulos es una de las principales tareas que debe aprender a hacer al comenzar con el administrador de paquetes Node. El comando para instalar un módulo en el directorio actual es el siguiente:
    .col-sm.mt-5
      ul.lista-ul        
        li 
          i.fas.fa-angle-right
          | $ npm install módulo 
        li 
          i.fas.fa-angle-right
          | $ npm i módulo 
    p.mt-5 El primer módulo a instalar es Express, el cual es el framework web más popular de Node y proporciona mecanismos para:
    .col-sm.mt-5
      ol.lista-ol--cuadro.lista-ol--separador
        li 
          .lista-ol--cuadro__vineta.bg-color-secundario
            span 1
          | Escritura de manejadores de peticiones con diferentes verbos HTTP, en diferentes caminos URL (rutas).
        li 
          .lista-ol--cuadro__vineta.bg-color-secundario
            span 2
          | Integración con motores de renderización de “vistas” para generar respuestas mediante la introducción de datos en plantillas.
        li 
          .lista-ol--cuadro__vineta.bg-color-secundario
            span 3
          | Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
        li 
          .lista-ol--cuadro__vineta.bg-color-secundario
            span 4
          | Añadir el procesamiento de peticiones “middleware” adicional en cualquier punto dentro de la tubería de manejo de la petición (#[strong Mozilla, 2021])
    p.mt-5 El segundo módulo para instalar es nodemon, que es una utilidad que monitorea los cambios en el código fuente que se está desarrollando y de manera automática reinicia el servidor. Es una herramienta muy útil para el desarrollo de aplicaciones en Node.js (#[strong Gómez, 2017]).
    p.mt-3 A continuación, se muestra la línea de comando que se debe ejecutar desde la terminal del Visual Studio Code.
    .h4.mt-5 Figura 4
    .row.mt-4
      .col-10.offset-1.borde-izq-amarillo
        p.mx-3.mb-0 Comando para la instalación de Express y nodemon
    .row.mt-4
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-1-10.png" alt="Texto que describa la imagen")
        figcaption.mt-3 Nota. SENA (2021).  
    p.mt-5 Hasta esta parte se ha abordado la instalación y configuración del espacio de trabajo para iniciar con el desarrollo de la API. No obstante, es necesario revisar las buenas prácticas de codificación para que el desarrollo no solo sea prolijo en su estructura, sino que también siga estándares de codificación, permitiendo que el código tenga un alto desempeño.



</template>

<script>
export default {
  name: 'Tema1',
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
