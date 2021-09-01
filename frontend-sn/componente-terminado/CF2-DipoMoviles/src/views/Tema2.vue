<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Diseño gráfico: Herramientas de prototipado
    figure
      img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-10.offset-1
        .bloque-texto-a.color-acento-botones.p-4.p-md-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-2.svg", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Un diseñador front-end necesita contar con recursos imprescindibles para realizar su trabajo, ya que el primer paso, generalmente es realizar una propuesta de interfaz gráfica o prototipo de interfaz de usuario (UI) para que el cliente pueda imaginar cómo se verá el sistema terminado. Actualmente no es suficiente diseñar la versión para la computadora de escritorio o el prototipo para el móvil. Ahora es necesario diseñar tres versiones distintas, escritorio, tablet y móvil, para que se pueda notar que el producto digital conserve o prescinda de ciertas propiedades visuales según el dispositivo en el que funciona. En orden a esta necesidad se presentan algunas herramientas que se pueden emplear para tal fin.
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1  Adobe XD
    .row.mt-5 
      .col-12.col-lg-7
        p Adobe XD es la primera herramienta creada por la compañía Adobe, que fue específicamente diseñada para prototipar la experiencia de usuario (UX) e interface de usuario (UI). Esta herramienta ha sido el resultado de la empresa Adobe al trabajar con diseñadores de UX usan sus herramientas de diseño gráfico como Ilustrador, Photoshop y otros, de tal manera en un solo producto agrupa características que tiene como objetivo hacer que los diseñadores de interfaces sean más productivos.
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
    figure.mt-5
      img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen")
    p.mt-5 Adobe XD es la primera herramienta creada por la compañía Adobe, que fue específicamente diseñada para prototipar la experiencia de usuario (UX) e interface de usuario (UI). Esta herramienta ha sido el resultado de la empresa Adobe al trabajar con diseñadores de UX usan sus herramientas de diseño gráfico como Ilustrador, Photoshop y otros, de tal manera en un solo producto agrupa características que tiene como objetivo hacer que los diseñadores de interfaces sean más productivos.
    .row.mt-5
      .col-10.offset-1
        SlyderC(:datos="datosSlyder")
        a.anexo.mb-4.mb-lg-0(href="https://creativecloud.adobe.com/apps/download/xd" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web] https://creativecloud.adobe.com/apps/download/xd
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2  Balsamiq
    .row.mt-5
      .col-12.col-lg-7
        p Balsamiq es una herramienta para realizar rápidamente wireframing pensado en ayudar a trabajar más rápido y más inteligentemente. Reproduce la experiencia de dibujar en una pizarra, pero a través del computador. Con se puede hacer maquetas rápidamente.  
        p.mt-3 Instructivo de descarga aplicativo Balsamiq
        p.mt-3 Cree se cuenta en poniendo su correo electrónico y : 
        a.anexo.mb-4.mb-lg-0(href="https://balsamiq.cloud/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web] https://balsamiq.cloud/ 
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-18.png", alt="Texto que describa la imagen")
    .h4.mt-5 Instructivo de descarga aplicativo Balsamiq
    TabsA.color-primario.mt-4
      .tarjeta.p-4(titulo="Proceso de Registro, ver figura 2")
        figure
          img(src="@/assets/template/tema-2-19.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Proceso de registro, balsamiq.cloud (2021). 
          .row.bg-gris.mx-0.p-3
            .h4.mb-0 Figura 2
            p Proceso de registro
      .tarjeta.p-4(titulo="Creación espacio de trabajo, ver figura 3")
        figure
          img(src="@/assets/template/tema-2-20.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Espacio de trabajo, balsamiq.cloud (2021).
          .row.bg-gris.mx-0.p-3
            .h4.mb-0 Figura 3
            p Espacio de trabajo
      .tarjeta.p-4(titulo="Creación del primer proyecto, ver figura 4")
        figure
          img(src="@/assets/template/tema-2-21.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Espacio de trabajo, balsamiq.cloud (2021).
          .row.bg-gris.mx-0.p-3
            .h4.mb-0 Figura 4
            p Panel de creación de proyecto en Balsamiq Cloud 
      .tarjeta.p-4(titulo="Creación de la estructura de las vistas, ver figura 5")
        figure
          img(src="@/assets/template/tema-2-22.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Espacio de trabajo, balsamiq.cloud (2021).
          .row.bg-gris.mx-0.p-3
            .h4.mb-0 Figura 5
            p Vistas para móviles
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3  Canva
    figure.mt-5
      img(src="@/assets/template/tema-2-23.png", alt="Texto que describa la imagen")     
    p.mt-5 Canva es un software y sitio web de herramientas de diseño gráfico simplificado, fundado en 2012. Utiliza un formato de arrastrar y soltar y proporciona acceso a más de 60 millones de fotografías y 5 millones de vectores, gráficos y fuentes.
    p.mt-4 Para usar este servicio se debe registrar en el portal 
    .row.mt-5
      .col-8.col-lg-5
        a.anexo.mb-4.mb-lg-0(href="https://www.canva.com/es_us/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web] https://www.canva.com/es_us/
    p.mt-5 y una vez iniciada la sesión, el botón crear diseño se puede empezar crear una presentación para dispositivos móviles, ver figura 6.
    .row.mt-5
      .col-10.offset-1
        .h4.mb-0 Figura 6
        p Crear presentación móvil CANVA
        figure.mt-4
          img(src="@/assets/template/tema-2-24.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Crear presentación móvil CANVA, Canva (2021).
    p.mt-5 Canva permite al igual que Adobe XD diseñar interdices para dispositivos móviles, y también de una forma muy similar, ver figura 7. Propone iniciar el diseño con plantillas prediseñadas lo que puede representar una facilidad para empezar un proyecto.
    .row.mt-5
      .col-10.offset-1
        .h4.mb-0 Figura 7
        p Uso de plantilla
        figure.mt-4
          img(src="@/assets/template/tema-2-25.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Uso de plantilla, Canva (2021).
    p.mt-5 Finalmente, esta no son las únicas herramientas existentes en el mercado, existen muchas otras y se han presentado las antes vistas en función de su popularidad, aceptación en el mercado, y amplia documentación y video tutoriales en las redes.
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4  Conceptos de Material Design
    .row.mt-5
      .col-12.col-lg-7
        p Material Design es un estilo de diseño creado por Google. Fue anunciado el 25 de junio del 2014 en la conferencia Google I/O. Se ha implementado en el sistema operativo para móviles Android desde la versión Lollipop y también en otros servicios gratuitos de Google como Docs, Calendar, Drive, etc. (¿Qué es el Material Design? ,2021)
        p.mt-3 Google ha dispuesto al público una guía sobre el Material Design para que los diseñadores se animen a implementarlo en aplicaciones móviles y sitios web disponible en:
        .row.mt-4
          .col-10
            a.anexo.mb-4.mb-lg-0(href="https://material.io/design" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace web] https://material.io/design
        p.mt-4 Los de objetivos de esta propuesta son:
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Emplear un lenguaje visual combinando lo principios de un buen diseño y las opciones que disponibles en las nuevas tecnologías.
          li 
            i.fas.fa-angle-right
            | Ser un sistema que posibilite una experiencia uniforme en diferentes plataformas y dispositivos (como pantallas táctiles, control de voz, etc).
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-26.png", alt="Texto que describa la imagen")
    TabsB.color-acento-botones.mt-5
      .py-4.py-md-5(titulo="a. Lo material como una metáfora" :icono="require('@/assets/template/tema-2-31.svg')")
        .row
          .col-12.col-lg-9
            .h4 a) Lo material como una metáfora
            p.mt-3 Como lo material está unido a la realidad fusionándose con el espacio, tiempo y el movimiento, está ligado a la realidad táctil, es por esto que se puede integrar con la tecnología haciendo uso de la creatividad e imaginación.
            p.mt-3 Los bordes y superficies de las cosas materiales entregan pistas visuales basadas en la realidad. El uso de atributos familiares al mundo real ayuda al usuario a entender las posibilidades de lo que se puede hacer con cada elemento presente en la interfaz. Para lograr esto se debe presentar los principios superficie, luz y movimiento, ver figura 8, como elementos principales para transmitir cómo los objetos existen y están dispuestos a interactúan uno con el otro o con el usuario.
          .col-4.col-lg-3.offset-4.offset-lg-0
            .h4.mb-0 Figura 8
            p Uso de plantilla
            figure
              img(src="@/assets/template/tema-2-27.png", alt="Texto que describa la imagen")
              figcaption.mt-3 Referencia  Nota. Materiales, SENA (2021).
      .py-4.py-md-5(titulo="b) Llamativo e intencional" :icono="require('@/assets/template/tema-2-32.svg')")
        .row
          .h4 b) Llamativo e intencional
          p.mt-3 Todos los elementos visuales son diseñados por los conceptos de la teoría del diseño como el uso del color, los espacios en blanco, sobras, el sistema de tabla de datos, etc. Todos estos elementos ayudan a determinar la jerarquía y lectura visual, ver figura 9.
          .h4.mb-0 Figura 9
            p Uso de plantilla
          figure
            img(src="@/assets/template/tema-2-28.png", alt="Texto que describa la imagen")
            figcaption.mt-3 Referencia  Nota. Diseño de componentes, Efecto Ripple de Material Design [HTML+CSS+JS] (2015)
          p.mt-5 El sistema de color de Material Design ayuda a aplicar color a las interfaces de usuario de una manera simplificada. En este sistema, el diseñador define un color como primario y otro como secundario para representar el tema de su marca. Las variaciones de oscuras y claras para cada color se aplican a la interfaz de usuario de diferentes maneras de manera prestablecida, ver figura 10.
          .h4.mb-0 Figura 10
            p Manejo de colores
          figure
            img(src="@/assets/template/tema-2-29.png", alt="Texto que describa la imagen")
            figcaption.mt-3 Referencia  Nota. Manejo de colores, Material Design (2021). 
      .py-4.py-md-5(titulo="c) El movimiento otorga significado" :icono="require('@/assets/template/tema-2-32.svg')")
        .row
          .h4 c) El movimiento otorga significado
          .col-12.col-lg-9
            p En una aplicación web o móvil una animación tiende a captar la atención de los usuarios, sin embargo, es deseable que estas animaciones no interrumpan la experiencia de usuario. De esta forma es deseable que exista relación entre las animaciones y la propia esencia del sitio web o aplicación, por ejemplo, el efecto de presionar el botón la experiencia real de desplazar un elemento.
            p.mt-3 Para Google, el movimiento enfatiza el papel del usuario como el actor principal de la interacción con la máquina y el que dirige los movimientos en dicha interacción. Las acciones del usuario tienen el poder de cambiar el diseño o disposición de los elementos. Es así como los elementos de la interfaz son presentados al usuario sin interferir con la experiencia de usuario, incluso cuando dichos elementos se transforman y reorganizan.
          .col-4.col-lg-3.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-2-30.svg", alt="Texto que describa la imagen")







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Instalación',
        texto:
          'Para realizar al instalación de adobe XD debe emplear el siguiente enlace  (Versión de prueba)',
        imagen: require('@/assets/template/tema-2-5.png'),
      },
      {
        titulo: 'INSTALACIÓN ADOBE DX',
        texto:
          'En seguida le pedirá su cuenta de Google para poder realizar la instalación con su cuenta de usuario. Una vez realizado este proceso se le activar el botón iniciar instalación.',
        imagen: require('@/assets/template/tema-2-6.png'),
      },
      {
        titulo: 'Iniciar proceso de instalación Adobe DX',
        texto:
          'Posteriormente podrá contestar una encuesta con el fin de determinar por el sistema su perfil de usuario de la aplicación.',
        imagen: require('@/assets/template/tema-2-7.png'),
      },
      {
        titulo: 'Encuesta de instalación',
        texto: '',
        imagen: require('@/assets/template/tema-2-8.png'),
      },
      {
        titulo: 'INSTALACIÓN ADOBE DX',
        texto: '',
        imagen: require('@/assets/template/tema-2-9.png'),
      },
      {
        titulo: 'SELECCIONAR prototipo',
        texto: '',
        imagen: require('@/assets/template/tema-2-10.png'),
      },
      {
        titulo: 'CAMBIAR nombre área de trabajo',
        texto:
          'En seguida le pedirá su cuenta de Google para poder realizar la instalación con su cuenta de usuario. Una vez realizado este proceso se le activar el botón iniciar instalación.',
        imagen: require('@/assets/template/tema-2-11.png'),
      },
      {
        titulo: 'CREAR fondo del sistema',
        texto: '',
        imagen: require('@/assets/template/tema-2-12.png'),
      },
      {
        titulo: 'CONFIGURAR encabezado',
        texto: '',
        imagen: require('@/assets/template/tema-2-13.png'),
      },
      {
        titulo: 'AGREGAR rectángulo (área de contenido)',
        texto: '',
        imagen: require('@/assets/template/tema-2-14.png'),
      },
      {
        titulo: 'CONFIGURAR fondo de área de contenido',
        texto: '',
        imagen: require('@/assets/template/tema-2-15.png'),
      },
      {
        titulo: 'AGREGAR texto e imagen al contenido',
        texto: '',
        imagen: require('@/assets/template/tema-2-16.png'),
      },
      {
        titulo: 'VISTA de prototipo',
        texto: '',
        imagen: require('@/assets/template/tema-2-17.png'),
      },
    ],
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
