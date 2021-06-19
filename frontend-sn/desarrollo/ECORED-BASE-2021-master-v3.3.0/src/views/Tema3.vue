<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.mb-5
        .titulo-principal__numero
          span 3
        h1 Modelado 3D
    figure.mt-4
      img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mt-5 En este apartado se analizarán los conceptos básicos del modelado tridimensional (3D), abordando los diferentes tipos de herramientas y operaciones empleadas para crear un modelo digital; entre estas se encuentran: redondeo, cavidad, conicidad, combinación de bordes, combinación de caras, chaflán, simetría de operaciones, molduras, etc. 
    .row.mt-4
      .col-12.col-lg-9
        p Las herramientas para crear un modelo 3D son clases de objetos que tienen un padre definido. Estas se encuentran asociadas a uno o más padres y el orden de su creación y modificación se mantiene dentro de un historial. Los padres pueden ser objetos geométricos o variables numéricas. 
        p.mt-3 Las características incluyen primitivas, superficies y/o sólidos y ciertos objetos de estructura de alambre (como curvas y curvas asociativas de corte y puente). Por ejemplo, algunas características comunes incluyen bloques, cilindros, conos, esferas, cuerpos extruidos y cuerpos giratorios. #[strong (Siemens, 2020)]
        p.mt-1 En NX, el modelado se realiza exclusivamente en la aplicación «Modeling», tal y como se muestra en el siguiente gráfico interactivo
        p.mt-3 En NX, el modelado se realiza exclusivamente en la aplicación «Modeling», tal y como se muestra en el siguiente gráfico interactivo
      .col-3.d-none.d-lg-block
        figure.mt-4
          img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen")
    .h4.mt-5 Entorno modelado.
    figure.mt-4
      img(src="@/assets/template/tema-3-3.png", alt="Texto que describa la imagen")
    p.mt-3 Nota: Autores muestran entorno modela de pieza. Adaptado de Documentación didáctica / para cursos de formación.  #[strong (Siemens, 2020)]
    .row.mb-5
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            .h5 Zona de trabajo
          p En esta área se encuentra la zona de trabajo tridimensional. 
          li 
            .lista-ol--cuadro__vineta
              span 2
            .h5 Zona de boceto
          p Aquí se encuentran todas las herramientas necesarias para la creación de bocetos bidimensionales.
          figure.mt-4
            img(src="@/assets/template/tema-3-4.png", alt="Texto que describa la imagen").w-50
          p.mt-3 Nota. Tomado de #[strong Siemens (2020).]
          li 
            .lista-ol--cuadro__vineta
              span 3
            .h5 Comandos de modelado
          p Aquí se encuentran las herramientas para el modelado 3D. Estas facilitan, en primer lugar, crear modelos tridimensionales a partir de bocetos bidimensionales. Además, permite realizar operaciones con los modelos ya creados, por ejemplo, redondeando aristas. 
          figure.mt-4
            img(src="@/assets/template/tema-3-5.png", alt="Texto que describa la imagen")
    .h5.mt-5 Funciones de modelado
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="1. Extrusión y revolución")
        figure
          img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen")
        .row.mt-4
          .col-sm.mb-5.mb-sm-0
            ul.lista-ul
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-acento-botones.text-center
                  .col-11
                    p.mb-2 Extrusión: crea una figura 3D al extruir una sección o croquis contenido en un plano. 
              li.mb-0.d-block
                .row
                  .col-1.text-align-right.p-0
                    i.fas.fa-angle-right.color-acento-botones.text-center
                  .col-11
                    p.mb-2 Revolución: crea una figura en 3D al girar una sección o croquis.
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="2. Redondeos")
        p #[strong Redondeo de arista:] redondea las aristas en la intersección de las caras de un sólido o una superficie.
        figure.mt-3
          img(src="@/assets/template/tema-3-7.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="3. Chaflanes")
        p.mb-3 #[strong Chaflán:] crea una cara angular a partir de la selección de una arista de un sólido y se determinada por la distancia y un ángulo. 
        figure
          img(src="@/assets/template/tema-3-15.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="4. Espesor")
        p.mb-3 #[strong Comando Cáscara:] Elimina material a un cuerpo sólido, creando un vaciado o espesor de pared, abriendo las caras seleccionadas.
        figure
          img(src="@/assets/template/tema-3-8.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="5. Desmoldeo")
        p.mb-3 #[strong Comando desmoldeo:] Crea un ángulo de salida a una cara de un cuerpo sólido, facilitando el desmoldeo de piezas plásticas o fundidas.
        figure
          img(src="@/assets/template/tema-3-9.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="6. Agujeros y roscados")
        p.mb-3 Crea diferentes tipos de agujeros tales como: agujero simple, abocardado y avellanado seleccionando previamente el centro.z
        figure
          img(src="@/assets/template/tema-3-10.png", alt="Texto que describa la imagen").w-50
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="7. Figura de patrones")
        p.mb-3 #[strong Patrón:] crea una matriz circular o rectangular a partir de la selección una operación. Como se muestra en la figura
        figure
          img(src="@/assets/template/tema-3-11.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="8. Figura de simetría ")
        p.mb-3 #[strong Figura de simetría:] crea una copia simétrica de una serie de operaciones a partir de un plano de referencia.
        figure
          img(src="@/assets/template/tema-3-12.png", alt="Texto que describa la imagen")
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
      div(titulo="9. Geometría de referencia")
        p.mb-3 #[strong Comando plano datum:] la geometría de referencia son entidades que se pueden utilizar como base al construir otras entidades. Los Planos, ejes y sistemas de coordenadas ayudan a crear características en cilindros, conos, esferas y cuerpos sólidos giratorios que no tienen una superficie plana y también ayudan a crear características en ángulos distintos de los normales a las caras del sólido.
        figure
          img(src="@/assets/template/tema-3-13.png", alt="Texto que describa la imagen").w-50
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]      
      div(titulo="10. Aplicación de plano datum")
        p.mb-3 #[strong Comando plano datum:] la geometría de referencia son entidades que se pueden utilizar como base al construir otras entidades. Los Planos, ejes y sistemas de coordenadas ayudan a crear características en cilindros, conos, esferas y cuerpos sólidos giratorios que no tienen una superficie plana y también ayudan a crear características en ángulos distintos de los normales a las caras del sólido.
        figure
          img(src="@/assets/template/tema-3-14.png", alt="Texto que describa la imagen").w-50
        p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
    .row.mb-5
      .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 4
            .h5 Zona de trabajo
          p Esta área permite visualizar el historial del modelo para hacer un seguimiento de los pasos de diseño realizados. Además, en ella se muestran también los distintos componentes individuales de un determinado módulo.
          figure
            img(src="@/assets/template/tema-3-16.png", alt="Texto que describa la imagen").w-25
          p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
          li 
            .lista-ol--cuadro__vineta
              span 5
            .h5 Barra de recursos
          p Esta área es la barra de recursos
          figure
            img(src="@/assets/template/tema-3-17.png", alt="Texto que describa la imagen").w-25
          p.mt-3 Nota. Tomado de #[strong Siemens (2020)]
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
}
</script>

<style lang="sass" scoped></style>
