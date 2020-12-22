<template lang="pug">
  section
    .t-style
      .t-style-heading
        .t-style-heading-left
          .t-style-title Заявка №  662375

          .t-style-date от 04 августа 2020 г.

          .t-style-label
            span Новая!
            i.icon.i_bell

        .t-style-heading-right
          .t-style-user Инспектор: Иванов Анатолий Борисович

          .btn.-min Взять в работу

          .btn.-min.-red Отклонить

      .t-style-body
        .t-style-item
          b Субьект РФ
          i Ленинградская обл.

        .t-style-item
          b Город, село
          i село Ополье

        .t-style-item
          b Район
          i Кингисеппский

      .t-style-body
        .t-style-item
          b В\г №
          i 135

        .t-style-item
          b Адрес
          i Ул. Зеленая, д.5, кв. 1

        .t-style-item
          b Год постройки
          i 1992

      .t-style-body
        .t-style-item
          b Материал стен
          i Бетон

        .t-style-item
          b Материал перекрытий
          i Бетон

        .t-style-item
          b Этажность
          i 5

      .t-style-body
        .t-style-item
          b Количество подъездов
          i 3

        .t-style-item
          b Количество квартир
          i 15

        .t-style-item
          b Этаж
          i 2

      .t-style-body
        .t-style-item
          b Наличие подвала
          i нет

        .t-style-item
          b Наличие чердака
          i нет

        .t-style-item
          b Наличие лифта
          i нет

      .t-style-body
        .t-style-item
          b Жилая площадь
          i 33 м2

        .t-style-item
          b Количество комнат
          i 2

        .t-style-item
          b Высота потолка
          i 3 м

    Act

</template>

<script>
import Act from '@/components/inspector/Act.vue';

export default {
  name: 'Orders',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { Act },
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

</style>
