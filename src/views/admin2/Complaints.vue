<template lang="pug">
  section.complaints
    .inner
      h1.color-blue Новая жалоба

      .flex-row
        .flex-row-item.w-50
          form.complaints-form(novalidate)
            .complaints-form-item
              textarea.complaints-form-input(placeholder="Введите текст жалобы")

              .complaints-form-add-file.icon.i_add-file(title="Добавить файл")

            button.btn.-mdl(type="button") Отправить

        .flex-row-item.w-50
          p: i Ответ на вашу жалобу будет отправлен <br> на номер телефона, указанный в вашем <br>профиле.

    .inner
      h2.h1.color-blue Предыдущие жалобы

      table.t-style1
        tr
          th.text-center № Дата

          th.w-30 Текст заявки

          th Статус

          th Результат

          th Оценить качество работы

          th

        tr
          td.text-center
            .t-style1-date.-green №1234

            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            i В течение длительного времени не устраняются проблемы с отоплением и отсутствием освещения

          td
            .t-style1-label.-green В работе

          td --

          td
            .t-style1-rating
              .icon.i_star(v-for="item in 10")

          td.text-right
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf")
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf-blue")

        tr(v-for="item in 5")
          td.text-center
            .t-style1-date №1234

            div: i 27.08.20

            .t-style1-time
              .icon.i_time
              span: i 10:21

          td
            i В течение длительного времени не устраняются проблемы с отоплением и отсутствием освещения

          td
            .t-style1-label
              | Выполнена
              div 28.05.20

          td Произведен ремонт

          td
            .t-style1-rating
              .icon.i_star-full(v-for="item in 9")

              .icon.i_star-full

          td.text-right
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf")
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf-blue")
</template>

<script>
export default {
  name: 'Complaints',

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

.complaints-form
  .complaints-form-add-file
    cursor: pointer
    position: absolute
    right: 10px
    bottom: 15px
    color: $color-blue
    font-size: 2em

  .complaints-form-item
    margin-bottom: 18px
    position: relative

  textarea.complaints-form-input
    height: 125px

  .complaints-form-input
    resize: none
    background: #FFFFFF
    border: 1px solid #D8D8D8
    border-radius: 5px
    padding: 12px 16px
    width: 100%

    &:focus
      border-color: $color-blue

.inner
  margin-bottom: 10px

  &:last-child
    margin-bottom: 0

</style>
