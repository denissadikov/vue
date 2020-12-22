<template lang="pug">
  form.fast-pay(novalidate)
    .fast-pay-title Оплата квитанций

    .fast-pay-item
      .fast-pay-label Фамилия

      .input-icon-wrapper
        .icon.i_user
        input.input-icon(
          v-model="surname"
          @blur="blurHandler($event)"
          @focus="focusHandler($event)"
          tabindex="1" type="text" maxlength="")

    .fast-pay-item
      .fast-pay-label Имя

      .input-icon-wrapper
        .icon.i_user
        input.input-icon(
          v-model="name"
          @blur="blurHandler($event)"
          @focus="focusHandler($event)"
          tabindex="2" type="text" maxlength="")

    .fast-pay-item
      .fast-pay-label Телефон

      .input-icon-wrapper
        .icon.i_phone
        input.input-icon(
          v-model="phone"
          :class="{'-error': $v.phone.$error}"
          @blur="blurHandler($event)"
          @focus="focusHandler($event)"
          tabindex="3" type="tel" maxlength="")

    .fast-pay-item
      .fast-pay-label E-mail

      .input-icon-wrapper
        .icon.i_email
        input.input-icon(
          v-model="email"
          :class="{'-error': $v.email.$error}"
          @blur="blurHandler($event)"
          @focus="focusHandler($event)"
          tabindex="4" type="email" maxlength="")

    .fast-pay-item
      .fast-pay-label(:class="{'-error': error}") Номер лицевого счета

      .input-icon-wrapper
        .icon.i_calculate(:class="{'-error': error}")
        input.input-icon(
          :class="{'-error': error}"
          v-model="account"
          @blur="blurHandler($event)"
          @focus="focusHandler($event)"
          tabindex="5" type="text" maxlength="")
        .input-icon-error(v-if="error") Введенный вами номер л\с не найден

    .fast-pay-btns
      button.btn.-mdl.w-100(type="button" @click="initPay") Узнать сумму задолженности

    .fast-pay-method
      span Оплата без комиссии

      v-lazy-image.fast-pay-method-pic(:src="require(`@/assets/images/pay-method.svg`)" alt="")

</template>

<script>
import axios from 'axios';
import qs from 'qs';
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'FastPayForm',

  data() {
    return {
      ready: false,
      name: null,
      surname: null,
      phone: null,
      email: null,
      account: null,
      error: false,
    };
  },

  validations: {
    phone: {
      required,
    },
    email: {
      required,
      email,
    },
  },
  methods: {
    focusHandler(e) {
      e.target.closest('.fast-pay-item').classList.add('-focus');
    },

    blurHandler(e) {
      e.target.closest('.fast-pay-item').classList.remove('-focus');
    },

    initPay() {
      this.$v.$touch();
      this.error = false;
      if (!this.$v.$invalid) {
        const data = qs.stringify({
          action: 'checkAccount',
          name: this.name,
          surname: this.surname,
          phone: this.phone,
          email: this.email,
          account: this.account,
        });

        axios.post('https://fgau.ru/local/api/v1/handler.php', data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
          },
        })
          .then((r) => {
            const response = r.data;

            if (response.result) {
              this.$store.commit('SET_PAYMENT_INFO', {
                sum: response.sum,
                accountId: response.accountId,
                accountXml: response.accountXml,
                tszhId: response.tszhId,
                user: response.user,
              });
              this.$emit('change', 'FastPayResult');
            } else {
              this.error = true;
            }
          });
      }
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

.fast-pay
  border: 1px solid #D2D3D4
  box-shadow: $shadow-container;
  border-radius: 10px
  width: 415px
  max-width: 100%
  padding: 37px 50px
  position: relative
  background: $color-white

  +media($land, $scaling)
    border-radius: size(10, $size-land)
    width: size(415, $size-land)
    padding: size(37, $size-land) size(50, $size-land)

  +media($port, ">=tablet")
    border-radius: size(10, $size-port-tablet)
    width: size(415, $size-port-tablet)
    padding: size(37, $size-port-tablet) size(50, $size-port-tablet)

  +media($port, "<tablet")
    border-radius: size(10, $size-port)
    width: size(415, $size-port)
    padding: size(30, $size-port) size(20, $size-port)

  //

  .fast-pay-method
    margin-top: 17px
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    font-weight: 500
    font-size: 12px
    color: #525C65

    +media($land, $scaling)
      margin-top: size(17, $size-land)
      font-size: size(12, $size-land)

    +media($port, ">=tablet")
      margin-top: size(17, $size-port-tablet)
      font-size: size(12, $size-port-tablet)

    +media($port, "<tablet")
      margin-top: size(17, $size-port)
      font-size: size(12, $size-port)

    span
      margin-right: 13px

      +media($land, $scaling)
        margin-right: size(13, $size-land)

      +media($port, ">=tablet")
        margin-right: size(13, $size-port-tablet)

      +media($port, "<tablet")
        margin-right: size(13, $size-port)

  .fast-pay-btns
    margin-top: 64px

    +media($land, $scaling)
      margin-top: size(64, $size-land)

    +media($port, ">=tablet")
      margin-top: size(64, $size-port-tablet)

    +media($port, "<tablet")
      margin-top: size(64, $size-port)

  .fast-pay-label
    margin-bottom: 9px
    font-size: 14px
    color: $color-grey-dark

    +media($land, $scaling)
      margin-bottom: size(9, $size-land)
      font-size: size(14, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(9, $size-port-tablet)
      font-size: size(14, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(9, $size-port)
      font-size: size(14, $size-port)

    &.-error
      color: $color-red

  .fast-pay-item
    margin-bottom: 41px

    +media($land, $scaling)
      margin-bottom: size(41, $size-land)

    +media($port, ">=tablet")
      margin-bottom: size(41, $size-port-tablet)

    +media($port, "<tablet")
      margin-bottom: size(41, $size-port)

    &.-focus
      .fast-pay-label, .icon
        color: $color-blue

  .fast-pay-title
    text-align: center
    color: $color-blue
    font-size: 26px
    font-weight: 500
    margin-bottom: 35px

    +media($land, $scaling)
      font-size: size(36, $size-land)
      margin-bottom: size(35, $size-land)

    +media($port, ">=tablet")
      font-size: size(36, $size-port-tablet)
      margin-bottom: size(35, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(30, $size-port)
      margin-bottom: size(20, $size-port)

</style>
