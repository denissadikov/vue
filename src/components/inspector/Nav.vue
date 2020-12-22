<template lang="pug">
  nav.nav
    router-link.nav-link(to="/inspector/")
      i.icon.i_home1
      span Заявки
      em +2

    router-link.nav-link(to="/inspector/awaiting")
      i.icon.i_home-q
      span Ожидают осмотра
      em 4

    router-link.nav-link(to="/inspector/completed")
      i.icon.i_home-ch
      span Завершенные
      em 25

    router-link.nav-link(to="/inspector/rejected")
      i.icon.i_home-x
      span Отклоненные
      em 3

    a.nav-link(href="#")
      i.icon.i_edit
      span Заполнить акт

    router-link.nav-link(to="/inspector/setting")
      i.icon.i_setting
      span Настройки
      em 3

</template>

<script>
export default {
  name: 'Nav',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.nav
  background: $color-white
  box-shadow: $shadow-container
  border-radius:  $radius-container
  padding: 11px 0
  display: flex
  flex-flow: column nowrap
  justify-content: flex-start
  align-items: stretch

  .nav-link
    display: flex
    flex-flow: row wrap
    justify-content: flex-start
    align-items: center
    font-size: 14px
    font-weight: 500
    color: $color-grey-dark
    text-decoration: none
    padding: 9px 20px
    margin-bottom: 16px

    &:last-child
      margin-bottom: 0

    &.-active, &:hover, &.router-link-exact-active
      background: $color-grey-medium
      color: $color-blue

    &.-active, &.router-link-exact-active
      pointer-events: none

      em
        color: $color-red

    em
      font-style: normal

    span
      flex: 1

    .icon
      font-size: 20px
      width: 36px

      &.i_edit
        font-size: 16px

</style>
