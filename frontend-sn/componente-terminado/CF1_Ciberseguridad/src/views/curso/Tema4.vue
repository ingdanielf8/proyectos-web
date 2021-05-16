<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 4. La identificación de los activos 
    .row.mt-5
      .col-12.align-end
        .titulo-segundo
          #t_4_1.h4 4.1 Tipos de activos
        p.mt-3 Los activos los podemos separar en dos grandes grupos: tangibles e intangibles. Los activos tangibles son aquellos activos materiales que contienen información, y sobre los que tomaremos medidas preventivas para protegerlos principalmente de riesgos físicos: golpes, agua, fuego, etc. Los activos intangibles son aquellos que soportan la información dentro de un activo material, y pueden inutilizar la información, pese a que el activo físico no haya sufrido daño alguno. 
    .row.mt-5
      .col-12.col-lg-7.align-end
        .h4 4.1.1 Activos tangibles o materiales 
    .row.mt-3
      .col-12.col-md-4
        p.text-center A continuación, se mencionan algunos ejemplos de los tipos de activos considerados como tangibles: 
        img(src='@/assets/template/tema-4-1.svg', alt='').mt-2.d-none.d-md-flex
      
      .col-12.col-md-8
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Equipos informáticos")
            .col-12
              p Cada vez son más los equipos informáticos presentes en las empresas, y pese a no contener información crítica en su interior, sí que tienen acceso a servidores y redes que sí la poseen.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Servidores físicos")
            .col-12
              p Los servidores propios donde guardamos todos los documentos de la organización o donde se encuentran las aplicaciones informáticas compartidas (ERP, CRM...), y los externos donde alojamos nuestros servicios web y de correo electrónico, suelen ser los activos más críticos dentro de un sistema de gestión de seguridad de la información.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Equipos red local")
            .col-12
              p Nuestros equipos informáticos están conectados entre sí por medio de redes inalámbricas o cableadas. Las cuales pueden ser cortadas, obstruidas o interceptadas por atacantes cibernéticos.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Periféricos y pendrives")
            .col-12
              p Hay que tener un especial cuidado con escáneres e impresoras donde se deja información impresa olvidada con frecuencia. Los pendrives, CDs, DVDs... suelen perderse con facilidad o quedar olvidados por los cajones con información muy sensible.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Portátiles, tabletas y móviles")
            .col-12
              p En esta categoría se incluyen todos aquellos dispositivos electrónicos que salen de nuestras instalaciones habitualmente. Sea por visitas comerciales, porque el trabajador se lo lleva a casa después del trabajo, o se ceden temporalmente a terceros.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Oficinas e instalaciones")
            .col-12
              p Las oficinas, los edificios, casas, bodegas industriales, entre otros que contienen los ordenadores, los servidores físicos, los archivadores, la documentación en papel. Por lo que deben ser consideradas como un activo material más, que deberemos proteger.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Personal propio")
            .col-12
              p Cada una de las personas que trabajan en la organización, tienen información del negocio en su cabeza, conocimientos del proceso productivo, salarios, contactos de proveedores y clientes, entre otro tipo de información, dependiendo del puesto que ocupe el trabajador, ésta será más o menos sensible.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Otros contenedores")
            .col-12
              p Armarios RF, cajas fuertes, archivadores, estanterías, salas refrigeradas para servidores, cuartos de archivo, entre otros, son activos físicos que podemos tener en nuestra organización, y deberemos identificar.
    .row.mt-5
      .col-12.col-lg-7.align-end
        .h4 4.1.2 Activos intangibles
    
    .row.mt-5
      .col-12.col-md-4
        p.text-center Entre otros, los siguientes son ejemplos de activos intangibles que puede poseer cualquier organización: 
        img(src='@/assets/template/tema-4-2.svg', alt='').mt-2.d-none.d-md-flex
      
      .col-12.col-md-8
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Aplicaciones informáticas")
            .col-12
              p cualquier software que contenga o gestione información del negocio, será un activo: el ERP, aplicaciones de contabilidad, el CRM, aplicaciones ofimáticas (Word, Excel, PowerPoint), software de control de calidad, aplicaciones de gestión de proyectos o producción, software de nómina, entre otros.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Gestores de copias de seguridad")
            .col-12
              p las aplicaciones de creación y restauración de copias de seguridad se tratan como herramientas diferentes a las anteriores, dado que se debe garantizar su disponibilidad en el caso de caída grave del resto de sistemas.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Sistemas operativos")
            .col-12
              p dado que soportan el resto de aplicaciones informáticas y que son uno de los principales objetivos de los virus informáticos, los gestionaremos de manera especial al resto del software.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Comunicaciones")
            .col-12
              p las comunicaciones con el exterior también son críticas ante una situación de emergencia, por lo que se tratarán de forma diferente: los servicios telefónicos, el acceso a internet y los servidores de correo electrónico.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Gestores de bases de datos")
            .col-12
              p el mal funcionamiento de una aplicación puede suponer una pérdida de accesibilidad de la información durante un tiempo determinado. Pero la caída del gestor de bases de datos que hay detrás, puede generar la pérdida de una parte del contenido o su totalidad. Por lo que requiere de un cuidado más exigente y delicado.
        AcordionA.mb-0(clase-tarjeta="tarjeta tarjeta-").borde-y-punteado.mb-0
          .row(titulo="Suministros")
            .col-12
              p la pérdida de suministro eléctrico durante un espacio de tiempo prolongado, puede suponer la caída de los sistemas de información de la organización. Por lo que deberemos tener alternativas a nuestro proveedor habitual de estos servicios.
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped>
.borde-y-punteado
  border-top: solid
  border-top: dotted
</style>
