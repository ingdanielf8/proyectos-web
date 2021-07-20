<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Mediciones de acuerdo con procedimientos técnicos y especificaciones del fabricante
    .row.mt-5
      .col-12.col-lg-7
        p Para entender el funcionamiento de los circuitos eléctricos y electrónicos, es importante reconocer las características eléctricas de sus componentes para, posteriormente, entender cómo es su diseño.  Las magnitudes se pueden medir a través de diferentes equipos, entre ellos el multímetro.
        p.mt-3 Las mediciones de los circuitos eléctricos y electrónicos son básicas y serán detalladas más adelante en el estudio de las características físicas de los componentes; sin embargo, cuando los circuitos hacen parte de una tarjeta o de un equipo, se deberán tener en cuenta procedimientos, protocolos y especificaciones definidas por el respectivo fabricante.
        .h5.mb-0.mt-3 Existen dos sistemas comúnmente usados: el sistema métrico internacional y el sistema inglés/americano.
        p.mt-3 Cada fabricante establece unos parámetros de revisión para sus equipos, si las medidas dan por fuera de los límites establecidos, se deberá aplicar la recomendación que el fabricante emita ante esa situación, como calibración de equipo, mantenimiento preventivo, mantenimiento correctivo, o disposición final por deterioro total o difícil recuperación.
      .col-4.col-lg-5.offset-4.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5 
      .col-12
        .cajon.color-primario.p-4.mb-4.bg-azul-claro
          .row
            .col-2.col-lg-1
              figure
                img(src="@/assets/template/tema-1-2.svg", alt="Texto que describa la imagen")
            .col-10.col-lg-11
              p #[strong Las especificaciones del fabricante están basadas en los elementos utilizados y sus respectivas características técnicas], incluyendo tipo de materiales, color, construcción, detalles, combinaciones, temperatura utilizada, confiabilidad y resistencia a diferentes factores; de acuerdo con estas especificaciones, la medición de los componentes y/o equipos afecta
    .row.mt-5
      .col-10.offset-1
        .row
          .col-12.col-lg-6.p-0
            figure
              img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
          .col-12.col-lg-6.py-5.py-lg-0.px-4.borde-primario.centrar-hijo-vertical
            p.m-0 #[strong Un ejemplo común son las resistencias.] Vienen diseñadas con porcentajes del 5, 10 y 20 por ciento de precisión, por lo cual se identifican, respectivamente, con una banda dorada, plateada y sin banda adicional. #[strong Varios autores denominan esta banda como de tolerancia.]
    .titulo-segundo.mt-5
      #t_1_1.h4 1.1 Mediciones e instrumentos de medición
    .row.mt-4 
      .col-lg-2.d-none.d-lg-flex.rounded-25.bg-amarillo.py-3.px-5.text-center.align-left-center
        figure.align-self-center
          img(src="@/assets/template/tema-1-4.svg", alt="Texto que describa la imagen")
      .col-12.col-lg-10
        p Las mediciones eléctricas son los métodos, cálculos, comparaciones y otras acciones que miden las magnitudes eléctricas, las cuales pueden variar desde una medida simple con un multímetro, que puede ser físico o virtual, hasta la utilización de otras propiedades físicas de los componentes del circuito, como la temperatura, presión, fuerza y/o flujo, pero en este caso se requieren de otros elementos, como transductores.
        p.mt-3 Para cada magnitud se utiliza un dispositivo, tal como se visualiza en la siguiente figura.
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-7
        p Las unidades de longitud se utilizan para medir la distancia entre dos puntos, la cual puede ser un segmento, una línea recta o una curva.  La unidad de distancia está determinada de acuerdo con un sistema de medidas por convención. En los orígenes de la humanidad, se utilizaron partes del cuerpo, cada país o región tenía sus propias medidas y, a menudo, una medida era diferente en cada lugar. Estas situaciones requirieron de la necesidad de un sistema métrico universal.
        .row.mb-5
          .col-
            //- .bloque-texto-d debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            .bloque-texto-d.color-acento-botones.p-4
              .bloque-texto-d__texto.mb-2
                i.fas.fa-quote-left
                p.text-regular El primer sistema se basó en la medida de la longitud de un minuto de arco de un meridiano de la tierra, por el astrónomo y religioso francés Gabriel Mouton, en 1670. Posteriormente, durante la Revolución Francesa, en 1790, se definió el metro como la diezmillonésima parte de la distancia del Polo Norte al Ecuador, a lo largo del meridiano que pasa entre Dunkerque y Barcelona. El metro se divide en partes de 10, y es el inicio del sistema métrico decimal.
                i.fas.fa-quote-right
              .bloque-texto-d__autor 
                .h5.mb-0 Quincy, 1821
      .col-lg-5.d-none.d-lg-flex.p-0
        figure
          img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
    .row.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/template/tema-1-7.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Se podría decir que la longitud es la magnitud básica y de ella se derivan otras magnitudes, por lo cual está catalogada como una magnitud física fundamental. La longitud no debe confundirse con la distancia, porque no siempre son iguales, especialmente cuando se trata de líneas curvas. La longitud está intrínseca en las medidas de las variables eléctricas y/o electrónicas, porque, de acuerdo con la distancia entre elementos o por el tamaño de los mismos, varía la medición electrónica. Ejemplo de ello es la distancia entre placas o la longitud de una resistencia en largo o grueso.
    .row.mt-5 
      .col-10.offset-1
        .cajon.color-primario.p-4.mb-4.bg-azul-claro
          .row
            .col-12
              p El sistema internacional de medidas está basado en el metro, cuyo símbolo es m, tiene múltiplos y submúltiplos denominados con prefijos, siempre basados en divisiones o amplificaciones por 10. #[strong El metro, actualmente, se define como la distancia que recorre la luz en el vacío durante un intervalo de 1/299.792.458 de segundo.] 

    //- .tarjeta--container.row.mb-5.text-center
    //-   //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   //- estas clases tambien tienen un modificador --borde
    //-   .col-md.tarjeta.bg-amarillo-claro.p-5
    //-     .row.justify-content-center.mb-4
    //-       .circulo-blanco
    //-         p hola
          
    //-     h2.text-center 1793
    //-     p El sistema internacional de medidas, conocido actualmente como SI (formalizado en 1960), fue concebido en Francia por la necesidad de comunicación entre los sistemas locales de medición, difíciles de interpretar por la utilización del mismo nombre para diferentes medidas.

    //-   //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   //- estas clases tambien tienen un modificador --borde
    //-   .col-md.tarjeta.bg-azul-claro.p-5
    //-     .row.justify-content-center.mb-4
    //-       .circulo-blanco
    //-         p hola
          
    //-     h2.text-center 1789-1799
    //-     p Los franceses apostaron por la creación de este sistema para el mundo. Durante la Revolución popularizaron el siguiente lema “para todos los hombres y todas las épocas”, iniciativa que fue apoyada por Napoleón.

    //-   //- .tarjeta debe ir acompañado de una de una de estas clases => 
    //-   //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    //-   //- estas clases tambien tienen un modificador --borde
    //-   .col-md.tarjeta.bg-amarillo-claro.p-5
    //-     .row.justify-content-center.mb-4
    //-       .circulo-blanco
    //-         p hola
          
    //-     h2.text-center 1832 en adelante
    //-     p Posteriormente, fue adoptado por los Estados de Europa y América, a finales del siglo XIX, y a principios del siglo XX, por la Unión Soviética y Japón.



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
