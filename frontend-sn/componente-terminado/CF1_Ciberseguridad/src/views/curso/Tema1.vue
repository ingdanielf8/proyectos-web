<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.fas.fa-info
      .h3 1. Ciberseguridad
    
    .row
      .col-12.col-lg-7.align-center
        .titulo-segundo
          #t_1_1.h4 1.1  Definición
        p.mt-3 La ciberseguridad es el conjunto de herramientas, políticas, conceptos de seguridad, salvaguardas de seguridad, directrices, métodos de gestión de riesgos, acciones, formación, prácticas idóneas, seguros y tecnologías que pueden utilizarse para proteger los activos de la organización y los usuarios en el ciberentorno. Los activos de la organización y los usuarios son los dispositivos informáticos conectados, los usuarios, los servicios/aplicaciones, los sistemas de comunicaciones, las comunicaciones multimedios, y la totalidad de la información transmitida y/o almacenada en el ciberentorno. La ciberseguridad garantiza que se alcancen y mantengan las propiedades de seguridad de los activos de la organización y los usuarios contra los riesgos de seguridad correspondientes en el ciberentorno. #[strong (Unión Internacional de Telecomunicación, 2010).]
      .col-4.d-none.d-lg-block.offset-1
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/template/tema-1-1.svg', alt='Texto que describa la imagen')

          .imagen-titulo__titulo
            .h4.m-0.text-white Ciberseguridad 
    .row.mt-5
      .col-12
        .titulo-segundo
          #t_1_2.h4 1.2 Generalidades 
        p.mt-3 En los últimos años el concepto de ciberseguridad se ha convertido en un estándar y en una necesidad en todas las organizaciones puesto que cada vez más y con mayor frecuencia se recurre al uso de las tecnologías de la información y las comunicaciones para apalancar los procesos operativos y core del negocio, el desarrollo y evolución de la tecnología nos lleva a hacer uso de servicios como internet, la interconexión entre sedes y con mayor frecuencia la utilización de tecnologías de computación en la nube lo que necesariamente obliga a las empresas a proteger sus recursos y su información del acceso no autorizado y de todas las posibles amenazas de las cuales pueden ser víctimas.
      BannerInformativo(info="Protegerse de los peligros de la actual coyuntura tecnológica nos lleva a diseñar y adoptar una serie de procesos que nos posibiliten la protección de sus activos, recursos e información y para ello se recomienda la aplicación de las siguientes fases:").mt-5

    .row.mt-5
      .col-12
        TabsB.mb-5.borde-bot-punteado.pb-5
          .py-2.py-md-3(titulo="Prevención")
            .row.mt-4
              .col-lg-6.d-none.d-lg-flex.align-self-center
                figure
                  img(src='@/assets/template/tema-1-2.svg', alt='')
              .col-md-10.col-lg-6.mb-4.mb-md-0.align-self-center.offset-sm-1.offset-lg-0
                .h4 Prevención
                p.pr-4 Esta es la primera fase que ayudará de manera significativa en la disminución de los riesgos, actuar de manera temprana implica conocer nuestros activos o recursos tecnológicos usados en la organización y realizar un análisis de las posibles amenazas y la forma en que podríamos prevenirlas o contrarrestarlas, en esta fase es de gran importancia la concienciación que se debe de hacer en todos los miembros de la organización, prepararlos, capacitarlos y crearles conciencia permitirá que se cometen un número menor de errores que muchas veces por desconocimiento generan vulnerabilidades y riesgos que pueden ser prevenidos y detectados con anterioridad.
  
          .py-2.py-md-3(titulo="Localización")
            .row.mt-4
              .col-lg-6.d-none.d-lg-flex.align-self-center
                figure
                  img(src='@/assets/template/tema-1-3.svg', alt='')
              .col-md-10.col-lg-6.mb-4.mb-md-0.align-self-center.offset-sm-1.offset-lg-0
                .h4 Localización
                p Luego de prevenir, debemos concentrarnos en la adquisición e implementación de una serie de herramientas tecnológicas que nos permitan en caso de presentarse algún tipo de incidente poder localizar su fuente y afectación a fin de tomar las acciones correctivas a que dieran lugar.
                p.mt-3 Esto se logra cuando las medidas y herramientas empleadas están haciendo un constante monitoreo y gestión sobre los recursos tecnológicos, normalmente cuando se detectan los incidentes estos ya han ocurrido muchos días antes ya que cada vez los atacantes utilizan más herramientas y estrategias avanzadas que dificultan su detección, de ahí la importancia de un constante monitoreo sobre sus recursos y servicios tecnológicos.
              
          .py-2.py-md-3(titulo="Reacción")
            .row.mt-4
              .col-lg-6.d-none.d-lg-flex.align-self-center
                figure
                  img(src='@/assets/template/tema-1-4.svg', alt='')
              .col-md-10.col-lg-6.mb-4.mb-md-0.align-self-center.offset-sm-1.offset-lg-0
                .h4 Reacción
                p Una vez se detecte una posible amenaza se debe realizar una reacción inmediata que permita su mitigación, para esto se recomienda seguir los siguientes pasos:
                .col-sm.mb-5.mb-sm-0.mt-4.offset-md-1
                  ul.lista-ul
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Desconectar los activos de la red que están siendo afectados
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Actualizar los sistemas de protección implementados como antivirus, antimalware, anti spyware, entre otras estrategias implementadas en la organización. 
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Realizar un análisis exhaustivo sobre los sistemas o servicios afectados a fin de detectar el origen y afectación
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Cambiar todas las contraseñas 
                    li.mb-0 
                      i.fas.fa-angle-right
                      | Realizar una limpieza profunda de los recursos tecnológicos con las herramientas con que cuente la organización.
    .row.mt-4
      .col-12.col-lg-7.col-xl-8
        .titulo-segundo
          #t_1_3.h4 1.3  Marcos de referencia
        p.mt-5 Los ataques cibernéticos son cada vez más comunes y frecuentes, como se mencionó anteriormente debido a la inmersión de la tecnología en los procesos empresariales, es claro que debemos proteger nuestros recursos y activos, la pregunta es ¿Cómo empezar?, es ahí donde cobra importancia los marcos de referencia que se han venido desarrollando y adoptando, estos marcos suministran información valiosa y útil en el diseño de procesos de control y mitigación de riesgos de ciberseguridad.
      .col-lg-4.col-xl-3.d-none.d-lg-flex.align-self-center
        img(src='@/assets/template/tema-1-5.svg', alt='')
      .col-12.mt-4  
        p Si bien se debe elegir un marco y trabajar con él, son solo una referencia y no una solución definitiva porque también es importante el enfoque del análisis de riesgos del cual hablaremos más adelante, cada marco propone una serie de controles, se debe elegir cuales son aplicables a mi entorno y si se llegase a requerir hacer adopción o ajustes de otros marcos de referencia.
        p.mt-4 A continuación, se definen los marcos de referencia más utilizados y de mayor desarrollo incluyendo algunos propósitos particulares para su adopción:
      .col-12.mt-5
        p.font-subtitle #[strong 1.3.1 NIST CSF] #[i (National Institute of Standards and Technology - Cybersecurity Framework)] - Marco de Ciberseguridad del Instituto Nacional de Estándares y Tecnología.

    .row.mt-5
      .col-12.p-4.bg-color-c.rounded-top
        .row
          .col-4.align-self-center
            img(src='@/assets/template/tema-1-6.svg', alt='').mb-3
          .col-7
            p.text-white Este marco ayuda a las empresas de todos los tamaños a comprender, gestionar y reducir los riesgos cibernéticos y proteger sus redes y datos. Les proporciona un lenguaje común y un resumen de las mejores prácticas en ciberseguridad.

    .row.mt-0.bg-color-e.pb-4
      .col-10.offset-1.mt-0.p-4
        p Este marco no provee nuevas funciones o categorías de ciberseguridad, sino recopila las mejores prácticas (ISO, ITU, CIS, NIST, entre otros) y las agrupa según afinidad. Se centra en el uso de impulsores de negocio para guiar las actividades de ciberseguridad y considerar los riesgos cibernéticos como parte de los procesos de gestión de riesgos de la organización.
      .col-12.col-md-10.col-xl-8.offset-md-1.offset-xl-2.text-center
        img(src="@/assets/template/tema-1-7.svg", alt="alt")
    .row.mt-0.bg-color-f.p-4.rounded-bot.align-items-center
      .col-8.col-md-7.col-lg-5.offset-md-1.offset-lg-3.text-center
        p.text-white Para más información sobre el Marco de Ciberseguridad del NIST y los recursos para negocio puede revisar: 
      .col-3.col-md-2.col-lg-2.mt-3
        a(href="https://www.ftc.gov/es/system/files/attachments/understanding-nist-cybersecurity-framework/cybersecurity_sb_nist-cyber-framework-es.pdf " target="_blank")
          img(src="@/assets/template/pdf-icon.svg", alt="alt").w-100
      
    .row
      .col-12
        p.font-subtitle #[strong 1.3.2 ISO / IEC 27001: 2013]
        p.mt-5 Este marco, creado y publicado por la Organización Internacional de Normalización (ISO), es un marco general que funciona bien para empresas de diversos tamaños en una variedad de industrias. Es similar al NIST CSF. El marco es respetado y ampliamente conocido internacionalmente. El enfoque de ISO 27001 es la protección de la confidencialidad, integridad y disponibilidad de la información en una empresa. 
        p.mt-5 Su filosofía se basa en la gestión de riesgos: investigar dónde están y luego tratarlos de manera sistemática.

    .row.mt-5
      .col-2.align-self-center
        .row
          .col-12
      .col-1
      .col-9.pl-4.text-center
        .row.mt-2.align-self-center
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #FFC23B;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 0. Introducción]
    .row.mt-0.text-center
      .col-2.align-self-center
        .row
          .col-12
      .col-1
      .col-9.pl-4
        .row.mt-2.align-self-center
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #E39644;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 1. Alcance]
    .row.mt-0.text-center
      .col-2.align-self-center
        .row
          .col-12
      .col-1
      .col-9.pl-4
        .row.mt-2.align-self-center
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #D0774A;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 2. Referencias normativas] 
    .row.mt-0.text-center
      .col-2.align-self-center
        .row
          .col-12
      .col-1
      .col-9.pl-4
        .row.mt-2.align-self-center
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #B95351;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 3. Términos y definiciones] 
    .row.mt-0
      .col-2.align-self-center
        .row
          .col-12.align-self-center.texto-derecha
            h4 PLAN
      .col-1.borde-imagen-colores
      .col-9.pl-4
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #9B235C;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 4. Contexto de la organización] 
          .col-7.pl-5.py-2(style="background-color: RGBA(155,35,92,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1
                p.text-small #[strong - Entendimiento de la organización y su contexto.]
                p.text-small #[strong - Expectativas de las partes interesadas.]
                p.text-small #[strong - Alcance del ISMS.]
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #852C56;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 5. Liderazgo]
          .col-7.pl-5.py-2(style="background-color: RGBA(133,44,86,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1
                p.text-small #[strong - Liderazgo y compromiso de la Alta Dirección.]
                p.text-small #[strong - Políticas.]
                p.text-small #[strong - Organización de roles, responsabilidades y autoridades.]
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #6F3551;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 6. Planeación]
          .col-7.pl-5.py-2(style="background-color: RGBA(111,53,81,0.2);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1.align-self-center
                p.text-small #[strong ]
                p.text-small #[strong - Cómo abordar riesgos y oportunidades.]
                p.text-small #[strong ]
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #58404B;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 7. Soporte]
          .col-7.pl-5.py-2(style="background-color: RGBA(88,64,75,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1.align-self-center
                p.text-small #[strong - Recursos.]
                p.text-small #[strong - Competencias.]
                p.text-small #[strong - Comunicación]
    
    .row.mt-0
      .col-2.align-self-center
        .row
          .col-12.align-self-center.texto-derecha
            h4 DO
      .col-1.borde-imagen-colores-2
      .col-9.pl-4
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #193540;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 8. Operación]
          .col-7.pl-5.py-2(style="background-color: RGBA(25,53,64,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1
                p.text-small #[strong - Evaluación de riesgos de la seguridad de la información.]
                p.text-small #[strong - Manejo de riesgos de la seguridad de la información.]
                p.text-small #[strong ]
    .row.mt-0
      .col-2.align-self-center
        .row
          .col-12.align-self-center.texto-derecha
            h4 CHECK
      .col-1.borde-imagen-colores-3
      .col-9.pl-4
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #437795;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 9. Evaluación del desempeño]
          .col-7.pl-5.py-2(style="background-color: RGBA(67,119,149,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1
                p.text-small #[strong - Evaluación de riesgos de la seguridad de la información.]
                p.text-small #[strong - Manejo de riesgos de la seguridad de la información.]
                p.text-small #[strong ]
    .row.mt-0
      .col-2.align-self-center
        .row
          .col-12.align-self-center.texto-derecha
            h4 ACT
      .col-1.borde-imagen-colores-4
      .col-9.pl-4
        .row.mt-2
          .col-5.py-5.py-lg-4.rounded-15(style="background-color: #657D89;").text-center.align-self-center.shadow 
            p.text-white.align-self-center #[strong 10. Mejora]
          .col-7.pl-5.py-2(style="background-color: RGBA(101,125,137,0.20);").rounded-right.margin-l-neg
            .row
              .col-11.offset-1
                p.text-small #[strong - Monitoreo y auditorias internas.]
                p.text-small #[strong - Revisión de la Alta Dirección.]
                p.text-small #[strong ]
    .row.mt-5
      .col-12.text-center
        p.text-small Fases y Actividades ISO 27001:2013
        i.text-small Tomada de https://www.magazcitum.com.mx/?p=2397#.X58QqYhKhP
      .col-12.mt-5
          p.font-subtitle #[strong 1.3.3 COBIT ] (Objetivos de control para información y tecnologías relacionadas. En inglés Control Objectives for Information and related Technology)
          p.mt-5 COBIT fue desarrollado por ISACA, una organización global independiente sin fines de lucro que se enfoca en el gobierno de TI. Este marco es similar al marco de NIST e ISO, ya que es un marco más general que la mayoría de las organizaciones pueden usar. 
          p.mt-4 Es una guía de mejores prácticas, dirigida al control y supervisión de TI. Cuenta con una serie de recursos que pueden servir de modelo de referencia para la gestión de TI, incluyendo objetivos de control, mapas de auditoría, herramientas para su implementación y una guía de técnicas de gestión.
    .row.mt-5
      .col-12.rounded-15(style="background-color: RGBA(255,243,215,0.50);").p-4
        img(src="@/assets/template/tema-1-8.svg", alt="alt")
    .row.mt-5
      .col-12.text-center
        p.text-small #[strong Resumen Cobit]
        p.text-small.mt-3 Tomada de:
        i.text-small https://www.isaca.org/-/media/files/isacadp/project/isaca/articles/journal/2018/volume-6/advancing-information-advancing-technology-advancing-cobit_joa_eng_1218.pdf
    .row.mt-5
      .col-12.mt-5
          p.font-subtitle #[strong 1.3.4 HITRUST CSF ] (Health Information Trust Alliance - Cybersecurity Framework)
          p.mt-5 HITRUST CSF fue desarrollado por Health Information Trust Alliance (HITRUST) y es el marco de seguridad más adoptado en la industria de la salud de los Estados Unidos. HITRUST originalmente desarrolló su CSF (Cybersecurity Framework en español Marco de ciberseguridad) para enfocarse en elementos clave y riesgos inherentes a la industria de la salud, como las consideraciones de HIPAA (Ley de Responsabilidad y Portabilidad de Seguros de Salud), pero desde entonces han actualizado el marco con controles más amplios que se aplicarían a cualquier organización.
    .row.mt-5
      .col-12.rounded-15(style="background-color: RGBA(217,228,234,0.50);").p-4
        img(src="@/assets/template/tema-1-9.svg", alt="alt")
    .row.mt-5
      .col-12.mt-3
          p.font-subtitle #[strong 1.3.5 CSA Cloud Controls Matrix] 
          p.mt-4 La Cloud Controls Matrix fue desarrollada por Cloud Security Alliance (CSA) específicamente para los proveedores de la nube. La estructura del almacenamiento de datos en la nube conlleva riesgos únicos que requieren controles de seguridad específicos, que se establecen en este marco. La matriz de controles de la nube se actualiza con frecuencia y es útil para los proveedores de la nube de cualquier tamaño.
    .row.mt-4
      .col-3
        img(src="@/assets/template/tema-1-10.svg", alt="alt")
      .col-9
        p CSA CCM fortalece los entornos de control de seguridad de la información existentes al enfatizar los requisitos de control de seguridad de la información empresarial, reduce e identifica las amenazas y vulnerabilidades de seguridad consistentes en la nube, proporciona seguridad estandarizada y gestión de riesgos operativos, y busca normalizar las expectativas de seguridad, taxonomía y terminología de la nube.
    .row.borde-gris.mt-5.pb-5
      .col-12.text-center.mt-4
        h4.mb-5(style="color: #4B4A4A;") CCM DOMAINS
      .col-6
        .row
          .col-2.col-lg-1(style="background-color: #006A9E;").offset-1.offset-lg-2.align-self-center
            p.text-white AIS
          .col-9
            p(style="color: #006A9E;") Application & Interface Security
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #A28000;").offset-1.offset-lg-2.align-self-center
            p.text-white ACC
          .col-9
            p(style="color: #A28000;") Audit Assurance & Compliance
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #80460D;").offset-1.offset-lg-2.align-self-center
            p.text-white BCR
          .col-9
            p(style="color: #80460D;") Business Continuity Mgmt & Op Resilience
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #A02970;").offset-1.offset-lg-2.align-self-center
            p.text-white CCC
          .col-9
            p(style="color: #A02970;") Change Control & Configuration Management
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #30234D;").offset-1.offset-lg-2.align-self-center
            p.text-white DSI
          .col-9
            p(style="color: #30234D;") Data Security & Information Lifecycle Mgmt
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #174252;").offset-1.offset-lg-2.align-self-center
            p.text-white DSC
          .col-9
            p(style="color: #174252;") Datacenter Security 
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #DA5400;").offset-1.offset-lg-2.align-self-center
            p.text-white EKM
          .col-9
            p(style="color: #DA5400;") Encryption & Key Management 
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #653924;").offset-1.offset-lg-2.align-self-center
            p.text-white GRM
          .col-9
            p(style="color: #653924;") Gervernance & Risk Management
      .col-6
        .row
          .col-2.col-lg-1(style="background-color: #836525;").offset-1.align-self-center
            p.text-white HRS
          .col-9
            p(style="color: #836525;") Human Resources Security
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #415C21;").offset-1.align-self-center
            p.text-white IAM
          .col-9
            p(style="color: #415C21;") Identity & Access Management
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #0093A2;").offset-1.align-self-center
            p.text-white IVS
          .col-9
            p(style="color: #0093A2;") Infraestructure & Virtualization
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #FDA000;").offset-1.align-self-center
            p.text-white IPY
          .col-9
            p(style="color: #FDA000;") Interoperability & Portability
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #E64E11;").offset-1.align-self-center
            p.text-white MOS
          .col-9
            p(style="color: #E64E11;") Mobile Security
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #BA6700;").offset-1.align-self-center
            p.text-white SEF
          .col-9
            p(style="color: #BA6700;") Sec. Incident Mgmt, E-Disc & Cloud Forensics 
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #5A557D;").offset-1.align-self-center
            p.text-white STA
          .col-9
            p(style="color: #5A557D;") Supply Chain Mgmt, Transparency & Accountability 
        .row.mt-3
          .col-2.col-lg-1(style="background-color: #74891A;").offset-1.align-self-center
            p.text-white TVM
          .col-9
            p(style="color: #74891A;") Threat & Vulnerability Management
    .row.mt-5
      .col-12.text-center
        p.text-small #[strong Controles CCM]
        i.text-small Tomada de https://cloudsecurityalliance.org/  
</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
import BannerInformativo from '../../components/plantilla/BannerInformativo'
import TabsB from '../../components/TabsB'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    BannerInformativo,
    TabsB,
  },
}
</script>

<style lang="sass" scoped>
.fa-angle-right
  color: $color-curso-c
.font-subtitle
  font-size: 20px
  color: $color-curso-d
.borde-imagen-colores
  border-left: solid $color-curso-c !important
  border-radius: 20px
.borde-imagen-colores-2
  border-left: solid #193540 !important
  border-radius: 20px
.borde-imagen-colores-3
  border-left: solid #437795 !important
  border-radius: 20px
.borde-imagen-colores-4
  border-left: solid #657D89 !important
  border-radius: 20px
.borde-gris
  border: solid 10px
  border-radius: 15px
  color: #707070
.texto-derecha
  text-align: right
.margin-l-neg
  margin-left: -10px
</style>
