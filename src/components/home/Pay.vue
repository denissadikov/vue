<template lang="pug">
  div.pay
    .pay-title.w-100
      .container
        .promo-text.w-80 Оплатите квитанции ФГАУ РОСЖИЛКОМПЛЕКС
        a.pay-button.btn.-red.w-20(href="https://lk.fgau.ru/pay" target="_blank")
          .icon.i_i6
          span Оплатить квитанции
    .pay-body.w-100
      .container
        .pay-utp
          .icon.i_check
          span Быстро
        .pay-utp
          .icon.i_protection
          span Безопасно
        .pay-utp
          .icon.i_real-estate-1
          span Без комиссии
</template>

<script>
export default {
  name: 'pay',
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.pay
  box-shadow: 0px -3px 2px 0 rgba(38, 50, 56, 0.05)
  display: flex
  align-items: flex-start
  flex-flow: column nowrap
  margin-top: 12px
  margin-bottom: 40px
  .pay-title
    background-color: $color-gray-background
    padding: 10px
    justify-content: center
    align-content: center

    .container
      flex-flow: row wrap

      +media($port)
        flex-flow: column wrap
        padding-left: size(40, $port)
        padding-right: size(40, $port)
        padding-bottom: 0

        .btn
          width: 100%
          justify-content: center
          align-items: center

      .pay-button
        font-size: 17px
        font-weight: normal
        .icon
          margin-right: 5px
      .promo-text
        font-weight: 500
        font-size: 26px
        line-height: 32px
        color: $color-black

        +media($port)
          font-size: 20px

  .pay-body
    border-top: 1px solid $color-gray-background
    border-bottom: 1px solid $color-gray-background
    position: relative
    overflow: hidden

    &:before
      content: ''
      position: absolute
      background: radial-gradient(100.28% 250.14% at 34.17% 100%, #00B7FA 0%, #00A1E3 6.01%, #0073B4 20.06%, #004E8D 34.86%, #00316F 43.28%, #001C59 51.2%, #000F4C 59.64%, #000B48 71.68%, #00041B 100%)
      height: 100%
      width: 100%
      opacity: 0.8
      left: 0
    .pay-utp
      font-size: 16px
      line-height: 40px
      color: $color-white
      margin-right: 35px
      padding: 8px 0
      text-transform: uppercase
      align-items: center
      display: flex
      +media($port)
        margin-right: 0

      .icon
        margin-right: 5px

      +media($port)
        font-size: 12px
        line-height: 16px
        text-transform: none
    .container
      +media($port)
        max-height: 56px
        align-items: center
        justify-content: space-between
        padding: 0 10px
        height: 56px
  .container
    position: relative
    display: flex
    align-items: center
    flex-flow: row nowrap
    justify-content: flex-start
    > .flex-row
      flex: 1
</style>
