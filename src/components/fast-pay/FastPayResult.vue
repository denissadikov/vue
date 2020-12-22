<template lang="pug">
  .fast-pay-result
    .fast-pay-result-title Оплата квитанций

    .fast-pay-result-item
      .fast-pay-result-info
        .fast-pay-result-info-icon.icon.i_user

        .fast-pay-result-name {{payment.user}}

      .fast-pay-result-info
        .fast-pay-result-info-icon.icon.i_calculate

        div л\с № {{payment.accountXml}}

      <!--.fast-pay-result-info-->
        <!--.fast-pay-result-info-icon.icon.i_home-->

        <!--div Маршала Блюхера пр., д 4/2,  кв. 385 <br>г.Санкт-Петербург, 199000-->

    .fast-pay-result-item
      .fast-pay-result-score
        span Ваша задолженность:

        .fast-pay-result-score-num - {{payment.sum}} ₽

      .login-input
        input.input-text.-mdl(
        placeholder=""
        tabindex="1"
        v-model.trim="userSum" type="email" maxlength="150")

      .btn.-mdl.w-100(@click="initPay") Оплатить

      .fast-pay-result-method
        span Оплата без комиссии

        v-lazy-image.fast-pay-method-pic(:src="require(`@/assets/images/pay-method.svg`)" alt="")

</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  name: 'FastPayResult',

  data() {
    return {
      ready: false,
      payment: this.$store.getters.payment,
      userSum: this.$store.getters.payment.sum,
    };
  },

  methods: {
    initPay() {
      const data = qs.stringify({
        action: 'initPay',
        sum: this.userSum,
        accountId: this.payment.accountId,
        tszhId: this.payment.tszhId,
      });

      axios.post('https://fgau.ru/local/api/v1/handler.php', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((r) => {
          const response = r.data;

          if (response.result) {
            window.location.href = response.url;
          }
        });
    },
  },

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.fast-pay-result
  width: 440px
  max-width: 100%
  position: relative

  +media($land, $scaling)
    width: size(440, $size-land)

  +media($port, ">=tablet")
    width: size(440, $size-port-tablet)

  +media($port, "<tablet")
    width: 100%

  //

  .fast-pay-result-method
    margin-top: 17px
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    font-weight: 500
    font-size: 12px
    color: #525C65
    margin-bottom: 10px

    +media($land, $scaling)
      margin-top: size(17, $size-land)
      font-size: size(12, $size-land)
      margin-bottom: size(10, $size-land)

    +media($port, ">=tablet")
      margin-top: size(17, $size-port-tablet)
      font-size: size(12, $size-port-tablet)
      margin-bottom: size(10, $size-port-tablet)

    +media($port, "<tablet")
      margin-top: size(17, $size-port)
      font-size: size(12, $size-port)
      margin-bottom: size(10, $size-port)

    span
      margin-right: 13px

      +media($land, $scaling)
        margin-right: size(13, $size-land)

      +media($port, ">=tablet")
        margin-right: size(13, $size-port-tablet)

      +media($port, "<tablet")
        margin-right: size(13, $size-port)

  .fast-pay-result-score-num
    font-weight: 500
    color: $color-red
    font-size: 24px

    +media($land, $scaling)
      font-size: size(24, $size-land)

    +media($port, ">=tablet")
      font-size: size(24, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(24, $size-port)

  .fast-pay-result-score
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    font-weight: 500
    font-size: 16px
    color: #525C65
    margin-bottom: 32px

    +media($land, $scaling)
      font-size: size(16, $size-land)
      margin-bottom: size(32, $size-land)

    +media($port, ">=tablet")
      font-size: size(16, $size-port-tablet)
      margin-bottom: size(32, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(16, $size-port)
      margin-bottom: size(32, $size-port)

  .fast-pay-result-name
    font-size: 16px

    +media($land, $scaling)
      font-size: size(16, $size-land)

    +media($port, ">=tablet")
      font-size: size(16, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(16, $size-port)

    b
      font-weight: 500

  .fast-pay-result-info-icon
    width: 74px
    min-width: 74px
    font-size: 28px
    color: $color-blue

    +media($land, $scaling)
      width: size(74, $size-land)
      min-width: size(74, $size-land)
      font-size: size(28, $size-land)

    +media($port, ">=tablet")
      width: size(74, $size-port-tablet)
      min-width: size(74, $size-port-tablet)
      font-size: size(28, $size-port-tablet)

    +media($port, "<tablet")
      width: size(74, $size-port)
      min-width: size(74, $size-port)
      font-size: size(28, $size-port)

  .fast-pay-result-info
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center
    border-bottom: 1px solid #D2D3D4
    padding: 20px 9px
    font-size: 14px
    line-height: 1.142857143
    color: #525C65

    +media($land, $scaling)
      padding: size(20, $size-land) size(9, $size-land)
      font-size: size(14, $size-land)

    +media($port, ">=tablet")
      padding: size(20, $size-port-tablet) size(9, $size-port-tablet)
      font-size: size(14, $size-port-tablet)

    +media($port, "<tablet")
      padding: size(20, $size-port) size(9, $size-port)
      font-size: size(14, $size-port)

    &:last-child
      border-bottom: 0

  .fast-pay-result-item
    border: 1px solid #D2D3D4
    box-shadow: $shadow-container
    border-radius: 10px
    padding: 15px 43px
    position: relative
    background: $color-white
    margin-bottom: 30px

    &:last-child
      margin-bottom: 0

    +media($land, $scaling)
      border-radius: size(10, $size-land)
      padding: size(37, $size-land) size(43, $size-land)
      margin-bottom: size(30, $size-land)

    +media($port, ">=tablet")
      border-radius: size(10, $size-port-tablet)
      padding: size(37, $size-port-tablet) size(43, $size-port-tablet)
      margin-bottom: size(30, $size-port-tablet)

    +media($port, "<tablet")
      border-radius: size(10, $size-port)
      padding: size(30, $size-port) size(20, $size-port)
      margin-bottom: size(30, $size-port)

  .fast-pay-result-title
    text-align: center
    color: $color-blue
    font-size: 26px
    font-weight: 500
    margin-bottom: 24px

    +media($land, $scaling)
      font-size: size(36, $size-land)
      margin-bottom: size(24, $size-land)

    +media($port, ">=tablet")
      font-size: size(36, $size-port-tablet)
      margin-bottom: size(24, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(30, $size-port)
      margin-bottom: size(20, $size-port)

</style>
