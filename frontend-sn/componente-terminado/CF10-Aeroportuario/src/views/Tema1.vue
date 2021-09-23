<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Baggage overview // Generalidades del equipaje
    .row.mt-5
      .col-12.col-lg-9
        .row
          .col-12.bandera.bg-amarillo-claro.p-5
            figure 
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic.mb-0 When talking about luggage, it is essential to talk about a series of main characteristics for handling it. To start, it is important to consider the types of luggage. These are basically two:
        p.mt-4.mb-0 Al hablar de equipaje, es indispensable hablar de una serie de características principales para el manejo de éste. Para iniciar, es importante tener en cuenta los tipos de equipaje. Son básicamente dos:
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr
            th.py-1 
              .h4 Checked or Registered Baggage 
              .h4 // El equipaje documentado o registrado
            th 
              .h4 Hand Luggage or Cabin Baggage 
              .h4 // El equipaje de mano o de cabina
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
               
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-4.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen")
          tr
            td
              .row.px-5.py-2
                .col-12.bandera.bg-morado-claro.px-5.py-4
                  figure 
                    img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
                  p.italic It is the one that the passenger delivers to the airline according to what is allowed on their ticket and that the airline takes into custody from there.
                p.mt-4 Es el que entrega el pasajero a la aerolínea de acuerdo con lo estipulado en su tiquete y que, a partir de ahí, la línea aérea toma en custodia.
            td
              .row.px-5.py-2
                .col-12.bandera.bg-morado-claro.px-5.py-4
                  figure 
                    img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
                  p.italic The one that travels with the passenger in the airplane cabin. It is normally the baggage with the traveler’s personal belongings, which is under their responsibility.
                p.mt-4 El que viaja con el pasajero en la cabina del avión. Normalmente, es el equipaje con las cosas personales del viajero, y está bajo su responsabilidad.
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1	Description of the procedures in the baggage area // Descripción del procedimiento en el área de equipaje
    figure.mt-5
      img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic The procedures in the baggage area are diverse and all with a relevant level of importance.
    p.mt-4 Los procedimientos en el área de equipaje son diversos y todos con un nivel de importancia relevante, así: 
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span a
        .h4 Activities performed during the baggage area procedures // [Actividades realizadas durante los procedimientos del área de equipaje]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic The baggage area is in charge of activities such as the following:
    p.mt-5 [El área de equipaje está a cargo de actividades como las siguientes:]
    .row.mt-5
      .col-12.col-lg-6.bg-amarillo-claro.zoom-in
        .row 
          .col-12.bandera.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            ol.lista-ol
              li 
                span.text-bold a. 
                | Verification of work teams where various topics are dealt such as:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | INumber of flights to be assisted during the day.
              li.mt-2 
                i.fas.fa-angle-right
                | Flight close-out times.
              li.mt-2 
                i.fas.fa-angle-right
                | Security measures with luggage.
              li.mt-2 
                i.fas.fa-angle-right
                | Identification of hidden dangerous goods.
              li.mt-2 
                i.fas.fa-angle-right
                | Notification of damage to luggage both on departure and arrival of flights.
              li.mt-2 
                i.fas.fa-angle-right
                | Irregular situations such as delayed, canceled flights, unification of flights, special baggage handling, baggage requests from other airports.
              li.mt-2 
                i.fas.fa-angle-right
                | Taking the luggage off the scale, checking that it has a label and placing it on the conveyor belt.
              li.mt-2 
                i.fas.fa-angle-right
                | Verifying the conditions of the area such as: forgotten foreign packages or luggage, people outside the area and the operation. 
              li.mt-2 
                i.fas.fa-angle-right
                | That the luggage conveyor belts are in optimal conditions.
      .col-12.col-lg-6.zoom-in
        .row.pl-4
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            ol.lista-ol
              li 
                span.text-bold a. 
                |  Verificación de equipos de trabajo donde se tratan temas como:
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | Cantidad de vuelos para ser atendidos durante la jornada.
              li.mt-2 
                i.fas.fa-angle-right
                | Horas de cierre de los vuelos.
              li.mt-2 
                i.fas.fa-angle-right
                | Medidas de seguridad con el equipaje.
              li.mt-2 
                i.fas.fa-angle-right
                | Identificación de mercancías peligrosas ocultas.
              li.mt-2 
                i.fas.fa-angle-right
                | Notificación de averías o daños en el equipaje tanto a la salida como a la llegada de los vuelos.
              li.mt-2 
                i.fas.fa-angle-right
                | Situaciones irregulares como vuelos demorados, cancelados, unificación de vuelos, manejos especiales de equipaje, solicitudes de equipajes de otros aeropuertos.
              li.mt-2 
                i.fas.fa-angle-right
                | Bajar los equipajes de la báscula, verificar que tengan etiqueta y colocarlos en la banda transportadora.
              li.mt-2 
                i.fas.fa-angle-right
                | Verificar las condiciones del área, como: paquetes o equipajes extraños olvidados, personas ajenas al área y a la operación.
              li.mt-2 
                i.fas.fa-angle-right
                | Que las bandas de transporte de equipaje estén en óptimas condiciones. 
    .row
      .col-12.col-lg-6.bg-amarillo-mas-claro.zoom-in
        .row 
          .col-12.bandera.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            ol.lista-ol
              li 
                span.text-bold b. 
                | Take into account that, if the passenger checks cardboard boxes, refrigerators, tool boxes, equipment (for camping, filming, laboratory, diving, mining, repairing) and other items that can be classified as dangerous goods, the passenger must be asked to open the luggage to verify its content and rule out that it is a dangerous good, so that the passenger can remove these items.
      .col-12.col-lg-6.zoom-in
        .row.pl-4
          .col-12.bandera.bg-amarillo-mas-claro.px-5.py-4
            ol.lista-ol
              li 
                span.text-bold b. 
                | Tener en cuenta que, si el pasajero factura cajas de cartón, neveras, cajas de herramientas, equipos (de acampar, filmación, laboratorio, buceo, minería, reparación) y otros elementos que se puedan clasificar como mercancías peligrosas, habrá que solicitar al pasajero que abra el equipaje para verificar su contenido y descartar que sea una mercancía peligrosa, de manera que el pasajero pueda hacer el retiro de esas mercancías.
    .row
      .col-12.col-lg-6.bg-amarillo-claro.zoom-in
        .row 
          .col-12.bandera.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            ol.lista-ol
              li 
                span.text-bold c. 
                | If the luggage presents any type of strong smell, humidity, or spillage of any liquid, it must be informed to the passenger, and under no circumstances can it be sent with these characteristics since it may damage other pieces of luggage, corrode the structure or affect the electrical or electronic parts of the aircraft. This can put the safety of the aircraft at risk.
      .col-12.col-lg-6.zoom-in
        .row.pl-4
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            ol.lista-ol
              li 
                span.text-bold c. 
                | Si el equipaje presenta algún tipo de olor fuerte, humedad, o vertimiento de algún líquido, se debe informar al pasajero, y bajo ninguna circunstancia puede enviarse con estas características, ya que puede dañar o averiar otros equipajes, corroer la estructura o afectar la parte eléctrica o electrónica del avión. Esto puede poner en riesgo la seguridad operativa de la aeronave.
    .row
      .col-12.col-lg-6.bg-amarillo-mas-claro.zoom-in
        .row 
          .col-12.bandera.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            ol.lista-ol
              li 
                span.text-bold d. 
                p All luggage that is sent to the selection area must have its label attached or hung #[strong (manually or systematized.)]
      .col-12.col-lg-6.zoom-in
        .row.pl-4
          .col-12.bandera.bg-amarillo-mas-claro.px-5.py-4
            ol.lista-ol
              li 
                span.text-bold d. 
                p Todo equipaje que sea enviado al área de selección debe tener su etiqueta pegada o colgada #[strong (de forma manual o sistematizada).]
    .row
      .col-12.col-lg-6.bg-amarillo-claro.zoom-in
        .row 
          .col-12.bandera.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            ol.lista-ol
              li 
                span.text-bold e. 
                | In case of baggage requiring a security procedure, this must be done before the baggage is sent to the selection area.
      .col-12.col-lg-6.zoom-in
        .row.pl-4
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            ol.lista-ol
              li 
                span.text-bold e. 
                | En caso de equipajes que requieran procedimiento de seguridad, este se debe hacer antes de enviarlos al área de selección.
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span b
        .h4 Work areas and work areas preparation // [Áreas de trabajo y alistamiento de las áreas de trabajo] 
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic In order to get ready for the operation, a briefing must be performed to acknowledge the personnel about the latest updates, as well as position needs to cover for the baggage handling during the shift, as shown next:
    p.mt-5 [Para estar listos para la operación, se debe realizar una sesión informativa para que el personal se entere de las últimas actualizaciones, así como de las posiciones que se necesita cubrir para el manejo del equipaje durante el turno, como se observa a continuación:] 
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-morado-claro")
      .row(titulo="Storage // Almacenamiento ")
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is a logistics process by which an object or item is stored or located within a specific area, to keep control and order within the standard procedures.
            p.mt-4 Es un proceso logístico mediante el cual se guarda o se ubica un objeto o artículo dentro de un área específica, para mantener el control y el orden dentro de los procedimientos estándar. 
      div(titulo="Baggage Storage Facility // Bodega ").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is a space destined under certain conditions for the storage of different goods and / or passenger items.
            p.mt-4 Es un espacio destinado bajo ciertas condiciones para el almacenamiento de distintos bienes y/o artículos de los pasajeros.
      div(titulo="Baggage Storage Center // Bodega Central de Equipajes").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is identified as the area in charge of managing and controlling the information on baggage irregularities at the system level, controlling the metrics indicators and managing continuous improvement projects for the baggage area, providing strategic information for the decision making process at the company level. It is also known as centralized baggage.
            p.mt-4 Se identifica como el área encargada de administrar y controlar la información de irregularidades de equipaje a nivel sistema, controla los indicadores de las métricas y administra proyectos de mejora continua para el área de equipajes, brinda información estratégica para la toma de decisiones a nivel empresa. Se conoce también como equipaje centralizado.
    .h4.mt-5 Preparing the work areas // [Alistando las áreas de trabajo]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic As part of the preparation of the work areas, the required personnel are assigned according to the operation, providing information to the work team and having everything needed for excellent passenger service:
    p.mt-5 Para el alistamiento de las áreas de trabajo, se asigna el personal requerido de acuerdo con la operación, entregando información al equipo de trabajo y teniendo todo lo necesario para una excelente atención al pasajero:
    .row.mt-5
      .col-12.col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a" titulo="Delayed baggage").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p It is the baggage that should have arrived together with the traveler, but for reasons beyond their control, arrives at a later time.
          .row(numero="b" titulo="Rush baggage numbers").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p Baggage tags that indicate top priority in their shipment
          .row(numero="c" titulo="Weight and type of baggage").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p According to its type and weight, as well as the airline’s policies, it is determined whether it is carry-on or checked baggage.
          .row(numero="d" titulo="Baggage destination ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p (with its flight numbers)
          .row(numero="e" titulo="Reasons").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-13.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p for the delays
          .row(numero="f" titulo="Name of the person ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p requesting the baggage
          .row(numero="g" titulo="Baggage transfer ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p to other airlines
          .row(numero="h" titulo="Amount of lost baggage").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p 
          .row(numero="i" titulo="Claims for ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p damaged baggage
          .row(numero="j" titulo="Documents").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p to fill out for baggage problems
          .row(numero="k" titulo="The elements and work equipment required, such as").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                ul.lista-ul.mt-4
                  li 
                    i.fas.fa-angle-right
                    | Communications radio with extra batteries to cover the shift
                  li.mt-2 
                    i.fas.fa-angle-right
                    | List of the updated schedule of departing and arriving flights
                  li.mt-2 
                    i.fas.fa-angle-right
                    | Baggage control and conciliation forms for passenger claims.

      .col-12.col-lg-6
        LineaTiempoD.color-primario
          .row(numero="a" titulo="Equipaje retrazado").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p es el equipaje que debió llegar junto con el viajero, pero por causas ajenas a su voluntad, ingresa con retardo.
          .row(numero="b" titulo="Números de equipaje rush").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p etiquetas de equipaje que indican máxima prioridad en su envío. 
          .row(numero="c" titulo="Peso y tipo del equipaje").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p De acuerdo con su tipo y su peso, así como con las políticas de la aerolínea, se determina si es equipaje de mano o de bodega.
          .row(numero="d" titulo="Destino del equipaje ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p (con sus números de vuelo).
          .row(numero="e" titulo="Motivos").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-13.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p de generación de los retrazos.
          .row(numero="f" titulo="Nombre de quien").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-14.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p solicita el equipaje.
          .row(numero="g" titulo="Transferencia de equipaje ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p a otras aerolíneas
          .row(numero="h" titulo="Cantidad de equipajes ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p perdidos.
          .row(numero="i" titulo="Reclamos por").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p averías de equipajes.
          .row(numero="j" titulo="Documentos").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                p para diligenciar las novedades de equipaje.
          .row(numero="k" titulo="Los elementos y equipos de trabajo ").bandera
            figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            .row.my-3
              .col-2.offset-1
                figure
                  img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen").position-relative.w-100
              .col-9
                ul.lista-ul.mt-4
                  li 
                    i.fas.fa-angle-right
                    | Radio de comunicaciones con baterías adicionales para cubrir el turno.
                  li.mt-2 
                    i.fas.fa-angle-right
                    | Lista de la programación actualizada de vuelos de salida y de llegada.
                  li.mt-2 
                    i.fas.fa-angle-right
                    | Formatos de control de equipajes y de conciliación para los reclamos de los pasajeros.
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span c
        .h4 Baggage sorting, tracking, and documenting // [Selección, rastreo y documentación del área de equipajes]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Baggage handling services consist of a number of activities like sorting, distribution and tracking of baggage, as shown next: 
    p.mt-5 [Los servicios de manejo de equipaje consisten en una serie de actividades como: selección, rastreo y documentación del área de equipajes, como se observa a continuación:]
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-morado-claro")
      .row(titulo="Baggage sorting // Selección de equipaje ")
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-20.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is the area where all the baggage of an airline arrives through the baggage conveyor belt system so that they reach the sorting area and are classified according to the route found on the label. This is identified by the system with the barcode reading.
              ul.lista-ul.mt-4
                li 
                  i.fas.fa-angle-right
                  | The sorting area is the reception area once the suitcase has been checked.
                li.mt-2 
                  i.fas.fa-angle-right
                  | Classification according to the flight´s destinations is carried out when luggage travels in connection.
                li.mt-2 
                  i.fas.fa-angle-right
                  | Information is collected on all baggage movements at air terminals.
                li.mt-2 
                  i.fas.fa-angle-right
                  | The sorting area is the gateway to travelers; it must be guaranteed that the information provided is reliable, secure and timely.
                li.mt-2 
                  i.fas.fa-angle-right
                  | Security processes are performed.
            p.mt-4 Es el área donde llegan todos los equipajes de una aerolínea, a través del sistema de banda transportadora, de manera que pueden ser seleccionados y clasificados de acuerdo con la ruta que se encuentra en la etiqueta, la cual es identificada por el sistema mediante la lectura del código de barras.
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | El área de selección se convierte en el área de recepción una vez la maleta ha sido registrada.
              li.mt-2 
                i.fas.fa-angle-right
                | Cuando el equipaje viaja en conexión, la clasificación se realiza de acuerdo con el destino del vuelo.
              li.mt-2 
                i.fas.fa-angle-right
                | En los terminales aéreos, se recopila la información de todos los movimientos de equipajes.
              li.mt-2 
                i.fas.fa-angle-right
                | El área de selección es la puerta de enlace para los viajeros; se debe garantizar que la información entregada es confiable, segura y oportuna.
              li.mt-2 
                i.fas.fa-angle-right
                | Se realizan los procesos de seguridad.

      div(titulo="Tracking //Rastreo ").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-21.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is the process of searching for lost luggage that, for different reasons, remains in the city of origin, or is flown over to other destinations.
              p.italic.mt-3 To track lost luggage and provide accurate information to other bases for the identification of luggage that is lagging behind at other airports, specifications must be requested from the passenger by means of a supporting tool such as the ID CHART document (Baggage Identification Table, designed by IATA to facilitate baggage identification.) 
            p.mt-4 Es el proceso de búsqueda de los equipajes perdidos que, por diferentes motivos, se han quedado en la ciudad de origen o han sido enviados a otros destinos.
            p.mt-3 Para poder rastrear equipajes extraviados y brindar una información precisa a otras bases para la identificación de los equipajes que van quedando rezagados en otros aeropuertos, se deben solicitar especificaciones al pasajero por medio de una herramienta de ayuda como el documento ID CHART (tabla de identificación de equipajes, diseñada por la IATA para facilitar la identificación del equipaje).

      div(titulo="Baggage area documents // Documentos del área de equipajes").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-22.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          .row.px-5.py-2
            .col-12.bandera.bg-morado-claro.px-5.py-4
              figure 
                img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic It is important to know that the baggage area has in place a series of reports related to the handling of the baggage. These reports are subjected to the airline policies and procedures. Among such documents, there are:
              ul.lista-ul.mt-4
                li 
                  i.fas.fa-angle-right
                  | Reports documenting eventualities with baggage (delays, damages, pilferage, etc.) 
                li.mt-2 
                  i.fas.fa-angle-right
                  | Indicators and measurements for baggage handling and continuous improvement plans.
                li.mt-2 
                  i.fas.fa-angle-right
                  | Passenger Declaration Forms for baggage damage evidenced by airline staff.
            p.mt-4 Es importante saber que el área de equipajes cuenta con una serie de informes relacionados con su manipulación, que están sujetos a las políticas y procedimientos de la compañía aérea. Dentro de esos documentos, están: 
            ul.lista-ul.mt-4
              li 
                i.fas.fa-angle-right
                | Informes que documentan eventualidades con el equipaje (demoras, daños, saqueos, etc.).
              li.mt-2 
                i.fas.fa-angle-right
                | Indicadores y mediciones para el manejo de equipajes y planes de mejora continua.
              li.mt-2 
                i.fas.fa-angle-right
                | Formatos de Declaración de Pasajeros por afectaciones de equipajes evidenciadas por el personal de la aerolínea.
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2	Baggage characteristics // 	Características del equipaje
    figure.mt-5 
      img(src="@/assets/template/tema-1-23.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic When talking about baggage characteristics, it is unavoidable to talk about the Baggage Identification Chart. This chart will help us identify the baggage more easily since it uses a series of barcodes for its location. It is divided into two parts: the left-hand side part, which refers to suitcases that close with mechanisms other than zippers and the right-hand side part, which refers to suitcases that close with a zipper. Below, you can see how to understand the characteristics of each piece of luggage and how to identify them in the chart:
    p.mt-5 Para hablar de las características del equipaje es inevitable hablar de la tabla de identificación del equipaje. Sirve para identificar el equipaje más fácilmente, ya que emplea una serie de códigos de barras para su ubicación. Se divide en dos partes: la parte izquierda, que hace referencia a las maletas que cierran con mecanismos distintos a cremalleras, y la parte derecha, que se refiere a maletas que cierran con cremallera.
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-morado-deg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-1-24.svg" alt="Texto que describa la imagen").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Características del equipaje
                  p.text-small Para conocer más acerca de las características de cada equipaje y cómo identificarlas en la tabla de identificación del equipaje, descargue el siguiente documento: 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3	Information recording in the baggage system // 	Registro de la información en el sistema de equipajes
    figure.mt-4
      img(src="@/assets/template/tema-1-25.png")
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic The proper recording of baggage information in the system is of utmost importance for the flight plan, since it represents data that helps to preserve the safety of the flight.
        p.italic.mt-3 Another reason why information recording is important is that, in case of a baggage eventuality, it helps to trace the luggage more quickly in order to avoid mishaps with passengers.
    p.mt-4 El registro adecuado de la información del equipaje en el sistema es de suma importancia para el plan de vuelo, ya que representa datos que ayudan a preservar la seguridad del vuelo.
    p.mt-3  Otra de las razones es porque, en el caso de una eventualidad con el equipaje, ayuda a ubicarlo más rápidamente, para así evitar contratiempos con los pasajeros.
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span A
        .h4 World Tracer System – Basic Concepts // [Generalidades del Sistema World Tracer]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Those who are familiar with baggage departments know that you only need to know six things: AHL, OHD, DPR, QOH, FWD and RFP. The rest are just things added to this referring to changes, shipments, etc.
    p.mt-5 [Los que están familiarizados con los departamentos de equipajes saben que, realmente, sólo hay que saber diferenciar seis cosas: AHL, OHD, DPR, QOH, FWD y RFP. El resto son sólo cosas adicionales que hacen referencia a cambios, envíos, etc.] 
    p.mt-4 A continuación, revise los diversos registros:
    SlyderB.mt-5(:datos="datosSlyder")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span B
        .h4 Help // [Ayuda]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Those who are familiar with baggage departments know that you only need to know six things: AHL, OHD, DPR, QOH, FWD and RFP. The rest are just things added to this referring to changes, shipments, etc.
    p.mt-5 [Los que están familiarizados con los departamentos de equipajes saben que, realmente, sólo hay que saber diferenciar seis cosas: AHL, OHD, DPR, QOH, FWD y RFP. El resto son sólo cosas adicionales que hacen referencia a cambios, envíos, etc.] 
    p.mt-4 A continuación, revise los diversos registros:
    .h4.mt-5 From a mask // Desde una máscara 
    .row.mt-5
      .col-10.col-lg-10.offset-1.offset-lg-1.borde-4-gris.rounded-20
        .row
          .col-2.align-self-center
            figure(style="margin-left: -84px")
              img(src="@/assets/template/tema-1-32.svg", alt="Texto que describa la imagen").floating 
          .col-10
            .row.py-5
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong a]
                    .h4  
              .col-11.bandera.bg-amarillo-claro.px-5.py-4
                figure
                  img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
                p.italic Put a question mark in the element that we do not know what it is or how to complete. 
              p.mt-3.mx-5 Es un expediente de búsqueda. Muchos lo llaman reclamo. Básicamente, se puede decir que el AHL se crea cuando al pasajero no le ha llegado la maleta.
    .row.mt-5
      .col-10.col-lg-10.offset-1.offset-lg-1.borde-4-gris.rounded-20
        .row
          .col-2.align-self-center
            figure(style="margin-left: -84px")
              img(src="@/assets/template/tema-1-33.svg", alt="Texto que describa la imagen").floating 
          .col-10
            .row.py-5
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong b]
                    .h4  
              .col-11.bandera.bg-amarillo-claro.px-5.py-4
                figure
                  img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
                p.italic Go to the bottom of the screen with the cursor and enter.
              p.mt-3.mx-5 Vaya al final de la pantalla con el cursor e ingrese.
    .row.mt-5
      .col-10.col-lg-10.offset-1.offset-lg-1.borde-4-gris.rounded-20
        .row
          .col-2.align-self-center
            figure(style="margin-left: -84px")
              img(src="@/assets/template/tema-1-34.svg", alt="Texto que describa la imagen").floating 
          .col-10
            .row.py-5
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong c]
                    .h4  
              .col-11.bandera.bg-amarillo-claro.px-5.py-4
                figure
                  img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
                p.italic After consulting what is necessary, return to the mask by writing #[strong WM RF].
              p.mt-3.mx-5 Tras consultar lo necesario, vuelva a la máscara escribiendo #[strong WM RF].
    .h4.mt-5 On an empty screen // En una pantalla vacía 
    

    .row.mt-5
      .col-6.col-lg-3.px-3
        figure
          img(src="@/assets/template/tema-1-35.svg", alt="Texto que describa la imagen")

      .col-6.col-lg-3.px-3
        figure
          img(src="@/assets/template/tema-1-36.svg", alt="Texto que describa la imagen")

      .col-6.col-lg-3.px-5
        figure
          img(src="@/assets/template/tema-1-37.svg", alt="Texto que describa la imagen")
      
      .col-6.col-lg-3.px-5
        figure
          img(src="@/assets/template/tema-1-38.svg", alt="Texto que describa la imagen")
    
    .row
      .col-6.col-lg-3.px-3
        .row          
          .col-11
            .row
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong 1]
            
      .col-6.col-lg-3.px-3
        .row          
          .col-11
            .row
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong 2]
              
      .col-6.col-lg-3.px-5
        .row          
          .col-11
            .row
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong 3]
      .col-6.col-lg-2
        .row          
          .col-11
            .row
              .col-1
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.acento-botones
                      span.text-white #[strong 4]
    .row
      .col-6.col-lg-3.px-4
        .row
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
              p.italic Write #[strong WM HELP] and then the transaction that you want to consult, in this case it would be #[strong WM HELP AHL] . Once consulted, the screen is simply cleared.
      .col-6.col-lg-3.px-4
        .row.bandera.bg-amarillo-claro.h-100          
          .col-12.px-5.py-4  
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")          
            p.italic Enter the #[strong WTR] menu, #[strong WM MENU]. From there, you scroll and you can check    all the transactions.
      
      .col-6.col-lg-3.px-4
        .row.bandera.bg-amarillo-claro.h-100          
          .col-12.px-5.py-4  
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic To move in #[strong HELP], the same transactions indicated in “Key functions” are used. The only difference is that two more are added here.

      .col-6.col-lg-3.px-4
        .row.bandera.bg-amarillo-claro.h-100          
          .col-12.px-5.py-4  
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")           
            p.italic #[strong WM RF] Exit HELP   
            p.italic.mt-2 #[strong WM RB] Return to the previous topic                               
    .row.mt-2
      .col-6.col-lg-3.px-3
        p Escriba #[strong WM HELP] y luego la transacción que quiera consultar, en este caso sería #[strong WM HELP AHL]. Una vez consultada, simplemente se borra la pantalla.
      .col-6.col-lg-3.px-3
        p Ingrese al menú de #[strong WTR, WM MENU]. Desde allí, desplácese con el cursor y podrá consultar todas las transacciones.
      .col-6.col-lg-3.px-3
        p Para moverse en #[strong HELP], se usan las mismas transacciones indicadas en “Funciones claves”. La única diferencia es que aquí se añaden dos más.
      .col-6.col-lg-3.px-3
        p #[strong WM RF] Salir de help
        p #[strong WM RB] Volver al tema anterior
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span C
        .h4 Active files // [Vida activa de los expedientes]
    .row.mt-5 
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic In WTR, there is an active database and an inactive one. The active one is used every day and there one can view the files, make changes and close them easily. The files in the inactive database require special permissions to be viewed or modified. The life of a file in the active database is: 
    p.mt-5 [En WTR, hay una base de datos activa y otra inactiva. La activa es la que se usa todos los días y desde allí se pueden visualizar los expedientes, hacerles cambios y cerrarlos fácilmente. Para poder ver los expedientes de las bases de datos inactivas se requieren permisos especiales. La vida de un expediente en la base de datos activa es:]
    .row.mt-5
      .col-12.col-lg-8
        .row.mt-5 
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic AHL 180 days open or 60 days after closure; whichever comes first.
            p.italic OHD 180 days open or 45 days after closure; whichever comes first.
            p.italic DPR 180 days open or 45 days after closure; whichever comes first.
            p.italic QOH 24 hours
            p.italic FWD 7 days 
            p.italic RFP Up to 90 days open.
          p.mt-5 AHL 180 días desde que son creados o 60 desde que se cierran; lo que llegue primero. 
          p OHD 180 días desde que son creados o 45 desde que se cierran; lo que llegue primero.
          p DPR 180 días desde que son creados o 45 desde que se cierran; lo que llegue primero.
          p QOH 24 horas
          p FWD 7 días
          p RFP Hasta 90 días desde la creación.
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-39.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-4.offset-4.offset-lg-0
        figure  
          img(src="@/assets/template/tema-1-40.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-8
        ol.lista-ol--cuadro.mt-5
          li 
            .lista-ol--cuadro__vineta.secundario
              span D
            .h4 Identification elements // [Elementos de identificación]
        .row.mt-5 
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic A file consists of several elements that are structured in different ways to reflect all the information about the baggage and the passenger. It is convenient to memorize them so that you can use them correctly. There are elements that are #[strong match] and others that are only informative. The #[strong match] elements are the ones that WTR searches with in order to locate the suitcase or the passenger and the information elements that represent relevant information: information about the passenger, different situations and events produced, etc. Some fields are used exclusively for AHLs or OHDs, while others are used for all, including DPRs. In many cases, to obtain the information, the passenger must be asked, and in others, this information can be found in the documentation.
            p.italic.mt-3 When a field is added in a record, it is placed at the beginning of the line or with a period (.) in front of it. If you do not do this, the system will return an error message or the information you want may not be added. Here is a summary of the most common ones that appear in the masks and how to use them.
          p.mt-5 Un expediente consiste en varios elementos que se estructuran de diferentes formas para reflejar toda la información de las maletas y del pasajero. Conviene aprendérselos para así poder usarlos correctamente. Hay elementos que son #[strong match] y otros que sólo son informativos. Los elementos #[strong match] son con los que WTR hace búsqueda para poder localizar la maleta o al pasajero, y los elementos informativos representan información para el funcionario de la aerolínea: información sobre el pasajero o sobre diferentes situaciones o eventos producidos, etc. Algunos campos se usan exclusivamente para AHL u OHD, mientras que otros se usan para todos, incluso los DPR. En muchos casos, para obtener la información, se debe preguntar al pasajero y en otras, dicha información se encuentra en la documentación.
          p.mt-3 Cuando se añade un campo en un expediente, éste se pone al principio de la línea o con un punto (.) adelante. Si no se hace esto, el sistema dará un mensaje de error o puede que no se añada la información que se quiere. 
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-amarillo-deg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-1-41.svg" alt="Texto que describa la imagen").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Elementos de identificación
                  p.text-small A continuación, un resumen de los elementos más comunes que aparecen en las máscaras y cómo usarlos:  
                .col-sm-auto
                  a.boton.color-acento-botones.text-white(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span E
        .h4 Property Irregularity Report (PIR) // [Formulario de irregularidades de equipaje]
    .row.mt-5.bg-azul-claro
      .col-12.col-lg-9
        .row.mt-5.px-5
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic The airline companies, in the baggage area, must handle formats for passenger claims that have to do with irregularities in baggage. These formats must have certain characteristics for a better news follow-up
          p.mt-5 [Las compañías aéreas, en el área de equipajes, deben manejar formatos para los reclamos de los pasajeros que tienen que ver con irregularidades en los equipajes. Estos formatos deben tener ciertas características para un mejor seguimiento de las novedades.]
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-42.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-morado-deg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-1-43.svg" alt="Texto que describa la imagen").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Formulario de irregularidades
                  p.text-small Para conocer y familiarizarse con el formulario para presentar reclamos sobre equipajes, descargue el siguiente documento: 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    overFlag: '',
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    datosSlyder: [
      {
        titulo: 'AHL (Advise if Hold) // AHL (Avisar si espera) ',
        texto:
          'It is a search file. Many call it a claim. It can be said that the AHL is created when the passenger has not received the suitcase. <br><br> Es un expediente de búsqueda. Muchos lo llaman reclamo. Básicamente, se puede decir que el AHL se crea cuando al pasajero no le ha llegado la maleta.',
        imagen: require('@/assets/template/tema-1-26.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'OHD (On Hand Request / On-hand Bag File) // OHD (Solicitud disponible / Archivo de maleta disponible)',
        texto:
          'It is a spare suitcase. You have a suitcase but no passenger. This can be due to several factors that will be seen later. <br> <br> Es una maleta sobrante. Se tiene una maleta pero no pasajero. Esto se puede deber a varios factores que se verán más adelante. ',
        imagen: require('@/assets/template/tema-1-27.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          'DPR (Damage and Pilferage Report) // DPR (Informe de daños y hurto) ',
        texto:
          'It is a suitcase breakage file. During handling, suitcases may suffer breakages, some of which are covered by the company, others not. When creating a file for which the company is responsible, it is called DPR. <br> <br> Es un expediente por rotura de maleta. Durante su manipulación, las maletas pueden sufrir roturas, algunas de las cuales son cubiertas por la compañía, mientras que otras no. Al crear un expediente del cual la compañía se hace responsable, se llama DPR.',
        imagen: require('@/assets/template/tema-1-28.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'QOH (Quick On Hand) // QOH (Rápido disponible) ',
        texto:
          'It is a “quick OHD” created from the luggage left over from a flight. It only lasts 24 hours and it is registered with the billing tag. <br> <br> Es un “OHD rápido”. Se crea para las maletas sobrantes de un vuelo, sólo dura 24 horas y se registra con la etiqueta de facturación.',
        imagen: require('@/assets/template/tema-1-29.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'FWD (Forwarding Messages) // FWD (Reenvío de mensajes) ',
        texto:
          'It is a message created in the system for the shipment of one or more suitcases.  <br> <br> Es un mensaje que se crea en sistema de un envío de una o varias maletas.',
        imagen: require('@/assets/template/tema-1-30.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'RFP // RFP',
        texto:
          'It is a record of objects left on the plane by passengers. <br> <br> Es un registro de objetos dejados en el avión por pasajeros. ',
        imagen: require('@/assets/template/tema-1-31.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
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
    chBg(id) {
      this.overFlag = id
    },
    chBgTransparent() {
      this.overFlag = ''
    },
  },
}
</script>

<style lang="sass" scoped></style>
