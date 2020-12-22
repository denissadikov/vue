<template lang="pug">
  section.splitter.container
    a.splitter-link(href="https://lk.fgau.ru/pay" target="_blank")
      .splitter-icon.icon.i_i6

      | Оплата счетов

    a.splitter-link(href="https://lk.fgau.ru/counters" target="_blank")
      .splitter-icon.icon.i_i5

      | Передача <br>показаний

    a.splitter-link(href="https://lk.fgau.ru/receipts" target="_blank")
      .splitter-icon.icon.i_i4

      | Квитанция <br> на оплату

    a.splitter-link(href="https://lk.fgau.ru/receipts" target="_blank")
      .splitter-icon.icon.i_rub

      | Начисления и<br> задолженность

    a.splitter-link.-red(href="https://lk.fgau.ru" target="_blank")
      .splitter-icon.icon.i_exit

      | Войти на портал

</template>

<script>
export default {
  name: 'Splitter',

  data() {
    return {
      ready: false,
    };
  },

  methods: {
    openPopupSignIn() {
      this.$store.commit('SHOW_POPUP', {
        opened: true,
        currentPopup: 'PopupSignIn',
      });
    },
  },

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.splitter
  display: flex
  flex-flow: row wrap
  justify-content: space-between
  align-items: flex-start
  max-width: 1055px
  position: absolute
  top: -100px

  +media($land, $scaling)
    max-width: size(1055, $size-land)
    margin-bottom: size(35, $size-land)

  +media($port, ">=tablet")
    max-width: size(1055, $size-port-tablet)
    margin-bottom: size(35, $size-port-tablet)

  +media($port, "<tablet")
    max-width: size(1055, $size-port)
    margin-bottom: size(67, $size-port)
    padding: 0
    flex-flow: column-reverse wrap
    position: absolute
    top: -20px

  //

  .btn
    +media($port, ">=tablet")
      margin-left: auto
      margin-right: auto
      margin-top: size(10, $size-port)

    +media($port, "<tablet")
      margin-left: auto
      margin-right: auto
      margin-top: size(10, $size-port)

  .splitter-icon
    /*position: absolute*/
    /*right: 14px*/
    /*bottom: 9px*/
    margin-right: 14px
    color: $color-blue
    font-size: 40px
    line-height: 1

    +media($land, $scaling)
      right: size(14, $size-land)
      bottom: size(9, $size-land)
      font-size: size(28, $size-land)

    +media($port, ">=tablet")
      right: size(14, $size-port-tablet)
      bottom: size(9, $size-port-tablet)
      font-size: size(28, $size-port-tablet)

    +media($port, "<tablet")
      right: size(14, $size-port)
      bottom: size(9, $size-port)
      font-size: size(28, $size-port)

    &.i_rub
      font-size: 35px
      right: 8px

      +media($land, $scaling)
        font-size: size(26, $size-land)
        right: size(8, $size-land)

      +media($port, ">=tablet")
        font-size: size(26, $size-port-tablet)
        right: size(8, $size-port-tablet)

      +media($port, "<tablet")
        font-size: size(26, $size-port)
        right: size(8, $size-port)

  .splitter-link
    cursor: pointer
    display: inline-flex
    position: relative
    text-decoration: none
    background: $color-white
    box-shadow: 0 1px 3px rgba(123, 123, 123, 0.5)
    border-radius: $radius-container
    width: 180px
    height: 70px
    line-height: 14px
    color: rgba(0, 0, 0, 0.75)
    align-items: center
    font-size: 14px
    padding: 12px 16px
    margin-bottom: 15px
    text-align: left

    &.-red
      background-color: $color-red
      color: $color-white
      .icon
        color: $color-white

    +media($land, $scaling)
      width: size(180, $size-land)
      height: size(70, $size-land)
      font-size: size(14, $size-land)
      padding: size(12, $size-land) size(16, $size-land)
      margin-bottom: size(15, $size-land)

    +media($port, ">=tablet")
      width: calc(50% - 6px)
      height: size(70, $size-port-tablet)
      font-size: size(14, $size-port-tablet)
      padding: size(12, $size-port-tablet) size(16, $size-port-tablet)
      margin-bottom: size(28, $size-port-tablet)

    +media($port, "<tablet")
      width: calc(100% - 6px)
      height: size(66, $size-port)
      font-size: size(14, $size-port)
      padding: size(12, $size-port) size(16, $size-port)
      margin-bottom: size(28, $size-port)

      &:last-child
        order: revert

</style>
