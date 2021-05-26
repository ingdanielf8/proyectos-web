<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 1
      .h3 Endomarketing
    figure
      img(src="@/assets/template/tema-1-1.svg", alt="Texto que describa la imagen")
    p.mt-5 El ambiente interno de la empresa es donde suelen suceder, antes que en otros escenarios, las propias estrategias de marketing. 
    TabsB.mt-5
      .py-4.py-md-5(titulo="Planes de mercadeo " :icono="require('@/assets/template/tema-1-2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Planes de mercadeo
            p En la formulación de planes de mercadeo, se tienen en cuenta los diferentes grupos presentes en la compañía, como la alta dirección, finanzas, investigación y desarrollo, compras, operaciones, recursos humanos y contabilidad. Todos estos grupos interrelacionados conforman el ambiente interno. Por ejemplo, la alta dirección establece la misión, los objetivos, las estrategias generales y las políticas de la empresa, y el área de marketing toma decisiones de acuerdo con las estrategias y los planes diseñados, trabajando en conjunto para la comprensión de las necesidades de los clientes y la creación de valor #[strong (Kotler y Armstrong, 2017).]
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-5.png', alt='Texto que describa la imagen') 
      .py-4.py-md-5(titulo="El endomarketing, o marketing interno" :icono="require('@/assets/template/tema-1-3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 El endomarketing y las ventas
            p El endomarketing para el área de las ventas se representa en la fuerza de venta externa e interna. Los vendedores externos se desplazan para visitar a los clientes, mientras que los vendedores internos realizan negocios desde su oficina por medio del teléfono, mediante interacciones en línea en social media o, bien, reciben visitas de compradores potenciales. Las ventas internas se han incrementado por el auge de las tecnologías en línea, móviles y de social media. Algunos vendedores internos apoyan a la fuerza de ventas externa, lo que permite a esta última dedicar más tiempo a fomentar las labores de ventas con cuentas grandes y a encontrar nuevos clientes. El vendedor interno proporciona acceso y apoyo cotidiano, mientras que el externo ofrece colaboración cara a cara y entabla relaciones #[strong (Kotler y Armstrong, 2017).]
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-6.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="El endomarketing, o marketing interno" :icono="require('@/assets/template/tema-1-4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 El endomarketing, o marketing interno
            p Es un proceso de gestión –cíclico y continuo– que promueve la motivación de los trabajadores, el mejoramiento del clima organizacional y la obtención de un mayor grado de lealtad y compromiso en la relación empresa-trabajador. El endomarketing busca que los empleados se sientan parte de la empresa, que tomen conciencia de la importancia de sus aportes al fortalecimiento de la misma y que lleven a cabo acciones que redunden en un mayor beneficio y mejores resultados para la organización y para ellos mismos. Su propósito principal es fidelizar o comprometer al empleado con la empresa, mediante el otorgamiento de un buen servicio interno, excelentes condiciones laborales y, por supuesto, respuestas positivas y oportunas a sus requerimientos. 
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-7.png', alt='Texto que describa la imagen')

    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Talento humano
    .row.borde-gris.p-5
      .col-md-4
        figure
          img(src='@/assets/template/tema-1-8.png', alt='Texto que describa la imagen')
      .col-md-8
        p La gestión del talento humano hace referencia a la misión, visión del futuro, mentalidad, cultura corporativa y valores que predominan en cada organización. Depende principalmente de las características de las personas que la forman en su estructura organizacional, cultura corporativa, características del mercado y el negocio de la organización. Todo eso crea una mezcla compleja que hace que cada organización sea única. Cualquier proceso productivo solo es posible con la participación conjunta de diversos grupos de interés y cada uno contribuye con algún recurso con el objetivo de recibir algo a cambio. 
        p.mt-4 En el gráfico siguiente, se pueden visualizar los grupos de interés del talento humano (stakeholders). Para cada uno de ellos, es posible identificar su contribución a los rendimientos en la organización.
    .row
      .col-12.bg-gris.p-5.text-align-center
        figure
          img(src='@/assets/template/tema-1-9.png', alt='Texto que describa la imagen').w-75
      figcaption Referencia SENA
    p.mt-5 #[strong Chiavenato (2020)] menciona los aspectos fundamentales en la administración moderna para la gestión del talento humano.    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Las personas como seres humanos:")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Dotadas de personalidad propia, inteligencia y profundamente diferentes entre sí, con un historial personal, particular y diferenciado, poseedoras de conocimientos, habilidades y competencias indispensables para la debida administración de los demás recursos de la organización. Las personas como individuos y no como meros recursos de la organización. Ya no es cuestión de administrar recursos, sino de gestionar el talento humano que las personas ofrecen a la organización.
      .row(titulo="Las personas como activadores de los recursos de la organización:")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-11.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Como elementos que impulsan la organización, capaces de dotarla del talento indispensable para su constante renovación y competitividad en un mundo lleno de cambios y desafíos. Las personas como fuente de impulso propio que dinamiza a la organización y no como agentes pasivos, inertes y estáticos. A la fecha, no existen organizaciones sin personas.
      .row(titulo="Las personas como asociadas de la organización:")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-12.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Capaces de conducirla a la excelencia y al éxito. Como asociadas, las personas hacen inversiones en la organización (esfuerzo, dedicación, responsabilidad, compromiso, riesgos, etc.), con la esperanza de obtener rendimientos de esas inversiones, por medio de salarios, incentivos económicos, crecimiento profesional, satisfacción, desarrollo de carrera, etc. Toda inversión solo se justifica si produce un rendimiento razonable. En la medida en que el rendimiento sea bueno y sustentable, la tendencia ciertamente será hacia mantener o aumentar la inversión. De ahí el carácter de reciprocidad en la interacción entre las personas y las organizaciones. También es el carácter de la acción y la autonomía de las personas, y ya no de su pasividad e inercia.
      .row(titulo="Las personas como talentos proveedores de competencias")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-13.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Esto es, como elementos vivos y portadores de competencias esenciales para el éxito de la organización. Cualquier organización puede comprar máquinas y adquirir tecnologías para equipararse con sus competidores, lo cual es relativamente fácil, pero construir competencias similares a las que poseen los competidores es extremadamente difícil, lleva tiempo, maduración y aprendizaje.
      .row(titulo="Las personas como el capital humano de la organización:")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-14.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Como el principal activo de la empresa, agrega inteligencia y enfoque al negocio.
          p.mt-4 Las personas son el principal activo de la organización, y de ahí la necesidad de que las empresas sean más conscientes de sus trabajadores y les presten más atención. Cuando una organización se orienta realmente hacia las personas, su filosofía global y su cultura organizacional reflejarán esa creencia. Las personas aumentan o reducen las fortalezas y las debilidades de una organización, a partir de cómo sean tratadas. Pueden ser fuente de éxito y también de problemas. Es mejor tratarlas como fuente de éxito. #[strong Chiavenato (2020)] menciona a continuación, los objetivos de la gestión del talento humano que contribuyen con la eficacia de la organización:
          .row.mt-5
            .col-10
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 1
                  | Ayudar a la organización a realizar su misión y alcanzar sus objetivos.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 2
                  | Dotar de competitividad y sostenibilidad a la organización.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 3
                  | Proporcionar a la organización personas capacitadas y motivadas.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 4
                  | Aumentar la autorrealización y la satisfacción de las personas en el trabajo.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 5
                  | Desarrollar y elevar la calidad de vida en el trabajo.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 6
                  | Administrar e impulsar el cambio.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 7
                  | Mantener políticas éticas y comportamiento socialmente responsable.
                li
                  .lista-ol--cuadro__vineta
                    span.text-white 8
                  | Construir la mejor empresa y el mejor equipo.
    .h5.mt-5 1.1.1 Clientes internos.
    .row.mt-5
      .col
        .cajon.color-acento-botones.p-4.mb-4.bg-amarillo-claro
          .row
            .col-md-4
              figure
                img(src='@/assets/template/tema-1-15.png', alt='Texto que describa la imagen')
            .col-md-8
              p Tradicionalmente, se escucha la palabra “cliente” para referirse a las personas naturales o jurídicas que adquieren ciertos bienes o servicios. Dentro de las denominaciones más conocidas se destacan: consumidor, comprador, paciente, usuario, estudiante, pasajero, entre otras. Estos, por quienes las empresas invierten recursos para la satisfacción de sus necesidades y expectativas, son conocidos como “clientes externos” de las empresas, en ocasiones, con detrimento de la satisfacción del capital humano –cliente interno–, considerado a través de la historia como el activo número uno de la organización. 
    p.mt-5 Todas las personas dentro de la compañía que intervienen en procesos generadores de resultados, como productos o servicios entregados a los clientes externos, conforman los “clientes internos”. Son las personas que laboran en la organización, que tienen necesidades y expectativas por satisfacer en el interior de la compañía, a través de productos o de servicios que se proveen mediante diferentes medios y procesos #[strong (Martínez, 2016).] 
    p.mt-5 #[strong Martínez (2016)] menciona las #[strong características principales que deben tener los clientes internos:] 
    .row.mt-5
      .col-sm.mb-5.mb-sm-0.mt-3
        ul.lista-ul
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Calidad]  en los productos o servicios ofrecidos.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Cumplimiento]  en la cantidad de productos o servicios vendidos mensualmente. Cumplimiento de compromisos. Agilidad y oportunidad en los procesos.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Comunicación efectiva], mediante la aplicación de buenas prácticas y pautas para transmitir y recibir, de manera correcta y oportuna, los mensajes que se cruzan e intercambian.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Seguridad], en cuanto a la garantía de que los productos y servicios que se provean, reflejada en la ausencia de errores. 
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Confianza]  en la información que se intercambia.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Idoneidad del servicio], satisfacción de los requerimientos y expectativas de los clientes.
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Capacidad técnica con conocimientos], habilidades y actitudes para la solución de problemas. 
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Atención humanizada], ya que el servicio ocurre entre personas. 
          li.mb-0.mt-3 
            .row
              .col-1.text-align-right
                i.fas.fa-brain
              .col-11.borde-bot-gris
                p #[strong Ética], principios y valores que implican vocación y orientación al servicio, honradez, buena fe, confianza mutua, solidaridad, corresponsabilidad en el trabajo, transparencia, dedicación al trabajo, respeto a las personas y escrupulosidad en el manejo de la información.
    .h5.mt-5 1.1.2 Cliente interno satisfecho.
    p.mt-5 Cliente interno y la satisfacción de sus necesidades son un elemento clave en el desarrollo y éxito de la organización.
    figure.mt-5
      img(src='@/assets/template/tema-1-16.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-12
        p #[strong Para Prettel (2016)] , los elementos de la comunicación se definen de la siguiente manera:
      .col-12.mt-4
        TabsA.mb-5
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="“Lo primero, es lo primero”")
            h4 “Lo primero, es lo primero”
            p.mt-4 Se debe satisfacer primero al cliente interno que al externo. Los empleados de la organización deben tener la prioridad cuando de servicio se trata. Se necesita incentivar esfuerzos específicos, de naturaleza conceptual, didáctica, informativa y cultural, frente a su público interno.
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="La atención interna ")
            h4 La atención interna 
            p.mt-4 Favorece los procesos de fortalecimiento del liderazgo, el sentido de pertenencia, el incremento de la productividad y la creatividad, la motivación y la focalización de los esfuerzos hacia el logro de los resultados. Por ende, ocuparse activamente de la atención al cliente interno es una de las acciones de supervivencia más importantes de cualquier organización, sea pública o privada. 
          .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Servicio “fuera de serie”")
            h4 Servicio “fuera de serie”
            p.mt-4 Las empresas que valoran la necesidad de brindar un servicio fuera de serie a sus clientes internos tienen bien claro que “la ley entra por casa” y, para ello, invierten esfuerzos importantes en la definición y ejecución de políticas y estrategias de atención a su público interno, para lograr la motivación y compromiso necesarios hacia su trabajo, su organización y sus colegas #[strong (Martínez, 2016).]          
    p.mt-5 En el siguiente gráfico se explican los beneficios de la calidad del servicio en una organización y los beneficios de tener un cliente interno satisfecho.
    .row.mt-5 
      .col-12.bg-gris.p-5.text-align-center
        figure
          img(src='@/assets/template/tema-1-17.png', alt='Texto que describa la imagen').w-75
      figcaption Referencia SENA
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Manual corporativo
    .row.mt-5
      .col-md-6
        p Si se analiza el término “identidad corporativa” con más profundidad, se observa que es el “ser” de la empresa, su esencia. Cuando se estudia un ser humano, este tiene una serie de atributos y genes que le hacen diferente. Ocurre lo mismo con las empresas. Las empresas no tienen genes, pero sí tienen imagen corporativa, una serie de atributos identificadores y diferenciadores. #[strong (Pintado, 2013)]
      .col-md-6.text-align-center
        figure
          img(src='@/assets/template/tema-1-18.png', alt='Texto que describa la imagen').w-75
    p.mt-5  Conozca, desde la definición de #[strong Pintado (2013)], los factores que, habitualmente, se tienen en cuenta de la identidad corporativa para la realización de un manual corporativo:
    TabsB.mt-5
      .py-4.py-md-5(titulo="Historia de la compañía." :icono="require('@/assets/template/tema-1-19.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Historia de la compañía. 
            p Desde su fundación hasta el presente, tanto los momentos positivos como los negativos que la han podido afectar de una u otra forma. Para comprender la situación actual de la empresa y su identidad, es obligado conocer su historia, que es de carácter permanente, inmodificable. Se incluyen asociaciones con productos o servicios pioneros, patentes o prototipos, transformaciones introducidas en el mercado, entre otras; también perfil de los clientes, proveedores, y éxitos y fracasos de las personas que han trabajado en la empresa.

          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-24.png', alt='Texto que describa la imagen') 
      .py-4.py-md-5(titulo="El proyecto empresarial." :icono="require('@/assets/template/tema-1-20.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 El proyecto empresarial.
            p Relacionado con el momento presente de la compañía. Este factor debe ir cambiando con el fin de adaptarse a las nuevas circunstancias del entorno. El proyecto de la empresa debe hacer referencia a:
            .row.mt-5
              .col-10
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white 1
                    | La filosofía de la compañía, sus valores.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white 2
                    | Su estrategia corporativa.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white 3
                    | Los procedimientos de gestión utilizados en las diferentes áreas funcionales.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white 4
                    | La cultura corporativa, que está formada por los comportamientos o formas de hacer las cosas, los valores compartidos en la empresa, así como las convicciones existentes. La cultura, por tanto, puede hacer referencia tanto al presente como al pasado
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-25.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Identidad de la organización." :icono="require('@/assets/template/tema-1-21.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Identidad de la organización.
            p Cuando la identidad de la organización es clara y bien definida, es el momento de intentar proyectarla hacia los públicos, con el fin de que estos tengan una imagen positiva. Una de las propiedades más importantes de la imagen corporativa es su naturaleza intangible. Está claro que debe ser positiva y que es fundamental para conseguir el éxito empresarial. #[strong (Pintado, 2013)]
            p.mt-4 #[strong García (2016)] determina dos manuales que deben tener las organizaciones, #[strong el manual de comunicación] y el #[strong manual de identidad corporativa], que sirven para configurar la personalidad corporativa logrando identificar y diferenciar la visibilidad pública en el desarrollo de la estrategia de imagen corporativa.
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-26.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Manual de comunicación." :icono="require('@/assets/template/tema-1-22.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Manual de comunicación.
            p Se ocupa globalmente de la política comunicativa. Es un aparato normativo que regula en la práctica la comunicación de la empresa, desde el punto de vista conceptual, formal y funcional, para transmitir una imagen homogénea a través de su comunicación. El manual cumple con las siguientes funciones: 
            .row.mt-5
              .col-10
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white a
                    | Formalizar la política de comunicación e imagen de la empresa.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white b
                    | Afianzar un estilo propio de comunicación para identificar y diferenciar a la organización.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white c
                    | Esquematizar la organización de la comunicación.
                  li
                    .lista-ol--cuadro__vineta
                      span.text-white d
                    | Normalizar la práctica comunicativa prescribiendo normas.
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-27.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Manual de identidad corporativa." :icono="require('@/assets/template/tema-1-23.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            .h4 Manual de identidad corporativa.
            p Concreta las estrategias de identidad visual de la organización. Es un instrumento que presenta contenidos fijos y contenidos variables.
            .row
              .col-12.bg-rojo-claro.p-4.mt-3
                .h5 Contenidos fijos
                p.mt-4 Los principales contenidos fijos son: presentación, índice, logotipo, símbolo gráfico, marca, colores corporativos, tipografía corporativa, versiones de la marca, relaciones proporcionales, espacio de respeto, tamaño mínimo, versiones cromáticas, versiones monocromáticas, variaciones cromáticas en la impresión, textura corporativa, usos incorrectos, originales digitales, papelería. 
              .col-12.bg-rojo-claro.p-4.mt-4
                .h5 Contenidos variables
                p.mt-4 Los contenidos variables son: modo de uso, terminología básica, historia y valores de la marca, esquema de trazado, pruebas sobre fondos, colores secundarios, fraccionamiento del símbolo, publicaciones, publicidad, elementos promocionales, elementos del punto de venta, señalética, parque móvil, uniformes, usos web, muestras de color.
          .col-md-6.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-28.png', alt='Texto que describa la imagen')
    .h5.mt-5 1.2.1  Imagen corporativa
    .row.mt-5
      .col-10.offset-1
        .row.borde-gris.p-3
          .col-2
            figure
              img(src='@/assets/template/tema-1-29.png', alt='Texto que describa la imagen').w-100
          .col-10.align-self-center
            p La imagen corporativa se puede definir como una evocación o representación mental que conforma cada individuo. Está formada por un cúmulo de atributos referentes a la compañía; cada uno de esos atributos puede variar, coincidir o no. 
    p.mt-5 A continuación, se presentan algunas perspectivas elementales desde donde se configura la imagen de una organización.
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Desde las personas: ")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-30.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Es la imagen que una persona tenga de una empresa. Por ejemplo, la imagen de Coca-Cola puede ser totalmente diferente. Es posible que un adulto crea que Coca-Cola es una marca clásica, de toda la vida, y la asocie a su refresco habitual; sin embargo, una persona de menor edad la asociará con una marca joven, ligada a la felicidad, la diversión, y que permite el contacto con otros jóvenes a través de su plataforma web. #[strong (Pintado, 2013)]
      .row(titulo="Sensibilidades y percepciones: ")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-31.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p La imagen de la organización se basa en los sentimientos que los consumidores y empresas tienen en conjunto y para cada una de sus marcas. La publicidad, la promoción comercial, las ventas personales, el sitio web de la empresa y otras actividades de marketing afectan las percepciones que tienen los consumidores de la empresa.
      .row(titulo="Fortaleza de la marca: ")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-32.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p una marca fuerte crea una importante ventaja para cualquier producto o servicio. Cuando la imagen de una organización o alguna de sus marcas se empaña por alguna razón, los ingresos de las ventas y las utilidades pueden desplomarse. Reconstruir o revitalizar una imagen es una tarea difícil #[strong (Clow y Baack, 2010).]
      .row(titulo="El marketing:")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-33.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p La comunicación eficaz de marketing comienza con una imagen corporativa claramente definida. La imagen resume qué representa la empresa y la posición que ha establecido. El objetivo de la administración de imagen es crear una impresión específica en la mente de los clientes y usuarios.
          ul.lista-ul.mt-3
            li.mb-0 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p En el caso de las compañías aseguradoras, la utilidad, seguridad y prevención de accidentes son elementos comunes y favorables de una imagen fuerte.   
            li.mb-0.mt-2 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Nombres corporativos como Dell, Toyota, Nike y Exxon Mobile evocan imágenes en la mente de los consumidores. 
            li.mb-0.mt-2 
              .row
                .col-1.text-align-right
                  i.fas.fa-angle-right.color-c.text-center
                .col-11
                  p Aunque la versión específica de la imagen varía de un consumidor a otro, o de un comprador empresarial a otro, la imagen global de la empresa queda determinada por los puntos de vista combinados de todos los públicos, los que a su vez pueden tener influencia positiva o negativa en los consumidores #[strong (Clow y Baack, 2010).]
      .row(titulo="Identidad sólida: ")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-34.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Se puede construir desde el interior de la empresa a partir de una sólida identidad, tanto cultural y filosófica como visual, y se refleja en cualidades y atributos tanto cognitivos como emocionales. Estos aspectos son comunicados a sus diferentes públicos con el propósito de crear esta imagen deseada en la mente del consumidor. Por lo tanto, se asevera que el fortalecimiento de la imagen corporativa es externo a la organización y será un éxito si la asociación que hacen los públicos entre la imagen deseada por la empresa y la imagen real es positiva (Beltrán et al. 2014).
    p.mt-5 Cabe aún señalar los componentes de la imagen corporativa. Según #[strong Beltrán et al. (2014)], los dos componentes fundamentales que conforman la identidad corporativa son la identidad conceptual y la identidad visual. Se pueden apreciar en el gráfico a continuación.
    .h5.mt-5 Identidad conceptual
    figure.mt-4
      img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen")
    SlyderB.mb-5(:datos="datosSlyder1").mt-5
    .h5.mt-5 Identidad visual 
    figure.mt-4
      img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen")
    SlyderB.mb-5(:datos="datosSlyder2").mt-5
    .h5.mt-5 1.2.2  Elementos de la imagen corporativa.
    p.mt-5 En la siguiente tabla, se muestran los elementos de la imagen corporativa, tangibles e intangibles.
    p.mt-5 Elementos tangibles e intangibles
    .row
      .col-10.offset-1
        .tabla-b.mb-5.mt-3
          table(style="table-layout: fixed;").text-center
            thead
              tr.bg-rojo.text-white
                th Elementos tangibles
                th Elementos intangibles
            tbody
              tr
                td Bienes y servicios vendidos
                td.borde-izq Políticas corporativas, de personal y ambientales
              tr
                td Tiendas al detalle o minoristas donde se vende el producto
                td.borde-izq Ideales y creencias del personal corporativo 
              tr
                td Fábricas donde se produce el producto
                td.borde-izq Cultura del país y localización de la empresa
              tr
                td Publicidad, promoción y otras formas de comunicación
                td.borde-izq Informes de los medios
              tr
                td Nombre y logotipo corporativos
                td.borde-izq
              tr
                td Empaques y etiquetas
                td.borde-izq
              tr
                td Empleados
                td.borde-izq  
          figcaption Referencia tomada de  Clow y Baack (2010).
    p.mt-5 Una empresa con una imagen bien establecida facilita la decisión de los clientes empresariales que tratan de reducir el tiempo de búsqueda. El refuerzo psicológico y la aceptación social también pueden estar presentes. Una imagen de empresa o nombre de marca fuerte puede establecer la diferencia en la selección entre competidores #[strong (Clow y Baack, 2010).]
    p.mt-5 Desde el punto de vista de la organización, una imagen de renombre genera los siguientes beneficios:
    .row.mt-3
      .col-10
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta
              span.text-white 1
            | Extensión de los sentimientos positivos del consumidor hacia los productos nuevos
          li
            .lista-ol--cuadro__vineta
              span.text-white 2
            | La posibilidad de cobrar un precio u honorario más elevado.
          li
            .lista-ol--cuadro__vineta
              span.text-white 3
            | Recomendaciones de boca en boca.
          li
            .lista-ol--cuadro__vineta
              span.text-white 4
            | Nivel más alto de poder del canal
          li
            .lista-ol--cuadro__vineta
              span.text-white 5
            | La posibilidad de atraer empleados competentes.
          li
            .lista-ol--cuadro__vineta
              span.text-white 6
            | Calificaciones más favorables de observadores y analistas financieros.
    p.mt-5 Para #[strong Pintado (2013)], la imagen corporativa se puede manifestar en multitud de elementos relacionados con la empresa y con las marcas o productos concretos, ya que están íntimamente ligados a las percepciones de la empresa en general. A continuación, se detallan los elementos que habitualmente son asociados con la imagen:
    p.mt-5 Para #[strong Prettel (2016)], los elementos de la comunicación se definen de la siguiente manera:
    TabsA.mt-4
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Edificios o entornos: ")
        h4 Edificios o entornos: 
        p.mt-4 Los edificios corporativos son fundamentales desde el punto de vista de la imagen, ya que su aspecto externo puede asociarse con la tradición, modernidad o prestigio. También es importante la zona donde estén ubicados.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Los productos y su presentación: ")
        h4 Los productos y su presentación:  
        p.mt-4 Son factores muy importantes. Tanto el producto como su presentación, a través de envases o cajas, tienen una gran influencia en las decisiones de compra y consumo de los usuarios.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Logotipos y colores corporativos: ")
        h4 Logotipos y colores corporativos: 
        p.mt-4 La tipografía y la papelería de la compañía son elementos fundamentales para definir de una forma clara e inconfundible la imagen de la empresa.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Personalidades: ")
        h4 Personalidades: 
        p.mt-4 Existe una variedad de personas que pueden influir en que la imagen percibida sea positiva o negativa. Los empleados de la compañía, con su atención al cliente, mantienen una percepción adecuada de la organización. Los directivos o fundadores, dependiendo de su fuerza, institución y aparición en los medios de comunicación, pueden potenciar un mayor conocimiento y notoriedad de marca. Los famosos que tienen contratos de imagen con algunas compañías en campañas publicitarias.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Íconos corporativos: ")
        h4 Íconos corporativos: 
        p.mt-4 Es un elemento visual cuyo atractivo y connotaciones sirven para identificar a una compañía o a una marca. Algunos íconos corporativos gozan de gran éxito y permanecen inalterables durante años. El ícono corporativo puede tener su propio nombre, como ocurre en los casos del muñeco Bibendum de Michelin o Ronald Mcdonald. Otras veces, el ícono corporativo no es un elemento visual, sino que es una música identificativa que se utiliza desde en la publicidad hasta en las llamadas telefónicas en espera; o, en el caso de Coordinadora, con el sonido de sus camiones. También puede ser un aroma distintivo, por ejemplo, las tiendas StudioF.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Comunicación: ")
        h4 Comunicación: 
        p.mt-4 Es un elemento fundamental para formar la imagen de una organización. Es una de las áreas en que las compañías invierten mayor presupuesto. Se da en medios masivos (televisión, prensa, revistas), en Internet, las promociones, eventos, ferias, patrocinios, ofreciendo siempre una imagen coherente y armónica, con una comunicación basada en los valores corporativos, utilizando como apoyo los claims o slogans, la identidad corporativa (logo, colores), los íconos y lemas corporativos.
    .row.mt-5
      .col
        .cajon.color-primario.p-4.mb-4.bg-rojo-claro
          .row
            .col-md-4
              figure
                img(src='@/assets/template/tema-1-43.png', alt='Texto que describa la imagen')
            .col-md-8
              p Es difícil cambiar por completo la imagen que la gente tiene de una organización. Sin embargo, es necesario cambiar la imagen cuando los mercados captados comienzan a reducirse o a desaparecer, o cuando la imagen de la empresa ya no coincide con las tendencias de la industria y las expectativas de los consumidores. #[strong (Clow y Baack, 2010)]
    .row.mt-5
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-2.d-none.d-lg-block.align-self-center
            figure(style='margin-left: 45px; position:relative ; z-index:  99;')
              img(src="@/assets/template/tema-1-44.svg", alt="Texto que describa la imagen").w-75
          .col-12.col-lg-9.align-self-center.p-5.bg-azul-claro.rounded
            h5 Nombre corporativo
            p.mt-3 En la siguiente tabla, se puede apreciar la forma en que el nombre corporativo “es, en realidad, la piedra angular de la relación de la empresa con sus clientes. Establece la actitud y el tono, y constituye el primer paso para establecer una personalidad”.
    .row
      .col-12
        .tabla-b.mb-5.mt-3
          table(style="table-layout: fixed;").text-center
            thead
              tr.bg-rojo.text-white
                th Nombres
                th Denotan
                th Utilidades del planograma
            tbody
              tr
                td Nombres explícitos
                td.borde-izq Revelan lo que la empresa hace.
                td.borde-izq Servientrega, empresa de entrega de paquetería
              tr
                td Nombres implícitos
                td.borde-izq Contienen palabras, o partes de palabras, reconocibles, que transmiten lo que la empresa hace.
                td.borde-izq SENA, Servicio Nacional de Aprendizaje
              tr
                td Nombres conceptuales
                td.borde-izq Captan la esencia de lo que la empresa ofrece.
                td.borde-izq Google, evoca la visión de un lugar donde es posible encontrar un sinfín de artículos
              tr
                td Nombres iconoclastas
                td.borde-izq Representan algo único, diferente y memorable.
                td.borde-izq Chanel, representa exclusividad
          figcaption Referencia Tabla - Tomadas de David Placek, presidente y fundador de Lexicon, Inc.
    .h5.mt-5 Logotipos corporativos
    .row.mt-5
      .col-3.d-none.d-md-block
        figure
          img(src='@/assets/template/tema-1-45.png', alt='Texto que describa la imagen')
      .col-12.col-md-9
        .row
          .col-12
            .cajon.color-primario.py-4.px-5.mb-4(style='background-color: rgba(214, 70, 38, 0.4) ;')
              .h6 El logotipo
              p.mt-4 Un logotipo corporativo es un símbolo que se usa para identificar una organización y sus marcas, lo cual ayuda a transmitir la imagen corporativa de conjunto. El logotipo debe diseñarse con cuidado para que sea compatible con el nombre de la corporación. 
          .col-12
            .cajon.color-primario.py-4.px-5.mb-4(style='background-color: rgba(214, 70, 38, 0.25) ;')
              .h6 Importancia
              p.mt-4 Los logotipos son importantes, sobre todo en las compras en tiendas. La mente procesa los elementos visuales más rápido que las palabras. Los compradores pueden reconocer con mayor rapidez un logotipo corporativo.
          .col-12
            .cajon.color-primario.py-4.px-5.mb-4(style='background-color: rgba(214, 70, 38, 0.2) ;')
              .h6 Recordación
              p.mt-4 El reconocimiento de logotipos ocurre cuando el consumidor logra recordar haber visto el logotipo anteriormente. Este se almacena en la memoria y, cuando el consumidor lo ve en la tienda, se estimula la memoria
          .col-12
            .cajon.color-primario.py-4.px-5.mb-4(style='background-color: rgba(214, 70, 38, 0.1) ;')
              .h6 Sentimientos positivos por la marca
              p.mt-4 Este recordatorio puede suscitar sentimientos positivos relativos a la corporación o al producto de marca. Ejemplo: Apple, creado por Rob Janoff, de Regis McKenna Advertising, en 1977. Algunas personas creen que la mordida representa la manzana de Adán y Eva, pero en realidad se incluyó para que la gente no confundiera la manzana con un tomate. #[strong (Clow y Baack, 2010)] 
    .h6.mt-5 Nombre de marca fuerte
    p.mt-5 Una de las principales características que debe tener una marca fuerte es que contiene algo que resulta sobresaliente para los clientes. 
    .row.mt-4
      .col-12.col-md-9.align-self-center
        ul.lista-ul.mt-3
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Este atributo pueden ser los beneficios que los consumidores consideran importantes y de mejor calidad que otras marcas, la relación entre calidad y precio, y la creencia que la marca es superior a otras debido a su imagen.    
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Los consumidores recomiendan las marcas a sus familiares y amigos debido a una o más propiedades sobresalientes #[strong (Clow y Baack, 2010).]
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p El valor capital de marca (brand equity) es un conjunto de características exclusivas de una marca. En esencia, el valor capital de marca es la percepción que un bien o servicio, que ostenta determinado nombre de marca, es diferente y mejor.
      .col-3.d-none.d-md-block
        figure
          img(src='@/assets/template/tema-1-46.svg', alt='Texto que describa la imagen')
    .h6.mt-5 Nombre de marca fuerte
    p.mt-5 #[strong O´Guinn et al. (2013)] explican que la publicidad corporativa no está diseñada para promover los beneficios de una marca específica. Tiene la intención de establecer una actitud favorable hacia una empresa como un todo. Varias empresas consideradas exitosas y de alto nivel utilizan la publicidad corporativa para mejorar la imagen de la empresa y afectar las actitudes de los consumidores. Los objetivos de la publicidad corporativa son los siguientes:
    .row.mt-5
      .col-12.col-lg-6
        ol.lista-ol--cuadro
          li.py-3.borde-bot-gris
            .lista-ol--cuadro__vineta
              span.text-white 1
            | Construir la imagen de la empresa entre los clientes, los accionistas, la comunidad financiera y el público en general.
          li.py-3.borde-bot-gris
            .lista-ol--cuadro__vineta
              span.text-white 2
            | Impulsar la moral de los empleados o atraer nuevos empleados.
          li.py-3.borde-bot-gris
            .lista-ol--cuadro__vineta
              span.text-white 3
            | Comunicar los puntos de vista de una organización acerca de temas sociales, políticos o ambientales.
          li.py-3.borde-bot-gris
            .lista-ol--cuadro__vineta
              span.text-white 4
            | Posicionar mejor los productos de la empresa frente a la competencia, en particular la competencia extranjera.
          li.py-3.borde-bot-gris
            .lista-ol--cuadro__vineta
              span.text-white 5
            | Desempeñar un rol publicitario al proporcionar una plataforma para campañas de marca más específicas.
      .col-6.d-none.d-lg-block.align-self-center
        figure
          img(src='@/assets/template/tema-1-47.png', alt='Texto que describa la imagen')
    .h5.mt-5 1.2.3  Normativa: salud y seguridad en el trabajo
    .row.mt-5
      .col-5.d-none.d-lg-block.align-self-center
        figure
          img(src='@/assets/template/tema-1-48.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7
        p OIT es la sigla de la Organización Internacional del Trabajo, que funciona bajo las directrices de la Organización de las Naciones Unidas (ONU). La OIT nació en Ginebra, Suiza, en 1919 y, una vez al año, se reúne la Conferencia Internacional del Trabajo, donde se evalúa el estado de la OIT a nivel mundial, se sacan conclusiones y se dictan normas para el crecimiento mundial de la organización y para legislar en cada país suscrito. En Colombia, la normativa sobre seguridad y salud en el trabajo está regida bajo la Resolución 0312 de 2019, que modifica las fases de implementación del SG-SST.
        p.mt-4 #[strong Rueda y Zambrano (2018)] mencionan que la ergonomía ha profundizado en tres áreas del conocimiento o especialidades en los ámbitos físico, mental y social: la ergonomía física, la ergonomía cognitiva y la ergonomía organizacional.
    .h6.mt-5 1.2.3.1  Ergonomía
    TabsB.mt-5
      .py-4.py-md-5(titulo="Ergonomía física: " :icono="require('@/assets/template/tema-1-49.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Ergonomía física:  
            p Esta rama se basa en el reconocimiento de las capacidades y limitaciones humanas desde los componentes anatómico, antropométrico, fisiológico y biomecánico en su relación con el trabajo. 
            p #[strong En el contexto de prevención] de riesgos o salud laboral, la aplicación de la ergonomía física predominará sobre las otras dos especialidades, debido, entre otras cosas, a la alta presentación de enfermedades osteomusculares en las industrias. 
            p #[strong Dentro de la ergonomía física], se establecen lineamientos para regular la exposición a actividades con manipulación manual de cargas, posturas de trabajo, movimientos de alta frecuencia o movimientos repetitivos y sobreesfuerzos. 
            p #[strong Patrones del diseño del entorno laboral]. También incluye patrones relacionados con el diseño y las dimensiones de los puestos, espacios y elementos de trabajo, vestuario y elementos de protección personal; así como las condiciones ambientales de temperatura, ruido, iluminación, vibración, humedad, radiación, y, en general, todos aquellos aspectos que en el trabajo puedan afectar físicamente al trabajador.
          .col-md-4.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-52.svg', alt='Texto que describa la imagen') 
      .py-4.py-md-5(titulo="Ergonomía cognitiva: " :icono="require('@/assets/template/tema-1-50.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Ergonomía cognitiva: 
            p Según lo define la Asociación Internacional de Ergonomía (IEA), con esta especialidad se hace seguimiento a los procesos mentales que exigen las tareas, tales como la percepción, la memoria, el razonamiento y la respuesta motora, que afectan las interacciones entre los seres humanos y los otros elementos de un sistema. 
            p #[strong Carga mental] Todas las actividades laborales y extra laborales incluyen requerimientos variables de carga mental. Para controlar una posible sobrexposición y, con ello, consecuencias indeseadas con efecto en la persona o en el proceso productivo. 
            p #[strong Aportes de la ergonomía cognitiva]. La ergonomía cognitiva aporta información para no exceder las capacidades individuales en acciones que incluyan, por ejemplo, la toma de decisiones, el uso de interfaces y controles para la interacción con equipos o máquinas, el uso de volúmenes significativos de información para situaciones particulares del trabajo, la manipulación de información compleja con inclusión de cálculos matemáticos o ambigüedad, entre otras.
          .col-md-4.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-53.svg', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Ergonomía organizacional:" :icono="require('@/assets/template/tema-1-51.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Ergonomía organizacional:
            p Para la IEA, esta rama de la ergonomía se orienta al diseño y la optimización de sistemas sociotécnicos (interacciones entre la tecnología, métodos de producción y las personas), incluyendo la estructura organizacional, políticas y procesos. Con la ergonomía organizacional se desarrollan requerimientos para que la organización y administración del trabajo se construyan teniendo en cuenta la mayor productividad posible, pero considerando que las exigencias al trabajador estén dentro de los límites establecidos por la ergonomía física y la cognitiva.
          .col-md-4.justify-content-center.align-self-center
            figure
              img(src='@/assets/template/tema-1-54.svg', alt='Texto que describa la imagen')
    .row.mt-5
      .col-10.offset-1.borde-top-gris
        .row.py-4
          .col-4.d-none.d-lg-block.align-self-center
            figure(style='margin-left: 45px; position:relative ; z-index:  99;')
              img(src="@/assets/template/tema-1-55.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-8.align-self-center.p-5.bg-azul-claro.rounded
            p.mt-3 A continuación, se aprecian los tipos de intervención ergonómica para las organizaciones, según planteamientos de #[strong Rueda y Zambrano (2018).]
    .row.mt-5
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-izq-amarillo
        .h6 Intervención preventiva: 
        p.mt-4 Conocida como ergonomía preventiva o de concepción, se utiliza en las etapas de diseño, planeación y maduración de proyectos, o para la modernización de equipos y sistemas existentes. 
    .row.mt-4
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-der-amarillo
        .h6 La ergonomía preventiva se caracteriza 
        p.mt-4 Porque incluye la generación de ideas, los estudios de factibilidad, la planeación y el desarrollo de alternativas de diseño, al igual que la construcción de pliegos técnicos para la adquisición de equipos o para el diseño y la organización de los oficios. 
    .row.mt-5
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-izq-amarillo
        .h6 Ejemplos de la ergonomía preventiva  
        p.mt-4 Son la concepción de espacios en la planeación de nuevas instalaciones o áreas de trabajo, el diseño, la modificación o los ajustes de elementos de trabajo y la concepción de procesos o rutinas de trabajo. 
    .row.mt-4
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-der-amarillo
        .h6 Intervención correctiva o de perfeccionamiento: 
        p.mt-4 Consiste en un conjunto de procedimientos que se aplican para la corrección puntual de errores heredados del proceso de diseño en las tareas o en la infraestructura que está en operación.
    .row.mt-5
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-izq-amarillo
        .h6 Razones de la intervención correctiva:  
        p.mt-4 Ocurre debido a que se presentan errores o fallas en la productividad por aumentos de tiempos muertos, reprocesos, o porque han causado algún accidente, enfermedad o reporte de incomodidad en los trabajadores.  
    .row.mt-4
      .col-8.offset-2.py-4.px-5.bg-amarillo-claro.borde-der-amarillo
        .h6 Restricciones de la intervención correctiva:  
        p.mt-4 Al intentar modificar lo existente, este tipo de intervención casi siempre resulta costosa y presenta restricciones para hacer cambios completamente efectivos.
    .h6.mt-5 1.2.3.2 Carga física de trabajo
    .row.mt-5
      .col-12.col-lg-6
        p La carga física, definida como la cantidad o carga de energía que demanda la ejecución de una labor o trabajo, depende no solo de la exigencia por sí misma de la labor y de su condición ambiental, sino de la capacidad física de cada individuo.
      .col-6.d-none.d-lg-block 
        figure
          img(src='@/assets/template/tema-1-56.png', alt='Texto que describa la imagen')          
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="¿Cuándo se presenta?")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-57.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Se presenta especialmente cuando se tiene que mover el cuerpo o alguno de sus segmentos: al caminar, al mover los miembros superiores para alcanzar un objeto; cuando se transporta o se hace movilización de cargas o cuando se mantiene una postura: al adoptar postura de cuclillas en la reparación de una máquina, por citar apenas un caso
      .row(titulo="Superación de las capacidades de la persona")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-58.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p En la industria se desarrollan procesos que requieren la presencia de los trabajadores para cumplir con tareas donde priman el trabajo manual, la aplicación de fuerza y otras exigencias físicas. Cuando dichas exigencias superan las capacidades individuales, pueden acarrear molestia, fatiga y, en casos crónicos, afecciones en el cuerpo denominadas lesiones de trauma acumulativo (LTA), o desórdenes o trastornos músculo esqueléticos (DME o TME), que comprenden un grupo heterogéneo de diagnósticos que abarcan alteraciones de músculos, tendones, vainas tendinosas, síndromes de atrapamientos nerviosos, discopatías o alteraciones en el disco intervertebral, alteraciones articulares y neurovasculares #[strong (Rueda y Zambrano, 2018).]
      .row(titulo="La legislación y normatividad")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-59.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p Por ejemplo, normas como la Icontec NTC-OHSAS 18001 y decretos como el 1072 de 2015 del Ministerio del Trabajo regulan el sector empresarial para estimular la identificación, evaluación y, especialmente, la intervención de los peligros y riesgos a los que se expone el trabajador, eliminándolos o, en su defecto, controlándolos.
      .row(titulo="Intervención ergonómica")
        .col-3.d-none.d-md-block
          figure.mb-2
            img(src="@/assets/template/tema-1-60.png", alt="Texto que describa la imagen")
        .col-12.col-md-8
          p La ergonomía actúa en dos momentos: sobre la persona y sobre el proceso productivo, a través de líneas de acción preventivas, al igual que en la concepción y el diseño de procesos y productos: en sus tareas, ambientes o elementos de trabajo; o de manera correctiva, para cambiar o mejorar situaciones ya implementadas que presentan fallas en su concepción o desarrollo. #[strong (Rueda y Zambrano, 2018)]
    .h6.mt-5 1.2.3.3  Seguridad y salud en el trabajo
    .row.mt-5
      .col-lg-8.align-self-center
        p La seguridad y la salud en el trabajo se entienden como el conjunto de actividades multidisciplinarias que tienen como objetivo promover, recuperar y rehabilitar la salud de la población trabajadora para protegerla de los riesgos de su ocupación y ubicarla en un ambiente de trabajo, de acuerdo con sus condiciones fisiológicas y psicológicas #[strong (Bedoya, 2018).]
        p.mt-4 #[strong Áreas de la seguridad y salud en el trabajo:] los escenarios donde se realiza actividad laboral ofrecen distintas condiciones para los trabajadores; son identificados como áreas de trabajo, y pueden ser favorables o adversas, dependiendo de la condición ofrecida al trabajador. Un área de trabajo puede ser concebida como el espacio destinado a la realización de actividades laborales donde el trabajador debe desempeñar su rol y ejecutar actividades integrantes de un determinado proceso. Se destacan áreas como: administrativas y operativas.
      .col-lg-4
        figure.mb-2
          img(src="@/assets/template/tema-1-61.svg", alt="Texto que describa la imagen")
    TabsA.mt-4
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Seguridad industrial: ")
        h4 Seguridad industrial: 
        p.mt-4 Conjunto de normas técnicas encaminadas a identificar, evaluar y controlar aquellos factores de riesgo ambientales presentes en el medio de trabajo, causantes de los accidentes de trabajo.
        ul.lista-ul.mt-3
          li.mb-0 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Investigación de accidentes de trabajo.     
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Preparación para emergencias.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Inspecciones planeadas.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Dotación y control de elementos de protección personal.
          li.mb-0.mt-2 
            .row
              .col-1.text-align-right
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p Vigilancia y control del cumplimiento de normas y procedimientos de seguridad.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Higiene industrial: ")
        h4 Higiene industrial:  
        p.mt-4 Rama de la ingeniería sanitaria dedicada a identificar, evaluar y controlar aquellos factores de riesgo ambientales presentes en el medio de trabajo, causantes de las enfermedades profesionales. La higiene tiene en cuenta distintas actividades esenciales como: medir y cuantificar los factores de riesgos físicos, químicos, ergonómicos y biológicos, identificar riesgos que puedan producir enfermedades profesionales en cada puesto de trabajo, establecer las medidas de control requeridas en orden de importancia, así: fuente, medio y trabajador, y supervisar y verificar la aplicación de los sistemas de control de los riesgos ocupacionales en la fuente y en el medio ambiente.
      .tarjeta.tarjeta--amarilla--borde.p-4(titulo="Medicina preventiva y del trabajo: ")
        h4 Medicina preventiva y del trabajo:   
        p.mt-4 Conjunto de actividades médicas y paramédicas destinadas a promover y mejorar la salud del trabajador, evaluar su capacidad laboral y ubicarlo en un lugar de trabajo, de acuerdo con sus condiciones psicobiológicas. Dentro de las operaciones necesarias para que la medicina preventiva y del trabajo tenga un accionar acorde con las necesidades de los trabajadores, se pueden tener en cuenta: prevención de enfermedades profesionales y educación en salud, exámenes médicos, clínicos y paraclínicos para selección y ubicación de personal, campañas de medicina preventiva, vigilancia epidemiológica de enfermedades profesionales y patologías relacionadas con el trabajo y ausentismo por tales causas, servicio oportuno de primeros auxilios y espacios para descanso, capacitación y recreación.
    .h6.mt-5 Peligros
    figure.mt-4
      img(src="@/assets/template/tema-1-62.png", alt="Texto que describa la imagen")  
    figcaption Referencia SENA
    .row.mt-5
      .col
        .cajon.color-primario.p-4.mb-4.bg-rojo-claro
          .row
            .col-md-4
              figure
                img(src='@/assets/template/tema-1-63.png', alt='Texto que describa la imagen')
            .col-md-8
              .h6 Sistema de seguridad y salud en el trabajo
              p.mt-4 El sistema de gestión como el desarrollo de un proceso lógico y por etapas, basado en la mejora continua y que incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo dentro de la organización objeto de las medidas de intervención. 



</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Filosofía corporativa',
        texto:
          'De acuerdo con Capriotti (2009), la filosofía corporativa es definida como la concepción global de la organización establecida por la alta dirección. Debería responder fundamentalmente a tres preguntas: ¿qué hago?, ¿cómo lo hago? y ¿a dónde quiero llegar? Está compuesta por tres aspectos básicos: misión corporativa: la razón de ser, visión corporativa: lo que se espera en el futuro y personalidad corporativa: dimensión ideal de “yo quiero ser”.',
        imagen: require('@/assets/template/tema-1-36.png'),
      },
      {
        titulo: 'Cultura corporativa',
        texto:
          'Definida como un conjunto de creencias y valores formados a partir de la interpretación que los miembros de la organización hacen de las normas formales y de los valores establecidos por la filosofía corporativa. Según Schein (1985), la cultura corporativa está conformada por: las creencias, que son estructuras invisibles, inconscientes y asumidas como preestablecidas, y los valores, que son el conjunto de principios compartidos por los miembros de la organización en su relación cotidiana.',
        imagen: require('@/assets/template/tema-1-37.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Simbología',
        texto: '',
        imagen: require('@/assets/template/tema-1-39.png'),
      },
      {
        titulo: 'Logotipos',
        texto: '',
        imagen: require('@/assets/template/tema-1-40.png'),
      },
      {
        titulo: 'Color',
        texto: '',
        imagen: require('@/assets/template/tema-1-41.png'),
      },
      {
        titulo: 'Otros',
        texto:
          'La identidad visual está conformada por el símbolo o marca visual que representa la organización, el logotipo, que es el nombre de la empresa; los colores, la tipografía, la papelería y la señalética o señalización.',
        imagen: require('@/assets/template/tema-1-42.png'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
