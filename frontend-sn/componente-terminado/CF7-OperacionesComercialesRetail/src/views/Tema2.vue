<template lang="pug">
.curso-main-container.pb-3(style="overflow: hidden")
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(style="overflow: hidden")
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Validación de transacciones
    p.mt-5 Para este proceso se deben tener en cuenta algunos cuidados al momento de registrar los productos y así evitar los reclamos, robos y averiar los productos, los cuales verá a continuación.
    .position-relative
      SlyderA
        .row.bg-tema-2-1.rounded-20.position-slider(style="margin-left:0%").p-5
          .col-5.p-5.bg-gris.rounded-20.cuadro-gris
            p Debe tener concentración en el registro, sin descuidar lo que pasa alrededor del puesto de pago.

        div.row.bg-tema-2-2.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-5.p-5.bg-gris.rounded-20.cuadro-gris
            p Constantemente debe verificar que el producto que muestra el visor es precisamente el que acaba de pasar por el escáner, en los textiles también debe verificar el precio de la etiqueta.
        .row.bg-tema-2-3.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-5.p-5.bg-gris.rounded-20.cuadro-gris
            p Cuando registre debe verificar que la mercancía esté en perfecto estado, vajillas, huevos, etc.
        .row.bg-tema-2-4.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            p Cuando registre un producto lo debe ubicar con cuidado y organizadamente en el lugar de empaque, recuerde que la mercancía es del cliente.  
        .row.bg-tema-2-5.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            p  Debe retirar o desactivar los tag’s de seguridad, recuerde que algunos proveedores los colocan a sus productos, como cosméticos, medicamentos, algunas marcas de leche en polvo, libros y revistas o los hard tag que le colocan a los textiles, zapatos y otros productos que no se dañan con este sistema de seguridad. 
        .row.bg-tema-2-6.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            p Debe revisar con sutileza los recipientes con tapa o empacados en cajas, baldes, ollas, planchas, licuadoras, vajillas, licores, tinturas y las cremas dentales que vea que han sido destapadas. Estos productos se prestan para guardar mercancía o cambiar su contenido. Su revisión también le permite verificar su estado.  
        div.row.bg-tema-2-7.rounded-20.position-slider(style="margin-left:0%").p-5  
          .col-6.p-5.bg-gris.rounded-20.cuadro-gris
            p Los textiles, calzado y productos de papelería los debe revisar al registrar o empacar, tocando los bolsillos de las prendas, revisando las tallas de los zapatos y hojeando las revistas y cuadernos.  Productos como los bombillos deben verificarse con el cliente si fueron ensayados.  
    .row.mt-5(data-aos="slide-up")
      .col-7.px-4
        .h4.text-morado El desactivador de tag’s
        p.mt-4 Es el equipo para que se desactiven los tag’s o dispositivos de seguridad que le colocan en el almacén a los productos para evitar que salgan sin ser registrados, la mayoría de ellos son de textiles, variedades y licores.
        p.mt-3 Los puestos de pago también tienen incorporado un desactivador para los tag’s que traen internamente en el empaque algunos cosméticos y medicamentos, estos dispositivos son colocados por el fabricante y no son reutilizables.
        .cajon.color-secundario.mt-4
          .row.p-4            
            p Siempre se debe retirar y/o deshabilitar el tag del producto para evitar que se activen las alarmas en las salidas del almacén, incomodando al cliente.
      .col-5.zoom-in
        figure
          img(src="@/assets/template/tema-2-8.png", alt="Texto que describa la imagen")
    separador.mt-4
    
    .titulo-segundo.mt-5
      #t_2_1.h2 2.1   Precios
    .row.mt-5.zoom-in
      .col-7.align-self-center
        p Cuando  se habla del precio se hace referencia a que a todo producto o servicio se le da una cuantía representativa, la calidad y la cantidad forman parte del intercambio de productos y servicios que se conoce como compra-venta, a lo largo del tiempo el hombre ha adoptado este término para hacer correspondencia a lo que se tiene que pagar por algún producto o servicio.
        p.mt-3 Cabe destacar que el término precio hace referencia a la cantidad de dinero que se necesita para poder adquirir un bien o servicio, incluso un objeto, mediante los diferentes tipos de dinero que existen, pero depende de la región donde se esté haciendo la compra.
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-2-9.png", alt="Frutas y verduras con precios")
    .h4.mt-5.text-morado Características de los precios
    p.mt-4 Se puede señalar que la principal característica del término precio corresponde al hecho de que este se mide a través de unidades monetarias y se les asigna un valor definido, además cambia de acuerdo con la región en la que se haga la transacción de compraventa de bienes, productos o servicios. De todos modos, el precio se encarga de indicar la relación en el intercambio de servicios y bienes que son posibles para los clientes dentro del mercado.
    separador.mt-4
    
    .titulo-segundo.mt-5
      #t_2_2.h2  2.2 Legalidad de medios de pago
    p.mt-5 Cabe destacar que cuando se habla de un medio de pago se habla del instrumento que permite comprar productos o servicios, se puede decir que es un bien equivalente al dinero o a las tarjetas débito o crédito que permiten hacer compras o pagar deudas, el dinero sirve como medio de pago o de cambio e incluso como forma de ahorro.
    .h4.text-morado Ejemplos de medio de pago
    p.mt-4 Algunos medios de pago son:
    .row.mt-5.py-3.bg-azul-claro(data-aos="slide-left")
      .col-4
        figure
          img(src="@/assets/template/tema-2-10.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
      .col-8.align-self-center
        ul.lista-ul
          li 
            i.fa-brain
            | El dinero, monedas y billetes que a su vez, hacen las veces de medio de cambio.
          li.mt-4
            i.fa-brain
            | Los cheques, en todas sus modalidades.
          li.mt-4 
            i.fa-brain
            | Las tarjetas de débito o crédito.
          li.mt-4 
            i.fa-brain
            | Los instrumentos de pago por Internet como Paypal también son medios de pago.
    .row.mt-5
      .col-7
        .row      
          .col-12.px-4.align-self-center.cuadro-morado-fondo.align-self-center
            p En los últimos años se ha incrementado el número de personas que efectúan transacciones, es una creciente tendencia teniendo en cuenta el volumen de transacciones que se llevan a cabo en la economía mundial.
            p.mt-3 Las empresas comerciales, instituciones financieras y autoridades han encontrado alternativas para masificar los servicios a través del uso del plástico (crédito, débito, prepagadas) y pagos móviles desde celulares, las diferentes plataformas que se encuentran en la Internet tienen el propósito de atender una creciente demanda que masifica la experiencia de pagos, los avances tecnológicos contribuyen de manera importante y no dejarán de sorprender.
          .col-12.mt-3.px-4
            p.mt-3 Más allá de factores como la rapidez o la accesibilidad en la modalidad de pago que se escoja, la experiencia cotidiana enseña que en el momento de verdad esa diversidad de medios de pago es fundamental a la hora de escoger las diferentes opciones que ofrece el mercado, para esa selección es importante tener en cuenta que existen dos aspectos básicos:
      .col-5.zoom-in.px-5
        figure
          img(src="@/assets/template/tema-2-11.svg", alt="Texto que describa la imagen")
    .row.mt-5(data-aos="slide-up")
      .col-md-6.col-xl-3.mb-4.mb-xl-0.offset-3
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero.px-4
            .h2 1
          p
            .h4 Incentivo: 
          p.mt-3 Es el costo-beneficio que recibe el cliente con respecto a las ventajas que lo exoneran al utilizar cada uno de los medios de pago.
      .col-md-6.col-xl-3.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero.px-4
            .h2 2
          p
            .h4 Condiciones de seguridad (confiabilidad):
          p.mt-3 Es la seguridad que ofrecen las instituciones con las alternativas de sus medios de pago.
    p.mt-5 Con respecto al tema de costo beneficio, cada empresa oferta diferentes planes de mercadotecnia o estrategia que considere atractiva para su público objetivo.
    .row.mt-5.zoom-in
      .col-6
        p En las condiciones actuales teniendo en cuenta el reto principal que es la aceptación de las diferentes opciones de medios de pago, uno de los mayores atractivos para el cliente es el argumento de la seguridad que ofrezca cada alternativa y sobre todo la percepción que tenga el público usuario. Así como se ha señalado, la tecnología no dejará de sorprender en cuanto a seguridad se refiere, recuerde que la tecnología tiene dos caras, una positiva y una negativa que vulnera los sistemas o medios de pago.
        p.mt-3 Las autoridades que tienen que ver con medios de pago en Colombia han avanzado en la regulación de nuevas modalidades que cumplan con correctas opciones de medios de pago para que el cliente incremente su nivel de confiabilidad y perciba absolutamente la funcionalidad de la condición de seguridad más elemental, que lo invite a hacer uso de las nuevas opciones.
      .col-6.align-self-center
        figure
          img(src="@/assets/template/tema-2-12.png", alt="Texto que describa la imagen").px-5
    separador.mt-4 

    .titulo-segundo.mt-5
      #t_2_3.h2 2.3   Seguridad y herramientas
    .row.mt-5.zoom-in(data-aos="zoom-in")
      .col-6
        figure
          img(src="@/assets/template/tema-2-13.png", alt="Texto que describa la imagen").px-5
      .col-6
        p Los métodos de pago seguros en Colombia tienen una relevancia en el mundo del comercio electrónico, estos métodos son aquellos donde todas las operaciones se realizan de forma telemática, son las herramientas con las que se transfiere el dinero del comprador al vendedor, la fase crítica se da en las tiendas online, por eso los propietarios de un e-commerce necesitan tener sus medios de pago bajo control y para ello necesitan saber cómo funcionan.
        p.mt-3 Se puede definir un método de pago online como un instrumento que permite recibir pagos de los clientes de forma inmediata, el dinero se dirige del comprador al vendedor pasando por un puente de pagos, que regula y autoriza el flujo.
    p.mt-5 Los diferentes niveles de seguridad que existen en las plataformas de pago online agrupan los terminales de punto de venta virtuales (TPV virtual) que otorgan las entidades bancarias o los medios de pago, y que no dependen de ningún banco, ni de los pagos PayPal, Stripe o similares.
    .row.mt-5.py-3.bg-azul-claro(data-aos="slide-right")
      .col-4
        figure
          img(src="@/assets/template/tema-2-14.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
      .col-8.align-self-center
        ul.lista-ul
          li 
            i.fa-brain
            | El conocido como modo seguro o 3D Secure.
          li.mt-4
            i.fa-brain
            | El modo mixto.
          li.mt-4 
            i.fa-brain
            | Modo normal o sin 3D Secure.
    p.mt-5 La mayoría de las entidades bancarias conceden de forma automática a los independientes y pymes un TPV (Terminal punto de venta virtual), estos contienen un nivel de seguridad para poder recibir pagos en su e-commerce, el nivel de seguridad exige que todas las compras sean efectuadas con tarjetas que cumplan con el protocolo 3D Secure.
    .row.mt-5(data-aos="zoom-in")
      .col-10.offset-1
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/template/tema-2-15.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0  Hay que tener en cuenta que todas las tarjetas débito y crédito están compuestas por 16 dígitos, tienen fecha de caducidad y un criptograma visual (CVV) de tres dígitos de control para la verificación de la transacción en el sitio web del banco, el cual pide una clave adicional como medida de seguridad, que ayuda a disminuir los niveles de inseguridad en los pagos que se realizan con tarjetas débito y crédito, ofreciendo confiabilidad en los pagos electrónicos que realizan los clientes.
    .row.mt-5.zoom-in
      .col-7.cuadro-morado-fondo.align-self-center
        p La condición o circunstancia desventajosa para las tiendas online es que a pesar de que algunas de las tarjetas 3D Secure están habilitadas para las compras online, fallan al momento de la compra, las tarjetas se entregan deshabilitadas cuando las entrega la entidad financiera o cuando se renuevan y requieren una activación inicial con el banco.
        p.mt-3 Para habilitar una tarjeta con 3D Secure y que esté disponible al momento de la compra online en un TPV virtual tan solo hay que contactar al banco para habilitar esta opción, el inconveniente que genera esta operación es que hay compradores que a pesar de que se está viviendo una revolución en las formas de pago, aún no se han adaptado a esta tecnología por los niveles de desconfianza que existen.
      .col-5.align-self-center
        figure
          img(src="@/assets/template/tema-2-16.svg", alt="Imagen descriptiva").w-75.margin-0-auto
    separador.mt-4
    
    .titulo-segundo.mt-5
      #t_2_4.h2 2.4   Excedentes de pago
    .row.mt-5.py-3.bg-azul-claro(data-aos="slide-left")
      .col-8.align-self-center.pl-5
        p Cuando suceda que al momento del arqueo haya menos dinero del que debería haber o que haya un valor de caja mayor que el reportado, son errores comunes que se pueden presentar en el cierre de caja.
        p.mt-3 El proceso de arqueo o cierre de caja es un proceso contable que se realiza al final de una jornada de ventas para saber si el efectivo más otros comprobantes de pago físicos coinciden con los valores reportados en la venta de caja.
        p.mt-3 Toda caja hace su apertura con un valor inicial en efectivo, con el fin de que haya una base como punto de partida de las operaciones diarias, durante el día se hacen ventas que se pagan con diferentes medios de pago tales como efectivo, tarjetas débito, crédito, bonos, cheques, redenciones de sistemas de puntos, pagos a plazos, créditos internos, etc.
      .col-4
        figure
          img(src="@/assets/template/tema-2-17.svg", alt="Texto que describa la imagen").w-75.margin-0-auto.floating
    .h4.mt-5.text-morado En el proceso de arqueo o cierre de caja se pueden detectar los siguientes errores presentes en el punto de pago:
    .row.mt-5(data-aos="slide-up")
      .col-10.offset-1
        .row.text-center.py-4.bg-azul-claro
          .h4 Errores en el arqueo de caja
        .row.py-4.bg-gris.px-4
          .h4.text-morado Faltantes de dinero, lo cual puede suceder por:
          .col-4.mt-5.p-4.align-self-center
            figure
              img(src="@/assets/template/tema-2-18.svg", alt="Texto que describa la imagen")
          .col-8.mt-5
            ul.lista-ul
              li 
                i.fa-brain
                | Dar devoluciones superiores a los clientes.
              li.mt-4
                i.fa-brain
                | No tener en cuenta salidas de dinero para compras u otros gastos del negocio.
              li.mt-4
                i.fa-brain
                | Se pierden comprobantes de pago.
              li.mt-4
                i.fa-brain
                | No se registran algunos descuentos concedidos a los clientes.
              li.mt-4
                i.fa-brain
                | Cuando se registra y no se tiene en cuenta si son ventas a crédito o por plazos.
              li.mt-4
                i.fa-brain
                | Robo.
          .h4.text-morado.mt-5 Sobrantes de dinero, lo cual puede suceder por:
          ul.lista-ul.mt-4
            li 
              i.fa-brain
              | El cajero entrega menos devolución de dinero.
            li.mt-4
              i.fa-brain
              | Algunas entradas recibidas por el cajero no son contabilizadas.
            li.mt-4
              i.fa-brain
              | Se cobra un valor mayor al cliente por las compras realizadas.
          figure(style="margin-top: -3.5rem").pb-5
            img(src="@/assets/template/tema-2-19.svg")
        .cajon.color-secundario.mt-5.mx-5
          .row.p-4            
            p Las tarjetas de crédito, débito o cheques tienen un manejo diferente, estos documentos deben ser protegidos para poder realizar las conciliaciones bancarias en el momento de recibir los extractos bancarios.
    separador.mt-4

    .titulo-segundo.mt-5
      #t_2_5.h2 2.5    Devoluciones 
    .row.mt-5.zoom-in
      .col-7.align-self-center
        p Las devoluciones de mercancía que deben asumir las empresas para mantener una buena relación con los clientes le permiten minimizan el impacto económico que implican. La creciente incorporación del modelo omnicanal, es uno de los grandes impulsores de las devoluciones. Para muchas organizaciones la devolución es un dolor de cabeza, pero resulta que, para otras, es una forma natural de hacer negocios.
        .cajon.color-secundario.mt-4
          .row.p-4            
            p El secreto en el manejo de las devoluciones de productos reside en la capacidad que tienen las organizaciones para hacerlas, esto permite comercializar nuevamente lo que esté en buenas condiciones y rescatar del producto las partes útiles que se puedan recuperar y volver a vender en su estado original.
      .col-5
        figure
          img(src="@/assets/template/tema-2-20.svg", alt="Caja registradora").w-75.margin-0-auto



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
