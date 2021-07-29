<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Componentes de una aplicación android
    figure.mt-4
      img(src="@/assets/template/tema-5-1.png", alt="Texto que describa la imagen")
    p.mt-5 Los componentes de la aplicación son mecanismos de creación básicos de una aplicación para Android. Cada componente es un punto de entrada por el que el sistema o un usuario ingresan a una aplicación. Algunos componentes dependen de otros.
    p Las aplicaciones tienen cuatro tipos de componentes diferentes: actividades, servicios, receptores de emisiones, proveedores de contenido.
    .titulo-segundo.mt-5
      #t_5_1.h4 5.1  Actividades
    .row.mt-5
      .col-8.offset-2.py-3.rounded-20.borde-primario-4
        .row
          .col-3.d-none.d-lg-block.align-self-center
            figure.borde-gris-der
              img(src="@/assets/template/tema-5-2.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
          .col-12.col-lg-9.align-self-center.px-4
            p.m-0 Las actividades representan el componente principal de la interfaz gráfica, es una pantalla individual con una interfaz de usuario. Por ejemplo, una aplicación de fotos tiene una actividad que muestra una lista de opciones de edición y otra actividad para editar.
    .titulo-segundo.mt-5
      #t_5_2.h4 5.2  Servicios
    .row.mt-5
      .col-8.offset-2.py-3.rounded-20.borde-primario-4
        .row
          .col-3.d-none.d-lg-block.align-self-center.px-3
            figure.borde-gris-der
              img(src="@/assets/template/tema-5-3.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-9.align-self-center.px-4
            p.m-0 Los servicios (service) son componentes sin interfaz gráfica que se ejecutan en segundo plano. Conceptualmente, son similares a los servicios presentes en cualquier otro sistema operativo. Los servicios pueden realizar cualquier tipo de acción, por ejemplo, actualizar datos, lanzar notificaciones, o incluso mostrar elementos visuales (p.ej. actividades) si se necesita en algún momento la interacción con el usuario.
    .titulo-segundo.mt-5
      #t_5_3.h4 5.3 Proveedores de contenido
    .row.mt-5
      .col-8.offset-2.py-3.rounded-20.borde-primario-4
        .row
          .col-3.d-none.d-lg-block.align-self-center.px-3
            figure.borde-gris-der
              img(src="@/assets/template/tema-5-4.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
          .col-12.col-lg-9.align-self-center.px-4
            p.m-0 Un proveedor de contenidos (content provider) es el mecanismo que se ha definido en Android para compartir datos entre aplicaciones. Mediante estos componentes es posible compartir determinados datos de nuestra aplicación sin mostrar detalles sobre su almacenamiento interno, su estructura, o su implementación. De la misma forma, nuestra aplicación podrá acceder a los datos de otra a través de los content provider que ésta última haya definido.
    .titulo-segundo.mt-5
      #t_5_4.h4 5.4  Receptores de emisiones
    .row.mt-5
      .col-8.offset-2.py-3.rounded-20.borde-primario-4
        .row
          .col-3.d-none.d-lg-block.align-self-center.px-4
            figure.borde-gris-der
              img(src="@/assets/template/tema-5-5.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
          .col-12.col-lg-9.align-self-center.px-4
            p.m-0 Un broadcast receiver es un componente destinado a detectar y reaccionar ante determinados mensajes o eventos globales generados por el sistema (por ejemplo: “Batería baja”, “SMS recibido”, “Tarjeta SD insertada”…) o por otras aplicaciones [cualquier aplicación puede generar mensajes (intents, en terminología Android) de tipo broadcast, es decir, no dirigidos a una aplicación concreta sino a cualquiera que quiera escucharlo].


</template>

<script>
export default {
  name: 'Tema5',
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
