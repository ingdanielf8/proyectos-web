<template lang="pug">
.btns
  img(src='@/assets/template/tema1-1-linea.svg', alt='Normativa ambiental', style="padding-top:14%; margin-left:6%; width:87%")
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-3(v-if="index === hover")
      h4.mb-1.text-small {{boton.titulo}}
      p.text-small {{boton.texto}}

</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '14%',
    botones: [
      {
        img: require('@/assets/template/tema1-boton1-1.png'),
        img_h: require('@/assets/template/tema1-boton1-2.png'),
        pos_x: '-1.75%',
        pos_y: '7.1%',
        titulo: 'IEC DIS 20546',
        texto: 'Tecnología de la información- Big Data-Resumen y vocabulario.',
      },
      {
        img: require('@/assets/template/tema1-boton2-1.png'),
        img_h: require('@/assets/template/tema1-boton2-2.png'),
        pos_x: '9.36%',
        pos_y: '7.1%',
        titulo: 'IEC 20547-1',
        texto:
          'Tecnología de la información - Arquitectura de referencia de Big Data- Parte 1: Marco y proceso de solicitud ',
      },
      {
        img: require('@/assets/template/tema1-boton3-1.png'),
        img_h: require('@/assets/template/tema1-boton3-2.png'),
        pos_x: '20.26%',
        pos_y: '7.1%',
        titulo: 'IEC  20547-2',
        texto:
          '2018 Tecnología de la información - Parte 2: Casos de uso y requisitos',
      },
      {
        img: require('@/assets/template/tema1-boton4-1.png'),
        img_h: require('@/assets/template/tema1-boton4-2.png'),
        pos_x: '31.46%',
        pos_y: '7.1%',
        titulo: 'IEC 20547-3',
        texto:
          'Tecnología de la información - Arquitectura de referencia de Big Data - Parte 3, 4 y 5',
      },
      {
        img: require('@/assets/template/tema1-boton5-1.png'),
        img_h: require('@/assets/template/tema1-boton5-2.png'),
        pos_x: '42.5%',
        pos_y: '7.1%',
        titulo: 'FDIS 56002',
        texto:
          'Directrices para desarrollo, implementación, y mejora continua de un sistema de gestión de la innovación (UNE 166002).',
      },
      {
        img: require('@/assets/template/tema1-boton6-1.png'),
        img_h: require('@/assets/template/tema1-boton6-2.png'),
        pos_x: '53.60%',
        pos_y: '7.1%',
        titulo: 'IEC 27002:2013',
        texto:
          'Stántard para la seguridad de la información (manejo de errores, fallas, brechas y seguridad técnica).',
      },
      {
        img: require('@/assets/template/tema1-boton7-1.png'),
        img_h: require('@/assets/template/tema1-boton7-2.png'),
        pos_x: '64.71%',
        pos_y: '7.1%',
        titulo: 'IEC 30141',
        texto:
          'Sobre internet de las cosas (Iot)- Arquitectura de referencia, vocabulario diseño y desarrollo de aplicaciones Iot.',
      },
      {
        img: require('@/assets/template/tema1-boton8-1.png'),
        img_h: require('@/assets/template/tema1-boton8-2.png'),
        pos_x: '75.6%',
        pos_y: '7.1%',
        titulo: 'IEC 22989',
        texto: 'Inteligencia Artificial - Conceptos y terminología.',
      },
      {
        img: require('@/assets/template/tema1-boton9-1.png'),
        img_h: require('@/assets/template/tema1-boton9-2.png'),
        pos_x: '86.95%',
        pos_y: '7.1%',
        titulo: 'IEC 23894',
        texto:
          'Tecnología de la información- Inteligencia Artificial- Gestiona del riesgo',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color: #FFF
    width: 180px
    font-weight: bold
    text-align: center
    z-index: 100
    line-height: 1.2em
    border: 4px solid #111E61
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__text
    width: 220px
  .btns__item:nth-child(1n) .btns__text
    left: 140%
  .btns__item:nth-last-child(2n) .btns__text
    left: 40%
  .btns__item:nth-last-child(3n) .btns__text
    left: 35%
  .btns__item:last-child .btns__text
    left: -40%
</style>
