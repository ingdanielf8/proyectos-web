<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos del sistema
    .row
      .col-12.col-md-8.align-self-center
        p Una forma eficiente de crear un modelo en 3D fácil de editar o modificar las características es a partir de un boceto que contenga la información básica como cotas y restricciones geométricas en 2D.  
        p El croquis o boceto es una representación rápida realizada en 2D, con herramientas de dibujo como: líneas, arcos círculos y cotas, que sirve como base para modelar una pieza en 3D.
      .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen")
    .tabla-a.color-acento-botones.mt-5 
      table
        thead
          tr
            th Modelado paramétrico
            th Modelado sincrónico
        tbody
          tr
            td.p-0 
              figure
                img(src="@/assets/template/tema-1-2.png", alt="Texto que describa la imagen")
            td.p-0  
              figure
                img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
          tr
            td 
              p El modelado paramétrico facilita los cambios y ajustes en la creación de un gemelo digital en cualquier punto del ciclo de vida, disminuyendo errores, tiempos y costos en el desarrollo de un producto antes de su producción en masa.
            td 
              p La tecnología síncrona le permite crear rápidamente nuevos diseños conceptuales, realizar modificaciones en el modelo digital fácilmente y realizar actualizaciones simultáneas en componentes de un ensamblaje. Si se tiene que aplicar modificaciones en una pieza importada, utilizar estas herramientas agilizará y facilitará muchísimo el trabajo. 
              p.mt-3 Adaptado de #[strong Formacad (2021).]
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Interfaz
    p.mt-4 A continuación se presenta elementos básicos de la interfaz del programa NX.
    .tabla-a.color-secundario.mt-5 
      table
        thead
          tr
            th Interfaz gráfica del programa SIEMENS NX
            th Interfaz detallada
        tbody
          tr
            td.p-0 
              figure
                img(src="@/assets/template/tema-1-4.png", alt="Texto que describa la imagen")
            td.p-0  
              figure
                img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
          tr
            td 
              p En cuanto se inicia NX aparecerá la ventana de interfaz de bienvenida que le permite entre otras opciones:
              .row
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2  Acceder a la ayuda de NX
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Cambiar los valores predeterminados por el cliente y las preferencias
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Abrir un archivo existente
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Crear un archivo nuevo
              p.mt-3 Nota: Autores muestran el entorno inicial de la interface NX de SIEMENS. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.                    
            td 
              p Cuando se trabaja en cualquiera de las aplicaciones de NX, el sistema muestra la interfaz que aparece en la siguiente figura. 
              p.mt-3 Nota: Autores muestran el entorno inicial de la interface NX de SIEMENS. Adaptado de NX 12 for Engineering Design. #[strong (Ming, Wenjin , Amir, & Krishna, 2019).]
    .h3.mt-5 Panel de herramientas
    p.mt-5 Las diferentes herramientas de NX se agrupan dentro de una serie de aplicaciones, las cuales se pueden abrir desde el menú «Archivo» o desde la pestaña «Aplicaciones» #[strong (Alcrudo, 2021).]
    p.mt-4 Menú archivo y pestaña aplicaciones.
    figure.mt-4
      img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Adaptado del sistema CAD NX 12. Elaboración Sena.
    .h3.mt-5 Comandos
    p.mt-4 Para que sea más fácil de usar la interfaz de usuario, se puede adaptar la barra de herramientas y los menús usando la ventana de diálogo «Personalizar». Dispone de las siguientes opciones:
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Arrastrar los comandos de una colección lógica a otra.  
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Mostrar u ocultar los botones, los grupos, las galerías y los comandos de la barra de menú.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Mostrar u ocultar la barra de herramientas completa.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Crear sus propias fichas, grupos y galerías.
    p.mt-4 Personalización barra de herramientas
    figure.mt-4
      img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
    p.mt-4 Nota: Posibles personalizaciones o adaptaciones de las barras de herramientas en NX de SIEMENS. Adaptado de “Introducción a NX”, “2019”, recuperado de curso DI -VIRTCOM Siemens”.
    .h3.mt-5 Funcionalidades del mouse
    .row.mb-5
      .col-12
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD
          .row(numero="1" titulo="Botón central del mouse (MB2)")
            .col-6.col-lg-3.offset-3.offset-lg-0
              p #[strong Mouse: ] utilidades del botón central.
              figure
                img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              p El botón central del mouse (MB2) o el botón de desplazamiento se utilizan para Rotar el objeto presionando, sosteniendo y arrastrando. Si es un botón de desplazamiento, el objeto se puede acercar y alejar desplazándose. Al hacer clic en MB2, también se ejecutará el comando Aceptar si se abre alguna ventana emergente o cuadro de diálogo. 
              p.mt-3 Nota: Indicaciones de cómo usar el botón central del mouse en NX de SIEMENS. Adaptado de NX 12 for Engineering Design. #[strong (Ming, Wenjin , Amir, & Krishna, 2019).]
          .row(numero="2" titulo="Botón derecho del mouse (MB3)")
            .col-6.col-lg-3.offset-3.offset-lg-0
              figure
                img(src="@/assets/template/tema-1-9.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              p MB3 o el botón derecho del ratón se utiliza para acceder a los menús emergentes de la interfaz de usuario.
              p.mt-3 Nota: Autores muestran acceso rápido a menús emergentes. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
          .row(numero="3" titulo="Combinación de botones (Acercar / Alejar)")
            .col-6.col-lg-3.offset-3.offset-lg-0
              p Acercar / Alejar.
              figure
                img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              p #[strong Acercar / alejar:] esta tarea se realiza de las siguientes opciones:
              .row
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Mantenga presionados MB1 y MB2 simultáneamente y arrastre.  
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Mantenga presionado el botón Ctrl en el teclado y luego presione y arrastre el MB2.
              p.mt-3 Nota: Indicaciones de cómo usar el botón central del mouse en NX de SIEMENS. Adaptado de NX 12 for Engineering Design. #[strong (Ming, Wenjin , Amir, & Krishna, 2019).]
          .row(numero="4" titulo="Combinación de botones (Arrastre)")
            .col-6.col-lg-3.offset-3.offset-lg-0
              p Arrastre.
              figure
                img(src="@/assets/template/tema-1-11.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              p #[strong Arrastre: ] 
              .row
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Mantenga pulsados MB2 y MB3 simultáneamente y arrastre.
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-secundario.text-center
                        .col-11
                          p.mb-2 Presione y mantenga presionado el botón Mayús en el teclado y presione y arrastre el MB2 rápidamente y arrastre.
              p.mt-3 Nota: Indicaciones de cómo usar el botón central del mouse en NX de SIEMENS. Adaptado de NX 12 for Engineering Design. #[strong (Ming, Wenjin , Amir, & Krishna, 2019).]
    .h3.mt-4 Selección de geometría
    p.mt-5 Los componentes principales de la barra de selección son los que aparecen en la siguiente figura. Pase el mouse por encima de cada una de las zonas para tener mayor claridad.
    .h4.mt-4 Barra de sección
    figure.mt-3
      img(src="@/assets/template/tema-1-12.png" alt="Texto que describa la imagen")
    p.mt-4 Nota: Autores muestran barra de selección. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .row.mt-3
      .col-12.col-lg-8.align-self-center
        p Cuando se tiene excesiva geometría en una zona del modelo y es necesario seleccionar un objeto en concreto. Si al colocarse encima de múltiples objetos seleccionables y se espera dos segundos, el cursor cambiará a hacer clic derecho para abrir el listado de los objetos que se encuentran en esa área.
        p.mt-3 Nota: Autores muestran acceso al cuadro de dialogo de sección rápida. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure 
          img(src="@/assets/template/tema-1-13.png" alt="Texto que describa la imagen")
    .h3.mt-5 Modos de visualización
    p.mt-5 Para acceder a las diferentes formas de visualización se pueden realizar lo siguiente:
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Desde la pestaña vista > menú orientación
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Haciendo Clic derecho > Orientar vista
    p.mt-3 Mostrar y ocultar: esta herramienta permite visualizar objetos y ocultarlos cuando no se requieran.
    figure
      img(src="@/assets/template/tema-1-14.png" alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran acceso rápido a menús emergente de orientar vista. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    p.mt-3 Nota: Autores muestran comando mostrar y ocultar. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .h3.mt-5 Aplicaciones
    p.mt-4 Desde este menú se puede interactuar con los diferentes módulos de NX de acuerdo con la necesidad de diseño.
    .row
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Modelado
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Chapa
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Ensamble
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-secundario.text-center
              .col-11
                p.mb-2 Fabricación movimiento 
    figure
      img(src="@/assets/template/tema-1-15.png" alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran barra de comandos de aplicaciones. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    
    .titulo-segundo.mt-5
      #t_1_2.h4 Capas
    p.mt-4 Las capas son usadas para organizar diferentes tipos de información en un archivo, proporcionan una forma permanente de organizar y administrar la visibilidad y la capacidad de selección de los objetos. NX contienen 256 capas y para acceder puede hacer clic en el menú #[strong Ajuste de capa]  (Ctrl+L). (Ming, Wenjin , Amir, & Krishna, 2019) 
    p.mt-3 Con NX puede controlar si los objetos son visibles o seleccionables, a través de atributos definidos por el sistema, tales como el color, la fuente y el ancho que deben tener todos los objetos.
    p.mt-4 Cuadro de dialogo capa
    .row.mt-3
      .col-6.offset-3
        figure
          img(src="@/assets/template/tema-1-16.png" alt="Texto que describa la imagen")
    p.mt-3 Nota. Adaptado de #[strong SIEMENS NX (2021).]

    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Sistemas de coordinadas
    p.mt-5 Existen diferentes sistemas de coordenadas en NX, por lo general se utiliza un símbolo de tres ejes para identificarlas.
    TabsC.color-secundario.mt-5
      .py-3.py-md-4(titulo="Sistema de coordenadas absoluto")
        .row
          .col-8.col-lg-6.offset-2.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-17.png" alt="Texto que describa la imagen")
          .col-12.col-lg-6.mt-3.mt-lg-0
            p El sistema de coordenadas absoluto es el sistema desde el cual se hace referencia a todos los objetos. Es un sistema de coordenadas fijo que permite ubicar y orientar cada objeto en el espacio de modelado de NX 12. 
            p.mt-3 El sistema de coordenadas absoluto (o CSYS absoluto) también proporciona un marco de referencia común entre los archivos de pieza. Una posición absoluta en X = 1, Y = 1 y Z = 1 en un archivo de pieza es la misma ubicación en cualquier otro archivo de pieza.
            p.mt-3 La tríada de vista, por su parte, es sólo un indicador visual que representa la orientación del sistema de coordenadas absoluto del modelo.
            p.mt-3 Nota. Adaptado de #[strong SIEMENS NX (2021).]

      .py-3.py-md-4(titulo="Sistema de coordenadas de trabajo")
        .row
          .col-6.col-lg-4.offset-3.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-18.png" alt="Texto que describa la imagen")
          .col-12.col-lg-8.mt-3.mt-lg-0.align-self-center
            p El sistema de coordenadas de trabajo (WCS) es lo que utilizará para la construcción cuando desee determinar orientaciones y ángulos de características. Los ejes del WCS se denominan XC, YC y ZC. (La “C” significa “actual”). 
            p.mt-3 Es posible tener varios sistemas de coordenadas en un archivo de pieza, pero solo uno de ellos puede ser el sistema de coordenadas de trabajo.
            p.mt-3 Nota: Autores muestran coordenadas de trabajo (WCS). Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
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
