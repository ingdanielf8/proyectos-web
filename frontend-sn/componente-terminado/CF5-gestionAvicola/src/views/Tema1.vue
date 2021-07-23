<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Costos de producción
    .row.mt-4
      .col-12.col-lg-9
        p Los costos pueden definirse como las inversiones de las que se espera una retribución en el corto plazo; la mecánica usualmente implica la adquisición de los insumos, su posterior transformación y su almacenamiento como inventario para su posterior venta. 
        p.mt-3 En este sentido, están estrechamente relacionados con la actividad misional de cualquier empresa y aportan material de discusión para la toma de decisiones estratégicas. Su papel es tan importante que las disciplinas contables y de gestión han dedicado mucho tiempo para diseñar sistemas de medición y clasificación que se adapten a las necesidades de cada industria o mercado
      .col-4.col-lg-3.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p La primera distinción que debe plantearse es aquella que los separe de los gastos. Los costos implican erogaciones de capital con aplicación a futuro, se compran los insumos con la expectativa de transformarlos en productos a ser vendidos, por lo que en su definición se encuentra implícita una retribución esperada. Los gastos, por otra parte, resultan de la mecánica inversa, corresponden también a salidas de capital, pero asociadas a algún beneficio recibido previamente; por ejemplo, el pago de comisiones a un vendedor quien las recibe por la buena gestión comercial que tuvo durante el mes anterior. 
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Elementos
    .row.mb-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 Entendiendo el costo como un insumo para producir bienes o servicios, el siguiente paso es definir cuáles son los elementos que lo componen. Todo producto requiere de 3 tipos de insumos: materia prima, mano de obra, y otros costos indirectos de fabricación. A continuación, se desarrollará en mayor detalle cada uno de ellos. 
    .h4.mt-5 Materia prima
    .row.mt-4
      .col-12.col-lg-11
        p Se compone de todos los materiales que se utilizan en la elaboración del producto. Son los insumos tangibles susceptibles de ser transformados en el proceso productivo; pueden clasificarse como directos o indirectos según su relevancia y relación con el producto en producción. 
        p.mt-3 Para determinar si la materia prima es directa, se puede evaluar el cumplimiento de por lo menos uno de los siguientes dos conceptos: materialidad e importancia relativa. 
      .col-4.col-lg-1.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-3.svg", alt="Texto que describa la imagen")
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-verde-claro")
      .row(titulo="Materialidad")
        p Se entiende el costo en relación con los materiales utilizados, o su significancia en la elaboración; en este sentido, se tienen en cuenta la valoración monetaria o su participación en el proceso productivo. Un ejemplo de ello es la tela utilizada para la confección de pantalones, donde es evidente que no solo es uno de los insumos de mayor valor monetario, sino también el que tiene mayor participación en la composición del producto terminado. 

      div(titulo="Importancia relativa")
        p Implica que, aunque el insumo no sea material, es indispensable para elaborarlo. Por ejemplo, los botones en la elaboración de camisas no son tan costosos, pero son necesarios para ponerlas a la venta. 

    .row.mt-5
      .col-12.col-lg-8
        p Guarnizo y Cárdenas (2015), consideran que el valor de la materia prima no solo se compone por el precio de compra de los insumos, sino que contempla otras erogaciones que se encuentran asociadas a la adquisición y disposición de esta. El costo de envío o embalaje, las pérdidas por robo u obsolescencia y el costo de almacenamiento son algunos de esos elementos que pueden catalogarse dentro del rubro de materia prima dado que su incurrencia es producto de su adquisición.  
        p.mt-3 La siguiente figura describe algunos de los elementos que pueden adicionarse al costo de la materia prima, en primer lugar, la compra en sí misma de los insumos, por otro lado, su almacenaje, que según la naturaleza del producto puede exigir requerimientos específicos. La administración, que implica el manejo de la documentación y control de los inventarios, y finalmente, las pérdidas producto de robos, daños accidentales, entre otros.
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-11.offset-1
        .h5 Figura 1
        p.mt-3 Costos asociados a la materia prima
      figure.mt-4
        img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota. Elaboración propia a partir de Guarnizo y Cárdenas, (2015).
    .row.mt-5
      .col-lg-6.offset-lg-3
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/template/tema-1-6.svg' alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro
            .p-4
              h2 Mano de obra
              p Para definir cómo clasificarla, debe evaluarse nuevamente la relación que tiene con el proceso productivo. En principio, aquellas personas, cuya función es trabajar directamente en la transformación de la materia prima serán considerados mano de obra directa. Por ejemplo, el operario que alimenta a las gallinas en una granja avícola.
    .row.mb-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4
          p.m-0 La mano de obra indirecta incluye la remuneración de los empleados que no se involucran de forma directa con la producción, pero desarrollan tareas de apoyo o dirección en el área. Tal es el caso del director de producción, o de los vigilantes que cuidan las instalaciones donde se encuentra la maquinaria productiva.
    p.mt-5 Al igual que con la materia prima, los costos de la mano de obra directa no solo incluyen la remuneración pagada al trabajador; en esta categoría deben incluirse las prestaciones sociales, las bonificaciones, los aportes parafiscales y cualquier otra erogación de dinero que esté asociada a la relación laboral. 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-primario-invertido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p Corresponde al líder del área de producción, determinar el alcance de estos costos adicionales; por ejemplo, según su criterio, podrían incluirse también los costos asociados al proceso de reclutamiento del personal operativo, los auxilios o las capacitaciones, entre otros.
    .h4.mt-5 Costos indirectos de fabricación
    .row.mt-4
      .col-12.col-lg-7
        p Cuando se determina el costo de un producto, los elementos principales para tener en cuenta son la mano de obra y la materia prima directas. Sin embargo, existen muchos otros rubros asociados a la producción que, a pesar de no tener un vínculo directo con el producto terminado, son necesarios para llevarla a cabo. En este elemento deben incluirse todas las demás partidas que determinarán el costo final de producción de cada producto terminado. 
        .row.mt-4 
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4
              p.m-0 Este elemento incluye una gran variedad de rubros de diversa índole que requiere diferentes sistemas para calcular su valor. La parte indirecta de la materia prima y la mano de obra son algunos de los conceptos a incluir en este, así como partidas que no se pueden asociar de forma directa a cada producto, como los arrendamientos o los mantenimientos de la maquinaria.
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-8.png" , alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Clasificación
    p.mt-5 Teniendo claro el concepto de costo y los elementos que lo integran es posible clasificarlos según diversos criterios, los siguientes son los sistemas de clasificación de mayor aceptación:
    .row.mt-5
      .col-
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-contenido 
          .row(numero="1" titulo="Según su relación con la producción")
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
            .col-11
              p.mt-3 Se clasifican como costos variables, entendidos como los que sufren modificaciones con el incremento o disminución de la producción. Al ser una relación directa, puede preverse el comportamiento de estos en función de la proyección de unidades a producir, un ejemplo de ello es la madera necesaria para elaborar sillas: a mayor cantidad de sillas a producir, más madera se necesitará. Por otro lado, se encuentran los costos fijos, que no varían en función de la producción, por ejemplo, el valor del arriendo donde se ubica la fábrica siempre será el mismo, se les de uso o no a la maquinaria.

          .row(numero="2" titulo="Según su relación con el producto")
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-10.svg", alt="Texto que describa la imagen")
            .col-11
              p.mt-3 Se clasifican como directos o indirectos. Los primeros son aquellos que se pueden asignar de forma clara e inequívoca a las unidades producidas. Si, por ejemplo, se tiene claro que la elaboración de una artesanía toma una hora de trabajo a un empleado, el costo de ese tiempo se asignará como mano de obra directa. Los costos indirectos son los que no se pueden relacionar con la producción de manera tan clara, por ejemplo, los honorarios que cobra el mecánico que repara la maquinaria utilizada en la producción o los servicios públicos de la planta. 
          .row(numero="3" titulo="Según su relación con el producto")
            .col-1.align-self-center
              figure
                img(src="@/assets/template/tema-1-11.svg", alt="Texto que describa la imagen")
            .col-11
              p.mt-3 En primer lugar, están los costos estimados, que surgen de metodologías de análisis y observación. No son exactos y su margen de error está condicionado al nivel de detalle en la que se haya efectuado los procedimientos de cálculos. Son aplicables a los insumos que no son materiales en el proceso de elaboración. En segundo lugar, se ubican los costos estándar, utilizados en empresas con volúmenes de producción significativos y bajo un sistema altamente repetitivo. Analizan la información histórica disponible, y anticipan el costo de producción a partir de ello, su margen de error suele ser muy bajo dado que trabajan con variables ya conocidas. 
    .row.mt-5
      .h5 Figura 2
        p.mt-3 Clasificación de los costos
      .col-10.offset-1
        
        figure.mt-4
          img(src="@/assets/template/tema-1-12.png" , alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Elaboración Sena
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Normativa contable
    p.mt-4 El registro y control de los costos de producción se lleva a cabo a través de la contabilidad. Es por ello que resulta imprescindible comprender los principios fundamentales de la contabilidad asociada a los costos para efectuar el seguimiento debido a través de los reportes financieros.
    .row.mb-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 Con la ley 1314 de 2009 “por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento.” 
    .row.mt-5
      .col-12.col-lg-7
        p El Ministerio de Hacienda y Crédito Público y el Ministerio de Comercio, Industria y Turismo, iniciaron el proceso de transición a un marco normativo contable de amplia aceptación a nivel internacional, con el objetivo de facilitar la integración económica global, e incentivar la inversión extranjera. 
        p.mt-3 Esta ley fue reglamentada posteriormente por una variedad de decretos que fueron recopilados en el decreto único reglamentario 2420 de 2015 y sus respectivos modificatorios. Allí se define que la contabilidad se regirá bajo tres estándares diferentes según las condiciones de cada empresa. 
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure  
          img(src="@/assets/template/tema-1-13.png" , alt="Texto que describa la imagen")
    .row.mt-4
      .col-8.col-lg-6.offset-2.offset-lg-3
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-contenido 
          .row(numero="1" titulo="El grupo 1")
            p Compuesto por empresas de interés público, aplicará las Normas Internacionales de Información Financiera – NIIF.
          .row(numero="2" titulo="El grupo 2")
            p Compuesto por empresas de capital privado que no cotizan en bolsa ni administran recursos de terceros, aplicarán las NIIF para Pequeñas y Medianas Entidades – PYMES. 
          .row(numero="3" titulo="El grupo 3")
            p compuesto por microempresas (menos de 10 trabajadores y activos inferiores a 500 salarios mínimos mensuales legales vigentes), se regirá por un sistema de contabilidad simplificada. 
    .row.mt-5
      .h5 Figura 3
        p.mt-3 Normatividad contable en Colombia
    figure.mt-4
      img(src="@/assets/template/tema-1-14.png" , alt="Texto que describa la imagen")
      figcaption.mt-3 Referencia Nota. Elaboración Sena
    .row.mt-4
      .col-4.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-15.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-8
        p Comprendiendo el esquema normativo de la contabilidad en Colombia, resulta relevante remarcar que acorde al Ministerio del Trabajo (2019), según cifras del Departamento Administrativo Nacional de Estadística, más del 90% del sector productivo nacional se encuentra compuesto por micros, pequeñas y medianas empresas; lo que implica que la economía en Colombia es mayoritariamente impulsada por empresas que aplican la contabilidad de los grupos 2 y 3 mencionados previamente.
        p.mt-3 Los 3 modelos contables obedecen a una estructura básica financiera, por un lado, un estado de situación financiera o balance general, que comprende los bienes controlados por la empresa (activo), las deudas (pasivo) y su diferencia (patrimonio). 
        p.mt-3 Por otra parte, el estado de resultados, en el que se registran los ingresos generados en un periodo determinado, así como todos los costos y gastos, tengan o no relación con la actividad operacional y la generación de ingresos. La mecánica general implica que a los ingresos se le deducen los costos y gastos, si la diferencia es positiva se genera utilidad, en el caso contrario, se considera pérdida.
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 En cuanto, a la producción, todos los insumos requeridos para elaborar el producto, y el producto terminado en sí mismo, permanecerán en el inventario hasta que sean vendidos. En este sentido, es importante recalcar la diferenciación entre los costos de producción y los gastos de administración y ventas, dado que solo los primeros serán reconocidos como un activo, mientras que los demás serán llevados directamente al gasto.
    p.mt-5 Los costos son considerados una inversión de la que se espera recibir beneficios económicos a futuro. Es por esto que el reconocimiento inicial afecta una cuenta del activo:
    .row.mt-5
      .h5 Figura 4
        p.mt-3 Dinámica contable de los costos
    .row.mt-4.mr-4(style="margin-right: 2.5rem")
      .col-3.offset-1
        .row
          .col-12.text-center.py-4.bg-gris
            .h4.mb-0 Compra insumos
          .col-12.py-3.pl-4.borde-verde
            ul.lista-ul
              li 
                i.fas.fa-angle-right.verde
                | Materia prima
              li
                i.fas.fa-angle-right.verde
                | Mano de obra
              li
                i.fas.fa-angle-right.verde
                | Costos indirectos
      .col-1.align-self-center
        figure
          img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").w-50
      .col-3
        .row
          .col-12.text-center.py-4.bg-gris
            .h4.mb-0 Inventario
          .col-12.py-3.pl-4.borde-verde
            ul.lista-ul
              li 
                i.fas.fa-angle-right.verde
                | Materia Prima
              li
                i.fas.fa-angle-right.verde
                | Producto en proceso
              li
                i.fas.fa-angle-right.verde
                | Producto terminado
      .col-1.align-self-center
        figure
          img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").w-50
      .col-3  
        .row
          .col-12.text-center.py-4.bg-gris
            .h4.mb-0 Compra insumos
          .col-12.py-3.pl-4.borde-verde
            ul.lista-ul
              li 
                i.fas.fa-angle-right.verde
                | Costo de ventas
              li(style="opacity:0") 
                i.fas.fa-angle-right.verde
                | Costo de ventas
              li(style="opacity:0") 
                i.fas.fa-angle-right.verde
                | Costo de ventas
      .col.offset-1.bg-gris.py-3.mt-3
        .h6.mb-0 Referencia Nota. Elaboración Sena
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  	Metodología de costos
    p.mt-4 Existen diferentes sistemas para determinar el costo de los bienes producidos. Estos se constituyen como herramientas de administración que intentan aproximar el valor de producción de cualquier bien o servicio lo más cercano a la realidad. Las siguientes son las metodologías de costeo más relevantes:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-verde-claro")
      .row(titulo="Costo basado en actividades (ABC por sus siglas en inglés)")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-17.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p El enfoque de este modelo se centra en las actividades y no en los productos. Así pues, el punto de partida no será el bien elaborado, sino al cómo se producen; en este sentido, los bienes requieren de actividades para elaborarse, y son estas últimas a las que se les asigna el costo.
            p.mt-3 Al centrarse en las actividades, permite identificar aquellas labores que no aportan al proceso, permitiendo perfecciones en el ciclo productivo. Su implementación no suele ser complicada debido a que su filosofía apunta al reconocimiento de la totalidad de los costos que vayan a ser relacionados a la producción. 
      div(titulo="Costeo por absorción")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-18.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Es uno de los modelos más tradicionales. Bajo este esquema, todos los costos asociados a la producción deben cargarse directamente al producto, sin entrar a distinguir entre los costos normales y los no normales; por ejemplo, se termina cargando en el costo del producto el desperdicio de material, la improductividad de la mano de obra o la no utilización plena de la planta.  
            p.mt-3 Es un modelo muy sencillo de aplicar, así que su programación y desarrollo suele requerir menos recursos, pero el costo asignado al producto puede variar entre periodos según el nivel de producción, lo que dificulta el análisis.
      div(titulo="Costeo variable")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-19.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Surge como solución a las problemáticas del costeo por absorción, puesto que solo los costos variables se asocian a la producción. Así, los insumos que varían según la cantidad de unidades producidas se llevan como mayor valor del costo, mientras que los costos fijos de la planta se reconocen como un gasto y por lo tanto no se le cargan al producto. 
            p.mt-3 Es el sistema más sencillo de implementar, pero al menospreciar una cantidad significativa de costos asociados a la producción, no aporta información lo suficientemente precisa para apoyar la toma de decisiones.
      div(titulo="Costeo estándar")
        .row
          .col-3.offset-5.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-20.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Es el sistema más complejo, ya que trata de prever el costo del producto con anticipación. Para ello, contempla factores como las unidades producidas por hora según el fabricante de la maquinaria, o las unidades elaboradas por cada operario. Una vez se calculan unos promedios aceptables para la administración, se estima la producción normalizada, es decir,  la cantidad de unidades a producir en un periodo de tiempo según la capacidad de la planta.
            p.mt-3 Es el modelo más preciso dado que contempla todos los factores relevantes a la hora de estimar el costo de producción de un bien, pero su implementación resulta bastante compleja. Es ideal para líneas de producción que no sufren variaciones significativas en el tiempo, dado que cualquier cambio implica volver a estimar el costo estándar de cada producto.
    .titulo-segundo.mt-5
      #t_1_5.h4 1.5  	Cálculo
    p.mt-4 Previamente se describieron los tres elementos del costo de producción, así como aquellas características o condiciones que permiten clasificar cada insumo como uno de ellos. Ahora bien, una vez se tiene claridad de su naturaleza, el siguiente paso consiste en estimar su costo según los procedimientos técnicos recomendados. 
    .h4.mt-5 Materia prima
    p.mt-4 La estimación del costo de la materia prima debe comprender la inclusión de todas aquellas erogaciones asociadas con la adquisición y puesta en disposición de los materiales para ser utilizados. Los sistemas utilizados para la valoración de inventarios en Colombia son el periódico y el permanente
    .h4.mt-5 Sistema de inventarios periódico
    p.mt-4 Según este modelo, el costo de la materia prima se determina en periodos de tiempo específicos, a través del conteo físico de las unidades que no se han utilizado o vendido, es decir, el inventario final. Para efectuar el cálculo se requiere del uso de una fórmula conocida como el juego de inventarios:
    .row.mt-5
      .col-6.offset-3.text-center
        .row.mb-5 
          .col-10.col-lg-8.offset-1.offset-lg-2
            .cajon.color-primario.p-4.mb-4.bg-primario-op25
              p.mb-0 Compra de materias primas
              p.mb-0.mt-1 (-) Devoluciones y descuentos
              p.mb-0.mt-1 Compras Netas
              p.mb-0.mt-1 (-) Inventario Final
              p.mb-0.mt-1 Materias primas utilizadas
    p.mt-5 Este sistema suele ser utilizado en la empresa con una muy baja inversión en tecnología puesto que las herramientas actuales brindan cada vez más herramientas para utilizar el sistema permanente. Debido a su naturaleza periódica, el cálculo de la materia prima solo se reconoce al finalizar el periodo, por lo que se puede ver comprometida la toma de decisiones. 
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Por ejemplo, una panadería debe comprar los ingredientes para llevar a cabo la producción de los diferentes tipos de pan y galletería que ofrece; con una toma de inventario físico a cierre de un año, tendrá claridad sobre la materia prima final de dicho año y la inicial del siguiente. Aplicando la fórmula descrita, podría definir cuánta harina utilizó en el año, tomando de base la que tenía al empezar el año, sumando la que compró y restando las existencias sin utilizar que quedarán para usar el año siguiente. 
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-21.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-22.svg", alt="Texto que describa la imagen")
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p De lo anterior se deduce un elemento importante de este sistema, y es que el conteo físico de los inventarios es necesario para cuantificar los costos, por lo que la oportunidad de la información estará supeditada a esta actividad; determinar el costo de manera periódica requiere de tomas físicas de inventarios con la misma periodicidad.  
    .h4.mt-5 Sistema de inventarios permanente
    p.mt-5 Haciendo uso de este modelo, es posible conocer el valor de la materia prima en cualquier momento. Para ello, es posible hacer uso de diversos sistemas:
    figure.mt-4
      img(src="@/assets/template/tema-1-23.png" , alt="Texto que describa la imagen")
    .row
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mt-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-1-24.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La legislación aplicable en Colombia limita las opciones al PEPS y al promedio ponderado dado que son aquellos que más aproximan el costo de la materia prima a la realidad.  Existen diversos argumentos para cuestionar el uso del sistema UEPS, por ejemplo, en industrias donde la materia prima es perecedera, no tiene sentido utilizar las últimas unidades adquiridas y dejar rezagadas aquellas compradas inicialmente, además, la tendencia más normal es que los costos de los insumos incrementa con el paso del tiempo debido a la inflación, por lo que se podría estar infravalorando el costo real de los inventarios. 
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op25
          p.m-0 Para hacer uso de cualquiera de los sistemas descritos, es necesario disponer de una hoja de trabajo conocida como kárdex; en ella, se computan las compras efectuadas por cada tipo de materia prima en orden cronológico, y de esta misma forma se les da salida cuando son utilizadas en el proceso de producción. A continuación, se presentan dos hojas de kárdex, una diligenciada bajo la metodología PEPS y otra bajo promedio ponderado
    .row.mt-4 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.p-4.mb-4.bg-secundario-op25
          p.m-0 Ejemplo: una empresa cuenta con 30 unidades de material a cierre de febrero, con un valor unitario de $10.000. El 3 de marzo compran 15 unidades a 13.000 y el 12 de marzo 25 unidades a 15.000. Posteriormente, se efectúan dos pedidos para producción, la orden 11 por 20 unidades y la 12 por 18. Se determina el inventario final y el costo de la materia prima a través de los dos sistemas así:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 4
    p.mt-4 Hoja de kardex bajo sistema PEPS
    .tabla-a.color-acento-contenido.mt-4 
      table
        caption.mt-3 Referencia Nota. Elaboración Sena.
        thead
          tr
            th(rowspan='2') Detalle
            th(rowspan='2') Valor unitario
            th(colspan='3') Entradas
            th(colspan='3') Salidas
            th(colspan='2') Saldo
          tr
            th Cantidad
            th Valor unitario
            th Total
            th Cantidad
            th Valor unitario
            th Total
            th Cantidad  
            th Total
        tbody.text-center
          tr
            td Inventario inicial
            td 10.000
            td 30
            td 10.000
            td 300.000
            td 
            td 
            td 
            td 30
            td 300.000
          tr
            td Compra 3 de marzo
            td 13.000
            td 15
            td 13.000
            td 195.000
            td 
            td 
            td 
            td 45
            td 495.000
          tr
            td Compra 12 de marzo
            td 15.000
            td 25
            td 15.000
            td 375.000
            td 
            td 
            td 
            td 70
            td 870.000
          tr
            td(rowspan='3') 
              p.mb-0 Orden de producción 11 
              p.mb-0 (20 unidades)
            td 10.000
            td 
            td 
            td 
            td 20
            td 10.000
            td 200.000
            td 
            td 670.000
          tr
            td 13.000
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 670.000
          tr
            td 15.000
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 670.000
          tr
            td(rowspan='3') 
              p.mb-0 Orden de producción 12 
              p.mb-0 (18 unidades)
            td 10.000
            td 
            td 
            td 
            td 10
            td 10.000
            td 100.000
            td 
            td 570.000
          tr
            td 13.000
            td 
            td 
            td 
            td 8
            td 13.000
            td 104.000
            td 
            td 466.000
          tr
            td 15.000
            td 
            td 
            td 
            td 
            td 
            td 
            td 
            td 466.000
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 5
    p.mt-4 Hoja de kardex bajo sistema promedio ponderado
    .tabla-a.color-acento-contenido.mt-4 
      table
        caption.mt-3 Referencia Nota. Elaboración Sena.
        thead
          tr
            th(rowspan='2') Detalle
            th(rowspan='2') Valor unitario
            th(colspan='3') Entradas
            th(colspan='3') Salidas
            th(colspan='2') Saldo
          tr
            th Cantidad
            th Valor unitario
            th Total
            th Cantidad
            th Valor unitario
            th Total
            th Cantidad  
            th Total
        tbody.text-center
          tr
            td Inventario inicial
            td 10.000
            td 30
            td 10.000
            td 300.000
            td 
            td 
            td 
            td 30
            td 300.000
          tr
            td Compra 3 de marzo
            td 11.000
            td 15
            td 13.000
            td 195.000
            td 
            td 
            td 
            td 45
            td 495.000
          tr
            td Compra 12 de marzo
            td 12.429
            td 25
            td 15.000
            td 375.000
            td 
            td 
            td 
            td 70
            td 870.000
          tr
            td 
              p.mb-0 Orden de producción 11 
              p.mb-0 (20 unidades)
            td 12.429
            td 
            td 
            td 
            td 20
            td 12.429
            td 248.571
            td 50
            td 621.429
          tr
            td 
              p.mb-0 Orden de producción 12
              p.mb-0 (18 unidades)
            td 12.429
            td 
            td 
            td 
            td 18
            td 12.429
            td 223.714
            td 32
            td 397.714
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 Al interpretar las dos tablas se evidencian diferencias en la valoración de la materia prima a pesar de registrar las mismas transacciones. Si se comparan los datos se evidencia como el total de la mercancía es equivalente, pero destinando valores diferentes a las órdenes. La elección de uno u otro dependerá de las necesidades de la empresa. Pese a las divergencias ambos sistemas abordan el costeo de una manera correcta:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 6
    p.mt-4 Comparativa sistemas de valuación de inventario
    .row
      .col-8.col-lg-6.offset-2.offset-lg-3
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th 
                th PEPS
                th Promedio ponderado
            tbody.text-center
              tr
                th.py-4 Costo de la materia prima
                th 404.000 
                th 472.286 
              tr.bg-gris
                th.py-4 Inventario final
                th 466.000  
                th 397.714
              tr
                th.py-2 
                th  
                th    
              tr.bg-gris
                th.py-4 Total materia prima
                th 870.000  
                th 870.000
    .h4.mt-5 Mano de obra
    p.mt-4 Para determinar el costo de la mano de obra se deben tener presentes los lineamientos de la normatividad laboral en Colombia. Un contrato de trabajo se compone por un salario básico, unas prestaciones sociales, unos aportes parafiscales y de seguridad social, y todas las demás retribuciones que se le ofrezcan al empleado. 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-primario-invertido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-7.svg", alt="Texto que describa la imagen")
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p El código sustantivo del trabajo de 1950 junto a sus modificatorios son el compendio de normativa laboral más importante en Colombia, allí se consignan los fundamentos legislativos que rigen cualquier contrato de trabajo.
    p.mt-4 Se presentan los siguientes extractos donde se describen las diferentes formas de remuneración asociadas al trabajo:
    .row.mt-5
      .col-lg-8.offset-lg-2
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/template/tema-1-25.svg' alt='Texto que describa la imagen')
          .tarjeta.bg-amarillo-claro
            .p-4
              h2 Salario
              p Constituye salario no sólo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, como primas, sobresueldos, bonificaciones habituales, valor del trabajo suplementario o de las horas extras, valor del trabajo en días de descanso obligatorio, porcentajes sobre ventas y comisiones. (Código Sustantivo del Trabajo, 1950, Artículo 127). Se considera:
    TabsB.color-acento-botones.mt-5
      .py-4.py-md-5(titulo="Horas extra" :icono="require('@/assets/template/tema-1-46.svg')")
        .row
          .col-12.col-lg-8
            .h2 Horas extra
            p Trabajo suplementario o de horas extras es el que excede de la jornada ordinaria, y en todo caso el que excede de la máxima legal. (Código Sustantivo del Trabajo, 1950, Artículo 159).
          .col-4.col-lg-2.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-26.svg", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Vacaciones" :icono="require('@/assets/template/tema-1-47.svg')")
        .row
          .col-12.col-lg-8
            .h2 Vacaciones
            p Los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince (15) días hábiles consecutivos de vacaciones remuneradas. (Código Sustantivo del Trabajo, 1950, Artículo 186).
          .col-4.col-lg-2.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-27.svg", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Cesantías" :icono="require('@/assets/template/tema-1-48.svg')")
        .row
          .col-12.col-lg-8
            .h2 Cesantías
            p Todo empleador está obligado a pagar a sus trabajadores, y a las demás personas que se indican en el capítulo VII, al terminar el contrato de trabajo, como auxilio de cesantía, un mes de salario por cada año de servicios y proporcionalmente por fracción de año. (Código Sustantivo del Trabajo, 1950, Artículo 249).
          .col-4.col-lg-2.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-28.svg", alt="Texto que describa la imagen")
      .py-4.py-md-5(titulo="Prima de servicios" :icono="require('@/assets/template/tema-1-49.svg')")
        .row
          .col-12.col-lg-8
            .h2 Prima de servicios
            p El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así: la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. Su reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado. (Código Sustantivo del Trabajo, 1950, Artículo 306).
          .col-4.col-lg-2.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-29.svg", alt="Texto que describa la imagen")      
      .py-4.py-md-5(titulo="Intereses a las cesantías" :icono="require('@/assets/template/tema-1-50.svg')")
        .row
          .col-12.col-lg-8
            .h2 Intereses a las cesantías
            p Todo patrono obligado a pagar cesantía a sus trabajadores conforme al Capítulo VII Título VIII, Parte 1ª, del Código Sustantivo del Trabajo y demás disposiciones concordantes, les reconocerá y pagará intereses del 12% anual sobre los saldos que, en 31 de diciembre de cada año, o en las fechas de retiro del trabajador o de liquidación parcial de cesantía, tenga este a su favor por concepto de cesantía. (Ley 52, 1975, Artículo 1).
          .col-4.col-lg-2.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-30.svg", alt="Texto que describa la imagen")      
      .py-4.py-md-5(titulo="Auxilio de transporte" :icono="require('@/assets/template/tema-1-51.svg')")
        .row
          .col-12.col-lg-8
            .h2 Auxilio de transporte
            p Corresponde a un elemento salarial diferente a los anteriores, puesto que su valor no depende del salario, sino que se establece un valor fijo anualmente. Como su nombre lo indica, es un auxilio para cubrir los costos de desplazamiento del empleado. Para el año 2021 su valor es de $ 106.454 según lo dispuesto en el decreto 1785 de 2020, expedido por el ministerio del trabajo, y su pago es exclusivo de los trabajadores que devenguen menos de dos salarios mínimos mensuales legales vigentes (SMMLV).
          .col-4.col-lg-3.offset-4.offset-lg-1
            figure
              img(src="@/assets/template/tema-1-31.svg", alt="Texto que describa la imagen")
    .row
      .col-10.offset-1
        .tarjeta.p-3.mt-5.bg-verde-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.offset-1
              img(src="@/assets/template/tema-1-32.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Código sustantivo del trabajo
                  p.text-small Para profundizar en los demás artículos contemplados en el Código Sustantivo del Trabajo se recomienda consultar la página web del Sistema Único de Información Normativa  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link   
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.p-4.mb-4.bg-secundario-op25
          p.m-0 Para definir cómo calcular el costo de los factores anteriores, es necesario considerar el tiempo necesario para hacerse acreedor a ellos. La prima y las cesantías corresponden a un mes de salario por cada año trabajado, por lo que puede calcularse una proporcionalidad de 1/12, o lo que es equivalente, el 8,33 %. Las vacaciones, por su parte, corresponden a una quincena por año trabajado, por lo que su proporción será del 4,17%. Lo anterior significa que cada mes, el empleado se beneficiará de unas prestaciones equivalentes a esa porción del salario. La siguiente tabla consolida lo descrito previamente: 
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 7
    p.mt-4 Factores prestacionales
    .row
      .col-8.col-lg-6.offset-2.offset-lg-3
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th Prestación
                th Empleador/a
            tbody.text-center
              tr.bg-gris
                th.py-4 Vacaciones
                th 4,17%
              tr
                th.py-4 Cesantías
                th 8,33%
              tr.bg-gris
                th.py-4 Prima de servicios
                th 8,33%
              tr
                th.py-4 Intereses a las cesantías
                th 1 %
              tr.bg-gris
                th.py-4 Total
                th 21,83%
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op25
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-1-33.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9.align-self-center
              p Adicional a los elementos anteriores, los contratos laborales también acarrean pagos asociados a la seguridad social, el Ministerio del Trabajo publicó en su artículo “Cotización a la Seguridad Social – Aportes” la siguiente tabla:
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.p-4.mb-4.bg-secundario-op25
          p.m-0 Para definir cómo calcular el costo de los factores anteriores, es necesario considerar el tiempo necesario para hacerse acreedor a ellos. La prima y las cesantías corresponden a un mes de salario por cada año trabajado, por lo que puede calcularse una proporcionalidad de 1/12, o lo que es equivalente, el 8,33 %. Las vacaciones, por su parte, corresponden a una quincena por año trabajado, por lo que su proporción será del 4,17%. Lo anterior significa que cada mes, el empleado se beneficiará de unas prestaciones equivalentes a esa porción del salario. La siguiente tabla consolida lo descrito previamente: 
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 8
    p.mt-4 Aportes obligatorios a seguridad social
    .row
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Tomado de “Cotización a la Seguridad Social – Aportes” Ministerio del Trabajo. (2019).
            thead
              tr.bg-color-acento-contenido
                th 
                th Empleador/a
                th Trabajador/a
                th Total
            tbody.text-center
              tr.bg-gris
                th.py-4 Pensiones
                th 12%
                th 4%
                th 16%
              tr
                th Salud
                th 8,5%
                th 4%
                th 12,5%
              tr.bg-gris
                th.py-4 Riesgos laborales - Nivel I
                th 0,5%
                th
                th 0,5%
              tr
                th Caja de compensación
                th 4%
                th
                th 4%
              tr.bg-gris
                th.py-4 Total 
                th 25%
                th 8%
                th 33%
    .row.mt-5
      .col-7
        p El estatuto tributario indica en su artículo 114-1 que las personas jurídicas contribuyentes del impuesto de renta se encuentran exonerados del aporte del 8,5 % por concepto de salud, así como de los aportes parafiscales al SENA (2%) e ICBF (3%) correspondientes a los empleados que ganen menos de 10 SMMLV. Para el caso de las personas naturales empleadoras, este beneficio aplicará solo si cuentan con dos o más trabajadores.
        p.mt-3 La liquidación de los pagos a los empleados suele consolidarse en una hoja de trabajo conocida como nómina. En ella se detallan todos los pagos y deducciones asociados a cada trabajador y a partir de esta información es posible asignar el costo de mano de obra dependiendo del tiempo estimado que cada empleado le designe a la transformación del producto.
        .row.mt-5 
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4
              p Para ilustrar lo anterior, se plantea el siguiente ejemplo: calcular el costo de mano de obra de un producto que requiere 1 hora de trabajo de los siguientes dos operarios:
              p #[strong Operario 1:] Salario Básico de 1.000.000
              p #[strong Operario 2:] Salario Básico de 1.500.000 
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-1-34.png", alt="Texto que describa la imagen")
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 9
    p.mt-4 Liquidación costo mensual empleado
    .row
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th Concepto 
                th Operario 1
                th Operario 2
            tbody.text-center
              tr
                th.py-4 Salario 
                th 1.000.000 
                th 1.500.000 
              tr.bg-gris
                th.py-4  Aux. de transporte  
                th 106.454  
                th  106.454 
              tr
                th.py-4  Subtotal salario   
                th 1.106.454
                th 1.606.454
              tr.bg-gris
                th.py-4   
                th   
                th
              tr
                th.py-4 Prestaciones
                th  
                th  
              tr.bg-gris 
                th.py-4 Vacaciones 
                th 41.667
                th 62.500
              tr
                th.py-4 Cesantías
                th 92.205
                th 133.871
              tr.bg-gris
                th.py-4 Prima de servicios
                th 92.205
                th 133.871
              tr
                th.py-4 Intereses de la cesantías
                th 11.065
                th 16.065
              tr.bg-gris
                th.py-4 Subtotal prestaciones 
                th 237.140
                th 346.307
              tr
                th.py-4  
                th  
                th  
              tr.bg-gris 
                th.py-4 Seguridad social  
                th   
                th
              tr
                th.py-4 Salud
                th -
                th -
              tr.bg-gris
                th.py-4 Pensión   
                th 132.774
                th 192.774
              tr
                th.py-4 ARL  
                th 5.754
                th 8.354  
              tr.bg-gris
                th.py-4 Subtotal seguridad social  
                th 138.528
                th 201.128
              tr
                th.py-4 
                th  
                th  
              tr.bg-gris 
                th.py-4 Aportes parafiscales
                th   
                th
              tr
                th.py-4 Caja de compensación 
                th 44.258
                th 64.258
              tr.bg-gris
                th.py-4 SENA  
                th -
                th -
              tr
                th.py-4 ICBF  
                th -
                th -
              tr.bg-gris
                th.py-4 Subtotales parafiscales   
                th 44.258   
                th 64.258
              tr
                th.py-4  
                th  
                th  
              tr.bg-gris 
                th.py-4 Total costo empleado
                th 1.343.594   
                th 1.952.761
    .row.mt-5
      .col-12.col-lg-7
        p Para precisar, la base para las prestaciones sociales incluye el salario, el auxilio de transporte, las comisiones, las horas extra, entre otros. Sin embargo, el auxilio de transporte no se incluye en la base de cálculo de las vacaciones, puesto que se supone que en ese periodo el empleado no se transportará a la empresa. 
        p.mt-3 La tarifa para la administradora de riesgos laborales (ARL) varía según el nivel de riesgo que asume el empleado para desempeñar su labor. La tarifa para riesgo 1 es del 0,52 %.
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure 
          img(src="@/assets/template/tema-1-35.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.col-lg-10.offset-1.offset-lg-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-22.svg", alt="Texto que describa la imagen")
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p Estos cálculos pueden automatizarse haciendo uso de hojas de cálculo; en ellas pueden agregarse tantos empleados como se desee, siempre y cuando se parametrice de forma adecuada las tarifas y montos. Existen softwares gerenciales o contables que cuentan con módulos específicos de nómina, pero requieren de compra de licencias vitalicias o suscripciones periódicas, por lo que son recomendables cuando la empresa cuenta con la rentabilidad necesaria para asumir este nuevo costo.
    .row
      .col-10.offset-1
        .tarjeta.p-3.mt-5.bg-verde-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.offset-1
              img(src="@/assets/template/tema-1-36.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Liquidación de nómina
                  p.text-small Para profundizar sobre la forma de automatizar la liquidación de la nómina de forma gratuita se recomienda estudiar sobre tutoriales como el siguiente:  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link 
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 Una vez definido el costo mensual de cada empleado, se debe calcular la proporción que le corresponde a cada unidad producida. Si cada empleado tarda una hora aportando su trabajo en el proceso de transformación, y trabaja 24 días al mes en jornadas de 8 horas, el costo de la mano de obra se calcularía así:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 9
    p.mt-4 Costo de mano de obra por hora
    .row
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Tomado de “Cotización a la Seguridad Social – Aportes” Ministerio del Trabajo. (2019).
            thead
              tr.bg-color-acento-contenido
                th 
                th Operario 1
                th Operario 2
            tbody.text-center
              tr.bg-gris
                th.py-4 Costo mensual:
                th 1.343.594
                th 1.952.761
              tr
                th.py-4 Horas diarias de trabajo:
                th 8
                th 8
              tr.bg-gris
                th.py-4 Días trabajados al mes 
                th 24
                th 24
              tr
                th.py-2  
                th 
                th 
              tr.bg-gris
                th.py-4 Horas de trabajo mensual:
                th 192
                th 192
              tr
                th.py-2  
                th 
                th
              tr.bg-gris
                th.py-4 Costo por hora (salario/total horas):
                th 6.998
                th 10.171
    .h4.mt-5 Costos indirectos de fabricación
    .row.mt-4
      .col-12.col-lg-7
       p Asignar los costos indirectos requiere de un juicio claro para determinar, en primera medida, si efectivamente corresponden a la producción, y, en segundo lugar, a qué línea productiva. Si se fabrica varios productos en cantidades variadas, es necesario definir cuánto de cada costo indirecto corresponde a cada tipo de producto según diversos elementos de juicio, posteriormente, solo restará distribuir de manera proporcional según las unidades producidas.
       p.mt-3 El criterio para definir cuánto de costo corresponde a una línea de producción o área funcional de la fábrica dependerá del juicio del jefe de producción. En el caso del costeo por órdenes, pueden asignarse la cantidad de materiales utilizados o las horas de trabajo destinadas en el mes, y con ello determinar las proporciones. Cuando se utiliza un modelo de costeo estándar, donde se cuenta con una programación estimada, pueden usarse dichas proyecciones en función de unidades producidas. 
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-37.png" , alt="Texto que describa la imagen")
    p.mt-4 Para ilustrar lo anterior, se presenta el siguiente ejemplo:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 10
    p.mt-4 Costos indirectos de fabricación mensuales
    .row
      .col-6.col-lg-4.offset-3.offset-lg-4
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th Costos indirectos 
                th  Valor 
            tbody.text-center
              tr
                th.py-4 Vacaciones  
                th 1.200.000
              tr.bg-gris
                th.py-4 Cesantías
                th 250.000
              tr
                th.py-4 Prima de servicios
                th 1.500.000
              tr.bg-gris
                th.py-4 Intereses a las cesantías
                th 2.950.000
    p.mt-5 Las unidades producidas requirieron de diferente cantidad de tiempo de trabajo por los dos operarios que se presentaron en el caso de la mano de obra así:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 11
    p.mt-4 Hoja de producción con horas de trabajo
    .row
      .col-8.col-lg-6.offset-2.offset-lg-3
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th  
                th Horas de trabajo
                th Unidades producidas
            tbody.text-center
              tr.bg-gris
                th.py-4 Producto A
                th 250
                th 200
              tr
                th.py-4 Producto B 
                th 134
                th 100
              tr.bg-gris
                th.py-4 Total 
                th 384
                th 300
    p.mt-5 Para definir los costos indirectos de fabricación de cada línea, será necesario prorratear con base a las horas de trabajo destinadas a cada línea de producto, posteriormente, y en función de las unidades elaboradas, se podrá definir el costo indirecto de fabricación unitario para cada tipo de producto.
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 12
    p.mt-4 Aportes obligatorios a seguridad social
    .row
      .col-10.col-lg-8.offset-1.offset-lg-2
        .tabla-a.color-acento-contenido.mt-4 
          table
            caption.mt-3 Referencia Nota. Elaboración Sena.
            thead
              tr.bg-color-acento-contenido
                th  
                th Costo indirecto asignado
                th Unidades producidas
                th Costo indirecto unitario
            tbody.text-center
              tr.bg-gris
                th.py-4 Producto A 
                th 1.920.573
                th 200
                th 9.603
              tr
                th.py-4 Producto B
                th 1.029.427
                th 100
                th 10.294
              tr.bg-gris
                th.py-4 Total
                th 2.950.000
                th 300
                th 
    p.mt-5 Una vez son definidos los costos unitarios de materia prima, mano de obra y costos indirectos de fabricación solo resta consolidarlos en una orden de producción para establecer el valor total que cuesta producirlos
    .h4.mt-5 Aplicativos informáticos
    .row.mt-4
      .col-12.col-lg-7
        p Existe una amplia variedad de herramientas para llevar control sobre el cálculo y los registros de los costos de producción; aquellas microempresas que no tienen procesos productivos muy complejos pueden apoyarse con hojas de cálculo para llevar a cabo las operaciones más repetitivas o estandarizadas.
        p.mt-3 Previamente se compartió un tutorial para liquidar la nómina de manera asistida haciendo uso de una hoja de cálculo, de esta misma forma es posible llevar a cabo los kárdex para mantener el control de los inventarios bajo los sistemas explicados.  
      .col-4.col-lg-5
        figure
          img(src="@/assets/template/tema-1-38.png" , alt="Texto que describa la imagen")
    .row
      .col-10.offset-1
        .tarjeta.p-3.mt-5.bg-verde-degradado
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.offset-1
              img(src="@/assets/template/tema-1-39.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Ejercicio de kárdex con promedio ponderado
                  p.text-small Para profundizar sobre los kárdex se recomienda ver el siguiente video tutorial para hacer uso del modelo de promedio ponderado:
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link 
    .row.mt-5
      .col-4.d-none.d-lg-block.align-self-center.p-0
        figure
          img(src="@/assets/template/tema-1-40.png", alt="Texto que describa la imagen")
      .col-12.col-lg-8.p-4.borde-gris
        p Existen programas especializados para integrar todos los sistemas de costeo, sin embargo, su costo suele incrementarse según su complejidad. Aplicativos que abordan varias funcionalidades suelen ser conocidos como sistemas integrados de gestión, funcionan bajo un modelo modular donde existen diversas interfaces o plantillas para llevar a cabo actividades variadas. Así, un módulo de cartera hace seguimiento a las cuentas por cobrar, y un módulo de caja lleva control del efectivo con sus entradas y salidas. Toda la información converge en la contabilidad, a través de la cual se pueden analizar las dinámicas entre cuentas.
        p.mt-3 Este tipo de sistemas suelen ser costosos debido a la multitud de servicios que ofrecen bajo un mismo paquete. Alternativas más económicas implican mayor simplicidad en sus funciones, una de las más populares es la de programas contables, que permiten registrar los documentos en la contabilidad, pero carecen de opciones amigables para no contadores. 
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-1-41.svg", alt="Texto que describa la imagen")
            .col-12.col-lg-9
              p.m-0 Los programas contables usualmente ofrecen sistemas de control de existencias de inventarios compatibles con lo estudiado hasta ahora, pero carecen de funcionalidades más específicas como el cálculo de los costos indirectos de fabricación. Algunos de ellos ofrecen la posibilidad de liquidar las nóminas de manera asistida, tras el registro de datos básicos para efectuar los cálculos correspondientes. 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .row.borde-gris.rounded-20
          .col-4.py-4.d-none.d-xl-block
            .row.p-4.borde-gris-der
              figure
                img(src="@/assets/template/tema-1-42.svg", alt="Texto que describa la imagen").w-75
          .col-xl-8.p-5
            p El paso de hojas de cálculo a sistemas contables básicos es un paso recurrente en la formalización de los registros en cualquier empresa en crecimiento. El principal factor limitante en este sentido es el costo de implementación de cualquier aplicativo de pago. Es por ello que a día de hoy existen modalidades para hacerse con una herramienta de este estilo, las más comunes son las siguientes:
    .row.mt-5.text-center
      .col-4.bg-verde-oscuro.rounded-20-izq
        .row
          .col-4.offset-4.mt-4
            figure
              img(src="@/assets/template/tema-1-43.svg", alt="Texto que describa la imagen")
          
          .h4.text-white.mt-4.px-4 Licencia vitalicia
          p.mt-4.px-4.text-white Se paga la licencia de uso una única vez y con ella se puede utilizar el software de manera permanente, usualmente ofrecen anualidades para actualizar de acuerdo a las novedades normativas o implementación de nuevas características. Este modelo implica un gasto significativo en el corto plazo, pero que resulta más económico en el largo plazo.
      .col-4.bg-verde-oscuro-opaco
        .row
          .col-4.offset-4.mt-4
            figure
              img(src="@/assets/template/tema-1-44.svg", alt="Texto que describa la imagen")
          .h4.text-white.mt-4.px-4 Sistema de suscripción
          p.mt-4.px-4.text-white Los aplicativos que se utilizan a través de navegador usualmente ofrecen una alternativa que no representa erogaciones significativas en un periodo determinado. Funcionan bajo la modalidad de suscripción por lo que se cancelan mensualidades con las que se otorgan permisos de uso por tiempo limitado. Son una opción amigable en el corto plazo, pero resultan costosas si se extiende su uso por periodos largos de tiempo.
      .col-4.bg-verde-oscuro.pb-5.rounded-20-der
        .row
          .col-4.offset-4.mt-4
            figure  
              img(src="@/assets/template/tema-1-45.svg", alt="Texto que describa la imagen")
          .h4.text-white.mt-4.px-4 Versiones demo o de licencia estudiantil
          p.mt-4.px-4.text-white Algunos programas otorgan acceso a funcionalidades limitadas para comprender su funcionamiento o llevar a cabo tareas muy concretas. Usualmente emiten informes con marcas de agua para evitar su uso comercial. Esta metodología es recomendable cuando no se tiene certeza de si el software se adapta a las necesidades de la empresa.



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({}),
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
