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
    .row
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.d-none.d-lg-block.px-3
              figure
                img(src="@/assets/template/tema-5-13.svg", alt="Texto que describa la imagen").w-100
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4 El decálogo de principios heurísticos de Jakob Nielsen
                p Este decálogo desarrollado por Jakob Nielsen, reconocido experto mundial en usabilidad de la web, da diez principios heurísticos, centrados en mejorar la experiencia de usuario, en el desarrollo de posible resolución de problemas.
    p.mt-4 Los diez principios de Nielsen se resumen en la siguiente infografía:
    .row
      .col-lg-6
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Visibilidad del estado del sistema: 
              p Informa al usuario lo que está ocurriendo en el sistema.
      .col-lg-6.mt-3.mt-lg-0
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-15.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Coincidencia entre el sistema y el mundo real:
              p Informa al usuario lo que está ocurriendo en el sistema.
    .row.mt-3
      .col-lg-6
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-16.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Control y libertad del usuario: 
              p Soporta las acciones de deshacer, rehacer y salidas de emergencia, para ayudar al usuario a dejar un estado no deseado.
      .col-lg-6.mt-3.mt-lg-0
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-17.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Prevención de errores:
              p Elimina condiciones propensas a errores, presentar opción de confirmación antes de realizar la acción.
    .row.mt-3
      .col-lg-6
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-18.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Coherencia y estándares: 
              p Mantiene los mismos patrones y convenciones en todo el sistema para que una acción siempre signifique lo mismo.
      .col-lg-6.mt-3.mt-lg-0
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-19.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Reconocimiento más que recordar:
              p Las instrucciones están siempre visibles o ser fáciles de encontrar.
    .row.mt-3
      .col-lg-6
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-20.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Flexibilidad y eficiencia de uso: 
              p Cree un sistema para usuarios con diferentes niveles de experiencia, adaptando opciones que faciliten la navegación.
      .col-lg-6.mt-3.mt-lg-0
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-21.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Estética y diseño minimalista: 
              p Incluya lo relevante, todo lo innecesario compite con la información importante.
    .row.mt-3
      .col-lg-6
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-22.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Ayuda y documentación:
              p Provea al usuario de ayuda y documentación clara y concisa, sobre todo si el sistema es complejo.
      .col-lg-6.mt-3.mt-lg-0
        .tarjeta-avatar-b
          img(src='@/assets/template/tema-5-23.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.borde-gris
            .p-4
              .h2 Ayudar al usuario a reconocer los errores, diagnosticarlos y recuperarse de ellos:
              p Los mensajes de error deben expresarse en lenguaje sencillo, indicar el problema y sugerir constructivamente una solución.
    p.mt-4 Para aplicar de manera objetiva los principios de usabilidad, se debe dar una calificación o medida a cada uno de los componentes; por ejemplo, aquellos que no cumplen con las necesidades requeridas se califican con 0, los que van en proceso, pero aún tienen falencias, se califican con un valor de 3, y los que cumplen con todos los estándares de calidad con 5, esto con el objetivo de realizar las mejoras respectivas.
    .h4.mt-4 Ventajas e inconvenientes de la evaluación heurística
    p.mt-4 Como cualquier metodología, la evaluación heurística posee ventajas y desventajas.
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Ventajas
            th Desventajas
        tbody
          tr
            td.p-0
              figure
                img(src="@/assets/template/tema-5-24.png", alt="Texto que describa la imagen").w-100
            td.p-0
              figure
                img(src="@/assets/template/tema-5-25.png", alt="Texto que describa la imagen").w-100
          tr
            td Es un método económico que no requiere de usuarios presentes.
            td Es indispensable contar con un grupo de expertos para llevar a cabo evaluaciones correctas y pertinentes.
          tr
            td Se pueden aplicar desde etapas tempranas, incluso en prototipos para detectar posibles problemas.
            td No hay evaluación de usabilidad, por usuarios.

    .titulo-segundo.mt-5
      #t_5_2.h4 5.2  Flujogramas
    p.mt-4 Los flujogramas son diagramas de representación gráfica de un proceso, en el cual se muestran el orden y estructura del mismo. Son muy importantes en la elaboración de guiones de productos multimedia ya que permiten una proyección de la estructura y la organización del producto o aplicación; la relación de todos sus elementos facilita comprender cada una de las partes y sus componentes, de acuerdo con el grado de importancia y jerarquía que poseen. 
    figure.mt-4
      img(src="@/assets/template/tema-5-25.svg", alt="Texto que describa la imagen").w-100
    p.mt-4 Existen diferentes tipos de flujogramas, se encuentran en formato vertical, horizontal, panorámico, arquitectónico y de bloques. 
    p.mt-3 Las principales ventajas de este tipo de elementos es que ayudan a conectar diversas ideas en torno a la productividad del proyecto a ejecutar, al ser un elemento tan visual, es de mejor entendimiento para el equipo de producción. 
    p.mt-3 En su realización se van presentando los problemas y oportunidades que surgen a partir del proceso de observación.
    p.mt-3 Los flujogramas utilizan símbolos y convenciones para su mayor entendimiento y uso.
    p.mt-3 Símbolos frecuentemente utilizados:
    .tabla-a.color-acento-contenido.mt-4
      table
        caption.mt-3 Referencia Sena
        thead
          tr
            th(colspan='3').py-3
              .h3.m-0 Simbología de un flujograma
          tr.bg-naranja
            th Símbolo 
            th Nombre 
            th Uso
        tbody
          tr.bg-gris
            td.py-4
              figure.text-center
                img(src="@/assets/template/tema-5-26.svg", alt="Texto que describa la imagen").w-50
            td.text-center Línea de flujo
            td Línea de flujo	La flecha sirve para indicar la próxima indicación a seguir.
          tr
            td.py-4
              figure.text-center
                img(src="@/assets/template/tema-5-27.svg", alt="Texto que describa la imagen").w-50
            td.text-center Inicio y final
            td Esta forma es usada para indicar el inicio y final de un proceso.
          tr.bg-gris
            td.py-4
              figure.text-center
                img(src="@/assets/template/tema-5-28.svg", alt="Texto que describa la imagen").w-50
            td.text-center Entrada y salida
            td Representa la información de entrada o salida del sistema.
          tr
            td.py-4
              figure.text-center
                img(src="@/assets/template/tema-5-29.svg", alt="Texto que describa la imagen").w-50
            td.text-center Proceso
            td Representa cualquier tipo de acción u operación.
          tr.bg-gris
            td.py-4
              figure.text-center
                img(src="@/assets/template/tema-5-30.svg", alt="Texto que describa la imagen").w-50
            td.text-center Decisión
            td Sirve para evaluar cualquier tipo de información con un criterio verdadero o falso.
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
