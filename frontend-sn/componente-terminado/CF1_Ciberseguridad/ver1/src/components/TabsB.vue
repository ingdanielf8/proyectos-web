<template lang="pug">
.tabs-b
  .tabs-b__header.row.m-0
    .col-6.col-sm-4.col-lg.tabs-b__tab(
      v-for="(elm,index) of elements"
      :key="'tabs-b-menu-'+elm.id"
      :class="{'tabs-b__tab--active' : selected === elm.id}"
      @click="selected = elm.id"
    )
      .tabs-b__tab__title {{elm.titulo}}
  
  .tabs-b__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-html="elm.html"
  )

  .tabs__slot
    slot
</template>

<script>
import componentSlotMixins from '../mixins/componentSlotMixins'
export default {
  name: 'TabsB',
  mixins: [componentSlotMixins],
  props: {
    titulo: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.tabs-b__tab__title
.tabs-b__content-item
  background-color: #EBF0F3
.h4
  color: $color-curso-c
</style>
