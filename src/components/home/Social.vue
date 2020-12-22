<template lang="pug">
  section.social
    .container
      .promo Электронная приемная через социальные сети
      .social-icons
        a.icon.i_fb(href="https://www.facebook.com/roszhilkompleks/" target="_blank")
        a.icon.i_insta(href="https://www.instagram.com/roszhilkompleks/" target="_blank")
        a.icon.i_vk(href="https://vk.com/roszhilkompleks" target="_blank")
</template>

<script>
export default {
  name: 'Social',

  data() {
    return {
      ready: false,
    };
  },

  methods: {
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
.social
  background-color: $color-white
  .container
    justify-content: space-between
    align-items: center
    display: flex
    flex-flow: row wrap
    height: 96px

    +media($port)
      flex-flow: column wrap
      justify-content: center
      align-items: center
      height: 188px

  .social-icons
    color: $color-blue
    font-size: 40px
    display: flex
    align-items: center
    text-align: center
    justify-content: space-between
    a
      text-decoration: none
    .icon
      margin-right: 40px
      &:last-child
        margin-right: 0
    +media($port)
      font-size: size(40, $size-port)
      justify-content: center
      align-items: center
  .promo
    font-weight: 500
    font-size: 26px
    line-height: 32px
    color: $color-black

    +media($port)
      font-size: size(20, $size-port)
      line-height: 24px
      text-align: center
      margin-bottom: 30px
</style>
