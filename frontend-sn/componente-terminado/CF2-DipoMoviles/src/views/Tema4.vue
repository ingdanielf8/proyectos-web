<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Componentes de Software
    figure.mt-4  
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    p.mt-5 Los sistemas de información son el conjunto de varios elementos que operando en conjunto bajo unas premisas definidas logran el objetivo de mantener en operación dichos sistemas. A continuación, se relacionan algunos de estos elementos necesarios para garantizar la continuidad del funcionamiento del sistema.
    .titulo-segundo.mt-5
      #t_4_1.h4 4.1  Licenciamiento
    .row.mt-5 
      .col-12.col-lg-9
        p Una licencia de software es un contrato que describe los derechos legales del uso autorizado de un sistema de información, programa u aplicativo. En otras palabras, es un acuerdo en el que el fabricante o proveedor del software le otorga a una persona u organización un permiso para utilizar un determinado producto.
        p.mt-3 Una acción de aceptación inequívoca de este contrato se efectúa cuando se descarga e instala a través del medio oficial de distribución del producto a instalar, es decir que, aunque no se firme un documento explícitamente cuando se realizan las operaciones descritas en el contrato (generalmente: descarga, instalación, configuración) que causan la aceptación de las condiciones de aceptación es considerado legalmente como si se firmara un contrato de licencia. 
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario.p-4.p-md-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-4-3.svg", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p En Colombia según la norma que regula este tema se encuentra en la Ley 603 de 2000, llamada  ley de licencias de Software (o también Ley para cumplimiento de las licencias de Software), las licencias de software se clasifican según el uso final y las libertades que el autor ofrece de su producto al usuario final. Por lo tanto, es importante conocer el tipo de licenciamiento de software:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Software propietario ")
            .col-4.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-4.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p O también llamado software de código cerrado, es aquel en el que el autor no transmite ninguno de los derechos de ejecución, copia, modificación, cesión o redistribución al comprador, sino que solo establece las condiciones bajo las cuales el usuario puede utilizar el programa. 
          .row(numero="2" titulo="Shareware ")
            .col-4.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-5.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Consiste en la distribución de una versión gratuita y limitada en sus funciones respecto de la aplicación que es de pago. Con esta licencia se le permite al usuario su uso por un tiempo y funciones delimitadas, pero cuando el tiempo finaliza, el usuario deberá pagar o desinstalar el programa.
          .row(numero="3" titulo="Freeware")
            .col-4.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-6.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Este tipo de licencia permite la instalación y uso gratuito de la aplicación y todos sus componentes sin que requiera alguna suscripción, hacer el registro  es opcional pero no tiene costo o pago, sin embargo, el código fuente se mantiene limitado.
          .row(numero="4" titulo="OEM (Original Equipment Manufacturer)")
            .col-4.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-7.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Esta licencia tiene la condición de que el programa debe instalarse en un equipo nuevo, por lo que generalmente aplica a los sistemas operativos.
          .row(numero="5" titulo="Licencia corporativa por volumen")
            .col-4.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-8.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Es el tipo de licencia que generalmente adquieren las empresas dado que estipula un número aproximado de equipos en los que puede ser instalado y utilizado el programa dentro de la misma compañía. 
    p.mt-5 El incumplimiento del uso de software no licenciado acarrea sanciones administrativas hasta de 200 salarios mínimos legales mensuales vigentes (200 SMMLV) para todos los administradores de la empresa, según lo estipule la Superintendencia de Sociedades.
    .titulo-segundo.mt-5
      #t_4_2.h4 4.2  Seguridad
    .row.mt-5
      .col-12.col-lg-7
        p La seguridad de las aplicaciones, hace referencia a las medidas de seguridad, a nivel de aplicación (incluidas en la codificación), cuyo propósito es impedir el acceso no autorizado, el robo o el secuestro de datos o códigos dentro de la aplicación. Incluye las consideraciones de seguridad a tener en cuenta en el momento de desarrollar y diseñar aplicaciones, además de los sistemas y las técnicas para proteger las aplicaciones después de distribuirlas.
        p.mt-3 Para lograr el objetivo de hacer seguras las aplicaciones se debe incluir aspectos en el hardware, software y procedimiento que minimicen las vulnerabilidades de seguridad. La estrategia de publicación de la aplicación servicios de información requieren el empleo de un conjunto de protocolos o procedimientos y para garantizarla se deben realizar pruebas al respecto.
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-9.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-4-10.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9.align-self-center
              p En conclusión, la seguridad de las aplicaciones está en el proceso de desarrollar, añadir y probar características de seguridad que deben tener las aplicaciones para evitar que respondan contra amenazas, tales como la modificación y el acceso no autorizados. Garantizar esto es importante porque las aplicaciones actuales generalmente están disponibles a través de varias redes y conectadas a la nueve, esto incrementa las vulnerabilidades a la que se exponen.
    .h4.mt-5 Tipos de seguridad de las aplicaciones
    figure.mt-5
      img(src="@/assets/template/tema-4-11.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9
        p Existen tipos de características de seguridad en las aplicaciones, como por ejemplo la autenticación, la autorización, el cifrado de la información que consiste en ocultar el contenido a usuario no autorizado que puedan interceptar los datos, el registro y las pruebas de seguridad. 
        p.mt-3 En el momento de desarrollar una aplicación es casi indispensable integrar procedimientos de autenticación y autorización para asegurarse de que solo accedan los usuarios autorizados. La forma básica de este proceso se consigue obligando a los usuarios a proporcionar un nombre de usuario y una clave para iniciar una sesión en el sistema. En el entorno de aplicaciones existen facilidades para agregar otros medios de identificación de usuario y algo que le caracteriza (una huella dactilar o el reconocimiento facial o reconocimiento de vos). Cuando además del usuario y contraseña se emplean otros de los medios de identificación de usuario se le denomina autenticación de múltiples factores.
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-12.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-2.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-4-13.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
      .col-12.col-lg-10
        p El usuario una vez autenticado, se recomienda que el sistema valide que el usuario tenga los permisos para acceder a la aplicación o componentes de esta. La autenticación se debe efectuar antes de validar la autorización.  Cuando el usuario esté autenticado y durante el uso de la aplicación, se puede proteger los datos con otras técnicas de seguridad con el fin de evitar que los ciberdelincuentes no los vean ni los usen. El cifrado de la información es la técnica que transforma la información y la transmite por las redes de tal manera que solo el emisor y el receptor puedan interpretar o descifrar el contenido real de los datos, esta técnica es la más empleada en sistemas de información que usan la internet como medio de transferencia de datos.
    p.mt-5 Finalmente, cuando se vulnera la seguridad del sistema, el registro puede ayudar a identificar quién ha accedido  a los datos, cómo y cuándo. Para lo cual se deben emplear archivos de registro con toda la información relacionada. 
    p.mt-3 En conclusión, los tipos básicos de seguridad de la aplicación son autenticación, cifrado y registro de incidencias. Pero según el contexto que involucre el funcionamiento de la aplicación se debe tener en cuenta:  
    AcordionA.mt-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Seguridad de las aplicaciones en la nube")
        .col-12.col-lg-8
          p las aplicaciones móviles y las aplicaciones web requieren servicios en la nube ello plantea desafíos adicionales propios del entorno entornos de la nave ya que los recursos muchas veces son compartidos, existen dispositivos a nivel infraestructura como los identificadores de intrusos o los cortafuegos que tienen la finalidad de identificar usos no autorizados de los recursos de red por los que funcionan las aplicaciones en la nube.
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-4-14.png", alt="Texto que describa la imagen")
      div(titulo="Seguridad de las aplicaciones móviles").row
        .col-12.col-lg-8
          p Los dispositivos móviles, generalmente también transmiten y reciben información de la red pública de Internet, de modo que son vulnerables a ataques. Existen técnicas como la establece una Red Privada virtual (VPN, Virtual Prívate Network), que consiste en cifrar los protocolos de comunicación y todo el contenido a través de ellos simulado creando con elle una red privada sobre una red pública.
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-4-15.png", alt="Texto que describa la imagen")
      div(titulo="Controles de seguridad de las aplicaciones").row
        .col-12.col-lg-8
          p Los controles de seguridad son las técnicas que mejoran la seguridad de una aplicación a nivel de codificación para que sea menos vulnerable a las amenazas. Las técnicas de desarrollo muchas veces propenden a establecer estos lineamientos. Por ejemplo, al trabajar con Android Studio la metodología de trabajo obliga a cumplir ciertos principios de codificación de las intrusiones que se le dan al móvil de manera que sean más seguras. 
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-4-16.png", alt="Texto que describa la imagen")
      div(titulo="Pruebas de seguridad de las aplicaciones").row
        .col-12.col-lg-8
          p es indispensable realizar pruebas de seguridad de las aplicaciones durante el proceso de desarrollo de software para garantizar que no existan vulnerabilidades en cada versión antes de ser liberada al público.
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-4-17.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_4_3.h4 4.3  API’s, Firebase
    figure.mt-5
      img(src="@/assets/template/tema-4-18.png", alt="Texto que describa la imagen")
    p.mt-5 Las organizaciones están cambiando el modelo de su arquitectura de software a arquitecturas basadas en  componentes de micro servicios. Un micro servicio es un servicio pequeño encargado de una única función básica, y para realizar un proceso más complejo se emplearían varios micro servicios coordinados entre sí. La ventaja de esto es que ese mismo servicio está publicado en internet no para usuarios finales sino para que sean utilizado por aplicaciones, de esta forma una aplicación móvil puede usar ese servicio de la misma forma que una aplicación web o un chatbot.
    .h4.mt-5 Definición de API’S
    .row.mt-5
      .col-12.col-lg-9
        p Se debe imaginar que una empresa necesita que sus clientes registren sus solicitudes por página web, aplicación móvil y chatbot, la principal ventaja de esto es que si se desea cambiar una regla de negocio (por ejemplo, aplicar determinados descuentos), no debe modificar los tres sistemas sino solamente los micro servicios que están involucrados en dicho proceso.
        p.mt-3 Los micro servicios se publican a través de lo que se denomina una API del acrónimo en inglés Applicactions Programming Interface, o Interfaz de programación de aplicaciones. Son un conjunto de subrutinas, funciones y/o procedimientos que se ofrecen para ser utilizados por otro software como una capa de abstracción (es decir de ocultación de los detalles de codificación). Por lo tanto, una API es en esencia la capacidad de comunicación entre componentes de software.
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-19.png", alt="Texto que describa la imagen")
    .h4.mt-5 Firebase
    .row.mt-5
      .col-12.col-lg-9
        p Es una plataforma en la nube de Google para el desarrollo de aplicaciones web y móviles. Fue creada en 2011 pasando a ser parte de Google en 2014, Su función esencial es hacer más sencilla la creación de aplicaciones web y móviles en su desarrollo como herramientas que facilitan el trabajo para que sea más rápido, pero sin renunciar a la calidad y la seguridad.
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30.mx-5.mt-5
          .row            
            p Para acceder a los servicios de firebase se requiere consumir el API suministrado por Google.
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-20.png", alt="Texto que describa la imagen")
    p.mt-5 La principal herramienta y esencial de Firebase son las bases de datos en tiempo real. Estas se alojan en la nube, son de tipo NoSQL en formato JSON. Este servicio ofrece alojar y disponer de los datos de información de la aplicación en tiempo real, manteniéndolos actualizados, aunque el usuario no realice ninguna acción.
    figure.mt-5
      img(src="@/assets/template/tema-4-21.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-22.png", alt="Texto que describa la imagen")
      .col-12.col-lg-8
        p Firebase envía automáticamente eventos, es decir llama funcionalidades de las aplicaciones cuando los datos cambian, esto es lo que hace posible desarrollar aplicaciones con funciones que se ejecutan en tiempo real. 
        p.mt-3 Frente al tema de seguridad ofrece un sistema de autenticación que permite tanto el login de usuario (mediante email y contraseña) como el acceso utilizando perfiles de otros sistemas externos generalmente de redes sociales.
        p.mt-3 A continuación, se mostrará un proceso básico para crear una base de datos en firebase.
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-4-23.png", alt="Texto que describa la imagen")
      .col-8.offset-2.mt-4
        SlyderC(:datos="datosSlyder")
      .col-8.offset-2.mt-5.px-5
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-4-30.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Uno de los principales inconvenientes podría ser la necesidad de pago ya que firebase no es gratuita en todas sus funcionalidades y gratuitamente limita el número de usuario. Sin embargo, para los proyectos que se encuentren en sus primeras etapas, la versión gratuita de Firebase es más que suficiente.
    .titulo-segundo.mt-5
      #t_4_4.h4 4.4  Herramientas
    figure.mt-5
      img(src="@/assets/template/tema-4-31.png", alt="Texto que describa la imagen")
    p.mt-5 Cuando se está desarrollando un proyecto empleando micro servicios, las pruebas de API necesarias son un tipo de prueba que es imprescindible realizar para desarrollar o consumir una API para lograr o probar la ejecución, funcionalidad, confiabilidad y seguridad de la aplicación.
    p.mt-3 A continuación, se presentan un conjunto de herramientas de libre distribución que permiten realizar el proceso de prueba y diseño de APIs publicadas por los diferentes protocolos WEB.
    .row.mt-5
      .col-8.offset-2
        LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="SOAP UI")
            .col-4.offset-4.offset-lg-0
              figure
                img(src="@/assets/template/tema-4-32.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Puede comprobar los servicios web SOAP como los servicios web de tipo RESTful. Está disponible como una versión de código abierto y PRO. Está basado en Java, por tanto empleable en cualquier sistema operativo; sobre todo, es fácil de aprender y usar y confiable para todos.
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitio oficial:  
              a.anexo.mb-4.mb-lg-0(href="https://www.soapui.org" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://www.soapui.org 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Video tutorial recomendado:
              a.anexo.mb-4.mb-lg-0(href=" https://youtu.be/rfIi9hdT-vk" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web]  https://youtu.be/rfIi9hdT-vk     
          .row(numero="b" titulo="Estudio Katalon")
            .col-4.offset-4.offset-lg-0
              figure
                img(src="@/assets/template/tema-4-33.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Automatiza procesos de pruebas de servicios web y APIs para dispositivos móviles. Reconocida como  la mejor en el área de automatización de este tipo de pruebas.
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitio oficial:  
              a.anexo.mb-4.mb-lg-0(href="https://www.katalon.com/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://www.katalon.com/ 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Video tutorial recomendado:
              a.anexo.mb-4.mb-lg-0(href="https://youtu.be/Ho80rqLBb1w" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://youtu.be/Ho80rqLBb1w 
          .row(numero="c" titulo="TestNG")
            .col-4.offset-4.offset-lg-0
              figure
                img(src="@/assets/template/tema-4-34.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Inspirado en JUnit y NUnit para el lenguaje Java. El lema principal de esto es proporcionar funcionalidades fáciles de usar y cumplir con todo tipo de fases de prueba como unidad, integración, funcional, etc. (TestNG ,2021).
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitio oficial:  
              a.anexo.mb-4.mb-lg-0(href="https://testng.org/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://testng.org/
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Video tutorial recomendado:
              a.anexo.mb-4.mb-lg-0(href="https://youtu.be/-VHNJcoMBek" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://youtu.be/-VHNJcoMBek
          .row(numero="d" titulo="JMeter")
            .col-4.offset-4.offset-lg-0
              figure
                img(src="@/assets/template/tema-4-35.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Automatiza pruebas pero también puede realizar pruebas de rendimiento, pruebas de estrés de los servicios RESTFul y SIAP, con el uso de scripts de JMeter.
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitio oficial:  
              a.anexo.mb-4.mb-lg-0(href="https://jmeter.apache.org/ " target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://jmeter.apache.org/ 
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Video tutorial recomendado:
              a.anexo.mb-4.mb-lg-0(href="https://youtu.be/E2zwM8s7thY" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://youtu.be/E2zwM8s7thY
          .row(numero="e" titulo="PostMan")
            .col-4.offset-4.offset-lg-0
              figure
                img(src="@/assets/template/tema-4-36.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8
              p Tal vez el más popular por esta enfocado en el proceso de desarrollo, lo que lo hace muy facil de usar.
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Sitio oficial:  
              a.anexo.mb-4.mb-lg-0(href="https://www.postman.com/" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://www.postman.com/
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  | Video tutorial recomendado:
              a.anexo.mb-4.mb-lg-0(href="https://youtu.be/qsejysrhJiU" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://youtu.be/qsejysrhJiU
    p.mt-5 Se puede concluir que existen muchas herramientas, para todas las fases de desarrollo e implementación de aplicaciones web y móviles con diversidad de licenciamientos y generalmente con funcionalidades de libre distribución que permiten dar marcha un proyecto sin incurrir en costos de entrada.                
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Nuevo proyecto firebase',
        texto: '',
        imagen: require('@/assets/template/tema-4-24.png'),
      },
      {
        titulo: 'Esperar el proceso de setup',
        texto: '',
        imagen: require('@/assets/template/tema-4-25.png'),
      },
      {
        titulo: 'Panel del proyecto',
        texto: '',
        imagen: require('@/assets/template/tema-4-26.png'),
      },
      {
        titulo: 'Modo de pruebas',
        texto: '',
        imagen: require('@/assets/template/tema-4-27.png'),
      },
      {
        titulo: 'Crear una colección',
        texto: '',
        imagen: require('@/assets/template/tema-4-28.png'),
      },
      {
        titulo: 'Crear un documento',
        texto: '',
        imagen: require('@/assets/template/tema-4-29.png'),
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
