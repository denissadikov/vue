<template lang="pug">
  section.accounts
    .inner.accounts-body
      h1.color-blue Лицевой счет № 0123456879707

      .flex-row.-stretch
        .flex-row-item.w-50
          table.accounts-table
            tr
              td.accounts-table-title Владелец
              td(colspan=3): i Семенов-Тяншанский Иван Иванович

            tr
              td.accounts-table-title Адрес
              td(colspan=3): i Маршала Блюхера пр.4/2 <br> г.Санкт-Петерург

            tr
              td.accounts-table-title Телефон <br>и e-mail
              td(colspan=3): i + 7 (999) 123 - 45 - 67 <br> name@name.com

            tr
              td.accounts-table-title Помещение
              td: i кв. 29
              td.accounts-table-title Тип <br>помещения
              td: i Квартира

            tr
              td.accounts-table-title Общая площадь
              td: i 33 м2
              td.accounts-table-title Жилая площадь
              td: i 22 м2

            tr
              td.accounts-table-title Зарегистрировано
              td: i 0 человек
              td.accounts-table-title Проживает
              td: i 2 человека

        .flex-row-item.w-30
          .accounts-counters
            .accounts-counters-title
              .icon.i_i5
              span Счетчики

            .user-counters
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

              .user-counters-btns
                .btn.-mdl.w-100 Передать показания

        .flex-row-item.w-20
          .accounts-balance
            .accounts-balance-title
              b Баланс

              span - 1 285 Р

            .accounts-balance-last
              span Последний платеж:

              span 12.12.2020

            .btn.-mdl.w-100 Оплатить

    .accounts-btns
      .btn.-mdl Добавить лицевой счет

</template>

<script>
export default {
  name: 'Accounts',

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

.accounts
  .flex-row
    +media($landTablet)
      display: block

      .flex-row-item
        width: 100%
        margin-bottom: 20px

    +media($port)
      display: block

      .flex-row-item
        width: 100%
        margin-bottom: 20px

  .accounts-balance-last
    font-weight: 300
    font-style: italic
    color: #525C65
    margin-bottom: 20px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline
    font-size: 10px

  .accounts-balance-title
    margin-bottom: 9px
    font-weight: 500
    color: $color-red
    font-size: 16px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: baseline

    b
      font-weight: 500
      font-size: 18px

  .accounts-balance
    background: $color-white
    box-shadow: $shadow-container
    border-radius: $radius-container
    padding: 12px

  .accounts-counters
    height: 100%
    background: $color-white
    box-shadow: $shadow-container
    border-radius: $radius-container

    .user-counters-btns
      padding: 18px
      padding-top: 0

    .user-counters
      padding: 0

      .user-counters-num
        width: auto
        margin-left: 10px

      .user-counters-date
        width: auto

      .user-counters-item
        padding-left: 16px
        padding-right: 16px

    .accounts-counters-title
      display: flex
      flex-flow: row nowrap
      justify-content: flex-start
      align-items: center
      margin-bottom: 0px
      color: #525C65
      font-size: 18px
      font-weight: 500
      padding: 15px 20px

      .icon
        margin-right: 12px
        color: $color-blue
        font-size: 1.1em

  .accounts-table
    height: 100%
    background: $color-white
    box-shadow: $shadow-container
    border-radius: $radius-container
    width: 100%
    font-size: 12px
    color: #525C65
    line-height: 1.166666667
    border-spacing: 0
    border-collapse: collapse

    .accounts-table-title
      font-weight: 500
      font-size: 14px
      line-height: 1

    tr:nth-child(2n)
      td
        background: rgba(241, 242, 242, .75)

    td
      padding: 13px 19px
      vertical-align: middle

  .flex-row
    margin: 0 -5px

    .flex-row-item
      padding-left: 5px
      padding-right: 5px

  .accounts-title
    color: $color-blue

  .accounts-btns
    padding: 0 25px

  .accounts-body
    margin-bottom: 35px

    &:last-child
      margin-bottom: 0

</style>
