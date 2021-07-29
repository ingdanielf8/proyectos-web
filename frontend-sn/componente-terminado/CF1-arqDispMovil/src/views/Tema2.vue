<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Plataformas de desarrollo móvil nativas
    figure.mt-4
      img(src="@/assets/template/tema-2-1.png", alt="texto que describa la imagen")
    p.mt-4 Las plataformas de desarrollo móvil nativas, son aquellas que tienen un desarrollo específico para cada uno de sus sistemas operativos; IOS, Android, o Windows Phone, lo que quiere decir que para cada uno de estos Sistemas Operativos se adapta un lenguaje de desarrollo así:
    .titulo-sexto.color-acento-botones
      h5 Tabla 1     
    p.mt-2 Plataformas y lenguajes para desarrollo móvil
    .row.mt-4     
      table.separada.text-center.tabla-borde-azul
        thead
          tr
            th.py-3 Logo
            th Logo
            th Logo
        tbody
          tr
            th.p-5.borde-no-top 
              figure
                img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen")
            th.p-5.borde-no-top  
              figure
                img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
            th.p-5.borde-no-top  
              figure
                img(src="@/assets/template/tema-2-4.png" , alt="Texto que describa la imagen")
          tr
            th.borde-no-top.py-3  Sistema Operativo Móvil: iOS
            th.borde-no-top  Sistema Operativo Móvil: Android
            th.borde-no-top  Sistema Operativo Móvil: Windows Phone
          tr
            th.borde-no-top.py-3  Lenguajes: Objetive-C, Swift
            th.borde-no-top Lenguajes: Java, Kotlin
            th.borde-no-top Lenguajes: C++, C#
    .row.mt-5 
      .col-10.offset-1
        .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-5.svg", alt="Texto que describa la imagen")            
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Una de las principales ventajas de las aplicaciones nativas es que pueden aprovechar todas las funcionalidades avanzadas de los dispositivos de cada plataforma, así como los procesadores gráficos, los mayores beneficios de este tipo de aplicaciones siempre será la flexibilidad y la usabilidad que son superiores a la de las aplicaciones híbridas.
                p.mt-3 Uno de los principales inconvenientes que presenta el desarrollo de las aplicaciones nativas, es que tanto el desarrollo como las actualizaciones de estas apps tienen un alto costo.
    .row.mt-5 
      .col-8.offset-2
        .cajon.color-primario.p-4.mb-4.bg-primario-op50
          .row
            .h4.mb-0 Rendimiento
            p.mb-0.mt-2.text-small El rendimiento de las aplicaciones nativas es otra más de sus características principales ya que facilitan mayor velocidad, animaciones avanzadas, complejas transiciones, aprovechamiento total del hardware (GPS, cámara, sensores etc.) y consumen menos memoria.  
    .row.mt-5
      .col-sm.mb-5.mb-sm-0
        h4 Ventajas en las aplicaciones nativas:
        ul.lista-ul--color
          li.mb-0 
            i.fas.fa-brain
            p.mb-0 Permite el desarrollo para diferentes tipos de dispositivos como wearables, T.V., o carros.
          li 
            i.fas.fa-brain
            p.mb-0 Tiene un nivel de seguridad mayor que el de las híbridas.  
          li 
            i.fas.fa-brain
            p.mb-0 Tienen mayor grado de optimización.
          li 
            i.fas.fa-brain
            p.mb-0 Acceso a funcionalidades de accesibilidad nativas.
          li 
            i.fas.fa-brain
            p.mb-0 Entorno que permite herramientas de arrastrar y soltar para el diseño de UI.
          li 
            i.fas.fa-brain
            p.mb-0 Disponen de SDK’s para optimización de librerías 
    .h4.mt-5 Arquitectura de las aplicaciones móviles
      figure.mt-5
        img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.col-lg-10
        p Básicamente, las apps móviles se constituyen por dos partes en su desarrollo, las cuales se diferencian por su código, se trata del front-end y la parte web services.
        p.mt-3 Front-end, también llamada parte cliente, es la parte de lógica de visualización e interacción del usuario, la cual se ejecuta en los dispositivos a través de su sistema operativo, Android o IOS.
        p.mt-3 La parte web services, o parte servidora, es donde se encuentra la lógica del negocio de las aplicaciones, la persistencia de datos y la interacción con otras plataformas.
      .col-2.d-none.d-lg-block
        figure
          img(src="@/assets/template/tema-2-7.svg", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 5
        p Arquitectura de una app
      figure.mt-4
        img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen")
        figcaption.mt-3 Referencia Nota. https://bit.ly/3hHo1Kj
</template>

<script>
export default {
  name: 'Tema2',
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
