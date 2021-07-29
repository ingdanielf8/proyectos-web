<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Sistemas operativos móviles
    figure.mt-5
      img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mt-5 Un entorno de desarrollo es un software que facilita un conjunto de herramientas que permiten crear una aplicación, estos entornos contienen soporte para uno o varios lenguajes de programación y son los encargados de depurar, compilar, realizar pruebas y convertir nuestro código en una aplicación ejecutable. Los entornos más utilizados para el desarrollo de aplicaciones nativas son: Xcode para la plataforma IOS y Android Studio para la plataforma Android.
    .row.mt-5 
      .col-8.offset-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .h4.mb-0 Xcode
            p.mb-0.mt-2.text-small Es un entorno de desarrollo integrado (IDE) creado por Apple para desarrollar aplicaciones (iOS, macOS, watchOS y tvOS) Proporciona un conjunto de herramientas para construir y probar aplicaciones. Una vez que se ha completado el desarrollo, Xcode permite empaquetar la aplicación y enviarla al App Store. Su editor de código permite diferentes lenguajes de programación como: C, 
            p.mb-0.mt-2.text-small C ++, Objective-C, Objective-C ++, Java, AppleScript, Python, Ruby, ResEdit y Swift
    p.mt-4 Xcode solo se ejecuta en plataformas macOS.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 6
        p Entorno de desarrollo Xcode par iOS
        figure.mt-4
          img(src="@/assets/template/tema-3-2.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota. https://bit.ly/3hsZWXg
    .row.mt-5 
      .col-8.offset-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .h4.mb-0 Android Studio
            p.mb-0.mt-2.text-small Corresponde al IDE oficial para el desarrollo de aplicaciones Android, Incorpora herramientas que ofrecen distintas funciones como: compilación flexible, entorno unificado para todos los dispositivos Android, integración con GitHub, identificador de problemas (rendimiento, usabilidad y compatibilidad) entre otras.  
            p.mb-0.mt-2.text-small Admite lenguajes de programación como Java y Kotlin.
    p.mt-4 Android Studio está disponible para plataformas de escritorio como Mac, Windows y Linux. 
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 7
        p Entorno de Desarrollo Android Studio para Android
        figure.mt-4
          img(src="@/assets/template/tema-3-3.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-8.offset-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .h4.mb-0 Visual Studio
            p.mb-0.mt-2.text-small Microsoft Visual Studio es un entorno de desarrollo integrado, creado por la compañía Microsoft y disponible para sistemas operativos Windows, Linux y macOS, y a la vez es compatible con múltiples lenguajes de programación, tales como   
            p.mb-0.mt-2.text-small C++, C#, Visual Basic .NET, F#, Java, Python, Ruby y PHP, al igual que entornos de desarrollo web, como ASP.NET, fue lanzado en 1997, cuenta con versiones gratis y de venta.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 8
        p Entorno de Desarrollo Visual Studio para Windows Phone
        figure.mt-4
          img(src="@/assets/template/tema-3-4.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota. https://bit.ly/2Trz81F
      .col-10.offset-1.mt-5
        .tarjeta.color-acento-botones.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-3-18.svg").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Visual Studio
                  p.text-small.p-0.m-0 A continuación, puede ampliar información sobre la metodología ágil XP. Video sobre ciclo de vida XP, prácticas básicas de XP:
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.text-small Enlace web
                    i.fas.fa-link
    p.mt-2 El desarrollo de aplicaciones para móviles se ha convertido en una necesidad debido a la gran utilización y evolución de estas plataformas. Por esta razón es importante definir cuáles serán las tecnologías más adecuadas para la programación de móviles. Una de las arquitecturas más implantadas es la proporcionada por el sistema Android.
    .h4.mt-5 Plataforma Android
    figure.mt-5 
      img(src="@/assets/template/tema-3-5.png", alt="Texto que describa la imagen")
    p.mt-4 Es un sistema operativo móvil desarrollado por Google, Open Source basado en Linux, ofrece una optimización de la máquina virtual denominada Dalvik VM, soporta la mayoría de API de Java SE para el desarrollo de aplicaciones está enfocado en ser utilizado en dispositivos móviles como teléfonos inteligentes, tabletas, Google, T.V., y otros dispositivos.
    .h4.mt-5 Características:
    ul.lista-ul.mt-4
      li 
        i.fas.fa-angle-right.primario
        | Contiene un Framework de aplicaciones para la reutilización de componentes.
      li.mt-2
        i.fas.fa-angle-right.primario
        | Navegador integrado.
      li 
        i.fas.fa-angle-right.primario
        | Cuenta con una base de datos que se integra directamente en las aplicaciones SQLite.4
      li 
        i.fas.fa-angle-right.primario
        | Ofrece diferentes formas de mensajería.
      li 
        i.fas.fa-angle-right.primario
        | Adaptable a muchas pantallas y resoluciones.
    .row.mt-5
      .col-8.offset-2
        .bloque-texto-a.color-acento-botones.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen")            
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4 Versiones 
                p.text-small Android maneja muchas versiones desde su lanzamiento y se encuentran numerosas actualizaciones. Cada que sale una nueva versión se arreglan fallos detectados en la anteriores incluyendo también nuevas funcionalidades con soportes para las nuevas tecnologías.
    p.mt-5 Curiosamente las versiones de Android reciben el nombre de postres o dulces cuyo nombre va en orden alfabético que se mantuvo hasta la versión 9, como se ve a continuación:
    .titulo-sexto.color-acento-botones
      h5 Tabla 2
    p.mt-3 Nombres versiones y lanzamiento de sistema operativo Android 
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead
              tr
                th.py-3 Nombre
                th Versión
                th Lanzamiento
            tbody
              tr
                td.py-3 #[strong Android] #[strong.color-red A]pple Pie
                td Versión 1.0
                td 23 de septiembre de 2008
              tr
                td.py-3 #[strong Android] #[strong.color-red B]anana Bread
                td Versión 1.1
                td 9 de febrero de 2009
              tr
                td.py-3 #[strong Android] #[strong.color-red C]upcake
                td Versión 1.5
                td 25 de abril de 2009
              tr
                td.py-3 #[strong Android] #[strong.color-red D]onut
                td Versión 1.6
                td 15 de septiembre de 2009
              tr
                td.py-3 #[strong Android] #[strong.color-red E]clair
                td Versión 2.0
                td 26 de octubre de 2009
              tr
                td.py-3 #[strong Android] #[strong.color-red F]royo
                td Versión 2.2
                td 20 de mayo de 2010
              tr
                td.py-3 #[strong Android] #[strong.color-red G]ingerbread
                td Versión 2.3
                td 6 de diciembre de 2010
              tr
                td.py-3 #[strong Android] #[strong.color-red H]oneycomb
                td Versión 3.0
                td 22 de febrero de 2011
              tr
                td.py-3 #[strong Android] #[strong.color-red I]ce Cream Sandwish
                td Versión 4.0
                td 18 de octubre de 2011
              tr
                td.py-3 #[strong Android] #[strong.color-red J]elly Bean
                td Versión 4.1
                td 9 de julio de 2012
              tr
                td.py-3 #[strong Android] #[strong.color-red K]itkat
                td Versión 4.4
                td 31 de octubre de 2012
              tr
                td.py-3 #[strong Android] #[strong.color-red L]ollipop
                td Versión 5.0
                td 12 de noviembre de 2014
              tr
                td.py-3 #[strong Android] #[strong.color-red M]arshmallow
                td Versión 6.0
                td 5 de octubre de 2015
              tr
                td.py-3 #[strong Android] #[strong.color-red N]ougat
                td Versión 7.0
                td 15 de junio de 2016
              tr
                td.py-3 #[strong Android] #[strong.color-red O]reo
                td Versión 8.0
                td 21 de agosto de 2017
              tr
                td.py-3 #[strong Android] #[strong.color-red P]ie
                td Versión 9.0
                td 6 de agosto de 2018
              tr
                td.py-3 #[strong Android 10] 
                td Versión 10
                td 3 de septiembre de 2019
              tr
                td.py-3 #[strong Android 11] 
                td Versión 11
                td 8 de septiembre de 2020
              tr
                td.py-3 #[strong Android 12 Beta 2] 
                td Versión 12
                td 9 de junio de 2021
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 9
        p.mt-2 Versiones de Android
        figure.mt-4
          img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota. https://bit.ly/3AgBFMK
    .row.mt-5
      .col-3.d-none.d-lg-block.offset-1
        figure
          img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen")
      .col-10.col-lg-7.align-self-center
        .h4 Arquitectura
        p Los componentes principales de la plataforma de Android están creados para una variedad de dispositivos, Android es de código abierto y está basado en Linux.
      .col-10.offset-1 
        .h4.mt-5 Figura 10
        p.mt-2 Componentes principales de la plataforma Android
        figure.mt-5.px-5
          img(src="@/assets/template/tema-3-9.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota: https://bit.ly/3qDrP3c
      .col-10.offset-1.mt-5
        LineaTiempoD.color-primario
          p.text-small(numero="1" titulo="System Apps") Apss del sistema) las apps del sistema permiten a los desarrolladores acceder desde sus propias apps con solo invocarlas sin necesidad de compilar las funcionalidades de las aplicaciones.
          
          p.text-small(numero="2" titulo="Java Api Framework ") (Marco de trabajo de la API de Java) Las API que permiten la disponibilidad a las funciones del sistema operativo de Android están escritas en el lenguaje Java, estas API son la base que se requieren para crear apps de Android haciendo más sencilla la reutilización de componentes del sistema y servicios como: Sistemas de vista (compilar IU) administrador de recursos (acceso a Strings, gráficos. etc.) administrador de notificaciones (alertas personalizadas) administrador de actividad (ciclo de vida) proveedores de contenido (acceso de otras apps).

          p.text-small(numero="3" titulo="Nativa C/C + + Libraries ") (Bibliotecas nativas) son librerías que se basan en código nativo.

          p.text-small(numero="4" titulo="Hardware Abstraction Layer HAL ") (Capa de abstracción de hardware HAL) ofrecen interfaces que muestran las capacidades del hardware del dispositivo, la HAL consiste en un conjunto de módulos de bibliotecas los cuales implementan una interfaz para cada tipo específico de hardware, como por ejemplo cuando se realiza un llamado a la cámara del dispositivo el sistema carga la biblioteca para este componente de hardware.

          p.text-small(numero="5" titulo="Linux Kernel ") (Kernel de Linux) Es la base de la plataforma, es necesaria para las funcionalidades subyacentes como la administración de memoria de bajo nivel y la generación de subprocesos.
    p.mt-5 A continuación, se hace una descripción completa del IDE Android Studio que como se mencionó anteriormente es el entorno oficial para el desarrollo de aplicaciones móviles nativas en Android.
    .titulo-segundo.mt-5
      #t_3_1.h4 3.1  Android Studio
    .row.mt-4
      .col-12.col-lg-7
        p Android Studio está basado en IntelliJ IDEA de la compañía JetBrains,  que proporciona varias mejoras con respecto al plugin ADT (Android Developer Tools) para Eclipse. Android Studio utiliza una licencia de software libre Apache 2.0, está programado en Java y es multiplataforma.
        p.mt-3 Fue presentado por Google el 16 de mayo del 2013 en el congreso de desarrolladores Google I/O, con el objetivo de crear un entorno dedicado en exclusiva a la programación de aplicaciones para dispositivos Android, proporcionando a Google un mayor control sobre el proceso de producción. Actualmente es el IDE recomendado por Google.
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-3-10.png" , alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_3_2.h4 3.2  Características
    ul.lista-ul.mt-4
      li 
        i.fas.fa-angle-right.primario
        | Realiza renderizados de layouts en tiempo real, ejecutando las compilaciones de forma rápida.
      li.mt-2
        i.fas.fa-angle-right.primario
        | Permite ejecutar la aplicación en tiempo real en el dispositivo móvil.
      li.mt-2
        i.fas.fa-angle-right.primario
        | Incluye un potente emulador.
      li.mt-2
        i.fas.fa-angle-right.primario
        | Permite simular diferentes dispositivos y tabletas.
      li.mt-2
        i.fas.fa-angle-right.primario
        | Trabaja con un editor de elementos gráficos para la creación de la interfaz sin necesidad de código, solo arrastrando y soltando.
    p.mt-5 La realización de aplicaciones en Android Studio se enfoca en 4 fases de desarrollo:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Fase 1. Configuración de entorno")
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-10.col-lg-10
              p.text-small Es esta fase se realiza la instalación, configuración del entorno de desarrollo, la conexión de dispositivos y creación de emuladores virtuales.
          .row(numero="2" titulo="Fase 2. Configuración del Proyecto y Desarrollo")
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-3-12.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-10.col-lg-10
              p.text-small Es esta fase se configuran los módulos necesarios que contengan recursos de la aplicación y los archivos de código fuente.
          .row(numero="3" titulo="Fase 3. Pruebas, depuración y Construcción de la aplicación ")
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-3-13.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-10.col-lg-10
              p.text-small Es esta fase se crea el ejecutable o apk el cual se puede ejecutar e instalar en el emulador o dispositivo con Android.
          .row(numero="4" titulo="Fase 4. Publicación de la aplicación")
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-3-14.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-10.col-lg-10
              p.text-small en esta fase se realiza la solicitud en la tienda PlayStore para la libre distribución de la aplicación para los usuarios, se creará una versión que los usuarios podrán descargar e instalar en los dispositivos Android.
          //- .row(numero="5" titulo="Inicialización")
          //-   .col-2.col-lg-1
          //-     figure
          //-       img(src="@/assets/template/tema-3-15.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          //-   .col-10.col-lg-10
          //-     p.text-small 
    .titulo-segundo.mt-5
      #t_3_3.h4 3.3  Arquitectura de una aplicación en Android
    .row.mt-4
      .col-12.col-lg-8
        p Cada componente solo depende del componente que está un nivel más abajo. Por ejemplo, las actividades y los fragmentos sólo dependen de un modelo de vista. El repositorio es la única clase que depende de otras clases. En este ejemplo, el repositorio depende de un modelo de datos persistente y de una fuente de datos de backend remota.
        p.mt-3 Este diseño crea una experiencia del usuario consistente y agradable. Independientemente de que el usuario vuelva a la app varios minutos después de cerrarla por última vez o varios días más tarde, verá al instante la información del usuario de que la app persiste a nivel local. Si estos datos están inactivos, el módulo de repositorio comienza a actualizar los datos en segundo plano.
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-3-15.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 11
        p Arquitectura de una aplicación en Android
        figure.mt-4
          img(src="@/assets/template/tema-3-16.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_3_4.h4 3.4  Versiones
    p.mt-5 Así como el sistema operativo Android tiene una gran variedad de actualizaciones el ritmo de actualizaciones de Android Studio es bastante alto.
    p.mt-4 A continuación, se listan las últimas versiones desde la más actual hasta la más antigua.
    .titulo-sexto.color-acento-botones
      h5 Tabla 3
      p.mt-3 Nombres versiones y lanzamiento de sistema operativo Android
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-botones.mb-5 
          table.text-center
            thead
              tr
                th.py-3(colspan="2") Versiones Android Studio
            tbody
              tr
                td.py-3 Android Studio Bumblebee (2021.1.1) Canary
                td 27 de junio de 2021
              tr
                td.py-3 Android Studio Arctic Fox (2020.3.1) Beta 3
                td 27 de mayo de 2021
              tr
                td.py-3 Android Studio 4.2.1
                td 13 de mayo de 2021
              tr
                td.py-3 Android Studio 4.2.0
                td 4 de mayo de 2021
              tr
                td.py-3 Android Studio 4.1.3
                td 18 de marzo de 2021
              tr
                td.py-3 Android Studio 4.1
                td 12 de octubre de 2020
              tr
                td.py-3 Android Studio 4.0
                td 28 de mayo de 2020
              tr
                td.py-3 Android Studio 3.6.3
                td 17 de abril de 2020
              tr
                td.py-3 Android Studio 3.0
                td 25 de octubre de 2017
              tr
                td.py-3 Android Studio 2.3.2
                td 11 de mayo de 2017
    .row.mt-5 
      .col-10.offset-1.mt-5
        .tarjeta.color-acento-botones.p-3.mb-5.bg-amarillo-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-3-17.svg").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Android Studio
                  p.text-small.p-0.m-0 A continuación, puede ampliar información sobre Android Studio, para esto le invitamos a visitar la página:
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span.text-small Enlace web
                    i.fas.fa-link
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
