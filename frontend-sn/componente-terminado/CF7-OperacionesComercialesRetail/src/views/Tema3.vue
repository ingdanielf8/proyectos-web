<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Empaque de productos 
    .row
      p.mt-5 Para este proceso se deben tener en cuenta algunos cuidados al momento de registrar los productos y así evitar los reclamos, robos y averiar los productos, los cuales verá a continuación.
      .h4.mt-5.text-morado Para que logre prestar un excelente servicio de empaque debe tener en cuenta las siguientes recomendaciones:
    .row.mt-5(data-aos="zoom-in")
      .col-1.offset-1.text-center.py-1.bg-morado-oscuro
        .h4.text-white.py-3.font-45 1
      .col-9.text-center.py-1.bg-morado-oscuro-20.d-flex.align-items-center
        p El material debe estar siempre organizado para que evite demoras al momento de seleccionar una bolsa.
    .row.mt-4(data-aos="zoom-in")
      .col-1.offset-1.text-center.py-1.bg-morado-oscuro
        .h4.text-white.py-3.font-45 2
      .col-9.text-center.py-1.bg-morado-oscuro-20.d-flex.align-items-center
        p Las bolsas están identificadas por tamaño y resistencia para evitar el gasto inoficioso y facilitarte el empaque.
    .row.mt-4(data-aos="zoom-in")
      .col-1.offset-1.text-center.py-1.bg-morado-oscuro
        .h4.text-white.py-3.font-45 3
      .col-9.text-center.py-1.bg-morado-oscuro-20.d-flex.align-items-center
        p Durante el registro debe organizar y clasificar la mercancía de acuerdo con su tamaño, características físicas y composición.
    .h4.mt-5.text-morado La técnica de empaque
    p.mt-4 Al momento de empacar los productos se deben tener en cuenta los siguientes pasos:
    .row.mt-5
      .col-10.offset-1
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Observe")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Observe
              p.mt-4 Observe los productos y proceda a seleccionar la bolsa.

          .row(numero="2" titulo="Para abrir")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Para abrir
              p.mt-4 Para abrir la bolsa introduzca las manos sin sacudirla.
          .row(numero="3" titulo="Distribuir")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-3.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Distribuir
              p.mt-4 Debe distribuir el peso en las bolsas para que el cliente pueda llevarlas en forma equilibrada.
          .row(numero="4" titulo="Recuerde")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Recuerde
              p.mt-4 Recuerde que para artículos pequeños, bolsa pequeña; para artículos grandes, bolsas grandes; pocos artículos en bolsa pequeña, muchos artículos en bolsa grande.
          .row(numero="5" titulo="Siempre")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-5.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Siempre 
              p.mt-4 Siempre utilice la bolsa sin invertirla, llevan nuestra publicidad e imagen a todas partes, márquela con lapicero si el cliente lo requiere.
          .row(numero="6" titulo="Otorgue")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Otorgue
              p.mt-4 Otorgue a la bolsa una base firme colocando en el fondo los artículos sólidos y pesados.
          .row(numero="7" titulo="Reempáquelos")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-7.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Reempáquelos
              p.mt-4 Si una bolsa se rasga, saque todos los artículos y empáquelos en otra.
          .row(numero="8" titulo="Apriete")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Apriete
              p.mt-4 Apriete bien las tapas de los frascos que contengan líquidos, así evitará que se rieguen durante el transporte.
          .row(numero="9" titulo="Colocar")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-9.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Colocar
              p.mt-4 Entre los frascos debe colocar otro artículo en caja o bolsa, para evitar que se quiebren.
          .row(numero="10" titulo="Disminuya")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-10.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Disminuya
              p.mt-4 Disminuya el peso al empacar granos de diferentes tamaños, evitando que las bolsas queden demasiado pesadas.
          .row(numero="11" titulo="Colocarlo")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Colocarlo
              p.mt-4 Cuando el artículo es húmedo o fácil de derramar debe colocarlo primero en una bolsa plástica sin impresión.
          .row(numero="12" titulo="Deben")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-12.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Deben
              p.mt-4 Los productos de aseo deben ir con los de su misma especie, es decir, aseo hogar separado de aseo personal.
              p.mt-4 Los insecticidas y blanqueadores deben empacarse en bolsa separada, puesto que son venenosos.
          .row(numero="13" titulo="Algunos")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-13.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Algunos
              p.mt-4 Algunos productos como escobas, traperos, papel de regalo, flores, sillas, cartulina que por su forma o tamaño son muy difícil empacarlos en bolsas, se sujetan con una bolsa pequeña y el tiquete.
          .row(numero="14" titulo="Los artículos")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-14.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Los artículos 
              p.mt-4 Los artículos que vienen empacados en cajas, como ollas, vajillas, televisores, se les adhiere el tiquete de compra.
          .row(numero="15" titulo="Sobre todo")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-15.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Sobre todo
              p.mt-4 Los licores, sobre todo los costosos, cuando son varios puede empacarlos en bolsa doble, evitando que se quiebren.
          .row(numero="16" titulo="Envolverse")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-16.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Envolverse
              p.mt-4 Los artículos de loza o cristal deben envolverse con papel antes de ser empacados en cajas de cartón o en bolsas cuando son pocos.
          .row(numero="17" titulo="Cuidado")
            .col-3.px-4
              figure
                img(src="@/assets/template/tema-3-17.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.align-self-center
              .h4 Cuidado
              p.mt-4 Debe tener cuidado con productos como arepas, huevos, productos de panadería, bombillos, frutas y verduras.
    .h4.mt-5.text-morado Para que disminuya el riesgo de reclamos por pérdida de paquetes debe tener en cuenta las siguientes recomendaciones:
    .row.mt-5.py-3.bg-azul-claro(data-aos="slide-left")
      .col-4
        figure
          img(src="@/assets/template/tema-3-18.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
      .col-8.align-self-center
        ul.lista-ul
          li 
            i.fa-brain
            | Antes de iniciar un nuevo registro verifique que en el puesto de pago no hayan quedado paquetes o mercancía del cliente anterior.
          li.mt-4
            i.fa-brain
            | Anotar en el tiquete el código del empacador y notificar al cliente el número de paquetes.
    .h4.mt-5.text-morado El empaque simultáneo
    p.mt-4 Consiste en ir empacando a medida que se registra para agilizar la atención al cliente y descongestionar el puesto de pago. Algunos productos por su peso o contextura se prestan para que realice el empaque simultáneo: los textiles, los productos de panadería, la galletería, los pasabocas y los productos refrigerados.
    .h4.mt-5.text-morado El empaque de frutas y verduras
    p.mt-4 Para empacar estos productos debe tener en cuenta algunas clasificaciones:
    .mt-4.position-relative(data-aos="flip-up")
      SlyderA
        .row.bg-tema-3-1.rounded-20.position-slider(style="margin-left:0%").p-5
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Por grupos
            ul.lista-ul.mt-3
              li 
                i.fa-brain
                | Ramas
              li.mt-1
                i.fa-brain
                | Verduras
              li.mt-1
                i.fa-brain
                | Frutas

        div.row.bg-tema-3-2.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.bg-gris.rounded-20.cuadro-gris.px-0
            .row.mx-0.px-5.pt-5
              .h4 Por tamaño
              ul.lista-ul.mt-3
                li 
                  i.fa-brain
                  | Grandes
                li.mt-1
                  i.fa-brain
                  | Medianas
                li.mt-1
                  i.fa-brain
                  | Pequeñas
            .cajon.color-secundario.mt-3
              .row.p-4            
                p Las frutas grandes no se deben poner al lado de las frutas más pequeñas y delicadas, por ejemplo, sandía con ciruelas o papaya con mamoncillos. (Así evitará su maltrato y el deterioro del producto).
        .row.bg-tema-3-3.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.bg-gris.rounded-20.cuadro-gris.px-0
            .row.mx-0.px-5.pt-5
              .h4 Por olor
              p.mt-3 No se deben empacar productos de olores fuertes al lado de productos con aroma suave (siempre frutas y verduras aparte).
              p.mt-4 Ejemplo: cebollas con banano, naranjas con orégano o tomillo.               
            .cajon.color-secundario.mt-3
              .row.p-4            
                p Las hortalizas de hoja, los cítricos y los champiñones son propensos a absorber olores fuertes.
        .row.bg-tema-3-4.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Por peso
            ul.lista-ul.mt-3
              li 
                i.fa-brain
                | Pesados
              li.mt-1
                i.fa-brain
                | Semipesados
              li.mt-1
                i.fa-brain
                | Livianos
              
        .row.bg-tema-3-5.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Por color
            p.mt-3 La combinación de los colores de los productos debe ser agradable a la vista del cliente. Se debe tener en cuenta el contraste de los colores claros y oscuros (cuando se empaca en bolsa transparente). 
        .row.bg-tema-3-6.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Por maduración
            p.mt-3 Según su velocidad de maduración y respiración, no se deben empacar juntos productos que liberen gas etileno.
            p.mt-3 Ejemplo: el plátano maduro con repollo, banano con tomate de aliño o arveja con hortalizas de hoja.
        div.row.bg-tema-3-7.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Por constitución
            ul.lista-ul.mt-3
              li 
                i.fa-brain
                | Resistentes
              li.mt-1
                i.fa-brain
                | Delicados
    .titulo-segundo.mt-5
      #t_3_1.h2 3.1   Descripción del empaque
    p.mt-5 El empaque es un momento importante del producto, en el diseño se debe tener en cuenta la protección y conservación adecuadas para que no se afecte durante el transporte, almacenamiento y entrega al cliente final, también es muy útil diferenciar y promocionar en la etiqueta del producto la marca y demás información que necesite comunicarse.
    .h4.mt-5.text-morado La importancia del empaque:
    .row.mt-5(data-aos="zoom-in")
      .col-1.offset-1.text-center.py-1.bg-morado-oscuro
        .h4.text-white.py-3.font-45 1
      .col-9.text-center.py-1.bg-morado-oscuro-20.d-flex.align-items-center
        p  Consiste en proteger el producto para que llegue en las mejores condiciones al consumidor o cliente final.
    .row.mt-4(data-aos="zoom-in")
      .col-1.offset-1.text-center.py-1.bg-morado-oscuro
        .h4.text-white.py-3.font-45 2
      .col-9.text-center.py-1.bg-morado-oscuro-20.d-flex.align-items-center
        p Una de las funciones que debe cumplir el empaque es ayudar a vender el producto, logrando que el canal de distribución quiera comercializarlo por considerar que es fácil de transportar y almacenar.
    p.mt-5 Son considerados envases todos los artículos "desechables" utilizados con este mismo fin. En este grupo están incluidas las bolsas en las que se empacan los productos de un solo uso y que son entregadas o adquiridas en los comercios por el cliente y los empaques desechables que se utilicen con el mismo fin, como las bandejas, platos, vasos, cubiertos y cualquier otro artículo desechable que se emplea principalmente en la hotelería.
    separador.mt-4
    .titulo-segundo.mt-5
      #t_3_2.h2 3.2   Tipos 
    .row.mt-5.zoom-in
      .col-7.align-self-center
        p Cada producto tiene su propio envase y embalaje, el envase primario tiene como función contenerlo, envolverlo, protegerlo y conservarlo, es el primer contacto con el producto, el empaque secundario tiene uno o varios embalajes primarios.
        p.mt-3 Teniendo en cuenta los diferentes tipos de envases se deben categorizar en primarios, secundarios y terciarios, el envase primario es el que protege y está en contacto directo con el producto, el secundario contiene varios productos y facilita su traslado, el terciario es el que contiene envases grandes con mucha mercancía.
        .row
          .col-10
            a.anexo.mt-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p #[strong Enlace web.] ¿cuáles son los tipos de envases? / características de los envases / tipos de empaque o embalaje.
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-3-26.png", alt="Texto que describa la imagen")
    .h4.mt-5.text-morado Tipos de envases para los alimentos
    p.mt-5 En los envases para alimentos y bebidas se deben tener en cuenta las materias primas con las que se producen, para estos envases se utilizan metal, vidrio, plástico, papel y cartón, cada uno tiene sus ventajas y desventajas, a continuación, profundice en el tema y responda algunas preguntas que puedan surgir.
    .mt-4.position-relative(data-aos="flip-up")
      SlyderA
        .row.bg-tema-3-8.rounded-20.position-slider(style="margin-left:0%").p-5
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 El envase primario
            p.mt-3 Es el que tiene contacto directo con el producto, además de contener el producto permite su consumo.
            p.mt-3 Un ejemplo de envase primario son las latas que contienen leche, sea líquida o en polvo. La función de este primer envase es cumplir con dos condiciones principales: proteger la mercancía y fomentar las ventas.

        div.row.bg-tema-3-9.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.bg-gris.rounded-20.cuadro-gris.px-0
            .row.mx-0.px-5.pt-5
              .h4 Envase secundario
              p.mt-3 Es el envase contenedor unitario de uno o varios envases primarios. Cumple la función de protegerlos, identificarlos y otorgar información sobre las cualidades del producto.
        .row.bg-tema-3-10.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.bg-gris.rounded-20.cuadro-gris.px-0
            .row.mx-0.px-5.pt-5
              .h4 ¿Qué es el envase y sus características?
              p.mt-3 El envase es todo recipiente o soporte destinado a contener un producto para así poder facilitar su transporte.
              p.mt-3 Un buen envase se identifica por las siguientes características: posibilidad de contener el producto y resistencia.
        .row.bg-tema-3-11.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 ¿Qué tipo de envases plásticos se pueden utilizar para alimentos?
            p.mt-3 El PET (material sintético denominado poliéster) es muy usado en el envasado de los diferentes tipos de refrescos, bebidas para deportistas, agua, salsas, aderezos para ensaladas, vitaminas, botellas de aceite vegetal y envasado de mantequilla de maní. Pero también existen otros materiales.
              
        .row.bg-tema-3-12.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Bolsas de plástico
            p.mt-3 Hay que tener en cuenta que solo los envases de plástico permitidos para preparar los alimentos en microondas son los que pueden utilizarse en este aparato.
            p.mt-3 En este sentido no olvidar que este material se puede fundir o contaminar los alimentos.  Si bien es un producto muy útil para diversos usos, este material al menos que se indique no es apto para microondas.
        .row.bg-tema-3-13.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 Envase terciario
            p.mt-3 Es el envase que cumple con la función de distribuir, unificar y proteger el producto a lo largo de la cadena comercial.  Este envase se refiere a la caja de cartón corrugado que contendrá varias latas de leche para su distribución a los almácenes.
        div.row.bg-tema-3-14.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 ¿Cuál es el mejor envase para alimentos?
            p.mt-3 Unos de los envases que más se usa para empacar alimentos es el aluminio y la hojalata, ya que son más confiables que las bolsas de plástico a la hora del transporte, también porque extiende la vida útil del producto, factor importante en la planificación y sostenibilidad de la venta.
        div.row.bg-tema-3-15.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 ¿Cuál es el material más utilizado para empaques de alimentos?
            p.mt-3 El plástico tiene muchas aplicaciones en los tipos de envases para cualquier alimento debido a sus propiedades, que ha encontrado cada vez más aplicaciones en el campo de envases para todo tipo de alimentos es el PET, debido a sus propiedades, su inercia química, su maleabilidad y su color.
        div.row.bg-tema-3-16.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            .h4 ¿Qué recipientes no se pueden meter en el microondas?
            p.mt-3 Hay que ser muy cuidadoso con los recipientes que se usan para la preparación de alimentos en el microondas, no se pueden utilizar el papel de aluminio o las tapas metálicas hasta recipientes de acero inoxidable o las vajillas decoradas con pinturas metálicas. 
            p.mt-3 No se deben usar los recipientes herméticamente cerrados e incluso los alimentos con cáscara o piel dura para evitar que revienten.
    .titulo-segundo.mt-5
      #t_3_3.h2 3.3   Normativa y clasificación
    p.mt-5 En los envases para alimentos y bebidas se deben tener en cuenta las materias primas con las que se producen, para estos envases se utilizan metal, vidrio, plástico, papel y cartón, cada uno tiene sus ventajas y desventajas, a continuación, profundice en el tema y responda algunas preguntas que puedan surgir.
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta bg-morado-gradiente")(data-aos="slide-up")
      .row(titulo="Según su capacidad")
        .col-4.align-self-center
          figure
            img(src="@/assets/template/tema-3-36.png", alt="Titulo item")
        .col-8.align-self-center
          p #[strong Envase unitario:] Como su nombre lo indica contiene un solo producto, la mayoría de los productos tiene envase unitario o primario, es la unidad de venta de un solo contenido.
          p.mt-3 #[strong Envase múltiple:] Es cualquier recipiente o envoltura que contiene dos o más productos destinados para la venta al cliente, casi siempre su precio es levemente inferior.
          p.mt-3 #[strong Envase colectivo:] Es la envoltura o recipiente que contiene dos o más productos envasados previamente.

      div(titulo="Según su textura").row
        .col-4.align-self-center
          figure
            img(src="@/assets/template/tema-3-37.png", alt="Titulo item")
        .col-8.align-self-center
          p #[strong Envase rígido:] La rigidez de este envase permite ubicar el producto en estibas y soporta mayor peso sin sufrir daños, entre ellos están las latas metálicas y los envases de vidrio.
          p #[strong Envase semirrígido:] La resistencia de este envase es menor al envase rígido, también se puede ubicar en estibas, entre ellos están los envases de plástico.
          p #[strong Envase flexible:] Estos envases son fabricados con hojas de aluminio, papel, laminaciones, películas plásticas y otros materiales flexibles, no se deben almacenar en estibas, ya que se pueden deteriorar.
      
      div(titulo="Según su fin estratégico").row
        .col-4.align-self-center
          figure
            img(src="@/assets/template/tema-3-38.png", alt="Titulo item")
        .col-8.align-self-center
          p #[strong Envases de líneas de productos o por familias:] Se utiliza en productos de la misma línea, con el objetivo de facilitar la publicidad de la marca.
          p #[strong Envases de uso posterior:] Se elabora con el sentido de que sirva para diversos fines, se puede utilizar una vez se ha sacado de su envase o se ha consumido.
          p #[strong Envases promocionales:] Este envase cumple con las funciones para las cuales fue elaborado y también sirve como promoción, esta función se hace con el fin de provocar al consumidor para su consumo.
    .h4.mt-5.text-morado Las Normas ISO para empaques y embalajes
    p.mt-5 Las certificaciones para las normas estandarizadas que involucran a los empaques y embalajes corresponden a las siguientes:
    .row.mt-5.position-relative.z-index-2
      .col-8.offset-2.text-center
        .row.text-white
          .col-6.px-0.bg-morado-oscuro.rounded-15.w-45
            .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false").box-shadow
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-3             
                  .row.align-self-center   
                    .h4.pt-4 ISO 3394
                    p.mt-4.pb-4 Se refiere a las dimensiones de cajas, plataformas o cargas con pallets. Las cajas externas o masters, utilizadas para el embalaje deben ajustarse a 60×40 cm.
                .tarjeta-flip__contenido.p-3.bg-tema-3-17           
                  .h4.pt-4.text-transparent ISO 3394
                  p.mt-4.pb-5.text-transparent Se refiere a las dimensiones de cajas, plataformas o cargas con pallets. Las cajas externas o masters, utilizadas para el embalaje deben ajustarse a 60×40 cm.
                        
          .col-6.px-0.bg-morado-claro.rounded-15.ml-4.w-45
            .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false").box-shadow
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-3             
                  .row.align-self-center
                    .h4.pt-4 R87
                    p.mt-4.pb-4 Es una reglamentación desprendida de la norma anterior y hace referencia al etiquetado de envases para venta individual con descripción de ingredientes.
                .tarjeta-flip__contenido.p-3.bg-tema-3-18
                  .h4.pt-4.text-transparent R87
                  p.mt-4.pb-4.text-transparent Es una reglamentación desprendida de la norma anterior y hace referencia al etiquetado de envases para venta individual con descripción de ingredientes.
                
        .row.text-white.mt-3 
          .col-6.px-0.bg-morado-oscuro.rounded-15.w-45
            .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false").box-shadow
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-3             
                  .row.align-self-center 
                    .h4.pt-4 ISO 780 y 7000
                    p.mt-4.pb-4 Ambas cuidan que se agregue señalética para el manejo. Crear etiquetas con simbología que indique si se transporta algo frágil o que corre riesgo, o que pueda causarlos con mala manipulación.
                .tarjeta-flip__contenido.p-3.bg-tema-3-19
                  .h4.pt-4.text-transparent ISO 780 y 7000
                  p.mt-4.pb-4.text-transparent Ambas cuidan que se agregue señalética para el manejo. Crear etiquetas con simbología que indique si se transporta algo frágil o que corre riesgo, o que pueda causarlos con mala manipulación.
                
          .col-6.px-0.bg-morado-claro.rounded-15.ml-4.w-45
            .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false").box-shadow
              .tarjeta-flip__contenedor
                .tarjeta-flip__img.p-3             
                  .row.align-self-center 
                    .h4.pt-4 ISO 14001
                    p.mt-4.pb-4 Esta certificación indica que la empresa está minimizando el impacto negativo que su actividad pudiera generar al medio ambiente.
                .tarjeta-flip__contenido.p-3.bg-tema-3-20
                   .h4.pt-4.text-transparent ISO 14001
                    p.mt-4.pb-4.text-transparent Esta certificación indica que la empresa está minimizando el impacto negativo que su actividad pudiera generar al medio ambiente.
                
    separador.mt-4
    .titulo-segundo.mt-5
      #t_3_4.h2 3.4   Técnicas de empaque
    .row.mt-5.zoom-in
      .col-7.cuadro-morado-fondo.align-self-center
        p Uno de los empaques que necesita más cuidado son las frutas y verduras, ya que requieren de un empaque eficaz, teniendo en cuenta que es un producto delicado y se debe proteger su calidad durante su transporte y en los estantes del punto de venta. Este empaque se debe seleccionar dependiendo del tipo de producto y lo que funcione mejor para envolverlo y proveer el mejor método de manejo. Este tipo de empaque debe ser diseñado para soportar de forma eficaz diferentes condiciones en la cadena de abastecimiento: manipulación brusca al cargar y descargar, compresión derivada del peso de otros contenedores (si están apiladas dobles), su movimiento durante el transporte, y la alta humedad que puede presentarse durante el pre-enfriamiento, tránsito y almacenamiento.
        p.mt-3 El tener un buen conocimiento de todos los aspectos de empaque es clave al momento de seleccionar el más adecuado, de acuerdo con el tipo de producto que se enviará y para tener un mejor manejo del producto durante el tránsito.
      .col-5
        figure
          img(src="@/assets/template/tema-3-43.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mt-4
      .col-6.offset-3
        a.anexo.mt-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[strong Enlace web.] En el video ilustrativo anexo, adicionalmente podrá conocer un poco sobre packaging.
    separador.mt-4

    .titulo-segundo.mt-5
      #t_3_5.h2 3.5   Empaque de productos según naturaleza
    p.mt-5 Para la elaboración de empaques y embalajes se deben considerar algunos factores, teniendo en cuenta el producto a preservar y el modo de transporte que se va a utilizar, estos factores son: 
    .row.mt-5(data-aos="zoom-in")
      .col-4.bg-morado-gradiente.rounded-20.p-5.w-31.ml-4
        figure
          img(src="@/assets/template/tema-3-44.svg", alt="Texto que describa la imagen").w-45.margin-0-auto
        .h4.mt-4.text-center Fragilidad
      .col-4.bg-morado-gradiente.rounded-20.p-5.w-31.ml-4
        figure
          img(src="@/assets/template/tema-3-45.svg", alt="Texto que describa la imagen").w-45.margin-0-auto
        .h4.mt-4.text-center Durabilidad
      .col-4.bg-morado-gradiente.rounded-20.p-5.w-31.ml-4
        figure
          img(src="@/assets/template/tema-3-46.svg", alt="Texto que describa la imagen").w-45.margin-0-auto
        .h4.mt-4.text-center Resistencia a la abrasión
    .row.mt-4(data-aos="zoom-in")
      .col-4.bg-morado-gradiente.rounded-20.p-5.w-31.offset-2
        figure
          img(src="@/assets/template/tema-3-47.svg", alt="Texto que describa la imagen").w-45.margin-0-auto
        .h4.mt-4.text-center Sensibilidad a la humedad
      .col-4.bg-morado-gradiente.rounded-20.p-5.w-31.ml-4
        figure
          img(src="@/assets/template/tema-3-48.svg", alt="Texto que describa la imagen").w-45.margin-0-auto
        .h4.mt-4.text-center Deterioro y vida útil 
    p.mt-5 En otras palabras, los empaques y embalajes se deben elaborar teniendo en cuenta la manipulación que se le vaya a dar tanto en el transporte como en el manejo, son muy usados en los productos de exportación, los más usados son madera, cartón, plástico, vidrio y metal, ya que son resistentes por la composición mecánica, física y química del producto.
    p.mt-4 Vea los materiales más comunes en la elaboración de empaques o embalajes, sus ventajas y desventajas:
    .tarjeta.bg-azul-claro.p-5.mt-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- text-small se usa para que los títulos sean mas pequeños
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1").zoom-in
          .col-7.mt-4
            .h4 Empaques de papel
            p.mt-5 Son utilizados para envolver por dentro o por fuera otros empaques como bolsas o cajas, se usan también las cajas plegadizas de cartón, ya que estas pueden adoptar diversas formas, dado que se componen de varias capas.
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Reciclable.
              li.mt-2
                i.fa-brain
                | Permite la impresión en la superficie y de alta calidad.
              li.mt-2
                i.fa-brain
                | Fácil cortado, trazado, plegado.
              li.mt-2
                i.fa-brain
                | Fácil de pegar con cualquier tipo de adhesivo.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Son materiales altamente higroscópicos (capacidad de algunas sustancias o materiales). 
              li.mt-2
                i.fa-brain
                | No tiene propiedades de barrera contra líquidos, aceites y gases.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-49.png", alt="Texto que describa la imagen").w-75.margin-0-auto


        .row(titulo="2").zoom-in
          .col-7.mt-4
            .h4 Empaques de cartón corrugado
            p.mt-5 Este tipo de empaque es usado para el transporte y protección de producto, es utilizado para empacar preferiblemente artesanías, maquinaria, electrodomésticos, calzado y alimentos.
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Ligereza y flexibilidad.
              li.mt-2
                i.fa-brain
                | Versatilidad (forma y dimensiones).
              li.mt-2
                i.fa-brain
                | Amplia gama de resistencias mecánicas.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Permeabilidad a los gases.
              li.mt-2
                i.fa-brain
                | Problemas de termo estabilidad. Empaques metálicos.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-50.png", alt="Texto que describa la imagen").w-75.margin-0-auto


        .row(titulo="3").zoom-in
          .col-7.mt-4
            p Los dos principales materiales utilizados para la fabricación de empaques son el acero y el aluminio.
            .h4.mt-5  Los alimentos enlatados se empacan en acero y las bebidas con gas se empacan en aluminio.
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Resistencia mecánica.
              li.mt-2
                i.fa-brain
                | Ligereza.
              li.mt-2
                i.fa-brain
                | Protección de luz y radiación.
              li.mt-2
                i.fa-brain
                | Conductividad térmica.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Solo se producen empaques estandarizados y normalizados.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-51.png", alt="Texto que describa la imagen").w-75.margin-0-auto
        .row(titulo="4").zoom-in
          .col-7.mt-4
            .h4 Empaques de vidrio
            p.mt-5 El envase de vidrio tiene la característica de ser muy fuerte, el inconveniente con este empaque es que tiene poca resistencia al impacto, una de sus mejores características es que protege de la contaminación, los más usados son los frascos y botellas, su principal uso se da en salsas, compotas, bebidas, cosméticos y medicamentos.
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Incoloro e insaboro.
              li.mt-2
                i.fa-brain
                | Gran resistencia a la presión interna y altas temperaturas sin perder propiedades.
              li.mt-2
                i.fa-brain
                | Degradación física y química lenta.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Fragilidad.
              li.mt-2
                i.fa-brain
                | Ocupan volumen cuando están vacíos.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-52.png", alt="Texto que describa la imagen").w-75.margin-0-auto
        .row(titulo="5").zoom-in
          .col-7.mt-4
            .h4 Empaques de madera
            p.mt-5 Entre los empaques que existen está la madera, este es un producto natural, entre sus características está que es duro, moldeable y flexible, su mayor uso se da en los embalajes de productos de exportación, ya que requieren de una protección especial principalmente las partes para vehículos y la maquinaria pesada.
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Material abundante.
              li.mt-2
                i.fa-brain
                | Robustez.
              li.mt-2
                i.fa-brain
                | Su fabricación es fácil y no requiere equipos especiales.
              li.mt-2
                i.fa-brain
                | Son reutilizables.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Es más costoso.
              li.mt-2
                i.fa-brain
                | Exige mayor trabajo y espacio de almacenamiento.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-53.png", alt="Texto que describa la imagen").w-75.margin-0-auto
        .row(titulo="6").zoom-in
          .col-7.mt-4
            .h4 Empaques con material textil
            p.mt-5 Los empaques hechos con textiles especialmente se usan para elaborar bolsas y sacos, estos contienen fibras vegetales como el cáñamo, algodón, fique, yute y sisal, se utilizan especialmente para almacenar productos a granel. 
            .h5.ml-4.mt-5 Ventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Bajo costo.
              li.mt-2
                i.fa-brain
                | Abundancia de materia prima.
            .h5.ml-4.mt-5 Desventajas
            ul.lista-ul.mt-4
              li 
                i.fa-brain
                | Son sometidos a estrictos controles fitosanitarios.
              li.mt-2
                i.fa-brain
                | Poca adaptabilidad a equipos de manipulación.
              
          .col-5.mt-4.align-self-center
            figure
              img(src="@/assets/template/tema-3-54.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    p.mt-5 A continuación, en la siguiente tabla, verá un resumen de la información abordada previamente sobre los materiales de los empaques y embalajes, con algunos ejemplos de estos:
    .titulo-sexto.color-acento-contenido.mt-5
      p.text-small Tabla 1 Materiales de empaques y embalajes
    .tabla-a.color-acento-contenido.mt-5(data-aos="zoom-in-up")
      table
        thead.bg-morado-oscuro
          tr.text-white
            th Materiales
            th Tipo
            th Ejemplo
            th Ventajas
            th Desventajas
        tbody
          tr.bg-gris-claro
            td.py-4.pl-4 #[strong Metales]
            td.text-small.pl-4 Láminas de aluminio y acero, recubiertas de estaño.
            td.text-small.pl-4 Contenedores, recipientes bajo presión, cajas metálicas.
            td.text-small.pl-4 Solidez, fácil estibado, reutilizables.
            td.text-small.pl-4 Costo elevado, corrosión, pesado y voluminoso.
          tr
            td.py-4.pl-4 #[strong Madera]
            td.text-small.pl-4 Madera en bruto, cepillada, aglomerada.
            td.text-small.pl-4 Cajas, pallets, canastas.
            td.text-small.pl-4 Fácil de manipular y estibar.
            td.text-small.pl-4 Altos costos, sensible al sol y humedad, fácil descomposición, contaminable, sensible a plagas, inflamable y pesado.
          tr.bg-gris-claro
            td.py-4.pl-4 #[strong Cartón]
            td.text-small.pl-4 Plano, ondulado o corrugado.
            td.text-small.pl-4 Cajas de cartón.
            td.text-small.pl-4 Económico, reciclable, de fácil manipulación.
            td.text-small.pl-4 Muy frágil, sensible a la humedad y al calor, poco sólido, no reutilizable.
          tr
            td.py-4.pl-4 #[strong Plástico]
            td.text-small.pl-4 Polietileno, poliestireno (PVC).
            td.text-small.pl-4 Bolas, toneles, bidones, cajas, contenedores.
            td.text-small.pl-4 Impermeabilidad, gran diversidad, reutilizable.
            td.text-small.pl-4 Inflamable, costoso, difícil eliminación.
          tr.bg-gris-claro
            td.py-4.pl-4 #[strong Papel]
            td.text-small.pl-4 
            td.text-small.pl-4 Bolsas
            td.text-small.pl-4 Bajos costos, fácil eliminación.
            td.text-small.pl-4 Muy frágil, sensible a la humedad y al calor.
          tr
            td.py-4.pl-4 #[strong Vidrio]
            td.text-small.pl-4 
            td.text-small.pl-4 Botellas, frascos y botellones.
            td.text-small.pl-4 Visibilidad del contenido, fácil estibado, reciclable.
            td.text-small.pl-4 Frágil a los golpes, pesado y voluminoso.

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
