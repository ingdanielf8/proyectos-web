<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Introducción a las tecnologías para el desarrollo web
    figure.mt-4
      img(src="@/assets/template/tema-2-1.png" alt="Texto que describa la imagen")
    p.mt-4 Las tecnologías de desarrollo web se refieren a una multitud de lenguajes y herramientas de programación que se utilizan para producir sitios web, aplicaciones dinámicas y plataformas, con todas las funciones necesarias para dar alcance a un sin número de necesidades y requerimientos por parte de los usuarios.
    .row.mt-5
      .col-12.col-lg-7
        p Este tipo de tecnologías, cada vez están en evolución, no es necesario hacer un estudio minucioso sobre el estado de transformación de estas tecnologías, solo basta con mirar el nuevo auge de diversos lenguajes de programación que permiten generar mejor y mayores acciones en sitios web. Por eso es por lo que las tecnologías web han sido consideradas como multiplataforma. Esta afirmación está asociada según el grupo de expertos de Ingenio Virtual donde indican: 
        .row.mb-5 
          .col-12
            .cajon.color-secundario.p-4.mb-4
              p “…Los modelos y tecnologías de desarrollo web han evolucionado mucho en la última década, #[strong existen multitud de aplicaciones, frameworks, librerías, arquitecturas y sistemas de publicación] en diferentes versiones que a su vez reciben cambios o mejoran con el tiempo.  El progreso también ha tenido lugar en lo relacionado con la administración de sistemas, servicios de alojamiento, técnicas de escalabilidad, monitorización y gestión de centros de procesos de datos. Esta evolución ha dado lugar a la #[strong convergencia de una gran cantidad de tecnologías], herramientas y estilos arquitectónicos para desarrollar sitios web y aplicaciones.” #[strong (I, 2018)]
      .col-5.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-2-2.png" alt="Texto que describa la imagen")
    #t_2_1.titulo-segundo.mt-5
      .h4 2.1  Tecnologías del front-end
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Las tecnologías de front-end son usadas para el “lado del cliente”, sea de un sitio web o aplicación. Se utilizan para desarrollar los componentes interactivos y producir los elementos que los usuarios ven e interactúan con ellos. Esto incluye colores y estilos de texto, imágenes, botones y menús de navegación entre otros objetos interactivos. Normalmente estas tecnologías y lenguajes vienen implementados en los diferentes navegadores.
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-3.svg" alt="Texto que describa la imagen").w-75
    .h4.mt-5 HTML5
    figure.mt-4
      img(src="@/assets/template/tema-2-4.png" alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9
        p HTML es la sigla de Hyper Text Markup Language. Es una de las tecnologías fundamentales necesarias para el desarrollo de todo tipo de aplicaciones web. Proporciona la estructura base para una página web. El código HTML garantiza que todo el contenido de un sitio web tenga el formato adecuado y estructurado. Esto es para que cada navegador de internet pueda mostrar el contenido según lo previsto. Sin HTML, un navegador no podría mostrar texto o cargar imágenes y otros elementos.
        p.mt-3 HTML5, la versión más actual de HTML, Contiene un conjunto más amplio de tecnologías que permite a los sitios web y a las aplicaciones ser más diversas y de gran alcance. A este conjunto se le llama HTML5. En ese sentido, esta tecnología presenta una gran cantidad de recursos, como librerías, plugins y API que se puedan usar con un lenguaje de programación como lo es JavaScript para realizar un sitio web más interactivo y dinámico. Las tecnologías más usadas por HTML5 son las siguientes:
      .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-5.svg" alt="Texto que describa la imagen").w-75
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op40.px-5.py-4.mb-4
          .h3 Canvas:
          p.mt-3 Es un elemento HTML5 que se utiliza para dibujar imágenes y formas con el fin de manipularlas. También se puede utilizar para casos como gráficos y animaciones de juegos. 
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op25.px-5.py-4.mb-4
          .h3 Almacenamiento web: 
          p.mt-3 Se utiliza para almacenar información directamente en el navegador. Algunos ejemplos de esto serían almacenar la información de inicio de sesión del usuario y guardar las preferencias del usuario para un sitio web.
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op15.px-5.py-4.mb-4
          .h3 WebWorkers: 
          p.mt-3 Esta tecnología habilita un script que sigue ejecutándose en segundo plano cuando se abre una página web y se usa principalmente en sitios web con capacidades sin conexión. Hace que las páginas estén disponibles sin conexión y permite el uso de notificaciones como web Push. Puede enviar estas notificaciones incluso cuando su navegador no está abierto.
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op10.px-5.py-4.mb-4
          .h3 WebSockets: 
          p.mt-3 Permite una conexión bidireccional persistente entre el usuario y el servidor. Los casos de uso más comunes incluyen chats y notificaciones en aplicaciones web.
    .h4.mt-4 CSS3
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de documentos HTML o XML (en-US) CSS describe como debe ser renderizado  el elemento estructurado es decir se encarga de la apariencia del sitio. De manera adicional, abordamos la definición descomponiendo sus siglas:
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-6.svg" alt="Texto que describa la imagen").w-75
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | #[strong Cascading:] Significa que los estilos que aplicamos a los elementos de una página web se propagan a los elementos que contiene, se aplican en cascada.                    
          li
            i.fas.fa-angle-right 
            | #[strong Style:] Mediante la tecnología CSS se aplican estilos visuales a los distintos elementos de nuestra página web.
          li
            i.fas.fa-angle-right 
            | #[strong Sheets:] Lo que traduce hojas, porque los estilos de una página web se añaden en archivos aparte. Estos archivos deben tener la extensión .css de manera general.
    p.mt-5 Desde CSS3, el alcance de las especificaciones se incrementó de forma significativa y el progreso de los diferentes módulos de CSS comenzó a mostrar varias diferencias. De esta forma con CSS3 se tiene mayor control de los elementos del sitio, con sus nuevas funciones y atributos sobre las etiquetas HTML, maximizan las acciones visuales del sitio o plataforma
    .h4.mt-5 JavaScript (JS)
    p.mt-3 En la literatura hay un sin número de definiciones con respecto a este lenguaje de programación, no obstante, hay una especial la cual se cita de parte del blog de Rafa Ramos de manera literal, él dice:z
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-acento-contenido.px-5.py-4.mb-4
          .row
            .col-4.col-lg-3.offset-4.offset-lg-0.align-self-center
              figure
                img(src="@/assets/template/tema-2-7.svg" alt="Texto que describa la imagen")
            .col-12.col-lg-9.mt-4.mt-lg-0.align-self-center  
              p “JavaScript es el lenguaje de programación encargado de dotar de mayor interactividad y dinamismo a las páginas web. Cuando JavaScript se ejecuta en el navegador, no necesita de un compilador. El navegador lee directamente el código, sin necesidad de terceros. Por tanto, se le reconoce como uno de los tres lenguajes nativos de la web junto a HTML (contenido y su estructura) y a CSS (diseño del contenido y su estructura) …” #[strong (Ramos, 2020).]
    .row.mt-5
      .col-12.col-lg-7
        p De manera adicional, JS si bien es más conocido como un lenguaje de scripting (secuencias de comandos) para páginas web, es usado también en muchos entornos fuera del navegador, tal como Node.js, Apache CouchDB y Adobe Acrobat. 
        p.mt-3 Como conclusión a estas 3 principales tecnologías, se realiza una analogía con el cuerpo humano, de esta manera los huesos que son la estructura ósea es lo que a su vez hace el lenguaje de etiquetas HTML, los músculos que hacen que el cuerpo se mueva y tenga motricidad y dinámica es lo que a su vez hace JavaScript, y la piel que es la cubierta del cuerpo humano y se puede decir que es le da apariencia, es lo que hace a su vez el CSS. Con esta analogía se espera que se tenga más comprensión de este tipo de tecnologías del lado del cliente.
      .col-4.col-lg-5.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-2-8.png" alt="Texto que describa la imagen")
    .h4.mt-5 Frameworks del front-end
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    #t_2_2.titulo-segundo.mt-5
      .h4 2.2  Tecnologías del back-end
    .row.mt-4
      .col.borde-izq-amarillo.bg-amarillo-claro
        .row
          .col-3.d-none.d-lg-block.px-5.py-4
            figure
              img(src="@/assets/template/tema-2-9.svg" alt="Texto que describa la imagen")
          .col-12.col-lg-9.px-3.py-4
            p Este tipo de tecnologías son aquellas que se utilizan en el lado Servidor. En ese sentido el Servidor las utiliza para gestionar y/o procesar las diferentes peticiones de información que le llegan, además realiza gestión sobre las bases de datos alojadas en los mismos. La información una vez tratada se envía devuelta al dispositivo para que sea visualizada en el dispositivo a través de las tecnologías Front-end. Las tecnologías más conocidas y usadas en el BackEnd son PHP, Java, .NET, Python, MySQL, etc.
    .h4.mt-5 Lenguajes del servidor
    .row.mt-4
      .col-8.offset-2
        figure
          img(src="@/assets/template/tema-2-10.svg" alt="Texto que describa la imagen")
    p.mt-5 En el lado del servidor, el back-end potencia el funcionamiento del sitio web debido a que es en esta instancia donde se realizan los procesos más robustos de información, por lo que se necesitan de igual manera lenguajes de programación con una diversidad de funciones para el tratamiento de esos datos. Además, los programas escritos aquí por los desarrolladores de back-end se utilizan para comunicar la información de la base de datos al navegador. Según la empresa de base tecnológica Third Rock Techkno indica que: “En 2021, el desarrollo de BackEnd será aún más vital a medida que las empresas busquen expandirse a un ritmo rápido”. Además, esta empresa muestra los lenguajes de programación del servidor que están en tendencia”. #[strong (Third Rock Techkno, 2021)]
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op40.px-5.py-4.mb-4
          .h3 Node.JS: 
          p.mt-3 Este lenguaje tiene su propio entorno de ejecución. Esta es la razón por la que es popular entre la comunidad de desarrolladores. Además, como Node.js en la literatura de esta disciplina del desarrollo software es comúnmente visto como uno de los lenguajes más eficientes, se prefiere desarrollar aplicaciones de alta gama para el desarrollo de sitios web, así como para la transmisión de video. 
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op25.px-5.py-4.mb-4
          .h3 Kotlin: 
          p.mt-3 Se presenta como un lenguaje de programación BackEnd para Java Virtual Machine. Es muy preferido para el desarrollo de Android, ya que cuenta con el soporte oficial de Google. Kotlin se muestra de cara como uno de los lenguajes que tiene una curva de aprendizaje muy fácil según Third Rock Techkno. Por lo tanto, el lenguaje es menos propenso a fallos y brinda a los desarrolladores la oportunidad de encontrar los errores fácilmente. (Third Rock Techkno, 2021).
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op15.px-5.py-4.mb-4
          .h3 Ruby: 
          p.mt-3 Se estima que este lenguaje actualmente jugará un papel fundamental, ya que ayuda a reducir el tiempo dedicado a tareas estandarizadas.
    .row.mt-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-color-secundario-op10.px-5.py-4.mb-4
          .h3 PHP: 
          p.mt-3 Es un lenguaje de programación de BackEnd conveniente que es muy flexible y tiene características impecables. Es uno de los programas donde su comunidad se ha venido actualizando y hay gran mayoría de frameworks basados en este lenguaje. Es por eso por lo que PHP se considera el futuro del desarrollo BackEnd en 2021. Además, la sintaxis de PHP es muy expresiva, lo que brinda libertad creativa a los desarrolladores.
    .h4.mt-5 Frameworks del back-end
    .row.mt-5
      .col-12
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En el lado del servidor, el back-end potencia el funcionamiento del sitio web debido a que es en esta instancia donde se realizan los procesos más robustos de información, por lo que se necesitan de igual manera lenguajes de programación con una diversidad de funciones para el tratamiento de esos datos. Además, los programas escritos aquí por los desarrolladores de back-end se utilizan para comunicar la información de la base de datos al navegador. Según la empresa de base tecnológica Third Rock Techkno indica que: “En 2021, el desarrollo de BackEnd será aún más vital a medida que las empresas busquen expandirse a un ritmo rápido”. Además, esta empresa muestra los lenguajes de programación del servidor que están en tendencia”. #[strong (Third Rock Techkno, 2021)]
            .col-lg-4.mb-4.mb-lg-0s
              figure
                img(src="@/assets/template/tema-2-11.svg" alt="Texto que describa la imagen").w-75
    .row.mt-5
      .col-10.offset-1
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Laravel:")
            p.mt-3 Este framework tiene una excelente estructura del lenguaje, la capacidad de adaptarse a grupos gigantes y la efectividad de sus recursos como es la llamada toolbox. Basado en el lenguaje PHP, sigue una sintaxis elegante y expresiva, Laravel permite a los desarrolladores web ser flexibles y creativos mientras se encargan de los detalles de fondo a diferencia de otros frameworks.
          .row(numero="2" titulo="Django:")
            p.mt-3 Es un framework de alto nivel que se desarrolla con la noción de ‘baterías incluidas’. Esto significa que casi todo lo que necesitaría cualquier desarrollador ya está incluido. Django es utilizado principalmente para el desarrollo de aplicaciones web interactivas a gran escala impulsadas por bases de datos. Es altamente personalizable y escalable. Tiene una amplia comunidad, una importante documentación.
          .row(numero="3" titulo="Ruby On Rails:")
            p.mt-3 Está escrito en el lenguaje de programación Ruby. Es fácil de probar y compilar, junto con el amplio apoyo de la comunidad y una gran cantidad de recursos disponibles, lo que lo convierte en una alternativa viable para los principiantes.




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
