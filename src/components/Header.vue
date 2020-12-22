<template lang="pug">
  header.header(:class="{'-hide': showHeader}" ref="header")
    .container
      .header-logos
        <!--v-lazy-image.logo(:src="require(`../assets/images/gerb.${$store.getters.webp ? 'webp' : 'png'}`)" alt="")-->

        <!--.slogan-->
          <!--div МИНИСТЕРСТВО ОБОРОНЫ РОССИЙСКОЙ ФЕДЕРАЦИИ-->
          <!--h1 ФГАУ «Центральное управление жилищно - социальной инфраструктуры (комплекса)»-->

        router-link(to="/")
          v-lazy-image.logo1(:src="require(`../assets/images/logo.svg`)" alt="")

      .header-right(v-if="!$store.getters.isPortrait")
        Nav

        a.header-btn(href="https://lk.fgau.ru/pay" target="_blank")
          .btn.-red
            .icon.i_i6
            | Оплатить квитанции

      Hamburger(v-else)
</template>

<script>
import Nav from '@/components/Nav.vue';
import Hamburger from '@/components/Hamburger.vue';

export default {
  name: 'Header',
  data() {
    return {
      ready: false,
      showHeader: null,
    };
  },
  methods: {
    showNav(state) {
      this.$store.dispatch('ShowMobileNav', !state);

      const body = document.querySelector('body');

      if (this.$store.getters.showMobileNav) {
        body
          .classList
          .add('-lock');
      } else {
        body
          .classList
          .remove('-lock');
      }
    },

    show() {
      let current = 0;

      const handler = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > current) {
          if (scrollTop > this.$refs.header?.clientHeight * 2) {
            this.showHeader = true;
          }
        } else {
          this.showHeader = false;
        }

        current = scrollTop;
      };

      document.addEventListener('scroll', () => {
        handler();
      });
    },
  },
  mounted() {
    this.show();
  },
  components: { Nav, Hamburger },
};
</script>

<style lang="sass" scoped>
@import "../styles/mixins/mixins"
@import "../styles/vars/variables"

.header
  padding: 8px 0
  box-shadow: 0px 1px 4px rgba(195, 195, 195, 0.5)
  /*margin-bottom: 40px*/
  position: sticky
  top: 0
  z-index: 100
  transition: all $anim-global ease-out
  background: $color-white

  .header-btn
    text-decoration: none
    .icon
      margin-right: 5px
    .btn
      padding: 0 9px
      line-height: 30px
      margin-left: 40px
      font-size: 17px
      font-weight: normal

  &.-hide
    transform: translateY(-105%)

  +media($land, $scaling)
    padding: size(8, $size-land) 0

  +media($port, ">=tablet")
    padding: size(8, $size-port-tablet) 0

  +media($port, "<tablet")
    padding: size(8, $size-port) 0

  //

  .header-right
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

  .slogan
    font-size: 7.5px
    line-height: 1
    text-align: center
    letter-spacing: 0.077px
    width: 137px
    color: #838282
    margin: 0 12px

    +media($land, $scaling)
      font-size: size(7.5, $size-land)
      width: size(137, $size-land)
      margin: 0 size(12, $size-land)

    +media($port, ">=tablet")
      font-size: size(7.5, $size-port-tablet)
      width: size(132, $size-port-tablet)
      margin: 0 size(12, $size-port-tablet)

    +media($port, "<tablet")
      font-size: size(7.5, $size-port)
      width: size(132, $size-port)
      margin: 0 size(12, $size-port)

    h1
      margin: 0
      font-weight: normal
      font-size: inherit

    div
      font-size: 1.05em
      line-height: 1.1

  .logo1
    width: 118px

    +media($land, $scaling)
      width: size(118, $size-land)

    +media($port, ">=tablet")
      width: size(118, $size-port-tablet)

    +media($port, "<tablet")
      width: size(118, $size-port)

  .logo
    width: 39px

    +media($land, $scaling)
      width: size(39, $size-land)

    +media($port, ">=tablet")
      width: size(39, $size-port-tablet)

    +media($port, "<tablet")
      width: size(39, $size-port)

  .header-logos
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center
    margin-right: 10px

    +media($land, $scaling)
      margin-right: size(10, $size-land)

    +media($port, ">=tablet")
      margin-right: size(10, $size-port-tablet)

    +media($port, "<tablet")
      margin-right: size(10, $size-port)

  .container
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

</style>
