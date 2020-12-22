<template lang="pug">
  .filter(v-click-outside="onClickOutside")
    .filter-close.icon.i_x(@click="$emit('close')")

    .filter-title Назначение квитанции

    .filter-set
      .btn.-min.-grey
        span Квартплата
        .btn-x.icon.i_x

      .btn.-min.-border.-grey
        span Электричество

      .btn.-min.-border.-grey
        span Газ

      .btn.-min.-border.-grey
        span ГВС

      .btn.-min.-border.-grey
        span ХВС

    .filter-title Тип квитанции

    .filter-set
      .btn.-min.-grey
        span Оплаченные
        .btn-x.icon.i_x

      .btn.-min.-border.-grey
        span Неоплаченные

    .filter-title
      span За период

      .input-text-icon-wrapper
        DatePicker(
          range
          popup-class="date-picker"
          v-model="date"
          input-class="input-text -min -border -white"
          :editable="false"
          title-format="DD.MM.YY"
          format="DD.MM.YY")

    br

    button.btn.w-100.-mdl(type="button") Применить

</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ru';

export default {
  name: 'TheFilter',

  data() {
    return {
      ready: false,
      date: null,
    };
  },

  methods: {
    onClickOutside(e) {
      if (e.target.closest('mx-datepicker-popup')) {
        this.$emit('close');
      }
    },
  },

  mounted() {
    this.ready = true;
  },

  components: { DatePicker },
};
</script>

<style lang="sass" scoped>
@import "../../styles/mixins/mixins"
@import "../../styles/vars/variables"

.filter
  position: absolute
  top: 0
  right: 0
  background: $color-white
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25)
  border-radius: 5px
  width: 257px
  padding: 20px

  .mx-datepicker
    width: auto

  .filter-set
    margin-bottom: 10px

    .btn
      margin-right: 10px
      margin-bottom: 10px
      min-width: 65px

      &:last-child
        margin-right: 0

  .filter-title
    margin-bottom: 12px
    font-weight: 500
    color: $color-blue
    font-size: 12px
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    align-items: center

    span
      white-space: nowrap
      margin-right: 20px

  .filter-close
    position: absolute
    top: 10px
    right: 10px
    color: #D2D3D4
    cursor: pointer

</style>
