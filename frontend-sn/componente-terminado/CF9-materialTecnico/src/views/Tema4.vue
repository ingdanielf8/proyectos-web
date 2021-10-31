<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Estructura organizacional
    figure.mt-4
      img(src="@/assets/template/tema-4-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic The graphic representation of the organizational structure of a company is known as an organization chart. There is no organization chart that indicates the distribution of the departments, and that is valid for all hotels since this depends on the capacity and category of the hotel, the physical characteristics of the building, the type of organization, and the service it wishes to provide. Organization charts for specific areas are also presented.
            p.italic.mt-3 Graphically, the organization charts maintain the following form:
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p La representación gráfica de la estructura organizacional de una empresa se conoce como organigrama. No existe ningún organigrama que indique la distribución de los departamentos, y esto es válido para todos los hoteles, ya que esto depende de la capacidad y la categoría del hotel, las características físicas de la edificación, el tipo de organización y el servicio que desea proporcionar. También se presentan organigramas para áreas específicas.
            p.mt-3 Gráficamente, los organigramas mantienen la siguiente forma:
            
          .col-8.offset-2.mt-4  
            .titulo-sexto.color-acento-contenido.mb-0
              h5.mb-0 Figura 1 
            p.text-small Hotel Organization Chart // Organigrama del hotel 
    separador

    .row.mt-5
      .col-12
        figure
          img(src="@/assets/template/tema-4-2.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_4_1.h2 4.1  Positions, Duties, Responsibilities, Profiles // Cargos, Deberes, Responsabilidades, Perfiles          
    .row.mt-5
      .col-10
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic The graphic representation of the organizational structure of a company is known as an organization chart. There is no organization chart that indicates the distribution of the departments, and that is valid for all hotels since this depends on the capacity and category of the hotel, the physical characteristics of the building, the type of organization, and the service it wishes to provide. Organization charts for specific areas are also presented.
            p.italic.mt-3 Graphically, the organization charts maintain the following form:
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p La representación gráfica de la estructura organizacional de una empresa se conoce como organigrama. No existe ningún organigrama que indique la distribución de los departamentos, y esto es válido para todos los hoteles, ya que esto depende de la capacidad y la categoría del hotel, las características físicas de la edificación, el tipo de organización y el servicio que desea proporcionar. También se presentan organigramas para áreas específicas.
            p.mt-3 
      .col-2.align-self-center
        figure
          img(src="@/assets/template/tema-4-3.svg", alt="Texto que describa la imagen").floating

    .h3.mt-5 Administrative Department // Department Administration 
    .h4.mt-4 General Manager // Gerente general
    .row.mt-4
      .col-7
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic The graphic representation of the organizational structure of a company is known as an organization chart. There is no organization chart that indicates the distribution of the departments, and that is valid for all hotels since this depends on the capacity and category of the hotel, the physical characteristics of the building, the type of organization, and the service it wishes to provide. Organization charts for specific areas are also presented.
            p.italic.mt-3 Graphically, the organization charts maintain the following form:
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p La representación gráfica de la estructura organizacional de una empresa se conoce como organigrama. No existe ningún organigrama que indique la distribución de los departamentos, y esto es válido para todos los hoteles, ya que esto depende de la capacidad y la categoría del hotel, las características físicas de la edificación, el tipo de organización y el servicio que desea proporcionar. También se presentan organigramas para áreas específicas.
            p.mt-3 
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-4-4.png", alt="Texto que describa la imagen")
    .h3.mt-5 Rooms Departament  // Departamento de Habitaciones 
    SlyderB.mt-5(:datos="datosSlyder2")
    .h3.mt-5 Food and Beverage Department   // Departamento de Alimentos y Bebidas 
    SlyderB.mt-5(:datos="datosSlyder3")
    .h3.mt-5 Financial Department // Departamento financiero
    .row.mt-5 
      .row.mb-5.text-center
        .col-sm-6.col-lg-4.tarjeta-flip-tema-3.p-2.text-center
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.px-0.pb-3.bg-naranja               
                .row    
                  .col-12.bg-amarillo.text-center.p-0
                    .h4.py-3 Controller

                  figure.mt-5
                    img(src="@/assets/template/tema-4-21.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic.text-small The controller is responsible for the administration of the data and financial operation of the property, controls the expense and cost, designs the investment plan in conjunction with management, issues financial reports by department. This information must be available to the owners, board of directors, management, and guests. This requires a well-organized staff, not only to prepare operational statistics, but also to help the general manager determine the effectiveness of each.
              .tarjeta-flip__contenido.px-0.pb-3.bg-naranja 
                .row    
                  .col-12.bg-amarillo.text-center.p-0
                    .h4.py-3 Contralor

                  figure.mt-5
                    img(src="@/assets/template/tema-4-21.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p.text-small El contralor es responsable de la administración de los datos y la operación financiera de la propiedad, controla el gasto y el costo, diseña el plan de inversiones en conjunto con la gerencia, emite los informes financieros por departamento. Esta información debe estar disponible para los propietarios, la junta directiva, la administración y los huéspedes. Esto requiere un personal bien organizado, no sólo para preparar estadísticas operativas, sino también para ayudar al gerente general a determinar la eficacia de cada uno. 
        .col-sm-6.col-lg-4.tarjeta-flip-tema-3.p-2
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.px-0.pb-3.bg-morado-25              
                .row    
                  .col-12.bg-morado-80.text-center.p-0
                    .h4.py-3.text-white General Cashier  

                  figure.mt-5
                    img(src="@/assets/template/tema-4-22.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic.text-small The General Cashier reconciles the movements from the different outlets including front office daily, being responsible to maintain the balances of cash and banks. It is the one who processes the cash for minor expenses in accordance with the hotel procedures and ensures the payment of accounts payable within the established times. 
              .tarjeta-flip__contenido.px-0.pb-3.bg-morado-25 
                .row    
                  .col-12.bg-morado-80.text-center.p-0
                    .h4.py-3.text-white Cajero General    

                  figure.mt-5
                    img(src="@/assets/template/tema-4-22.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p.text-small El Cajero General concilia los movimientos desde los diferentes puntos de venta, incluyendo la recepción, a diario, siendo responsable de mantener los saldos de efectivo y bancos. Es quien procesa el efectivo para gastos menores, de acuerdo con los procedimientos hoteleros, y asegura el pago de las cuentas por pagar dentro de los tiempos establecidos.
        .col-sm-6.col-lg-4.tarjeta-flip-tema-3.p-2
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.px-0.pb-3.bg-naranja               
                .row    
                  .col-12.bg-amarillo.text-center.p-0
                    .h4.py-3 Accounting Assistant 

                  figure.mt-5
                    img(src="@/assets/template/tema-4-23.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic.text-small Their main mission is to daily carry out the review and entry of the accounting movements of the hotel. They organize financial documents as invoices and accounts of the outlets; maintain accounts payable and receivable; complete financial reports on a regular basis, and provide information to the finance team. They also help with budgets. 
              .tarjeta-flip__contenido.px-0.pb-3.bg-naranja 
                .row    
                  .col-12.bg-amarillo.text-center.p-0
                    .h4.py-3 Auxiliar contable 

                  figure.mt-5
                    img(src="@/assets/template/tema-4-23.png", alt="Texto que describa la imagen").w-75.margin-0-auto.mb-3
                  .col-10.offset-1.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p.text-small Su misión principal es realizar diariamente la revisión y el registro de los movimientos contables del hotel. Organizan los documentos financieros como las facturas y las cuentas de los establecimientos; llevan las cuentas por pagar y por cobrar; completan los informes financieros de forma regular y proporcionan información al equipo financiero. También ayudan con los presupuestos. 
        
    .row(data-aos="fade-down")
      .col-lg-6.nav-holder2.px-0.mx-2(style="width:48%")
        
        img(src="@/assets/template/tema-4-24.png", alt="Texto que describa la imagen")
        .text.px-4
          p.text-center.mb-3.h4 
            strong.text-white Maintenance Manager // Gerente  de mantenimiento    
          .row.exp
            .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-morado.expandable.mt-5
              figure.bandera-usa
                img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
              p.italic.text-small  The maintenance manager is the one who oversees the general maintenance team and contractors to provide behind-the-scenes support to hotel guests and employees. With today’s emphasis on preventive maintenance and energy savings, the maintenance manager must develop a plan that will keep the property in excellent condition within budget objectives. 
            .col-12.position-relative.p-4.hover-bg-naranja.expandable2
              figure.bandera-esp
                img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
              p.text-small El gerente de mantenimiento es quien supervisa al equipo de mantenimiento general y los contratistas, para proporcionar el soporte detrás de escena a los huéspedes y empleados del hotel. Con el énfasis de hoy en mantenimiento preventivo y ahorro de energía, el gerente de mantenimiento debe desarrollar un plan que mantendrá la propiedad en excelente estado dentro de los objetivos presupuestarios. 
      .col-lg-6.nav-holder2.px-0.mx-2(style="width:48%")
        
        img(src="@/assets/template/tema-4-25.png", alt="Texto que describa la imagen")
        .text.px-4
          p.text-center.mb-3.h4 
            strong.text-white Maintenance Assistant // Asistente de Mantenimiento 
          .row.exp
            .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-morado.expandable.mt-5
              figure.bandera-usa
                img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
              p.italic.text-small The Maintenance Assistant is the one who helps with the administrative labor of the department. He/She is usually the direct liaison with the contractors and is the one who generates the maintenance orders and helps with the internal processes.  
            .col-12.position-relative.p-4.hover-bg-naranja.expandable2
              figure.bandera-esp
                img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
              p.text-small El Asistente de Mantenimiento es quien ayuda con la labor administrativa del departamento. Suele ser el enlace directo con los contratistas y es quien genera las órdenes de mantenimiento y ayuda con los procesos internos.
    .row.mt-5
      .col-6
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic There are many jobs and professions related to the tourism sector. Like all industries, the hotel industry is always innovating and developing new concepts and services. This causes new jobs to be created every day or existing ones to evolve, such as: 
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Hay muchos trabajos y profesiones relacionadas con el sector turístico. Como todas las industrias, la hotelería siempre está innovando y desarrollando nuevos conceptos y servicios, lo que causa que cada día se creen nuevos puestos de trabajo o evolucionen los ya existentes.  
      .col-6.align-self-center
        figure
          img(src="@/assets/template/tema-4-26.png", alt="Texto que describa la imagen")    
    .row.mt-5
      .col-8.offset-2
        .tabla-a.color-acento-contenido.mt-3 
          table
            thead(style="border: none")
              tr.bg-amarillo
                th
                  figure.bandera-usa(style="width=6%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos") 
                  .h4.text-white Scale                  
                th
                  figure.bandera-esp(style="width=6%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  .h4.text-white Escala                  
            tbody
              tr.bg-gris
                td.py-3.pl-4.text-small Travel Agent 
                td.pl-4.text-small Agente de viajes 
              tr
                td.py-3.pl-4.text-small  Local Tourism manager
                td.pl-4.text-small Gerente regional de turismo
              tr.bg-gris
                td.py-3.pl-4.text-small Tourism consultant
                td.pl-4.text-small  Consultor de turismo
              tr
                td.py-3.pl-4.text-small  Airport operations manager
                td.pl-4.text-small Gerente de operaciones de aeropuerto
              tr.bg-gris
                td.py-3.pl-4.text-small Tour leader / guide
                td.pl-4.text-small  Líder / guía turístico
              tr
                td.py-3.pl-4.text-small  Hotel concierge
                td.pl-4.text-small Conserje del hotel
              tr.bg-gris
                td.py-3.pl-4.text-small Cruise ship attendant
                td.pl-4.text-small Asistente de crucero

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder2: [
      {
        titulo: 'Front Office Manager  // Gerente de Recepción',
        texto:
          'The primary responsibilities of the front desk manager include reviewing the final report of the nightly audit, daily monitoring of reception procedures, an analysis of the department’s operational and business results; the operation and supervision of the reservation system; maintaining assertive communication with his or her staff and other department directors; supervising daily registrations and payments; scheduling shifts and ensuring employee development; establishing internal sales programs at the front desk; preparing budgets and PQRS attention and resolution.   <br> <br> Las principales responsabilidades del gerente de recepción incluyen la revisión del informe final de la auditoría nocturna, la supervisión diaria de los procedimientos de recepción, un análisis de los resultados operativos y comerciales del departamento; el funcionamiento y la supervisión del sistema de reservas; mantener una comunicación asertiva con el personal a su cargo y otros directores de departamento; supervisar los registros y pagos diarios; programar los turnos y velar por el desarrollo de los empleados; establecer programas internos de ventas en la recepción; preparar presupuestos, y atención y resolución de PQRS. ',
        imagen: require('@/assets/template/tema-4-5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Night Auditor  // Auditor nocturno',
        texto:
          'The night auditor has multiple responsibilities in addition to preparing the night audit report. This person must also register guests who arrive after 10:00 p.m., and give departure to those who do so before 6:00 a. m. Within his or her tasks are to process reservations, perform security supervisor tasks, monitor fire safety systems, act as a cashier for banquet functions and perform the work of shift manager. The night auditor acts as a communication link between the guest and the hotel’s operations during the shift from 10:00 p.m. to 6:00 a.m.  <br> <br> El auditor nocturno tiene múltiples responsabilidades además de preparar el informe de auditoría nocturna. Esta persona también debe registrar a los huéspedes que llegan después de las 10:00 p.m., y dar salida a quienes lo hacen antes de 6:00 a.m. Dentro de sus labores está procesar reservas, realizar tareas de supervisor de seguridad, monitorear los sistemas de seguridad contra incendios, actuar como cajero para las funciones de banquete y realizar el trabajo de gerente de turno. El auditor nocturno actúa como un enlace de comunicación entre el huésped y las operaciones del hotel durante el turno de 10:00 p.m. a 6:00 a.m. ',
        imagen: require('@/assets/template/tema-4-6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Desk Clerks   // Recepcionistas',
        texto:
          'The responsibilities of the reception staff are very varied. The desk clerk can encompass many duties, typically including verifying guest reservations, registering guests, assigning rooms, distributing keys, communicating with cleaning staff, answering phones, providing information and directions to local attractions, accepting cash and giving change, and acting as a liaison between the accommodation establishment and the guest, as well as with the community. As cashier, the functions include the processing of guest accounts, payments and change for guests during the check-out.  <br> <br> Las responsabilidades del personal de recepción son muy variadas. El recepcionista puede abarcar muchos deberes, que típicamente incluyen verificar las reservas de los huéspedes, registrar a los huéspedes, asignar habitaciones, distribuir llaves, comunicarse con el personal de limpieza, contestar los teléfonos, proporcionar información y direcciones a las atracciones locales, aceptar dinero en efectivo y dar cambio, y actuar como enlace entre el establecimiento de alojamiento y el huésped, así como con la comunidad. Como cajero, las funciones incluyen el procesamiento de las cuentas huésped, los pagos y el cambio para los huéspedes durante el registro de salida. ',
        imagen: require('@/assets/template/tema-4-7.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Bellboy  // Botones',
        texto:
          'The bellboy helps with luggage both at check-in and check-out. In addition, this person is an informant and support in coordination of services for guests. He or she is responsible for the luggage in custody.  <br> <br> El botones presta ayuda con el equipaje tanto en el registro como en la salida. Además, informa y apoya en la coordinación de servicios para los huéspedes. Es responsable del equipaje en custodia. ',
        imagen: require('@/assets/template/tema-4-8.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Housekeeper  // Ama de llaves',
        texto:
          'The executive housekeeper is responsible for the maintenance of the rooms and public areas of the property. This person coordinates the work of the team with the aim of keeping the property spotless. <br> <br> El ama de llaves ejecutiva es responsable del mantenimiento de las habitaciones y las áreas públicas de la propiedad. Esta persona coordina el trabajo del equipo con el objetivo de mantener la propiedad impecable',
        imagen: require('@/assets/template/tema-4-9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Floor Supervisor    // Supervisor de piso',
        texto:
          'The floor supervisor oversees the cleaning function of one or more floors of a hotel, and must be fully trained in cleaning techniques, standard inspection techniques, and assist in the provision of supplies to maids.  <br> <br> El supervisor de piso supervisa la función de limpieza de uno o varios pisos de un hotel, y debe estar completamente capacitado en técnicas de limpieza, técnicas de inspección estándar y ayudar en la provisión de suministros a las camareras.  ',
        imagen: require('@/assets/template/tema-4-10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Laundry Supervisor   // Supervisor de lavandería',
        texto:
          'The laundry supervisor coordinates the area staff to maintain the washing and provision of linens for the hotel´s operation, as well as the attention of washing uniforms, and clothing from guests and external customers.  <br> <br> El supervisor de lavandería coordina el personal del área para mantener el lavado y la provisión de la ropa de cama para la operación del hotel, así como la atención del lavado de uniformes y ropa de los huéspedes y clientes externos. ',
        imagen: require('@/assets/template/tema-4-11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Laundry staff    // Personal de lavandería',
        texto:
          'Their main responsibility is to execute the tasks of the laundry area, such as washing, drying, and ironing the linens of the hotel. They also process washing orders from guests and external customers.  <br> <br> Su principal responsabilidad es la de ejecutar las labores del área de lavandería, como lavar, secar y planchar las ropas de cama del hotel. También procesan las órdenes de lavado de los huéspedes y los clientes externos.',
        imagen: require('@/assets/template/tema-4-12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Maid   // Camarera',
        texto:
          'The maids are the hotel’s basic cleaning staff. They must be trained in cleaning and self-inspection techniques. Speed and efficiency are paramount in performing the vital maintenance service of rooms and public areas.  <br> <br> Las camareras son el personal de base de limpieza del hotel. Deben estar capacitadas en técnicas de limpieza y autoinspección. La velocidad y la eficiencia son primordiales en la realización del servicio vital de mantenimiento de las habitaciones y las áreas públicas.  ',
        imagen: require('@/assets/template/tema-4-13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder3: [
      {
        titulo: 'F&B Manager   // Gerente de Alimentos y bebidas',
        texto:
          'The food and beverage manager is responsible for the efficient operation of the kitchen, dining rooms, banquet service, room service, and executive lounge. This includes managing a multitude of details such as food quality, sanitation, inventory, cost control, staff training, revenue control, and guest service, just to name a few. In addition, this person should closely monitor trends in the marketing of food and beverages, and factors in food and beverage preparation and public services.  <br> <br> El gerente de alimentos y bebidas es responsable del funcionamiento eficiente de la cocina, los comedores, el servicio de banquetes, el servicio de habitaciones y el salón ejecutivo. Esto incluye la gestión de una multitud de detalles, como la calidad de los alimentos, el saneamiento, el inventario, el control de costos, la capacitación del personal, el control de ingresos y el servicio al huésped, por nombrar algunos. Además, debe vigilar atentamente las tendencias en la comercialización de alimentos y bebidas y los factores de control en la preparación de alimentos y bebidas y los servicios públicos de cocina.  ',
        imagen: require('@/assets/template/tema-4-14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Chef   // Chef ',
        texto:
          'The Chef supervises the hotel´s kitchen, managing the food preparation team. The main responsibility is to create the menu, making the decision of which dishes to serve and adjusting them to the brand standards. On a day-to-day basis, he supervises the orders of guests and customers, ensuring the quality of the food in presentation and preparation.  Occasionally, this person can assist in the preparation work, but their main responsibilities are administrative, such as overseeing the efficient use of equipment and raw materials, maintaining a very high level in the kitchen operation.  <br> <br> El Chef supervisa la cocina del hotel, gestionando el equipo de preparación de alimentos. La principal responsabilidad es crear el menú, tomando la decisión de qué platos servir y ajustándolos a los estándares de la marca. En el día a día, supervisa los pedidos de los huéspedes y clientes, asegurando la calidad de los alimentos en su presentación y preparación.  Ocasionalmente, puede ayudar en el trabajo de preparación, pero sus principales responsabilidades son administrativas, como supervisar el uso eficiente de equipos y materias primas, manteniendo un nivel muy alto en la operación de la cocina. ',
        imagen: require('@/assets/template/tema-4-15.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Maître  // Maître',
        texto:
          'The maître is responsible for the atmosphere of the restaurant, which means that they control everything from temperature to volume of music and lighting, to give the restaurant the right atmosphere. This person takes care of receiving each client and acts as chief waiter because he or she oversees all the service staff. He oversees serving VIP customers.  <br> <br> El maître es responsable del ambiente del restaurante, lo que significa que controlan todo, desde la temperatura hasta el volumen de la música y la iluminación, para dar al restaurante el ambiente adecuado. Se encarga de recibir a cada cliente y actúa como camarero jefe porque él o ella está a cargo de todo el personal de servicio. Es quien se encarga de servir a los clientes VIP. ',
        imagen: require('@/assets/template/tema-4-16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Cook  // Cocinero',
        texto:
          'The cook executes the preparation of the meals following the standard recipes. His or her duties include preparing the workplace, adhering to the restaurant menu, and following health and food safety procedures. Cooks, in addition to preparing food, clean and assist other cooks and staff to make food processing work efficiently.  <br> <br> El cocinero ejecuta la preparación de las comidas siguiendo las recetas estándar.  Sus deberes incluyen preparar el lugar de trabajo, adherirse al menú del restaurante y seguir los procedimientos de salud y seguridad alimentaria. Los cocineros, además de preparar alimentos, limpian y asisten a otros cocineros y personal para que el procesamiento de alimentos funcione de forma eficiente.  ',
        imagen: require('@/assets/template/tema-4-17.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Waiter  // Mesero',
        texto:
          'The waiter organizes the restaurant tables and prepares the necessary elements for the service. Once the service starts, this person offers the menu, suggesting drinks and explaining dishes preparations. He or she transmits the information to the kitchen, is attentive to the output of the dishes and serves his or her customers. He is pending to pick up what the customer no longer uses. He or she ends the service by taking the account and making the payment if it’s necessary.  <br> <br> El mesero se encarga de organizar las mesas del restaurante y preparar los elementos necesarios para el servicio. Una vez inicia el servicio, se encarga de ofrecer el menú, sugerir bebidas y explicar preparaciones. Transmite la información a la cocina, está atento de la salida de sus platos y sirve a sus clientes, está pendiente de recoger lo que ya el cliente no utiliza. Termina el servicio pasando la cuenta y apoyando la gestión de cobro si es el caso. ',
        imagen: require('@/assets/template/tema-4-18.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Steward   // Steward',
        texto:
          'His main responsibility is to maintain the cleanliness of the different areas of the kitchen, he must clean floors, walls, and counters. Also, he oversees washing glassware, crockery and cutlery. He manages the warehouses of kitchenware and supports the kitchen service.  <br> <br> Su principal responsabilidad es mantener la limpieza de las diferentes áreas de la cocina, debe limpiar suelos, paredes y mostradores. Además, supervisa el lavado de la cristalería, la vajilla y la cubertería. Gestiona los almacenes de menaje y apoya al servicio de cocina.  ',
        imagen: require('@/assets/template/tema-4-19.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Host  // Anfitrión',
        texto:
          'The host is responsible for welcoming customers, placing them at their table and offering the menu introducing the waiter who will serve them. This person does reservation control and the best use of the tables. Sometimes he or she also has the custody of coats and other objects left by the client while enjoying the service.  <br> <br> El anfitrión se encarga de dar la bienvenida a los clientes, ubicarlos en su mesa y presentarles la carta, a la vez que presenta al mesero que les atenderá. Es responsable por el control de las reservas y el mayor aprovechamiento de las mesas. En ocasiones, se encarga también de la custodia de abrigos y otros objetos dejados por el cliente mientras disfruta del servicio',
        imagen: require('@/assets/template/tema-4-20.png'),
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
