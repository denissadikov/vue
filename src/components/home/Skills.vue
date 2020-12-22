<template lang="pug">
  section.skills
    v-lazy-image.skills-bg(:src="require(`@/assets/images/bg.svg`)" alt="")

    .container
      .flex-row.-stretch
        .flex-row-item.w-50
          .flex-column
            .flex-column-item
              .mission
                .mission-title Наша цель

                p В рамках перехода на единую систему содержания и управления жилищным фондом в Минобороны России создана
                  |  специализированная некоммерческая организация в форме федерального государственного автономного
                  | учреждения ФГАУ «Росжилкомплекс».

                p Переход к единой системе управления позволит создать эффективный инструмент комплексного управления,
                  | контролировать использование и эксплуатацию жилищного фонда, автоматизировать процесс и сократить время
                  | на распределение и заселение жилых помещений.

                p ФГАУ «Росжилкомплекс» будет осуществлять весь спектр работ и услуг по управлению и распоряжению
                  |  ведомственным жилищным фондом, от обеспечения военнослужащих жилыми помещениями до проведения
                  | благоустройства и содержания жилых зон на территории военных городков.
                  | Ранее эти функции были распределены между центральными органами военного управления и организациями
                  | Минобороны России.
            .flex-column-item(v-if="$store.getters.isPortrait")
                v-lazy-image.skills-pic(:src="require(`@/assets/images/skills-pic.svg`)" alt="")
            .flex-column-item
              .flex-row.-stretch
                .flex-row-item
                  .skills-set
                    .skills-item
                      .skills-title Управляющие компании

                      .skills-col
                        p {{'Деятельность всех управляющих компаний: финансовый, аналитический, юридический блоки, стандартизированная система коммуникаций.' | typograf}}

                        .icon.i_i3

                    .skills-item
                      .skills-title РСО

                      .skills-col
                        p {{'Все поставщики ресурсов собраны в удобный каталог, чтобы вы не путались.' | typograf}}

                        .icon.i_i2

                    .skills-item
                      .skills-title Объекты

                      .skills-col
                        p {{'Вы сможете узнать всё об объектах, находящихся в нашем оперативном управлении.' | typograf}}

                        .icon.i_i1

                    .skills-item
                      .skills-title Контактный центр

                      .skills-col
                        p {{'Если у вас есть проблема, мы поможем ее решить быстро.' | typograf}}

                        .icon.i_i
        .flex-row-item.w-50(v-if="!$store.getters.isPortrait")
          v-lazy-image.skills-pic(:src="require(`@/assets/images/skills-pic.svg`)" alt="")

</template>

<script>
export default {
  name: 'Skills',

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
.mission
  padding: 130px 0
  font-size: 14px

  +media($port)
    padding: size(20, $size-port) size(0, $size-port)

  .mission-title
    font-size: 26px
    font-weight: 500
    color: $color-blue

.skills
  position: relative
  overflow: hidden
  min-height: 601px
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: flex-start

  +media($land, $scaling)
    min-height: size(601, $size-land)

  +media($port, ">=tablet")
    min-height: size(601, $size-port-tablet)
    padding-top: size(16, $size-port-tablet)
    padding-bottom: size(60, $size-port-tablet)

  +media($port, "<tablet")
    min-height: size(601, $size-port)
    padding-top: size(16, $size-port)
    padding-bottom: size(93, $size-port)

  &::before
    opacity: 0.4
    content: ""
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: radial-gradient(77.98% 194.94% at 23.7% 102.46%, #ECEDED 0.84%, #DDDEDE 5.4%, #BFC0C0 16.09%, #AAAAAA 26.6%, #9D9D9D 36.77%, #999999 46.2%, #999999 100%)
    transform: matrix(1, 0, 0, -1, 0, 0)
    pointer-events: none

    +media($port)
      right: -300%

  //

  .skills-col
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center

    .icon
      min-width: 50px
      text-align: center
      line-height: 1
      font-size: 5em
      color: $color-blue
      margin-left: 10px

      +media($land, $scaling)
        min-width: size(50, $size-land)
        margin-left: size(10, $size-land)

      +media($port, ">=tablet")
        min-width: size(50, $size-port-tablet)
        margin-left: size(10, $size-port-tablet)

      +media($port, "<tablet")
        min-width: size(50, $size-port)
        margin-left: size(10, $size-port)

    p
      margin: 0
      flex: 1

  .skills-title
    font-weight: bold
    margin-bottom: 10px
    color: #000
    font-size: 16px
    line-height: 1.125

    +media($land, $scaling)
      margin-bottom: size(10, $size-land)
      font-size: size(16, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(10, $size-port-tablet)
      font-size: size(16, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(10, $size-port)
      font-size: size(16, $size-port)

  .skills-item
    position: relative
    width: 50%
    margin: 30px 0
    padding-right: 43px
    font-size: 14px
    line-height: 1.1
    color: #4A484A

    +media($land, $scaling)
      margin: size(30, $size-land) 0
      padding-right: size(43, $size-land)
      font-size: size(10, $size-land)

    +media($port, ">=tablet")
      margin: size(30, $size-port-tablet) 0
      padding-right: size(43, $size-port-tablet)
      font-size: size(10, $size-port-tablet)
      margin-bottom: size(30, $size-port-tablet)

    +media($port, "<tablet")
      margin: size(30, $size-port) 0
      padding-right: 0
      font-size: size(14, $size-port)
      margin-bottom: size(30, $size-port)
      width: 100%

  .skills-set
    width: 100%
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: flex-start
    padding-bottom: 130px

    +media($port)
      flex-flow: column nowrap
      justify-content: center
      align-items: center

    +media($port, ">=tablet")
      margin-bottom: size(66, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(37, $size-port)
      padding-bottom: 0

  .flex-row
    height: 100%

    +media($port)
      display: block

  .flex-row-item
    display: flex
    flex-flow: column nowrap
    justify-content: center
    align-items: center

    +media($port)
      width: 100%

  .skills-pic
    width: 423px

    +media($land, $scaling)
      width: size(423, $size-land)

    +media($port, ">=tablet")
      width: size(423, $size-port-tablet)

    +media($port, "<tablet")
      width: 88%

  .container
    position: relative
    width: 100%

  .skills-bg
    position: absolute
    top: 0
    left: 0
    width: 100%
    pointer-events: none

    &.v-lazy-image-loaded
      opacity: 0.2
      top: -71px
      left: -123px

      +media($land, $scaling)
        top: size(-71, $size-land)
        left: size(-123, $size-land)
        width: size(1164, $size-land)

      +media($port, ">=tablet")
        left: auto
        max-width: none
        right: -101vmin
        top: 36%
        transform: rotate(90deg)
        width: 275.916vmin

      +media($port, "<tablet")
        left: auto
        max-width: none
        right: -101vmin
        top: 36%
        transform: rotate(90deg)
        width: 275.916vmin

</style>
