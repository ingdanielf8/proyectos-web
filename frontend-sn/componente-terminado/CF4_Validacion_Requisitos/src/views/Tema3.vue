<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 3
      .h3 Herramientas para la gestión de requisitos
    .row
      .col-12.col-md-8.px-4
        p.mt-4 En la actualidad, existe una variedad de herramientas para ser utilizadas específicamente en la gestión de requisitos, la utilización de estas ayuda a mejorar la calidad del desarrollo de un proyecto y permite un mayor control en el mantenimiento previniendo posibles errores durante la ejecución del proyecto (Sevilla, 2021).
        p.mt-4 Las herramientas de gestión de requisitos variarán según las metodologías de proyecto y los objetivos, la manera en la cual se aborden los requisitos también dependerá según la metodología. Por ejemplo, algunos equipos usan otra palabra para requisitos como “historias de usuarios”, “requisitos de productos” o, simplemente, “características”.
        p.mt-4 Existen herramientas básicas de requerimientos y herramientas complejas, a reglón seguido se explican:
      .col-4.d-none.d-md-block
        figure.mb-5.px-4
          img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center(style="z-index:900;")
            img(src='@/assets/template/tema-3-2.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.bg-verde-claro.rounded
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              p.mt-3 #[strong Herramientas básicas:] se manejan en la planeación de gestión de requisitos muy básica y se pueden utilizar las hojas de cálculo, o una plantilla de documento en Word; es difícil su utilización cuando se trata de actualización con varias personas y el manejo de las versiones de los documentos. 
    .row.mt-2
      .col-12
        .row.py-2
          .col-2.col-lg-1.offset-1.align-self-center.justify-content-center(style="z-index:900;")
            img(src='@/assets/template/tema-3-3.svg', alt='', style='margin-right: -100px').w-100
          .col-8.py-3.bg-verde-claro.rounded
            .col-sm.mb-5.mb-sm-0.mt-2.mx-5
              p.mt-3 #[strong Herramientas complejas:] para una planificación de gestión de requisitos más compleja, se necesita un sistema de software completo para administrar las relaciones entre los requisitos, analizar el impacto de cualquier cambio, administrar las aprobaciones y demás aspectos. 
    p.mt-5 De acuerdo con el mismo autor, las herramientas de gestión de requisitos se caracterizan por las siguientes propiedades:
    .row.mt-5
      .col-10.px-5.py-4.offset-1.bg-gris.rounded
        p ● Gestión de requisitos basados en modelos de información como por ejemplo casos de usos o historias de usuario. 
        p.mt-1 ● Organización de requisitos: es fácil agrupar el conjunto de requisitos y determinar su orden.
        p.mt-1 ● Acceso y gestión multiusuario: múltiples personas pueden participar en los procesos de construcción o modificación de requisitos.
        p.mt-1 ● Gestión de la trazabilidad: se puede ver a nivel histórico los cambios realizados en los requisitos con su marca de tiempo y usuarios involucrados.
    p.mt-5 Las siguientes herramientas principalmente ayuda a documentar, analizar, buscar, priorizar y trazar los requisitos:
    .row.mt-4
      .col-10.offset-1
        .tabla-a.mb-5 
        table
          caption Tabla 2  - Herramientas de gestión de requisitos |  Nota: Tomada de Sevilla (2021).
          thead.bg-amarillo
            tr.text-center
              th Requirements Management Tool
              th Company
              th URL
          tbody
            tr.bg-gris-claro
              th IBM Rational DOORS
              td IBM Rational
              th.ellipsis
                a.mt-1(href="ibm.com/es-es/products/requirements-management") ibm.com/es-es/products/requirements-management
            tr
              th Visure Requirements
              td Visure Solutions
              th.ellipsis 
                a.mt-1(href="visuresolutions.com/es/herramienta-ingeniera-requisitos") visuresolutions.com/es/herramienta-ingeniera-requisitos
            tr.bg-gris-claro
              th Reqtify
              td Dassault Systèmes
              th 
                a.mt-1(href="claytex.com/products/reqtify") claytex.com/products/reqtify
            tr
              th Jama
              td Jama Software
              th.ellipsis 
                a.mt-1(href="jamasoftware.com") jamasoftware.com
            tr.bg-gris-claro
              th Accept 360 
              td Accept Software 
              th.ellipsis 
                a.mt-1(href="technologyevaluation.com/solutions/17078/accept360") technologyevaluation.com/solutions/17078/accept360
            tr
              th Gatherspace
              td Gatherspace
              th.ellipsis 
                a.mt-1(href="gatherspace.com/project-management-software-solutions") gatherspace.com/project-management-software-solutions
            tr.bg-gris-claro
              th RequisitePro
              td IBM Rational
              th.ellipsis 
                a.mt-1(href="ibm.com/support/pages/rational-requisitepro-713") ibm.com/support/pages/rational-requisitepro-713

    .row.mt-5
      p La norma ISO 24766 (Information Technology – Guide for Requirements Tool Capabilites) ayuda a seleccionar una herramienta adecuada de gestión de requisitos, pues la misma proporciona una orientación sobre los aportes de estas herramientas.            
      p.mt-4 Aparte de las herramientas nombradas anteriormente, existen otras entre las que se encuentran las libres y comerciales; a continuación, se indican las más conocidas.
    TabsB.mt-5
      .py-4.py-md-5(titulo="Herramientas comerciales" :icono="require('@/assets/template/tema-3-10.svg')")
        .row.mt-4
          p Actualmente, se usan distintas herramientas de uso comercial que cubren las necesidades elementales en la gestión de requisitos. Algunas de estas son:
        .tabla-a.mb-5 
        table
          tbody
            tr.bg-gris-claro
              td
                .row
                  .col-12.text-center 
                    figure.justify-content-center
                      img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen").w-25
              td 
                .row
                  .col-10.offset-1.justify-content-center
                    figure
                      img(src="@/assets/template/tema-3-5.svg", alt="Texto que describa la imagen").w-50
              td
                .row
                  .col-12.text-center
                    figure.justify-content-center
                      img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen").w-50
            tr.bg-gris-claro
              td.text-center.px-4 Aplicación de gestión de requisitos para optimizar la comunicación la colaboración y la verificación de requisitos.
              td.text-center.px-4 Herramienta de administración de requisitos que permite crear y compartir basado en documentos potenciados.
              td.text-center.px-4.py-5 Herramienta de administración de requisitos que permite visibilidad y control.
      .py-4.py-md-5(titulo="Herramientas libres" :icono="require('@/assets/template/tema-3-11.svg')")
        table
          tbody
            tr.bg-gris-claro
              td
                .row
                  .col-12.text-center 
                    figure.justify-content-center
                      img(src="@/assets/template/tema-3-7.svg", alt="Texto que describa la imagen").w-50
              td 
                .row
                  .col-10.offset-1.justify-content-center
                    figure
                      img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen").w-50
              td
                .row
                  .col-12.text-center
                    figure.justify-content-center
                      img(src="@/assets/template/tema-3-9.svg", alt="Texto que describa la imagen").w-25
            tr.bg-gris-claro
              td.text-center.px-4 Herramienta de requisitos automatizada.
              td.text-center.px-4 Totalmente desarrollada para la elicitación de requisitos.
              td.text-center.px-4.py-5 Permite la descripción avanzada de diversos tipos de requisitos y garantiza la trazabilidad entre todos los documentos relacionados con la ingeniería de requisitos (funcionalidades, requisitos, casos de uso, casos de prueba).
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.justify-content-center
  text-align: -webkit-center
.bg-gris
  background-color: #E3EDF8
</style>
