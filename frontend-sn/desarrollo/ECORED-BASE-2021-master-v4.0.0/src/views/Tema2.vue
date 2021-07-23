<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Informes financieros
    figure.mt-4
      img(src="@/assets/template/tema-2-1.png" , alt="Texto que describa la imagen")
    p.mt-4 Los informes financieros buscan reflejar la situación de la empresa a una fecha determinada, para ello existen diferentes estructuras enfocadas a satisfacer las necesidades de diferentes usuarios de la información. Su periodicidad, nivel de detalle y partidas a presentar, son aspectos tan variables que pueden elaborarse a la medida para analizar problemáticas o tendencias en específico. Para dar continuidad a los temas expuestos, se propone el análisis de tres estados: de costos, de resultados y de situación financiera. 
    .titulo-segundo.mt-5
      #t_2_1.h4 2.1 	Estado de costos
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-primario-invertido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-2.svg", alt="Texto que describa la imagen")
            .col-lg-9
              .bloque-texto-a__texto.p-4
                p Un informe de costos se elabora a partir de la recopilación de la información del área de producción. El nivel de detalle se estimará según el criterio del jefe de área, de tal forma que aporte la información necesaria y suficiente para crear un criterio sustentado respecto a los procesos claves de la producción. Sin una consolidación de información correcta y oportuna, la toma de decisiones se verá comprometida.
                p.mt-3 El ciclo de producción incluye varias fases en secuencia donde los productos terminados, y por lo tanto su costo, abandonan el inventario una vez son vendidos; el siguiente flujograma presenta cada una de las etapas: 
    .row.mt-5
      .col-11.offset-1
        .h5 Figura 5
        p.mt-3 Flujograma del costo de ventas
    figure.mt-4
      img(src="@/assets/template/tema-2-3.png" , alt="Texto que describa la imagen")
      figcaption.mt-3 Referencia Nota. Figura adaptada de “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL”, p. 260.
    .row.mt-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 El estado de costos es un informe a través del cual se detallan las cifras que componen el costo de ventas, como puede apreciarse en el flujograma anterior, allí se consigna sólo una porción de los costos de producción, puesto que, por su mecánica, se deduce el valor de los productos en proceso o de aquellos terminados que permanecen en el inventario. La estructura recomendada para este estado es la siguiente:
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 13
    p.mt-4 Estructura del estado de costo de ventas
    .row.mt-4
      .col-10.offset-1
        .row
          .tabla-a.color-acento-contenido.mt-4 
            table
              caption.mt-3 Referencia Nota. Figura adaptada de “Presupuestos bajo normas internacionales de información financiera y taxonomía XBRL” p. 260.
              thead
                tr
                  td 
                    .h4.mb-0.px-4 Nombre empresa Estado de costos de venta Fecha (desde - hasta) 
              tbody
                tr
                  td.py-3.px-4
                    .row
                      .col-9
                        p Inventario de materia prima inicial
                        p Inventario de materia prima inicial
                      .col-3.text-align-right
                        p 100   
                        p 50
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Materia prima disponible
                      .col-3.text-align-right
                        p 150
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p - Inventario de materia prima final 
                      .col-3.text-align-right 
                        p 30
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Costo de Materia prima final
                      .col-3.text-align-right
                        p 120
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p  + Costo de mano de obra directa
                        p  + Costo de servicios directos
                        p  + Costos indirectos
                      .col-3.text-align-right
                        p 30
                        p 10
                        p 15
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Costo de producción del periodo
                      .col-3.text-align-right
                        p 175
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p + Inventario de producto en proceso inicial
                      .col-3.text-align-right
                        p 16
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Costo de producto en proceso
                      .col-3.text-align-right
                        p 191
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p  - Inventario de producto en proceso final
                      .col-3.text-align-right
                        p 25
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Costo de productos terminados
                      .col-3.text-align-right
                        p 166
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p  + inventario de producto terminado inicial
                      .col-3.text-align-right
                        p 42
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Producto disponible a la venta
                      .col-3.text-align-right
                        p 208
                tr
                  td.py-3.px-4 
                    .row
                      .col-9
                        p  - inventario de producto terminado final
                      .col-3.text-align-right 
                        p 63
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Costo de ventas
                      .col-3.text-align-right
                        p 145
    .titulo-segundo.mt-5
      #t_2_2.h4 2.2	Estado de resultados 
    .row.mt-5
      .col-12
        .row.borde-gris.rounded-20
          .col-4.py-4.d-none.d-xl-block.align-self-center
            .row.p-4.borde-gris-der
              figure
                img(src="@/assets/template/tema-2-4.svg", alt="Texto que describa la imagen")
          .col-xl-8.p-5
            p Este  informe contiene partidas financieras como los ingresos operacionales, el costo de ventas, los gastos administrativos y de ventas, y los demás ingresos y gastos no operativos. Como su nombre lo indica, con él se busca medir el resultado de las operaciones de la empresa, tengan o no con el objeto social con el que fue concebida.  Se encuentra relacionado con el estado de costos, puesto que este último detalla el cálculo del costo de ventas, valor que se lleva al estado de resultados para determinar la utilidad bruta de la sociedad, es decir, la ganancia resultante de los ingresos operativos,  menos sus costos de producción.
    .row.mt-5 
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 El estado de resultados discrimina los ingresos según su relación con la actividad operacional, el costo de ventas, por otra parte, corresponde al costo de producción de los bienes o servicios vendidos. Los gastos se discriminan por función o naturaleza, según las preferencias o necesidades del emisor. Las ganancias serán el resultado de restar los costos y gastos a los ingresos de cada categoría. La utilidad neta del ejercicio contemplará el gasto por el impuesto de renta, también conocido como impuesto a las ganancias, debido que se calcula al multiplicar una tarifa por el excedente fiscal del ejercicio. 
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 14
    p.mt-4 Estructura del estado de resultados
    .row.mt-4
      .col-10.offset-1
        .row
          .tabla-a.color-acento-contenido.mt-4 
            table
              caption.mt-3 Referencia Nota. Elaboración Sena
              thead
                tr
                  td 
                    .h4.mb-0.px-4 Nombre empresa Estado de costos de venta Fecha (desde - hasta) 
              tbody
                tr
                  td.py-3.px-4
                    .row
                      .col-9
                        p Ingresos de actividades ordinarias
                        p  - Costo de ventas
                      .col-3.text-align-right
                        p 300   
                        p 145
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Ganancia bruta
                      .col-3.text-align-right
                        p 155
                tr
                  td.py-3.px-4
                    .row
                      .col-9
                        p  - Gastos de ventas
                        p  - Gastos de administración
                      .col-3.text-align-right
                        p 25    
                        p 32
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Ganancia antes de impuestos
                      .col-3.text-align-right
                        p 105
                tr
                  td.py-3.px-4
                    .row
                      .col-9
                        p - Impuesto a las ganancias
                      .col-3.text-align-right
                        p 35
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p &#61; Ganancia de operaciones continuadas
                      .col-3.text-align-right
                        p 70
    .titulo-segundo.mt-5
      #t_2_3.h4 2.3	Estado de situación financiera              
    p.mt-4 La finalidad de este informe es ofrecer al usuario de la información, una imagen de la estructura financiera de la empresa a una fecha en concreto. Las tres categorías principales del estado son el activo, el pasivo y el patrimonio. 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-gris")
      .row(titulo="Patrimonio")
        p Incluye todos los recursos controlados por la entidad, sobre los cuales se espera obtener algún beneficio económico a futuro. Su composición varía según el tipo de empresa, por ejemplo, una organización dedicada a la producción tendrá una composición donde la maquinaria y equipo tomarán más importancia que en una empresa dedicada a la prestación de servicios. Los recursos aquí designados tienen como propósito principal, cubrir las obligaciones futuras y permitir la operación permanente.
        .row
          .col-8.offset-2
            figure.mt-4
              img(src="@/assets/template/tema-2-5.svg" , alt="Texto que describa la imagen")
      div(titulo="Pasivo")
        .row
          .col-lg-2.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-6.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-10
            p Aglomera las obligaciones adquiridas por la empresa a pagar en un periodo determinado. Su reconocimiento implica que en algún momento generaron beneficios para la compañía, por ejemplo, un crédito financiero o una compra de mercancía financiada por el proveedor.
      div(titulo="Patrimonio")
        .row
          .col-lg-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-7.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Es el valor residual al tomar la totalidad de los activos y deducirle los pasivos. Incluye los aportes efectuados por los socios, así como los resultados de los ejercicios que no han sido distribuidos a los socios. 
    .row.mt-5 
      .col-12
        .cajon.color-acento-contenido.p-4.mb-4
          p.m-0 Para otorgar más herramientas para su análisis, los activos y pasivos pueden separarse en corrientes y no corrientes; una partida es corriente si espera realizarse (convertirse en efectivo) en periodos inferiores a un año, por ejemplo, los inventarios que se esperan vender en el corto plazo. En el caso de las cifras catalogadas como no corrientes, se espera que permanezcan en el estado de situación financiera por periodos superiores a un año, como una obligación financiera que se terminará de pagar varios años después, o la maquinaria utilizada para producción.
          p.mt-4 El siguiente ejemplo da una idea de la estructura del estado de situación financiera de una empresa, su organización puede someterse a cambios de acuerdo con el criterio de su emisor, pero respetando las categorías y principios ya mencionados
    .h4.mt-5.px-4.borde-acento-contenido-izq Tabla 15
    p.mt-4 Estructura del estado de situación financiera
    .row.mt-4
      .col-12
        .row
          .tabla-a.color-acento-contenido.mt-4 
            table
              caption.mt-3 Referencia Nota. Elaboración Sena
              thead
                tr
                  th(colspan='2')
                    .h4.mb-0.px-4 Nombre empresa Estado de costos de venta Fecha (desde - hasta) 
              tbody
                tr
                  td
                    .row
                      .col-9
                        p.opacity-0 " "
                        p Activo
                        p Activo corriente
                        p Efectivo y equivalentes
                        p Inversiones
                        p Cuentas por cobrar
                        p Inventarios                         
                      .col-3.text-align-right
                        p.opacity-0 " "   
                        p.opacity-0 " "
                        p.opacity-0 " "
                        p 12
                        p 5
                        p 25
                        p 118                         
                  td.py-3.px-4
                    .row
                      .col-9
                        p Pasivo
                        p Pasivo corriente
                        p Obligaciones financieras
                        p Proveedores
                        p Cuentas por pagar
                        p Obligaciones laborales
                        p Impuestos por pagar                        
                      .col-3.text-align-right
                        p.opacity-0 " "     
                        p.opacity-0 " " 
                        p 30
                        p 15
                        p 8
                        p 10
                        p 20
                tr.bg-gris
                  td.py-3.px-4 
                    .row
                      .col-9
                        p Total activo corriente
                      .col-3.text-align-right
                        p 160
                  td.py-3.px-4 
                    .row
                      .col-9
                        p Total pasivo corriente
                      .col-3.text-align-right
                        p 83
                tr
                  td
                    .row
                      .col-9
                        p Activo no corriente
                        p Propiedades, planta y equipo
                        p Intangibles
                        p Otros activos
                      .col-3.text-align-right
                        p.opacity-0 " "  
                        p 95
                        p 5
                        p 10
                  td.py-3.px-4
                    .row
                      .col-9
                        p.opacity-0 " "
                        p.opacity-0 " "
                        p Pasivo
                        p Pasivo corriente                       
                      .col-3.text-align-right
                        p.opacity-0 " "     
                        p.opacity-0 " " 
                        p.opacity-0 " " 
                        p 15
                tr
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total activo no corriente
                      .col-3.text-align-right
                        p 110
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total pasivo no corriente
                      .col-3.text-align-right
                        p 15
                tr
                  td.py-2.opacity-0.borde-y-none
                  td.py-2
                tr
                  td.py-3.px-4.opacity-0.borde-y-none 
                    .row
                      .col-9
                      .col-3.text-align-right
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total pasivo 
                      .col-3.text-align-right
                        p 98        
                tr
                  td.borde-y-none
                    .row
                      .col-9
                        
                      .col-3.text-align-right
                        
                  td.py-3.px-4
                    .row
                      .col-9
                        p.opacity-0 " "
                        p Patrimonio
                        p Capital social
                        p Utilidades
                        p Reservas                        
                      .col-3.text-align-right
                        p.opacity-0 " "     
                        p.opacity-0 " " 
                        p 95 
                        p 70
                        p 7
                tr
                  td.py-3.px-4.opacity-0.borde-y-none 
                    .row
                      .col-9
                      .col-3.text-align-right
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total patrimonio 
                      .col-3.text-align-right
                        p 172
                tr
                  td.py-2.opacity-0.borde-y-none
                  td.py-2
                tr
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total activo
                      .col-3.text-align-right
                        p 270
                  td.py-3.px-4.bg-gris 
                    .row
                      .col-9
                        p Total pasivo y patrimonio 
                      .col-3.text-align-right
                        p 270
    .titulo-segundo.mt-5
      #t_2_4.h4 2.4	Presentación de estados financieros 
    p.mt-4 Las normas internacionales de información financiera para pequeñas y medianas empresas (2015) demandan una serie de requisitos a la hora de presentar los estados financieros. Entre ellos destacan los siguientes:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Identificación de los estados financieros")
        .row
          .col-5.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-8.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-7.align-self-center
            .h4 Frecuencia de la información
            p.mt-3 Los estados financieros serán presentados por lo menos anualmente, lo anterior sin perjuicio de la presentación de información en periodos intermedios; con respecto a esto último, deberá revelarse esta condición y la razón para presentarlos en estos intervalos de tiempo diferentes.

      .py-3.py-md-4(titulo="Uniformidad en la presentación")
        .row
          .col-5.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-9.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-7.align-self-center
            .h4 Uniformidad en la presentación
            p.mt-3 La información debe ser congruente con los principios aplicados en periodos anteriores, no pueden cambiar los criterios de clasificación a menos que exista una justificación para ello y se revele en la información complementaria. En este sentido se dará cuenta de la naturaleza de la reclasificación, la cuantía y el motivo de esta.
      .py-3.py-md-4(titulo="Comparabilidad")
        .row
          .col-5.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-7.align-self-center
            .h4 Comparabilidad
            p.mt-3 Los estados financieros deben presentarse de forma comparativa con el periodo anterior, de tal forma que aporte un contexto adicional para su interpretación.
      .py-3.py-md-4(titulo="Materialidad")
        .row
          .col-5.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-7.align-self-center
            .h4 Materialidad
            p.mt-3 Las partidas se presentarán de forma separada por cada clase si tienen importancia relativa. Se consideran materiales aquellas partidas que puedan modificar la opinión de los usuarios, ya sea por su naturaleza o por su cuantía. 
      .py-3.py-md-4(titulo="Identificación de los estados financieros")
        .row
          .col-5.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-2-12.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-7.align-self-center
            .h4 Identificación de los estados financieros
            p.mt-3 Deben indicar por lo menos:
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right.verde
                | El nombre de la empresa que informa y a la que corresponde la información.
              li
                i.fas.fa-angle-right.verde
                | Si pertenecen a una empresa individual o a un grupo empresarial.
              li
                i.fas.fa-angle-right.verde
                | La fecha de cierre del período informado o su periodo cubierto. 
              li
                i.fas.fa-angle-right.verde
                | La moneda de presentación.
              li
                i.fas.fa-angle-right.verde
                | El grado de redondeo (si aplica).
    .row.mt-5
      .col-12.col-lg-10.offset-lg-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-13.svg", alt="Texto que describa la imagen")
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p La información complementaria se anexará como notas a los estados financieros, en ella se detallarán aquellos aspectos que la norma exija para cada tipo de partidas. Adicionalmente, en las notas deberá indicarse el domicilio de la empresa y el país donde fue constituida, así como una descripción de las operaciones de la entidad y sus principales actividades.
    .titulo-segundo.mt-5
      #t_2_5.h4 2.5	Indicadores financieros
    .row.mt-4
      .col-12.col-lg-7
        p La evaluación de los informes financieros requiere un amplio conocimiento de las estructuras de capital y de la industria en la que se desenvuelve la compañía. Comprender la mecánica de las cifras también aporta más elementos de juicios para efectuar su lectura; muchos de los rubros presentados en los estados financieros se relacionan entre ellos a razón de las operaciones normales de una transacción comercial. El estandarizar estas relaciones permite crear fórmulas aplicables a los informes que permitan compararlo de manera ágil con otras empresas. 
        .row.mt-4 
          .col-12
            .cajon.color-acento-contenido.p-4.mb-4
              p.m-0 Los indicadores financieros surgen como aquella herramienta que integra varias partidas a un análisis concreto. A través de ellos podemos medir desde otra perspectiva la liquidez de la empresa, su rentabilidad, su estabilidad o hasta su capacidad de endeudamiento. Aprender a calcularlos e interpretarlos es ideal a la hora de evaluar los resultados de una compañía, a continuación, se presentan sus categorías:
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-14.png" , alt="Texto que describa la imagen")
    .row.mt-5
      .col-11.offset-1
        .h5 Figura 6
        p.mt-3 Clases de indicadores financieros
    figure.mt-4
      img(src="@/assets/template/tema-2-15.png" , alt="Texto que describa la imagen")
    p.mt-5 En el siguiente documento se presentan algunos de los indicadores más importantes, clasificados según las categorías descritas previamente, así como una breve explicación que ofrece una aproximación a las interpretaciones de éstos: 
    .row
      .col-10.offset-1
        .tarjeta.p-3.mt-4.bg-verde-degradado
          .row.justify-content-around.align-items-center
            .col-4.col-sm-2.col-lg-1.offset-1
              img(src="@/assets/template/tema-2-16.svg")
            .col
              .row.justify-content-between.align-items-center
                .col
                  .row
                    .col-
                      a.anexo(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                        .anexo__icono
                          img(src="@/assets/template/icono-pdf.svg")
                        .anexo__texto
                          p Indicadores financieros categoria 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 
    .titulo-segundo.mt-5
      #t_2_6.h4 2.6	Acciones de mejora
    .row.mt-4
      .col-12.col-lg-7
        p El análisis de los indicadores financieros puede brindar una visión más global de los procesos de la empresa y su relación con diversas áreas. La toma de decisiones del área de producción puede surgir de la interpretación de varios de los indicadores explicados, ya que con ellos se pueden integrar jefes de diferentes departamentos para apuntar a objetivos en común. 
        .row.mt-4 
          .col-12
            .cajon.color-primario.p-4.mb-4.bg-primario-op25
              p.m-0 Un indicador como el margen bruto de rentabilidad, relaciona los costos de producción de las unidades con los ingresos asociados a su venta. Si la razón es muy cercana a 0, eso significa que la mayor parte de los ingresos deben destinarse a la producción, dejando pocos recursos para la operación restante. Las acciones de mejora deberán ir enfocadas a reducir los costos de producción o incrementar el precio de venta, de tal forma que se incremente la proporción. Algunas de las acciones sugeridas podrían ser:
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-17.png" , alt="Texto que describa la imagen")
    SlyderB.mt-4(:datos="datosSlyder")
    p.mt-5 Bajo esta misma mecánica pueden aplicarse acciones de mejora en otros aspectos que no pertenecen a la producción, pero si se ven afectados por ella, por ejemplo, los indicadores de liquidez pueden generar una alerta, puesto que, si el capital de trabajo es muy reducido, la disponibilidad de dinero para adquirir materia prima a futuro se puede ver comprometida. La planeación de la producción debe tener presente este tipo de situaciones, donde la interrupción del proceso productivo puede ser una consecuencia de una mala gestión de otra área.
    .row.mb-5 
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-botones.p-4.mb-4
          p.m-0 Los indicadores de endeudamiento pueden relacionarse con los de liquidez para evaluar alternativas cuando no se cuenta con el dinero suficiente para mantener la operación. Algunas acciones que integradas pueden aportar a mitigar este tipo de problemáticas son las siguientes:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg-verde-claro")
      .row(titulo="Evaluar las políticas de inversión")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-2-23.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Solicitar productos crediticios tiene un impacto negativo en la rentabilidad debido a los intereses y demás costos de transacción, pero puede oxigenar la operación lo suficiente para adquirir productos a mejores precios ofreciendo pagos de contado.  
      div(titulo="Evaluar políticas de recaudo y de pago")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-2-24.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Cuando los productos se venden a crédito el impacto en la liquidez se ve postergado a la fecha de pago. Por otra parte, los proveedores a los que se les compra también manejan sus propios plazos. Una acción de mejora enfocada a esta problemática debe encaminarse a postergar los pagos a los proveedores al mayor tiempo posible sin que se resienta el precio de compra, y reducir los plazos para recaudar los dineros asociadas a los productos vendidos sin afectar los precios de venta.
      div(titulo="Evaluar las políticas de inversión")
        .row
          .col-2.offset-5.offset-lg-1
            figure
              img(src="@/assets/template/tema-2-25.svg", alt="Texto que describa la imagen")
          .col-12.col-lg-9
            p Las inversiones en activos fijos pueden comprometer recursos actuales y futuros, pero como contraparte pueden mejorar los márgenes de rentabilidad o la capacidad de producción. Analizar los impactos puede otorgar elementos de juicio para decidir si es viable afectar la liquidez para mejorar la rentabilidad. 



</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo:
          'Efectuar estudio de mercado para estimar el impacto de un incremento del precio de venta',
        texto:
          'Factores como la competencia o la naturaleza del producto pueden afectar sobre la aceptación del cambio de los precios, es una opción viable únicamente si la cantidad de unidades vendidas no se ve significativamente reducida.',
        imagen: require('@/assets/template/tema-2-18.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaluar los precios de los insumos',
        texto:
          'Solicitar cotizaciones a diversos proveedores aporta elementos de juicio para definir si la materia prima se está comprando a un precio competitivo. Según los niveles de producción pueden evaluarse compras a mayor escala para obtener descuentos adicionales.',
        imagen: require('@/assets/template/tema-2-19.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Revisar políticas de inventario ',
        texto:
          'El sostenimiento de las instalaciones para conservar los inventarios puede conllevar costos elevados si las existencias son muy numerosas. Esto puede redundar en arrendamientos más costosos, mayor personal para supervisar el estado del inventario o incluso incremento en servicios públicos si requieren de condiciones específicas de conservación, como refrigeración o iluminación.',
        imagen: require('@/assets/template/tema-2-20.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Evaluar secuencia de actividades productivas',
        texto:
          'En algunas ocasiones, una mala planeación de producción puede llevar a la ejecución ineficiente de procesos. Coordinar las tareas puede evitar recaer en tareas redundantes que impliquen doble pago de mano de obra o sobreutilización de maquinaria.',
        imagen: require('@/assets/template/tema-2-21.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Identificar y controlar desperdicios de producción',
        texto:
          'Productos defectuosos o material sobrante inutilizable, son elementos que no se suelen cuantificar y si representan un mayor valor del costo debido al impacto que tiene sobre la eficiencia de la producción. Reducir los productos defectuosos mejorando la calidad del proceso, hará que con el mismo costo de producción se vendan más unidades. ',
        imagen: require('@/assets/template/tema-2-22.svg'),
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

<style lang="sass" scoped></style>
