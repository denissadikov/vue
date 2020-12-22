<template lang="pug">
  section.counters
    .inner
      h1.color-blue Счетчики: показания

      table.t-style1
        tr
          th Счетчик <br>серийный №

          th Предыдущие <br>показания

          th Дата предыдущих <br>показаний

          th Текущие <br>показания

          th Дата сдачи <br>показаний

          th Средний <br>расход

          th.w-15 Дата поверки <br>счетчика

        tr
          td
            .t-style1-icon-title
              .icon.i_gas
              div ТПЛ 34314281

          td: b 33116

          td 25.08.2020

          td: input.input-text.-min.-border.t-style1-input(maxlength="150" value="")

          td 25.08.2020

          td 11333

          td
            .t-style1-str-icon
              span сентябрь 2020
              .t-style1-popover-wrapper
                .icon.i_warn1

                .t-style1-popover
                  p Срок действия вашего счетчика <br> истекает через

                  .t-style1-popover-head <span>3</span> дня <span>15</span> часов

                  .btn.-mdl.-red Заказать поверку

        tr
          td
            .t-style1-icon-title
              .icon.i_bad-cold
              div ТПЛ 34314281

          td: b 33116

          td 25.08.2020

          td 444566

          td 25.08.2020

          td 11333

          td
            .t-style1-str-icon
              span сентябрь 2020

        tr
          td
            .t-style1-icon-title
              .icon.i_gas
              div ТПЛ 34314281

          td: b 33116

          td 25.08.2020

          td 444566

          td 25.08.2020

          td 11333

          td
            .t-style1-str-icon
              span сентябрь 2020

        tr
          td
            .t-style1-icon-title
              .icon.i_bad
              div ТПЛ 34314281

          td: b 33116

          td 25.08.2020

          td 444566

          td 25.08.2020

          td 11333

          td
            .t-style1-str-icon
              span сентябрь 2020

        tr
          td
            .t-style1-icon-title
              .icon.i_bold
              div ТПЛ 34314281

          td: b 33116

          td 25.08.2020

          td 444566

          td 25.08.2020

          td 11333

          td
            .t-style1-str-icon
              span сентябрь 2020
</template>

<script>
import NotFound from '@/components/admin2/NotFound.vue';

export default {
  name: 'Counters',

  data() {
    return {
      ready: false,
    };
  },

  methods: {},

  mounted() {
    this.ready = true;
  },

  components: { NotFound },
};
</script>

<style lang="sass">
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

</style>
