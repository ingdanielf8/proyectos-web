<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Montaje audiovisual
    figure.mt-4
      img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    p.mt-5 La composición gráfica se refiere a la organización o disposición de elementos dentro del espacio visual, con el objeto de construir una imagen que transmita una idea de manera sencilla y directa a un público objetivo. Esta premisa sigue teniendo la misma validez para cuando se trata de la creación y/o edición de imágenes fijas, pero tiene una definición distinta cuando se trata de imágenes en movimiento. 
    .row.mt-5
      .col-4.col-lg-5.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-7
        p Es común hablar de edición y montaje como el mismo proceso técnico, ya que la palabra montaje, del francés montage, hace referencia a montar, poner encima; pero para los teóricos del lenguaje audiovisual, el montaje tiene que ver con un proceso narrativo, mientras que la edición contempla un proceso de tipo técnico. De esta manera, lo que se refiere a la composición de mensajes o significados a través de elementos audiovisuales se conoce como montaje audiovisual, que es el paso técnico y narrativo último del producto audiovisual, aunque viene definido previamente en la elaboración del guion.
        p.mt-3 En todo caso, para desarrollar los temas necesarios en este apartado, se deben considerar las dos definiciones, porque como es sabido, en lo que respecta al tratamiento de imágenes fijas, lo común es hablar de “edición de imágenes”, mientras que montaje fotográfico o fotomontaje se refiere a un producto de la edición. 
    p.mt-4 Por consiguiente, a continuación, se hace un acercamiento frente a las definiciones: 
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Definición montaje" :icono="require('@/assets/template/tema-1-3.svg')")        
        .row
          .col-12.col-lg-8
            .h4 Definición montaje
            p Este término se define como un conjunto de relaciones espacio-temporales, creadas mediante la combinación y duración de los fragmentos, que permiten articular un mensaje audiovisual con fluidez, timo, coherencia y expresión propia, que atiende a las intenciones del emisor y las capacidades y expectativas del receptor.
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-5.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
      .py-4.py-md-5(titulo="Definición edición" :icono="require('@/assets/template/tema-1-4.svg')")
        .row
          .col-12.col-lg-8
            .h4 Definición edición
            p Hace referencia a la posibilidad de manipular la imagen capturada o creada y mejorarla, adaptarla o dotarla   según las necesidades requeridas.
          .col-4.offset-4.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-6.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Edición de imagen
    .row.mt-5
      .col-12.col-lg-7
        p Cuando se habla de edición digital se involucran en el proceso una imagen, un terminal computarizado (equipo de escritorio, portátil, tablet, celular, dispositivo móvil) y un software especializado para tal fin.
        p.mt-3 Antes de entrar de lleno en el proceso de edición de la imagen, es necesario hablar de la imagen en sí misma y dejar claras sus características y los tipos de imagen digital, ya que de esta clasificación dependerá su tratamiento: 
      .col-6.col-lg-5.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
    .h4.mt-4 La imagen digital
    figure.mt-5
      img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
    p.mt-5 Según la #[strong (Real Academia Española, s. f.)] una imagen es toda forma o figura percibida por el sentido de la vista. 
    p.mt-4 Se define que como una #[strong imagen digital o gráfico digital ], la cual es representada de manera bidimensional , a partir de una imagen de una matriz numérica, frecuentemente en binario unos y ceros; esta se almacena en una memoria informática para luego ser interpretada por un sistema informático y que se transforma en una imagen visible a través de la pantalla e imprimible a través de cualquier dispositivo de salida.
    .h4.mt-5 Tipos de imágenes digitales
    p.mt-5 Por su estructura, estas pueden ser de dos tipos:
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr.text-center
            th.py-3 Imágenes en mapa de bits 
            th Imágenes en mapa de bits 
        tbody
          tr
            td.p-0.position-relative 
              figure
                img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-9.svg", alt="Texto que describa la imagen")
            td.p-0.position-relative
              figure
                img(src="@/assets/template/tema-1-11.png", alt="Texto que describa la imagen")
              figure.image-cover
                img(src="@/assets/template/tema-1-12.svg", alt="Texto que describa la imagen")
          tr.text-small
            td.p-4 
              p son las captadas del mundo real a través de dispositivos digitales; según #[strong Ordóñez (2005):]
              p.mt-4 Es una #[strong estructura de datos que representa una rejilla rectangular de pixeles o puntos de color]  conocida como raster, la cual puede visualizarse en un monitor de computadora, papel u otros dispositivos de representación. Este tipo de imágenes se obtiene de medios como el escáner o las cámaras digitales; su representación en pantalla es a través de la unidad mínima denominada pixel, que proviene del inglés picture element. Un pixel es la menor unidad en que se descompone una imagen digital, ya sea una fotografía, fotograma de video o gráfico. Un pixel es un concepto inmaterial que no tiene una medida concreta.
            td.p-4 
              p son las creadas desde su inicio a través de un software que, mediante cálculos matemáticos y coordenadas sobre los ejes “X” y “Y” en la pantalla, describen posiciones de puntos trazados líneas curvas o rectas que se generan como objetos independientes, por lo que después se pueden modificar fácilmente sin que por ello los demás componentes del dibujo se vean modificados. En los mapas de bits lo que ocurre es que, al incluir un elemento en la imagen, éste queda automáticamente incrustado y no puede volver a editarse de manera independiente. Las vectoriales no necesitan mucho espacio de almacenamiento y son independientes de la resolución, ya que no dependen de una retícula determinada. 
              p.mt-3 Pese a que presentan características distintas, cada día es más común que ambos tipos de imágenes se vinculen a través de programas de tratamiento de imágenes.  
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-acento-contenido-invertido.p-4.p-md-3.mt-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h4 Elementos de la imagen digital
                p.mb-0 Una vez definidos los tipos de imagen digital, a continuación se presentan algunos elementos propios del universo de la imagen digital, que ayudan a la comprensión de su construcción y posterior edición.   
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-13.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .h4.mt-5 Formatos
    p.mt-5 Se refieren a la forma codificada que adquieren las imágenes al ser almacenadas en un dispositivo. En realidad se trata de cómo se almacenan digitalmente los píxeles que componen las imágenes digitales de mapa de bits o vectores. Cada formato cuenta con su propia metodología para almacenar información de la imagen digital y cada uno tiene fortalezas, pero también desventajas. El formato depende de las características, la calidad y el uso final del nuevo archivo.
    .row.mt-5
      .col-10.offset-1
        SlyderA.bg-amarillo-claro.rounded-20
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-14.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong BMP:] desarrollado para sistemas operativos Microsoft como formato de almacenamiento para mapas de bits con una profundidad de color de hasta 24 bits por píxel. Los archivos en este formato son relativamente grandes, por lo que no es adecuado para ser usado en páginas web.

          div.row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-15.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong  TIFF:] formato que se utiliza para la transmisión de datos impresos y de imágenes de alta resolución; soporta el modelo de color CMYK y permite una profundidad de color de hasta 16 bits. Es el formato estándar cuando la calidad prima sobre el tamaño de los archivos. Es empleado por las editoriales y los medios impresos.
            
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-16.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong  JPEG:] sistema de compresión con pérdida, utilizado para lograr que las imágenes digitales que se utilizan sean lo más pequeñas posible y se carguen rápidamente en el documento.
              
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-17.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong GIF:] es el formato preferido en Internet gracias a su posibilidad de animar imágenes. Los archivos GIF utilizan mapas de bits y admiten hasta 8 bits/píxel, permitiendo 256 colores en la gama RGB.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-18.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong PSD:] del inglés “Photoshop Document”, es un formato nativo de proyectos gráficos desarrollados con Photoshop. Guarda la información relacionada con las capas, los canales, la historia, lo que permite la posterior edición de los mismos. Las imágenes en formato PSD solo pueden abrirse y editarse con Adobe Photoshop. Las imágenes resultantes son de tipo pixel.
          .row
            .col-2.col-xl-1.offset-1.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-19.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong RAW:] solo se encuentra disponible en cámaras digitales sofisticadas, indicadas para fotógrafos profesionales. Este formato ofrece la máxima calidad ya que contiene los píxeles en bruto tal y como se han adquirido, generando un archivo que contiene la totalidad de los datos de la imagen, por lo que comúnmente se lo conoce como negativo digital. Los datos del archivo RAW generan un tipo de compresión sin pérdida de información, por lo que comúnmente suele decirse que no comprimen.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-20.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong PDF:] del inglés Portable Document Format. Es un tipo de archivo universal, que funciona independientemente del software, del sistema operativo, de la resolución, de la versión, entre otros; usados para la creación del archivo original. Este formato permite el almacenamiento de archivos bitmap, vector, texto, adicionalmente soporta archivos que pueden tener diversas páginas.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-21.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong PNG:] este formato se destaca porque permite comprimir imágenes sin pérdidas de calidad.  Además, ofrece la posibilidad de almacenar y publicar imágenes y gráficos respetando las transparencias.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-22.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong EPS:] del inglés Encapsulated PostScript, es un formato estandarizado que permite importar y exportar archivos de texto e imágenes, es compatible con todos los sistemas operativos. Se usa básicamente en el ámbito editorial.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-23.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong AI:] es la extensión nativa de los archivos generados desde Adobe Illustrator, que se clasifican como archivos de imágenes vectoriales. Las imágenes vectoriales son las más indicadas para usar en páginas web por el peso final de ellas. Una ventaja de la imagen vectorial es que se pueden escalar sin que pierdan calidad, al tiempo que requiere menos espacio de almacenamiento.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-24.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong SVG:] del inglés Scalable Vector Graphics. Al igual que el formato Ai, el SVG es una extensión de gráficos vectoriales bidimensionales, tanto estáticos como animados. Es un formato poco conocido pero muy útil para ser utilizarlo en entornos digitales. Su ventaja radica en que es un formato abierto y estándar.
          .row
            .col-2.col-xl-1.offset-1.px-2.px-2.align-self-center
              figure
                img(src="@/assets/template/tema-1-25.png", alt="Texto que describa la imagen")
            .col-10.col-xl-9.px-5
              p #[strong CDR:] es la extensión nativa de los archivos generados desde Corel Draw. Al igual que los archivos Ai, las imágenes resultantes de Corel se clasifican como archivos de imágenes vectoriales. Se puede decir que Corel Draw es la competencia directa de Illustrator.
      .col-10.offset-1.mt-5
        .tarjeta.bg-rojo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.ml-5
              img(src="@/assets/template/tema-1-26.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 “Formatos de imagen digital”
                  p Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página:  
                .col-sm-auto
                  a.boton.bg-verde(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download       
      .col-10.offset-1
        .tarjeta.bg-amarillo-deg.p-3.mb-5.py-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.ml-5
              img(src="@/assets/template/tema-1-27.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 “Formatos de imagen digital”
                  p Estimado aprendiz, para profundizar sobre el tema puede consultar la siguiente página:  
                .col-sm-auto
                  a.boton.color-acento-contenido.text-white(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Enlace web
                    i.fas.fa-link 
    .h4.mt-5 Formatos
    .row.mt-5
      .col-12.col-lg-7
        p Desde una visión general, según #[strong Fernández (2015):]
        p.mt-3 La resolución se refiere a la capacidad de una tecnología o un mecanismo para reflejar los detalles de una imagen. A mayor resolución, mejor calidad de imagen, pero también más tamaño y peso. 
        p Si se divide una imagen en pocos píxeles, se podrá codificar con poca información, pero seguramente perderá mucho detalle, por lo que se dice que tiene poca resolución. Si se divide en muchas más partes, éstas llegarán a ser tan pequeñas que no se podrán  distinguir. La visión de la imagen será mucho mejor y más detallada, pero también mucho más costosa en bits al ser más grande y más pesada. 
      .col-6.col-lg-5
        figure
          img(src="@/assets/template/tema-1-28.png", alt="Texto que describa la imagen")
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mt-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/template/tema-1-29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        .h4.d-block.mb-0 Resolución de la imagen
        p.mb-0.d-block El tamaño y la frecuencia de los píxeles siempre son elección del diseñador, quien deberá tener en cuenta que el concepto de resolución hace referencia a tres tipos de tamaño:  en píxeles, el informático (pantalla) y el superficial. El tamaño en píxeles habla, como ya se ha dicho, de en cuántas filas y columnas se divide la imagen, o de cuál es el número total de píxeles. 
        p.mt-3.mb-0.d-block El tamaño informático se cuenta en unidades de información como bytes, kilobytes o megabytes, y depende del número de píxeles y de la cantidad de bytes que gastamos para definir cada píxel. Tamaño de salida es lo que ocupará la foto si se imprime; como los píxeles son información numérica, es el editor quien decide, cuántos píxeles quiere imprimir en cada centímetro o pulgada de papel.
    p.mt-4 En conclusión, tal y como lo expresa #[strong Fernández (2005):]
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-acento-contenido.p-4.mb-4
          .row
            .col-3.d-none.d-lg-block
              figure
                img(src="@/assets/template/tema-1-30.svg", alt="Texto que describa la imagen").px-4
            .col-12.col-lg-9.align-self-center
              p.m-0 #[strong “La resolución de una imagen digital se expresa multiplicando su anchura por la altura en píxeles. Por ejemplo la imagen de 1200 x 1200 píxeles = 1.440.000 píxeles, expresado en Mp (megapíxel) es igual a 1,4 Mp. Conviene tener en cuenta que 1 Megapíxeles = 1024 píxeles”.]
    .h4.mt-5 Modos de color
    p.mt-4 Además del formato y la resolución, otro elemento imprescindible en la imagen es el color. 
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido-invertido.p-4.p-md-3.mt-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 El color puede entenderse en términos técnicos como la profundidad de color en la imagen, es decir, la cantidad de bits de información necesarios para representar el color de un pixel en una imagen digital.  En términos generales se alude al concepto de modelo de color en la imagen, que describe los colores que pueden verse en las imágenes digitales e impresas. Se pueden diferenciar tres modelos de color para trabajar en multimedia: modelo RGB, modelo CMYK y modelo HSB.   
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-31.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-5
      .col-4
        figure
          img(src="@/assets/template/tema-1-32.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Color CMYK:] sse refiere a los colores Cian, Magenta, Yellow y Black, que son los colores que se usan en impresión.
      .col-4
        figure
          img(src="@/assets/template/tema-1-33.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Color RGB:]  Red, Green, Blue. Este es el espacio de color que usan los monitores para presentar este tipo de imagen tricromática.
      .col-4
        figure
          img(src="@/assets/template/tema-1-34.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Escala de grises:] este modo de color presenta una imagen monocromática que maneja un espacio de colores limitado a 256 porcentajes de negro.
    .row.mt-5
      .col-4
        figure
          img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Color Lab:] consiste en tres canales: un canal de luminosidad (L) y dos canales cromáticos, A (que oscila entre verde y rojo) y B (que oscila entre azul y amarillo). #[strong (M, 2014).]
      .col-4
        figure
          img(src="@/assets/template/tema-1-36.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Mapa de bits:] el modo Mapa de bits utiliza uno de los dos valores de color (blanco o negro) para representar los píxeles de una imagen. Las imágenes en modo Mapa de bits se denominan imágenes monocromáticas.
      .col-4
        figure
          img(src="@/assets/template/tema-1-37.png", alt="Texto que describa la imagen")
        p.mt-4 #[strong Color indexado:] en este modo el número de colores máximo es de 256. #[strong (M, 2014).]
    p.mt-5 Ya vistos los temas que conciernen a la imagen digital, es momento de pasar a la edición de la misma. Para iniciar, una breve definición:
    .h4.mt-5 Definición de edición de la imagen
    figure.mt-5
      img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen")
    p.mt-5 “Es la manipulación, a través de programas de edición gráfica, de imágenes capturadas o previamente diseñadas, con la intención de reforzar conceptos o mensajes mediante la modificación del color, formas, composición, contrastes, estilo, etcétera. La edición para hacer collages o mejorar la calidad de la imagen, es también un recurso de gran valor en publicidad; gracias a ello, se pueden exagerar o disminuir rasgos o elementos de todo tipo” (Viveros, 2005) El programa donde se hace el tratamiento es un editor de imágenes que ofrece opciones de edición, herramientas, efectos y modificación en el formato al guardar el archivo.
    .h4.mt-5 Definición de edición de la imagen
    p.mt-5 El tratamiento o edición de la imagen digital comprende aspectos creativos y herramientas técnicas, explicados a continuación:
    AcordionA.mb-5(tipo="b" clase-tarjeta="bg-verde-claro rounded-20")
      .row(titulo="Aspectos Creativos")
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-39.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          p El proceso de edición se refiere también a los aspectos conceptuales y creativos de los que se sirve quien realiza la edición. Lo conceptual determina las características semióticas de los productos, como el sentido-significación que se desea transmitir, la función que se espera realice, si acompaña a otros medios o tiene un rol principal, si es ilustrativa o descriptiva, etcétera. Asimismo, es deseable determinar el estilo que se desea manejar y se relaciona con el realismo o la figuración, entre otros aspectos (Viveros, 2005).
          p.mt-3 Estos aspectos fueron tratados ampliamente en el Componente Formativo “Diseño para contenidos digitales”, en el apartado de Diseño y se aplican de la misma manera para la creación, captura o edición de imágenes digitales. De esta manera, es necesario especificar la composición adaptada a entornos digitales y el retoque como aspecto propio de este mundo.
      div(titulo="Composición Digital").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-40.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          p También denominada composición de efectos visuales, tiene que ver con la creación de imágenes digitales a partir de manipular y combinar elementos de diferentes fuentes o herramientas digitales, con el fin de generar piezas homogéneas que transmitan la sensación de unidad en la imagen resultante, independiente de que sean reales o no. 
      div(titulo="Retoque Digital").row
        .col-4.offset-4.offset-lg-0
          figure
            img(src="@/assets/template/tema-1-41.png", alt="Texto que describa la imagen")
        .col-12.col-lg-8
          p Pese a ser un proceso técnico que involucra el conocimiento de las herramientas del software que se use, es también un proceso creativo, puesto que el retoque puede llevar implícito significados que se quieren compartir con el receptor.  El retoque da la opción de manipular imágenes o fotografías  y  permite alterar el escenario, la luz, el color y la percepción de forma variada e ingeniosa para construir  una nueva imagen.
    .h4.mt-5 Herramientas para la edición
    p.mt-5 Tienen que ver con los software de tratamiento de imagen. El mercado ofrece múltiples opciones y se clasifican entre los editores para computador, celulares y editores online. 
    .row.mt-5
      .col-4.borde-verde-1.py-5.w-31
        figure
          img(src="@/assets/template/tema-1-42.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-4.borde-verde-1.position-relative.w-31.mx-4
        figure(style="position:absolute; top:40%; left:2%;")
          img(src="@/assets/template/tema-1-43.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      .col-4.borde-verde-1.mx-0.position-relative.w-31
        figure(style="position:absolute; top:50%; left:2%;")
          img(src="@/assets/template/tema-1-44.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-0.text-center
      .col-4.borde-verde-1.borde-no-top.w-31
        p.mt-3 #[strong Nombre:Canva] 
      .col-4.borde-verde-1.borde-no-top.w-31.mx-4
        p.mt-3 #[strong Nombre:Crello] 
      .col-4.borde-verde-1.mx-0.borde-no-top.w-31
        p.mt-3 #[strong Nombre:Piktochart]
    
    .row.mt-5
      .col-4.borde-verde-1.py-5.w-31
        figure
          img(src="@/assets/template/tema-1-45.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-4.borde-verde-1.position-relative.w-31.mx-4
        figure(style="position:absolute; top:35%; left:2%;")
          img(src="@/assets/template/tema-1-46.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      .col-4.borde-verde-1.mx-0.position-relative.w-31
        figure(style="position:absolute; top:45%; left:2%;")
          img(src="@/assets/template/tema-1-47.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-0.text-center
      .col-4.borde-verde-1.borde-no-top.w-31
        p.mt-3 #[strong Nombre:Adobe Spark] 
      .col-4.borde-verde-1.borde-no-top.w-31.mx-4
        p.mt-3 #[strong Nombre:Befunky] 
      .col-4.borde-verde-1.mx-0.borde-no-top.w-31
        p.mt-3 #[strong Nombre:Crello]
    .h4.mt-5 Para computador
    p.mt-5 Suelen tener mayores funcionalidades, lo que se traduce en mejor desempeño, pero también ocupan espacio en el disco duro ya que son mucho más completos. Normalmente requieren conocimientos de la herramienta, incluso de diseño, así que se necesita conocimiento y experiencia en su manejo Algunos editores de fotos para computadora son Adobe Photoshop, Corel Draw, Paint.net, GIMP.
    .row.mt-5
      .col-3.borde-verde-1.py-5.w-23
        figure
          img(src="@/assets/template/tema-1-48.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.position-relative.w-23.mx-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-49.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-50.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23.ml-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-51.png", alt="Texto que describa la imagen").w-50.margin-0-auto
    .row.mt-0.text-center
      .col-3.borde-verde-1.borde-no-top.w-23
        p.mt-3 #[strong Nombre:Adobe Ilustrator] 
      .col-3.borde-verde-1.borde-no-top.w-23.mx-4
        p.mt-3 #[strong Nombre:Gravit Designer] 
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23
        p.mt-3 #[strong Nombre:VSCO]
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23.ml-4
        p.mt-3 #[strong Nombre:Adobe Indesign]
    .row.mt-5
      .col-3.borde-verde-1.py-5.w-23
        figure
          img(src="@/assets/template/tema-1-52.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.position-relative.w-23.mx-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-53.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-54.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23.ml-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-55.png", alt="Texto que describa la imagen").w-50.margin-0-auto
    .row.mt-0.text-center
      .col-3.borde-verde-1.borde-no-top.w-23
        p.mt-3 #[strong Nombre:Afterlight] 
      .col-3.borde-verde-1.borde-no-top.w-23.mx-4
        p.mt-3 #[strong Nombre:Adobe Photoshop] 
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23
        p.mt-3 #[strong Nombre:SVG-Edit]
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23.ml-4
        p.mt-3 #[strong Nombre:Snapseed]
    .row.mt-5
      .col-3.borde-verde-1.py-5.w-23
        figure
          img(src="@/assets/template/tema-1-56.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.position-relative.w-23.mx-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-57.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23
        figure(style="position:absolute; top:30%; left:2%;")
          img(src="@/assets/template/tema-1-58.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23.ml-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-59.png", alt="Texto que describa la imagen").w-50.margin-0-auto
    .row.mt-0.text-center
      .col-3.borde-verde-1.borde-no-top.w-23
        p.mt-3 #[strong Nombre:Vectr] 
      .col-3.borde-verde-1.borde-no-top.w-23.mx-4
        p.mt-3 #[strong Nombre:Inkscape] 
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23
        p.mt-3 #[strong Nombre:Gimp]
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23.ml-4
        p.mt-3 #[strong Nombre:Canva]
    .row.mt-5
      .col-3.borde-verde-1.py-5.w-23
        figure
          img(src="@/assets/template/tema-1-60.png", alt="Texto que describa la imagen").w-100.margin-0-auto
      .col-3.borde-verde-1.position-relative.w-23.mx-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-61.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-62.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-3.borde-verde-1.mx-0.position-relative.w-23.ml-4
        figure(style="position:absolute; top:22%; left:2%;")
          img(src="@/assets/template/tema-1-63.png", alt="Texto que describa la imagen").w-50.margin-0-auto
    .row.mt-0.text-center
      .col-3.borde-verde-1.borde-no-top.w-23
        p.mt-3 #[strong Nombre:PaintShop Pro 2019] 
      .col-3.borde-verde-1.borde-no-top.w-23.mx-4
        p.mt-3 #[strong Nombre:Lightroom] 
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23
        p.mt-3 #[strong Nombre:Pixlr Editor]
      .col-3.borde-verde-1.mx-0.borde-no-top.w-23.ml-4
        p.mt-3 #[strong Nombre:Corel Draw]
    .h4.mt-5 Para celulares
    p.mt-5 se crearon para sistemas operativos como Android e iOS; aunque también necesitan descargarse, sus funciones no necesitan mucho espacio de memoria. Esto los hace más limitados que un software de gran tamaño, pero con las ventajas de modificar una imagen en cualquier momento. Algunos de este tipo son: Photoshop Express, VSCO, Canva, entre otros.
    .row.mt-5
      .col-4.borde-verde-1.py-5.w-31
        figure
          img(src="@/assets/template/tema-1-42.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-4.borde-verde-1.position-relative.w-31.mx-4
        figure(style="position:absolute; top:17%; left:2%;")
          img(src="@/assets/template/tema-1-64.png", alt="Texto que describa la imagen").w-50.margin-0-auto
      .col-4.borde-verde-1.mx-0.position-relative.w-31
        figure(style="position:absolute; top:21%; left:2%;")
          img(src="@/assets/template/tema-1-65.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    .row.mt-0.text-center
      .col-4.borde-verde-1.borde-no-top.w-31
        p.mt-3 #[strong Nombre:Canva] 
      .col-4.borde-verde-1.borde-no-top.w-31.mx-4
        p.mt-3 #[strong Nombre:Adobe Photoshop] 
      .col-4.borde-verde-1.mx-0.borde-no-top.w-31
        p.mt-3 #[strong Nombre:VSCO]
    .h4.mt-5 Editores online
    p.mt-5 no necesitan descargarse en dispositivos y muchos de ellos tienen versiones gratuitas, con funciones limitadas y un poco de publicidad en sus interfaces. Algunos son Canva o Photoshop Express en esta clasificación, además de Photo Fancy y PicMonkey.
    .row.mt-5
      .col-4.borde-verde-1.py-5.w-31.offset-4
        figure
          img(src="@/assets/template/tema-1-66.png", alt="Texto que describa la imagen").w-50.margin-0-auto
    .row.mt-0.text-center
      .col-4.borde-verde-1.borde-no-top.w-31.offset-4
        p.mt-3 #[strong Nombre:PicMonkey] 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
