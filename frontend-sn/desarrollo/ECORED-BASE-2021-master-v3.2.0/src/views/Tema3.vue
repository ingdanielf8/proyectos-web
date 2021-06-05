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
      div(titulo="Catálogos")
        figure.mb-4
          img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen")
      div(titulo="E-card") 
        figure.mb-4
          img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen")
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
