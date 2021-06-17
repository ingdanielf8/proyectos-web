<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
        .titulo-principal__numero
          span 3
        h1 E-books, e-magazine, presentaciones, catálogos, e-card
    figure.mb-5
      img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mb-5 Muchas de las publicaciones que se conocen en la era de la impresión, como libros, revistas, catálogos, entre otros, han migrado sus componentes al ámbito digital, conservando muchas de sus características esenciales y desarrollando otras funcionalidades que permiten una mayor interactividad por parte del usuario. 
    .row.mb-4 
      .col-10.offset-1
        .cajon.color-acento-botones.px-5.py-4.mb-4
          .row
            .col-md-3.col-lg-2.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              p Existen diversos tipos de publicaciones que se distribuyen con diferente periodicidad. Las publicaciones periódicas salen al mercado de una manera regular, ya sea diariamente, semanal, quincenal o mensual; dentro de estas publicaciones, se encuentran por ejemplo los libros y las revistas. Estas publicaciones sirven para difundir el conocimiento, información en diversos contextos, cultura, y noticias de interés.
    p.mb-5 Para comprender en profundidad algunas diferencias entre las publicaciones impresas y electrónicas, revise la siguiente tabla:
    p.mb-4 Comparación entre publicaciones impresas y digitales
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption.mt-3 Referencia Tabla - Norma APA
        thead
          tr
            th Impresos
            th Digitales
            th Similitudes
        tbody
          tr
            td.py-5 Su base estructural está hecha en papel
            td Dependen de un dispositivo tecnológico para su lectura. 
            td Son medios de comunicación, difunden conocimientos, saberes e ideas de diversos temas.
          tr
            td.py-5 El medio impreso no permite una interrelación directa con el lector.
            td El usuario tiene una experiencia en la cual puede interactuar con muchos recursos dispuestos, editar, subrayar, colocar, etc.  
            td Contienen textos, imágenes, fotografías, entre otros. 
          tr
            td.py-5 El libro puede ser leído en cualquier momento; sin embargo, ocupa mucho espacio. 
            td Generalmente se necesita de internet, aunque algunos libros se pueden descargar. Una ventaja es que se pueden llevar muchos ejemplares en un pequeño dispositivo.  
            td Los dos necesitan de un recurso físico para ser leídos. 
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Ebook - Libro en formato electrónico").px-4
        figure.mb-4
          img(src="@/assets/template/tema-3-3.png", alt="Texto que describa la imagen")
        p.mb-3 El ebook, o libro en formato digital o electrónico, está diseñado para poder ser leído en cualquier dispositivo electrónico y tiene muchas similitudes con un libro impreso; sin embargo, las publicaciones en medios digitales presentan las siguientes ventajas frente a las impresas:
        .row
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se pueden tener un gran número de libros o revistas en un solo dispositivo, sin el peso físico de los impresos. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Sus contenidos son ligeros, breves y fluidos para una mejor experiencia. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Su distribución es de manera global e inmediata. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se puede decir que son publicaciones que aportan al medio ambiente, depende del uso responsable de los aparatos, su vida útil y el reciclaje de los componentes.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se pueden portar en diversos dispositivos, multipropósito.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 El usuario puede hacer modificaciones convenientes para su uso, como el tamaño y tipos de la letra, que quiera manejar.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 No necesita de una fuente de luz ya que la tableta o artefacto tecnológico, posee su propia fuente de luz y se puede calibrar el brillo e intensidad.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se permite realizar acciones en la misma pantalla, como tomar apuntes o pies de página. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 De igual manera que los libros impresos, este tipo de publicaciones cuentan con derechos de autor y de uso, dentro de los cuales principalmente se encuentran la prohibición en la reproducción impresa y la reproducción a usuarios o dispositivos no autorizados.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se puede pasar de contenido o detallar información, tocando la pantalla o algún botón de conexión con un enlace.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Las características propias de este tipo de elementos permiten la posibilidad de insertar videos, sonidos, imágenes, animaciones, gráficos y demás, utilizando formatos determinados para cada uso. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Por sus características básicas los ebooks son libros que facilitan el conocimiento universal, ya que pueden llegar de manera inmediata, fácil y práctica, a cualquier entorno, comunidad rural o población limitada, por ejemplo, por las condiciones geográficas.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Una ventaja frente a las obras impresas es la facilidad de editar, cambiar o añadir contenido al libro en cualquier momento, lo cual supone costos de ahorro.
      div(titulo="E-Magazine - Revista electrónica")
        figure.mb-4
          img(src="@/assets/template/tema-3-4.png", alt="Texto que describa la imagen")
        p.mb-3 La revista electrónica utiliza recursos multimedia y presenta las mismas características de la revista tradicional. Se distribuye en el mercado con un periodo regular, contiene una portada, contraportada, parte editorial, índice, fotos, textos, artículos, anuncios, publicidad, ilustraciones, etc. Este tipo de publicación puede ser presentada en diferentes formatos como el PDF, HTML, epub, entre otros. Una revista puede ser: 
        .row
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Una ventaja sobre otros medios, las imágenes, fotografías e ilustraciones, pueden contar con una mayor calidad gráfica para el usuario.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Una ventaja competitiva frente a las publicaciones tradicionales es la posibilidad de utilizar grandes bibliotecas de imágenes, recursos preestablecidos y la conexión e interacción con archivos de imágenes, bibliotecas y páginas con información gráfica.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Diversa y versátil en los formatos; el lector puede observar el contenido y posteriormente, imprimirlos.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 De fácil acceso, ya que no es necesario la suscripción permanente. En la red se pueden adquirir números sueltos, o fragmentos de colecciones. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 De actualización permanente; por medio de los servicios de alerta, el lector accede de inmediato a actualizaciones, cambios o adiciones que se pueden presentar en cualquier publicación digital.
      div(titulo="Presentaciones digitales")
        figure.mb-4
          img(src="@/assets/template/tema-3-5.png", alt="Texto que describa la imagen")
        p.mb-4 Las presentaciones digitales son productos multimedia, realizados en computador, que contienen diapositivas (slide) con información relevante de un tema en particular.
        p.mb-4 Casi siempre una presentación es un documento en el cual se debe incluir mucha información; por este motivo, es preciso definir la información más relevante a presentar, la cual debe ser clara y concisa, utilizando la menor cantidad de textos, e integrando otros recursos como imágenes, fotografías, esquemas, videos, entre otros.
        p.mb-4 La presentación se ayuda de una guía o índice para seguir un orden estipulado, el cual requiere de un trabajo previo de investigación, en donde todos los datos deben ser concretos, claros y verídicos, ya que por lo general su desarrollo se enmarca especialmente en el área laboral y académica. Un ejemplo son las presentaciones que se realizan para una exposición, utilizando el programa PowerPoint. 
        p.mb-4 Un elemento clave en el desarrollo de las presentaciones es la parte visual, fotografías, imágenes y videos que permiten complementar el contenido y motivan al espectador frente al tema que se está desarrollando; la comunicación multimedia ayuda a la organización de todos los componentes que conforman la presentación para facilitar su navegación y posterior divulgación, la integración de sonido conecta al participante con el contexto general de la misma. 
      div(titulo="Catálogos")
        figure.mb-4
          img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen")
        p.mb-4 El catálogo es una pieza netamente comercial que utilizan las empresas para dar a conocer sus productos, bienes o servicios y con ello generar ventas. Esta pieza depende de la calidad de la imagen ya que los productos mostrados no se pueden medir, probar o tocar, solo se pueden mirar.  Los catálogos de ventas electrónicos son elementos de marketing directo muy utilizados, pues ahorran a las empresas millones de pesos en publicidad y ayudan con el cuidado del medio ambiente.
        p.mb-3 Las características principales para que esta pieza gráfica funcione de manera eficaz y adecuada son:
        .row
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 La practicidad: un catálogo debe ser práctico, con poco texto y muchas imágenes de alta calidad que sean llamativas para que el usuario pueda observar, comparar y decidir su compra.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Debe incluir una breve descripción de los productos, bienes o servicios que se ofertan, tiempos de entrega, promociones, cambios, devoluciones y garantías. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 El catálogo debe tener un diferencial, ya que hoy en día existen muchas empresas que compiten por este mercado. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 El catálogo digital puede tener una extensión mayor a la versión física, debido a las ventajas que ofrecen los dispositivos de salida. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Este tipo de formatos pueden incrementar el tráfico de cualquier sitio web, por sus facilidades de conexión, interactividad, pago y experiencia.
      div(titulo="E-card") 
        figure.mb-4
          img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen")
        p.mb-4 Ecard, o tarjeta virtual, hace referencia a una pieza gráfica principalmente utilizada hoy en día por grandes empresas de redes sociales dentro de sus contenidos; es un formato actual, estructurado y llamativo para el usuario, que se distribuye y consume de manera rápida.
        p.mb-3 La eficiencia de los diseños en la web, incluyen las siguientes características:
        .row
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Las tarjetas se pueden dar la vuelta para mostrar aún más contenido.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Se pueden doblar para resumir y desdoblar para desarrollar la información.
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-c.text-center
                  .col-11
                    p.mb-2 Al apilarlas se ahorra espacio; se pueden agrupar y/o desplegar para ser utilizadas en el momento en el que sean requeridas.
    p.mb-4 La funcionalidad de este tipo de diseño es limitada. Por tanto, no es una buena idea para la promoción y/o venta de un amplio catálogo de productos, por ejemplo. Sin embargo, representa una forma actualizada a las necesidades del usuario en línea y su tendencia al uso de dispositivos móviles. 
    p.mb-4 Se puede aprovechar su uso, si el contenido a promocionar cuenta con alguna(s) de las siguientes características:
    .row.mb-4
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Si es una especie de colección que cuenta con diversos contenidos multimedia.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Si soporta contenido de amplitud variable e interacción en línea, como una sección de comentarios o botones de enlace hacia redes sociales.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Si el contenido condensa información clave junto con imágenes de alta resolución para hacer la navegación más dinámica y fluida.
    p.mb-4 Al igual que el consumidor promedio, el usuario de un sitio web no pretende únicamente encontrarse con opciones de productos, sino que, de manera inconsciente, busca involucrarse emocionalmente con estos. Entonces, englobando esto, en un concepto simple y de gran utilidad en la web, se puede decir que las emociones se comparten para que los productos sean consumidos.
    p.mb-5 Siendo así, las tarjetas representan un excelente vínculo de interacción entre el usuario y el sitio web; desde su práctico diseño rectangular, hasta su portabilidad y fácil distribución, el diseño web de tarjetas es sin duda un estilo vanguardista y de gran utilidad informativa #[strong (Puente, 2015).]
    .h4.mb-4 Formatos
    p.mb-5 Existen diversos formatos en el uso y compresión de imágenes, estos son los más utilizados en la industria: 
    SlyderB.mb-5(:datos="datosSlyder")




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'JPG',
        texto:
          'Es el formato más conocido y utilizado para la compresión de imágenes de alta calidad, como imágenes captadas por fotógrafos. Las imágenes que son constantemente editadas en su tamaño, van a tener una pérdida de calidad acumulativa. ',
        imagen: require('@/assets/template/tema-3-8.png'),
      },
      {
        titulo: 'GIF',
        texto:
          'Este tipo de formato es muy utilizado en animaciones de poco peso. Son empleados por sus características principalmente en redes sociales, ya que comunican de manera rápida y asertiva diversos tipos de sentimientos. ',
        imagen: require('@/assets/template/tema-3-9.png'),
      },
      {
        titulo: 'PNG',
        texto:
          'Este tipo de formato permite el uso y manejo de transparencias, por lo cual es muy utilizado en internet.',
        imagen: require('@/assets/template/tema-3-10.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
