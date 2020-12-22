<template lang="pug">
  header.header
    Logo

    .header-bar
      SearchBar

      .header-bell
        .icon.i_bell
        .icon.i_comment: span +2

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

  .header-exit
    cursor: pointer
    color: $color-grey-dark
    margin-left: 15px
    font-size: 26px
    line-height: 1

    &:hover
      opacity: 0.8

  .header-bell
    color: $color-red
    font-size: 25px
    line-height: 1
    margin-right: 15px
    position: relative
    margin-left: auto

    .i_comment
      position: absolute
      right: -15px
      top: -6px
      font-size: 0.7em

    span
      position: absolute
      right: 4px
      top: 2px
      font-size: 9px
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
