<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Componentes electrónicos
    figure
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-9
        p El desarrollo de aplicaciones móviles no implica únicamente la codificación o programación, también requiere de analizar y entender las necesidades del cliente, crear modelos que hagan más fácil el proceso de desarrollo, la planeación del proyecto, y otras actividades involucradas. 
        p.mt-3 La aplicación de las técnicas de elicitar (transferir información) requisitos, conducen a identificar las fuentes de los mismos con los interesados en el sistema (stakeholders). Estas actividades sin embargo pueden derivar en que el cliente o los usuarios excedan lo que realmente necesitan, o tal vez sin considerar las limitantes a nivel de hardware, software, presupuesto, tiempo o requisitos, por lo tanto es necesario conocer con todo nivel de detalle lo que se requiere alcanzar y las necesidades reales a cubrir. De esta forma se deben detallar y modificar los requerimientos básicos elicitados. lo cual se logra en un consenso de las partes involucradas como lo indica la siguiente figura 1 y da como resultados la elaboración de un documento en el cual se debe responder: 
        p ¿Qué es lo prioritario?, ¿qué es lo esencial? y ¿para cuándo se requiere? Esto se especifica de algún modo y luego se revisa o válida para garantizar la coincidencia en la comprensión que tiene el analista del problema y los demás participantes.
      .col-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 1
        p.mt-2 Esquema de acuerdos
    .row.mt-5
      .col-8.col-lg-6.offset-2.offset-lg-3
        figure
          img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
    p.mt-5 ¿Qué es lo prioritario?, ¿qué es lo esencial? y ¿para cuándo se requiere? Esto se especifica de algún modo y luego se revisa o válida para garantizar la coincidencia en la comprensión que tiene el analista del problema y los demás participantes.
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido.mb-0
          h5.mb-0 Tabla 1
        p.px-3 Preguntas de análisis de requisitos para aplicaciones móviles.
    .tabla-b.color-acento-botones.mt-5
      table
        caption Referencia Nota. Preguntas modeladoras, SENA (2021).
        tr.text-center
          th.bg-acento-botones Aspecto
          td.bg-acento-botones.font-weight-bold Pregunta modeladora
        tr
          th Aspecto físico o de Hardware
          td 
            p ¿En qué tipo de dispositivos la app debe funcionar? Móvil, Tablet, Smart watch, etc.
            p ¿Qué tipo de app es una mejor solución?: nativa, web o híbrida
            p En las apps nativas, ¿qué sistema operativo se empleará? Android, IOS, Windows Phone, etc. 
            p En las Web App, ¿qué navegadores y versiones deberán soportar las funcionalidades?
            p ¿A cuántos usuarios simultáneamente debe atender el sistema?
            p ¿Hay restricciones de nivel de acceso a Internet (ancho de banda o consumo) o aspectos de seguridad?
        tr
          th Interface de usuario
          td 
            p ¿Las entradas de información es proveída por los usuarios o existen otras fuentes, cuáles? 
            p ¿La salida o consumo de información intervienen a uno o a más sistemas?
            p ¿Hay alguna forma preestablecida en que deben formatearse los datos?
            p ¿Existe alguna aplicación similar que sirva de referencia para su proyecto?
        tr
          th Aspectos humanos
          td 
            p ¿Qué tipo de población usará la app?
            p ¿Existen varios tipos de usuario?
            p ¿Qué tipo de entrenamiento necesitará cada tipo de usuario?
    figure.mt-5
      img(src="@/assets/template/tema-1-4.png", alt="Texto que describa la imagen")
    p.mt-5 Cuando un requisito o conjunto de ellos hace parte de todo un ecosistema tecnológico donde intervienen diferentes tipos de aplicaciones (web, de escritorio, móvil, interacción con otros sistemas de proveedores, clientes o asociados), como, por ejemplo, los sistemas bancarios, que tienen app móvil, aplicación web, aplicación de terminal escritorio, aplicaciones portales para asociados etc. En un escenario así, las historias de usuario no siempre dan una visión completa de la complejidad del problema.  
    .row.mt-4
      .col-11
        p Estos sistemas generalmente tienen lo que denominaban “Las Reglas del Negocio” o “Conjunto de Reglas de Negocio” las cuales describe las políticas, operaciones, normas, definiciones y restricciones presentes en una organización y que los sistemas información o aplicación deben considerar porque son las que permiten alcanzar los objetivos misionales del cliente. En ocasiones hasta se requiere un glosario de términos propios del negocio para poder especificarlos. 
      .col-1.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-8.offset-2
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30
          p Un ejemplo de regla de negocio: Un cliente al que se factura más de 10.000 al año es un cliente de tipo A, los clientes de tipo A se les aplica un descuento del 10% en pedidos superiores a 3.000.
    .tabla-a.color-primario.mt-5 
      table
        thead
          tr
            th Documento de especificaciones requisitos
            th Plantilla de Casos de uso
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-6.svg", alt="Texto que describa la imagen")
               
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
          tr
            td
              p.px-4 Permite identificar el objetivo general de cada requerimiento sin abordar demasiados detalles técnicos ni de reglas de negocio que se presenten en la operación, es una base para estimar costos y tiempos.
              p.mt-3.px-4 Se puede encontrar un formato de ejemplo, que es a su vez, una guía de cómo crear o adaptar.
              a.anexo.mb-4.mb-lg-0(href="https://docs.google.com/document/d/1jJtmIqcsEKfHeKp9dcZjQDYMjEx84t8x/edit" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://docs.google.com/document/d/1jJtmIqcsEKfHeKp9dcZjQDYMjEx84t8x/edit 
            td
              p.mt-2.px-4 Alguno de los requerimientos especificados definidos el documento de especificación de requisitos puede necesitar un nivel de detalle técnico superior, por ejemplo, al definir procesos síncronos o asíncronos de operación del sistema informático o casos particulares de operación, donde pueden intervenir reglas de negocio.  A continuación se puede encontrar un ejemplo o guía, para que se pueda adaptar a las necesidades del proyecto. 
              a.anexo.mb-4.mb-lg-0(href="https://docs.google.com/document/d/1_MBbEhXje0XSfFJWiRCpWHRRoIPcsyRo/edit#" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[strong Enlace web] https://docs.google.com/document/d/1_MBbEhXje0XSfFJWiRCpWHRRoIPcsyRo/edit# 
    .row.mt-5
      .col-8.offset-2
        .cajon.color-acento-botones.p-4.bg-acento-botones-op30
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-12.col-lg-9.align-self-center
              p Como se puede observar los requerimientos de una aplicación móvil para la mayoría de los casos están cubiertos por técnica como la elaboración de historias de usuario, sin embargo cuando la aplicación móvil pertenece a un ecosistemas de solución tecnológica más compleja, el proceso requiere algún artefacto que ayude a identificar y validar los requisitos.

    

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
