<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 La internet y la web
    .row.mt-5 
      .col-12.col-lg-9.align-self-center
        p En este componente formativo se estudiarán los conceptos básicos sobre la arquitectura de un sistema web, desde la naturaleza de su comportamiento, comprendiendo los componentes físicos y lógicos para su funcionamiento, pasando por la identificación y caracterización de tecnologías web del lado del cliente y del servidor, hasta la identificación de tecnologías que permiten la comunicación y el traspaso de información o generación de servicios con otros sistemas.
        p.mt-3 En ese sentido, este componente busca generar un análisis crítico para la selección de una determinada tecnología dependiendo de los requerimientos y alcance de un proyecto estimado, a partir de la fundamentación y rasgos distintivos que en cada apartado de este documento se detallan.
      .col-3.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-1-1.svg" alt="Texto que describa la imagen")
    #t_1_1.titulo-segundo.mt-5
      .h4 1.1  Funcionamiento de la internet 
    .row.mb-5 
      .col-lg-8.offset-2
        .cajon.color-acento-botones.p-4.mb-4
          p La aparición de la internet tuvo lugar cuando se dio la necesidad de comunicación y de interacción con distintas personas en cualquier lugar del mundo. De esta manera se ha considerado esta tecnología como una columna vertebral de la web, y se concibe como la infraestructura técnica que la hace posible. Desde lo más básico, se presenta como una gran red de computadoras que se comunican simultáneamente.
    .h4.mt-5 Historia de la internet
    figure.mt-4
      img(src="@/assets/template/tema-1-2.png" alt="Texto que describa la imagen")
    p.mt-4 Su historia se remonta al comienzo de la década de 1960 como un proyecto de investigación llamado ARPANET financiado por el ejército de los Estados Unidos y más adelante se convirtió en una infraestructura pública en la década de 1980 con el apoyo de muchas instituciones del sector público y privado. Las distintas tecnologías que soporta internet han evolucionado con el tiempo, especialmente para satisfacer la gran demanda existente por parte de la población, no obstante, la forma en que funciona no ha cambiado mucho. En este sentido la internet se muestra como una forma de conectividad entre todos los equipos de cómputo, y por su distribución y organización, propenderá a que se encuentre la mejor manera de mantenerse conectados.
    .h4.mt-5 Hardware de red
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/template/tema-1-3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando dos computadoras necesitan comunicarse, se pueden vincular a través de medios físicos, por lo regular el cable Ethernet o de forma inalámbrica con tecnologías como Wifi, Bluetooth, ZigBee, entre otras). 
    .row.mt-5
      .col-10.offset-1
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Ejemplo de conexión entre dos equipos o terminales ")
            .col-12
              p La mayoría de las computadoras de hoy en día pueden soportar cualquiera de este tipo de conexiones. A continuación, se muestra un ejemplo de conexión vía ethernet entre dos equipos:
            .col-12
              figure
                img(src='@/assets/template/tema-1-4.png', alt='Texto que describa la imagen')

          .row(numero="2" titulo="Praesent luctus")
            .col-md-4
              figure
                img(src='@/assets/template/tema-1-5.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p No se puede pensar que la red solo se limita a dos ordenadores, se pueden conectar tantos como se deseen, aunque con mayor complejidad. Por ejemplo, si se quieren conectar 10 computadoras, se necesitarían 45 cables y unos nueve conectores por computador, como se alcanza a apreciar en la siguiente figura.
          .row(numero="3" titulo="Praesent luctus")
            .col-md-4
              figure
                img(src='@/assets/template/tema-1-6.svg', alt='Texto que describa la imagen')
            .col-md-8.mb-4.mb-md-0
              p Por ejemplo, para que el terminal B reciba un mensaje desde el terminal A, este debe enviarlo primero al router, quien a su vez lo remite al ordenador B asegurándose que dicho mensaje no sea entregado a otro ordenador.  Una vez incorporado un enrutador al sistema, la red de diez terminales solo requiere diez cables: un conector para cada ordenador y un enrutador con 10 conectores, como se aprecia en la siguiente gráfica.
    .row.mt-5
      .col-12.col-lg-10.align-self-center
        p Su historia se remonta al comienzo de la década de 1960 como un proyecto de investigación llamado ARPANET financiado por el ejército de los Estados Unidos y más adelante se convirtió en una infraestructura pública en la década de 1980 con el apoyo de muchas instituciones del sector público y privado. Las distintas tecnologías que soporta internet han evolucionado con el tiempo, especialmente para satisfacer la gran demanda existente por parte de la población, no obstante, la forma en que funciona no ha cambiado mucho. En este sentido la internet se muestra como una forma de conectividad entre todos los equipos de cómputo, y por su distribución y organización, propenderá a que se encuentre la mejor manera de mantenerse conectados.
      .col-2.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-1-7.svg" , alt="Texto que describa la imagen")
    .row.mt-5
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-8.svg" , alt="Texto que describa la imagen")
      .col-12.col-lg-10.align-self-center
        p El proceso de conexión entre los diversos terminales demuestra que puede ser un ejercicio muy complejo y engorroso, por lo tanto, con el fin de solucionar esta organización, cada ordenador en una red está conectado a una pequeña computadora especial llamada enrutador o router #[strong (en inglés)]. 
        p.mt-3 Este dispositivo cumple una función: tal como lo hace un señalizador en las estaciones del sistema integrado de transporte público, que  indican cuál es ruta necesitas para llegar a un destino, De esta manera el router se encarga de asegurar que el mensaje enviado desde un computador o terminal emisor llegue al destino correcto. Una vez incorporado un enrutador al sistema, la red de diez terminales solo requiere diez cables: un conector para cada ordenador y un enrutador con 10 conectores, como se aprecia en la siguiente gráfica. 
    .row.mt-5 
      .col-lg-10.offset-1
        .cajon.color-secundario.px-5.py-4.mb-4
          .h4 Ejemplo de conexión de diez equipos con dos enrutadores
          p Nada.  en ese sentido: estas conexiones entre terminales generan redes de datos para la transmisión como la recepción de información, por lo que es necesario caracterizar estas redes, las cuales son importantes para la comprensión del funcionamiento de un sistema Web. Entre ellas se encuentran las redes de área local, una red de área metropolitana y una Red de área amplia
          figure  
            img(src="@/assets/template/tema-1-9.png" , alt="Texto que describa la imagen")
    p.mt-4 Generalmente llamadas LAN (Local Área Networks), son redes de naturaleza privada que operan dentro de un solo establecimiento, como una casa, oficina o fábrica. Las redes LAN se utilizan ampliamente para conectar computadoras personales y electrodomésticos con el fin de compartir recursos (por ejemplo, impresoras) e intercambiar información. 
    p.mt-3 A continuación, se presentan un ejemplo de esta red:
    .h4.mt-5 Ejemplo de red de área local inalámbrica y cableada
    figure.mt-5
      img(src="@/assets/template/tema-1-10.png" , alt="Texto que describa la imagen")      
    p.mt-4 El diseño físico y lógico de la red llamado topología está basado en los enlaces de punto a punto comúnmente para redes alámbricas. El estándar IEEE 802.3, comúnmente conocido como Ethernet, es la manera más común de LAN alámbrica. La figura en su apartado b, muestra un ejemplo de topología de Ethernet conmutada. Cada computadora se comunica mediante el protocolo Ethernet y se conecta a una caja conocida como switch a través de un enlace de punto a punto. 
    p.mt-3 En ese sentido, un switch tiene varios puertos, cada uno de los cuales se puede conectar a una computadora. La función que cumple el switch es transmitir paquetes entre las computadoras conectadas a él, y utiliza la dirección en cada paquete para determinar a qué computadora se lo debe enviar. 
    .h4.mt-5 Modelo de referencia TCP/IP
    figure.mt-5
      img(src="@/assets/template/tema-1-11.png" , alt="Texto que describa la imagen")
    p.mt-4 Al igual que los humanos, es importante que todos los equipos de cómputo tengan un modo común de comunicarse entre ellos. Para la mayoría de los equipos actuales, este modo es TCP/IP. TCP/IP suele venir inmerso en los equipos y está automatizado en buena medida. No obstante, es necesario la comprensión del modelo TCP/IP, sobre todo en el caso de que vaya a configurar un equipo para conectarlo a otro sistema. #[strong (Fisher, 2021)]
    .row
      .col-12.col-lg-10
        p Así, este protocolo TCP/IP, cuyas siglas definen: Transmission Control Protocol/internet Protocol (Protocolo de control de transmisión/Protocolo de internet). Se presenta como un conjunto de reglas estandarizadas que permiten a los equipos comunicarse en una red como internet. La potencialidad de las máquinas está en su velocidad de transmisión y comunicar con otras, de hecho, una de las tendencias de esta cuarta revolución industrial es la interacción de ellas de manera inteligente, sobre todo en contexto de producción. Muchas de las cosas para las que utilizamos los equipos (enviar mensajes de correo electrónico, ver Netflix u obtener indicaciones para llegar a un sitio) dependen de la comunicación entre ellos. Pueden ser equipos de distintos fabricantes e incluso encontrarse en zonas geográficas diferentes. De esta manera las personas y plataformas software que los utilizan pueden hablar distintos lenguajes humanos e informáticos.
      .col-4.col-lg-2.offset-4.offset-lg-0.align-self-center
        figure
          img(src="@/assets/template/tema-1-12.svg" , alt="Texto que describa la imagen")
    p.mt-3 Según el blog de Avast Academy, señala: “…Una interacción determinada puede darse entre dos sistemas informáticos o involucrar cientos de sistemas. Sin embargo, como sucede al pasar una carta o un paquete de mano en mano, cada transacción se produce entre solo dos equipos cada vez. Para que esto suceda, los dos equipos deben saber, por adelantado, cómo se espera que se comuniquen.
    .row.mt-5
      .col-8.offset-2
        .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                .row
                  .col-sm.mb-5.mb-sm-0
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | ¿Cómo inician la conversación?                    
                      li
                        i.fas.fa-angle-right 
                        | ¿A quién le toca comunicarse?
                      li
                        i.fas.fa-angle-right 
                        | ¿Cómo sabe un equipo si su mensaje se ha transmitido correctamente?
                      li 
                        i.fas.fa-angle-right 
                        | ¿Cómo terminan la conversación?”. #[strong (Fisher, 2021)]
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-13.svg" alt="Texto que describa la imagen").w-75
    .row.mt-5 
      .col-lg-10.offset-1
        .cajon.color-secundario.px-5.py-4.mb-4
          .h4 Funcionamiento del modelo
          p El funcionamiento de este protocolo radica en descomponer cada mensaje en paquetes. Porque el objetivo no es volver a enviar de nuevo y desde cero el mensaje completo, toda vez que haya un fallo. Así que estos paquetes se vuelven a ensamblar en el otro extremo. De hecho, cada paquete podría tomar una ruta diferente hasta el equipo de destino, toda vez sí la ruta deja de estar disponible o está muy congestionada. De manera adicional, TCP/IP divide las distintas tareas de comunicación en capas. Así, cada capa tiene una función diferente. Los datos pasan por cuatro capas independientes antes de recibirse en el otro extremo.
    .h4.mt-5 Cuatro capas del modelo TCP/IP
    p.mt-5 En la literatura, se encuentran un sin número de definiciones alrededor de las capas de este modelo, entre las más importante y haciendo un resumen para dar mayor claridad se tienen:
    figure.mt-5
      img(src="@/assets/template/tema-1-14.png" , alt="Texto que describa la imagen")
    figcaption.mt-3 Referencia SENA
    p.mt-5 Se presenta entonces la siguiente gráfica que muestran las capas y sus respectivos protocolos.
    .tabla-a.color-acento-botones.mb-5 
      table
        caption.mt-3 Referencia Tomado de (Juncosa, 2020)
        thead
          tr
            th(colspan='5') 
              h4.mb-0 Principales protocolos del Modelo TCP/IP por capas
        tbody.text-center
          tr
            th 
              h4.mb-0 Modelo TCPS / IP
            th(colspan='4') 
              h4.mb-0 Suite de protocolos 
              h4.mb-0 (Principales)
          tr.bg-acento-contenido
            td.p-5(rowspan='2') Capa de aplicación
            td SSH
            td FTP
            td SMTP
            td DHCP
          tr.bg-acento-contenido
            td DNS
            td RIP
            td SNMP
            td HTTP
          tr.bg-acento-contenido-op70
            td.p-5(rowspan='2') capa de transporte
            td TCP
            td DCCP
            td uTP
          tr.bg-acento-contenido-op70
            td UDP
            td ICMP
            td FCP
          tr.bg-acento-contenido-op40
            td.p-5(rowspan='2') capa de internet
            td IP
            td ICMP
          tr.bg-acento-contenido-op40
            td IPSEC
            td IGMP
    .h4 Dirección IP         
    .row.mt-4
      .col-12.col-lg-9.align-self-center
        p Para enviar un mensaje a una computadora, se debe especificar a cuál. Es por ello por lo que toda computadora conectada a una red cuenta con una dirección única que la identifica de manera lógica y jerárquica, llamada “dirección IP” o Protocolo de internet (IP de sus siglas en inglés internet Protocol). Esta dirección se compone por una serie de cuatro números separados por puntos, por ejemplo: 192.168.2.19. Para las computadoras es un identificador simple, pero los humanos van a tener dificultad a la hora de recordar y memorizar este tipo de dirección. De esta manera con el propósito de convertir esta serie numérica en algo que podamos asociar con mayor facilidad a la dirección IP se utiliza lo que hoy en día conocemos como nombre de dominio. 
      .col-3.d-none.d-lg-block.align-self-center
        figure
          img(src="@/assets/template/tema-1-15.svg" , alt="Texto que describa la imagen")
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/template/tema-1-16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        .h4.mb-0 Sistema de nombres de dominio DNS
        p Para enviar un mensaje a una computadora, se debe especificar a cuál. Es por ello por lo que toda computadora conectada a una red cuenta con una dirección única que la identifica de manera lógica y jerárquica, llamada “dirección IP” o Protocolo de internet (IP de sus siglas en inglés internet Protocol). Esta dirección se compone por una serie de cuatro números separados por puntos, por ejemplo: 192.168.2.19. Para las computadoras es un identificador simple, pero los humanos van a tener dificultad a la hora de recordar y memorizar este tipo de dirección. De esta manera con el propósito de convertir esta serie numérica en algo que podamos asociar con mayor facilidad a la dirección IP se utiliza lo que hoy en día conocemos como nombre de dominio. 
    .h4.mt-5 Protocolo HTTP
    .row.mt-4
      .col-12.col-lg-8
        p El Protocolo de Transferencia de Hipertexto es un protocolo de aplicación que define un idioma para que los #[strong clientes y servidores] se puedan comunicar. Esto es como el idioma que utilizas para ordenar tus compras. De esta forma, es el nombre de un protocolo el cual nos permite realizar una petición de datos y recursos, como pueden ser documentos HTML. Es la base de cualquier intercambio de datos en la web, y un protocolo de #[strong estructura cliente-servidor], esto quiere decir que una petición de datos es iniciada por el elemento que recibirá los datos (el cliente), normalmente un navegador web.
        p.mt-3 En ese orden de ideas, se han abordado conceptos sobre los componentes que hacen parte de la arquitectura de la internet. Como se ha expuesto, internet es una infraestructura técnica que permite que miles de millones de computadoras estén conectadas entre sí. Algunas, también llamadas #[strong servidores web] que son capaces de enviar mensajes inteligibles a los navegadores. Por tanto, internet es una infraestructura, mientras que la web es un servicio construido sobre dicha infraestructura. Se resalta que existen otros servicios soportados por internet, como es el correo electrónico. #[strong (Moz://a, 2021)]
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-1-17.png" , alt="Texto que describa la imagen")
    #t_1_2.titulo-segundo.mt-5
      .h4 1.2  Arquitectura web
    figure.mt-4
      img(src="@/assets/template/tema-1-18.png" , alt="Texto que describa la imagen")
    .h4.mt-5 Arquitectura Cliente/Servidor
    p.mt-4 Una aplicación web tiene una arquitectura simplificada, como lo es la arquitectura CLIENTE/SERVIDOR, en el que por un lado se encuentra al cliente que está constituido principalmente por un explorador web o web browser, que será el encargado tanto de mostrar como de solicitar información o documentos a través de una red. Las computadoras conectadas a la web se llaman clientes y servidores. Un diagrama simplificado de cómo interactúan se vería de la siguiente forma:
    .row.mt-5
      .col-6.offset-3
        figure
          img(src="@/assets/template/tema-1-19.png" , alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-1-20.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            .h4.mb-0 Cliente web
            p Es una aplicación ejecutable que por lo regular se encuentra previamente instalada en el dispositivo del usuario, permitiendo el acceso a internet y siendo capaces de mostrar y solicitar documentos sobre una red, en ese sentido se infiere que es el responsable de la capa de presentación. 
            p.mt-3 Por tanto, los clientes web son dispositivos de los usuarios conectados a Internet (por ejemplo, tu ordenador conectado a la red Wi-Fi o el teléfono conectado a la red de telefonía móvil) y el software que se encuentra disponible y permite acceder a Internet en dichos dispositivos (normalmente, un navegador web como Firefox o Chrome).
    .row
      .col-10.offset-1
        .bloque-texto-g.bg-acento-contenido-op70.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-1-21.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            .h4.mb-0 Servidor Web
            p En el otro lado de la arquitectura web se tiene al servidor web, cuya actividad más importante es la de atender las solicitudes de los clientes a través de los navegadores web. Es en esta instancia donde se lleva a cabo todo el procesamiento de las aplicaciones y la gestión de los datos. De manera adicional los servidores son computadores que almacenan páginas web, sitios o aplicaciones. 
            p.mt-3 Cuando un dispositivo cliente quiere acceder a una página web, una copia de la página web se descarga desde el servidor en el equipo cliente y se muestra en el navegador web del usuario. Básicamente, un servidor es una gran computadora que guarda y transmite datos vía internet. 
    p.mt-5 Ahora se presenta un esquema que hará más comprensible el abordaje de cada uno de los aspectos que tienen que ver con esta arquitectura.
    .row.mt-4
      .col-12.borde-gris
        .row.p-4
          .col-6.col-lg-4.offset-3.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-22.png" alt="Texto que describa la imagen")
          .col-12.col-lg-8.mt-4.mt-lg-0
            .h4 Arquitectura cliente servidor 
            p.mt-3 Ahora se presenta un esquema que hará más comprensible el abordaje de cada uno de los aspectos que tienen que ver con esta arquitectura.
    .row.mt-4
      .col-12.borde-gris
        .row.p-4
          .col-12.col-lg-8
            p Se inicia con un ejemplo, para este caso se tiene el cliente A, conforme se muestra en anterior.  
            p.mt-3 Este cliente el cual es una computadora u ordenador de escritorio tiene de por sí instalado un explorador web. El usuario Pablo Pérez necesita ingresar a Facebook. Al respecto para ingresar a la red social, se deben registrar las credenciales como login y password, al dar clic en iniciar sesión se está generando de manera inmediata una petición que va desde el cliente hasta el servidor como se muestra en el esquema de la arquitectura. 
          .col-6.col-lg-4.offset-3.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-23.png" alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.borde-gris
        .row.p-4
          .col-12.col-lg-8
            p Se inicia con un ejemplo, para este caso se tiene el cliente A, conforme se muestra en anterior. 
            p.mt-3 Este cliente el cual es una computadora u ordenador de escritorio tiene de por sí instalado un explorador web. El usuario Pablo Pérez necesita ingresar a Facebook. Al respecto para ingresar a la red social, se deben registrar las credenciales como login y password, al dar clic en iniciar sesión se está generando de manera inmediata una petición que va desde el cliente hasta el servidor como se muestra en el esquema de la arquitectura.
          .col-6.col-lg-4.offset-3.offset-lg-0
            figure
              img(src="@/assets/template/tema-1-23.png" alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.borde-gris
        .row.p-4
          .col-6.col-lg-4.offset-3.offset-lg-0
            .h4 Cuadro de Login y password de Facebookz
            figure
              img(src="@/assets/template/tema-1-25.png" alt="Texto que describa la imagen")
          .col-12.col-lg-8.mt-4.mt-lg-0
            p Este ejemplo se puede realizar desde cualquier otro dispositivo, por eso es por lo que la arquitectura Web es considerada como un ambiente multiplataforma y distribuido.
            p.mt-3 Finalmente, se debe tener en cuenta que una Web sigue las siguientes pautas:
            .row
              .col-sm.mb-5.mb-sm-0
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | ¿Cómo inician la conversación?                    
                  li
                    i.fas.fa-angle-right 
                    | ¿A quién le toca comunicarse?
                  li
                    i.fas.fa-angle-right 
                    | ¿Cómo sabe un equipo si su mensaje se ha transmitido correctamente?
                  li 
                    i.fas.fa-angle-right 
                    | ¿Cómo terminan la conversación?”. #[strong (Fisher, 2021)]                   






</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
