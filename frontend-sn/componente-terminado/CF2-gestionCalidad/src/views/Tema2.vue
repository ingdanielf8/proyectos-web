<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Mecanismos para la evaluación y seguimiento de procesos
    p.mt-5 No existe una única forma de hacer evaluación y seguimiento de procesos, ya que cada programa, empresa e incluso proyecto de mejora continua depende su funcionamiento de factores como el contexto organizacional y sus necesidades particulares. 
    p.mt-4 A continuación, se definen palabras como evaluación y seguimiento.
    .tabla-a.color-acento-botones.mt-5 
      table
        thead
          tr
            th.py-4 Evaluación
            th Seguimiento
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen")
               
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-2-4.svg", alt="Texto que describa la imagen")
          tr
            td.text-small.p-4 Es una revisión sobre un proyecto a una fecha determinada del mismo, para ver cómo se está comportando según los objetivos planificados al inicio, así como su eficacia, eficiencia y su impacto para su desarrollo. Esta actividad deberá entregar información muy veraz, para que la decisión de mantener o modificar su estructura sea lo más cercana a la perfección.
            td.text-small.p-4 Es otra actividad también sistemática, en la cual se analiza la información recopilada en el proceso de evaluación, para comparar lo que se ha ejecutado contra los planes y acciones presupuestadas. Brinda ayudas para identificar patrones y tendencias, con el fin de adaptar las estrategias y dar fundamentos para la toma de decisiones sobre lo relativo a la gestión del programa o proyecto. 
    .titulo-segundo.mt-5
      #t_2_1.h2 2.1  Repetición del ciclo de mejora
    p.mt-5 Esta actividad, creada por el norteamericano William Edwards Deming, y que también se conoce como el ciclo de Deming, consta de cuatro partes, que se identifican por las letras PDCA, correspondientes, en inglés, a Plan, Do, Check y Act; o mejor, en español, por las letras PHVA, que corresponden a las fases del ciclo de mejora, que son:
    .row.mt-5.px-4(data-aos="zoom-out-up")
      .col-12.bg-grises(style='height:850px')
        .h4.mb-0.mt-5.font-25.text-center Ciclo de mejora continua 
        .h4.font-25.text-center PHVA- PDCA (Plan-Do-Check-Act)
        .row.mt-5
          .col-12.position-relative
            figure
              a.position-absolute(style='left:8%')
                img(src="@/assets/template/tema-2-5.png", alt="Texto que describa la imagen")(@click="modalP = true")
            figure
              a.position-absolute(style='left:60%')
                img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")(@click="modalH = true")
            figure
              a.position-absolute(style='left:32.5%; top:156px; cursor:default')
                img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen").rotation  
            figure
              a.position-absolute(style='left:8%; top:282px')
                img(src="@/assets/template/tema-2-7.png", alt="Texto que describa la imagen")(@click="modalA1 = true")
            figure
              a.position-absolute(style='left:60%; top:282px')
                img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen")(@click="modalV = true")
        ModalA(:abrir-modal.sync="modalP").modal-p
          .row
            .col-12
              .h4.titulo.mb-0.text-center P
              .h4.mt-4 Planear:
              p Establecer los objetivos y procesos necesarios para conseguir resultados.
              figure
                img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
        ModalA(:abrir-modal.sync="modalH").modal-h
           .row
            .col-12
              .h4.titulo.mb-0.text-center H
              .h4.mt-4 Hacer: 
              p Implementar los procesos.
              figure
                img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
        ModalA(:abrir-modal.sync="modalA1").modal-a1
          .row
            .col-12
              .h4.titulo.mb-0.text-center A
              .h4.mt-4 Actuar:  
              p Tomar acciones para mejorar continuamente el desempeño. 
              figure
                img(src="@/assets/template/tema-2-13.svg", alt="Texto que describa la imagen").w-50.margin-0-auto 
        ModalA(:abrir-modal.sync="modalV").modal-v
          .row
            .col-12
              .h4.titulo.mb-0.text-center V
              .h4.mt-4 Verificar:  
              p Realizar el seguimiento de  procesos respecto a políticas, objetivos y requisitos.
              figure
                img(src="@/assets/template/tema-2-12.svg", alt="Texto que describa la imagen").w-50.margin-0-auto     
    p.mt-5 Este ciclo no tiene fin, lo que hace que las acciones se mantengan indefinidamente para seguir en el proceso de mejoramiento continuo.     
    .titulo-segundo.mt-5(data-aos="fade-up")
      #t_2_2.h2 2.2  Benchmarking
    .row.mt-5(data-aos="flip-right")
      .col-4.col-lg-6
        a.anexo.aguamarina.mb-4.mb-lg-0(href="https://youtu.be/4by9PtD7qDw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link-aguamarina.svg")
          .anexo__texto
            p Enlace web. video: https://youtu.be/4by9PtD7qDw
    .row.mt-5
      .col-12.col-lg-7
        p Toda actividad que tenga como referencia la gestión o trabajo que haga la competencia será conocida como Benchmarking y, como lo dice claramente Michael J. Spendolini, fundador y Presidente de MJS Associates y autor de más de 50 artículos de benchmarking, entre ellos best sellers como “Benchmarking Book”, se trata de “un proceso sistemático y continuo para evaluar los productos, servicios y procesos de trabajo de las organizaciones que se reconocen como representantes de las mejores prácticas, con el propósito de realizar mejoras organizacionales” (Gisbert y Raissouni, 2014).
        p.mt-3 Dentro del marco empresarial, y teniendo como referencia al mismo Spendolini, los pasos para hacer un buen trabajo de benchmarking son:
        ul.lista-ul
          li 
            i.fas.fa-angle-right
            | Determinar a qué se le va a hacer benchmarking.
          li.mt-2 
            i.fas.fa-angle-right
            | Formar un equipo de benchmarking.
          li.mt-2 
            i.fas.fa-angle-right
            | Identificar a los socios del benchmarking. 
          li.mt-2 
            i.fas.fa-angle-right
            | Recopilar y analizar la información del benchmarking.
          li.mt-2 
            i.fas.fa-angle-right
            | Actuar. (Gisbert y Raissouni, 2014)
      .col-4.col-lg-5.d-none.d-lg-block.position-relative
        figure.position-absolute.bot-0
          img(src="@/assets/template/tema-2-14.svg", alt="Texto que describa la imagen")
    p.mt-5 Rolando Arellano Cueva, Doctor en Administración de Empresas de la Universidad de Grenoble en Francia, Magíster en Administración en ESAN y Psicólogo de la Pontificia Universidad Católica del Perú, señala cuatro tipos de benchmarking, que son los siguientes:
    TabsA.color-acento-botones.mt-5(data-aos="flip-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Benchmarking interno")
        .row
          .col-4.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-2-15.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4.font-25 Benchmarking interno
            p.mt-3 Este tipo de benchmarking aplica para la empresa que tiene operación a nivel internacional en diferentes países, y permite que se haga el comparativo entre las áreas semejantes de cada una de las filiales de la empresa. No deben existir problemas de confidencialidad, y se debe tener acceso a los datos y a la información de manera amplia y completa, como se requiera por parte de los consultores que ejecuten la labor. (Gisbert y Raissouni, 2014)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Benchmarking competitivo")
        .row
          .col-4.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-2-16.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4.font-25 Benchmarking competitivo
            p.mt-3 Está enfocado a las empresas que ofrezcan productos y/o servicios que sean competencia directa de la empresa que desea hacer el estudio comparativo. Este benchmarking es realmente muy difícil de realizar, dado que ninguna empresa va a brindar información sobre cómo elabora sus productos o cómo establece sus servicios, ya que esas formas pueden estar patentadas o simplemente ser parte del know-how de la organización. (Gisbert y Raissouni, 2014)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Benchmarking funcional")
        .row
          .col-4.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-2-17.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4.font-25 Benchmarking funcional
            p.mt-3 Al no ser tan factible lograr el benchmarking competitivo, se puede hacer este modelo de comparación con las empresas líderes del mercado en diferentes áreas, pero que compartan mercados. Al tratarse de diferentes productos, se fomenta la colaboración al compartir datos y la investigación con objetivos comunes. (Gisbert y Raissouni, 2014)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Benchmarking genérico")
        .row
          .col-4.d-none.d-lg-block.align-self-center
            figure
              img(src="@/assets/template/tema-2-18.png", alt="Texto que describa la imagen")
          .col-12.col-lg-8
            .h4.font-25 Benchmarking genérico
            p.mt-3 Independientemente del sector económico, del tipo de empresa, o de la actividad económica a que se dediquen las empresas, hay procesos y funciones que son idénticos, lo que permite que se descubra en ellas buenas prácticas, labores y métodos que no se estén realizando en la industria propia de quien realice la investigación. (Gisbert y Raissouni, 2014)
    .titulo-segundo.mt-5(data-aos="fade-up")
      #t_2_3.h2 2.3  Auditorías de calidad
    .row.mt-5
      .col-12.col-lg-7
        .row
          .col-11(data-aos="flip-right")
            a.anexo.aguamarina.mb-4.mb-lg-0(href="https://youtu.be/4by9PtD7qDw" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link-aguamarina.svg")
              .anexo__texto
                p Enlace web. video: https://youtu.be/4by9PtD7qDw
        p.mt-5 Se puede definir auditoría de calidad al conjunto de acciones independientes, sistemáticas, documentadas y sostenidas en el tiempo, que se hacen para que, por intermedio de mediciones, se verifique cómo es el comportamiento del sistema de calidad implementado en la empresa y si ha aportado para el logro de los objetivos establecidos.
        p.mt-3 ¿Cuál es el sentido o razón de ser de una auditoría de calidad? Es establecer y comprobar si las actividades que se han ejecutado son las adecuadas para los objetivos propuestos de la organización.
      .col-4.col-lg-5.align-self-center
        figure
          img(src="@/assets/template/tema-2-19.png", alt="Texto que describa la imagen")
    .h4.mt-5 Tipos de auditorías
    TabsB.color-acento-botones.mt-3(data-aos="flip-up")
      .py-4.py-md-5(titulo="Auditoría interna" :icono="require('@/assets/template/tema-2-22.svg')")
        .row
          .col-12.col-lg-7
            .h4 Auditoría interna
            .row.mt-3
              .col-11(data-aos="flip-right")
                a.anexo.aguamarina.mb-4.mb-lg-0(href="https://youtu.be/yjTzSupLG64" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link-aguamarina.svg")
                  .anexo__texto
                    p Enlace web. video: https://youtu.be/yjTzSupLG64
            p.mt-3 Se ejecuta por colaboradores de la misma organización con el objetivo de obtener datos de interés que permitan llevar a cabo o realizar los correctivos necesarios, bien sean de manera preventiva o como acciones de mejora. Su principal objetivo es verificar que el sistema de gestión de calidad se encuentra alineado y acorde con lo dispuesto en la planificación inicial de la empresa. También sirve para ver si hay algún sistema de calidad implementado. Deben ser continuas, sistemáticas, planificadas y programadas. Quienes las realizan son auditores internos debidamente capacitados para esa labor.
          .col-4.col-lg-5.align-self-center
            figure
              img(src="@/assets/template/tema-2-20.png", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Auditoría interna" :icono="require('@/assets/template/tema-2-23.svg')")
        .row
          .col-12.col-lg-7
            .h4 Auditoría externa            
            p.mt-3 Se realiza por medio de organizaciones externas, independientes y autorizadas por la empresa contratante, cuyo principal objetivo es conseguir la certificación del sistema de gestión de calidad, y así poder presentarla a sus clientes actuales, potenciales y proveedores, aumentando la confianza en la empresa. De igual forma, sirve como soporte para algunos procesos o participar en convocatorias o licitaciones con el Estado. 
          .col-4.col-lg-5.align-self-center
            figure
              img(src="@/assets/template/tema-2-21.png", alt="Texto que describa la imagen")
      
    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modalP: false,
    modalH: false,
    modalA1: false,
    modalV: false,
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
