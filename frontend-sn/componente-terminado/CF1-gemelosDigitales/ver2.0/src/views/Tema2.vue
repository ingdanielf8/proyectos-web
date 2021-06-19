<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
      .titulo-principal__numero
        span 2
      h1 Croquizado en 2D
    .row  
      .col-12.col-lg-7
        p.mb-5 En este apartado se puede crear directamente un boceto en un plano en la aplicación Modelado. En la mayoría de los casos, el modelado inicia desde un boceto 2D y posteriormente, empleando las operaciones de Extrusión, Revolución o Barrido, se crea sólido. 
      .col-5.d-none.d-lg-block.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    SlyderB.mt-5(:datos="datosSlyder")
    p.mt-3
    p.mt-5
    .tabla-a.color-acento-botones.mt-5 
      table
        thead
          tr
            th Método 1 Croquis
            th Método 2 Comando croquisz
        tbody
          tr
            td.p-0 
              figure
                img(src="@/assets/template/tema-2-5.png", alt="Texto que describa la imagen")
            td.p-0  
              figure
                img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
          tr
            td 
              p El primer método crea el sketch en el entorno y la aplicación actuales.  
              p.mt-3 Para esto: 
              .row
                .col-sm.mb-5.mb-sm-0
                  ul.lista-ul
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-acento-botones.text-center
                        .col-11
                          p.mb-2  Elija Menú 
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-acento-botones.text-center
                        .col-11
                          p.mb-2 Insertar
                    li.mb-0.d-block
                      .row
                        .col-1.text-align-right.p-0
                          i.fas.fa-angle-right.color-acento-botones.text-center
                        .col-11
                          p.mb-2 Bosquejo
              p Nota: Autores muestran acceso al menú croquis. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
            td 
              p En este método puede crear sketch de la siguiente manera:
              p.mt-3 Nota: Autores muestran el comando de croquis. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    p.mt-5 En cualquier caso, aparecerá un cuadro de diálogo que le pedirá que defina el plano de croquis. La pantalla mostrará las opciones de boceto. Puede elegir el plano de boceto, la dirección de boceto y el tipo de plano para bocetar.
    .h4.mt-4 Crear croquis
    .row.mt-3
      .col-6.col-md-4
        figure
          img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen")
      .col-12.mt-3
        p La pantalla principal cambiará al entorno de dibujo. El plano XY se resalta como el plano predeterminado para el boceto. Esta es la ventana de croquis básica. 
        p.mt-3 También hay un entorno de tareas de croquis especial en NX 12 que muestra todas las herramientas de croquis en la ventana principal. Según Sham (2018) para acceder al entorno de croquis:
        .row
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-secundario.text-center
                  .col-11
                    p.mb-2 Haga clic en la opción «Más» en el área de la barra de herramientas de boceto directo. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-secundario.text-center
                  .col-11
                    p.mb-2 Haga clic en «Abrir» en el entorno de tareas de sketch como se muestra a continuación.
    .h4.mt-5 Abrir entorno de croquis
    figure
      img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran el entorno de tarea de croquis. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .h4.mt-5 Herramientas de dibujo y edición 2D 
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0.px-5
          figure
           img(src="@/assets/template/tema-2-9.svg", alt="Texto que describa la imagen")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            .h3 Esta barra de herramientas contiene comando para crear los tipos comunes de curvas y curvas spline, editar, extender, recortar, empalmar, etc. Cada tipo de curva tiene diferentes métodos de selección y métodos de creación. 
    .h4.mt-4 Comandos de dibujo
    figure.mt-4
      img(src="@/assets/template/tema-2-10.png", alt="Texto que describa la imagen")
    p.mt-4 Nota: Autores muestran comandos de dibujo. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .h4.mt-5 Comando de acotación y restricciones geométricas
    p.mt-4 Los grados de libertad se pueden eliminar dando dimensiones con entidades fijas como ejes, planos, el sistema de coordenadas o cualquier geometría sólida existente creada en el modelo. 
    .h5.mt-5 Restricciones dimensionales
    .row
      .col-12.col-md-9
        p Estas dimensiones pueden ser lineales, radiales, angulares, etc. Puede editar los valores dimensionales en cualquier momento durante el boceto haciendo doble clic en la dimensión.
        p.mt-3 Estas dimensiones pueden ser lineales, radiales, angulares, etc. Puede editar los valores dimensionales en cualquier momento durante el boceto haciendo doble clic en la dimensión.
      .col-3.d-none.d-md-block
        figure.mt-4
          img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen")
    figure.mt-4
      img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran comandos de acotado. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .row.mt-5
      .col-lg-8.offset-2
        .cajon.color-acento-contenido.p-4.mb-4
          .h5 Restricciones geométricas
          p Además de las restricciones dimensionales, se pueden dar algunas restricciones geométricas para eliminar los grados de libertad. Incluyen paralelos, perpendiculares, colineales, concéntricos, horizontales, verticales, de igual longitud, etc. 
          p.mt-3 El software tiene la capacidad de encontrar el conjunto de posibles restricciones para las entidades seleccionadas. Como ejemplo, se aplica una restricción a la línea en la imagen de abajo para que sea paralela al lado izquierdo del rectángulo (la línea originalmente formaba un ángulo con el rectángulo).
    .h4.mt-5 Tipos de restricciones geométricas.
    .row.mt-4
      .col-lg-8.offset-2
        figure.mt-4
          img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran los tipos de restricciones geométricas. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración propia.
    .h4.mt-5 Simetría de curvas y curva desfasada
    .h5.mt-4 Simetría de curva
    p.mt-3 Crea un patrón de simetría de una cadena de curvas sobre eje o línea central. 
    figure.mt-4
      img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran la aplicación del comando simetría de curva. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.
    .h5.mt-4 Curva desfasada
    p.mt-3 Crea un patrón de simetría de una cadena de curvas sobre eje o línea central. 
    figure.mt-4
      img(src="@/assets/template/tema-2-15.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran el comando curvo desfasada. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Revolución',
        texto:
          'Un boceto de NX 12 es un conjunto de curvas en cadenas creadas sobre en un plano de referencia y es empleada para crear un sólido. Estos dibujos en 2D representan los contornos geométricos de la parte. Al principio, estas curvas se dibujan en forma libre sin dimensiones exactas. Luego, a través de restricciones dimensionales y geométricas se define completamente el boceto. <br> <br> Una vez completado el boceto, hay diferentes formas de usarlos para generar piezas 3D. <br> <br> Nota: Autores muestran la operación de revolución. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.',
        imagen: require('@/assets/template/tema-2-2.svg'),
      },
      {
        titulo: 'Extrusión',
        texto:
          'Un boceto puede ser extruido. <br> <br> Nota: Autores muestran la operación de extrusión. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.',
        imagen: require('@/assets/template/tema-2-3.svg'),
      },
      {
        titulo: 'Barrido',
        texto:
          'Un boceto se puede Barrido a lo largo de una curva guía. <br> <br> Nota: Autores muestran la operación de barrido. Adaptado de “SIEMENS NX”, “2021”, “screenshot”. Elaboración Sena.',
        imagen: require('@/assets/template/tema-2-4.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
