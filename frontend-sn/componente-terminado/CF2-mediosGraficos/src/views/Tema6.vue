<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Metodología en UX y UI
    figure.mb-5
      img(src="@/assets/template/tema-6-1.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.col-md-8.align-self-center
        p Las metodologías UX y UI nos muestran una serie de pasos a desarrollar en el proceso de diseño de productos digitales, basados principalmente en la experiencia de usuario.
        p.mt-4 UX son las siglas de User Experience, que traduce experiencia del usuario; mientras las siglas UI, vienen de User Interface o uso de interfaz, es decir, el conjunto de elementos en pantalla que le permiten al usuario interactuar con la web.
        p.mt-4 El siguiente gráfico muestra un paralelo entre la experiencia de usuario y la interfaz, en relación con sus componentes más sobresalientes, haciendo alusión a la parte lógica y emocional, de acuerdo con el hemisferio del cerebro que se observe: 
      .col-8.offset-2.col-md-4.offset-md-0.align-self-center
        figure.mb-5
         img(src="@/assets/template/tema-6-2.svg", alt="Texto que describa la imagen")
    .h4.mt-4  Comparación entre UX - UI
    figure.mt-5
      img(src="@/assets/template/tema-6-3.png", alt="Texto que describa la imagen")
    figcaption.mt-4 Referencia SENA
    .titulo-segundo.mt-5
      #t_6_1.h4 6.1  Experiencia de usuario UX
    p.mt-4 Las nuevas tecnologías hacen que se tengan grandes avances y cambios no solo en la vida cotidiana sino también en el diseño interactivo de publicaciones; junto con el progreso de la tecnología, se introducen nuevas palabras y conceptos como la “experiencia de usuario”, o sus siglas en inglés UX, que se centra en la experiencia y el grado de satisfacción que percibe el usuario al interactuar con un producto tecnológico. 
    p.mt-4 La UX nace como la necesidad de desplazar la importancia que tiene la máquina en términos de usabilidad y eficacia respecto al servicio que presta, y centrarse en la interacción del humano y su satisfacción medida como experiencia de uso. 
    .row.mt-4
      .col-12.col-md-9.align-self-center
        p Hoy en día la experiencia de usuario se ha convertido en un tema fundamental no solo en el área de la tecnología y el diseño, sino que hace parte del enfoque de “vender” experiencias a las personas, es un factor que incide de manera notoria en el éxito o fracaso de un servicio o producto, se miden la calidad y el servicio por medio de las motivaciones que estos generan a los usuarios; es decir, las emociones y experiencias, establecen el valor económico de un servicio, bien o producto. De acuerdo con lo anterior analice el siguiente esquema:
      .col-4.offset-4.col-md-2.offset-md-0.align-self-center
        figure.mb-5
         img(src="@/assets/template/tema-6-4.svg", alt="Texto que describa la imagen")
    .h4.mt-4
    .tabla-a.color-acento-contenido.mt-4
      table
        caption.mt-3 Referencia Sena
        thead
          tr
            th(colspan='6').py-3
              .h3.m-0 Estímulo
          tr.bg-naranja
            th(colspan='2').py-4 Experiencia estética 
            th(colspan='2') Experiencia significativa 
            th(colspan='2') Experiencia afectiva 
        tbody
          tr.bg-gris.text-center
            td.py-3 Estética clásica  
            td Estética expresiva
            td Usabilidad
            td Motivación utilitaria
            td Satisfacción
            td Disfrute, belleza
          tr.text-center.bg-naranja-claro
            td(colspan='6').py-3 Carácter neurosensorial       +         Carácter cognitivo       =        Carácter afectivo
    p.mt-4 El diseñador de la experiencia de usuario debe concentrar su conocimiento en desarrollar los siguientes aspectos:
    .row.mt-5 
      .col-10.col-md-8.offset-1.offset-md-2
        .cajon.color-acento-contenido.bg-acento-contenido-op50.px-5.py-4.mb-4
          .row            
            .h4 Information architect
            p Delimitan y desarrollan el prototipado de productos, mediante la utilización de herramientas y elementos de fácil entendimiento, como mapas de sitio, card sorting y wireframing.
    .row.mt-3 
      .col-10.col-md-8.offset-1.offset-md-2
        .cajon.color-acento-contenido.bg-acento-contenido-op35.px-5.py-4.mb-4
          .row
            .h4 UX researcher
            p Se llevan a cabo estudios e investigación, recolección de datos para poder definir y delimitar los futuros clientes y sus comportamientos.
    .row.mt-3 
      .col-10.col-md-8.offset-1.offset-md-2
        .cajon.color-acento-contenido.bg-acento-contenido-op25.px-5.py-4.mb-4
          .row
            .h4 Interaction designer
            p Se enfoca en entender las interacciones del usuario frente a un producto específico, su comportamiento y posibles acciones frente a las diferentes herramientas que tiene para utilizar. 
    .row.mt-3 
      .col-10.col-md-8.offset-1.offset-md-2
        .cajon.color-acento-contenido.bg-acento-contenido-op12.px-5.py-4.mb-4
          .row
            .h4 Visual designer 
            p Se encarga de hacer el producto atractivo, que sea de fácil comprensión para el usuario y agradable a la vista. 
    .row.mt-3 
      .col-10.col-md-8.offset-1.offset-md-2
        .cajon.color-acento-contenido.bg-acento-contenido-op05.px-5.py-4.mb-4
          .row
            .h4 Content strategist
            p Se encarga de la comunicación directa con el usuario y cómo mejorar su experiencia con el producto que va a utilizar. 
    .titulo-segundo.mt-5
      #t_6_2.h4 6.2  Diseño UI
    .row.mt-4
      .col-12.col-lg-6.align-self-center
        p El diseño UI, o interfaz de usuario, es el proceso mediante el cual se pueden definir los elementos correspondientes a crear interfaces entre las personas y los diferentes dispositivos digitales, resaltando no solo la parte visual, en cuanto a forma, función y utilidad, sino guiando al usuario durante toda su experiencia de una manera fácil y amigable en su uso. Su función principal es la de mejorar la experiencia del usuario
        p.mt-4 Las nuevas tecnologías también afectan al diseño, por eso en el diseño UI, es fundamental la experiencia del usuario digital en cuanto a la parte visual en la navegación y a las interfaces con las que interactúe, preferiblemente utilizando el menor número de pantallas. Es importante destacar que el usuario digital desea que la experiencia sea agradable, sencilla, funcional, interesante y atrayente, a través de la percepción de formas, colores y diseños que le resulten muy atractivos, con indicaciones de interacción claras y concretas; que se traduzca en una venta efectiva, o en el retorno o permanencia de dicho usuario con la página web.
      .col-8.offset-2.col-lg-6.offset-lg-0.align-self-center.mt-4
        figure.mb-5
         img(src="@/assets/template/tema-6-5.png", alt="Texto que describa la imagen")
    .h4.mt-4 Diseño UI
    .row
      .col-3.offset-4.col-lg-2.offset-lg-5
        figure.mb-5
          img(src="@/assets/template/tema-6-6.png", alt="Texto que describa la imagen") 
    .titulo-segundo.mt-5
      #t_6_3.h4 6.3  Investigación
    .row.mt-4
      .col-12.col-lg-8.align-self-center
        p Muchas personas piensan que el diseño es el producto de la creatividad y una idea original; sin embargo, en su desarrollo es fundamental los estudio previos e investigación, que se hacen relevantes para obtener un producto de calidad, especialmente en el ámbito del desarrollo digital, ya que involucra muchas variables a considerar. 
        p.mt-4 El diseño y desarrollo web debe fundamentarse en el tipo de personas a quienes se dirige el contenido, así como en sus necesidades, respecto al producto o servicio. Por eso es importante que el usuario final sea involucrado en el proceso, conociendo sus opiniones desde etapas muy tempranas del proyecto.
        p.mt-4 Para lograr este cometido, existen varios métodos y técnicas, como las pruebas de usuarios, el seguimiento ocular, el Card sorting, las entrevistas personales, los grupos focales (eye tracking), los heurísticos que son los procesos cognitivos que inconscientemente la persona automatiza al momento de elegir algo, entre otros.
      .col-8.offset-2.col-lg-4.offset-lg-0.align-self-center
        figure.mb-5
          img(src="@/assets/template/tema-6-7.png", alt="Texto que describa la imagen")
    p.mt-4 
    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="a" titulo="Análisis del proyecto y definición de los objetivos: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-8.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Se debe iniciar por dar respuesta a los siguientes interrogantes: ¿por qué es necesario la creación del sitio web y para qué se necesita?, ¿qué buscarán los usuarios y qué imagen se quiere causar en ellos?, ¿qué recursos se tienen y cuánto tiempo se requerirá para su creación?
          p.mt-4 Los objetivos deben ser medibles, por lo tanto, es importante determinar o segmentar el tipo, clases o perfiles de usuarios que tendrá el sitio web, pues con base en ello se delimitan los criterios de diseño y contenido, así como el lenguaje que se utilizará y la estética del sitio web.
      .row(numero="b" titulo="Planificación:  ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-9.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Hace referencia a los requerimientos técnicos que sean necesarios, definición del equipo de trabajo, estructura o interrelación de las páginas en el sitio web, así mismo, estudios de mercadeo. Se incluye también otros aspectos como: selección del software (licenciado), sistemas operativos a usar, editor de páginas web, lenguajes de programación, esquemas de páginas o planos de pantalla, animaciones, entre otros aspectos. Si el sitio web se publica en Internet, debe reservarse el dominio y solicitar el servicio de hospedaje en empresas que prestan estos servicios.
      .row(numero="c" titulo="Benchmarking: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-10.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es un proceso mediante el cual se toman “comparadores” o “benchmark”, que permiten realizar un análisis comparativo frente a otros productos y servicios de empresas líderes en el mismo sector de mercado, a fin de implementar mejoras o buenas prácticas.
      .row(numero="d" titulo="Estructura de navegación: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-11.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Un sitio web bien diseñado debe tener una estructura precisa y sus páginas deben estar interrelacionadas. A la página principal se vinculan las demás mediante enlaces con códigos HTML. Existen varios tipos de estructura de navegación: estructura lineal, estructura jerárquica, estructura radial y estructura de red.
      .row(numero="e" titulo="Costos de inversión:")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-12.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es el estudio de viabilidad que refleja la cantidad de dinero a invertir, se tendrán en cuenta aspectos como el tiempo que se requiere, el personal, el dominio y hospedaje web, las licencias y el mantenimiento requerido.
      .row(numero="f" titulo="Beneficios a obtener: ")
        .col-md-4
          figure
            img(src='@/assets/template/tema-6-13.png', alt='Texto que describa la imagen')
        .col-md-8.mb-4.mb-md-0
          p Es vital medir el tiempo de retorno de la inversión, que puede ser tangible en forma de dinero.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Fase 1" :icono="require('@/assets/template/tema-6-8.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Diseño
            p Una vez se conozca las condiciones iniciales del proyecto se da inicio al desarrollo de la idea; en esta etapa, interactúan diversos elementos como imágenes, animaciones, sonido, audios, videos, entre otros, que deben estructurase en forma lógica de acuerdo con los objetivos y propósitos del sitio.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-15.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 2" :icono="require('@/assets/template/tema-6-9.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Usabilidad
            p Es una palabra nueva, que se utiliza para referirse a la facilidad con la que los usuarios o clientes puedan utilizar el sitio web, el tiempo que requieren y la capacidad de adaptarse al sistema. También, se relaciona directamente con el número de acciones para realizar determinada actividad.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-16.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 3" :icono="require('@/assets/template/tema-6-10.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Accesibilidad
            p El éxito del sitio web depende del número de visitantes o usuarios, pero no todos tienen los mismos equipos o acceden de la misma manera, utilizan navegadores diferentes; por cuanto, estos factores influyen e impiden que el sitio sea visitado y no facilitan la navegación. Existen tres aspectos que definen la accesibilidad:  dispositivos, navegador utilizado y diseño del sitio web. 
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-17.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 4" :icono="require('@/assets/template/tema-6-11.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Programación
            p Es la utilización de las herramientas de programación web, las que facilitan la comunicación y el diseño, permitiendo a los clientes o usuarios acceder e interactuar con los contenidos. En esta fase se seleccionan los lenguajes de programación, las bases de datos y se definen cuáles son los contenidos estáticos y dinámicos del sitio. De esta fase están a cargo generalmente los ingenieros de software.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-18.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 5" :icono="require('@/assets/template/tema-6-12.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Arquitectura
            p Cuando se hayan decidido los aspectos relacionados con la fase de programación, se pasa a la arquitectura en tres etapas: diseño y creación de la base de datos; definición de la programación intermedia, que genera la comunicación entre la base de datos y la interfaz; y el desarrollo de la interfaz, que está compuesta por los programas y códigos que permitirán a los usuarios visualizar y desplegar los contenidos y navegar.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-19.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 6" :icono="require('@/assets/template/tema-6-13.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Testeo
            p Son las pruebas minuciosas que aseguran el funcionamiento eficiente del sitio web; es imprescindible la participación de los posibles usuarios. Se comprueba que las páginas puedan verse en forma correcta en diferentes navegadores, detectando también los vínculos rotos o contenidos que no están enlazados de manera correcta; la información que no sea necesaria debe eliminarse, además de verificar la rapidez de descarga.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-20.svg', alt='Texto que describa la imagen').w-75
      .py-4.py-md-5(titulo="Fase 7" :icono="require('@/assets/template/tema-6-14.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            .h4 Mercadeo y publicidad
            p Previamente, se deben consultar los aspectos relacionados con derechos de autor; así mismo, es clave definir el dominio del sitio web, porque debe estar disponible al momento de registrarlo. La difusión e incremento de visitas y uso del sitio dependerán de la investigación de las necesidades del consumidor y de las estrategias de publicidad que se utilicen.
          .col-6.offset-3.col-md-4.offset-md-0.align-self-center
            figure
              img(src='@/assets/template/tema-6-21.svg', alt='Texto que describa la imagen').w-75
    .titulo-segundo.mt-5
      #t_6_4.h4 6.4  Organización y planificación de la información 
    .row.mt-4
      .col-12.col-lg-8
        p El proceso de elaboración de un sitio web tiene una serie de etapas que deben ser planificadas en forma minuciosa para que sea exitoso y cumpla los objetivos deseados.
        p.mt-4 Debe contar con el trabajo de un equipo interdisciplinario, por ejemplo, debe contar con un ingeniero de sistemas, un diseñador, expertos en mercadeo, personas expertas en redacción y comunicación, etc., que aporten a través de sus ideas para lograr el éxito del mismo. El proceso debe estar sometido a un cronograma en el que se pueden desarrollar actividades lineales o paralelas; en algunas oportunidades al revisar el progreso, se detectan errores y se hace necesario retroceder en el trabajo. Los proyectos usualmente crecen, se nutren de información y deben mantenerse actualizados.
        p.mt-4 Es importante el trabajo en equipo, en el diseño, elaboración, ejecución y validación de los procesos, a través de una interacción eficiente que les permita a todos sus miembros compartir conocimientos, pensamientos o ideas. Por supuesto que el equipo debe interactuar con sus clientes o usuarios web, para tener en cuenta sus necesidades y opinión frente al producto o servicio ofrecido; el trabajo de la mano con el cliente o usuarios propenderá su fidelización.
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-6-22.png' alt='Texto')
    p.mt-4 El siguiente paso es reunir información, buscar, observar y analizar la información necesaria que permita lograr una conceptualización sobre temas que se espera abordar con el servicio web, además de tener en cuenta la normatividad vigente relacionada con estas.
    p.mt-4 Una vez reunida la información, el equipo deberá establecer objetivos claros y precisos, que pueden modificarse en el tiempo; es decir, determinar la misión del proyecto, que debe orientarse a satisfacer las necesidades del usuario digital. Para ello, también es vital, conocer el tipo de persona a la cual va dirigida, entre mayor conocimiento se tenga de los usuarios mayor será el éxito. Muchas veces se recurre a la segmentación del usuario, conocer sus intereses, el estrato socioeconómico, la edad, las creencias y orientaciones culturales, ya que, por ejemplo, no es lo mismo diseñar una página para adolescentes colombianos que diseñar una página para adultos hindúes.
    p.mt-4 Es preciso destacar la necesidad de la retroalimentación, a través de encuestas, mediciones de impacto, así como las preguntas de los usuarios, para ir mejorando la calidad de la página y concretar unos mejores resultados.
    figure.mt-5
      img(src='@/assets/template/tema-6-23.png' alt='Texto')
    .row.mt-5
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-6-24.svg' alt='Texto')
      .col-12.col-lg-8
        p Definido el tipo de usuario, es necesario que se planifique cómo se llegará hasta el usuario final para satisfacer a plenitud sus necesidades. La creación de ese producto debe estar sujeto a una gran calidad y al control de los tiempos de desarrollo, estableciendo criterios respecto a la estructura, definición y cumplimiento de las metas, el conocimiento del mercado objetivo, así como de los usuarios, los patrocinadores publicitarios, el diseño del contenido, la facilidad de navegación, el diseño atractivo, la identidad corporativa, entre otros aspectos.
        p.mt-4 En este punto, es preciso determinar el contenido de la página web, por eso el lenguaje y la redacción deben estar acordes con los requerimientos de la web. Deben ser textos cortos, claros, precisos y dinámicos, que permitan extenderse mediante enlaces, que puedan interrelacionarse con la misma página o con otras. A veces los enlaces se dirigen a textos extensos, que deben ser opcionales para el usuario, señalando la fuente y la fecha.
    .row.mt-5
      .col-12.col-lg-8
        p La información debe tener una estructura lógica y ordenada; sin embargo, en la página web la lectura no es secuencial como en un libro. Debe tener estructura en niveles y jerarquías, con el objetivo de que el usuario digital encuentre lo que necesite.
        p.mt-4 Una vez definida la estructura de la página, se fijará la navegación, revisando varias posibilidades como menús con teclas o desplegables, cenefa horizontal o lateral, barra de navegación, etc. Se determinará la imagen corporativa, mediante imágenes o logotipos, la paleta de colores, tipos y tamaños de fuente, así como la estructura gráfica por niveles y jerarquía, estructura de encabezados y de los pies de página. Para concretar esa idea, también pueden utilizarse algunos recursos como, la dramatización o producción de ficción que consiste en contar creativamente o inventar una historia, recurso utilizado por las agencias comerciales y que es atractiva para el público; se puede recurrir también a la producción documental basado en la realidad, o a la producción de video creación que es un cortometraje experimental.
      .col-6.col-lg-4.offset-3.offset-lg-0.align-self-center
        figure
          img(src='@/assets/template/tema-6-25.svg' alt='Texto')
    .titulo-segundo.mt-5
      #t_6_5.h4 6.5  Gestión de contenidos
    .row
      .col-10.offset-1
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.d-none.d-lg-block.px-3
              figure
                img(src="@/assets/template/tema-6-26.svg", alt="Texto que describa la imagen").w-100
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Se ocupa de crear y administrar los contenidos, con base en las normas de propiedad intelectual; bajo el entendido que va más allá de un portal de información, por cuanto, requiere del diseño de productos atractivos, fáciles de consumir y navegar para cualquier persona, captando la atención de las audiencias, y estableciendo estándares que marquen la diferencia con la competencia. Comercialmente se espera aumentar la gestión de tráfico en la web.
                p.mt-4 La gestión de contenidos está relacionada con los procesos relacionados con agregar, transformar, catalogar, agrupar, autorizar, presentar y distribuir información con un determinado propósito. En la siguiente infografía se describen los aspectos necesarios para una correcta gestión de los contenidos:
    figure.mt-5
      img(src="@/assets/template/tema-6-27.png" alt="Texto")
    figcaption.mt-4 Referencia  Sena


</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
