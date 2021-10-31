<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Hotel areas and facilities // Áreas e instalaciones del hotel
    .row.mt-5
      .col-9
        .row.exp
          .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
            figure.bandera-usa
              img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
            p.italic Within the configuration of their facilities, hotels have different areas, with furniture and appropriate amenities according to their use. See some examples.
          .col-12.position-relative.p-4.hover-bg-naranja.expandable2
            figure.bandera-esp
              img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
            p Los establecimientos están clasificados según cumplan los criterios de evaluación. La clasificación más conocida es la de estrellas, pero esta no es estándar, ya que usa criterios diferentes en cada país. En Colombia, por ejemplo, esos parámetros los determina la norma técnica NTSH006. 
      .col-3
        figure
          img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen").floating.w-75.margin-0-auto
    .row.mt-5
      .col-12.bg-rosado-claro.p-5
        .h4.mt-3 Private and Public Areas // Áreas públicas y privadas
        .row.mt-5
          .col-5
            .row.exp
              .col-12.bg-naranja.position-relative.p-5.italic.borde-bot-naranja.expandable
                figure.bandera-usa
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic The most important differentiation of a hotel structure is established by the areas for public use or intended for guests, and the areas for private use and in which services are prepared. Here is a list of some of them.
              .col-12.position-relative.p-4.hover-bg-naranja.expandable2
                figure.bandera-esp
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p La diferenciación más importante de una estructura hotelera se establece mediante las áreas de uso público, o destinadas a los huéspedes, y las áreas de uso privado, en las que se preparan los servicios. Esta es una lista de algunas de ellas
          .col-7
            figure
              img(src="@/assets/template/tema-3-2.svg", alt="Texto que describa la imagen").floating.mb-4
    .h4.mt-5 Public Areas // Áreas públicas
    .row.mt-5
      .col-12.bg-azul.px-4.pt-4
        .row
          .col-3
            .row.p-2.h-100              
              .col-12.m-0.bg-azul-claro-mas.salon.nav-holder.align-items-center(data-aos="flip-up")                  
                  figure.py-3
                    img(src="@/assets/template/tema-3-3.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                  .row.text-center.px-3
                    .col-12.bg-blanco.position-relative.p-3.italic
                      figure.bandera-usa
                        img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                      p.italic Lounge Business Center  
                    .col-12.position-relative.p-4
                      figure.bandera-esp
                        img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                      p Salón privado 
                    
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-6
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.piscina.nav-holder.align-items-center(data-aos="flip-up")    
                figure.py-3
                  img(src="@/assets/template/tema-3-4.svg", alt="Texto que describa la imagen").margin-0-auto(style="width:12%")
                .row.text-center.px-3
                  .col-8.offset-2.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Swimming Pool   
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Piscina 


        .row
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.bar.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-5.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Bar  
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Bar
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.event.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-6.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Event Venues  
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Salones para eventos  



        .row
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.balcony.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-7.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Balcony  
                  .col-12.position-relative.p-4
                    p Balcòn
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.bussiness.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-8.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Business Center    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Centro de negocios


        .row
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.elevator.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-9.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Elevator    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Ascensor
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.aisle.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-10.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Rooms Aisle    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Pasillo de habitaciones


        .row
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.sauna.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-11.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Sauna    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Sauna
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.gym.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-12.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Gym    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Gimnasio
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.spa.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-13.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Spa    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Spa
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.turkish.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-14.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Turkish Bath    
                  .col-12.position-relative.p-4.mb-3
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Baño Turco



        .row
          .col-6
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.rooms.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-15.svg", alt="Texto que describa la imagen").margin-0-auto(style="width:12%")
                .row.text-center.px-3
                  .col-8.offset-2.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Rooms   
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Habitación
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          

        .row
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.coffee.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-16.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Coffe-shop    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p  Cafetería
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.children.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-17.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Children facilities      
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Instalaciones para niños 


        .row
          .col-3
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.bathroom.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-18.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Bathrooms  
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Baños 
          .col-3
            .row.p-2.h-100
              .col-12.bg-azul-claro-mas.p-0
                figure
                  img(src="@/assets/template/tema-3-fondo-azul.svg", alt="Texto que describa la imagen")
          .col-6
            .row.p-2.h-100
              .col-12.m-0.bg-azul-claro-mas.restaurant.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-19.svg", alt="Texto que describa la imagen").margin-0-auto(style="width:12%")
                .row.text-center.px-3
                  .col-8.offset-2.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Restaurant   
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Restaurante

        .row.mt-4
          .col-3
            .row.px-2.pt-2.h-100
              .col-12.m-0.bg-azul-claro-mas.lobby.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-20.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Lobby  
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Vestíbulo
          .col-6
            .row.px-2.pt-2.h-100
              .col-12.m-0.bg-azul-claro-mas.main.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-21.svg", alt="Texto que describa la imagen").margin-0-auto(style="width:12%")
                .row.text-center.px-3
                  .col-8.offset-2.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Main access    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Acceso principal
          
          .col-3
            .row.px-2.pt-2.h-100
              .col-12.m-0.bg-azul-claro-mas.front.nav-holder.align-items-center(data-aos="flip-up") 
                figure.py-3
                  img(src="@/assets/template/tema-3-21.svg", alt="Texto que describa la imagen").w-25.margin-0-auto
                .row.text-center.px-3
                  .col-12.bg-blanco.position-relative.p-3.italic
                    figure.bandera-usa
                      img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                    p.italic Front Desk    
                  .col-12.position-relative.p-4
                    figure.bandera-esp
                      img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                    p Mostrador
        figure
          img(src="@/assets/template/tema-3-43.svg", alt="Texto que describa la imagen")


    .h4.mt-5 Services // Servicios
    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-44.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic 24-hour Front Desk     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Recepción 24 horas 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-45.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Bellboy     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Botones 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-46.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Wheelchair access     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Acceso en silla de ruedas 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-47.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Credit cards accepted      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Tarjetas de crédito aceptadas

    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-48.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Pet friendly     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Pet friendly
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-49.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Bellboy     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Botones 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-50.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Wheelchair access     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Acceso en silla de ruedas 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-51.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Credit cards accepted      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Tarjetas de crédito aceptadas

    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-52.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Concierge service     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Servicio de conserjería
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-53.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Security     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Seguridad 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-54.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Satellite TV     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Televisión satelital
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.rounded-15.box-shadow.py-5
            figure
              img(src="@/assets/template/tema-3-55.svg", alt="Texto que describa la imagen").w-50.margin-0-auto.mb-3.px-4
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Wi-Fi free access      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p Wifi gratuito


    .h4.mt-5 Furniture // Muebles
    ImagenInfografica.color-acento-botones.mt-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/tema-3-56.png', alt='Texto que describa la imagen')

      .tarjeta(x="32%" y="36%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-57.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Ceiling Lamps      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Lámparas de techo
      .tarjeta(x="14%" y="45%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-58.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Art      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Arte

      .tarjeta(x="77%" y="28%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-59.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Mirror      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Espejo
      
      .tarjeta(x="53%" y="63%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-60.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Bed linen       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Ropa de cama
      .tarjeta(x="46%" y="66%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-61.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Mattress       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p  Colchón
      .tarjeta(x="59%" y="43%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-62.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Curtain       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p  Cortinas
      .tarjeta(x="37%" y="60%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-63.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Pillows       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Almohadas
      .tarjeta(x="35%" y="55%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-64.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Headboard       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Cabecera
      .tarjeta(x="28%" y="57%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-65.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Lamps       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Lámparas
      .tarjeta(x="22%" y="67%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-66.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Decoration       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Decoración
      .tarjeta(x="33%" y="68%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-67.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Desk       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Escritorio
      .tarjeta(x="18%" y="90%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-68.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Desk chair        
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Silla de escritorio 
      .tarjeta(x="50%" y="75%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-69.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Bed         
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Cama 

    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-70.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Hangers     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Pecheras
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-71.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Rug     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Tapete  
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-72.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Rollaway Desk     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Cama plegable 
      .col-lg-3
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-73.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-4
                .col-12.bg-rosado-claro.position-relative.p-3.italic
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Cribs     
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Cunas

    .h4.mt-5 Furniture // Muebles
    ImagenInfografica.color-acento-botones.mt-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/template/tema-3-74.png', alt='Texto que describa la imagen')

      .tarjeta(x="37.5%" y="45%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-75.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Glass      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Vidrio
      .tarjeta(x="1%" y="56%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-76.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic TV Wall Mount      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Soporte de pared para TV
      .tarjeta(x="16%" y="67%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-77.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic TV      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Televisor
      .tarjeta(x="26%" y="62%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-78.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Coffee tray      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Bandeja de café
      .tarjeta(x="29%" y="57%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-79.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Coffee Maker      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Cafetera 
      .tarjeta(x="32%" y="60%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-80.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Coffee cup      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Taza de café
      .tarjeta(x="81%" y="74%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-81.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Alarm clock radior      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Radio reloj despertado
      .tarjeta(x="86%" y="72.5%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-82.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Art      
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p 
      .tarjeta(x="32%" y="78%")
        .row.borde-morado-3.rounded-15
          .col-3.px-0.rounded-15
            figure
              img(src="@/assets/template/tema-3-83.png", alt="Texto que describa la imagen")
          .col-9.bg-blanco.px-0.rounded-15-right
            .row.text-center.pt-4
              .col-10.bg-rosado-claro.position-relative.p-1.italic.offset-1
                figure.bandera-usa(style="width:8%")
                  img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                p.italic Fridge       
              .col-10.position-relative.p-2.offset-1
                figure.bandera-esp(style="width:7%")
                  img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                p Nevera
      
    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-84.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Ashtray      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Cenicero
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-85.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Ice Bucket      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Cubeta de hielo  
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-86.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Telephone    
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Teléfono 
      
    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-87.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Ironing Board      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Tabla de planchar
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-88.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Stream iron      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Plancha a vapor  
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-89.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Room safe    
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Caja fuerte en la habitación 

    .row.justify-content-center(data-aos="fade-down").mt-4
      .col-lg-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.bg-azul-claro.align-items-center.rounded-15.box-shadow.px-0
            figure
              img(src="@/assets/template/tema-3-87.png", alt="Texto que describa la imagen")
            .text.p-lg-3.p-4
              .row.text-center.px-3.pt-5
                .col-12.bg-rosado-claro.position-relative.p-3.italic.mt-3
                  figure.bandera-usa(style="width:8%")
                    img(src="@/assets/template/bandera-usa.png" alt="bandera de Estados Unidos")
                  p.italic Remote control      
                .col-12.position-relative.p-4
                  figure.bandera-esp(style="width:7%")
                    img(src="@/assets/template/bandera-esp.png" alt="bandera de Estados Unidos")
                  p.text-white Control remoto



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

<style lang="sass" scoped>
.nav-holder
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder *, .nav-holder *:before, .nav-holder *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFD494
  opacity: 1
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease
  border-radius: 16px

.nav-holder:before
  -webkit-transform: translateY(100%)
  -moz-transform: translateY(100%)
  transform: translateY(100%)

.nav-holder:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 1
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s

.nav-holder
  .text
    position: absolute
    top: 70%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder .h4
  margin: 0
  opacity: 1

.nav-holder:hover
  .text
    top: 0%
    display: flex
    flex-direction: column
    flex-wrap: nowrap
    justify-content: center
  h4, p
    opacity: 1;
    -webkit-transition-delay: 0.2s
    -moz-transition-delay: 0.2s
    transition-delay: 0.2s


.nav-holder2
  display: inline-block
  margin: 10px 5px
  overflow: hidden
  position: relative
  -webkit-transform: translateZ(0)
  -moz-transform: translateZ(0)
  transform: translateZ(0)

.nav-holder2 *, .nav-holder2 *:before, .nav-holder2 *:after
  -webkit-box-sizing: border-box
  -moz-box-sizing: border-box
  box-sizing: border-box
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2:before
  position: absolute
  top: 0
  bottom: 0
  left: 0
  right: 0
  content: ''
  background-color: #FFB74D
  opacity: 0.8
  z-index: 888
  -webkit-transition: all 0.45s ease
  -moz-transition: all 0.45s ease
  -ms-transition: all 0.45s ease
  transition: all 0.45s ease

.nav-holder2.bg-azul-claro:before
  background-color: #2E129D80 !important

.nav-holder2:before
  -webkit-transform: translateY(85%)
  -moz-transform: translateY(85%)
  transform: translateY(85%)

.nav-holder2:hover:before
  -webkit-transform: translateY(0)
  -moz-transform: translateY(0)
  transform: translateY(0)
  opacity: 0.9
  -webkit-transition-delay: 0.1s
  -moz-transition-delay: 0.1s
  transition-delay: 0.1s
  border-top-left-radius: 14px
  border-top-right-radius: 14px

.nav-holder2
  .text
    position: absolute
    top: 83%
    bottom: 0px
    left: 0px
    right: 0px
    z-index: 999
    bottom: 0
    padding: 1em
  img
    backface-visibility: hidden
    max-width: 100%
    vertical-align: top
    z-index: 0
  p
    margin: 0
    opacity: 0
    line-height: 1.2em

.nav-holder2 .h4
  margin: 0
  opacity: 1

.nav-holder2:hover
  .text
    top: 5%
  h4, p
    color: #12263F
    opacity: 1
</style>
