<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Simple Present // Presente simple
    figure.mt-5
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-secundario.p-4.p-md-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La planificación es fundamental en una unidad productiva, se convierte en el análisis central para dirigir y proyectar las actividades de la organización y es por esta razón que en este componente formativo estudiaremos las características de un plan de negocio, su objetivo y componentes. Para esto se hace necesario conocer el concepto de plan de negocio:.

            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen").floating.w-75.margin-0-auto
    .titulo-segundo.mt-5
      #t_1_1.h2 1.1  Plan de negocio
    .row.mt-5.position-relative
      .col-6
        figure
          img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
      .col-8.align-self-center.bg-acento-botones.rounded-20.p-5.position-absolute(style="left: 33%")
        p Se considera una herramienta de proyección y evaluación de una empresa o unidad productiva, con el fin de identificar las oportunidades de negocio; este debe ser plasmado en un documento que describa los objetivos, las características y los componentes específicos de la unidad productiva. 
        p.mt-3 La iniciativa de la unidad productiva en aplicar una herramienta como esta, puede ser utilizada para proyectos nuevos dentro de las actividades o como iniciación de la unidad, esta planeación permitirá fijar metas o tareas que den paso una mejor oportunidad de negocio. Para su desarrollo será necesario evaluar todos los recursos de la unidad productiva. 
        p Muchas veces surge la pregunta: ¿Para qué sirve un plan de negocio? La respuesta a esta pregunta se encuentra en la siguiente infografía:   
    .row.mt-5.text-center.pb-5
      .h4 ¿Para qué sirve un plan de negocio?
    .row.mt-5
      .col-10.offset-1.py-5
        .row.mx-0.h-100.position-relative
          figure.z-index-2
            img(src="@/assets/template/test.png", alt="Texto que describa la imagen")
          .col-20.pt-5.px-0.position-absolute(style="top: 22%; left:5%; width: 16%").z-index-2
            figure
              <img src="@/assets/template/1.png" alt="Texto que describa la imagen" class="cursor-pointer" @click="toggleShowInfo1()">
          .col-20.pt-5.px-0.position-absolute(style="top: 22%; left:23.5%; width: 16%").z-index-2
            figure
              img(src="@/assets/template/2.png", alt="Texto que describa la imagen").cursor-pointer(@click="toggleShowInfo2()")
          .col-20.pt-5.px-0.position-absolute(style="top: 22%; left:42.5%; width: 16%").z-index-2
            figure
              img(src="@/assets/template/3.png", alt="Texto que describa la imagen").cursor-pointer(@click="toggleShowInfo3()")
          .col-20.pt-5.px-0.position-absolute(style="top: 22%; left:61%; width: 16%").z-index-2
            figure
              img(src="@/assets/template/4.png", alt="Texto que describa la imagen").cursor-pointer(@click="toggleShowInfo4()")
          .col-20.pt-5.px-0.position-absolute(style="top: 22%; left:79.5%; width: 16%").z-index-2
            figure
              img(src="@/assets/template/5.png", alt="Texto que describa la imagen").cursor-pointer(@click="toggleShowInfo5()")
          .col-20.pt-5.px-0.position-absolute(style="top: 60%; left:2.5%; width: 20%; height:75%").fondo-img-3.text-center.z-index-1.opacity-0(:class="{ 'opacity-1 ': (showInfo1==true)}")
            .h4.pt-5 Para:
            p.mt-2 Clasificar, focalizar, e investigar un proyecto
          .col-20.pt-1.px-0.position-absolute(style="top: -18%; left:21.5%; width: 20%; height:75%").fondo-img-2.text-center.z-index-1.opacity-0(:class="{ 'opacity-1 ': (showInfo2==true)}")
            .h4.pt-5 Para:
            p.mt-2 Clasificar, focalizar, e investigar un proyecto
          .col-20.pt-5.px-0.position-absolute(style="top: 60%; left:40.5%; width: 20%; height:75%").fondo-img-3.text-center.z-index-1.opacity-0(:class="{ 'opacity-1 ': (showInfo3==true)}")
            .h4.pt-5 Para:
            p.mt-2 Brindar adaptabilidad
          .col-20.pt-1.px-0.position-absolute(style="top: -18%; left:59%; width: 20%; height:75%").fondo-img-2.text-center.z-index-1.opacity-0(:class="{ 'opacity-1 ': (showInfo4==true)}")
            .h4.pt-5 Para:
            p.mt-2 Establecer créditos e inversiones
          .col-20.pt-5.px-0.position-absolute(style="top: 60%; left:77.5%; width: 20%; height:75%").fondo-img-3.text-center.z-index-1.opacity-0(:class="{ 'opacity-1 ': (showInfo5==true)}")
            .h4.pt-5 Para:
            p.mt-2 Identificar oportunidades
    Separador.mt-5
    .titulo-segundo.mt-5
      #t_1_2.h2 1.2  	Características del plan de negocios
    .row.mt-5
      .col-8
        p Toda unidad productiva en sus primeras etapas de consolidación y después de madurar en el mercado deben tener presente que el éxito y continuidad de su organización dependerá del control y supervisión que realice periódicamente, se debe implementar un plan de negocio para poder mantener una estabilidad y generar rendimientos positivos a lo largo del tiempo. 
        p.mt-3 Según lo anterior, se hace necesario conocer los aspectos de un plan de negocio y es fundamental ejecutar uno periódicamente en la unidad productiva. Para esto se deben conocer sus particularidades al momento de elaborar el plan. Entre estos aspectos se encuentran:
      .col-4
        figure
          img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen").floating
      .col-10.offset-1.mt-5
        .titulo-sexto.color-acento-contenido
          h5.text-small Figura 1
          p.text-small.italic Aspectos para la realización de un plan de negocio
    .row(style="margin-top: 15%")
      .col-2.text-center.ml-3.borde-azul-3.rounded-20.py-4.position-relative.zoom-in2
        figure.position-absolute(style="top: -120%; left:0%")
          img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
        .h4 Eficaz
        p.mt-3.text-small Tener toda la información más relevante de la empresa. 
      .col-2.text-center.mx-4.borde-azul-3.rounded-20.py-4.position-relative.zoom-in2
        figure.position-absolute(style="top: -120%; left:0%")
          img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
        .h4 Estructurado
        p.mt-3.text-small Ser simple y claro. 
      .col-2.text-center.mx-4.borde-azul-3.rounded-20.py-4.position-relative.zoom-in2
        figure.position-absolute(style="top: -120%; left:0%")
          img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
        .h4 Comprensible
        p.mt-3.text-small Escrito con claridad, vocabulario preciso y conceptos técnicos. 
      .col-2.text-center.mx-4.borde-azul-3.rounded-20.py-4.position-relative.zoom-in2
        figure.position-absolute(style="top: -120%; left:0%")
          img(src="@/assets/template/tema-1-9.png", alt="Texto que describa la imagen")
        .h4 Breve y conciso
        p.mt-3.text-small No puede ser extenso (de 20 a 30 páginas).
      .col-2.text-center.mx-4.borde-azul-3.rounded-20.py-4.position-relative.zoom-in2
        figure.position-absolute(style="top: -120%; left:0%")
          img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen")
        .h4 Presentación
        p.mt-3.text-small Facilidad para leer, interpretar y visualizar (imágenes, gráficos, tablas, etc.).
    figcaption.mt-3 Referencia Nota. SENA, (2021). 
    .row.mt-5
      .col-10.offset-1
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Flexibilidad")
            .col-3
              figure
                img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Están sujetos a cambios debido a la intervención de nuevos factores como inversionistas, socios, proveedores, etc.
          div(titulo="Hoja de ruta para la unidad productiva").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Deben servir como guía para la empresa en las actuaciones o decisiones.
          div(titulo="Resumen ejecutivo claro").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-13.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Debe ser fácil de entender para el lector y dejar una impresión general del proyecto, para esto es importante resaltar las necesidades, los objetivos, los datos y la información clave de la unidad productiva.
          div(titulo="Tener una perspectiva realista del mercado").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Se debe estudiar el mercado en el cual se va incursionar y es importante responder: ¿Quiénes son los compradores? y ¿Por qué lo comprarán? Es importante realizar un análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas) de esta forma se podrá identificar los potenciales consumidores, las ventajas y los puntos débiles que puede presentar el producto o servicio en el mercado.
              p.mt-3 Para identificar el mercado se debe tener presente:
              ul.lista-ul.mt-3
                li 
                  i.fas.fa-angle-right.naranja
                  | El tamaño, crecimiento y beneficios que ofrece.
                li 
                  i.fas.fa-angle-right.naranja
                  | La segmentación a la que está dirigida (niños, adultos, jóvenes).
                li 
                  i.fas.fa-angle-right.naranja
                  | Ubicación geográfica y distribución.
                li 
                  i.fas.fa-angle-right.naranja
                  | Identificación de competidores, sustitutos y complementarios.
                li 
                  i.fas.fa-angle-right.naranja
                  | Por último, definir los medios de investigación de audiencia.
          div(titulo="Integrar plan de ventas y marketing ").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Esta dependerá del análisis del mercado, donde se deberá buscar estrategias de ventas y marketing, de aquí radicará la utilización de estrategias promocionales como lo son “las cuatro P” que se caracteriza por potencializar el producto, el precio, la publicidad y los puntos de venta.
          div(titulo="Presentar indicadores financieros ").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Estas deben ir relacionadas a las estimaciones de ventas y marketing, desde la parte contable y financiera se podrá detallar los flujos de capital, la valoración de la inversión, las ganancias y pérdidas de esta proyección.
          div(titulo="Identificación del equipo de trabajo").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Se debe identificar el equipo directivo y de trabajo, detallando las funciones encaminadas a la administración, trayectoria del personal, la experiencia general, las áreas de gestión, control de calidad, entre otras.
          div(titulo="Claridad en el sistema de negocio y cronograma").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Es necesario describir todos los pasos para la fabricación del producto, la venta, el servicio prestado, etc. El cronograma es fundamental para llevar un ritmo de trabajo y cumplir con las actividades a tiempo, esto nos indicará el momento en que debe terminar e iniciar otra actividad.
          div(titulo="Financiamiento").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p Se deben analizar las fuentes de ingresos y crear estrategias de inversión o aportes de los socios, estos deberán explicar los márgenes de ganancias o riesgos de pérdidas. 
          div(titulo="Coherencia en la estructura y redacción del documento").row
            .col-3
              figure
                img(src="@/assets/template/tema-1-20.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9
              p El documento debe ser socializado, validado y estar sujeto a modificaciones de mejora. Su redacción debe ser sencilla y coherente.
    .titulo-segundo.mt-5
      #t_1_3.h2 1.3  	Objetivo del plan de negocio 
    .row.mt-5.position-relative
      .col-6
        figure
          img(src="@/assets/template/tema-1-21.png", alt="Texto que describa la imagen")
      .col-8.align-self-center.bg-acento-botones.rounded-20.px-5.position-absolute(style="left: 33%; padding-top: 9%; padding-bottom:9%")
        p El plan de negocio tiene como objetivo principal el poder definir e identificar la oportunidad de negocio, seguido a esto permitirá un estudio de mercado para posicionar los productos o servicios de la unidad productiva y, por último, permitirá conocer la viabilidad económica del proyecto. Es por esta razón que el plan de negocios es importante para cualquier socio de una empresa y tener clara la idea de negocio, su proyección, el retorno de sus ingresos para no perder la inversión. 
    .titulo-segundo.mt-5
      #t_1_4.h2 1.4  	Componentes de un plan de negocios 
    figure.mt-5
      img(src="@/assets/template/tema-1-22.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-secundario.p-4.p-md-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p El plan de negocio tiene como objetivo principal el poder definir e identificar la oportunidad de negocio, seguido a esto permitirá un estudio de mercado para posicionar los productos o servicios de la unidad productiva y, por último, permitirá conocer la viabilidad económica del proyecto. Es por esta razón que el plan de negocios es importante para cualquier socio de una empresa y tener clara la idea de negocio, su proyección, el retorno de sus ingresos para no perder la inversión. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-23.svg", alt="Texto que describa la imagen").floating.w-75.margin-0-auto
    .row.mt-5
      .col-10.offset-1
        TabsA.color-secundario
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Clientes con pedido")
            h4 Clientes con pedido
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-24.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Se debe identificar y fidelizar a los clientes, y seguir en la búsqueda de nuevos clientes.
          
          .tarjeta.color-acento-botones--borde.p-4(titulo="Información sobre el entorno")
            h4 Información sobre el entorno
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-25.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p La unidad productiva debe estar atenta e informada de la situación del entorno con el fin de tomar decisiones en datos oportunos y correctos.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Tecnología")
            h4 Tecnología
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-26.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Toda unidad productiva requiere de tecnología y esta debe estar en condiciones de competitividad que exige el mercado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidad")
            h4 Oportunidad
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p La unidad productiva debe aprovechar al máximo su ventaja competitiva.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Redes empresariales")
            h4 Redes empresariales
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-28.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Las redes facilitan los procesos operativos y pueden ser el triunfo de toda empresa puesto que permiten guiar al éxito personal, empresarial y profesional.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recursos humano")
            h4 Recursos humano
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-29.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Toda función operativa necesita de personas con capacidades, destrezas y fortalezas en el área de trabajo, este recurso humano bien manejado se traduce en el tiempo como valorización de la unidad productiva.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recursos naturales")
            h4 Recursos naturales
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-30.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Son fundamentales para la producción y distribución de bienes y servicios, estos se deben aprovechar en su mayor porcentaje.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Recursos financieros")
            h4 Recursos financieros
            .row
              .col-2
                figure
                  img(src="@/assets/template/tema-1-31.svg", alt="Texto que describa la imagen")
              .col-9.offset-1
                p Son de gran importancia para crear y hacer crecer una unidad productiva, se debe tener la capacidad de identificar fuentes de recursos financieros.



                
</template>

<script>
import PestanasA from '../components/PestanasA'
export default {
  name: 'Tema1',
  components: {
    PestanasA,
  },
  data: () => ({
    mostrarIndicador: true,
    modalP: false,
    modalH: false,
    modalA1: false,
    modalV: false,
    indicadorTarjetaFlip: true,
    showInfo1: false,
    showInfo2: false,
    showInfo3: false,
    showInfo4: false,
    showInfo5: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    toggleShowInfo1() {
      this.showInfo1 = !this.showInfo1
    },
    toggleShowInfo2() {
      this.showInfo2 = !this.showInfo2
    },
    toggleShowInfo3() {
      this.showInfo3 = !this.showInfo3
    },
    toggleShowInfo4() {
      this.showInfo4 = !this.showInfo4
    },
    toggleShowInfo5() {
      this.showInfo5 = !this.showInfo5
    },
  },
}
</script>

<style lang="sass" scoped>
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFD494
  opacity: 1
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 16px

.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 70%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 0%
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p
    opacity: 1;
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s


.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  opacity: 0.8
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease


.nav-holder2:before
  -webkit-transform: translateY(85%)
  -moz-transform: translateY(85%)
  transform: translateY(85%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-top-left-radius: 14px
  border-top-right-radius: 14px

.nav-holder2
  .text
    position: absolute
    top: 83%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder2 .h4
  margin: 0
  opacity: 1

.nav-holder2:hover
  .text
    top: 5%
  h4, p
    color: #12263F
    opacity: 1
</style>
