<template lang="pug">
  section.receipts
    .inner
      .receipts-filter
        .btn.-min.-grey
          span Оплаченные
          .btn-x.icon.i_x

        .btn.-min.-grey
          span Квартплата
          .btn-x.icon.i_x

        .receipts-filter-trigger.icon.i_filter(@click="showFilter = !showFilter")

        TheFilter(@close="showFilter = null" v-if="showFilter")

      div
        h1.color-blue Квитанции

      table.t-style1
        tr
          th Месяц

          th Назначение

          th Сумма

          th Пени

          th Задолженность

          th.w-20

          th

        tr(
          @click="$router.push('/admin/2/receipts/' + index)"
          v-for="(item, index) in 7")
          td: i Июнь 2020

          td: b Квартплата

          td: b.line-through 1 667 р. 00 коп.

          td 00 р. 00 коп.

          td 00 р. 00 коп.

          td
            .t-style1-pay-trigger.hidden
              .icon.i_card
              span Перейти к оплате

            .t-style1-pay Оплачено  24.06.2020

          td.text-right
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf")
            svg.icon-svg.icon-svg-pdf
              use(xlink:href="../../assets/images/sprite.svg#pdf-blue")

</template>

<script>
import TheFilter from '@/components/admin2/TheFilter.vue';

export default {
  name: 'Receipts',

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

.receipts
  position: relative

  .receipts-filter-trigger
    color: $color-blue
    cursor: pointer
    margin-left: 25px

  .receipts-filter
    position: relative
    background: $color-white
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25)
    border-radius: 5px
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    padding: 3px 14px
    min-height: 27px
    float: right

    .btn
      margin-left: 9px

      &:last-child
        margin-left: 0

  .receipts-head
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center
    margin-bottom: 13px

</style>
