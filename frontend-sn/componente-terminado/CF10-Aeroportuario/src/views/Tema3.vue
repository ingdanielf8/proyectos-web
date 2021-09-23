<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Dangerous goods // Mercancías peligrosas
    figure
      img(src="@/assets/template/tema-3-1.png")
    .row.mt-5
      .col-12.col-lg-10
        .row.px-5
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic At the time of the trip, passengers carry a number of items with them to enjoy the activities on their trip. In most cases, they do not have the knowledge that these can be considered dangerous goods.
          p.mt-4 En el momento del viaje, los pasajeros llevan consigo un sinnúmero de elementos para el disfrute de las actividades en su viaje. En la mayoría de los casos, no tienen el conocimiento de que estos pueden ser considerados mercancías peligrosas.
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-2.svg").w-75.margin-0-auto
    .h4.mt-5 prohibited items in luggage // [objetos prohibidos en el equipaje]
    .h4.mt-5 in warehouse // [en bodega]
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-3.png")
    .h4.mt-5 in hand // [de mano]
    .row.mt-5
      .col-6.offset-1
        figure
          img(src="@/assets/template/tema-3-4.png")
    .titulo-segundo.mt-5
      #t_3_1.h4 3.1	Dangerous goods characteristics  // Características de las mercancías peligrosas
    .row.mt-5
      .col-12.col-lg-7
        .row.px-4
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic For safety reasons, it is important to bear in mind that some merchandise that passengers carry with them must have a special treatment or appropriate packaging. In all cases, the passenger is obliged to report the content of the items they carry in their luggage and, with this, it is possible to detect possible dangerous goods and avoid risks during flights.
          p.mt-4 Por temas de seguridad, es importante tener en cuenta que algunas mercancías que los pasajeros llevan consigo deben tener un tratamiento especial o embalaje apropiado. En todos los casos, el pasajero está obligado a informar el contenido de los elementos que lleva en su equipaje y, con esto, se pueden detectar las posibles mercancías peligrosas y evitar riesgos durante los vuelos. Existen diversos tipos de mercancías peligrosas, como son:
      .col-4.col-lg-5.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-5.png")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span a
        .h4 Dangerous goods classes // [Clases de mercancías peligrosas]
    .row.mt-5
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Dangerous goods are categorized into nine hazard classes that describe different types of risks. 
    p.mt-5 [Las mercancías peligrosas se clasifican en nueve clases de peligro que describen diferentes tipos de riesgos.]
    .row.mt-5
      .col-12
        .tabla-a.color-secundario.mb-5 
          table
            thead
              tr.bg-secundario.text-center
                th.py-3.w-15
                  .h4 Class // Clase
                th.py-3 
                  .h4 DESCRIPTION // DESCRIPCIÓN
                th 
                  .h4 DEXAMPLE //  EJEMPLO
            tbody
              tr.bg-gris-claro
                td.text-center.py-4 1
                td Explosives // Explosivos
                td Fireworks, Ammunition, Gelignite // Fuegos artificiales, municiones, gelignita
              tr
                td.text-center.py-4 2.1
                td Flammable Gases // Gases inflamables
                td Acetylene, Hydrogen LPG.// Acetileno, Hidrógeno GLP 
              tr.bg-gris-claro
                td.text-center.py-4 2.2
                td Non-flammable, Non-toxic gases // Gases no inflamables, no tóxicos
                td Nitrogen, Carbon dioxide, Refrigerant gases // Nitrógeno, dióxido de carbono, gases refrigerantes
              tr
                td.text-center.py-4 2.3
                td Toxic Gases // Gases tóxicos
                td Chlorine (gas), Ammonia // Cloro (gas), Amoníaco
              tr.bg-gris-claro
                td.text-center.py-4 3
                td Flammable Liquids // Líquidos inflamables
                td Ethanol, Methanol, Hexane
              tr
                td.text-center.py-4 4.1
                td Flammable Solids // Sólidos Inflamables
                td Sulphur // Azufre
              tr.bg-gris-claro
                td.text-center.py-4 4.2
                td Spontaneously Combustible // Espontáneamente combustible
                td White Phosphorous, Activated Carbon // Fósforo blanco, carbón activado
              tr
                td.text-center.py-4 4.3
                td Dangerous When Wet  // Peligrosa cuando está mojada
                td Sodium Metal, Calcium carbide // Metal de sodio, carburo de calcio
              tr.bg-gris-claro
                td.text-center.py-4 5.1
                td Oxidizing Substances // Sustancias oxidantes
                td Sodium Peroxide, Calcium Hypochlorite (Pool Chlorine) // Peróxido de sodio, hipoclorito de calcio (cloro de piscina)  
              tr
                td.text-center.py-4 5.2
                td Organic Peroxide // Peróxido orgánico
                td Methyl Ethyl Ketone Peroxide // Peróxido de metiletilcetona
              tr.bg-gris-claro
                td.text-center.py-4 6.1
                td Toxic Substances // Sustancias toxicas
                td Sodium Cyanide // Cianuro de sodio
              tr
                td.text-center.py-4 6.2
                td Infectious Substance // Sustancia infecciosa
                td Clinical or Medical Waste // Residuos clínicos o médicos
              tr.bg-gris-claro
                td.text-center.py-4 7
                td Radioactive Material // Material radioactivo
                td Tritium // Tritio
              tr
                td.text-center.py-4 8
                td Corrosives // Corrosivas
                td Hydrochloric Acids, Sodium Hydroxide // Ácido clorhídrico, hidróxido de sodio
              tr.bg-gris-claro
                td.text-center.py-4 9
                td Miscellaneous Dangerous Goods // Mercancías peligrosas diversas
                td Asbestos, Dry Ice // Amianto, hielo seco
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span b
        .h4 Dangerous goods diamond signs // [Señales con forma de rombo para mercancías peligrosas]
    .row.mt-5
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic Diamonds on dangerous goods labels are used in packaging where dangerous goods are transported or may be stored.
    p.mt-5 [Las etiquetas con forma de rombo para las mercancías peligrosas se utilizan en embalajes donde se transportan o pueden almacenarse mercancías peligrosas.]
    .row.mt-5
      .col-10.offset-1
        figure
          img(src="@/assets/template/tema-3-6.png", alt="Texto que describa la imagen")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span c
        .h4 No dangerous goods on the aircraft // [No se permiten mercancías peligrosas en la aeronave]
    .row.mt-5
      .col-12.col-lg-7
        .row.px-4
          .col-12.bandera.bg-amarillo-claro.px-5.py-4
            figure
              img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
            p.italic Many common items used every day at home or workplace may seem harmless. However, when transported on the aircraft, they can be very dangerous. During the flight, variation in temperature and pressure can cause items to leak, generate toxic fumes or start a fire. 
          p.mt-4 [Muchos artículos comunes que se usan todos los días en el hogar o en el lugar de trabajo pueden parecer inofensivos. Sin embargo, cuando se transportan en avión, pueden ser muy peligrosos. Durante el vuelo, las variaciones de temperatura y de presión pueden hacer que los elementos goteen, generen humo tóxico o inicien un incendio.]
      .col-4.col-lg-5.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-3-7.png")
    ol.lista-ol--cuadro.mt-5
      li 
        .lista-ol--cuadro__vineta.secundario
          span d
        .h4 Items that need special treatment or appropriate packaging // [Elementos que necesitan un tratamiento especial o embalaje apropiado]
    figure.mt-5
      img(src="@/assets/template/tema-3-8.png", alt="Texto que describa la imagen")
    p.mt-5 Some of such items can be: // [Algunos de tales productos pueden ser:]
    .row.mt-5
      .col-12.bandera.bg-amarillo-claro.px-5.py-4
        figure
          img(src="@/assets/template/escudo-usa.svg" alt="Bandera USA")
        p.italic There are elements in aviation that, although they are not considered dangerous goods, must have a special handling in the packaging so that they do not represent a risk for the flight. Some of such products may be:
    p.mt-5 [Existen en aviación elementos que, si bien no son considerados mercancías peligrosas, deben tener un manejo especial en el embalaje para que así no representen un riesgo para el vuelo.]
    .row.mt-5
      .col-10.offset-1
        .tarjeta.bg-morado-deg.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-3-9.svg" alt="Texto que describa la imagen").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Características del equipaje
                  p.text-small Para conocer y familiarizarse con algunos de tales productos que requieren un tratamiento o embalaje especial, descargue el siguiente documento 
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
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
