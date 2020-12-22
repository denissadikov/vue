<template lang="pug">
  section.receipts
    .inner
      h1.color-blue Квитанция №1122334445 на оплату за июль 2020

      table.t-style1
        tr
          th Вид платежа

          th.text-center Размер платы

          th.text-center Расход(норматив)

          th.text-center Стоимость

          th.text-center Изм. размера платы

          th.text-center Мера соцподдержки

          th.text-center Начислено

        tr
          td: i Плата за наем

          td.text-center --

          td.text-center --

          td.text-center --

          td.text-center --

          td.text-center --

          td.text-center --

        tr(v-for="item in 7")
          td: i Управление многоквартирнным домом

          td.text-center 3 р. 00 коп.

          td.text-center --

          td.text-center 33 р. 00 коп.

          td.text-center --

          td.text-center --

          td.text-center 33 р. 00 коп.

        tr
          td(colspan=6) ИТОГО

          td.text-right: .total 231 р. 00 коп.

      .btn Оплатить
</template>

<script>
import TheFilter from '@/components/admin2/TheFilter.vue';

export default {
  name: 'Receipt',

  data() {
    return {
      ready: false,
      showFilter: null,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { TheFilter },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.total
  font-weight: 500
  color: $color-blue
  font-size: 16px

.receipts
  position: relative

</style>
