<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Sistemas operativos móviles
    figure.mt-4 
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    p.mt-5 Para la instalación lo primero que debemos tener en cuenta son los requisitos mínimos que debe tener el equipo. Para un mejor rendimiento, y que el emulador funcione correctamente, se necesita un buen equipo de trabajo que cuente con las siguientes propiedades recomendadas para cada sistema operativo..
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 12
        p Requerimientos de sistema para instalación de Android Studio
    table.mt-4.text-center.no-border
      thead
        
      tbody
        tr
          td.p-5.bg-primario.rounded-izq-top
            figure
              img(src="@/assets/template/tema-4-2.png", alt="Texto que describa la imagen").w-50.margin-0-auto
          td.bg-aguamarina
            figure
              img(src="@/assets/template/tema-4-3.png", alt="Texto que describa la imagen").w-50.margin-0-auto
          td.bg-azul-claro.rounded-der-top
            figure
              img(src="@/assets/template/tema-4-4.png", alt="Texto que describa la imagen").w-50.margin-0-auto
        tr
          td.bg-primario.rounded-izq-bot
            p 64-bit Microsoft® Windows® 8/10
            p 8 GB RAM or more
            p 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
            p 1280 x 800 minimum screen resolution
          td.bg-aguamarina
            p MacOS® 10.14 (Mojave) or higher
            p 8 GB RAM or more
            p 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
            p 1280 x 800 minimum screen resolution
          td.bg-azul-claro.rounded-der-bot
            p Any 64-bit Linux distribution that supports Gnome, KDE, or Unity DE; GNU C Library (glibc) 2.31 or later.
            p 8 GB RAM or more
            p 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
            p 1280 x 800 minimum screen resolution
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.mt-5.bg-acento-botones-op50
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-5.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p Además de estos requerimientos del sistema, para una instalación exitosa y un funcionamiento correcto del software se debe tener en cuenta otros elementos. Dependiendo del sistema operativo se utilice, ya sea Ubuntu, Linux, Windows 10 o Mac OS, se necesita seguir unas instrucciones específicas para cada uno de ellos, podrás encontrar información al respecto en el siguiente enlace.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5.bg-azul-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-4-6.svg").w-75.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Instalación
                  p.text-small.p-0 La instalación de Android en este componente se realizará para Windows, para más información de cómo instalar en Mac, Linux, o Chrome sigue el enlace
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.text-small Enlace web
                    i.fas.fa-link
    p.mt-5 Después de verificar los requisitos del sistema se deben seguir los siguientes pasos para la instalación:
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta.primario
                    span 1
                  .h4.m-0 Descargar e instalar Android Studio
                    p.m-0 Ingresa a la página oficial Android developers y selecciona la opción Android Studio o sigue el siguiente enlace:
                a.anexo.mb-lg-0(href="https://developer.android.com/studio?hl=es-419" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[strong Enlace web.] https://developer.android.com/studio?hl=es-419
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 13
        p Descarga de Android Studio
        figure.mt-4
          img(src="@/assets/template/tema-4-7.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta.primario
                    span 2
                  .h4.m-0 La página detecta el sistema operativo y descarga el instalador correspondiente
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 14
        p Términos y condiciones de la instalación
        figure.mt-4
          img(src="@/assets/template/tema-4-8.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li 
                  .lista-ol--cuadro__vineta.primario
                    span 3
                  .h4.m-0 Seleccionar la opción de “He leído y acepto los términos…”  y clic en descargar Android Studio.
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 4
                  .h4.m-0 Para instalar la aplicación descarga y ejecuta el instalador al iniciar seguir el asistente de instalación.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 15
        p Asistente de Instalación Android Studio
        figure.mt-4
          img(src="@/assets/template/tema-4-9.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 5
                  .h4.m-0 En este paso muestra la ruta donde quedará instalado Android Studio clic en Next.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 16
        p Asistente Instalación Selección componentes
        figure.mt-4
          img(src="@/assets/template/tema-4-10.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 6
                  .h4.m-0 En este paso del asistente se deben seleccionar los componentes a instalar. Dejar marcados, en este caso dos: el propio IDE Android Studio y un Virtual Device.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 17
        p Asistente de Instalación
        figure.mt-4
          img(src="@/assets/template/tema-4-11.png", alt="Texto que describa la imagen")
    p.mt-5 Para el resto de pasos de este asistente inicial, se deben aceptar sin modificar ninguna opción por defecto, hasta llegar al último paso donde se selecciona la opción «Start Android Studio» y pulsar el botón «Finish» de forma que se iniciará automáticamente la aplicación.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 18
        p Asistente de Instalación Iniciar Android Studio
        figure.mt-4
          img(src="@/assets/template/tema-4-12.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 19
        p Asistente de Instalación Importar
        figure.mt-4
          img(src="@/assets/template/tema-4-13.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 7
                  .h4.m-0 Seleccionar: no importar configuraciones
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 20
        p Asistente de Instalación Wizard Android Studio
        figure.mt-4
          img(src="@/assets/template/tema-4-14.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 8
                  .h4.m-0 Clic en «Next»
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 21
        p Selección tipo configuración
        figure.mt-4
          img(src="@/assets/template/tema-4-15.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 9
                  .h4.m-0 Para el tipo de configuración marcar la opción &#60;&#60;Custom&#62;&#62; (Personalizado) y clic en Next
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 22
        p Selección tema visual
        figure.mt-4
          img(src="@/assets/template/tema-4-16.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 10
                  .h4.m-0 Seleccionar el tema visual del gusto, para este ejemplo se selecciona Darcula (Oscuro)
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 23
        p Configuración de componentes
        figure.mt-4
          img(src="@/assets/template/tema-4-17.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 11
                  .h4.m-0 En la siguiente pantalla del asistente marcar los componentes adicionales a instalar. En el campo «Android SDK Location» se indica la ruta donde se desea instalar el SDK de Android
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 24
        p Configuración del Emulador
        figure.mt-4
          img(src="@/assets/template/tema-4-18.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 12
                  .h4.m-0 Indicar la cantidad de memoria que se utilizará para el emulador y clic en Next 
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 25
        p Bienvenida Android Studio 
        figure.mt-4
          img(src="@/assets/template/tema-4-19.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.mb-0
                li.mb-0 
                  .lista-ol--cuadro__vineta.acento-botones
                    span 13
                  .h4.m-0 Tras finalizar el asistente de inicio aparecerá la pantalla de bienvenida de Android Studio para este ejemplo en su versión 4.2.1
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row 
            .h4 SDK Manager
            p El SDK Manager permite gestionar las versiones de Android que se encuentran instaladas, así como otras herramientas que se necesitan para el desarrollo de las aplicaciones móviles.
            p El siguiente paso será revisar los componentes que se han instalado del SDK de Android Studio e instalar/actualizar componentes adicionales si fuera necesario para el desarrollo de las aplicaciones.
            p En la pantalla de inicio de Android Studio seleccione la opción Configure y haga clic en SDK Manager.
    .row.mt-5
      .col-6.offset-1
        .h4 Figura 26
        p SDK Manager 
        figure.mt-4
          img(src="@/assets/template/tema-4-20.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-6.offset-1
        .h4 Figura 27
        p SDK Platforms 
        figure.mt-4
          img(src="@/assets/template/tema-4-21.png", alt="Texto que describa la imagen")
    p.mt-5 En el Manager se encuentran componentes disponibles agrupados en dos pestañas principales: SDK Platforms y SDK Tools.
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row 
            .h4 SDK Platforms
            p Permite seleccionar los componentes y librerías necesarias para desarrollar sobre cada una de las versiones de Android, por ejemplo, si se quiere probar la aplicación en un dispositivo con Android 8 y Android 10 se tiene que descargar las plataformas que en este caso corresponden a la 26 y 29. 
            p.mt-3 Para ver los subcomponentes de cada plataforma seleccionar la opción «Show Package Details» situada en la parte inferior de la ventana. 
            p Para cada versión de Android que se tenga instalada se debe tener al menos los dos elementos siguientes:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right.primario
                | Android SDK Platform
              li.mt-2
                i.fas.fa-angle-right.primario
                | Google APIs Intel x86 Atom System Image  
    .row.mt-5
      .col-6.offset-1
        .h4 Figura 28
        p SDK Tools 
        figure.mt-4
          img(src="@/assets/template/tema-4-22.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1  
        .cajon.color-acento-botones.p-4.bg-acento-botones-op50
          .row 
            .h4 SDK Tools
            p Son componentes para el SDK que incluyen herramientas para desarrollo y depuración     Los indispensables por el momento (que ya deberían aparecer instalados por defecto) serán los siguientes:
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right.primario
                | Android SDK Build-Tools
              li.mt-2
                i.fas.fa-angle-right.primario
                | Android SDK Platform-Tools
              li.mt-2
                i.fas.fa-angle-right.primario
                | Android Emulator
            p.mt-3 Con estos pasos ya se tendría configurado el Android Studio para dar inicio al desarrollo de las aplicaciones.



</template>

<script>
export default {
  name: 'Tema4',
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
