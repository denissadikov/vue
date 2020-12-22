<template lang="pug">
  section.search
    v-lazy-image.search-bg(:src="require(`@/assets/images/search-bg.svg`)" alt="")

    .container
      v-lazy-image.search-pic(:src="require(`@/assets/images/search-pic.svg`)" alt="")

      .w-49
        h3.search-title Коммерческая аренда помещений

        p {{'Учреждение является некоммерческой организацией, созданной для выполнения работ, оказания услуг в целях осуществления предусмотренных законодательством Российской Федерации полномочий  Министерства обороны в сфере социальной защиты военнослужащих, лиц гражданского персонала.' | typograf}}

        form.search-form(novalidate)
          .search-form-item
            button.btn.-mdl.-white.-active(v-ripple type="button") Жилая

            button.btn.-mdl.-grey(v-ripple type="button") Коммерческая

          .search-form-title Количество комнат

          .search-form-item
            button.btn.-mdl.-grey(v-ripple type="button") Студия

            button.btn.-mdl.-white.-active(v-ripple type="button") 1

            button.btn.-mdl.-grey(v-ripple type="button") 2

            button.btn.-mdl.-grey(v-ripple type="button") 3

            button.btn.-mdl.-grey(v-ripple type="button") 4

          .search-form-title Цена

          .search-form-item
            .search-price
              label.search-price-label(for="from") От
              input(id="from" type="text" maxlength="" placeholder="")

              label.search-price-label(for="to") До
              input(id="to" type="text" maxlength="" placeholder="")

          .search-form-title Район

          .search-form-item
            input.search-form-input(type="text" maxlength="150" placeholder="Введите название района")

          button.btn.-mdl.-red(type="submit" v-ripple): b Найти

</template>

<script>
export default {
  name: 'Search',

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

.search
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: stretch
  min-height: 600px
  position: relative
  overflow: hidden
  content-visibility: auto
  background: #00457A
  color: $color-white

  +media($land, $scaling)
    min-height: size(600, $size-land)

  +media($port, ">=tablet")
    min-height: size(600, $size-port-tablet)
    padding-top: size(60, $size-port-tablet)
    padding-bottom: size(115, $size-port-tablet)
    overflow: visible

  +media($port, "<tablet")
    min-height: size(600, $size-port)
    padding-top: size(60, $size-port)
    padding-bottom: size(115, $size-port)
    overflow: visible

  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    pointer-events: none
    background: radial-gradient(77.98% 194.94% at 23.7% 102.46%, #00B7FA 0%, #00A1E3 3.29%, #0073B4 10.77%, #004E8D 18.26%, #00316F 25.62%, #001C59 32.81%, #000F4C 39.76%, #000B48 46.2%, #00041B 100%)
    opacity: 0.4
    transform: matrix(-1, 0, 0, 1, 0, 0)

  //

  .w-49
    +media($port, "<tablet")
      width: 100%

  .search-price-label
    font-size: 14px
    line-height: 1.142857143
    color: #C7C8CA
    width: 43px

    +media($land, $scaling)
      font-size: size(14, $size-land)
      width: size(43, $size-land)

    +media($port, ">=tablet")
      font-size: size(14, $size-port-tablet)
      width: size(43, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(14, $size-port)
      width: size(43, $size-port)

  .search-price
    display: inline-flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center
    background: $color-white
    font-size: 14px
    line-height: 1.142857143
    padding: 8px 11px
    border-radius: 6px
    width: 266px
    max-width: 100%
    border: 1px solid transparent
    height: 34px

    +media($land, $scaling)
      font-size: size(14, $size-land)
      padding: size(8, $size-land) size(11, $size-land)
      border-radius: size(6, $size-land)
      width: size(266, $size-land)
      height: size(34, $size-land)

    +media($port, ">=tablet")
      font-size: size(14, $size-port-tablet)
      padding: size(8, $size-port-tablet) size(11, $size-port-tablet)
      border-radius: size(6, $size-port-tablet)
      width: size(266, $size-port-tablet)
      height: size(34, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(14, $size-port)
      padding: size(8, $size-port) size(11, $size-port)
      border-radius: size(6, $size-port)
      width: size(266, $size-port)
      height: size(34, $size-port)

    input
      border: 0
      width: 78px
      padding: 5px

      +media($land, $scaling)
        width: size(75, $size-land)
        padding: size(5, $size-land)

      +media($port, ">=tablet")
        width: size(75, $size-port-tablet)
        padding: size(5, $size-port-tablet)

      +media($port, "<tablet")
        width: size(75, $size-port)
        padding: size(5, $size-port)

  .search-form-input
    background: $color-white
    font-size: 14px
    line-height: 1.142857143
    padding: 8px 11px
    border-radius: 6px
    width: 266px
    max-width: 100%
    border: 1px solid transparent

    +media($land, $scaling)
      font-size: size(14, $size-land)
      padding: size(8, $size-land) size(11, $size-land)
      border-radius: size(6, $size-land)
      width: size(266, $size-land)

    +media($port, ">=tablet")
      font-size: size(14, $size-port-tablet)
      padding: size(8, $size-port-tablet) size(11, $size-port-tablet)
      border-radius: size(6, $size-port-tablet)
      width: size(266, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(14, $size-port)
      padding: size(8, $size-port) size(11, $size-port)
      border-radius: size(6, $size-port)
      width: size(266, $size-port)

  .search-form-title
    font-weight: bold
    font-size: 14px
    line-height: 1.142857143
    margin-bottom: 11px

    +media($land, $scaling)
      font-size: size(14, $size-land)
      margin-bottom: size(11, $size-land)

    +media($port, ">=tablet")
      font-size: size(14, $size-port-tablet)
      margin-bottom: size(11, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(14, $size-port)
      margin-bottom: size(11, $size-port)

  .search-form
    margin-top: 35px

    +media($land, $scaling)
      margin-top: size(35, $size-land)

    +media($port, ">=tablet")
      margin-top: size(35, $size-port-tablet)

    +media($port, "<tablet")
      margin-top: size(35, $size-port)

    .btn
      margin-right: 5px

  .search-form-item
    margin-bottom: 16px

    +media($land, $scaling)
      margin-bottom: size(16, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(16, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(16, $size-port)

    &:last-child
      margin-bottom: 0

  .search-title
    margin: 0 0 12px
    font-size: 24px
    line-height: 1.166666667
    font-weight: bold

    +media($land, $scaling)
      font-size: size(24, $size-land)
      margin-bottom: size(12, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)
      margin-bottom: size(12, $size-port-tablet)
      text-align: center

    +media($port, "<tablet")
      font-size: size(24, $size-port)
      margin-bottom: size(12, $size-port)
      text-align: center

  .search-pic
    width: 403px

    +media($land, $scaling)
      width: size(403, $size-land)

    +media($port, ">=tablet")
      width: size(403, $size-port-tablet)
      margin-bottom: size(60, $size-port-tablet)

    +media($port, "<tablet")
      width: size(234, $size-port)
      margin-bottom: size(60, $size-port)

  .container
    position: relative
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

    +media($port)
      text-align: center
      flex-flow: column nowrap
      justify-content: center
      align-items: center

  .search-bg
    position: absolute
    right: 0
    bottom: 0
    width: 100%
    opacity: 0
    pointer-events: none

    +media($port)
      right: auto
      left: -50vw
      transform: rotate(90deg)

    &.-mod
      &.v-lazy-image-loaded
        right: -96px
        opacity: .4

    &.v-lazy-image-loaded
      bottom: -36px
      opacity: 1
      right: -30px
      width: 1016px

      +media($land, $scaling)
        bottom: size(-36, $size-land)
        right: size(-30, $size-land)
        width: size(1016, $size-land)

      +media($port, ">=tablet")
        bottom: size(150, $size-port-tablet)
        left: size(-380, $size-port-tablet)
        max-width: none
        right: auto
        width: 127.274vmin

      +media($port, "<tablet")
        bottom: size(150, $size-port)
        left: size(-180, $size-port)
        max-width: none
        right: auto
        width: 127.274vmin

</style>
