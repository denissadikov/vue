<template lang="pug">
  .hamburger(:class="{'-active': $store.getters.showMobileNav}" @click="showNav"): .hamburger-box: .hamburger-inner
</template>

<script>
export default {
  name: 'Hamburger',
  data() {
    return {
      ready: false,
    };
  },
  methods: {
    showNav() {
      this.$store.commit('SHOW_MOBILE_NAV', !this.$store.getters.showMobileNav);

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

    swipeDetect() {
      const body = document.querySelector('body');

      let xDown = null;
      let yDown = null;

      const getTouches = (evt) => evt.touches || evt.originalEvent.touches;

      const handleTouchStart = (evt) => {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      };

      const handleTouchMove = (evt) => {
        if (!xDown || !yDown) {
          return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            /* left swipe */
          } else {
            /* right swipe */
          }
        } else if (yDiff > 0) {
          // this.$store.commit('SHOW_MOBILE_NAV', false);
        } else {
          /* down swipe */
        }

        xDown = null;
        yDown = null;
      };

      body.addEventListener('touchstart', handleTouchStart, false);

      body.addEventListener('touchmove', handleTouchMove, false);

      document.addEventListener('scroll', () => {
        if (this.$store.getters.showMobileNav) {
          this.$store.commit('SHOW_MOBILE_NAV', false);
        }
      });
    },
  },
  mounted() {
    this.swipeDetect();
  },
  components: {},
};
</script>

<style lang="sass" scoped>
  @import "../styles/mixins/mixins"
  @import "../styles/vars/variables"

  .hamburger
    cursor: pointer
    margin-left: 10px
    transition-timing-function: linear
    transition-duration: 0.15s
    transition-property: opacity, filter
    border-radius: 6px
    display: inline-flex
    flex-flow: column nowrap
    justify-content: center
    align-items: center
    width: 20px
    height: 20px

    +media($land, $scaling)
      margin-left: size(10, $size-land)
      width: size(20, $size-land)
      height: size(20, $size-land)

    +media($port, ">=tablet")
      margin-left: size(10, $size-port-tablet)
      width: size(20, $size-port-tablet)
      height: size(20, $size-port-tablet)

    +media($port, "<tablet")
      margin-left: size(10, $size-port)
      width: size(20, $size-port)
      height: size(20, $size-port)

    .hamburger-box
      position: relative
      display: inline-block
      width: 20px
      height: 20px

      +media($land, $scaling)
        width: size(20, $size-land)
        height: size(20, $size-land)

      +media($port, ">=tablet")
        width: size(20, $size-port-tablet)
        height: size(20, $size-port-tablet)

      +media($port, "<tablet")
        width: size(20, $size-port)
        height: size(20, $size-port)

    .hamburger-inner
      position: absolute
      width: 100%
      height: 2px
      transition-property: transform
      border-radius: 4px
      background: $color-blue
      transition-delay: 0.12s
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
      transition-duration: 0.22s
      top: 50%
      display: block

    .hamburger-inner:after, .hamburger-inner:before
      display: block
      content: ""
      position: absolute
      height: 2px
      background-color: $color-blue
      border-radius: 2px

    .hamburger-inner:before
      width: 100%
      top: -5px
      transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in

    .hamburger-inner:after
      width: 100%
      transition: bottom 0.1s ease-in 0.25s, width 0.2s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)
      bottom: -5px
      right: 0
      border-radius: 2px

    &.-active
      .hamburger-inner
        transition-delay: 0.12s
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)
        transform: rotate(225deg)
        background: $color-blue

    &.-active  .hamburger-inner:before
      top: 0
      transition: top 0.1s ease-out, opacity 0.1s ease-out 0.12s
      opacity: 0
      width: 100%

    &.-active  .hamburger-inner:after
      width: 100%
      bottom: 0
      transition: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s
      transform: rotate(-90deg)
      background: $color-blue
</style>
