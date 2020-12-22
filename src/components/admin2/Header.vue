<template lang="pug">
  header.header
    Logo

    .header-bar
      SearchBar

      .header-score
        i Ваш счет:
        b - 1 285 ₽

      .header-bell.icon.i_bell: span 2

      .header-exit.icon.i_exit
</template>

<script>
import Logo from './Logo.vue';
import SearchBar from './SearchBar.vue';

export default {
  name: 'Header',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { Logo, SearchBar },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.header
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: stretch
  margin-bottom: 10px
  position: relative
  min-height: 90px

  .header-score
    display: inline-flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline
    border: 1px solid $color-grey
    border-radius:  $radius-container
    font-size: 12px
    padding: 10px 18px
    margin-left: 30px

    b
      font-weight: 500
      font-size: 14px
      color: $color-red
      white-space: nowrap

    i
      margin-right: 12px
      white-space: nowrap

  .header-exit
    cursor: pointer
    color: $color-grey-dark
    margin-left: 30px
    font-size: 26px
    line-height: 1

    &:hover
      opacity: 0.8

  .header-bell
    color: $color-red
    font-size: 26px
    line-height: 1
    margin-left: 30px
    position: relative

    span
      position: absolute
      right: -7px
      top: -8px
      font-size: 14px
      font-weight: 500

  .header-bar
    background: $color-white
    box-shadow: $shadow-container
    border-radius:  $radius-container
    padding: 11px 29px
    flex: 1
    margin-left: 10px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

</style>
