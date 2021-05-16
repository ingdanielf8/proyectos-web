<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 2. Seguridad de la información
    
    .row
      .col-12.col-lg-7.align-center
        .titulo-segundo
          #t_2_1.h4 2.1 Generalidades
        p.mt-3 El concepto de seguridad de la información significa proteger la información y los sistemas de información de un acceso, uso, divulgación, alteración, modificación, lectura, inspección, registro o destrucción no autorizados. Soriano, M. (2014).
        p.mt-3 Si bien son complementarias se debe diferenciar los conceptos de seguridad de la información, seguridad informática y seguridad en la red.
      .col-5.d-none.d-lg-block
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/template/tema-2-1.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white Seguridad de la información
    .row.mt-5
      .col-12
        .titulo-segundo
          #t_2_2.h4 2.2 Principios
        p.mt-3 Como se mencionó anteriormente la seguridad de la información se centra en garantizar lo que en el mundo de seguridad se conoce como la triada conocida por sus siglas CIA, que nada tienen que ver con una famosa agencia de estados unidos, se le da este nombre ya que corresponde a las iniciales de los principios que sustentan la seguridad de la información: confidencialidad, integridad y disponibilidad.
    .row.mt-5
      .tarjeta--container.row.mb-5
        .col-12.col-lg-4.tarjeta.tarjeta--morada.p-5.borde-blanco(style="background: linear-gradient(70deg, #9B235C, #531331);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-2.svg', alt='')
            
          h4.text-center Confidencialidad
          p La confidencialidad se refiere a los esfuerzos de una organización para mantener sus datos privados o secretos. En la práctica, se trata de controlar el acceso a los datos para evitar su divulgación no autorizada.
          p.mt-4 Esto implica asegurarse que sólo aquellos autorizados tengan acceso a activos específicos y, que quienes no están autorizados, sean impedidos activamente de obtener acceso.
    
        .col-12.col-lg-4.tarjeta.tarjeta--amarilla.p-5.borde-blanco(style="background: linear-gradient(70deg, #657D89, #333F45);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-3.svg', alt='')
            
          h4.text-center.text-white Integralidad
          p.text-white En seguridad informática, la integridad consiste en garantizar que los datos no hayan sido manipulados y, por lo tanto, sean confiables.
          p.mt-3.text-white Garantizar la integridad implica proteger los datos en uso, en tránsito (por ejemplo, al enviar un correo electrónico o al cargar o descargar un archivo) y al almacenarlos, ya sea en aparatos físicos o en la nube.

        .col-12.col-lg-4.tarjeta.tarjeta--roja.p-5.borde-blanco(style="background: linear-gradient(70deg, #437795, #223C4B);")
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/template/tema-2-4.svg', alt='')
            
          h4.text-center Disponibilidad
          p Los sistemas, aplicaciones y datos son de poco valor para una organización y sus clientes si no son accesibles cuando los usuarios autorizados los necesitan.
          p.mt-3 En pocas palabras, la accesibilidad significa que las redes, los sistemas y las aplicaciones están en su pleno funcionamiento. Con esto se garantiza que los usuarios autorizados tengan acceso oportuno y fiable a los recursos cuando los requiere. 
    .row.mt-5
      .col-12
        .titulo-segundo
          #t_2_3.h4 2.3 Políticas de seguridad

      .col-12.mt-5.rounded-15.bg-azul-oscuro
        .row
          .col-12.col-md-7.p-4.align-self-center
            p.text-white  Para entender los términos sobre #[strong políticas de seguridad], es necesario definir el concepto más general de política, siendo esta una declaración de alto nivel que describe la posición de la entidad sobre un tema específico.
            p.mt-3.text-white  Ahora, si le adicionamos el concepto de seguridad por supuesto se refiere a la declaración de alto nivel donde la organización fija una posición frente a la necesidad de contar con un sistema de gestión de seguridad de la información que identifique el qué, de quién y cómo se deben proteger los recursos o activos tecnológicos necesarios para el cumplimiento del core de la empresa.
          .col-5.d-none.d-md-block.align-self-center
            img(src='@/assets/template/tema-2-5.svg', alt='')
      .col-12.mt-5 
        p En términos más generales “las políticas de seguridad son un conjunto de reglas, normas y protocolos de actuación que se encargan de velar por la seguridad informática de la empresa. Se trata de una especie de plan realizado para combatir todos los riesgos a los que está expuesta la empresa en el mundo digital. De esta forma mantendremos nuestra organización alejada de cualquier ataque externo peligroso”. (Caurin, 2018).

    .row.mt-5
      .col-12
        .titulo-segundo
          #t_2_4.h4 2.4 Estándares y normas de referencia

      .col-12.mt-5.rounded-15.bg-azul-oscuro
        .row
          .col-5.d-none.d-md-block.align-self-center
            img(src='@/assets/template/tema-2-6.svg', alt='')
          .col-12.col-md-7.p-4.align-self-center
            p.text-white  Existen varios estándares de seguridad informática, iniciando por el grupo de estándares ISO/IEC 27000 que integran un sistema de administración de seguridad de la información (information security management system ISMS) el cual está enfocado en la seguridad de la información bajo un explícito control administrativo de la misma.
            p.mt-3.text-white  El ISO 15408 es un estándar desarrollado en lo que se conoce como “Criterio Común” y permite que diferentes aplicaciones de software puedan ser integradas y probadas en una forma o manera segura.
      .col-12.mt-5 
        p El RFC 2196 es memorándum publicado por el Internet Engineering Task Force para el desarrollo de políticas y procedimientos de seguridad para sistemas de información conectados a Internet; proporciona una amplia y general visión de la seguridad de la información incluyendo la seguridad de la red, respuesta a incidentes o las políticas de seguridad. El documento es muy práctico y centrado en el día a día de las operaciones.
        p.mt-4 Para el campo industrial, se inició en el año 2007, con el grupo de trabajo de la International Society for Automation (ISA), el estándar ISA-99 denominado Security for Industrial Automation and Control Systems con la publicación del estándar ANSI/ISA-99.00.01-2007 Security for Industrial Automation and Control Systems: Concepts, Terminology and Models, en conjunto con el reporte técnico ANSI/ISA-TR99.00.01-2007, Security Technologies for Manufacturing and Control Systems. A principios de 2009, fue aprobado por ANSI el estándar ANSI/ISA-99.02.01-2009, Security for Industrial Automation and Control Systems: Establishing an Industrial Automation and Control Systems Security Program. Finalmente, en el año 2010, se cambió por el estándar ISA/IEC 62443 para alinear la numeración de la documentación del estándar con los estándares correspondientes de la International Electrotechnical Commission (IEC).
    .row.mt-5
      .col-12
        .titulo-segundo
          #t_2_5.h4 2.5
      .col-lg-6
        .bloque-texto-c.p-4
          h3.mb-2.mt-3.text-white El riesgo es la posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico. Esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza.
          span(style="color: #9BBBCE;") #[strong Zambrano, S. M. Q., & Valencia, D. G. M. (2017)]
      .col-lg-6.p-4.align-self-center
        p En la definición anterior se menciona el concepto de amenaza siendo ésta cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas.
        p.mt-4 El riesgo se utiliza sobre todo el análisis de riesgos de un sistema informático. Este riesgo permite tomar decisiones para proteger mejor al sistema. Se puede comparar con el riesgo límite que acepte para su activo o recurso tecnológico, de tal forma que, si el riesgo calculado es inferior al de referencia, éste se convierte en un riesgo residual que podemos considerar cómo riesgo aceptable. Zambrano, S. M. Q., & Valencia, D. G. M. (2017).
    .row.mt-5
      .col-md-6.col-lg.mb-5
        .tarjeta-Avatar
          img(src='@/assets/template/tema-2-7.svg' alt='')
          .tarjeta.tarjeta-.p-4.borde-punteado.shadow.margin-70
            p.mt-4 Para poder realizar un proceso correcto o adecuado de valuación de riesgos de manera general se deben de realizar las siguientes actividades: 
            .row.mt-4
              .col-3.align-self-center
                img(src='@/assets/template/tema-2-8.svg' alt='').w-75  
              .col
                  ul.lista-ul
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Identificar todos aquellos activos de información que tienen algún valor para la organización.
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Asociar las amenazas relevantes con los activos identificados. 
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Determinar las vulnerabilidades que puedan ser aprovechadas por dichas amenazas.
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Identificar el impacto que podría suponer una pérdida de confidencialidad, integridad y disponibilidad para cada activo.
            .row.mt-4    
              .col-12
                p Para el desarrollo de este proceso se han desarrollado diferentes metodologías dentro de las cuales se destacan las siguientes:
              .col-11.offset-1.mt-4
                p #[strong.texto-c i. ISO 31000:2009.] Establece un conjunto de principios que se deben satisfacer para que la gestión del riesgo sea eficaz.
                p.mt-1 #[strong.texto-c ii. Octave.] (Operationally Critical Threat, Asset, and Vulnerability Evaluation). Es una de las metodologías de análisis de riesgos más utilizada por las empresas.
                p.mt-1 #[strong.texto-c iii. Magerit.] Metodología de Análisis de Riesgos Informáticos desarrollada por el Consejo Superior de Administración Electrónica. J. Eterovic y G. Pagliari (2011).
                p.mt-1 #[strong.texto-c iii. Mehari.] Método Armonizado de Análisis de Riesgos. Esta metodología fue propuesta y desarrollada por el Club Francés de la Seguridad de la Información CLUSIF en el año 1996.
                p.mt-1 #[strong.texto-c v. NIST SP 800 – 30.] (National Institute of Standards and Technology): guía de gestión de riesgo para sistemas de tecnología de la información – Recomendaciones del Instituto Nacional de Estándares y Tecnología. 
                p.mt-1 #[strong.texto-c vi. Coras] Construct a Platform for Risk Analysis of Security Critical Systems. Consultative Objetive Risk Analysis System es un proyecto desarrollado desde el año 2001 por Sintef.
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped>
.bg-azul-oscuro
  background-color: #000D25
.borde-punteado
  border: solid
  border: dotted
  border-color: $color-curso-d
.margin-70
  margin-top: -70px
</style>
