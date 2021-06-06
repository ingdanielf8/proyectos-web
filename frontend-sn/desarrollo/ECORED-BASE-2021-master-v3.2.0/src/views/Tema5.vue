<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Arquitectura de información, Card sorting
    
    figure.mb-5
      img(src="@/assets/template/tema-5-1.png", alt="Texto que describa la imagen")
    p.mb-4 La arquitectura de la información va muy ligada al concepto UX y se puede definir como la organización de todas las partes de algo, para que sea lo más comprensible posible
    .row.mb-4 
      .col-12.col-lg-8
        p.mb-2 La arquitectura de la información busca básicamente el ordenamiento de todos los datos disponibles para que el usuario de manera lógica y ordenada realice la búsqueda de forma más rápida, fácil, ágil y dinámica.
        p.mb-4 Un ejemplo claro de cómo funciona la arquitectura de información, es compararlo con el manejo de una biblioteca, donde cada libro pertenece a una categoría específica y se dispone en un espacio delimitado para ser ubicado de manera sencilla; los libros de historia se encuentran en una estantería delimitada, los de cocina en otra, los de política en un lugar diferente y así sucesivamente; estos tomos pueden ser ordenados de acuerdo con su importancia, su volumen o tamaño; de la misma manera pasa en la arquitectura de la información, busca que los datos presenten una estructura fácil y comprensible. 
        p.mb-4 Este ordenamiento se puede realizar por medio de categorías de productos, contenidos, palabras clave, etc. El siguiente cuadro muestra de manera más detallada cómo realizar la organización de contenidos. 
      .col-4.d-none.d-lg-block.align-self-center
        figure.mb-4
          img(src="@/assets/template/tema-5-2.svg", alt="Texto que describa la imagen")
    .h4.mb-5 Diseño de arquitectura de información. 
    figure.mb-4
      img(src="@/assets/template/tema-5-3.png", alt="Texto que describa la imagen")
    figcaption.mb-5 Referencia SENA
    .h4.mb-4 Componentes de la arquitectura de la información
    p.mb-4 La arquitectura de la información se puede dividir en cuatro componentes: 
    .row
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.borde-gris-der.px-5
            figure.mb-4
              img(src="@/assets/template/tema-5-4.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 Sistemas de organización:
            p Organización de los sistemas de navegación de manera fácil y ordenada
    .row.mt-3
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.borde-gris-der.px-5
            figure.mb-4
              img(src="@/assets/template/tema-5-5.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 Sistemas de etiquetado:
            p Sistema mediante el cual se etiquetan los datos de información. 
    .row.mt-3
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.borde-gris-der.px-5
            figure.mb-4
              img(src="@/assets/template/tema-5-6.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 Sistemas de navegación: 
            p Sistemas informáticos que hacen fácil y mejoran la accesibilidad y navegación.
    .row.mt-3
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.borde-gris-der.px-5
            figure.mb-4
              img(src="@/assets/template/tema-5-7.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 Sistemas de búsqueda: 
            p Sistemas que facilitan y ayudan en la localización de la información específica.
    .row.mt-5
      .col-12.col-lg-9
        p.mb-4 Por su parte el Card sorting es una técnica de investigación que permite identificar cómo los usuarios creen que deberían estar organizados los contenidos de un producto digital, por ejemplo: el menú de navegación de un sitio web; aportando información relevante para tomar decisiones sobre la arquitectura de información de un producto #[strong (Torresburriel, 2017).]
        p Se realiza mediante la participación de un grupo de usuarios objetivo, a quienes se les entrega una serie de tarjetas o Post-it, en las cuales se representan los contenidos (uno a uno) de un producto o servicio, para que sean organizadas y categorizadas de acuerdo con sus criterios y expectativas; también se espera que pueden opinar respecto a la redacción y a los elementos propuestos.
      .col-3.d-none.d-lg-block.align-self-center
        figure.mb-4
          img(src="@/assets/template/tema-5-8.svg", alt="Texto que describa la imagen")
    p.mt-3.mb-4 Es una herramienta sencilla y muy útil debido a que permite involucrar a un gran número de usuarios, permitiendo obtener información importante para tomar decisiones, mediante la estructura jerárquica de la información. La técnica sirve para aplicarse en diseños de páginas web nuevas o que estén funcionando para realizar los ajustes pertinentes luego de su análisis. Es decir, se alinean las perspectivas de los usuarios con el equipo UX. El usuario debe sentirse cómodo, entender que puede agrupar las tarjetas como le parezca conveniente y que no hay respuestas buenas ni malas.
    figure.mb-5
      img(src="@/assets/template/tema-5-9.png", alt="Texto que describa la imagen")
    .h4.mb-5 Tipos de Card sorting
    .row.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op40.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-5-10.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .h5 Abierto: 
              p Consiste en entregar un grupo de tarjetas a los usuarios y ellos se encargan de crear las categorías que deseen, proponiendo los nombres de estas.
    .row.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op25.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-5-11.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .h5 Cerrado: 
              p En este tipo de Card Sorting, ya están creadas las diferentes categorías y los usuarios deben ordenarlas; es decir, aquí el usuario sólo puede proponer el orden en que deben organizarse los contenidos.
    .row.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op10.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-5-12.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .h5 Hibrido: 
              p Es una combinación de los dos tipos anteriores. El usuario recibe las tarjetas con categorías ya determinadas, ellos las organizan, pero también tienen la posibilidad de crear otras que deseen o les parezcan convenientes.
    p.mb-5 En la actualidad, existen programas de software que coadyuvan en esta tarea, evitando tener tarjetas físicas y el programa se encarga de agrupar los resultados para analizarlos fácilmente, como el software Optimal Sort.
    
    .titulo-segundo.mt-5
      #t_5_1.h4 5.1  Evaluación heurística o de usabilidad
    p.mb-4 Luego de la implementación de la arquitectura de información por medio del uso de tarjetas, el proceso de evaluación heurística o metodología de inspección en experiencia de usuario busca identificar y resolver aquellas problemáticas presentes en la usabilidad de los componentes de un producto, teniendo como principal objetivo medir la facilidad de uso, que se centra en el conocimiento del diseño y la experiencia de usuario. 
    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.d-none.d-lg-block.px-3
          figure
            img(src="@/assets/template/tema-5-13.svg", alt="Texto que describa la imagen").w-100
        .col-lg-8
          .bloque-texto-a__texto.p-4
            .h4 El decálogo de principios heurísticos de Jakob Nielsen
            p Este decálogo desarrollado por Jakob Nielsen, reconocido experto mundial en usabilidad de la web, da diez principios heurísticos, centrados en mejorar la experiencia de usuario, en el desarrollo de posible resolución de problemas.

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
