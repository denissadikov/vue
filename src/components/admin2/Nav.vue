<template lang="pug">
  nav.nav
    router-link.nav-link(to="/admin/2/accounts")
      i.icon.i_calculate
      span Лицевые счета

    router-link.nav-link(to="/admin/2/receipts")
      i.icon.i_i4
      span Квитанции

    router-link.nav-link(to="/admin/2/counters")
      i.icon.i_i5
      span Счетчики

    router-link.nav-link(to="/admin/2/complaints")
      i.icon.i_pencil
      span Жалобы

    router-link.nav-link(to="/admin/2/settings")
      i.icon.i_settings
      span Настройки

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
  margin-bottom: 10px

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

    &.router-link-exact-active, &:hover
      background: $color-grey-medium
      color: $color-blue

    &.router-link-exact-active
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
