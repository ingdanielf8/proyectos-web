<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Dominios de control 
    .row.mt-5
      .col-2
        figure
          img(src="@/assets/template/tema-2-1.svg", alt="Texto que describa la imagen").floating
      .col-10
        p Los dominios de seguridad que propone esta norma: ISO/IEC 27001:2013, se encuentran estructurados de acuerdo a los componentes y elementos más relevantes para el mejoramiento de los activos de información.  
    figure.mt-5
      img(src="@/assets/template/tema-2-2.png", alt="Texto que describa la imagen") 
    .row.mt-5
      .col-10.col-lg-8.offset-1.offset-lg-2
        .cajon.color-secundario.bg-naranja-claro.p-4
          p En una organización se deben gestionar, entre otros tantos, los activos de información de manera segura y responsable; por ello la norma recomienda que se cuente con políticas claras que apoyen el ejercicio de identificación y aseguramiento de dichos activos de la información. 
    p.mt-5 En la siguiente tabla, conozca los objetivos de control para la determinación de estas políticas. Le sugerimos tomar nota atenta de los aspectos más importantes de este punto.
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-co ntenido.mb-0
          h5.mb-0 Tabla 1
        p.text-small A5 Política para la seguridad de la información 
        .tabla-b.color-acento-contenido.mt-5
          table.border-rojo
            caption.mt-4 Nota: Norma ISO/IEC 27001:2013 – Anexo A
            tr.border-rojo
              th.text-center.border-rojo.bg-gris-claro A.5.1
              td.bg-blanco Orientación de la Dirección para la Gestión de la Seguridad de la Información: brindar orientación y soporte, por parte de la Dirección, para la seguridad de la información de acuerdo con los requisitos del negocio y con las leyes y reglamentos pertinentes.
            tr.border-rojo
              th.text-center.border-rojo.bg-gris-claro A.5.1.1
              td.bg-blanco Política para la seguridad de la información.
            tr
              th.text-center.border-rojo.bg-gris-claro A.5.1.2
              td.bg-blanco Revisión de las políticas para la seguridad de la información
    Separador
    .titulo-segundo.mt-5
      #t_2_1.h2 2.1  Algunos conceptos y estándar orientador
    .row.mt-5
      .col-12.col-lg-7
        .row
          .col-3
            figure
              img(src="@/assets/template/tema-2-3.svg", alt="Texto que describa la imagen").floating
          .col-9
            p En términos de seguridad, uno de los factores más relevantes en una organización o empresa, es brindar las directrices para identificar y mantener seguros los activos de información. 
            p.mt-4 Visualice, a continuación, los objetivos de control para la organización, de la seguridad de la información
        .col-12.mt-4
          .cajon.color-secundario.bg-naranja-claro.p-4
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.pb-1 a
                .h4 Organización interna
              p.mt-3.pl-4 Establecer un marco de referencia de gestión para iniciar y controlar la implementación y la operación de la seguridad de información dentro de la organización:
              ul.lista-ul.mt-3.pl-4
                li 
                  i.fas.fa-angle-right
                  | Roles y responsabilidades para la seguridad de la información.
                li 
                  i.fas.fa-angle-right
                  | Separación de deberes.
                li 
                  i.fas.fa-angle-right
                  | Contacto con las autoridades.
                li 
                  i.fas.fa-angle-right
                  | Contacto con grupos de interés especiales.
                li 
                  i.fas.fa-angle-right
                  | Seguridad de la información en la gestión de proyectos.
 
        .col-12.mt-4
          .cajon.color-secundario.bg-naranja-mas-claro.p-4.mb-4
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span.pb-1 b
                .h4 Dispositivos móviles y teletrabajo
              p.mt-3.pl-4 Garantizar la seguridad del teletrabajo y el uso de dispositivos móviles:
              ul.lista-ul.mt-3.pl-4
                li 
                  i.fas.fa-angle-right
                  | Política para dispositivos móviles. 
                li 
                  i.fas.fa-angle-right
                  | Teletrabajo.
      .col-4.col-lg-5
        figure
          img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen")
    Separador
    .titulo-segundo.mt-5
      #t_2_2.h2 2.2  Objetivos de control para el factor humano 
    .row.mt-5
      .col-2
        figure
          img(src="@/assets/template/tema-2-5.svg", alt="Texto que describa la imagen").floating
      .col-10
        p Uno de los factores más débiles en seguridad será el factor humano. Según el Instituto Internacional de Estudios en Seguridad Global, “El error humano es la principal causa de infracciones de datos y no los ciberdelincuentes. Es aquí donde las compañías deben revisar sus protocolos” #[strong (INISEG, 2020).] 
    figure
      img(src="@/assets/template/tema-2-6.png", alt="Texto que describa la imagen")
    p.mt-5 Para abordar estos factores humanos, la norma presenta los objetivos de control que usted podrá estudiar en el siguiente recurso:
    SlyderB.mb-5(:datos="datosSlyder1").mt-5
    Separador
    .titulo-segundo.mt-5
      #t_2_3.h2 2.3  Objetivos de control para la gestión de activos 
    .row.mt-5
      .col-2
        figure
          img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen").floating
      .col-10
        p La gestión de activos de información cobra vital importancia dado que estos deben mantenerse identificados, clasificados y salvaguardados. 
    figure.mt-5
      img(src="@/assets/template/tema-2-11.png", alt="Texto que describa la imagen")  
    p.mt-5 Estudie la siguiente tabla, y conozca los objetivos de control que establecen los controles necesarios para gestionar estos activos.
    .row.mt-5
      .col-10.offset-1
        .titulo-sexto.color-acento-contenido.mb-0
          h5.mb-0 Tabla 2
        p.text-small A8 Gestión de activos
        .tabla-b.color-acento-contenido.mt-5
          table.border-rojo
            caption.mt-4 Nota: Norma ISO/IEC 27001:2013 – Anexo A
            tr.border-rojo
              th.text-center.border-rojo.bg-gris-claro A.8.1
              td.bg-gris-claro Responsabilidad por los activos: identificar los activos organizacionales y definir las responsabilidades de protección apropiadas.
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo A.8.1.1
              td Inventario de activos
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.1.2
              td.bg-blanco Propiedad de los activos
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.1.3
              td.bg-blanco Uso aceptable de los activos
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.1.4
              td.bg-blanco Devolución de activos
            tr.border-rojo
              th.text-center.border-rojo.bg-gris-claro A.8.2
              td.bg-gris-claro Clasificación de la información: asegurar que la información recibe un nivel adecuado de protección, de acuerdo con su importancia para la organización.
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.2.1
              td.bg-blanco Clasificación de la información
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.2.2
              td.bg-blanco Etiquetado de la información
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.2.3
              td.bg-blanco Manejo de activos
            tr.border-rojo
              th.text-center.border-rojo.bg-gris-claro A.8.3
              td.bg-gris-claro 
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.3.1
              td.bg-blanco Gestión de medios removibles
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.3.2
              td.bg-blanco Disposición de los medios
            tr.border-rojo.bg-blanco
              th.text-center.border-rojo.bg-blanco A.8.3.3
              td.bg-blanco Transferencia de medios físicos
    Separador
    .titulo-segundo.mt-5
      #t_2_4.h2 2.4  Objetivos de control para la gestión de activos
    .row.mt-5
      .col-8.offset-2
        .bloque-texto-a.color-primario.p-4.p-md-3.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-2-12.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Otro factor importante es la restricción al acceso a los activos de información. Se trata de los controles para gestionar estos accesos, prevaleciendo siempre la confidencialidad, privacidad y disponibilidad del activo de información.
    p.mt-5 Visualice el recurso que a continuación se le presenta. En él encontrará aspectos de suma importancia respecto de los controles de accesos. Recuerde tomar nota atenta de los elementos más destacados.
    SlyderB.mb-5(:datos="datosSlyder2").mt-5
    Separador
    .titulo-segundo.mt-5
      #t_2_5.h2 2.5  Controles criptográficos
    .row.mt-5
      .col-12.col-lg-7
        .row
          .col-3
            figure
              img(src="@/assets/template/tema-2-17.svg", alt="Texto que describa la imagen")
          .col-9
            p En términos de seguridad, uno de los factores más relevantes en una organización o empresa, es brindar las directrices para identificar y mantener seguros los activos de información.  
            p.mt-4 Visualice, a continuación, los objetivos de control para la organización, de la seguridad de la información
        .col-12.mt-4
          .titulo-sexto.color-acento-contenido.mb-0
            h5.mb-0 Tabla 2
            p.text-small A8 Gestión de activos
            .tabla-b.color-acento-contenido.mt-5
              table.border-rojo
                caption.mt-4 Nota: Norma ISO/IEC 27001:2013 – Anexo A
                tr.border-rojo
                  th.text-center.border-rojo.bg-gris-claro A.8.1
                  td.bg-gris-claro Responsabilidad por los activos: identificar los activos organizacionales y definir las responsabilidades de protección apropiadas.
                tr.border-rojo.bg-blanco
                  th.text-center.border-rojo A.8.1.1
                  td Inventario de activos
                tr.border-rojo.bg-blanco
                  th.text-center.border-rojo.bg-blanco A.8.1.2
                  td.bg-blanco Propiedad de los activos
                tr.border-rojo.bg-blanco
                  th.text-center.border-rojo.bg-blanco A.8.1.3
                  td.bg-blanco Uso aceptable de los activos
      .col-4.col-lg-5
        figure
          img(src="@/assets/template/tema-2-18.svg", alt="Texto que describa la imagen").floating
    Separador
    .titulo-segundo.mt-5
      #t_2_6.h2 2.6  Controles y objetivos para el aseguramiento físico
    .row.mt-5
      .col-2
        figure
          img(src="@/assets/template/tema-2-19.svg", alt="Texto que describa la imagen")
      .col-10
        p Como buenas prácticas de seguridad, se recomienda reducir los riesgos asociados por daños directos o factores que puedan afectar los activos de información o el desarrollo de las operaciones en la organización.
        p.mt-4 Estos son los controles sugeridos para el aseguramiento físico, así como para el entorno, en donde se encuentran ubicados dichos activos
    TabsB.color-acento-contenido.mt-5
      .py-4.py-md-5(titulo="Áreas seguras" :icono="require('@/assets/template/tema-2-20.svg')")
        .row          
          .col-12.col-lg-8.pl-5.align-self-center
            .h3 Áreas seguras
            p Prevenir el acceso físico no autorizado, el daño y la interferencia a la información y a las instalaciones de procesamiento de información
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Perímetro de seguridad física
              li 
                i.fas.fa-angle-right
                | Controles de acceso físico
              li 
                i.fas.fa-angle-right
                | Seguridad de oficinas, recintos e instalaciones
              li 
                i.fas.fa-angle-right
                | Protección contra amenazas externas y ambientales
              li 
                i.fas.fa-angle-right
                | Trabajo en áreas seguras
              li 
                i.fas.fa-angle-right
                | Áreas de despacho y carga
          .col-4.col-lg-4
            figure
              img(src="@/assets/template/tema-2-22.png", alt="Texto que describa la imagen").margin-0-auto
      .py-4.py-md-5(titulo="Equipos" :icono="require('@/assets/template/tema-2-21.svg')")
        .row
          .col-12.col-lg-8.pl-5.align-self-center
            .h3 Equipos
            p Prevenir la pérdida, daño, robo o compromiso de activos, y la interrupción de las operaciones de la organización
            ul.lista-ul.mt-3
              li 
                i.fas.fa-angle-right
                | Ubicación y protección de los equipos
              li 
                i.fas.fa-angle-right
                | Servicios de suministro
              li 
                i.fas.fa-angle-right
                | Seguridad del cableado
              li 
                i.fas.fa-angle-right
                | Mantenimiento de equipos
              li 
                i.fas.fa-angle-right
                | Retiro de activos
              li 
                i.fas.fa-angle-right
                | Seguridad de los equipos fuera de las instalaciones
              li 
                i.fas.fa-angle-right
                | Disposición segura o reutilización de equipos
              li 
                i.fas.fa-angle-right
                | Equipos de usuario desatendido
              li 
                i.fas.fa-angle-right
                | Política de escritorio y pantalla limpios 
          .col-4.col-lg-4
            figure
              img(src="@/assets/template/tema-2-23.png", alt="Texto que describa la imagen").margin-0-auto
    .row.mt-5
      .col-10.offset-1
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/template/tema-2-24.svg").w-50.margin-0-auto
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Dominios de control, desde la norma ISO/IEC 27001:2013 
                  p.text-small Para completar y profundizar en el conocimiento de los Dominios de control, orientados por la norma ISO/IEC 27001:2013, le invitamos a visitar el Anexo_1_DominiosDeControl y estudiar las tablas de controles de los entornos de la organización, que allí se registran.  
                .col-sm-auto
                  a.boton.color-secundario(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    datosSlyder1: [
      {
        titulo: 'Antes de asumir el empleo',
        texto:
          'Asegurar que los empleados y contratistas comprenden sus responsabilidades y son idóneos para los roles para los que se los consideran.<br><br> Proceso de selección <br> Términos y condiciones del empleo',
        imagen: require('@/assets/template/tema-2-7.png'),
      },
      {
        titulo: 'Durante la vigencia del empleo',
        texto:
          'Asegurarse de que los empleados y contratistas, tomen conciencia de sus responsabilidades en seguridad de la información.<br><br> Responsabilidad de la dirección<br> Toma de conciencia, educación y formación en la seguridad de la información<br>Proceso disciplinario ',
        imagen: require('@/assets/template/tema-2-8.png'),
      },
      {
        titulo: 'Terminación o cambio de empleo',
        texto:
          'Proteger los intereses de la organización como parte del proceso de cambio o terminación del empleo.<br><br>Responsabilidades en la terminación',
        imagen: require('@/assets/template/tema-2-9.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Requisito del negocio para el control de acceso ',
        texto:
          'Limitar el acceso a información y a instalaciones de procesamiento de información: <br>Política de control de acceso <br>Acceso a redes y a servicios en red',
        imagen: require('@/assets/template/tema-2-13.png'),
      },
      {
        titulo: 'Gestión de acceso de usuarios',
        texto:
          'Asegurar el acceso de usuarios autorizados y evitar el acceso de usuarios no autorizados a sistemas y servicios: <br><br>Registro y cancelación del registro de usuarios.<br>Suministro de acceso de usuarios. <br>Gestión de derechos de acceso privilegiado. <br>Gestión de información de autenticación secreta de usuarios. <br>Revisión de los derechos de acceso de usuarios. <br>Retiro o ajuste de los derechos de acceso.',
        imagen: require('@/assets/template/tema-2-14.png'),
      },
      {
        titulo: 'Responsabilidades de los usuarios',
        texto:
          'Hacer que los usuarios rindan cuentas por la salvaguarda de su información de autenticación: <br><br> Uso de información de autenticación secreta.',
        imagen: require('@/assets/template/tema-2-15.png'),
      },
      {
        titulo: 'Control de acceso a sistemas y aplicaciones',
        texto:
          'Evitar el acceso no autorizado a sistemas y aplicaciones: <br><br>Restricciones de acceso a la información. <br>Procedimiento de ingreso seguro. <br>Sistema de gestión de contraseñas. <br>Uso de los programas utilitarios privilegiados. <br>Control de acceso a códigos fuente de programas. <br>',
        imagen: require('@/assets/template/tema-2-16.png'),
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
