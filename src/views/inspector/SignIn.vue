<template lang="pug">
  .login
    .login-left
      form.login-content(@submit.prevent="" novalidate)
        .login-logo
          img.w-50(src="@/assets/images/logo.svg")
        .login-title
          span Авторизация

        //LoginSocial
        <!--.login-or Или зарегистрируйтесь при помощи e-mail-->

        template(v-if="!setCode")
          .login-item
            .login-label
              .login-error(v-if="$v.phone.$error") Введите номер телефона

            .login-input
              the-mask.input-text.-mdl(
              placeholder="Номер телефона"
              tabindex="1"
                @focus="errorReset"
                  :class="{'-error': $v.phone.$error}"
                  :masked="true" mask="+7 (###) ###-##-##"
              v-model.trim="phone" type="tel" maxlength="150")

          p
            button.btn.w-100.-mdl.-border(
            v-ripple
            @click="getCode"
              :class="{'-loading': submitStatus === 'PENDING'}"
            type="submit") Получить код

              Loading(v-if="submitStatus === 'PENDING'")
        template(v-else)
          .login-item
            .login-label
              .login-error(v-if="$v.code.$error") Введите код из смс

            .login-input
              the-mask.input-text.-mdl(
              placeholder=""
              tabindex="1"
                @focus="errorReset"
                  :class="{'-error': $v.code.$error}"
                  :masked="true" mask="######"
              v-model.trim="code" type="tel" maxlength="150")

          p На номер {{phone}} отправлена смс с кодом
          p
            button.btn.w-100.-mdl.-border(
            v-ripple
            @click="sendCode"
              :class="{'-loading': submitStatus === 'PENDING'}"
            type="submit") Ввести код

              Loading(v-if="submitStatus === 'PENDING'")

        <!--.login-item-->
        <!--label.login-ch-->
        <!--i.switch(:class="{'-error': $v.checkbox.$error}")-->
        <!--input(v-model="checkbox" type="checkbox")-->
        <!--i.icon.i_ch-->

        <!--span Согласен на обработку данных-->

        .login-error-all(v-if="errorMessage")
          .icon.i_warn
          span {{errorMessage}}

    .login-right
      v-lazy-image.login-bg(:src="require(`@/assets/images/login.${$store.getters.webp ? 'webp' : 'jpg'}`)" alt="")
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { TheMask } from 'vue-the-mask';
import Loading from '@/components/Loading.vue';
import LoginSocial from '@/components/LoginSocial.vue';

export default {
  name: 'SignIn',

  data() {
    return {
      ready: false,
      sign: null,
      checkbox: false,
      submitStatus: null,
      errorMessage: null,
      phone: null,
      code: null,
      setCode: false,
    };
  },

  validations: {
    phone: {
      required,
    },
    code: {
      required,
    },
  },

  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = null;
    },

    openPopupSignUp() {
      this.$store.commit('SHOW_POPUP', {
        opened: true,
        currentPopup: 'PopupSignUp',
      });
    },

    close() {
      this.$store.commit('SHOW_POPUP_CONTENT', false);
    },
    getCode() {
      this.$v.$touch();
      this.errorMessage = null;

      if (!this.$v.phone.$invalid) {
        if (this.submitStatus !== 'PENDING') {
          this.submitStatus = 'PENDING';

          this.$store.dispatch('GetAuthCode', {
            phone: this.phone,
          }).then((r) => {
            this.$v.$reset();
            if (r.result === 'error') {
              this.errorMessage = r.message;
            } else {
              this.setCode = true;
              this.sign = r.sign;
            }

            this.submitStatus = null;
          });
        }
      }
    },
    sendCode() {
      this.$v.$touch();
      this.errorMessage = null;

      if (!this.$v.phone.$invalid) {
        if (this.submitStatus !== 'PENDING') {
          this.submitStatus = 'PENDING';

          this.$store.dispatch('ConfirmAuthCode', {
            code: this.code,
            sign: this.sign,
          }).then((r) => {
            this.$v.$reset();
            if (r.result === 'error') {
              this.errorMessage = r.message;
            } else {
              this.$store.commit('SET_TOKEN', r.token);
              this.$router.replace('/inspector');
            }
            this.submitStatus = null;
          });
        }
      }
    },
  },

  mounted() {
  },

  components: {
    Loading, LoginSocial, TheMask,
  },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"
</style>
