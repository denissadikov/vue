<template lang="pug">
  section.entry
    .container
      .flex-row.-stretch
        .flex-row-item.entry-left.w-60
          v-lazy-image.entry-bg(:src="require(`@/assets/images/bg-city.svg`)" alt="")
        .flex-row-item.entry-right.w-40
          .entry-order
            .entry-phone
              .icon.i_phone
              a(href="tel:88005553402") 8 (800) 555-34-02
            .entry-title Для обращений в расчетно-кассовый центр<br/> и аварийную диспетчерскую
            .entry-hr
            .entry-phone
              .icon.i_phone
              a(href="tel:88006002844") 8 (800) 600-28-44
            .entry-title Подайте заявку на осмотр для приема/сдачи жилого<br>помещения одним звонком

            .entry-utp #Мы ценим ваше время

        <!--.btn(v-ripple) Оформить-->
      Splitter
</template>

<script>
import Splitter from '@/components/home/Splitter.vue';

export default {
  name: 'Entry',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { Splitter },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.entry
  overflow: hidden
  position: relative
  text-align: center

  .entry-left
    padding: 150px 20px
    position: relative
    align-items: center
    justify-content: center
    height: 100%

    &:before
      content: ''
      background: linear-gradient(to left, #0073B4 10%, #004E8D 90%)
      /*opacity: 0.8*/
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      height: 100%

    +media($port)
      padding-top: 150px
      padding-bottom: 0
      justify-content: center
      &.w-60
        width: 100%

  .entry-right
    padding: 150px 0

    +media($port)
      position: absolute
      color: $color-white
      padding: 0
      top: 5%
      &.w-40
        width: 100%

  +media($land, $scaling)
    padding-top: size(24, $size-land)
    margin-bottom: size(48, $size-land)

  +media($port, ">=tablet")
    padding-top: size(4, $size-port-tablet)
    margin-bottom: size(48, $size-port-tablet)

  +media($port, "<tablet")
    padding-top: size(4, $size-port)
    margin-bottom: size(36, $size-port)

  .entry-utp
    color: $color-blue
    line-height: 32px
    font-size: 20px
    +media($port)
      color: $color-white

  .entry-hr
    height: 1px
    background-color: $color-grey
    margin-bottom: 20px
    width: 80%
  .entry-phone
    color: $color-black
    font-size: 26px
    line-height: 32px
    position: relative
    a
      text-decoration: none
      color: $color-black
      +media($port)
        color: $color-white

    &:after
      content: ''
      position: absolute
      height: 1px
      border-bottom: 1px solid $color-white
      align-items: center
      justify-content: center
      bottom: 0
      left: 0
      right: 0
      width: 100%
    +media($port)
      color: $color-white
      font-size: size(24, $size-port)

    .icon
      margin-right: 10px
      font-size: 24px

  .entry-title
    font-size: 16px
    margin-bottom: 21px
    line-height: 1.125
    color: $color-grey-dark
    margin-top: 8px

    +media($land, $scaling)
      font-size: size(16, $size-land)
      margin-top: size(8, $size-land)

    +media($port, ">=tablet")
      font-size: size(18, $size-port-tablet)
      margin-top: size(8, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(18, $size-port)
      margin-top: size(8, $size-port)
      margin-bottom: size(28, $size-port)
      color: $color-white

  .entry-order
    z-index: 1
    margin-top: -60px
    padding: 0 0 0 40px
    height: 100%
    right: 20px
    text-align: left

    +media($land, $scaling)
      padding: size(20, $size-land)
      width: size(340, $size-land)
      top: size(9, $size-land)
      right: size(20, $size-land)

    +media($port, ">=tablet")
      padding: 0
      width: auto
      top: auto
      right: auto
      position: static
      margin: 0 auto
      background: none
      box-shadow: none

    +media($port, "<tablet")
      padding:  size(20, $size-port)
      width: auto
      top: auto
      right: auto
      position: static
      margin: 0 auto
      background: none
      box-shadow: none

    .btn
      min-width: 180px

      +media($land, $scaling)
        min-width: size(180, $size-land)

      +media($port, ">=tablet")
        min-width: size(180, $size-port-tablet)

      +media($port, "<tablet")
        min-width: size(180, $size-port)

  .container
    position: relative

    +media($port)
      .flex-row
        flex-flow: column nowrap
        justify-content: center
        align-items: center

  .entry-bg
    position: relative
    width: 100%
    height: 100%

    +media($land, $scaling)
      width: size(999, $size-land)
      height: size(266, $size-land)

    +media($port, ">=tablet")
      width: size(999, $size-port-tablet)
      height: size(266, $size-port-tablet)

    +media($port, "<tablet")
      height: size(263, $size-port)

</style>
