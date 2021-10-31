<template lang="pug">
.curso-main-container.pb-3(style="overflow: hidden")
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(style="overflow: hidden")
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Lodging // Alojamiento
    .row.mt-5
      .col-8
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p They are establishments whose main activity is to offer accommodation to people for a price, in a regular and professional way, with or without other complementary services, through the generic name of hotel, hostel, pension, or similar. 
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Son aquellos establecimientos cuya actividad principal es ofrecer alojamiento a las personas por un precio, de forma regular y profesional, con o sin otros servicios complementarios, mediante la denominación genérica de: hotel, hostal, pensión o similar.
      .col-4
        figure
          img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen").floating
    .titulo-segundo.mt-5
      #t_2_1.h2  2.1. Category // Categoría
    .row.mt-5
      .col-9
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p Lodging establishments are classified according to meeting the evaluation criteria. The best-known classification is that of stars, but this is not standard since it uses different criteria in each country. In Colombia, for example, these parameters are determined by the technical standard NTSH006.  
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Los establecimientos están clasificados según cumplan los criterios de evaluación. La clasificación más conocida es la de estrellas, pero esta no es estándar, ya que usa criterios diferentes en cada país. En Colombia, por ejemplo, esos parámetros los determina la norma técnica NTSH006. 
      .col-3
        figure
          img(src="@/assets/template/tema-2-2.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
    .row.justify-content-center.mt-5(style="height:850px")
      .col-lg-12
        .row
          .col-md-2.col-lg-4.mb-4.mb-lg-0.offset-2
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-4.png' alt='AvatarTop').img2
              img(src='@/assets/template/tema-2-3.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf.position-absolute.bg-blanco.pt-1
                .p-4
                  h3.text-center.mb-1 1 star hotels //
                  p.text-center Hoteles de 1 estrella
              .tarjeta.color-naranja.wf.position-absolute.pt-1
                .row.text-center.px-3
                  .col-12.bg-rosado-claro.position-relative.p-3.italic
                    figure.bandera-usa(style='width: 5%')
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.ml-4 Must meet 100% of the requirements defined in Standard NTSH006, 178 points and current legal requirements.   
                  .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                    figure.bandera-esp(style='width: 4%')
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.font-1em.font-weight-normal Deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 178 puntos y los requisitos legales vigentes.

          .col-md-2.col-lg-4.mb-4.mb-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-5.png' alt='AvatarTop').img2
              img(src='@/assets/template/tema-2-3.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf.position-absolute.bg-blanco.pt-1
                .p-4
                  h3.text-center.mb-1 2 star hotels //
                  p.text-center Hoteles de 2 estrellas
              .tarjeta.color-naranja.wf.position-absolute.pt-1
                .row.text-center.px-3
                  .col-12.bg-rosado-claro.position-relative.p-3.italic
                    figure.bandera-usa(style='width: 5%')
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.ml-4 They must meet 100% of the requirements defined in Standard NTSH006, 181 points and current legal requirements.    
                  .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                    figure.bandera-esp(style='width: 4%')
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.font-1em.font-weight-normal Deberán cumplir el 100% de los requisitos definidos en la Norma NTSH006, 181 puntos y los requisitos legales vigentes.
        .row(style="margin-top: 17rem")
          .col-md-2.col-lg-4.mb-4.mb-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-6.png' alt='AvatarTop').img2
              img(src='@/assets/template/tema-2-3.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf.position-absolute.bg-blanco.pt-1
                .p-4
                  h3.text-center.mb-1 3 star hotels //
                  p.text-center Hoteles de 3 estrella
              .tarjeta.color-naranja.wf.position-absolute.pt-1
                .row.text-center.px-3
                  .col-12.bg-rosado-claro.position-relative.p-3.italic
                    figure.bandera-usa(style='width: 5%')
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.ml-4 They must meet 80% of the requirements defined in Standard NTSH006, range 208 - 260 points and current legal requirements.    
                  .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                    figure.bandera-esp(style='width: 4%')
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.font-1em.font-weight-normal Deberán cumplir el 80% de los requisitos definidos en la Norma NTSH006, rango 208 - 260 puntos y los requisitos legales vigentes.
          .col-md-2.col-lg-4.mb-4.mb-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-7.png' alt='AvatarTop').img2
              img(src='@/assets/template/tema-2-3.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf.position-absolute.bg-blanco.pt-1
                .p-4
                  h3.text-center.mb-1 4 star hotels //
                  p.text-center Hoteles de 4 estrellas
              .tarjeta.color-naranja.wf.position-absolute.pt-1
                .row.text-center.px-3
                  .col-12.bg-rosado-claro.position-relative.p-3.italic
                    figure.bandera-usa(style='width: 5%')
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.ml-4 They must meet a minimum of 85% of the requirements defined in Standard NTSH006, range 283 - 333 points and current legal requirements.      
                  .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                    figure.bandera-esp(style='width: 4%')
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.font-1em.font-weight-normal Deberán cumplir mínimo con el 85% de los requisitos definidos en la Norma NTSH006, rango 283 - 333 puntos y los requisitos legales vigentes.
          .col-md-2.col-lg-4.mb-4.mb-lg-0
            .tarjeta-avatar(@mouseover="mostrarIndicador = false").position-relative
              .indicador--click(v-if="mostrarIndicador")
              img(src='@/assets/template/tema-2-8.png' alt='AvatarTop').img2
              img(src='@/assets/template/tema-2-3.svg' alt='AvatarTop').img1
              .tarjeta.color-naranja3.wf.position-absolute.bg-blanco.pt-1
                .p-4
                  h3.text-center.mb-1 5 star hotels //
                  p.text-center Hoteles de 5 estrellas
              .tarjeta.color-naranja.wf.position-absolute.pt-1
                .row.text-center.px-3
                  .col-12.bg-rosado-claro.position-relative.p-3.italic
                    figure.bandera-usa(style='width: 5%')
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.ml-4 They must meet a minimum of 95% of the requirements defined in Standard NTSH006, range 349 - 337 points and the current legal requirements.    
                  .col-12.position-relative.p-3.hover-bg-naranja.mb-4
                    figure.bandera-esp(style='width: 4%')
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.font-1em.font-weight-normal Deberán cumplir mínimo con el 95% de los requisitos definidos en la norma NTSH006, Rango 349 - 337 puntos y los requisitos legales vigentes.
    .row.mt-5
      .col-4.mt-4
        figure
          img(src="@/assets/template/tema-2-9.svg", alt="Texto que describa la imagen").floating
      .col-8.mt-4
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p At a global level, the categorization most used by the industry is the one determined by the price scales associated with the quality of the establishments. This scale has 6 levels that are determined by the ADR “Average Daily Rate” and is used by hotel chains to classify their products. 
            p.mt-3  There is a seventh category that applies to independent hotels.
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p A nivel mundial, la categorización más utilizada por la industria es la que se determina por las escalas de precio asociadas a la calidad de los establecimientos. Esta escala tiene 6 niveles que se determinan a partir de la tarifa promedio, y es usada por las cadenas hoteleras para clasificar sus productos. 
            p.mt-3 Existe una séptima categoría que se aplica a los hoteles independientes.
    .row.mt-5
      .col-8.offset-2
        .tabla-a.color-acento-contenido.mt-3 
          table
            thead(style="border: none")
              tr.bg-amarillo
                th
                  figure.bandera-usa(style="width=6%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos") 
                  .h4.text-white Scale                  
                th
                  figure.bandera-esp(style="width=6%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  .h4.text-white Escala                  
            tbody
              tr.bg-gris
                td.py-3.pl-4.text-small Luxury Chains
                td.pl-4.text-small Cadenas de nivel Lujo    
              tr
                td.py-3.pl-4.text-small Upper Upscale Chains 
                td.pl-4.text-small Cadenas nivel Superior exclusivo
              tr.bg-gris
                td.py-3.pl-4.text-small Upscale Chains
                td.pl-4.text-small Cadenas nivel Exclusivo
              tr
                td.py-3.pl-4.text-small Upper Midscale Chains
                td.pl-4.text-small Cadenas nivel Superior medio
              tr.bg-gris
                td.py-3.pl-4.text-small Midscale Chains
                td.pl-4.text-small Cadenas nivel Medio
              tr
                td.py-3.pl-4.text-small Economy Chains
                td.pl-4.text-small Cadenas nivel Económico
              tr.bg-gris
                td.py-3.pl-4.text-small Independent Hotels
                td.pl-4.text-small Hoteles Independientes
    .row.exp.mt-5
      .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
        figure.bandera-usa
          img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
        p When a chain is categorized in a specific scale level, that means every hotel in that chain is in that scale level everywhere in the world, in every country and market. For example, the Ritz-Carlton chain is at the Luxury scale level.  That means every Ritz-Carlton hotel in the world will be a Luxury scale hotel.
      .col-12.position-relative.p-5.hover-bg-naranja.expandable2
        figure.bandera-esp
          img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
        p Cuando una cadena se clasifica en un nivel específico de la escala, eso significa que cada hotel en esa cadena está en ese nivel de la escala, en todas partes del mundo, en cada país y mercado. Por ejemplo, la cadena Ritz-Carlton está en el nivel Lujo.  Eso significa que cada hotel Ritz-Carlton en el mundo será un hotel de escala de lujo.
    .row.mt-5
      .col-12
        .tabla-a.color-acento-contenido.mt-3 
          table
            thead(style="border: none")
              tr.bg-amarillo.text-center
                th(colspan="6")
                  .h4.text-white Categorization by price scale (Brands) // Categorización por escala de precio (Marcas)                  
            tbody
              tr.bg-gris.text-center
                td.py-3.pl-4.font-weight-bold Scale / Escala
                td(colspan="5").font-weight-bold Example / Ejemplos 
              tr.zoom-in
                td
                  .h4.text-small Luxury Hotels //
                  p.text-small Cadenas de nivel lujo
                td
                  figure
                    img(src="@/assets/template/tema-2-10.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-11.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-14.png", alt="Texto que describa la imagen")
              tr.zoom-in
                td
                  .h4.text-small Upper Upscale Hotels //
                  p.text-small Nivel Superior exclusivo 
                td
                  figure
                    img(src="@/assets/template/tema-2-15.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-16.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-17.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-18.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-19.png", alt="Texto que describa la imagen")
              tr.zoom-in
                td
                  .h4.text-small Upscale Hotels //
                  p.text-small Cadenas de nivel Exclusivo 
                td
                  figure
                    img(src="@/assets/template/tema-2-20.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-21.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-22.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-23.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-24.png", alt="Texto que describa la imagen")
              tr.zoom-in
                td
                  .h4.text-small Upper Midscale Hotels //
                  p.text-small Cadenas nivel Superior medio 
                td
                  figure
                    img(src="@/assets/template/tema-2-25.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-26.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-27.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-28.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-29.png", alt="Texto que describa la imagen")
              tr.zoom-in
                td
                  .h4.text-small Midscale Hotels //
                  p.text-small Cadenas nivel Medio 
                td
                  figure
                    img(src="@/assets/template/tema-2-30.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-31.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-32.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-33.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-34.png", alt="Texto que describa la imagen")
              tr.zoom-in
                td
                  .h4.text-small Ecconomy Hotels //
                  p.text-small Cadenas nivel Económico 
                td
                  figure
                    img(src="@/assets/template/tema-2-35.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-36.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-37.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-38.png", alt="Texto que describa la imagen")
                td
                  figure
                    img(src="@/assets/template/tema-2-39.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_2_2.h2 2.2  Class // Clase
    .row.mt-5
      .col-12
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p The class categorization is like the scale.  The names of the categories are the same, but there is no “Independent” class group.  So there are only 6 class categories, instead of the 7 scale groups.
            p.mt-3 Independent hotels are slotted into the scale categories (Luxury through Economy) at similar Average Daily Rate levels. Also, there are several adjectives that can be used to talk about the class of hotels and other types of tourist accommodation. 
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p La categorización por clases es similar a la de escala.  Los nombres de las categorías son los mismos, pero no hay un grupo de clase “independiente”.  Así que sólo hay 6 categorías por clase, en lugar de los 7 grupos de escala. 
            p.mt-3 Los hoteles independientes están ubicados en las categorías de escala (desde lujo hasta económica) con niveles de tarifa promedio similares. 
    .row.mt-5
      .col-8
        .tabla-a.color-acento-contenido.mt-3 
          table
            thead(style="border: none")
              tr.bg-amarillo
                th
                  figure.bandera-usa(style="width=6%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos") 
                  .h4.text-white Class                  
                th
                  figure.bandera-esp(style="width=6%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  .h4.text-white Clase                  
            tbody
              tr
                td.py-3.pl-4.text-small Luxury Hotels
                td.pl-4.text-small Hoteles de Lujo    
              tr.bg-gris
                td.py-3.pl-4.text-small Upper Upscale Hotels 
                td.pl-4.text-small Hoteles de nivel Superior exclusivo
              tr
                td.py-3.pl-4.text-small Upscale Hotels
                td.pl-4.text-small Hoteles de nivel Exclusivo     
              tr.bg-gris
                td.py-3.pl-4.text-small  Upper Midscale Hotels
                td.pl-4.text-small Hoteles de nivel Superior medio
              tr
                td.py-3.pl-4.text-small Midscale Hotels
                td.pl-4.text-small Hoteles de nivel Medio     
              tr.bg-gris
                td.py-3.pl-4.text-small  Economy Hotels
                td.pl-4.text-small Hoteles de nivel Económico            
      .col-4
        figure
          img(src="@/assets/template/tema-2-40.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
    .row.mt-5
      .col-4
        figure
          img(src="@/assets/template/tema-2-41.png", alt="Texto que describa la imagen")
      .col-8
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p At the same time, there are several adjectives to express the class and category of a lodging property. 
          .col-12.position-relative.p-5.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Al mismo tiempo, existen varios adjetivos para expresar la clase y categoría de una propiedad de alojamiento
        .tabla-a.color-acento-contenido.mt-3 
          table
            thead(style="border: none")
              tr.bg-amarillo
                th
                  figure.bandera-usa(style="width=6%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos") 
                  .h4.text-white Expensive                  
                th
                  figure.bandera-esp(style="width=6%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  .h4.text-white Caro                  
            tbody
              tr
                td.py-3.pl-4.text-small Cheap
                td.pl-4.text-small Barato     
              tr.bg-gris
                td.py-3.pl-4.text-small Modern
                td.pl-4.text-small Moderno
              tr
                td.py-3.pl-4.text-small Charming
                td.pl-4.text-small Con Encanto / Encantador     
              tr.bg-gris
                td.py-3.pl-4.text-small Bustling 
                td.pl-4.text-small Bullicioso
              tr
                td.py-3.pl-4.text-small Contemporary
                td.pl-4.text-small Contemporáneo     
              tr.bg-gris
                td.py-3.pl-4.text-small Cosmopolitan 
                td.pl-4.text-small Cosmopolita
              tr
                td.py-3.pl-4.text-small Historic
                td.pl-4.text-small Histórico    
              tr.bg-gris
                td.py-3.pl-4.text-small  Exciting
                td.pl-4.text-small Emocionante
              tr
                td.py-3.pl-4.text-small Peaceful / quiet / relaxing
                td.pl-4.text-small Apacible / silenciono / relajante    
              tr.bg-gris
                td.py-3.pl-4.text-small Traditional 
                td.pl-4.text-small Tradicional
    .titulo-segundo.mt-5
      #t_2_3.h2 2.3  Types  // Tipología
    figure
      img(src="@/assets/template/tema-2-42.png", alt="Texto que describa la imagen")
    .row.exp.mt-5
      .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
        figure.bandera-usa
          img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
        p There are different types of accommodation establishments, you will see them in the second language.
      .col-12.position-relative.p-5.hover-bg-naranja.expandable2
        figure.bandera-esp
          img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
        p Hay diferentes tipos de establecimientos de alojamiento, los verá a continuación en la segunda lengua.
    SlyderB.mt-5(:datos="datosSlyder")
    .row.mt-5
      .col-8.offset-2
        .tabla-a.color-acento-contenido.mt-3(style="overflow-x:hidden;") 
          table
            thead(style="border: none")
              tr.bg-amarillo
                th
                  figure.bandera-usa(style="width=6%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos") 
                  .h4.text-white Other classification                  
                th
                  figure.bandera-esp(style="width=6%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  .h4.text-white Otros tipos de clasificación                  
            tbody
              tr.bg-gris
                td.py-3.pl-4.text-small Airport hotels
                td.pl-4.text-small Hoteles de aeropuerto    
              tr
                td.py-3.pl-4.text-small Business class or business hotel
                td.pl-4.text-small Hotel de negocios
              tr.bg-gris
                td.py-3.pl-4.text-small Luxury hotels
                td.pl-4.text-small Hoteles de lujo    
              tr
                td.py-3.pl-4.text-small Motels 
                td.pl-4.text-small Moteles  
              tr.bg-gris
                td.py-3.pl-4.text-small Resorts
                td.pl-4.text-small Resorts     
              tr
                td.py-3.pl-4.text-small Casino hotels 
                td.pl-4.text-small Hoteles casinos
              tr.bg-gris
                td.py-3.pl-4.text-small Club hotels
                td.pl-4.text-small Hoteles clubes     
              tr
                td.py-3.pl-4.text-small Themed hotels 
                td.pl-4.text-small Hoteles temáticos 
              tr.bg-gris
                td.py-3.pl-4.text-small Historic hotels (Heritage)
                td.pl-4.text-small Hoteles históricos (Patrimonio)
              tr
                td.py-3.pl-4.text-small(colspan='2')
                  .h4 Data of interest //Dato de interés:
                  .row.exp.mt-3
                    .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
                      figure.bandera-usa
                        img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                      p.italic The word ‘motel’ was invented in the United States to describe the category of cheap and basic hotel that is built near the great national highways of the country. It was aimed at drivers. Motel is the composition of motor + hotel.
                    .col-12.position-relative.p-5.hover-bg-naranja.expandable2
                      figure.bandera-esp
                        img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                      p La palabra ‘motel’ se inventó en los Estados Unidos para describir la categoría de hotel barato y básico que se construye cerca de las grandes autopistas nacionales del país. Estaba dirigido a los conductores. Motel es la composición de motor + hotel.
    .titulo-segundo.mt-5
      #t_2_4.h2 2.4  Characteristics  // Características
    figure.mt-5
      img(src="@/assets/template/tema-2-49.png", alt="Texto que describa la imagen")
    .row.exp.mt-5
      .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
        figure.bandera-usa
          img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
        p.italic A lodging establishment can offer more than the provision of a room. The client can request complementary services during their stay and the hotel provides them as part of the services.
        p.mt-3.italic  The following are considered complementary services:
      .col-12.position-relative.p-5.hover-bg-naranja.expandable2
        figure.bandera-esp
          img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
        p Un establecimiento de alojamiento puede ofrecer más que la disposición de una habitación. El cliente puede solicitar servicios complementarios durante su estancia y el hotel los presta como parte de los servicios.
        p.mt-3 Los siguientes se consideran servicios complementarios:
    .row.mt-5
      .col-4.bg-azul.rounded-50.px-4.py-5.borde-blanco.z-index-2
        .h4.text-white.italic The following are considered complementary services: 
        p.mt-3.text-amarillo-fuerte Los siguientes se consideran servicios complementarios:  
      .col-8
        .row
          .col-12.bg-azul.rounded-20.py-4.text-center(style="margin-left:-10%; width:110%; max-width:110%").mt-1
            .h4.text-white.italic Characteristics of establishment 
            p.mt-1.text-amarillo-fuerte Características de establecimientos de alojamiento
          .row.mt-3
            .col-6.bg-azul.rounded-20.py-4.text-center.pl-5.position-relative(style="margin-left:11%;width:37%")
              .h4.text-white.italic.pl-4.pr-3 Restaurant and Room service
              p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Restaurante y servicio a la habitación
              figure.position-absolute(style="top: 3%; left:-27%; width:55%")
                img(src="@/assets/template/tema-2-50.svg", alt="Texto que describa la imagen") 
            .col-6.bg-azul.rounded-20.py-4.text-center.pl-5.position-relative(style="margin-left:15%;width:37%")
              .h4.text-white.italic.pl-4.pr-3 Venue Rooms
              p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Salones de eventos 
              figure.position-absolute(style="top: 3%; left:-27%; width:55%")
                img(src="@/assets/template/tema-2-51.svg", alt="Texto que describa la imagen") 
      
    .row.mt-4
      .col-4.bg-azul.rounded-20.py-4.text-center.pl-5.position-relative(style="margin-left:8%;width:23%")
        .h4.text-white.italic.pl-4.pr-3 Commercial spaces 
        p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Locales comerciales 
        figure.position-absolute(style="top: 3%; left:-27%; width:55%")
          img(src="@/assets/template/tema-2-52.svg", alt="Texto que describa la imagen") 
      .col-4.bg-azul.rounded-20.py-4.text-center.pl-5.position-relative(style="margin-left:9%;width:23%")
        .h4.text-white.italic.pl-4.pr-3 24-hour Front Desk
        p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Recepción y atención permanente  
        figure.position-absolute(style="top: 3%; left:-27%; width:55%")
          img(src="@/assets/template/tema-2-53.svg", alt="Texto que describa la imagen") 
      .col-4.bg-azul.rounded-20.py-4.text-center.pl-5.position-relative(style="margin-left:11%;width:23%")
        .h4.text-white.italic.pl-4.pr-3 Safe box
        p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Cajilla de seguridad   
        figure.position-absolute(style="top: 3%; left:-27%; width:55%")
          img(src="@/assets/template/tema-2-54.svg", alt="Texto que describa la imagen") 
    .row.mt-5
      .col-8.px-4
        .row.pl-5
          .col-12.bg-azul.rounded-20.py-4.text-center
            .h4.text-white.italic.pl-4.pr-3 Daily cleaning of the rooms 
            p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Limpieza periódica del alojamiento  
          .col-6.position-relative.mt-3
            .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:-3%")
              p.text-amarillo-fuerte.pt-5 45 
            .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:2%; margin-top:5%")
              .h4.text-white.italic.px-5 Periodic change of bedding  
              p.mt-1.text-amarillo-fuerte.px-5 Cambio periódico de ropa de cama 
          .col-6.position-relative.mt-3
            .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:6%")
              p.text-amarillo-fuerte.pt-5 45 
            .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:11%; margin-top:5%")
              .h4.text-white.italic.px-5 Periodic change of towels    
              p.mt-1.text-amarillo-fuerte.px-5.pb-4 Cambio periódico de toallas  
              
      .col-4
        figure
          img(src="@/assets/template/tema-2-55.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
    .row.mt-5.mt-lg-4
      .col-12.mt-5
        .row.pl-5.mt-5.mt-xl-0
          .col-12.bg-azul.rounded-20.py-4.text-center.mt-5.mt-xl-0
            .h4.text-white.italic.pl-4.pr-3 Additional services 
            p.mt-1.text-amarillo-fuerte.pl-4.pr-3 Prestación de servicios adicionales  
      .col-3.position-relative.mt-3
        .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:11%")
          p.text-amarillo-fuerte.pt-5 45 
        .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:15%; margin-top:5%")
          .h4.text-white.italic.px-5 Laundry  
          p.mt-1.text-amarillo-fuerte.px-5.pb-4 Lavandería 
      .col-3.position-relative.mt-3
        .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:9%")
          p.text-amarillo-fuerte.pt-5 45 
        .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:14%; margin-top:5%")
          .h4.text-white.italic.px-5 Pressing    
          p.mt-1.text-amarillo-fuerte.px-5.pb-4 Planchado 
      .col-3.position-relative.mt-3
        .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:7.5%")
          p.text-amarillo-fuerte.pt-5 45 
        .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:12.5%; margin-top:5%")
          .h4.text-white.italic.px-4 Luggage custody      
          p.mt-1.text-amarillo-fuerte.px-4.pb-4 Custodia de maletas
      .col-3.position-relative.mt-3
        .col-12.position-absolute.bg-amarillo.rounded-top-20.flecha-top-naranja(style="width:90%; margin-left:7%")
          p.text-amarillo-fuerte.pt-5 45 
        .col-12.position-absolute.bg-azul.rounded-20.py-4.text-center.borde-blanco(style="width:80%; margin-left:12%; margin-top:5%")
          .h4.text-white.italic.px-5 Newspaper      
          p.mt-1.text-amarillo-fuerte.px-5.pb-4 Periódico   
    .row.mt-5
      .col-12.mt-5
        .row.mt-5
          .col-8.text-center.bg-amarillo.px-5.mt-5
            .row
              .col-12.py-5
                .h4.text-white.font-30.italic Additional services
                .h4.text-azul.font-25 Prestación de servicios adicionales
              a.col-5.col-lg-5.bg-rosado.rounded-50.px-3.px-lg-4.px-xl-5.py-5.mx-2.mx-lg-3.mx-xl-3(@click="modalP = true")
                .h4.font-25.text-azul.italic Types of Holiday
                .h4.text-amarillo-fuerte.font-20.pt-1 Tipos de vacaciones
              a.col-5.col-lg-5.bg-rosado.rounded-50.px-3.px-lg-4.px-xl-5.py-5.mx-2.mx-lg-3.ml-xl-3(@click="modalH = true")
                .h4.font-25.text-azul.italic Ancillary services
                .h4.text-amarillo-fuerte.font-20.pt-1 Servicios complementarios
              a.col-5.col-lg-5.bg-rosado.rounded-50.px-3.px-lg-4.px-xl-5.py-5.mx-2.mx-lg-3.ml-xl-3.mt-5.mb-5(@click="modalA1 = true")
                .h4.font-25.text-azul.italic.pt-4 Accommodation
                .h4.text-amarillo-fuerte.font-20.pb-4.pt-1 Alojamiento
              a.col-5.col-lg-5.bg-rosado.rounded-50.px-3.px-lg-4.px-xl-5.py-5.mx-2.mx-lg-3.ml-xl-3.mt-5.mb-5(@click="modalV = true")
                .h4.font-25.text-azul.italic.pt-4 Transportation
                .h4.text-amarillo-fuerte.font-20.pb-4.pt-1 Transporte
            ModalA(:abrir-modal.sync="modalP")
              .row.mt-5
                .col-4.offset-4
                  .tabla-a.color-acento-contenido.mt-3(style="overflow-x:hidden;") 
                    table
                      thead(style="border: none")
                        tr.bg-amarillo
                          th
                            figure
                              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos").w-15.margin-0-auto 
                          th
                            figure
                              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos").w-15.margin-0-auto
                      tbody
                        tr.bg-gris
                          td.py-3.pl-4.text-small Cruise
                          td.pl-4.text-small Crucero    
                        tr
                          td.py-3.pl-4.text-small Winter sports
                          td.pl-4.text-small Deportes de invierno
                        tr.bg-gris
                          td.py-3.pl-4.text-small Mini-break
                          td.pl-4.text-small Mini descanso
                        tr
                          td.py-3.pl-4.text-small Honeymoon
                          td.pl-4.text-small Luna de miel
                        tr.bg-gris
                          td.py-3.pl-4.text-small Adventure
                          td.pl-4.text-small Aventuras
            ModalA(:abrir-modal.sync="modalH")
              .row.mt-5
                .col-4.offset-4
                  .tabla-a.color-acento-contenido.mt-3(style="overflow-x:hidden;") 
                    table
                      thead(style="border: none")
                        tr.bg-amarillo
                          th
                            figure
                              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos").w-15.margin-0-auto 
                          th
                            figure
                              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos").w-15.margin-0-auto
                      tbody
                        tr.bg-gris
                          td.py-3.pl-4.text-small Visa
                          td.pl-4.text-small Visado    
                        tr
                          td.py-3.pl-4.text-small All-inclusive
                          td.pl-4.text-small Todo incluido
                        tr.bg-gris
                          td.py-3.pl-4.text-small Insurance
                          td.pl-4.text-small Seguro
                        tr
                          td.py-3.pl-4.text-small Foreign exchange
                          td.pl-4.text-small Moneda extranjera
                        tr.bg-gris
                          td.py-3.pl-4.text-small Transfer
                          td.pl-4.text-small Transferencia
                        tr
                          td.py-3.pl-4.text-small Equipment hire
                          td.pl-4.text-small Alquier de equipo
            ModalA(:abrir-modal.sync="modalA1")
              .row.mt-5
                .col-4.offset-4
                  .tabla-a.color-acento-contenido.mt-3(style="overflow-x:hidden;") 
                    table
                      thead(style="border: none")
                        tr.bg-amarillo
                          th
                            figure
                              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos").w-15.margin-0-auto 
                          th
                            figure
                              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos").w-15.margin-0-auto
                      tbody
                        tr.bg-gris
                          td.py-3.pl-4.text-small Hotel
                          td.pl-4.text-small Hotel    
                        tr
                          td.py-3.pl-4.text-small Inn
                          td.pl-4.text-small Posada
                        tr.bg-gris
                          td.py-3.pl-4.text-small Villa
                          td.pl-4.text-small Villa
                        tr
                          td.py-3.pl-4.text-small Lodge
                          td.pl-4.text-small Albergue / Hostería
            ModalA(:abrir-modal.sync="modalV")
              .row.mt-5
                .col-4.offset-4
                  .tabla-a.color-acento-contenido.mt-3(style="overflow-x:hidden;") 
                    table
                      thead(style="border: none")
                        tr.bg-amarillo
                          th
                            figure
                              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos").w-15.margin-0-auto 
                          th
                            figure
                              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos").w-15.margin-0-auto
                      tbody
                        tr.bg-gris
                          td.py-3.pl-4.text-small Charter flight
                          td.pl-4.text-small Vuelo Chárter    
                        tr
                          td.py-3.pl-4.text-small Luxury car
                          td.pl-4.text-small Auto de lujo
                        tr.bg-gris
                          td.py-3.pl-4.text-small Scheduled flight
                          td.pl-4.text-small Vuelo programado
          .col-4.fondo-img-3.mt-5
    separador
    .titulo-segundo.mt-5
      #t_2_5.h2 2.5  Geographical locations  // Características
    figure.mt-5
      img(src="@/assets/template/tema-2-62.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-7
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic The geographical location is the identification of a specific place on the planet using various tools such as maps, compasses, coordinates, or geolocation systems. 
            p.mt-3.italic In the accommodation service, it is important to know the location of the establishment and the specific places that guests may need to access. Therefore, it is important to keep that in mind and guide them in case of being.
            p.mt-3.italic Colombia is a land of diversity, from Los Andes to the Amazon, it has a place for everyone.
            p.mt-3.italic Colombia can be divided into six geographic regions: the Caribbean coast, the Pacific coast, Los Andes Mountains, Orinoquia, the Amazon rainforest, and the Islands.
            p.mt-3.italic  Each region offers its own activities, it is important to know the highlights of each of them.
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p La ubicación geográfica es la identificación de un lugar específico del planeta, mediante el uso de diversas herramientas como mapas, brújulas, coordenadas o sistemas de geolocalización.
            p.mt-3 En el servicio de alojamiento, es importante tener conocimiento de la ubicación del establecimiento y los lugares específicos que los huéspedes pueden necesitar acceder. Por lo tanto, es importante tenerlo presente y orientarlos en caso de ser requerido.
            p.mt-3 Colombia es una tierra diversa, desde Los Andes hasta el Amazonas, existe un lugar para cada persona. 
            p.mt-3 Colombia se puede dividir en seis regiones geográficas: la costa Caribe, la costa Pacífica, la Cordillera de Los Andes, Orinoquia, la selva amazónica y la zona insular. 
            p.mt-3 Cada región ofrece sus propias actividades, es importante conocer los aspectos más destacados de cada una de ellas.
      .col-5.align-left-center
        figure
          img(src="@/assets/template/tema-2-58.svg", alt="Texto que describa la imagen")
    .row.mt-5 
      .row.mb-5.text-center
        .col-sm-6.col-lg-2.tarjeta-flip-tema-2.p-1.text-center
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-3.bg-naranja               
                .row    
                  figure
                    img(src="@/assets/template/tema-2-59.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Food and drink
                    p.italic.text-small bars / restaurants / takeaways / local specialities
              .tarjeta-flip__contenido.p-3.bg-rojo-claro
                .row    
                  figure
                    img(src="@/assets/template/tema-2-59.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Comidas y bebidas
                    p.italic.text-small bares / restaurantes / comida para llevar / especialidades locales
        .col-sm-6.col-lg-2.tarjeta-flip-tema-2.p-1
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-3.bg-naranja               
                .row    
                  figure
                    img(src="@/assets/template/tema-2-60.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Sightseeing
                    p.italic.text-small museums / galleries historic monuments  parks / gardens 
              .tarjeta-flip__contenido.p-3.bg-rojo-claro
                .row    
                  figure
                    img(src="@/assets/template/tema-2-60.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.text-small Turismo  
                    p.text-small museos / galerías monumentos históricos / parques / jardines
        .col-sm-6.col-lg-2.tarjeta-flip-tema-2.p-1
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-3.bg-naranja               
                .row    
                  figure
                    img(src="@/assets/template/tema-2-61.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Entertainment
                    p.italic.text-small discos / nightclubs / shows / festivals / concerts / funfairs
              .tarjeta-flip__contenido.p-3.bg-rojo-claro
                .row    
                  figure
                    img(src="@/assets/template/tema-2-61.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.text-small Entretenimiento
                    p.text-small discotecas / clubes nocturnos / espectáculos / festivales / salas de conciertos / ferias
        .col-sm-6.col-lg-2.tarjeta-flip-tema-2.p-1
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-3.bg-naranja               
                .row    
                  figure
                    img(src="@/assets/template/tema-2-62.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Climate
                    p.italic.text-small seasons, temperature, and rainfall
              .tarjeta-flip__contenido.p-3.bg-rojo-claro
                .row    
                  figure
                    img(src="@/assets/template/tema-2-62.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.text-small Clima
                    p.text-small estaciones / temperatura / precipitaciones
        .col-sm-6.col-lg-2.tarjeta-flip-tema-2.p-1
          .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.p-3.bg-naranja               
                .row    
                  figure
                    img(src="@/assets/template/tema-2-63.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    .h4.italic.text-small Getting around
                    p.italic.text-small metro / trains  bus services
              .tarjeta-flip__contenido.p-3.bg-rojo-claro
                .row    
                  figure
                    img(src="@/assets/template/tema-2-63.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3
                  .col-12.bg-naranja-claro.position-relative.px-3.pt-2.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    .h4.text-small   Desplazamiento servicios
                    p.text-small metro / trenes autobús
        

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modalP: false,
    modalH: false,
    modalA1: false,
    modalV: false,
    indicadorTarjetaFlip: true,
    datosSlyder: [
      {
        titulo: 'Hostel // Hostel',
        texto:
          'This type of accommodation is featured by providing shared spaces at low cost, where guests can rent a bed, usually a bunk bed in a bedroom, with shared use of the bathroom, kitchen, and social areas. <br> <br> Este tipo de alojamiento se caracteriza por brindar espacios compartidos a bajo costo y donde los huéspedes pueden alquilar una cama, generalmente una litera en un dormitorio, con uso compartido de baño, cocina y áreas sociales. ',
        imagen: require('@/assets/template/tema-2-43.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Aparthotel // Aparta Hotel ',
        texto:
          'An aparthotel is a type of housing unit (apartments) with full kitchen and furnishing, but with limited services and staff, which operates with a reservation system in the same way as a hotel. It is focused on long stays.<br><br>Un apartotel es un tipo de unidad habitacional (apartamentos) con cocina y amoblamiento completo, pero con servicios y personal limitados, que opera con un sistema de reservas similar a un hotel. Está enfocado en largas estadías.',
        imagen: require('@/assets/template/tema-2-44.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Lodge // Cabaña',
        texto:
          'A lodge is a small house or cottage in the vicinity of a park, in a natural environment. Originally, it is a place of rest, a refuge, for hunters, fishermen, or sportsmen. Now, applied to the hotel industry, it should be a small place, built permanently (with walls), local materials, minimal environmental impact, committed to the local culture and offering the guest everything they need for their rest while performing one of these practices. Here it is known as Rural Accommodation.<br><br>Un lodge es una pequeña casa o cabaña en las cercanías de un parque, en un entorno natural. Originalmente, es un lugar de descanso, un refugio, para cazadores, pescadores, deportistas. Ahora, aplicado a la hotelería, debe ser un lugar pequeño, construido de manera permanente (con muros), materiales locales, mínimo impacto ambiental, comprometido con la cultura local y que ofrece al huésped todo lo que necesita para su descanso mientras realiza una de estas prácticas. Aquí es conocido como Alojamiento Rural. ',
        imagen: require('@/assets/template/tema-2-45.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hotel // Hotel',
        texto:
          'A hotel is a building planned and equipped to provide lodging services that are generally reserved in advance. Services in addition to lodging include restaurants, swimming pools, stores, spa and day care centers. <br><br>Un hotel es un edificio planificado y acondicionado para atender los servicios de alojamiento que generalmente se reservan con antelación. Entre los servicios adicionales al alojamiento, se encuentran restaurantes, piscinas, tiendas, spas y guarderías. ',
        imagen: require('@/assets/template/tema-2-46.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Camping // Acampar',
        texto:
          'Campsites are outdoor places, with a basic conditioning to cater people who make use of them in exchange for a set amount of money. Usually, these spaces have facilities such as bathrooms, bar, restaurant, or social area. <br><br>Los campings son lugares al aire libre, con un acondicionamiento básico para atender a las personas que hacen uso de ellos a cambio de una cantidad fija de dinero. Por lo general, estos espacios tienen instalaciones como baños, bar, restaurante o área social.',
        imagen: require('@/assets/template/tema-2-47.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Glamping // Glamping',
        texto:
          'Glamping is a globally growing trend, that combines the experience of outdoor camping with the luxury and conditions of the best hotels. The term was invented at the end of the prior century as a fusion of the words glamour and camping. <br><br>Es una tendencia creciente a nivel mundial, que combina la experiencia de acampar al aire libre con el lujo y las condiciones de los mejores hoteles. El término fue inventado a finales del siglo anterior como una fusión de las palabras glamour y camping.',
        imagen: require('@/assets/template/tema-2-48.png'),
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
