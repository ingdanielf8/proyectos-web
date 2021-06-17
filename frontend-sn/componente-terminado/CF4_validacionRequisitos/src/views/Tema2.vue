<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.title-num 2
      .h3 Requerimientos duraderos y volátiles
    figure.mb-5
      img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen")
    p.mt-5 Los requerimientos de un proyecto inevitablemente sufren variaciones en el tiempo y puede ser por varios motivos entre los que se podrían destacar cambios en las políticas gubernamentales, sociales, económicas o, sencillamente, por solicitudes de los clientes.
    p.mt-4 Según Sommerville (2011), dependiendo de la perspectiva evolutiva de los requerimientos estos se pueden clasificar en dos grupos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--amarilla").mt-4
      .row(titulo="Requerimientos duraderos: ").px-5.mx-2
          p.mt-4 Requerimientos duraderos: son relativamente estables y normalmente se derivan de las actividades principales de la organización y están directamente relacionados con el dominio del sistema (Easterbrook, 1993). Por ejemplo, en un sistema académico los requerimientos relacionados con la gestión de estudiantes, profesores y grupos hacen parte del dominio y, seguramente, el modelo de negocio asociado a estos requerimientos no van a cambiar mucho en el tiempo.

      .row(titulo="Modelo espiral.").px-5.mx-2
        p.mt-4 Requerimientos volátiles: son los que, muy probablemente, cambian durante el proceso del desarrollo del sistema o después que este entra en funcionamiento. Por ejemplo, en un sistema académico un requerimiento asociado al proceso de pago de pensión podría definirse de forma manual en un principio; es decir, la secretaría una vez reciba el dinero o los recibos de pago registra en el pago en el sistema, más adelante si la institución educativa adquiere un servicio de pasarela de pagos en línea el requerimiento podía modificarse totalmente.
        p.mt-4 Los requerimientos volátiles según Sommerville (2011) se clasifican en:
        p ● Requerimientos cambiantes: cambian de acuerdo con el entorno, por ejemplo: una pandemia.
        p ● Requerimientos emergentes: surgen como producto de un mejor entendimiento del sistema, por ejemplo, al estructurar el diseño de las interfaces del sistema pueden ser que se requieran adicionar componentes que no estaban contemplados.
        p ● Requerimientos consecuentes: son resultado de la puesta en marcha de un sistema. Generalmente la adopción de un nuevo sistema involucra el cambio de procesos e incluso roles dentro de la organización que, a la vez, puede influir en cambios en los requerimientos del sistema.
        p ● Requerimientos de compatibilidad: dependen de otros sistemas o procesos, cuando estos cambian generalmente producen también cambios en los requerimientos dependientes.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.tarjeta--amarilla
  background-color: black
</style>
