<template lang="pug">
  section
    .inner
      h1.color-blue Завершенные: 2

      .h6 Приём

      table.t-style1
        tr
          th.text-center №

          th.text-center Дата

          th Житель

          th.w-25 Адрес

          th Примечания

          th

        tr.-no-hover
          td.text-center
            .t-style1-date.-blue №1234

          td.text-center
            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            .t-style1-user
              b Иван Сергеевич Иванющенко

              i л/с 340000238 ООО ГУЖФ

          td 134004, Мурманская обл., г. Мурмаши, Ул. Ленина, д. 1, кв. 24

          td Тут примечания, которые можно будет написать

          td.text-right
            router-link.t-style1-edit.icon.i_edit(:to="'/inspector/orders/' + 2")

        tr.-no-hover
          td.text-center
            .t-style1-date.-blue №1234

          td.text-center
            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            .t-style1-user
              b Иван Сергеевич Иванющенко

              i л/с 340000238 ООО ГУЖФ

          td 134004, Мурманская обл., г. Мурмаши, Ул. Ленина, д. 1, кв. 24

          td Тут примечания, которые можно будет написать

          td.text-right
            router-link.t-style1-edit.icon.i_edit(:to="'/inspector/orders/' + 2")

        tr.-no-hover
          td.text-center
            .t-style1-date.-blue №1234

          td.text-center
            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            .t-style1-user
              b Иван Сергеевич Иванющенко

              i л/с 340000238 ООО ГУЖФ

          td 134004, Мурманская обл., г. Мурмаши, Ул. Ленина, д. 1, кв. 24

          td Тут примечания, которые можно будет написать

          td.text-right
            router-link.t-style1-edit.icon.i_edit(:to="'/inspector/orders/' + 2")

      .h6 Сдача

      table.t-style1
        tr
          th.text-center №

          th.text-center Дата

          th Житель

          th.w-25 Адрес

          th Примечания

          th

        tr.-no-hover
          td.text-center
            .t-style1-date.-blue №1234

          td.text-center
            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            .t-style1-user
              b Иван Сергеевич Иванющенко

              i л/с 340000238 ООО ГУЖФ

          td 134004, Мурманская обл., г. Мурмаши, Ул. Ленина, д. 1, кв. 24

          td Тут примечания, которые можно будет написать

          td.text-right
            router-link.t-style1-edit.icon.i_edit(:to="'/inspector/orders/' + 2")
</template>

<script>
export default {
  name: 'Completed',

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

.h6
  font-style: italic
  font-size: 12px
  font-weight: normal
  color: $color-blue
  margin-bottom: 5px

tr
  td, th
    border-bottom: 1px solid #D8D8D8

  &:last-child
    td
      border-bottom: 0

  &:nth-child(2n)
    background: transparent

h1
  span
    margin-right: 30px

</style>
