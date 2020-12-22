<template lang="pug">
  section.flex-row
    .flex-row-item.w-37
      .user-box
        .user-profile
          .user-profile-name
            .user-profile-icon.icon.i_user

            .user-profile-text Семенов-Тяншанский Иван Иванович

          .user-profile-addr
            .user-profile-addr-item
              b Адрес:

              .user-profile-addr-text: i Маршала Блюхера пр.4/2  г.Санкт-Петербург, 199000

            .user-profile-addr-item
              b Телефон:

              .user-profile-addr-text: i + 7 (999) 123 - 45 - 67

      .user-box
        .user-balance
          .user-balance-left
            .user-balance-icon.icon.i_card

          .user-balance-right
            .user-balance-num
              span Баланс

              span - 1 285 Р

            .user-balance-last
              i Последний платеж:

              i 12.12.2020

            .btn.-mdl.w-100 Оплатить

    .flex-row-item.w-25
      .user-box
        router-link.user-link(to="/admin/2/accounts")
          .icon.i_calculate

          div Мои лицевые счета

      .user-box
        router-link.user-link(to="/admin/2/receipts")
          .icon.i_i4

          div Мои квитанции

      .user-box
        router-link.user-link(to="/admin/2/complaints")
          .icon.i_pencil

          div Мои жалобы

    .flex-row-item.w-37
      .user-box
        .user-counters
          .user-counters-icon.icon.i_i5

          .user-counters-title Мои счетчики

          .user-counters-list
            .user-counters-item
              .user-counters-item-icon
                .icon.i_gas

              .user-counters-item-name
                b Газ
                i № 34314281

              .user-counters-date от 12.12.2020

              .user-counters-num 3456677

            .user-counters-item
              .user-counters-item-icon
                .icon.i_bad

              .user-counters-item-name
                b ГВС
                i № 34314281

              .user-counters-date от 12.12.2020

              .user-counters-num 123434 м3

            .user-counters-item
              .user-counters-item-icon
                .icon.i_bad-cold

              .user-counters-item-name
                b ХВС
                i № 34314281

              .user-counters-date от 12.12.2020

              .user-counters-num 123434 м3

            .user-counters-item
              .user-counters-item-icon
                .icon.i_bad-cold

              .user-counters-item-name
                b Электроэнергия
                i № 34314281

              .user-counters-date от 12.12.2020

              .user-counters-num 123434 м3

          .text-center
            router-link.btn.-mdl(to="/admin/2/counters") Передать показания

</template>

<script>
export default {
  name: 'Home',

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

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.user-balance
  padding: 24px 27px
  display: flex
  flex-flow: row nowrap
  justify-content: flex-start
  align-items: flex-start
  color: #525C65

  .user-balance-last
    font-size: 10px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline
    margin-bottom: 21px

  .user-balance-num
    font-weight: 500
    color: $color-red
    font-size: 18px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline
    margin-bottom: 4px

  .user-balance-icon
    color: $color-blue
    font-size: 40px
    line-height: 1

  .user-balance-right
    flex: 1

  .user-balance-left
    min-width: 66px

.user-profile
  color: #525C65
  font-size: 18px
  font-weight: 500
  display: flex
  flex-flow: column nowrap
  justify-content: space-between
  align-items: stretch
  flex: 1

  .user-profile-addr-text
    font-weight: normal
    flex: 1

  .user-profile-addr-item
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: baseline

    b
      min-width: 66px
      color: #525C65
      font-weight: 500
      font-size: 12px

  .user-profile-addr
    background: rgba(241, 242, 242, .75)
    padding: 8px 27px
    border-radius: 0px 0px 5px 5px
    line-height: 1.33
    font-size: 12px
    flex: 1

  .user-profile-text
    flex: 1

  .user-profile-icon
    color: $color-blue
    min-width: 66px
    font-size: 34px
    line-height: 1

  .user-profile-name
    display: flex
    flex-flow: row nowrap
    justify-content: flex-start
    align-items: center
    padding: 18px 27px
    flex: 1

.user-link
  cursor: pointer
  text-decoration: none
  text-align: center
  padding: 26px 10px
  color: $color-grey-text
  font-size: 18px
  font-weight: 500

  .icon
    margin-bottom: 26px
    color: $color-blue
    font-size: 2em

.user-box
  background: $color-white
  box-shadow: $shadow-container
  border-radius:  $radius-container
  margin-bottom: 28px
  min-height: 150px
  display: flex
  flex-flow: column nowrap
  justify-content: space-between
  align-items: stretch

</style>
