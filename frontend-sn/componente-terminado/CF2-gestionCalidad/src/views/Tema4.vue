<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Presupuestos de mejoramiento continuo
    .row(data-aos="slide-left")
      .col-12
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-7
              p El presupuesto como herramienta de gestión se utiliza para aplicarse día a día en la empresa. Dos de sus principales características son que se debe trabajar en equipo y que debe ser detallado. Se hace indispensable reconocer que el presupuesto no son solo unos números o cantidades que se ponen ahí; se trata de la conclusión de las acciones que se van a realizar, que se van a medir, que tienen unos indicadores y unos índices que luego se plasman en una cuenta de resultados; y, si se tiene así de detallado, por venta, unidad, precio, cantidad, en todo, tanto en ventas como en compras o consumos, es posible hacerle seguimiento al máximo de detalle, con el fin de realizar acciones de mejora. Se deben implementar estándares para separar la parte de operaciones de la comercial; no se debe trabajar con el margen global de la empresa; se debe observar de dónde viene. Asimismo, se debe intentar organizar toda la información y, a partir de allí, presentar cada periodo que se irá analizando, por semana, quincena, mes, etc. Es necesario tener en cuenta que no se debe poner siempre el mismo informe, sino ajustarlo a las necesidades de la empresa. 
            .col-5
              figure
                img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-8.offset-2
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4 ¿Cómo organizar la información para que sea digerible y útil?
            br
            p.mt-3 De acuerdo como Dice el Dr. Pedro Mendoza A.:
            br
            .h3 «Todo lo que se hace se puede medir. Sólo si se mide se puede controlar. Sólo si se controla se puede dirigir. Y, sólo si se dirige se puede mejorar.»
            i.fas.fa-quote-right
    p.mt-5 Una de las principales herramientas para mejorar la gestión empresarial es el reporting:
    .row.mt-5(data-aos="slide-right") 
      .col-12
        .cajon.color-secundario.p-4.mb-4
          .row
            .col-7
              p Herramienta clave para mejorar la gestión empresarial. La información es una necesidad que tienen todas las empresas para tomar decisiones, conocer la evolución de un producto o servicio, o para conocer las actuaciones de los diferentes responsables; es necesario disponer de información de una forma casi inmediata y con la calidad adecuada. Hoy en día, los gestores y responsables en las empresas no pueden permitirse el lujo de esperar que alguien les prepare la información que necesitan en cada momento; el tiempo es decisivo para poder reaccionar, la información debe estar disponible y accesible, en cualquier momento y lugar, para las personas que la necesiten y a un coste razonable. Para complementar este tema, se recomienda visitar el material complementario #[strong El reporting herramienta clave para mejorar la gestión empresarial y Webinar4 presupuesto como herramienta de gestión.] 
            .col-5
              figure
                img(src="@/assets/template/tema-4-2.png", alt="Texto que describa la imagen")
    .row.mt-5(data-aos="flip-up")
      .col-10.offset-1
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-4-3.svg").w-75.margin-0-auto
            .col
              .row
                .col-12.py-3
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 El reporting herramienta clave para mejorar la gestión empresarial 
                      p.text-small.mb-0.mt-2  Para afianzar sus conocimientos en las herramientas de mejora empresarial, le invitamos a visitar el  Ebook en la url 
                      a.text-small #[strong https://accid.org/wp-content/uploads/2018/11/Ebook_reporting_SCG_Estrategia_ACCID.pdf]  
                    .col-sm-auto
                      a.boton.color-acento-contenido(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        span.text-rojo Descargar
                        i.fas.fa-file-download.text-rojo
                .col-12.mt-3
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                     h3.mb-1 Presupuesto como herramienta de gestión
                      p.text-small.mb-0.mt-2 Para afianzar sus conocimientos en las herramientas de mejora empresarial, le invitamos a ver el  Webinar en YouTube 
                      a.text-small #[strong https://youtu.be/Iw0Wkw1BFWA]    
                    .col-sm-auto
                      a.boton.color-acento-contenido(:href="obtenerLink('https://youtu.be/Iw0Wkw1BFWA')" target="_blank")
                        span.text-rojo Enlace web
                        i.fas.fa-link.text-rojo
    .row.mt-5
      .col-8.offset-2
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            .h4 Lynda Woodman dice
            br
            .h3 «La gestión de la información es lo referente a conseguir la información adecuada, en la forma correcta, para la persona indicada, al costo adecuado, en el tiempo oportuno, en el lugar apropiado, para la toma de una decisión correcta.»
            i.fas.fa-quote-right
    .titulo-segundo.mt-5
      #t_4_1.h2 4.1  Conceptos de presupuestos como mejora continua
    .row.mt-5(data-aos="slide-left") 
      .col-10.offset-1.rounded-20.borde-gris-4.p-4
        .row
          .col-3.align-self-center
            figure.px-4
              img(src="@/assets/template/tema-4-4.svg").w-75.margin-0-auto.floating
          .col-9
            p Saldías y Andalaf (2006): Una de las herramientas más utilizadas en las empresas, para controlar su gestión, son los presupuestos, que, a diferencia de los estados financieros, permiten reflejar la visión de los gerentes o encargados de unidades con respecto al futuro que quieren anticipar, condición que hace que los responsables tengan que prever y anticiparse a eventuales problemas (Donoso, 2003). Pero, a su vez, presentan algunas limitaciones, como estar basados en estimaciones, rigidez, confusión al tomar un rol de administración y no de herramienta, que, para efectos del control de gestión, se traducen a control presupuestario.
    .row.mt-4(data-aos="slide-right") 
      .col-10.offset-1.rounded-20.borde-gris-4.p-4
        .row
          .col-3.align-self-center
            figure.px-4
              img(src="@/assets/template/tema-4-5.svg").w-75.margin-0-auto.floating
          .col-9
            p Luis Muñiz: El presupuesto, como una herramienta de control de gestión enfocada en la gerencia financiera, permite controlar la gestión de la empresa y, a su vez, anticiparse a los problemas que se pueden presentar durante la ejecución de los objetivos a alcanzar. (Castillo y Montes, 2017). 
    .row.mt-4(data-aos="slide-left") 
      .col-10.offset-1.rounded-20.borde-gris-4.p-4
        .row
          .col-3.align-self-center
            figure.px-4
              img(src="@/assets/template/tema-4-6.svg").w-75.margin-0-auto.floating
          .col-9
            p “Un presupuesto es una herramienta de gestión donde se cuantifican pronósticos o previsiones de diferentes elementos de un negocio. Esta herramienta permite planificar, coordinar y controlar las operaciones de las empresas, pero no siempre es entendida en la práctica de la misma manera en las compañías”. (EALDE Business School , 2016)
    .row.mt-5
      .col-12.col-lg-8
        p El presupuesto #[strong no tendría que ser algo impuesto, incomprensible y que restringe] a la hora de gastar e invertir en lo que se necesita. No ha de entenderse como algo que exige nuevos clientes y mercados, o sobre lo que se tiene que rendir cuentas. No debe percibirse como un elemento que resta tiempo a las actividades propias y que restringe el margen de maniobra. Y, sin embargo, muchas empresas siguen teniendo este concepto del presupuesto y lo aplican en la práctica de su día a día.
        p.mt-3 La empresa y cada uno de los responsables del presupuesto han de #[strong organizar los recursos y fijar de antemano unos ingresos] para imaginar el futuro. El presupuesto obliga a pensar en los productos, los clientes, los canales de distribución, etc. Además, esta herramienta permite contrastar con los #[strong resultados cuantitativos obtenidos] a medida que avanza el ejercicio.
        p.mt-3 El presupuesto ayuda a pensar en el futuro y saber qué es lo que se va a ingresar y gastar en un área determinada de la empresa o en la compañía en su conjunto. Gracias a él se hace posible la comparación de lo real y de lo presupuestado. Su actualización se realiza durante el año y siempre cuenta con la ayuda del controller.
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-4-7.svg", alt="Texto que describa la imagen").floating
    .titulo-segundo.mt-5
      #t_4_2.h2 4.2  Importancia del presupuesto como mejora continua
    .row.mt-5.bg-rosado.p-5.rounded-15.zoom-in(data-aos="flip-down")
      .col-4
        p Con base en los presupuestos, la empresa puede pronosticar o prever los sucesos que se pueden presentar a futuro. Es con esto que las gerencias o direcciones de las organizaciones pueden tomar decisiones ante las diferentes alternativas que muestren estas predicciones, a corto, mediano y largo plazo. Una vez se hagan estos presupuestos, se van haciendo análisis y comparaciones entre lo que se ha presupuestado y lo que realmente está ocurriendo; con esa información, se hacen los ajustes, reorientaciones y nuevas planificaciones que sean necesarias para poder cumplir lo establecido al inicio del ejercicio. De ahí se deriva la gran importancia de un buen seguimiento y control a los presupuestos. 
      .col-8
        figure
          img(src="@/assets/template/tema-4-8.svg", alt="Texto que describa la imagen")


</template>

<script>
export default {
  name: 'Tema4',
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
