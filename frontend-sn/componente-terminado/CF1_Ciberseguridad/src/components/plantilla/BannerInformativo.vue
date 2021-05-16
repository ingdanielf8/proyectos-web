<template lang="pug">
.container-fluid.banner-informativo(
    :style="{'background-image': `url(${globalData.fondoBannerPrincipal})`}"
  )
  .row.p-4
    .banner-informativo__titulo.col-12
      .banner-informativo__titulo__icono.me-3(v-if="icono.length")
      p.text-white {{info}}
</template>

<script>
import { global } from '../../config/global'
export default {
  name: 'Bannerinformativo',
  props: {
    icono: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.banner-informativo
  position: relative
  border-radius: 15px
</style>
