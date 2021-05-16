<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 5. Actividades para realizar el inventario de activos 
    p.mt-5 De acuerdo a la norma #[strong ISO 27001] sobre la cual basamos el desarrollo de este componente formativo las siguientes son las actividades que deben de ejecutarse en el proceso de control de los activos informáticos.
    .row.mt-5
      .col-12.align-end
        .titulo-segundo
          #t_5_1.h4 5.1 Inventario de activos
        p.mt-4 Todos los activos deben estar claramente identificados y la entidad debe elaborar y mantener un inventario de los mismos, las siguientes son algunas pautas que podemos aplicar para la realización de esta actividad.
    .row.mt-5
      .tarjeta--container.row
        .row
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.offset-xl-2.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-1.svg', alt='').w-50
            p.text-center Identifique los servicios tanto internos como externos de la organización.
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-2.svg', alt='').w-50
            p.text-center ¿Qué información necesita para desarrollar los servicios?
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #FFC23B, #80611E);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-3.svg', alt='').w-50
            p.text-center ¿Qué infraestructura está involucrada en la prestación de los servicios?
      .tarjeta--container.row
        .row
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.offset-xl-2.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #193540, #050B0D);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-4.svg', alt='').w-50
            p.text-center Hardware, por ejemplo, computadoras portátiles, servidores, impresoras, pero también teléfonos móviles o memorias USB.
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-5.svg', alt='').w-50
            p.text-center Infraestructura: oficinas, electricidad, aire acondicionado etc.
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #193540, #050B0D);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-6.svg', alt='').w-50
            p.text-center ¿Aplicaciones software están involucradas en la prestación de los servicios? No solo el software comprado, sino también el gratuito y el desarrollado in house.
      .tarjeta--container.row
        .row
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.offset-xl-2.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #FFC23B, #80611E);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-7.svg', alt='').w-50
            p.text-center Identifique las actividades subcontratadas: servicios legales, servicios de limpieza,  servicios en la nube, servicios de correo, entre otros.
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-8.svg', alt='').w-50
            p.text-center Identifique las personas de las que dependen los servicios. Considere qué tipo de información relevante para el negocio se puede encontrar solo en “las cabezas” de ciertas personas y que a menudo no está disponible en otras formas.
          .col-8.col-md-4.col-xl-3.offset-2.offset-md-0.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
            .row.justify-content-center.mb-4
              .col-5.col-md-9.col-lg-6.col-xl-8.offset-3
                figure
                  img(src='@/assets/template/tema-5-9.svg', alt='').w-50
            p.text-center Determine los medios por los que se transmite la información.
      .tarjeta--container.row
        .row
          .col-8.col-md-9.offset-2.tarjeta.tarjeta--morada.p-3.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
            .row
              .col-3.col-md-2.col-lg-2.col-xl-1.mx-lg-5.align-self-center.offset-5.offset-md-0
                figure
                  img(src='@/assets/template/tema-5-10.svg', alt='').w-100
              .col.col-xl-9.align-self-center.mt-3.mt-md-0.px-4  
                p.text-center Identifique los soportes en los que se encuentra la información: no solo en soportes electrónicos como bases de datos, archivos en PDF, Word, Excel y otros formatos, sino también en papel y otras formas.
    .row.mt-5
      .col-12.align-end
        .titulo-segundo
          #t_5_2.h4 5.2 Propiedad de los activos
        p.mt-4 Los activos de información del inventario deben tener un propietario o responsable. Se recomienda establecer una tabla que permita determinar claramente la siguiente información:
    .row.mt-4
      .tarjeta--container.row.mb-5
        .col-6.col-xl-3.tarjeta.tarjeta--morada.p-2.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
          .row.justify-content-center.mb-4
            .col-5.col-md-4.mt-3
              figure
                img(src='@/assets/template/tema-5-11.svg', alt='').w-100
            
          h5.text-center Nombre del proceso

        .col-6.col-xl-3.tarjeta.tarjeta--amarilla.p-2.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
          .row.justify-content-center.mb-4
            .col-5.col-md-4.mt-3
              figure
                img(src='@/assets/template/tema-5-12.svg', alt='')
            
          h5.text-white.text-center Dueño o propietario del proceso 
          
        .col-6.col-xl-3.tarjeta.tarjeta--roja.p-2.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
          .row.justify-content-center.mb-4
            .col-5.col-md-4.mt-3
              figure
                img(src='@/assets/template/tema-5-13.svg', alt='')
            
          h5.text-center  Nombre del activo

        .col-6.col-xl-3.tarjeta.tarjeta--roja.p-2.borde-blanco(style="background: linear-gradient(70deg, #FFC23B, #80611E);")
          .row.justify-content-center.mb-4
            .col-5.col-md-4.mt-3
              figure
                img(src='@/assets/template/tema-5-14.svg', alt='')
            
          h5.text-center Descripción del activo
    .row.mt-5
      .col-12.align-end
        .titulo-segundo
          #t_5_3.h4 5.3 Clasificación de la Información
        p.mt-4 La información se debería clasificar en función de los requisitos legales, valor, criticidad y susceptibilidad a divulgación o a modificación no autorizada, El sistema de clasificación definido se basa en la confidencialidad como principio rector en la selección e incluye el tratamiento de la información en cuanto a la confidencialidad, la integridad y la disponibilidad de cada activo.
      .col-8.offset-2.mt-4
        h6.text-center En esta parte se debe agregar a la tabla ya existente de propiedad de los activos la siguiente información:
    .row.mt-2
      .col-md-6.col-lg-4.d-none.d-md-flex.offset-lg-2
        img(src='@/assets/template/tema-5-15.svg', alt='')
      .col-10.col-md-6.col-lg-4.offset-1.offset-md-0
        p #[strong.texto-c 1.] Tipo de activo de información / Medio
        p.mt-1 #[strong.texto-c 2.] Copia impresa, archivo electrónico: especificar tipo.
        p.mt-1 #[strong.texto-c 3.] Medio / dispositivo extraíble: especificar tipo.
        p.mt-1 #[strong.texto-c 4.] ¿Contiene datos personales?
        p.mt-1 #[strong.texto-c 5.] ¿Contiene datos personales Sensibles?
        p.mt-1 #[strong.texto-c 6.] Confidencialidad (Alta – Media – Baja).
        p.mt-1 #[strong.texto-c 7.] Disponibilidad (Alta – Media – Baja).
        p.mt-1 #[strong.texto-c 8.] Integridad (Alta – Media – Baja).
    .row.mt-3
      .col-12
        p En esta parte para realizar una correcta clasificación de activos según la confidencialidad, integridad y disponibilidad se recomienda la utilización de las siguientes tablas.
        p.mt-4 La confidencialidad se refiere a que la información no esté disponible ni sea revelada a individuos, entidades o procesos no autorizados, esta se debe definir de acuerdo con las características de los activos que se manejan en cada entidad.
      .col-8.offset-2.mt-4
          h6.text-center Tabla 1: Clasificación de acuerdo con la confidencialidad
    .row.mt-2
      .col-12
        .row
          .col-3.col-md-2.offset-2(style="background-color: #BD4343").p-2
            p.text-white.text-center #[strong Confidencial]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Acceso restringido a la alta dirección
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #FFC23B").p-2
            p.text-black.text-center #[strong Restringido]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Directores de área y empleados clave tienen acceso.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #31924B").p-3.p-xl-2.align-self-center
            p.text-white.text-center #[strong Interno]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Relativo a la información accesible solo los miembros de la organización, pero en cualquier nivel.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #31924B").p-3.p-xl-2.align-self-center
            p.text-white.text-center #[strong Público]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Todas las personas, dentro y fuera de la organización, tienen acceso.
    .row.mt-4
      .col-12
        p Para la integridad se refiere a la exactitud y completitud de la información (ISO 27000) esta propiedad es la que permite que la información sea precisa, coherente y completa desde su creación hasta su destrucción. Se recomienda el siguiente esquema de clasificación de tres (3) niveles:
      .col-8.offset-2.mt-4
          h6.text-center Tabla 2: Clasificación de acuerdo a la Integridad
    .row.mt-2
      .col-12
        .row
          .col-3.col-md-2.offset-2(style="background-color: #BD4343").p-2
            p.text-white.text-center.mt-lg-2.mt-md-4 #[strong A]
            p.text-white.text-center #[strong (Alta)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud puede conllevar un impacto negativo de índole legal o económica, retrasar sus funciones, o generar pérdidas de imagen severas de la entidad.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #FFC23B").p-2
            p.text-black.text-center.mt-lg-2.mt-md-4 #[strong M]
            p.text-black.text-center #[strong (Media)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud puede conllevar un impacto negativo de índole legal o económica, retrasar sus funciones, o generar pérdida de imagen moderado a funcionarios de la entidad.  
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #31924B").p-3.p-xl-2.align-self-center
            p.text-white.text-center #[strong B]
            p.text-white.text-center #[strong (Baja)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud conlleva un impacto no significativo para la entidad o entes externos.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #BD4343").p-3.p-xl-2
            p.text-white.text-center.mt-lg-4.mt-md-5 #[strong No clasificado]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Activos de Información que deben ser incluidos en el inventario y que aún no han sido clasificados, deben ser tratados como activos de información de integridad ALTA.
    .row.mt-4
      .col-12
        p La disponibilidad es la propiedad de la información que se refiere a que ésta debe ser accesible y utilizable por solicitud de una persona entidad o proceso autorizada cuando así lo requiera está, en el momento y en la forma que se requiere ahora y en el futuro, al igual que los recursos necesarios para su uso. 
      .col-8.offset-2.mt-4
          h6.text-center Tabla 3: Clasificación de acuerdo a la disponibilidad
    .row.mt-2
      .col-12
        .row
          .col-3.col-md-2.offset-2(style="background-color: #BD4343").p-2
            p.text-white.text-center.mt-lg-2.mt-md-4 #[strong A]
            p.text-white.text-center #[strong (Alta)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud puede conllevar un impacto negativo de índole legal o económica, retrasar sus funciones, o generar pérdidas de imagen severas de la entidad.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #FFC23B").p-2
            p.text-black.text-center.mt-lg-2.mt-md-4 #[strong M]
            p.text-black.text-center #[strong (Media)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud puede conllevar un impacto negativo de índole legal o económica, retrasar sus funciones, o generar pérdida de imagen moderado a funcionarios de la entidad.  
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #31924B").p-3.p-xl-2.align-self-center
            p.text-white.text-center #[strong B]
            p.text-white.text-center #[strong (Baja)]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Información cuya pérdida de exactitud y completitud conlleva un impacto no significativo para la entidad o entes externos.
        .row.mt-1
          .col-3.col-md-2.offset-2(style="background-color: #BD4343").p-3.p-xl-2
            p.text-white.text-center.mt-lg-4.mt-md-5 #[strong No clasificado]
          .col-5.col-md-6.mx-1(style="border: solid 1px #A5BECB").align-self-center.p-2
            p Activos de Información que deben ser incluidos en el inventario y que aún no han sido clasificados, deben ser tratados como activos de información de integridad ALTA.
    .row.mt-5
      .col-12.align-end
        .titulo-segundo
          #t_5_4.h4 5.4 Etiquetado y manipulación de la información
        p.mt-3 Se debería desarrollar e implementar un conjunto adecuado de procedimientos para el etiquetado de la información, de acuerdo con el esquema de clasificación de información adoptado por la organización.
        p.mt-4 A continuación, se proponen una seria de ítems que podrían ser tenidos en cuenta para realizar este proceso y se deberían tener en cuenta las siguientes pautas generales:
    .row.mt-4
      .col-10.offset-1(style="border: solid 5px #9B235C;").rounded-15.shadow
        .col.p-4
          ul.lista-ul
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Se etiquetaron todos los Activos de Información que estén clasificados según el esquema clasificación en Confidencialidad, Integridad y disponibilidad.
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Se etiquetará el nivel de clasificación en relación a confidencialidad, integridad y disponibilidad.
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Si un Activo de Información en formato impreso no se encuentra etiquetado debe ser tratado en todos sus niveles (Confidencialidad, Integridad y Disponibilidad) como NO CLASIFICADA.
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Cada Activo de Información debe ser etiquetado teniendo en cuenta el esquema de clasificación, y en el campo correspondiente diligenciar la clasificación de la siguiente forma: {Clasif.Confidencialidad} - {Clasif.Integridad} - {Clasif.Disponibilidad}.
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Para los activos clasificados en confidencialidad se podría utilizar la etiqueta IC, IR, IP, ISC
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Para los activos clasificados en integridad como ALTA se utilizará la etiqueta A, MEDIA, M y BAJA, B.
            li.mb-0.py-3.borde-bot-punteado  
              i.fas.fa-angle-right
              | Para los activos clasificados en disponibilidad como ALTA se utilizará la etiqueta 1, MEDIA, 2 y BAJA, 3.
    .row.mt-4
      .col-11.offset-1
        p.text-center de esta manera se realizarán las combinaciones de acuerdo a los criterios de clasificación de la información.
    .row.mt-5
      .col-10.offset-1(style="background: linear-gradient(70deg, #9B235C, #131023);").rounded-15
        .row  
          .col-4.d-none.d-lg-flex
            img(src="@/assets/template/tema-5-16.svg", alt="alt").img-18.position-absolute
          .col-8.col-lg-4.py-4.text-center
            h3.mb-0.text-white Caso de estudio
          .col-4
            .row.align-items-center
              .col-sm-auto.mt-3.offset-lg-4
                a.boton.boton--ca.boton.boton--b(:href="obtenerLink('/downloads/estudio_de_caso_cf1.pdf')" target="_blank")
                  span Ver archivo >
                  i.fas.fa-file-download
            


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped>
.img-18
  width: 18%
  margin-top: -23px
</style>
