<template lang="pug">
  section.app-store
    .container
      h2.app-store-title Скачайте наше мобильное приложение

      .text-center
        a(href="#")
          v-lazy-image.app-store-pic(:src="require(`@/assets/images/appstore.svg`)" alt="")

        a(href="#")
          v-lazy-image.app-store-pic(:src="require(`@/assets/images/googleplay.svg`)" alt="")
    .container
</template>

<script>
export default {
  name: 'AppStore',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.app-store
  background: $color-gray-background
  padding: 31px 0
  color: $color-black

  +media($land, $scaling)
    padding: size(31, $size-land)

  +media($port, ">=tablet")
    padding: size(31, $size-port-tablet)

  +media($port, "<tablet")
    padding: size(19, $size-port) size(38, $size-port)

  //

  .app-store-pic
    height: 38px
    margin: 0 9px

    +media($land, $scaling)
      height: size(38, $size-land)
      margin: 0 size(9, $size-land)

    +media($port, ">=tablet")
      height: size(38, $size-port-tablet)
      margin: 0 size(9, $size-port-tablet)

    +media($port, "<tablet")
      height: size(38, $size-port)
      margin: 0 size(9, $size-port)

  .text-center
    flex: 1

  .container
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: center

    +media($port, "<tablet")
      flex-flow: column wrap
      justify-content: center
      align-items: center
      padding: 0

  .app-store-title
    font-size: 24px
    font-weight: bold
    margin: 0

    +media($land, $scaling)
      font-size: size(24, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(24, $size-port)
      margin-bottom: size(18, $size-port)
      text-align: center

</style>
