<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
      .titulo-principal__numero
        span 2
      h1 Tipología epub
    .row  
      .col-12.col-lg-8
        p.mb-5 El llamado formato epub, electronic publication o publicación electrónica, es un tipo de formato basado en estándares web, que mejora la visualización y lectura en dispositivos electrónicos. Es de gran utilidad al permitir una independencia entre el contenido y la forma, ya que se acomoda y se ajusta a las necesidades pertinentes del entorno actual, puede ser abierto y utilizado en cualquier dispositivo electrónico y compatible en diferentes aplicaciones. 
        p Los avances tecnológicos y la inserción de nuevos y diversos dispositivos electrónicos en la era digital, crearon la necesidad de desarrollar nuevas formas de lectura, el libro en papel se fue trasladando poco a poco a los dispositivos comerciales como tabletas, celulares, computadores, entre otros, y surge la llamada escritura hipermedia. El texto hipermedial se caracteriza por su falta de linealidad y por un lenguaje enriquecido con imágenes, vídeos y sonidos #[strong (Zamora, 2016)]. Su nacimiento es realmente reciente, pero los avances y el desarrollo que ha tenido en los últimos años han sido muy acelerados, integrando múltiples medios y nuevas formas en cuanto a los recursos que facilitan su uso y ejecución. 
      .col-4.d-none.d-lg-block.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen")
    .row.mt-4
      .col-10.offset-1
        figure.mb-5
          img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")
    p.mb-5 El uso incrementado de la tableta, por encima de los equipos de cómputo, incentivó el manejo del formato de archivo de libro electrónico con la terminación epub. La facilidad para realizar múltiples tareas, el manejo de diferentes herramientas, imágenes y videos, inclusive, hacen del ebook uno de los mejores instrumentos tecnológicos; ya que permite, por ejemplo, la edición de elementos (modificar, subrayar), además de su portabilidad siendo una de sus mayores ventajas frente al libro de papel, puesto que se puede llevar a todas partes, en el celular o dispositivo disponible, es accesible y de bajo precio. Adicionalmente, las grandes compañías de ventas por internet han jugado un papel importante en la venta, expansión y uso de este tipo de formato, en el cual no es necesario contar con un espacio físico para su almacenamiento, por el contrario, se pueden almacenar de manera fácil y eficiente, bajando además los costos de producción.
    .row
      .col-12.col-lg-7.align-self-center
        p.mb-5 A pesar de ser epub un formato tan importante, existen otro tipo de formatos desarrollados por diferentes empresas, que tienen compatibilidad con sus propios productos. Tal es el caso del formato PDF (siglas en inglés de Portable Document Format, que traduce “formato de documento portátil”), uno de los más utilizados en el mercado; sin embargo, el formato epub permite dentro de la experiencia al cliente, redimensionar la escala de los documentos y el tipo y tamaño de fuente tipográfica a utilizar, es un formato muy versátil.   
        p La hipermedia nace de las palabras «hiper» de hipertexto y «media» de multimedia, conjunto de herramientas destinadas a realizar contenidos para transmitir información multimedial o digital, mediante la unión de soportes como imágenes, texto, audio, ilustración, mapas. La hipermedia logra la comunicación digital como se conoce hoy en día, por medio de internet, donde los usuarios tienen la posibilidad de interactuar de múltiples maneras con otros usuarios
      .col-8.col-lg-5.offset-2.offset-lg-0.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
    .h4.mb-5 Tipos de epub y características
    p.mb-5 Existen dos tipos principales de epub, ajustable y fijo, las cuales se describen a continuación:
    .row.mb-4 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op40.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-2-4.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .h5 Ajustable:
              p Ya que un epub es un objeto digital con múltiples medios de salida, la tipología ajustable permite que el tamaño del texto se adapte al dispositivo utilizado, esto facilita la lectura del usuario especialmente cuando cambie entre las vistas vertical y horizontal, permitiendo que el contenido se organice para optimizar la visualización del mismo.
    .row.mb-5 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op25.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center.text-center
              figure.mb-5
                img(src="@/assets/template/tema-2-5.svg", alt="Texto que describa la imagen").w-50
            .col-12.col-lg-8.align-self-center
              .h5 Diseño fijo: 
              p Este tipo de diseño es utilizado en libros o elementos donde se requiera de un diseño específico, independiente de la pantalla que se vaya a utilizar. Elementos como textos, imágenes, tienen una posición fija en pantalla, tiene que ver más con un requerimiento de diseño que con la facilidad que presenta el epub ajustable al lector.  
    p.mb-5 En cuanto a sus características se encuentran las siguientes: 
    .row.mb-5
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/template/tema-2-6.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg-secundario-op25
            .p-4
              .h2.text-center Texto fluido:
              p.text-center El texto fluido permite acomodar las palabras al tamaño de la pantalla, ya que no es igual leer un libro en un celular, que en una tableta; esta es una ventaja que no permiten otro tipo de formatos como el PDF.
      .col-md-6.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/template/tema-2-7.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg-secundario-op25
            .p-4
              .h2.text-center Formato de texto:
              p.text-center El tamaño y formato de texto pueden ser modificados de acuerdo con las necesidades del lector, en cuanto a tamaños y tipos de letra, por ejemplo.
      .col-md-6.col-lg-4.offset-md-3.offset-lg-0.mt-md-4
        .tarjeta-avatar
          img(src='@/assets/template/tema-2-8.svg' alt='AvatarTop')
          .tarjeta.color-secundario.bg-secundario-op25
            .p-4
              .h2.text-center Se basan en lenguaje HTML y CSS:
              p.text-center Este tipo de lenguaje es el utilizado en el desarrollo web, lo cual permite tener un comportamiento similar a una página de contenidos.
    .col-10.offset-1.borde-gris.rounded.px-5.py-4.mb-5
      .h4.mb-2 Formatos utilizados: 
      p Existen diversidad de formatos utilizados en el mercado, muchos de estos están enmarcados por las características de uso de cada una de las empresas que los han desarrollado. Dentro de estas empresas se encuentran mayormente las empresas de tecnología, desarrollo web, ventas por internet, entre otras, que apuestan por sus propios formatos; a continuación, se presentan algunos de los más relevantes:
    .row.bg-gris.mb-3.py-5.px-2.mx-0
      .h4.text-center.mb-4 7 Formatos para libros electrónicos
      .col-md-8.col-lg-10.offset-md-2.offset-lg-1
        p Cada formato tiene una extensión distinta,  además de ciertas características como, por ejemplo, la configuración del tipo y tamaño de letra o el ajuste del texto en pantalla.
      figure.mt-3.mb-2
        img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen")
    figcaption Referencia SENA
    p.mt-4 Otros formatos que puede encontrar son: mobi, oeb, opf, prc, rtf. Sobre los cuales se recomienda su consulta; en el material complementario, encontrará información adicional para profundizar en el tema. 
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
