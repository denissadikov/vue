<template lang="pug">
  section.call
    v-lazy-image.call-bg(
      v-if="!$store.getters.isPortrait"
      :src="require(`@/assets/images/call-bg.svg`)" alt="")

    .container
      h3.call-title Круглосуточный контактный центр
      .flex-row
        .flex-row-item.w-50
          .header-phone
            .icon.i_phone
            a(href="tel:88005553402") 8 (800) 555-34-02

          p {{'Начисления, прием показаний, обращения и диспетчерская служба' | typograf}}

          ul.call-list
            li.w-50
              .icon.i_real-estate-1
              span Начисление платы за пользования жилым помещение
            li.w-50
              .icon.i_real-estate-1
              span Начисление за жилищно-коммунальные услуги
            li.w-50
              .icon.i_i5
              span Передача показаний приборов учета в автоматическом режиме
            li.w-50
              .icon.i_protection
              span Оказание услуг ненадлежащего качества управляющей организацией
            li.w-50
              .icon.i_real-estate-2
              span Устанение аварийных ситуаций

        .flex-row-item.w-30
          .header-phone
            .icon.i_phone
            a(href="tel:88006002844") 8 (800) 600-28-44

          p Осмотр, прием и сдача жилых помещений

          ul.call-list.-column
            li.w-50
              .icon.i_conversation

              span Осмотр жилых помещений

            li.w-50
              .icon.i_key

              span Прием и сдача жилых помещений

          v-lazy-image.call-pic(
            v-if="!$store.getters.isPortrait"
            :src="require(`@/assets/images/call-pic.svg`)" alt="")

          v-lazy-image.call-pic(
            v-else
            :src="require(`@/assets/images/call-pic.svg`)" alt="")

</template>

<script>
export default {
  name: 'Call',

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

.call
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: stretch
  min-height: 539px
  padding: 60px 0
  position: relative
  overflow: hidden
  content-visibility: auto

  &::before
    opacity: 0.8
    content: ""
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: radial-gradient(485.33% 339.17% at 23.7% 102.46%, #00B7FA 0%, #00A1E3 3.29%, #0073B4 10.77%, #004E8D 18.26%, #00316F 25.62%, #001C59 32.81%, #000F4C 39.76%, #000B48 46.2%, #00041B 100%), $color-white

  +media($land, $scaling)
    min-height: size(539, $size-land)
    padding: size(60, $size-land) 0

  +media($port)
    flex-flow: column nowrap
    justify-content: center
    align-items: center

  +media($port, ">=tablet")
    min-height: size(539, $size-port-tablet)
    padding: size(60, $size-port-tablet) 0
    text-align: center

  +media($port, "<tablet")
    min-height: size(539, $size-port)
    padding: size(78, $size-port) 0
    text-align: center

    .flex-row-item
      width: 100%
      text-align: left

  //

  .w-40, .w-60
    +media($port)
      width: 100%

      &.text-right
        text-align: center

  .call-list
    list-style-type: none
    line-height: 32px
    margin: 0
    padding: 0
    font-size: 14px
    flex-flow: row wrap
    display: flex
    &.-column
      flex-flow: column wrap
    li
      padding-right: 20px
      line-height: 16px
      display: flex
      margin-bottom: 16px
      .icon
        font-size: 24px
        margin-right: 5px
      +media($port)
        width: 100%
        text-align: left

  .call-bg
    position: absolute
    top: 0
    left: 0
    pointer-events: none
    transform: rotate(30deg)

  .call-pic
    width: 400px
    position: absolute
    right: 0
    bottom: 0

    +media($land, $scaling)
      width: size(667, $size-land)
      right: size(-30, $size-land)

    +media($port, ">=tablet")
      width: size(667, $size-port-tablet)
      margin-top: size(30, $size-port-tablet)
      right: 0

    +media($port, "<tablet")
      margin-top: size(30, $size-port)
      position: relative
      justify-content: flex-end

  .header-phone
    margin-left: 0
    margin-top: 19px
    color: $color-white
    a
      color: $color-white
      text-decoration: none

    +media($land, $scaling)
      margin-top: size(19, $size-land)

    +media($port, ">=tablet")
      margin-top: size(40, $size-port-tablet)
      font-size: size(24, $size-port-tablet)

    +media($port, "<tablet")
      margin-top: size(40, $size-port)
      font-size: size(24, $size-port)

  .call-title
    margin: 0 0 15px
    font-size: 26px
    font-weight: bold
    line-height: 1.166666667
    align-items: flex-start
    justify-content: left
    text-align: left

    +media($land, $scaling)
      font-size: size(24, $size-land)
      margin-bottom: size(15, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)
      margin-bottom: size(15, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(24, $size-port)
      margin-bottom: size(15, $size-port)

  .container
    position: relative
    display: flex
    flex-flow: column nowrap
    justify-content: space-around
    align-items: left
    background-color: #0071B9
    border-radius: 5px
    color: $color-white
    padding: 55px 48px
    opacity: 0.9

    +media($port)
      flex-flow: column nowrap
      justify-content: center
      align-items: center
      width: 90%

    p
      font-size: 18px
      font-weight: 500

</style>
