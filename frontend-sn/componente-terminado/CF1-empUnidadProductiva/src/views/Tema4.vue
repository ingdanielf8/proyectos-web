<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Planeación estratégica
    .row.mt-5
      .col-8
        p Todas las organizaciones en el contexto actual, donde existe un mercado muy competitivo y donde las formas de satisfacer las necesidades de las personas cambian o evolucionan permanentemente, buscan la forma de ser exitosas. Es aquí donde se deben trazar camino con unas metas claras y precisas, donde la planeación estratégica permita cumplir con esas metas. 
        .row.mt-4  
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4 
              .row 
                .col-3.align-self-center
                  figure
                    img(src="@/assets/template/tema-4-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
                .col-9.align-self-center
                  p Cuando se habla de planeación estratégica, se encuentran varios conceptos muy relacionados entre sí. Podría decirse que la planeación estratégica es una herramienta de gestión que establece el quehacer y el camino que se debe recorrer para alcanzar las metas u objetivos de las organizaciones teniendo en cuenta el análisis de su entorno. A partir de su direccionamiento se puede establecer la misión, visión, los objetivos y planes de acción de las organizaciones.
        p.mt-4 Al momento de implementar una planificación estratégica se van a integrar varios departamentos o áreas comerciales de la organización, entre estas tenemos el área de contabilidad, investigación y desarrollo, marketing, producción, sistema de gestión e información. Estas son las áreas que intervienen directamente para lograr los objetivos de la organización.  
      .col-4.align-self-center
        figure
          img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_4_1.h2 4.1  	Estructura de un plan estratégico 
    .row.mt-5.fondo-img-1.pt-5
      .col-4.mt-5.text-white.offset-1.mb-5.pb-5
        p Existe una serie elementos que no pueden faltar en la elaboración de un plan estratégico y que son de gran importancia para su desarrollo, estos son:
        ul.lista-ul.mt-3.mb-5.mt-5
          li 
            i.fas.fa-angle-right.naranja
            | Misión
          li 
            i.fas.fa-angle-right.naranja
            | Visión
          li 
            i.fas.fa-angle-right.naranja
            | Valores
          li 
            i.fas.fa-angle-right.naranja
            | Objetivos
          li 
            i.fas.fa-angle-right.naranja
            | Estrategias
          li 
            i.fas.fa-angle-right.naranja
            | Tácticas
          li
            i.fas.fa-angle-right.naranja
            | Plan de acción
    .titulo-segundo.mt-5
      #t_4_2.h2 4.2  	Fases de la planificación 
    p.mt-5 Es importante definir las fases mínimas que debe tener la realización de una planificación estratégica, partiendo de que es un proceso sistemático; se pueden encontrar entonces las siguientes etapas: 
    .row.mt-5.position-relative.rounded-15.bg-amarillo-claro.py-5
      figure.py-5.mb-5
        img(src="@/assets/template/tema-4-4.png", alt="Fases de la planificación").w-40.margin-0-auto.pb-5.mb-5
      figure.position-absolute(style="top:7%; left:24%;")
        img(src="@/assets/template/tema-4-5.png", alt="Fase 1").w-15.cursor-pointer(@click="modal1 = true")
      figure.position-absolute(style="top:34%; left:16.5%;")
        img(src="@/assets/template/tema-4-6.png", alt="Fase 2").w-15.cursor-pointer(@click="modal2 = true")
      figure.position-absolute(style="top:59%; left:23%;")
        img(src="@/assets/template/tema-4-7.png", alt="Fase 3").w-15.cursor-pointer(@click="modal3 = true")
      figure.position-absolute(style="top:68.5%; left:44%;")
        img(src="@/assets/template/tema-4-8.png", alt="Fase 4").w-12.cursor-pointer(@click="modal4 = true")
      figure.position-absolute(style="top:59%; left:62.5%;")
        img(src="@/assets/template/tema-4-9.png", alt="Fase 5").w-12.cursor-pointer(@click="modal5 = true")
      figure.position-absolute(style="top:34%; left:66.8%;")
        img(src="@/assets/template/tema-4-10.png", alt="Fase 6").w-15.cursor-pointer(@click="modal6 = true")
      figure.position-absolute(style="top:6.9%; left:61%;")
        img(src="@/assets/template/tema-4-11.png", alt="Fase 7").w-13.cursor-pointer(@click="modal7 = true")
    ModalA(:abrir-modal.sync="modal1").modal1
      .row.mt-5.px-5
        .h3.font-50.text-center 1
        .h4 Establecer la misión y visión de la unidad productiva:
        p.mt-1 La unidad productiva debe tener claro su objetivo, ¿qué es lo que quiere y hacia dónde va?, para esto se debe plantear una visión y misión de la organización. La visión nos indicará hacia dónde queremos llevar la empresa en el futuro o lo que queremos llegar a ser como unidad productiva: ¿Qué queremos ser? 
        p En la misión se establece el propósito de existencia de la unidad productiva: ¿Cuál es la razón de la unidad productiva?  
        figure.mt-5
          img(src="@/assets/template/tema-4-12.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal2").modal2
      .row.mt-5.px-5
        .h3.font-50.text-center 2
        .h4 Realizar un análisis externo:
        p.mt-1 Nos permitirá analizar y evaluar el entorno donde se mueve la unidad productiva, aquí lo esencial es determinar las oportunidades y amenazas que puede enfrentar la organización en la actualidad o futuro de manera positiva o negativa.  
        figure.mt-5
          img(src="@/assets/template/tema-4-13.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal3").modal3
      .row.mt-5.px-5
        .h3.font-50.text-center 3
        .h4 Realizar un análisis interno:
        p.mt-1 Este análisis permitirá conocer el estado actual y la capacidad que tiene la unidad productiva y de esta forma saber las debilidades y fortalezas que tiene la organización con el fin de afrontar mejor los retos y desafíos que se le presenten.  
        figure.mt-5
          img(src="@/assets/template/tema-4-14.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal4").modal4
      .row.mt-5.px-5
        .h3.font-50.text-center 4
        .h4 Elaborar un diagnóstico y formulación de objetivos: 
        p.mt-1 El diagnóstico nos permitirá conocer el entorno real que lleva la empresa y servirá como base para establecer o reformular los objetivos de la unidad productiva, de igual manera se podrá establecer la capacidad y disponibilidad de recursos con los que puede contar la organización.
        figure.mt-5
          img(src="@/assets/template/tema-4-15.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal5").modal5
      .row.mt-5.px-5
        .h3.font-50.text-center 5
        .h4 Elaborar un análisis estratégico: 
        p.mt-1 El diagnóstico nos permitirá conocer el entorno real que lleva la empresa y servirá como base para establecer o reformular los objetivos de la unidad productiva, de igual manera se podrá establecer la capacidad y disponibilidad de recursos con los que puede contar la organización.  
        figure.mt-5
          img(src="@/assets/template/tema-4-16.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal6").modal6
      .row.mt-5.px-5
        .h3.font-50.text-center 6
        .h4 Efectuar el análisis competitivo: 
        p.mt-1 Se hace uso de los modelos de planeación estratégica que se elija para el análisis de la unidad productiva, estos permitirán determinar correctamente las fortalezas, debilidades, amenazas y oportunidades que posee la unidad productiva de forma precisa en un mercado específico.
        figure.mt-5
          img(src="@/assets/template/tema-4-17.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    ModalA(:abrir-modal.sync="modal7").modal7
      .row.mt-5.px-5
        .h3.font-50.text-center 7
        .h4 Tomar decisiones sobre las estrategias:
        p.mt-1 En este paso se articulan las anteriores fases, después del análisis interno, externo, el diagnóstico y definir los objetivos, misión y visión de la unidad productiva debe tomar decisiones sobre las estrategias a seguir para cumplir con los objetivos planteados.   
        figure.mt-5
          img(src="@/assets/template/tema-4-18.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    .titulo-segundo.mt-5
      #t_4_3.h2 4.3  Modelos de planeación estratégica 
    figure.mt-5
      img(src="@/assets/template/tema-4-19.png", alt="Texto que describa la imagen")
    p.mt-5 A continuación, se mencionan algunos de los modelos de planeación estratégica más utilizados, cada uno tiene características diferentes y se debe escoger el que mejor se adapte a las necesidades de la unidad productiva:
    .row.mt-5
      .col-6
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Cuadro de mando integral ")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-20.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Es un marco de gestión de estrategias el cual considera elementos como: en primer lugar, los objetivos que son las metas de la organización. En segundo lugar, las medidas métricas que permiten que se logren los de manera estratégica los objetivos, y, en tercer lugar, las iniciativas que son programas de acción que ayudarán a alcanzar los objetivos. 
          .row(numero="2" titulo="Mapa estratégico ")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-21.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Es una herramienta visual que comunica de forma clara un plan estratégico y permite alcanzar los objetivos comerciales más importantes. Para esto, el mapeo de estrategias es importante, ya que ofrece una comunicación excelente en la unidad productiva por medio de un formato fácil de ejecutar. 
          .row(numero="3" titulo="Análisis DOFA o FODA")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-22.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Es una herramienta de análisis de las características internas (Debilidades y Fortalezas) y externas (Amenazas y Oportunidades) de una organización. El análisis DOFA o FODA mediante la evaluación de esas características permite conocer la situación real en la que se encuentra una organización y de la misma forma permite plantear estrategias futuras. 
          .row(numero="4" titulo="Análisis PEST")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-23.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Es un análisis de los factores Políticos, económicos, socioculturales y tecnológicos (PEST), se usa a veces con los factores externos de un análisis DOFA o FODA. Cada uno de estos factores son utilizados para observar el entorno comercial, industrial y determinar qué factores pueden afectará a la unidad productiva. 
          .row(numero="5" titulo="Análisis de Brechas ")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-24.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p También es conocido como el “análisis de brechas de necesidad, evaluación de necesidades o brechas de planificación estratégicas”. Aquí se compara el estado de la organización en dos momentos que responden: en donde está ahora la unidad productiva, dónde quiere estar y cómo cerrar esa brecha que existe en los dos momentos.  
      .col-6
        LineaTiempoD.color-primario
          .row(numero="6" titulo="Análisis 5 fuerzas de Porter ")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-25.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Las cinco fuerzas de Porter fueron creadas entorno a la rentabilidad de una industria o mercado, esta estudia las siguientes fuerzas: 
              ul.lista-ul.mt-3.mt-3
                li 
                  i.fas.fa-angle-right.naranja
                  | La amenaza de nuevos competidores
                li 
                  i.fas.fa-angle-right.naranja
                  | La amenaza de nuevos productos o servicios
                li 
                  i.fas.fa-angle-right.naranja
                  | El poder de negación de los clientes
                li 
                  i.fas.fa-angle-right.naranja
                  | El poder de negociación de los proveedores
                li 
                  i.fas.fa-angle-right.naranja
                  | Rivalidad y competencia en el mercado
              p.mt-3 Se podrá determinar los eventos futuros de la empresa según la cantidad de presión sobre cada una de estas fuerzas. 
          .row(numero="7" titulo="Análisis de capacidades VRIO")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-26.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Esta se relaciona con la visión y su planificación estratégica resulta una ventaja competitiva en el mercado. Su estructura está fundamentada en cuatro componentes: valor, rareza, Imitabilidad y organización. Al momento de aplicar esta estrategia es importante conocer las capacidades que tiene la organización. Por medio de sus componentes se identificará las desventajas, paridad y ventajas tanto temporales como las que faltan por explotar. 
          .row(numero="8" titulo="Estrategia Océano Azul ")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-27.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Esta estrategia permite ubicar a la unidad productiva en un mercado no disputado en lugar de un mercado desarrollado o saturado por la competencia. Esto permitirá que la organización aumente de valor, compradores y empleados cuando obtenga un “océano azul”. Su estrategia se fundamenta en buscar o crear nuevos espacios de mercado, volver a la competencia irrelevante, crear y capturar nueva demanda y procurar un mejor costo y mayor diferenciación. 
          .row(numero="9" titulo="Balanced Scorecard")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-28.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Esta metodología permite evaluar el funcionamiento de una organización a partir de cuatro perspectivas claves: la financiera, la del cliente, de procesos, aprendizaje y crecimiento. Su planeación se organiza en términos de objetivos, indicadores e iniciativas.  
              ul.lista-ul.mt-3.mt-3
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Finanzas:] Rendimiento sobre la inversión y valor añadido
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Clientes:] satisfacción, retención y cuota de mercado. 
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Procesos Internos:] calidad, tiempos de respuesta, coste e introducción de nuevos productos.
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Formación y crecimiento:] satisfacción de los empleados y disponibilidad de los sistemas de información.
          .row(numero="10" titulo="CAME")
            .col-3.pt-4
              figure
                img(src="@/assets/template/tema-4-29.svg", alt="Imagen ilustrativa")
            .col-9.pt-4
              p Es una herramienta que permite definir el plan estratégico de la unidad productiva, después de haber aplicado y desarrollado la matriz DOFA. Se identifican los factores que se pueden corregir, afrontar, mantener y explotar, para que la organización tome la dirección adecuada.
              p.mt-3 Desde el análisis de su componente se puede observar Corlo siguiente:
              ul.lista-ul.mt-3.mt-3
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Regir] las debilidades propias de la unidad productiva, como factor interno.
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Afrontar] las amenazas externas que presenta el mercado para la unidad productiva.
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Mantener]  las fortalezas intrínsecas de la unidad productiva
                li 
                  i.fas.fa-angle-right.naranja
                  p #[strong Explorar] las oportunidades que brinda el mercado.
    



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    indicadorTarjetaFlip: true,
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
