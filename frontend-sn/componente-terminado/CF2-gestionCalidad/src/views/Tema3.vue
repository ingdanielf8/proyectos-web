<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Riesgos
    p.mt-5 La definición de riesgos, según la Real Academia Española de la lengua RAE, toma como raíz etimológica la palabra “risco”, por el peligro que representa; se trata de contingencia o proximidad de daño.
    figure.mt-5
      img(src="@/assets/template/tema-3-1.png", alt="Texto que describa la imagen")
    p.mt-5 Aplica para muchos aspectos y áreas de la vida, dando como resultado varios tipos de riesgo, como:
    .row.tarjeta.fondo-mapa.p-lg-5.p-3.pb-5.bg-rosado.mt-5
      Botones(data-aos="fade-down")
    p.mt-5 Con base en lo anterior, se muestra a continuación la matriz de riesgos a aplicar:
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 1
      span Matriz de Riesgos
    .tabla-a.color-acento-botones.mt-5(data-aos="flip-up")
      table
        thead(style="border: 0px solid")
          tr.bg-naranja
            th(colspan='6').borde-azul 
              .h4.py-2 PROBABILIDAD
        tbody
          tr
            td.text-center.bg-gris.borde-azul
              .h4 CATEGORÍA 
            td.borde-azul(style="vertical-align:baseline").p-4.bg-rosa-claro
              .h4 Frecuente:
              p.mt-3 Probable que ocurra inmediatamente o en un corto periodo de tiempo.
            td.borde-azul(style="vertical-align:baseline").p-4.bg-rosa-claro
              .h4 Probable:
              p.mt-3 Muy probable de ocurrir en el tiempo.
            td.borde-azul(style="vertical-align:baseline").p-4.bg-rosa-claro
              .h4 Ocasional:
              p.mt-3 Es probable que ocurra.
            td.borde-azul(style="vertical-align:baseline").p-4.bg-rosa-claro
              .h4 Raro:
              p.mt-3 No es probable que ocurra, pero sí es posible.
            td.borde-azul(style="vertical-align:baseline").p-4.bg-rosa-claro 
              .h4 Raro:
              p.mt-3 No es probable que ocurra, pero sí es posible.
          tr
            td(style="vertical-align:baseline").p-4.bg-naranja.borde-azul
              .h4 Catastrófico:
              p.mt-3 Puede resultar en una fatalidad. 
            td.text-center.bg-rojo-fuerte.borde-azul 
              .h4.font-30 E
            td.text-center.bg-rojo-fuerte.borde-azul
              .h4.font-30 E
            td.text-center.borde-azul.bg-rosado-fuerte
              .h4.font-30 H
            td.text-center.borde-azul.bg-rosado-fuerte
              .h4.font-30 H
            td.text-center.borde-azul.bg-amarillo
              .h4.font-30 M
          tr
            td(style="vertical-align:baseline").p-4.bg-naranja.borde-azul
              .h4 Crítico:
              p.mt-3 Puede causar lesión severa, daño significativo a la propiedad, pérdida financiera y/o pérdida de reputación para la empresa.
            td.text-center.borde-azul.bg-rojo-fuerte 
              .h4.font-30 E
            td.text-center.borde-azul.bg-rosado-fuerte
              .h4.font-30 H
            td.text-center.borde-azul.bg-rosado-fuerte
              .h4.font-30 H
            td.text-center.borde-azul.bg-amarillo
              .h4.font-30 M
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
          tr
            td(style="vertical-align:baseline").p-4.bg-naranja.borde-azul
              .h4 Marginal:
              p.mt-3 Puede causar lesión menor, enfermedad, daño a la propiedad, pérdida financiera y/o pérdida para la reputación de la empresa.
            td.text-center.borde-azul.bg-rosado-fuerte 
              .h4.font-30 H
            td.text-center.borde-azul.bg-amarillo
              .h4.font-30 M
            td.text-center.borde-azul.bg-amarillo
              .h4.font-30 M
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L  
          tr
            td(style="vertical-align:baseline").p-4.bg-naranja.borde-azul
              .h4 Mínima:
              p.mt-3 Peligro que representa una amenaza mínima a la seguridad, salud y bienestar personal; es trivial.
            td.text-center.borde-azul.bg-amarillo 
              .h4.font-30 M
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L       
    .tabla-a.color-acento-botones.mt-5(data-aos="flip-up")
      table        
        tbody
          tr
            td.text-center.bg-gris.borde-azul
              .h4  
            td.borde-azul(colspan='2').p-4.bg-naranja.text-center
              .h4 DEFINICIONES DE RIESGO
            td.borde-azul(colspan='3').p-4.bg-naranja
              .h5.mb-0 Muchos eventos, sin planificación adecuada, pueden tener niveles de riesgo no-razonables. Sin embargo, al aplicar las estrategias de manejo de riesgos, se pueden reducir hasta un nivel aceptable. 
          tr
            td.text-center.borde-azul.bg-rojo-fuerte 
              .h4.font-30 E
            td.borde-azul(colspan='2').p-4.bg-rosa-claro.text-center
              .h5.mb-0 Extremadamente riesgoso
            td.borde-azul(colspan='3').p-4.bg-rosa-claro
              p.mb-0 Las actividades en esta categoría contienen niveles inaceptables de riesgo, incluyendo lesiones críticas y catastróficas, que son altamente probables de ocurrir. Las organizaciones deben considerar si deben eliminar el riesgo o modificar las actividades que todavía tienen una “E” después de aplicar todas las estrategias razonables para el manejo de riesgos.
          tr
            td.text-center.borde-azul.bg-rosado-fuerte 
              .h4.font-30 H
            td.borde-azul(colspan='2').p-4.bg-rosa-claro.text-center
              .h5.mb-0 Alto riesgo
            td.borde-azul(colspan='3').p-4.bg-rosa-claro
              p.mb-0 Las actividades en esta categoría contienen niveles inaceptables de riesgo, incluyendo lesiones críticas y catastróficas, que son altamente probables de ocurrir. Las organizaciones deben considerar si deben eliminar el riesgo o modificar las actividades que todavía tienen una “E” después de aplicar todas las estrategias razonables para el manejo de riesgos.
          tr
            td.text-center.borde-azul.bg-amarillo 
              .h4.font-30 M
            td.borde-azul(colspan='2').p-4.bg-rosa-claro.text-center
              .h5.mb-0 Riesgo moderado
            td.borde-azul(colspan='3').p-4.bg-rosa-claro
              p.mb-0 Las actividades en esta categoría contienen niveles inaceptables de riesgo, incluyendo lesiones críticas y catastróficas, que son altamente probables de ocurrir. Las organizaciones deben considerar si deben eliminar el riesgo o modificar las actividades que todavía tienen una “E” después de aplicar todas las estrategias razonables para el manejo de riesgos.
          tr
            td.text-center.borde-azul.bg-verde
              .h4.font-30 L
            td.borde-azul(colspan='2').p-4.bg-rosa-claro.text-center
              .h5.mb-0 Bajo riesgo
            td.borde-azul(colspan='3').p-4.bg-rosa-claro
              p.mb-0 Las actividades en esta categoría contienen niveles inaceptables de riesgo, incluyendo lesiones críticas y catastróficas, que son altamente probables de ocurrir. Las organizaciones deben considerar si deben eliminar el riesgo o modificar las actividades que todavía tienen una “E” después de aplicar todas las estrategias razonables para el manejo de riesgos.
    .titulo-segundo.mt-5
      #t_3_1.h2 3.1  Benchmarking
    .bloque-texto-a.color-secundario.p-4.p-md-5.mt-5(data-aos="fade") 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/template/tema-3-5.png", alt="Texto que describa la imagen")
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p Todas las organizaciones deben hacer un análisis de contexto que contenga el estudio interno y el estudio externo de lo que se va a desarrollar en la empresa. Este análisis debe ser íntegro y desinteresado ya que puede revelar aspectos importantes para la empresa, dejando de lado cualquier tipo de prejuicios que puedan tener y/o qué enfoque de mala manera lo que se busca hacer, que es conocer dónde se encuentra la empresa, para saber hacia dónde se debe dirigir. Muchas empresas piensan que hacen análisis de contexto, pero no es así realmente por lo que se acaba de comentar y se pierde el trabajo que se haya hecho porque se hizo mal enfocado (Análisis del contexto organizacional, 2016).
    .titulo-segundo.mt-5
      #t_3_2.h2 3.2  Tipos de riesgo empresarial
    p.mt-5 Se trata, en esencia, de circunstancias, sucesos o eventos adversos que impiden el normal desarrollo de las actividades de una empresa y, en general, tienen repercusiones económicas para sus responsables. Se dividen en diferentes categorías, como se menciona a continuación:

    .row.mt-5
      .col-lg-4.position-relative
        figure.position-absolute.px-3(style="bottom:4%")
          img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen")
      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up").bg-rojo-claro.rounded-15.pb-5
          img(src="@/assets/template/tema-3-3.svg", alt="Imagen decorativa").w-50.margin-0-auto.my-5
          .h4.text-center Riesgos externos 
          .h4.mt-1.text-center o sistémicos
          .text.p-lg-3.p-4.borde-rojo-5.rounded-15
            .row.px-lg-3.mb-lg-2
              p.h3 Riesgos externos o sistémicos
              p Riesgos que no están dentro de la posibilidad del manejo de la empresa, ya que están relacionados con el manejo que se da en el mercado en que se maneja la empresa (Westreicher, 2021). De igual forma, las crisis económicas, de guerra, de salud, accidentes o desastres naturales pueden afectar todo el sistema comercial, dando como resultado riesgos para la empresa. 

      .col-lg-4
        .nav-holder.align-items-center(data-aos="flip-up").bg-naranja-claro.rounded-15.pb-5.color2
          img(src="@/assets/template/tema-3-4.svg", alt="Imagen decorativa").w-50.margin-0-auto.my-5
          .h4.text-center Riesgos internos 
          .h4.mt-1.text-center o no sistémicos
          .text.p-lg-3.p-4.borde-amarillo-5.rounded-15
            .row.px-lg-3.mb-lg-2
              p.h3 Riesgos internos o no sistémicos
              p Son los riesgos inherentes al manejo interno de la organización; como las decisiones acertadas, o no, por parte de la gerencia general, que deriven en pérdidas para la empresa (Westreicher, 2021). También se pueden definir como el resultado del manejo financiero de la misma, lo que significa que quien está fallando es la compañía y no el entorno.
      

</template>

<script>
import Botones from '../components/Botones.vue'
export default {
  name: 'Tema3',
  components: {
    Botones,
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
