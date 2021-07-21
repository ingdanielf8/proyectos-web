<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Diagramación de la arquitectura de información 
    figure
      img(src="@/assets/template/tema-7-1.png", alt="Texto")
    .row.mt-5
      .col-12.col-lg-8.align-self-center
        p La diagramación o maquetación es el proceso mediante el cual se organizan textos, imágenes, en algunos casos medios audiovisuales, entre otros, dentro de un espacio determinado. Estos elementos pueden ser organizados para productos impresos o electrónicos, como libros, revistas, diarios, entre otros.  
        p.mt-4 En este paso es de importancia utilizar los flujogramas que ayudan a maquetar la representación de la estructura, partes, funcionamiento y comportamiento en general, del sitio a desarrollar, perfilado por una línea de diseño, basado en la organización y la estructuración visual de sus componentes.
      .col-6.col-lg-4.offset-3.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-7-2.svg", alt="Texto")
    .titulo-segundo.mt-5
      #t_7_1.h4 7.1  Diseño, guion y storyboard     
    .row.mt-5
      .col-12.col-lg-8.align-self-center
        p El diseño en herramientas digitales se basa en los pilares de la comunicación visual y el uso de herramientas de medios digitales. Se identifica como un elemento editorial de carácter creativo, el cual  no solo busca generar material de lectura, sino también incluir objetos visuales que facilitan y dinamizan la consulta de la información, a fin de comunicar y transmitir un mensaje claro y específico; para esto, se deben tener en cuenta los siguientes factores que ayudan a simplificar y tener éxito en una publicación de carácter digital, a nivel comercial, y  ajustándose a las tendencias influenciadas por el diseño y la tecnología:
      .col-6.col-lg-4.offset-3.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-7-3.png", alt="Texto")
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-4.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 a.	Tipografía
            p El texto se convierte en un recurso muy importante en entornos digitales, debe ser adaptativo y su imagen debe comunicar el contenido de la publicación, la estética del sitio.  Es importante crear contenidos con tipografías que sean claras, fáciles de leer y conseguir en la red, para que el consumidor no tenga dificultades.
            p.mt-4 Es de vital importancia mantener un buen tamaño que sea legible, la combinación de tipografías que sea acorde al diseño que se está trabajando sin exceder tantos tipos o familias diferentes, que pueden generar confusión y desorden, se recomienda tener muy en cuenta la combinación de colores. 
            p.mt-4 Opciones muy utilizadas son por ejemplo la tipografía Helvética, Calibri, Verona, procurar nunca utilizar fuentes como, Cómic o Bromo. 
            p.mt-4 Considerar también los fondos sobre los cuales se van a situar los textos, ya que pueden dificultar la lectura y legibilidad.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-5.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 b.	Color
            p El color es uno de los elementos principales de cualquier tipo de diseño, ya que transmite, atrae y crea sensaciones en el espectador, para generar un buen impacto visual. El color puede ayudar a generar mayores ventas, ya que su impacto genera expectativa e interés. La psicología del color en este tipo de piezas es fundamental en el desarrollo de las mismas.  
            p.mt-4  Para escoger correctamente la paleta de colores, se debe revisar la información condensada en el brief y utilizar los colores propuestos en el proyecto. La elección del color se puede realizar con base a las leyes compositivas y combinación de los mismos.
            p.mt-4 El círculo cromático es una herramienta valiosa para realizar buenas elecciones de combinación y uso del color.
    p.mt-5 A continuación, se presenta la clasificación de los colores.
    SlyderB.mb-5(:datos="datosSlyder")
    p.mt-5 En la elección del color se debe tener en cuenta también la llamada psicología del color, que permite por medio de bases científicas, relacionar el color con sensaciones, sentimientos y emociones que generan en el individuo. 
    .row.mt-5
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-10.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 c.	Imágenes
            p En diseño de publicaciones digitales que se distribuyen en la web, es de vital importancia el buen manejo y uso de las imágenes, en cuanto a su calidad y resolución. 
            p.mt-4 El uso de formatos adecuados, una excelente resolución y calidad son de vital importancia, ya que con los avances y mejoras en HTML5 y CSS3 y su compatibilidad con diversos navegadores, permiten una mejor calidad y usabilidad de los componentes.
            p.mt-4 La propuesta gráfica y los recursos deben mantener siempre el mismo estilo, de igual manera asegurar que la armonía entre contenido e imagen, correspondan con el producto editorial.   Las imágenes pueden ser de carácter propio, de galerías pagas, por las cuales se realiza un pago para su uso, o bancos de imágenes gratis autorizados.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-11.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 d.	Animaciones y videos
            p Las animaciones, videos y demás elementos visuales con movimiento, hacen mucho más atractivo cualquier sitio web; sin embargo, representan algo de peso extra por sus características generales, se recomienda que no sobrepasen un 30 % ya que pueden causar saturación y lentitud.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-12.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 e.	Botones e íconos
            p El uso de botones e íconos que sean visibles y atractivos, aumentan la facilidad y rapidez de conexión entre los elementos. 
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-13.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 f.	Retícula para diseño web
            p La retícula es un elemento esencial en el diseño que no se ve a simple vista; es la estructura principal sobre la cual se diseña. Esta cuadrícula, invisible al espectador, permite realizar la distribución y diagramación de los elementos compositivos de cualquier diseño; es la base de la maquetación con la cual se logra obtener una estética armónica, correcta y ordenada.  El diseño Web posibilita plasmar la versión interactiva y navegable de la publicación, ajustándose a la realidad.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-14.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 g.	Columnas
            p En web, por lo general, se utilizan retículas basadas en columnas por la estructura y manejo de la información y espacios. Los bloques de columnas más utilizados son en múltiplos de 3, hasta 12 columnas. 
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-15.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 h.	Padding
            p El padding es el espacio entre el borde de una columna y su contenido.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-16.png", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 i.	Gutter Width
            p Espacio entre columnas.
    .row.mt-4
      .col-10.offset-1.borde-gris.rounded
        .row.py-4.px-2
          .col-3.d-none.d-lg-block.pt-4
            figure
              img(src="@/assets/template/tema-7-17.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            .h4.mb-4 j.	Retícula responsive
            p El uso de nuevas tecnologías y sus diversos formatos, hacen que los elementos estéticos y de diseño se tengan que adaptar a su entorno y funcionalidad; esta retícula se adapta para conseguir una regularidad en las páginas web, aunque sean abiertas en diferentes dispositivos, con unas dimensiones de pantalla distintas, que exigen un cambio estructural del diseño. A este cambio se le conoce como breakpoint (punto de ruptura).  
    .h4.mt-5 Comparación entre UX - UI
    .row.mt-4
      .col-12.col-lg-9.align-self-center
        p El guion literario es una herramienta secuencial en el desarrollo de productos multimedia, está enmarcada en el diseño mismo de aplicabilidad, en la creación y concepto del producto.  Se necesita un guion literario para describir paso a paso el contenido total de un proyecto, que exprese en forma detallada lo que se quiere transmitir; es decir, el mensaje, por lo que es preciso investigar y preparar la historia. Describe las diversas situaciones, los diálogos y las acciones en la historia a contar. Este guion podrá ser de ficción o realidad; en esta última clasificación, se encuentran los guiones informativos, los de formación y de opinión, los cuales sirven para evitar incongruencias, nerviosismo, titubeos, coletillas, etc.; enfocándose en el tema y logrando precisión en el desarrollo de la historia. 
      .col-6.offset-3.col-lg-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-7-18.svg"  alt="Texto").w-75
    .h4.mt-5 Storyboard
    figure.mt-4
      img(src="@/assets/template/tema-7-19.png" alt="Texto")
    p.mt-5 El storyboard o guion gráfico son una serie de viñetas con diferentes ilustraciones o dibujos, que muestran el orden secuencial para entender las acciones requeridas en el desarrollo de una historia, de acuerdo con una narración previa, descrita con antelación. 
    p.mt-4 Dentro del storyboard se puede encontrar el número de escenas, secuencia a desarrollar, diálogo o narración requerida en cada momento específico; es de gran importancia para llevar a cabo el orden sucesivo de las escenas. En las viñetas (cuadros que tiene un storyboard) se incluye información relevante de cada una de las escenas, diálogos y elementos que se consideren importantes dentro de cada momento.  
    p.mt-4 Para desarrollar el storyboard se debe tener en cuenta:
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="1").px-4
        .col-3.d-none.d-lg-block
          figure
            img(src="@/assets/template/tema-7-20.svg", alt="Texto")
        .col-12.col-lg-9.px-5.align-self-center
          p Elaborar la línea temporal correspondiente a la historia que se va a generar, es muy importante antes de realizar el storyboard, tener una idea clara y concisa de todos los acontecimientos y el desarrollo mismo de la historia; de esta manera no se generan errores. 
      div(titulo="2")
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-7-21.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            p Una vez claras las ideas y el progreso de las mismas dentro de la historia, dibujar una viñeta que representa la línea temporal, generalmente con un espacio en la parte inferior, para toma de notas o apuntes importantes dentro de la escena.
      div(titulo="3")
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-7-22.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            p El storyboard es una guía visual para el equipo de trabajo; no es necesario que cuente con un alto nivel en la ilustración, pero sí que sea muy claro, conciso y secuencial de acuerdo con el orden estipulado.
      div(titulo="4")
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-7-23.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            p El storyboard puede ser plasmado en papel o multimedia, debe ser preciso y concreto ya que el equipo de trabajo depende de su buen uso y desarrollo.
      div(titulo="5")
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-7-24.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            p El storyboard es susceptible a cambios y modificaciones en el tiempo, por lo que, es más práctico realizar un boceto y posteriormente una versión final, cuando se tenga claridad de todo el proyecto.
      div(titulo="6")
        .row
          .col-3.d-none.d-lg-block
            figure
              img(src="@/assets/template/tema-7-25.svg", alt="Texto")
          .col-12.col-lg-9.px-5.align-self-center
            p Debajo de cada viñeta deben ir las notas relevantes alusivas a cada momento, esto ayudará a los participantes a llevar el hilo conductor de la historia. 
    p.mt-4 El storyboard sirve principalmente para realizar un spot, guion de cine, anuncio o comercial.   
    .titulo-segundo.mt-5
      #t_7_2.h4 7.2  Pruebas     
    figure.mt-4
      img(src="@/assets/template/tema-7-26.png", alt="Texto")
    p.mt-5 Las pruebas de usabilidad de un sitio web hacen referencia a la facilidad con la cual los usuarios pueden utilizar y manejar los diferentes componentes y herramientas de uso.
    .h4.mt-4 Ventajas que presenta la usabilidad:
    .row.mt-4
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Mejora la experiencia de uso del usuario.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Hay una mayor comunicación y retroalimentación con el cliente. 
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Aumenta los tiempos de visita a un sitio.
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Reduce el porcentaje de rebote de la página. 
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Familiariza al usuario con el sitio y su manejo. 
          li.mb-0.d-block
            .row
              .col-1.text-align-right.p-0
                i.fas.fa-angle-right.color-c.text-center
              .col-11
                p.mb-2 Aumenta las visitas e ingresos percibidos. 
    .h4.mt-5 Pasos para determinar la usabilidad de un sitio:
    .row.mt-4
      .col-10.offset-1
        .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.d-none.d-lg-block.px-4
              figure
                img(src="@/assets/template/tema-7-27.svg", alt="Texto que describa la imagen")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .h5 Paso 1. Determinar métricas y crear análisis de tareas 
                p Se delimitan las pruebas mediante el uso de métricas que midan los factores en pro y en contra referentes a la usabilidad, eficacia y eficiencia de los componentes de un proyecto.  Aquí hay medición de objetivos dirigidos al usuario, manejo de ruta y análisis de tareas de los componentes entre otras.  Se construye un flujograma de tareas, con tiempos y acciones a trabajar. 
    .h5.mt-4 Paso 2. Identificar el mejor tipo de prueba
    p.mt-5 Existen variadas formas en cuanto a las pruebas de usabilidad; la utilización de determinada forma de prueba depende del sitio web en cuanto a las métricas y a las tareas definidas en la primera etapa. Hay tres tipos de pruebas de usabilidad que son los más utilizadas:
    .row.mt-5.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op40.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-7-28.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .row.mb-5
                .col-sm.mb-5.mb-sm-0
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a
                      p Clasificación de tarjetas o el llamado Card sorting, es la prueba más fácil y rápida. Esta técnica se basa en la experiencia del usuario digital para calificar la taxonomía del producto digital. En un punto anterior, se realizó una descripción más amplia de esta técnica
    .row.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op25.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-7-29.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center 
              .row.mb-5
                .col-sm.mb-5.mb-sm-0
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span b
                      p Estudio de campo o investigación contextual, las pruebas de usabilidad necesitan más tiempo que la clasificación de tarjetas y consiste en ir directamente al contexto real de sus usuarios; es decir, donde ellos probablemente usen su sitio web y mediante una entrevista no tan formal, se les pide que indiquen cómo realizan el proceso mientras interactúan con la pantalla. Hay retroalimentación directa del usuario lo cual es una gran ventaja; aunque en ocasiones el estudio de campo puede hacerse virtualmente, al aparecer resta espontaneidad al usuario.
    .row.mb-3 
      .col-10.offset-1
        .cajon.color-secundario.bg-secundario-op10.px-5.py-4.mb-4
          .row
            .col-lg-3.d-none.d-lg-block.align-self-center
              figure.mb-5
                img(src="@/assets/template/tema-7-30.png", alt="Texto que describa la imagen")
            .col-12.col-lg-8.align-self-center
              .row.mb-5
                .col-sm.mb-5.mb-sm-0
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span c
                      p El rastreo ocular, es una técnica que sirve para determinar dónde está mirando un usuario, la página que elige, en qué orden se desplaza y el tiempo durante el cual mira. Se puede determinar dónde y cuándo se conectan los usuarios digitales de su sitio web.  Entre más intenso y fuerte el color del mapa, es mayor el tiempo que el usuario mira ese sector de la pantalla. Por medio de este proceso es más fácil entender la usabilidad y eficacia del sitio web, es decir, el nivel de consecución de nuestras metas y objetivos de la página web. Con base en el rastreo ocular, los investigadores y especialistas en marketing han podido determinar que la mayoría de las personas utilizan el patrón de la Z y de la F al mover sus ojos y recorrer la pantalla.
    .titulo-segundo.mt-5
      #t_7_3.h4 7.3  Validación de prototipo     
    .row.mt-5
      .col-12.col-lg-9.align-self-center
        p Un prototipo se conoce como un diseño de prueba y puede tomar la forma de un producto o modelo de negocio el cual se diseña y construye con el objeto de validar las ideas de manera fácil, rentable y efectiva, para verificar la viabilidad de producción o comercialización; lo cual permite corregir defectos antes de generar un producto final. En los procesos de innovación, la construcción de un prototipo se convierte en una pieza fundamental para lograr medir y minimizar los riesgos.
        p.mt-4 La validación se define como el proceso que determina la precisión con la cual el modelo computacional representa el modelo físico del mundo real. Existen diferentes tipos de prototipos los cuales se pueden evaluar de acuerdo con su estado de desarrollo. Por ejemplo, existen prototipos denominados de inspiración, los cuales constituyen el primer bosquejo de desarrollo de una idea.
        p.mt-4 También existen prototipos de evolución, este tipo de prototipos se derivan de los mejores prototipos de inspiración y se caracterizan por que requieren una mayor cantidad de tiempo y recursos para su fabricación debido a que se requiere un estado de avance que permita demostrar sus funcionalidades y ventajas de cara a las necesidades del cliente.
      .col-6.col-lg-3.offset-3.offset-3.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-7-31.svg", alt="Texto")
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-7-32.png", alt="Texto")
    .row.mt-5
      .col-12.col-lg-6
        p Una prueba de concepto permite la validación de los prototipos, cuando estos son sometidos a condiciones reales de operación. El objetivo de esta prueba es valorar el concepto de un resultado de investigación que puede dar origen a un producto, proceso o servicio nuevo o significativamente mejorado, antes de comenzar su desarrollo a nivel industrial y, por ende, su posterior incursión en el mercado.  
        p.mt-4 El desarrollo de una prueba de concepto permite evaluar la utilidad, viabilidad y sostenibilidad de conocimientos e invenciones susceptibles de transferencia y capaces de impactar el desarrollo productivo. Permite reducir la incertidumbre y los riesgos asociados a la transferencia de conocimientos y de tecnologías, determinando el estado de desarrollo de los resultados de investigación y lo que estos deben superar para que estén listos desde la visión del mercado y las necesidades de la sociedad.  (Sarraipa et al., 2019).
      .col-6.offset-3.offset-lg-0.align-self-center
        img(src="@/assets/template/tema-7-33.png", alt="Texto")



</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Colores primarios: ',
        texto: 'Se refiere a los colores: rojo, amarillo y azul. ',
        imagen: require('@/assets/template/tema-7-6.png'),
      },
      {
        titulo: 'Colores secundarios: ',
        texto:
          'Se obtiene a partir de mezclar en partes desiguales dos colores primarios. ',
        imagen: require('@/assets/template/tema-7-7.png'),
      },
      {
        titulo: 'Colores terciarios: ',
        texto:
          'Se obtiene a partir de mezclar un color primario con un color secundario.',
        imagen: require('@/assets/template/tema-7-8.png'),
      },
      {
        titulo: 'Colores complementarios:',
        texto:
          'Son aquellos colores que se encuentran en una posición opuesta dentro del círculo cromático (por ejemplo, rojo y verde).',
        imagen: require('@/assets/template/tema-7-9.png'),
      },
      {
        titulo: 'Colores análogos: ',
        texto:
          'Colores situados de forma continua en el circulo cromático, generalmente conforman grupos de 3 colores que comparten matices. ',
        imagen: require('@/assets/template/tema-7-10-1.png'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
